import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { flyIn, halo } from '../../animations';


@Component({
    selector: 'sgm-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class LineComponent implements OnInit {
    data: any;
    canvas;
    canvasDom;
    @Input('data') dataConf: any;
    @Output('show') clickEvent = new EventEmitter<void>();
    // @Output('close') closeEvent = new EventEmitter<void>();
    @HostListener('click', ['$event']) onClick(e) {
        console.log(e);
        this.clickEvent.emit();

    }
    constructor(
    ) {
        this.canvas = false;
    }

    ngOnInit() {
        this.data = this.dataConf || {};
        console.log(this.data);
        console.log(this.canvasDom);


        this.getCanvasStyle();
        let canvasDom = document.getElementById('sgm-canvas');
        if (!canvasDom) {
            console.log('需要创建画布');
            this.canvas = true;
        }
        setTimeout(() => {
            canvasDom = document.getElementById('sgm-canvas');
            this.line(canvasDom);
        }, 15);

    }
    getCanvasStyle() {
        let x1 = parseInt(this.data.beginPointX, 10);
        let y1 = parseInt(this.data.beginPointY, 10);
        let x2 = parseInt(this.data.endPointX, 10);
        let y2 = parseInt(this.data.endPointY, 10);
        let x = Math.min(x1, x2);
        let y = Math.min(y1, y2);
    }

    line(canvasDom) {
        // canvasDom.width = 1024;
        // canvasDom.height = 580;
        const cxt = canvasDom.getContext('2d');
        cxt.lineWidth = this.data.style.lineWidth;
        cxt.strokeStyle = this.data.style.strokeStyle;
        cxt.moveTo(this.data.beginPointX, this.data.beginPointY);
        cxt.lineTo(this.data.endPointX, this.data.endPointY);

        cxt.stroke();
    }

    setStyle() {
        // console.log(this.data.style);
        if (!this.data.style) return;

        const styles = {

            'zIndex': this.data.style.zIndex,

        };
        return styles;
    }


}
