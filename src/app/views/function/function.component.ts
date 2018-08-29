import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../components/dashboard';
import { GearPanelService } from '../../components/gear_panel/gear_panel.service';
declare var $: any,
  InitializePrinciple: any,
  InitializeCircuit: any,
  principleAnimate: any,
  circuitAnimate: any;
@Component({
  selector: 'function',
  providers: [
  ],
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit {
  animateStatus = false;
  arrowTurnStatus = false;
  pageTimerFunction = [];
  oldSpeed = 0;
  times = 0;
  redPointsDirection = true;



  constructor(private dashboardService: DashboardService,
    private gearpanelService: GearPanelService) { }
  /**
   * 圆点动画,波形图
   * @param obj 运动对象
   * @param start
   * @param max
   * @param duration
   * @param direction 方向
   * @returns {boolean}
   */
  loop(obj, start, max, duration, direction) {
    let self = this;
    if (!obj) return false;
    start = start || 0;
    max = max || 48;
    duration = duration || 20;
    let timer = null;
    (function run() {
      $(obj).show();
      // 条件判断，以跳出循环动画
      if (obj.id === 'arrow-turn2') {
        if (!self.arrowTurnStatus) {
          clearTimeout(timer);
          $(obj).hide();
          return;
        }
      } else {
        if (!self.animateStatus) {
          clearTimeout(timer);
          $(obj).hide();
          return;
        }
      }
      if (start > max) start = 0;
      // 下面是每隔一段时间执行动画的业务逻辑部分，可以修改
      if (direction) {
        switch (obj.id) {
        }
      } else {
        switch (obj.id) {
          case 'arrow-turn2': obj.style.marginTop = start + 'px'; break;
        }
      }
      // 下面是红色圆点动画
      if (self.redPointsDirection) {
        switch (obj.id) {
          case 'redpointbox': obj.style.marginTop = start + 'px'; break;
        }
      } else {
        switch (obj.id) {
          case 'redpointbox': obj.style.marginTop = -start + 'px'; break;
        }
      }

      // 该帧动画执行完毕后，width + 1，然后进行下一帧动画
      start++;
      timer = setTimeout(run, duration);
    })();
  }
  /**
   * On档双绞线脉冲闪烁
   * @memberOf FunctionComponent
   */
  twistedPairSparkle(doOrfalse: boolean): void {
    let main = document.getElementById('arrow-turn2');
    let self = this;
    self.animateStatus = doOrfalse;
    this.loop(main, 0, 48, 20, '');
  }

  /**
   * On档制动踏板、油门踏板、换挡杆、信号线束变成蓝色并有蓝色箭头发送到整车控制器
   * @memberOf FunctionComponent
   */
  filesOflines(doOrfalse: boolean): void {
    if (doOrfalse) {
      $('.line7,.line2,.line3,.line3-1').show();
      let animateTime = 3000;
      let arrow1 = function () {
        $('.arrow1').show().stop().css({ 'left': '838px', 'top': '428px' }).animate({
          top: '238px'
        }, animateTime * (60 / 60), "linear", function () {
          $(this).hide();
          arrow1();
        })
      }
      let arrow2 = function () {
        $('.arrow2').show().stop().css({ 'left': '958px', 'top': '334px' }).animate({
          top: '264px'
        }, animateTime * (1), "linear", function () {
          $(this).hide();
          arrow2();
        })
      }
      let arrow3 = function () {
        $('.arrow3').show().stop().css({ 'left': '1087px', 'top': '317px', "transform": "rotate(0deg)" }).animate({
          top: '201px'
        }, animateTime * (44 / 55), "linear", function () {
          $(this).css({ 'left': '1080px', 'top': '201px', "transform": "rotate(-90deg)" }).stop().animate({
            left: '1028px'
          }, animateTime * (11 / 55), "linear", function () {
            $(this).hide();
            arrow3();
          })
        })
      }
      let arrow4 = function () {
        $('.arrow4').show().stop().css({ 'left': '354px', 'top': '230px' }).animate({
          left: '220px'
        }, animateTime * (2), "linear", function () {
          $(this).hide();
          arrow4();
        })
      }
      arrow4();
      arrow2();
      arrow3();
    } else {
      $('.arrow4').hide().stop().css({ 'left': '354px', 'top': '317px' });
      $('.arrow2').hide().stop().css({ 'left': '352px', 'top': '135px' });
      $('.arrow3').hide().stop().css({ 'left': '404px', 'top': '127px', "transform": "rotate(0deg)" });
      $('.line7,.line2,.line3,.line3-1').hide();

    }
  }
  /**
   * 刹车动画
   * @memberOf FunctionComponent
   */
  brakeOflines(doOrfalse: boolean): void {
    if (doOrfalse) {
      $('.line1').show();
      let animateTime = 3000;
      let arrow1 = function () {
        $('.arrow1').show().stop().css({ 'left': '838px', 'top': '428px' }).animate({
          top: '238px'
        }, animateTime * (60 / 60), 'linear', function () {
          $(this).hide();
          arrow1();
        })
      }

      arrow1();
    } else {
      $('.arrow1').hide().stop().css({ 'left': '838px', 'top': '428px' });
      $('.line1').hide();
    }
  }
  /**
   * On档从动力电池到高压控制盒、高压控制盒到电机控制器的高压直流线内部有红色小圆点流动方向通过布尔控制，true正向，false反向
   * @memberOf FunctionComponent
   */
  redpointFlow(direction: boolean, doOrfalse: boolean): void {
    let main = document.getElementById('redpointbox');
    let self = this;
    self.animateStatus = doOrfalse;
    this.loop(main, 0, 10, 100, direction);
  }
  /**
   * On档有小圆球在三相动力线上流动方向通过布尔控制，true正向，false反向
   * @memberOf FunctionComponent
   */
  circleOnhreepower(direction: boolean, doOrfalse: boolean) {
    let main = document.getElementById('redpointbox3');
    let main2 = document.getElementById('redpointbox4');
    let self = this;
    self.animateStatus = doOrfalse;
    this.loop(main, 0, 10, 20, direction);
    this.loop(main2, 0, 10, 20, direction);
  }

  //生命周期钩子函数
  ngOnInit() {
    this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() });
    this.dashboardService.setGearsFun('on', () => { return this.onGearFun() });
    this.dashboardService.setSpeedIsFixedFun(0, () => { return this.setSpeedIsFixedFun() });

    this.gearpanelService.setShiftFun('reverse', () => { return this.reverseFun() });   //r档
    this.gearpanelService.setShiftFun('neutral', () => { return this.neutralFun() });    //n档
    this.gearpanelService.setShiftFun('drive', () => { return this.driveFun() });   //d档

    this.gearpanelService.setBrakesFun('press', () => { return this.pressBrakeFun() }); //按下刹车
    this.gearpanelService.setBrakesFun('loosen', () => { return this.loosenBrakeFun() });   //松开
    this.gearpanelService.setAcceleratorsFun('add', () => { return this.addAcceleratorFun() }); //加油门
    this.gearpanelService.setAcceleratorsFun('minus', () => { return this.minusAcceleratorFun() }); //减油门
    this.gearpanelService.setAcceleratorsFun('loosen', () => { return this.loosenAcceleratorFun() });   //松油门
    this.dashboardService.setspeedIsStatusFun('rack', () => { return this.rackspeedIsStatusFun() });//速度不再降

    this.dashboardService.setspeedIsStatusFun('follow', () => { return this.setspeedIsStatusFunnew() }); //速度跟随
    this.gearpanelService.setStopAnimate(() => { return this.onGearFun() });
  }
  // 初始化功能页面
  InitializeFunction() {
    for (let each in this.pageTimerFunction) {
      clearTimeout(this.pageTimerFunction[each]);   //清除全局定时器
    }
    this.animateStatus = false;
    $('#redpointbox').hide();
    this.brakeOflines(false);
  }
  //lock档执行方法
  lockGearFun() {
    this.InitializeFunction();
    this.arrowTurnStatus = false;
    this.filesOflines(false);
    this.twistedPairSparkle(false);
    this.rDInit();
  }
  //on档执行方法
  onGearFun() {
    this.arrowTurnStatus = false;

    this.InitializeFunction(); if (this.pageTimerFunction['timer11']) { clearTimeout(this.pageTimerFunction['timer11']) }

    this.pageTimerFunction['timer11'] = setTimeout(() => {
      this.arrowTurnStatus = true;
      this.filesOflines(true);
      this.twistedPairSparkle(true);
    }, 100);

    if (this.pageTimerFunction['red']) { clearTimeout(this.pageTimerFunction['red']) }

    this.pageTimerFunction['red'] = setTimeout(() => {
      this.redpointFlow(true, true);
      this.redPointsDirection = true;
    }, 100);

    //s刹车线
    if (this.gearpanelService.isBrake) {
      this.brakeOflines(true);

    }

  }

  //倒档执行的方法
  reverseFun() {

  }
  //空挡执行的方法
  neutralFun() {
    this.rDInit();
  }
  // D挡执行的方法
  driveFun() {
  }
  //轮胎d档方法
  tyreDrive(speed) {
    // console.log(1);
    this.tyreInit();
    this.scroll('.tyre-trail1', speed, 'up');
    this.scroll('.tyre-trail2', speed, 'up');
    this.scroll('.tyre-trail3', speed, 'up');
    this.scroll('.tyre-trail4', speed, 'down');
    this.scroll('.tyre-trail5', speed, 'down');
    this.scroll('.tyre-trail6', speed, 'up');
    this.scroll('.tyre-trail7', speed, 'up');
  }
  //轮胎r档方法
  tyreReverse(speed) {
    // console.log('1');
    this.tyreInit();
    this.scroll('.tyre-trail1', speed, 'down');
    this.scroll('.tyre-trail2', speed, 'down');
    this.scroll('.tyre-trail3', speed, 'down');
    this.scroll('.tyre-trail4', speed, 'up');
    this.scroll('.tyre-trail5', speed, 'up');
    this.scroll('.tyre-trail6', speed, 'down');
    this.scroll('.tyre-trail7', speed, 'down');
  }
  //轮胎初始化
  tyreInit() {
    this.scroll('.tyre-trail1', 1000, 'stop');
    this.scroll('.tyre-trail2', 1000, 'stop');
    this.scroll('.tyre-trail3', 1000, 'stop');
    this.scroll('.tyre-trail4', 1000, 'stop');
    this.scroll('.tyre-trail5', 1000, 'stop');
    this.scroll('.tyre-trail6', 1000, 'stop');
    this.scroll('.tyre-trail7', 1000, 'stop');

  }
  //r,d初始化
  rDInit() {
    this.tyreInit();
    if (this.pageTimerFunction["arrowTime"]) { clearInterval(this.pageTimerFunction["arrowTime"]); }
    $(".line4,.line5,.line6").hide();
  }
  // 刹车执行的方法
  pressBrakeFun() {

    if (this.gearpanelService.isBrake && this.dashboardService.stalls) {

      this.brakeOflines(true);

    }
  }
  //松开刹车执行的方法
  loosenBrakeFun() {
    if (!this.gearpanelService.isBrake && this.dashboardService.stalls) {
      if (this.gearpanelService.controlStalls === 3) {
        this.tyreDrive(2000);
        //电机控制器到电机3条线束交替闪烁；
        this.alternateLight();
      } else if (this.gearpanelService.controlStalls === 1) {
        this.tyreReverse(2000);
        //电机控制器到电机3条线束交替闪烁；
        this.alternateLight();

      }

      this.brakeOflines(false);
    }


  }
  //加油门执行的方法
  addAcceleratorFun() {
    /* let num1= Number($('.datashow').html());
     let num2 = Number($('.data-show').html());
     if(num1<=num2){
         if(this.dashboardService.stalls){
             if(this.gearpanelService.controlStalls === 1 || this.gearpanelService.controlStalls===3){
 
             }
         }
     }*/
  }
  //减油门执行的方法
  minusAcceleratorFun() {
    /*if(!this.gearpanelService.isBrake){
        this.InitializeFunction();
        if(this.dashboardService.stalls){

        }
    }*/
  }
  //松油门执行的方法
  loosenAcceleratorFun() {
    /* if(this.gearpanelService.controlStalls === 2){
         
     }else{
         if(this.dashboardService.stalls && !this.gearpanelService.isBrake){
 
         }
     }   */
    this.redPointsDirection = false;
  };
  //油门跟随车速变化
  setspeedIsStatusFunnew() {
    this.dataCtrlAnimate();
  }
  //车速不再降
  rackspeedIsStatusFun() {
    //怠速
    if (this.gearpanelService.controlStalls == 1 && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 5) {
      this.redPointsDirection = true;
    } else if (this.gearpanelService.controlStalls == 3 && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 10) {
      this.redPointsDirection = true;
    }
  }
  //车速控制的轮胎速度和电流方向
  dataCtrlAnimate() {
    let vm = this;
    //首先是一定要在on档位,在r/d档位
    if (this.dashboardService.stalls) {
      // console.log(this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x,'[][][][][]');
      // console.log('asdfasdf');
      //在踩下刹车时
      if (this.gearpanelService.isBrake) {

      } else {
        let tireSpeed = 2000;
        if (this.gearpanelService.controlStalls === 3) {
          if (100 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 110) {
            if (100 < vm.oldSpeed && vm.oldSpeed <= 110) {
              vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
              return false;
            }
            tireSpeed = 500;
          }
          if (90 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 100) {
            if (90 < vm.oldSpeed && vm.oldSpeed <= 100) {
              vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
              return false;
            }
            tireSpeed = 700;
          }
          if (70 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 90) {
            if (70 < vm.oldSpeed && vm.oldSpeed <= 90) {
              vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
              return false;
            }
            tireSpeed = 900;
          }
          if (50 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 70) {
            if (50 < vm.oldSpeed && vm.oldSpeed <= 70) {
              vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
              return false;
            }
            tireSpeed = 1200;
          }
          if (30 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 50) {
            if (30 < vm.oldSpeed && vm.oldSpeed <= 50) {
              vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
              return false;
            }

            tireSpeed = 1600;
          }
          if (0 <= this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 30) {
            if (0 <= vm.oldSpeed && vm.oldSpeed <= 30) {
              vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
              return false;
            }

            tireSpeed = 2000;
          }
          if (this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x == 0) {

          }
        }
        else if (this.gearpanelService.controlStalls === 1) {
          if (30 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 40) {
            if (100 < vm.oldSpeed && vm.oldSpeed <= 110) {
              vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
              return false;
            }
            tireSpeed = 700;
          }
          if (20 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 30) {
            if (90 < vm.oldSpeed && vm.oldSpeed <= 100) {
              vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
              return false;
            }
            tireSpeed = 1100;
          }
          if (10 < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 20) {
            if (70 < vm.oldSpeed && vm.oldSpeed <= 90) {
              vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
              return false;
            }
            tireSpeed = 1500;
          }
          if (0 <= this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x && this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x <= 10) {
            if (50 < vm.oldSpeed && vm.oldSpeed <= 70) {
              vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
              return false;
            }
            tireSpeed = 2000;
          }

          if (this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x == 0) {

          }
        }
        //页面动画控制，车轮
        //r
        if (this.gearpanelService.controlStalls === 3) {
          this.tyreDrive(tireSpeed);
        } else if (this.gearpanelService.controlStalls === 1) {
          this.tyreReverse(tireSpeed);
        }
        //电流方向正反
        if (vm.gearpanelService.isDrag) {
          if (vm.oldSpeed > this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x) {
            this.redPointsDirection = false;
          } else if (vm.oldSpeed < this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x) {
            this.redPointsDirection = true;
          }

          vm.oldSpeed = this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x;
        }

      }
    }
  }

  //所有车速为0执行的方法
  setSpeedIsFixedFun() {
    if (this.dashboardService.stalls) {
      if (this.gearpanelService.controlStalls === 1 || this.gearpanelService.controlStalls === 3) {
        if (this.gearpanelService.isBrake) {
          this.rDInit();

        }
      }
    }
  }

  //条纹无缝滚动
  // scroll(obj, time, direction) {

  //   var width = $(obj).css('width');
  //   var height = $(obj).css('height');
  //   var _top: any = 0;
  //   var _left: any = 0;
  //   var offsetTop = parseInt(_top) - parseInt(height);
  //   var resetTop = parseInt(_top) + parseInt(height);
  //   var offsetLeft = parseInt(_left) - parseInt(width);
  //   var resetLeft = parseInt(_left) + parseInt(width);
  //   let up = function () {
  //     $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;border-radius: 25px;' src='./assets/images/function/tyre_" + obj.split("-")[1] + ".png' />");
  //     $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'top': offsetTop + 'px' }, time, 'linear', function () { });
  //     $(obj).find("img").eq(1).css("top", resetTop + 'px').stop().animate({ 'top': _top }, time, 'linear', function () {
  //       removeDiv();
  //       up();
  //     });

  //条纹无缝滚动
  scroll(obj, time, direction) {

    var width = parseInt($(obj).css('width'));
    var height = parseInt($(obj).css('height'));
    // console.log(width);
    // console.log(height);

    var _top: any = 0;
    var _left: any = 0;
    var offsetTop = parseInt(_top) - parseInt(String(height));
    var resetTop = parseInt(_top) + parseInt(String(height));
    var offsetLeft = parseInt(_left) - parseInt(String(width));
    var resetLeft = parseInt(_left) + parseInt(String(width));
    let up = function () {
      $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;border-radius: 5px;' src='./assets/images/function/tyre_" + obj.split("-")[1] + ".png' />");
      $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'top': offsetTop + 'px' }, time, 'linear', function () { });
      $(obj).find("img").eq(1).css("top", resetTop + 'px').stop().animate({ 'top': _top }, time, 'linear', function () {
        removeDiv();
        up();
      });

    };
    let down = function () {
      $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;border-radius: 5px;' src='./assets/images/function/tyre_" + obj.split("-")[1] + ".png' />");
      $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'top': resetTop + 'px' }, time, 'linear', function () { });
      $(obj).find("img").eq(1).css("top", offsetTop + 'px').stop().animate({ 'top': _top }, time, 'linear', function () {
        removeDiv();
        down();
      });
    };
    let left = function () {
      $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;border-radius: 5px;' src='./assets/images/function/tyre_" + obj.split("-")[1] + ".png' />");

      $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'left': offsetLeft + 'px' }, time, 'linear', function () { });
      $(obj).find("img").eq(1).css("left", resetLeft + 'px').stop().animate({ 'left': _left }, time, 'linear', function () {
        removeDiv();
        left();
      });
    };
    let right = function () {
      $(obj).append("<img width=" + width + " height=" + height + " style='position: absolute;top: 0;left: 0;border-radius: 5px;' src='./assets/images/function/tyre_" + obj.split("-")[1] + ".png' />");
      $(obj).find("img").eq(0).css({ 'top': '0px', 'left': '0px' }).stop().animate({ 'left': resetLeft + 'px' }, time, 'linear', function () { });
      $(obj).find("img").eq(1).css("left", offsetLeft + 'px').stop().animate({ 'left': _left }, time, 'linear', function () {
        removeDiv();
        right();
      });
    };
    let stop = function () {
      $(obj).find("img").stop(true).css({ 'top': '0px', 'left': '0px' });
      $(obj).find("img").eq(1).remove();
      $(obj).find("img").eq(2).remove();
    };
    let removeDiv = function () {
      $(obj).find("img").eq(0).remove();
    };

    var toArr = function () {
      var objLen = $(obj).find("img").toArray();
      if (objLen.length == 0) {
        $(obj).append("<img src='images/stripe_" + obj.split("-")[1] + ".png' />");
      } else if (objLen.length > 1) {
        objLen.length = 1;
      }
    }
    switch (direction) {
      case 'down': down(); break;
      case 'up': up(); break;
      case 'left': left(); break;
      case 'right': right(); break;
      case 'stop': stop(); break;
    }
    //三条线交替闪烁
  }
  alternateLight() {

    if (this.pageTimerFunction["arrowTime"]) { clearInterval(this.pageTimerFunction["arrowTime"]); }
    // console.log($(".line6").css("display"));
    this.pageTimerFunction['arrowTime'] = setInterval(() => {

      if ($(".line6").css("display") == "none") {
        $(".line4").hide();
        $(".line5").show();
        $(".line6").show();
      } else if ($(".line4").css("display") == "none") {
        $(".line4").show();
        $(".line5").hide();
        $(".line6").show();
      } else if ($(".line5").css("display") == "none") {
        $(".line4").show();
        $(".line5").show();
        $(".line6").hide();

      } else {
        $(".line4").hide();
        $(".line5").show();
        $(".line6").show();
      }
    }, 300)
  }

  ngOnDestroy() {
    clearInterval(this.pageTimerFunction["arrowTime"]);
    clearInterval(this.pageTimerFunction["arrowTime"]);
  }
}
