import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../components/dashboard';
// import { ChargeSwitchService } from '../../components/charge_switch';
import { GearPanelService } from '../../components/gear_panel/gear_panel.service';
import { AppService } from '../../index/app.service';

// import {clearTimeout} from 'timers';
// import {setTimeout} from 'timers';
declare let $: any,
    InitializePrinciple: any,
    principleAnimate: any,
    circuitAnimate: any;


@Component({

    selector: 'principle',
    styleUrls: ['principle.component.scss'],
    providers: [
    ],
    templateUrl: './principle.component.html'
})
export class PrincipleComponent implements OnInit {
    public dynamoTimer: any; // 原理页面动画定时器
    public dynamoAngle: number = 0; // 磁铁旋转角度
    public oldtime = 0;
    oldSpeed = 0;
    accOrMin = true;
    magnetic = false;
    constructor(private dashboardService: DashboardService, private gearpanelService: GearPanelService, private appService: AppService) {
    }
    ngOnInit() {
        // clearTimeout(this.dynamoTimer);
        this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() });
        this.dashboardService.setGearsFun('on', () => { return this.onGearFun() });
        this.dashboardService.setSpeedIsFixedFun(0, () => { return this.setSpeedIsFixedFun() });

        this.gearpanelService.setShiftFun('reverse', () => { return this.reverseFun() });   // r档
        this.gearpanelService.setShiftFun('neutral', () => { return this.neutralFun() });    // n档
        this.gearpanelService.setShiftFun('drive', () => { return this.driveFun() });   // d档

        this.gearpanelService.setBrakesFun('press', () => { return this.pressBrakeFun() }); // 按下刹车
        this.gearpanelService.setBrakesFun('loosen', () => { return this.loosenBrakeFun() });   // 松开
        this.gearpanelService.setAcceleratorsFun('add', () => { return this.addAcceleratorFun() }); // 加油门
        this.gearpanelService.setAcceleratorsFun('minus', () => { return this.minusAcceleratorFun() }); // 减油门
        this.gearpanelService.setAcceleratorsFun('loosen', () => { return this.loosenAcceleratorFun() });   // 松油门
        // this.gearpanelService.setAcceleratorsFun('rack', () => { return this.rackAcceleratorFun() })

        this.dashboardService.setspeedIsStatusFun('follow', () => { return this.setspeedIsStatusFun() });  // 速度不再降
        this.dashboardService.setspeedIsStatusFun('rack', () => { return this.setspeedIsStatusFun1() });  // 速度不再降

        this.gearpanelService.setStopAnimate(() => { return this.onGearFun() })
    }
    // lock
    lockGearFun() {
        this.InitializePrinciple();
    }
    // start
    onGearFun() {
        this.principleAnimate();
    }
    // 倒档执行的方法
    reverseFun() {
        console.log('r档');
    }
    // 空挡执行的方法
    neutralFun() {
        this.InitializePrinciple();
        console.log('n档');
    }
    // D挡执行的方法
    driveFun() {
    }
    // 刹车
    pressBrakeFun() {

    }
    // 松开刹车
    loosenBrakeFun() {

        if (!this.gearpanelService.isBrake && this.dashboardService.stalls) {
            if (this.gearpanelService.controlStalls === 3 || this.gearpanelService.controlStalls === 1) {
                this.animateStart(200);
            }
        }

    }
    // 加油门
    addAcceleratorFun() {
        if (!this.gearpanelService.isBrake && this.dashboardService.stalls) {
            if (this.gearpanelService.controlStalls === 3 || this.gearpanelService.controlStalls === 1) {

                $('.fans-mask').stop().fadeIn().hide();
                this.accOrMin = true;
                // this.magnetic =false;
            }
        }
        // this.animateStart(200)
    }
    // 减油门
    minusAcceleratorFun() {
        if (!this.gearpanelService.isBrake && this.dashboardService.stalls) {
            if (this.gearpanelService.controlStalls === 3 || this.gearpanelService.controlStalls === 1) {
                this.accOrMin = false;
                // 磁场变化
                this.magneticLight();
                $('.fans1').attr('class', 'fans1 fan-grey');
                $('.fans2').attr('class', 'fans2 fan-grey');
                $('.fans3').attr('class', 'fans3 fan-grey')

            }
        }
        // this.animateStart(200)
    }
    // 松开油门
    loosenAcceleratorFun() {
        if (!this.gearpanelService.isBrake && this.dashboardService.stalls) {
            if (this.gearpanelService.controlStalls === 3 || this.gearpanelService.controlStalls === 1) {
                this.accOrMin = false;
                // 磁场变化
                this.magneticLight();
                $('.fans1').attr('class', 'fans1 fan-grey');
                $('.fans2').attr('class', 'fans2 fan-grey');
                $('.fans3').attr('class', 'fans3 fan-grey');
            }
        }
        // this.animateStart(200)
    }
    // 速度跟随
    setspeedIsStatusFun() {
        if (!this.gearpanelService.isBrake && this.dashboardService.stalls) {
            this.dataCtrlAnimate();
        }
    }
    // 油门不再降
    setspeedIsStatusFun1() {
        if (this.dashboardService.stalls) {
            if (this.gearpanelService.controlStalls === 3 || this.gearpanelService.controlStalls === 1) {
                // if (this.dynamoTimer) { clearTimeout(this.dynamoTimer) }

                $('.fans-mask').stop().fadeIn().hide();
                this.accOrMin = true;
                // this.magnetic =false;

            }
        }

    }
    // 速度为0
    setSpeedIsFixedFun() {
        if (this.gearpanelService.isBrake && this.dashboardService.stalls) {
            if (this.gearpanelService.controlStalls === 3 || this.gearpanelService.controlStalls === 1) {
                this.InitializePrinciple();
            }
        }
    }
    // 原理lock界面
    InitializePrinciple() {
        // if (this.dynamoTimer) { clearTimeout(this.dynamoTimer) }
        this.accOrMin = true;
        this.dynamoAngle = 0;
        $('.fans-mask').stop().fadeIn().hide();
        $('.prin-line').css('left', '56px');
        $('.megnet').css({ 'transform': 'rotate(0deg)', '-ms-transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)', '-webkit-transform': 'rotate(0deg)' });
        $('.fans1').attr('class', 'fans1 fan-grey');
        $('.fans2').attr('class', 'fans2 fan-grey');
        $('.fans3').attr('class', 'fans3 fan-grey');
    }

    // 原理页面on档动画
    principleAnimate() { }
    // 线条动画
    lineAnmate(acc) {
        let vm = this;
        let lineLeft;    // 橙色线的位置
        // console.log(acc, vm.dynamoAngle);
        if (acc) {
            // 怠速和加速都是从左向右
            lineLeft = 56 + Number(Math.abs(vm.dynamoAngle) * 0.58);
        } else {
            // 减速的时候要从右向左
            lineLeft = 258 - Number(Math.abs(vm.dynamoAngle) * 0.58);
        }
        // 橙色线条动画
        $('.prin-line').css('left', parseInt(lineLeft) + 'px');
    }
    /**
     * 电机动画
     */
    animateStart(time) {
        console.log(123123132123123);
        let vm = this;
        if (vm.dynamoTimer) { clearTimeout(vm.dynamoTimer) }

        /**
         * 旋转动画
         * @private
         */
        function _rotate() {

            // r,d档位选择是正传还是反转
            if ((vm.gearpanelService.isBrake)) {
                return;
            }
            if (vm.gearpanelService.controlStalls === 3) {
                vm.dynamoAngle = vm.dynamoAngle + 10;
                $('.megnet').css({ 'transform': 'rotate(' + vm.dynamoAngle + 'deg)', '-ms-transform': 'rotate(' + vm.dynamoAngle + 'deg)', '-moz-transform': 'rotate(' + vm.dynamoAngle + 'deg)', '-webkit-transform': 'rotate(' + vm.dynamoAngle + 'deg)' });
            } else if (vm.gearpanelService.controlStalls === 1) {
                vm.dynamoAngle = vm.dynamoAngle - 10;
                $('.megnet').css({ 'transform': 'rotate(' + vm.dynamoAngle + 'deg)', '-ms-transform': 'rotate(' + vm.dynamoAngle + 'deg)', '-moz-transform': 'rotate(' + vm.dynamoAngle + 'deg)', '-webkit-transform': 'rotate(' + vm.dynamoAngle + 'deg)' });
            }
            // 转一圈置0
            if (vm.dynamoAngle == 360 || vm.dynamoAngle == -360) {
                vm.dynamoAngle = 0;
                $('.megnet').css({ 'transform': 'rotate(' + vm.dynamoAngle + 'deg)', '-ms-transform': 'rotate(' + vm.dynamoAngle + 'deg)', '-moz-transform': 'rotate(' + vm.dynamoAngle + 'deg)', '-webkit-transform': 'rotate(' + vm.dynamoAngle + 'deg)' });
            }
            // 磁铁旋转


            // 选择在加速还是在减速情况下
            if (vm.accOrMin) {
                // 动画细节，每个角度什么颜色
                if (vm.gearpanelService.controlStalls === 3) {
                    vm.rotateDetail();
                } else if (vm.gearpanelService.controlStalls === 1) {
                    vm.rotateDetail1();
                }
                // vm.magnetic =false;
            } else {
                if (!vm.magnetic) {
                    // 如果是减速情况，则磁场不变化，指是闪烁

                    vm.magnetic = true;
                }

            }

            // 橙色线条动画
            vm.lineAnmate(vm.accOrMin);
        }



        /**
         * 定时器
         * @param f
         * @param time
         * @returns {Function}
         * @private
         */
        // tslint:disable-next-line:no-shadowed-variable
        function _time(f, time) {
            if (vm.dynamoTimer) { clearTimeout(vm.dynamoTimer) }
            return function back() {
                // if (vm.dynamoTimer) { clearTimeout(vm.dynamoTimer) }
                let newtime = vm.dataCtrlAnimate();
                vm.dynamoTimer = setTimeout(function () {
                    f();
                    back();
                }, newtime);
            }
        }
        _time(_rotate, time)();
    }
    /**
     * 旋转动画细节部分
     */
    rotateDetail() {
        let vm = this;
        $('.fans-mask').stop().fadeIn().hide();
        if (vm.dynamoAngle == 0) {
            $('.fans1').attr('class', 'fans1 fan-blue');
            $('.fans2').attr('class', 'fans2 fan-red');
            $('.fans3').attr('class', 'fans3 fan-grey');

        } else if (vm.dynamoAngle == 60) {
            $('.fans1').attr('class', 'fans1 fan-grey');
            $('.fans2').attr('class', 'fans2 fan-red');
            $('.fans3').attr('class', 'fans3 fan-blue');
        } else if (vm.dynamoAngle == 120) {
            $('.fans1').attr('class', 'fans1 fan-red');
            $('.fans2').attr('class', 'fans2 fan-grey');
            $('.fans3').attr('class', 'fans3 fan-blue');
        } else if (vm.dynamoAngle == 180) {
            $('.fans1').attr('class', 'fans1 fan-red');
            $('.fans2').attr('class', 'fans2 fan-blue');
            $('.fans3').attr('class', 'fans3 fan-grey');
        } else if (vm.dynamoAngle == 240) {
            $('.fans1').attr('class', 'fans1 fan-grey');
            $('.fans2').attr('class', 'fans2 fan-blue');
            $('.fans3').attr('class', 'fans3 fan-red');
        } else if (vm.dynamoAngle == 300) {
            $('.fans1').attr('class', 'fans1 fan-blue');
            $('.fans2').attr('class', 'fans2 fan-grey');
            $('.fans3').attr('class', 'fans3 fan-red');
        }
    }
    /**
     * 倒挡旋转动画细节
     */
    rotateDetail1() {
        let vm = this;
        $('.fans-mask').stop().fadeIn().hide();
        if (vm.dynamoAngle == 0) {
            $('.fans1').attr('class', 'fans1 fan-red');
            $('.fans2').attr('class', 'fans2 fan-grey');
            $('.fans3').attr('class', 'fans3 fan-blue');

        } else if (vm.dynamoAngle == -60) {
            $('.fans1').attr('class', 'fans1 fan-grey');
            $('.fans2').attr('class', 'fans2 fan-red');
            $('.fans3').attr('class', 'fans3 fan-blue');
        } else if (vm.dynamoAngle == -120) {
            $('.fans1').attr('class', 'fans1 fan-blue');
            $('.fans2').attr('class', 'fans2 fan-red');
            $('.fans3').attr('class', 'fans3 fan-grey');
        } else if (vm.dynamoAngle == -180) {
            $('.fans1').attr('class', 'fans1 fan-blue');
            $('.fans2').attr('class', 'fans2 fan-grey');
            $('.fans3').attr('class', 'fans3 fan-red');
        } else if (vm.dynamoAngle == -240) {
            $('.fans1').attr('class', 'fans1 fan-grey');
            $('.fans2').attr('class', 'fans2 fan-blue');
            $('.fans3').attr('class', 'fans3 fan-red');
        } else if (vm.dynamoAngle == -300) {
            $('.fans1').attr('class', 'fans1 fan-red');
            $('.fans2').attr('class', 'fans2 fan-blue');
            $('.fans3').attr('class', 'fans3 fan-grey');
        }
    }

    // 磁场闪烁
    magneticLight() {
        let hotarea = function () {
            $('.fans-mask').show().stop().fadeOut(300, function () {
                $('.fans-mask').fadeIn(300, function () {
                    hotarea();
                });
            })
        };
        hotarea();

    }

    // 
    dataCtrlAnimate() {
        let vm = this;
        // 首先是一定要在on档位,在r/d档位
        if (this.dashboardService.stalls) {
            // 在踩下刹车时
            if (this.gearpanelService.isBrake) {
                return 40;
            } else {

                let tireSpeed = 36;
                if (this.gearpanelService.controlStalls == 3) {

                    if (105 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 110) {

                        tireSpeed = 16;
                    }
                    if (100 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 105) {

                        tireSpeed = 18;
                    }
                    if (90 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 100) {

                        tireSpeed = 20;
                    }
                    if (70 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 90) {

                        tireSpeed = 25;
                    }
                    if (50 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 70) {

                        tireSpeed = 30;
                    }
                    if (30 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 50) {

                        tireSpeed = 35;
                    }
                    if (0 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 30) {
                        tireSpeed = 40;
                    }
                    if (this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x == 0) {

                    }
                } else if (this.gearpanelService.controlStalls === 1) {
                    if (35 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 40) {

                        tireSpeed = 16;
                    }
                    if (30 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 35) {

                        tireSpeed = 18;
                    }
                    if (25 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 30) {

                        tireSpeed = 20;
                    }
                    if (20 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 25) {

                        tireSpeed = 25;
                    }
                    if (15 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 20) {

                        tireSpeed = 30;
                    }
                    if (10 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 15) {

                        tireSpeed = 35;
                    }
                    if (0 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 10) {
                        tireSpeed = 40;
                    }
                    if (this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x == 0) {

                    }
                }
                return tireSpeed;
                // 页面动画控制，车轮
                // r

                // if (this.gearpanelService.controlStalls === 3) {
                //     if (vm.dynamoTimer) { clearTimeout(vm.dynamoTimer) }
                //     vm.animateStart(tireSpeed);
                // }
                // if (this.gearpanelService.controlStalls === 1) {
                //     if (vm.dynamoTimer) { clearTimeout(vm.dynamoTimer) }
                //     vm.animateStart(tireSpeed);

                // }



            }
        }
        return 40;

    }

}


