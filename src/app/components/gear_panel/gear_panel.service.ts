import { Injectable } from "@angular/core";
import { DashboardService } from "../dashboard/dashboard.service";
declare var $: any;
@Injectable()
export class GearPanelService {
  pedalIsDown = '释放';// 刹车当前状态
  pedalShowFlag = false;
  // 是否踩下刹车踏板
  isBrake = 0;
  // 是否在拖拽
  isDrag = 0;
  // 控制中心的按钮在什么档位，1、2、3分别代表r、n、d
  controlStalls = 0;

  // 当前档位显示(R,N,D中的一种)，在诊断仪数据流中显示
  currentStallText = "N";
  // 档位开关操作面板是否隐藏
  // gearPanelHidden:boolean=true;

  /**
   * 储存踩下制动需要执行哪些外部方法
   *
   *
   * @memberOf GearPanelService
   */
  pressBrake = [];

  /**
   * 踩下制动执行那些外部方法的下标
   *
   * @type {number}
   * @memberOf GearPanelService
   */
  pressBrakeIndex: number;

  /**
   * 储存松开制动需要执行哪些外部方法
   *
   *
   * @memberOf GearPanelService
   */
  loosenBrake = [];

  /**
   * 松开制动执行那些外部方法的下标
   *
   * @type {number}
   * @memberOf GearPanelService
   */
  loosenBrakeIndex: number;

  /**
   * 设置制动踏板需要在哪个状态执行外部的什么方法
   *
   * @param {any} status
   * @param {any} fun
   *
   * @memberOf GearPanelService
   */

  accDrag(newLeft, oldLeft) {
    let speedListener = 0;
    let times = 0;
    // console.log("------------------------------------");
    // 如果是往上滑动，就是减速，减速动画改变
    if (
      (this.controlStalls === 1 || this.controlStalls === 3) &&
      this.dashboardService.stalls === 1 &&
      this.isBrake === 0 &&
      this.isDrag === 1
    ) {
      if (newLeft === oldLeft) {
        if (this.rackAcceleratorFun()) {
          this.rackAcceleratorFun();
        }

        // return false;
      } else {
        if (oldLeft > newLeft) {
          if (this.minusAcceleratorFun()) {
            this.minusAcceleratorFun();
          }
          $(".block-slide1").show();
          $(".block-slide2").hide();
          // 流向动力电池
          $(".line-flow1").hide();
          $(".line-flow2").show();
        } else {
          if (this.addAcceleratorFun()) {
            this.addAcceleratorFun();
          }
          $(".block-slide1").hide();
          $(".block-slide2").show();
          // 流向动力电池
          $(".line-flow1").show();
          $(".line-flow2").hide();
        }
      }
    }
  }
  setBrakesFun(status, fun) {
    switch (status) {
      case "press":
        this.pressBrake[this.pressBrakeIndex] = fun;
        this.pressBrakeIndex += 1;
        // console.log(this.lockGear);
        break;
      case "loosen":
        this.loosenBrake[this.loosenBrakeIndex] = fun;
        this.loosenBrakeIndex += 1;
        // console.log(this.onGear);
        break;
      default:
    }
  }
  /**
   * 踩下制动需要执行的哪些方法
   *
   *
   * @memberOf GearPanelService
   */
  pressBrakeFun() {
    // tslint:disable-next-line:forin
    for (let i in this.pressBrake) {
      this.pressBrake[i]();
    }
  }

  /**
   * 松开制动需要执行的哪些方法
   *
   *
   * @memberOf GearPanelService
   */
  loosenBrakeFun() {
    // tslint:disable-next-line:forin
    for (let i in this.loosenBrake) {
      this.loosenBrake[i]();
    }
  }

