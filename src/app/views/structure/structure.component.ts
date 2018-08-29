import { Component } from '@angular/core';
import { Resource } from '../../interface/resources';
import { CommunicationService } from '../../components/communication';

import { StructureService } from './structure.service'

declare var $: any, Ps: any;
let waveTimer: any;
let transformerAngle: any = 0;
@Component({
    selector: 'structure',
    styleUrls: ['structure.component.scss'],
    providers: [
    ],
    templateUrl: 'struture.component.html'
})
export class StructureComponent {
    public imgIndex: number = 2;

    public plusOrReduce: boolean = true;  // 变压器波形选择



    constructor(
        public structureService: StructureService,
        private communicationService: CommunicationService,

    ) { }
    structureServiceMdata = this.structureService.Mdata[this.imgIndex];

    ngOnInit() {
        Ps.initialize(document.getElementById('alert-wrap'));
        this.showContent('cell');
    }
    closeAlertBox() {
        $(".alert-wrap").hide();
        if (waveTimer) { clearTimeout(waveTimer) };
    }
    showContent(object: string) {
        let vm = this;
        $(".alert-wrap").show();
        switch (object) {
            case 'stator':
                vm.imgIndex = 0;
                $(".transformer").hide();
                vm.structureServiceMdata = vm.structureService.Mdata[vm.imgIndex];
                if (waveTimer) { clearTimeout(waveTimer) };
                //进度记录
                this.communicationService.setAction({ id: 'ver005', flag: '', sub: '', value: undefined });
                break;

            case 'rotor':
                vm.imgIndex = 1;
                $(".transformer").hide();
                vm.structureServiceMdata = vm.structureService.Mdata[vm.imgIndex];
                if (waveTimer) { clearTimeout(waveTimer) };
                //进度记录
                this.communicationService.setAction({ id: 'ver006', flag: '', sub: '', value: undefined });
                break;

            case 'cell':
                vm.imgIndex = 2;
                $(".transformer").show();
                vm.structureServiceMdata = vm.structureService.Mdata[vm.imgIndex];
                vm.svgAnimate();
                //进度记录
                this.communicationService.setAction({ id: 'ver007', flag: '', sub: '', value: undefined });
                break;

        }
        Ps.update(document.getElementById('alert-wrap'));

    }
    /**
     * svg波形动画
     */
    svgAnimate() {
        var x = 50, y = 0, wave1, wave2;
        let vm = this;
        //波形更高
        function plus() {
            x++;
            y--;
            if (x >= 50) {
                vm.plusOrReduce = false;
            }
            wave1 = "M0 30 C0 30 20 " + (30 - x) + " 40 30 C40 30 60 " + (30 + x) + " 80 30 C80 30 100 " + (30 - x) + " 120 30 C120 30 140 " + (30 + x) + " 160 30 C160 30 180 " + (30 - x) + " 200 30 ";
            wave2 = "M0 30 C0 30 20 " + (30 + y) + " 40 30 C40 30 60 " + (30 - y) + " 80 30 C80 30 100 " + (30 + y) + " 120 30 C120 30 140 " + (30 - y) + " 160 30 C160 30 180 " + (30 + y) + " 200 30 ";

            // wave1 = "M0 30 C0 30 15 " + (25 - x) + " 30 30 C30 30 45 " + (25 + x) + " 60 30 C60 30 75 " + (25 - x) + " 90 30 C90 30 105 " + (25 + x) + " 120 30 C120 30 145 " + (25 - x) + " 150 30";
            // wave2 = "M0 30 C0 30 15 " + (25 + y) + " 30 30 C30 30 45 " + (25 - y) + " 60 30 C60 30 75 " + (25 + y) + " 90 30 C90 30 105 " + (25 - y) + " 120 30 C120 30 145 " + (25 + y) + " 150 30 C150 30 175 " + (25 - y) + " 180 30";
            // wave2 = "M0 60 C0 60 30 " + (60 + y) + " 60 60 C60 60 90 " + (60 - y) + " 120 60 C120 60 150 " + (60 + y) + " 180 60 C180 60 210 " + (60 - y) + " 240 60 C240 60 270 " + (60 + y) + " 300 60";

            $("#svg-wave1").attr("d", wave1);
            $("#svg-wave2").attr("d", wave2);
        }
        //波形更短
        function reduce() {
            x--;
            y++;
            if (x <= 0) {
                vm.plusOrReduce = true;
            }
            // wave1 = "M0 30 C0 30 15 " + (25 - x) + " 30 30 C30 30 45 " + (25 + x) + " 60 30 C60 30 75 " + (25 - x) + " 90 30 C90 30 105 " + (25 + x) + " 120 30 C120 30 145 " + (25 - x) + " 150 30";
            // wave2 = "M0 30 C0 30 15 " + (25 + y) + " 30 30 C30 30 45 " + (25 - y) + " 60 30 C60 30 75 " + (25 + y) + " 90 30 C90 30 105 " + (25 - y) + " 120 30 C120 30 145 " + (25 + y) + " 150 30 C150 30 175 " + (25 - y) + " 180 30";
            wave1 = "M0 30 C0 30 20 " + (30 - x) + " 40 30 C40 30 60 " + (30 + x) + " 80 30 C80 30 100 " + (30 - x) + " 120 30 C120 30 140 " + (30 + x) + " 160 30 C160 30 180 " + (30 - x) + " 200 30 ";
            wave2 = "M0 30 C0 30 20 " + (30 + y) + " 40 30 C40 30 60 " + (30 - y) + " 80 30 C80 30 100 " + (30 + y) + " 120 30 C120 30 140 " + (30 - y) + " 160 30 C160 30 180 " + (30 + y) + " 200 30 ";

            $("#svg-wave1").attr("d", wave1);
            $("#svg-wave2").attr("d", wave2);
        }
        //波形的选择
        function choose() {
            if (vm.plusOrReduce) {
                plus();
            } else {
                reduce();
            }
            rotate();
        }
        //变压器中心旋转
        function rotate() {
            transformerAngle++;
            if (transformerAngle == 360) {
                transformerAngle = 0;
            }
            $(".transformer_rotate").css({ "transform": "rotate(" + transformerAngle + "deg)", "-ms-transform": "rotate(" + transformerAngle + "deg)", "-moz-transform": "rotate(" + transformerAngle + "deg)", "-webkit-transform": "rotate(" + transformerAngle + "deg)" });

        }
        /**
         * 定时器
         * @param f
         * @param time
         * @returns {Function}
         * @private
         */
        function _time(f, time) {
            if (waveTimer) { clearTimeout(waveTimer) }
            return function back() {
                if (waveTimer) { clearTimeout(waveTimer) }
                waveTimer = setTimeout(function () {
                    f();
                    back();
                }, time)

            }
        }
        _time(choose, 30)();
    }
}

// }