  /**
   * 储存加油门需要执行哪些外部方法
   *
   *
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  addAccelerator = [];

  /**
   * 加油门执行那些外部方法的下标
   *
   * @type {number}
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  addAcceleratorIndex: number;

  /**
   * 储存减油门需要执行哪些外部方法
   *
   *
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  minusAccelerator = [];

  /**
   * 减油门执行那些外部方法的下标
   *
   * @type {number}
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  minusAcceleratorIndex: number;
  /**
   * 储存松开油门需要执行哪些外部方法
   *
   *
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  loosenAccelerator = [];

  /**
   * 松开油门执行那些外部方法的下标
   *
   * @type {number}
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  loosenAcceleratorIndex: number;
  /**
   * 储存匀速油门需要执行哪些外部方法
   *
   *
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  rackAccelerator = [];

  /**
   * 匀速油门执行那些外部方法的下标
   *
   * @type {number}
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  rackAcceleratorIndex: number;
  /**
   * 设置油门需要在哪个状态执行外部的什么方法
   *
   * @param {any} status
   * @param {any} fun
   *
   * @memberOf GearPanelService
   */
  setAcceleratorsFun(status, fun) {
    switch (status) {
      case "add":
        this.addAccelerator[this.addAcceleratorIndex] = fun;
        this.addAcceleratorIndex += 1;
        // console.log(this.lockGear);
        break;
      case "minus":
        this.minusAccelerator[this.minusAcceleratorIndex] = fun;
        this.minusAcceleratorIndex += 1;
        // console.log(this.onGear);
        break;
      case "loosen":
        this.loosenAccelerator[this.loosenAcceleratorIndex] = fun;
        this.loosenAcceleratorIndex += 1;
        // console.log(this.onGear);
        break;
      case "rack":
        this.rackAccelerator[this.rackAcceleratorIndex] = fun;
        this.rackAcceleratorIndex += 1;
        // console.log(this.onGear);
        break;
      default:
    }
  }
  /**
   * 加油门需要执行的哪些方法
   *
   *
   * @memberOf GearPanelService
   */
  addAcceleratorFun() {
    // tslint:disable-next-line:forin
    for (let i in this.addAccelerator) {
      this.addAccelerator[i]();
    }
  }

  /**
   * 减油门需要执行的哪些方法
   *
   *
   * @memberOf GearPanelService
   */
  minusAcceleratorFun() {
    // tslint:disable-next-line:forin
    for (let i in this.minusAccelerator) {
      this.minusAccelerator[i]();
    }
  }

  /*
      * 匀速油门需要执行的哪些方法
      *
      *
      * @memberOf GearPanelService
      */
  rackAcceleratorFun() {
    // tslint:disable-next-line:forin
    for (let i in this.rackAccelerator) {
      this.rackAccelerator[i]();
    }
  }
  /*
    * 松开油门需要执行的哪些方法
    *
    *
    * @memberOf GearPanelService
    */
  loosenAcceleratorFun() {
    // tslint:disable-next-line:forin
    for (let i in this.loosenAccelerator) {
      this.loosenAccelerator[i]();
    }
  }

  /**
   * 倒档需要执行哪些外部方法
   *
   *
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  reverse = [];

  /**
   * 倒档执行那些外部方法的下标
   *
   * @type {number}
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  reverseIndex: number;

  /**
   * 储存空档需要执行哪些外部方法
   *
   *
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  neutral = [];

  /**
   * 空档执行那些外部方法的下标
   *
   * @type {number}
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  neutralIndex: number;
  /**
   * 储存前进档需要执行哪些外部方法
   *
   *
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  drive = [];

  /**
   * 前进档执行那些外部方法的下标
   *
   * @type {number}
   * @memberOf GearPanelService
   */
  // tslint:disable-next-line:member-ordering
  driveIndex: number;
  /**
   * 设置档位开关需要在哪个状态执行外部的什么方法
   *
   * @param {any} gear
   * @param {any} fun
   *
   * @memberOf GearPanelService
   */
  setShiftFun(gear, fun) {
    // tslint:disable-next-line:switch-default
    switch (gear) {
      case "reverse":
        this.reverse[this.reverseIndex] = fun;
        this.reverseIndex += 1;
        // console.log(this.lockGear);
        break;
      case "neutral":
        this.neutral[this.neutralIndex] = fun;
        this.neutralIndex += 1;
        // console.log(this.onGear);
        break;
      case "drive":
        this.drive[this.driveIndex] = fun;
        this.driveIndex += 1;
        // console.log(this.onGear);
        break;
    }
  }
  /**
   * 倒档需要执行的哪些方法
   *
   *
   * @memberOf GearPanelService
   */
  reverseFun() {
    // tslint:disable-next-line:forin
    for (let i in this.reverse) {
      this.reverse[i]();
    }
  }

  /**
   * 空档需要执行的哪些方法
   *
   *
   * @memberOf GearPanelService
   */
  neutralFun() {
    // tslint:disable-next-line:forin
    for (let i in this.neutral) {
      this.neutral[i]();
    }
  }

  /*
    * 前进档需要执行的哪些方法
    *
    *
    * @memberOf GearPanelService
    */
  driveFun() {
    // tslint:disable-next-line:forin
    for (let i in this.drive) {
      this.drive[i]();
    }
  }
  // N档停止动画
  // tslint:disable-next-line:member-ordering
  stopanimateArr = [];
  // tslint:disable-next-line:member-ordering
  stopanimateIndex: number;
  setStopAnimate(fun) {
    this.stopanimateArr[this.stopanimateIndex] = fun;
    this.stopanimateIndex += 1;
  }
  stopanimate() {
    // tslint:disable-next-line:forin
    for (let i in this.stopanimateArr) {
      this.stopanimateArr[i]();
    }
  }

  constructor(private dashboardService: DashboardService) {}
}
