import { Component, OnInit,OnDestroy } from "@angular/core";
import { HandleErrorService } from "../handle_error";
import { GearPanelService } from "../gear_panel/gear_panel.service";
import { DashboardService } from "../dashboard/dashboard.service";
import { CommunicationService } from "../communication/communication.service";
import { AppService } from "../../index/app.service";
import { SkillService } from "../../views/skill/skill.service";
import { ObdscanService } from "../obdscan/obdscan.service";
import { CoursePrepareService } from "../../views/course_prepare/course_prepare.service";
import { MultimeterService } from "../multimeter/multimeter.service";
import { clearInterval } from "timers";

declare let $: any, stallsRAnimate: any, stallsDAnimate: any, io: any;

@Component({
  selector: "gear-panel",
  styleUrls: ["./gear_panel.component.scss"],
  templateUrl: "./gear_panel.component.html",
  providers: []
})
/**
 * 处理错误的组件
 */
export class GearPanelComponent implements OnDestroy,OnInit {
  clearTimer = null;
  clearTimer1 = null;
  clearTimer2 = null;
  timeout = null;
  rightStopPrev = 0;
  leftStopPrev = 0;
  resultVerificationSpeedGood = []; // 技能页面结果检验输入的值

  currentMin = 26;

  rightXCurrent = false;
  leftXCurrent = false;
  speedArrRight = [0];
  panduanDragStop = [];
  speedArrLeftGet = [];
  speedArrLeft = {
    "0": 0,
    "9": 25,
    "16": 49,
    "17": 50.2,
    "18": 51.4,
    "19": 52.6,
    "20": 53.8,
    "21": 55,
    "22": 56.2,
    "23": 57.4,
    "24": 58.6,
    "25": 59.8,
    "26": 61,
    "27": 62.2,
    "28": 63.4,
    "29": 64.6,
    "30": 65.8,
    "31": 67,
    "32": 68.2,
    "33": 69.4,
    "34": 70.6,
    "35": 71.8,
    "36": 73,
    "37": 74.2,
    "38": 75.4,
    "39": 76.6,
    "40": 77.8,
    "41": 79,
    "42": 80.2,
    "43": 81.4,
    "44": 82.6,
    "45": 83.8,
    "46": 85,
    "47": 86.19999999999999,
    "48": 87.4,
    "49": 88.6,
    "50": 89.8,
    "51": 91,
    "52": 92.19999999999999,
    "53": 93.4,
    "54": 94.6,
    "55": 95.8,
    "56": 97,
    "57": 98.19999999999999,
    "58": 99.4,
    "59": 100.6,
    "60": 101.8,
    "61": 103,
    "62": 104.19999999999999,
    "63": 105.4,
    "64": 106.6,
    "65": 107.8,
    "66": 109,
    "67": 110.19999999999999,
    "68": 111.4,
    "69": 112.6,
    "70": 113.8,
    "71": 115,
    "72": 116.2,
    "73": 117.39999999999999,
    "74": 118.6,
    "75": 119.8,
    "76": 121,
    "77": 122.2,
    "78": 123.39999999999999,
    "79": 124.6,
    "80": 125.8,
    "81": 127,
    "82": 128.2,
    "83": 129.39999999999998,
    "84": 130.6,
    "85": 131.8,
    "86": 133,
    "87": 134.2,
    "88": 135.39999999999998,
    "89": 136.6,
    "90": 137.8,
    "91": 139,
    "92": 140.2,
    "93": 141.39999999999998,
    "94": 142.6,
    "95": 143.8,
    "96": 145,
    "97": 146.2,
    "98": 147.39999999999998,
    "99": 148.6,
    "100": 149.8
  };

  // 档位开关是否隐藏
  gearPanelHidden: boolean = true;
  // 是否踩下刹车踏板
  isBrake = 0;
  // 是否在拖拽
  isDrag = 0;
  // 控制中心的按钮在什么档位，1、2、3分别代表r、n、d
  controlStalls = 0;
  // 档位在lock档
  stalls = 0;

  constructor(
    private gearPanelService: GearPanelService,
    private dashboardService: DashboardService,
    private handleErrorService: HandleErrorService,
    private communicationService: CommunicationService,
    private appService: AppService,
    private obdscanService: ObdscanService,
    private coursePrepareService: CoursePrepareService,
    private multimeterService: MultimeterService,
    private skillService: SkillService,
  ) {}

  ngOnInit() {
    this.obdscanService.Zdata.motorSpeed = 0;
    this.obdscanService.Zdata.rotorAngle = 10;
    setTimeout(() => {
      this.dragAcc();
      this.dragDiv();
    }, 100);
    if (this.dashboardService.stalls) {
      $(".state-wrap .stateN").removeClass("active");
      $(".state-wrap .stateN").addClass("active");
    }
  }
  ngOnDestroy() {
    this.gearPanelService.pedalIsDown = '释放';
    this.gearPanelService.currentStallText = "N";
    clearTimeout(this.clearTimer);
    clearTimeout(this.clearTimer1);
    clearTimeout(this.clearTimer2);
  }

  setGearSourcePosition(top, left) {
    $(".dragSource").css({ top: top, left: left });
  }

  setGearAccPosition(top, left) {
    $(".accelerator").css({ top: top, left: left });
  }

  /*
   *
   * 面板拖拽
   *
   * */
  dragDiv() {
    // 给新面板加上拖拽事件
    $(".dragSource").draggable({
      containment: ".container",
      cursor: "move"
    });
  }

  /*
   *
   * 点开面板
   *
   * */

  openSwitchPanel(val: number): void {
    let zIndex = 14;
    //打开门控开关
    if (val == 1) {
      $(".wifi-switch-panel,.key-switch-panel").css("z-index", zIndex - 1);
      $(".gear-wrap")
        .removeClass("hide-important")
        .css("z-index", "16");
      $(".door-switch")
        .parent()
        .addClass("active");
    }
    //打遥控器
    if (val == 2) {
      $(".door-switch-panel,.key-switch-panel").css("z-index", zIndex - 1);
      $(".wifi-switch-panel")
        .removeClass("hide-important")
        .css("z-index", "16");
      $(".wifi-switch")
        .parent()
        .addClass("active");
    }
    //打开车门锁
    if (val == 3) {
      $(".wifi-switch-panel,.door-switch-panel").css("z-index", zIndex - 1);
      $(".key-switch-panel")
        .removeClass("hide-important")
        .css("z-index", "16");
      $(".key-switch")
        .parent()
        .addClass("active");
    }
    this.gearPanelService.pedalShowFlag = false;
  }

  /*
   *
   * 关闭面板
   *
   * */

  closeSwitchPanel(param) {
    let MediaJin = document.getElementById('jin');
    let MediaTui = document.getElementById('tui');
    if (MediaJin||MediaTui) { 
      MediaJin['pause']();
      MediaTui['pause']();
    }
    this.gearPanelService.pedalShowFlag = false;
    this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "2"
    $('.gear-stalls').html('N');
    this.coursePrepareService.closeTool(param);
    if (this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x&& this.gearPanelService.controlStalls===3) {
      Window["gear"].brakePressD();
    } else if (this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x&& this.gearPanelService.controlStalls===1) {
      Window["gear"].brakePressR();
    }
  }

  // 驱动电机转子角度
  rotorAngle() {
    if (this.obdscanService.Zdata.rotorAngle + 32 >= 360) {
      this.obdscanService.Zdata.rotorAngle = 360;
      setTimeout(() => {
        this.obdscanService.Zdata.rotorAngle = 0;
      }, 50);
    }
    this.obdscanService.Zdata.rotorAngle += 32;
  }
  // 驱动电机转速D
  motorSpeedD() {
    if (this.obdscanService.Zdata.motorSpeed + 100 >= 1500) {
      this.obdscanService.Zdata.motorSpeed = 1500;
      return;
    }
    this.obdscanService.Zdata.motorSpeed += 100;
  }
  // 驱动电机转速R
  motorSpeedR() {
    if (this.obdscanService.Zdata.motorSpeed + 100 >= 800) {
      this.obdscanService.Zdata.motorSpeed = 800;
      return;
    }
    this.obdscanService.Zdata.motorSpeed += 100;
  }
  // 松开油门D档转速下降
  stopMotorSpeedD() {
    if (this.obdscanService.Zdata.motorSpeed - 156 <= 1500) {
      this.obdscanService.Zdata.motorSpeed = 1500;
      return;
    }
    this.obdscanService.Zdata.motorSpeed -= 156;
  }
  // 松开油门R档转速下降
  stopMotorSpeedR() {
    if (this.obdscanService.Zdata.motorSpeed - 156 <= 800) {
      this.obdscanService.Zdata.motorSpeed = 800;
      return;
    }
    this.obdscanService.Zdata.motorSpeed -= 156;
  }
  /*
   *
   * 控制面板刹车点击
   *
   * */
  brakeOn(_obj) {
    let tireSpeed = 1;
    let MediaJin = document.getElementById('jin');
    let MediaTui = document.getElementById('tui');
    
    let _top = parseInt($(_obj).css("top"));
    if (_top == 40) {
      this.gearPanelService.pedalIsDown = '踩下';
      clearTimeout(this.clearTimer);
      clearTimeout(this.clearTimer1);
      clearTimeout(this.clearTimer2);
      this.obdscanService.Zdata.motorSpeed = 0;
      this.gearPanelService.isBrake = 1;

      this.multimeterService.Mdata.isDrop(null, null, null);
      this.dashboardService.Mint.In1NER_x_BrakeSig_x_x = "1";

      $(_obj).css("top", "113px");

      $(".circuit-brake").attr({ stroke: "#E50012" });
      $(".circuit-switch3").attr({ stroke: "#E50012", x2: "589.988" });
      if (this.gearPanelService.pressBrakeFun()) {
        this.gearPanelService.pressBrakeFun();
      }
      //进度记录
      this.communicationService.setAction({
        id: "ver010",
        flag: "",
        sub: "",
        value: undefined
      });
      //松开刹车动画
      this.releaseBrake();

      // if (this.currentIsFaultPage()) {
      //   this.speedArrRight = [0];
      //   this.speedArrLeftGet = [0];
      // } else {
      //   this.speedArrRight = [0];
      //   this.speedArrLeftGet = [0];
      //   return;
      // }
      if (
        this.gearPanelService.controlStalls == 3 ||
        this.gearPanelService.controlStalls === 2
      ) {
        if (((this.appService.progressData.describeFlag== 17&&this.appService.moni1IsOk)||(this.appService.progressData.describeFlag == 23&&this.appService.moni2IsOk)||(this.appService.progressData.describeFlag == 29&&this.appService.moni3IsOk)||(this.appService.progressData.describeFlag == 35&&this.appService.moni4IsOk)||this.appService.progressData.describeFlag == 37||this.appService.progressData.describeFlag == 39||this.appService.progressData.describeFlag == 41)&&this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x!=0) { 
          Window["gear"]["meterAry"] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
          Window["gear"].brakePressD();
          if (MediaJin) {
            MediaJin['pause']();
          }
        }
      } else if (
        this.gearPanelService.controlStalls == 1 ||
        this.gearPanelService.controlStalls === 2
      ) {
        if (((this.appService.progressData.describeFlag== 17&&this.appService.moni1IsOk)||(this.appService.progressData.describeFlag == 23&&this.appService.moni2IsOk)||(this.appService.progressData.describeFlag == 29&&this.appService.moni3IsOk)||(this.appService.progressData.describeFlag == 35&&this.appService.moni4IsOk)||this.appService.progressData.describeFlag == 37||this.appService.progressData.describeFlag == 39||this.appService.progressData.describeFlag == 41)&&this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x!=0) { 
          Window["gear"].brakePressR();
          if (MediaTui) {
            MediaTui['pause']();
          }
        }
      }
    } else {
      this.gearPanelService.pedalIsDown = '释放';
      this.gearPanelService.isBrake = 0;
      this.multimeterService.Mdata.isDrop(null, null, null);
      this.dashboardService.Mint.In1NER_x_BrakeSig_x_x = "0";

      $(_obj).css("top", "40px");

      $(".circuit-brake").attr({ stroke: "#231815" });

      $(".circuit-switch3").attr({ stroke: "#231815", x2: "598.233" });
      if (this.gearPanelService.loosenBrakeFun()) {
        this.gearPanelService.loosenBrakeFun();
      }
      //松开刹车动画
      this.releaseBrake();

      if (this.gearPanelService.controlStalls == 3) {
        this.clearTimer = setInterval(() => {
          this.rotorAngle();
        }, 100);
        this.clearTimer1 = setInterval(() => {
          this.motorSpeedD();
        }, 100);
        if ( ( (this.appService.progressData.describeFlag == 17&&this.appService.moni1IsOk)||(this.appService.progressData.describeFlag == 23&&this.appService.moni2IsOk)||(this.appService.progressData.describeFlag == 29&&this.appService.moni3IsOk)||(this.appService.progressData.describeFlag == 35&&this.appService.moni4IsOk))||this.appService.progressData.describeFlag == 37||this.appService.progressData.describeFlag ==39||this.appService.progressData.describeFlag == 41) { 
          $('#tui').hide();
          $('#jin').show();
          if (MediaJin) {
            MediaJin['play']();
          }
          Window["gear"].brakeReleaseD();
        }
      } else if (this.gearPanelService.controlStalls == 1) {
        this.clearTimer = setInterval(() => {
          this.rotorAngle();
        }, 100);
        this.clearTimer1 = setInterval(() => {
          this.motorSpeedR();
        }, 50);
        if ( ( (this.appService.progressData.describeFlag == 17&&this.appService.moni1IsOk)||(this.appService.progressData.describeFlag == 23&&this.appService.moni2IsOk)||(this.appService.progressData.describeFlag == 29&&this.appService.moni3IsOk)||(this.appService.progressData.describeFlag == 35&&this.appService.moni4IsOk))||this.appService.progressData.describeFlag == 37||this.appService.progressData.describeFlag ==39||this.appService.progressData.describeFlag == 41) { 
          $('#tui').show();
          $('#jin').hide();
          if (MediaTui) {
            MediaTui['play']();
          }
          Window["gear"].brakeReleaseR();
        }
      }
    }
  }

  /*
  *
  * 加速踏板松开动画
  *
  * */
  accRelease(): void {
    if (this.gearPanelService.loosenAcceleratorFun()) {
      this.gearPanelService.loosenAcceleratorFun();
    }
    //页面动画控制
    //松开就改变动画方向
    // console.log(this.dashboardService.stalls);
    if (
      (this.gearPanelService.controlStalls == 1 ||
        this.gearPanelService.controlStalls == 3) &&
      this.dashboardService.stalls == 1 &&
      this.gearPanelService.isBrake == 0
    ) {
      $(".block-slide1").show();
      $(".block-slide2").hide();
      //流向动力电池
      $(".line-flow1").hide();
      $(".line-flow2").show();
      //页面动画控制

      //r
      if (this.gearPanelService.controlStalls == 1) {
        // stallsRAnimate(1);
      } else if (this.gearPanelService.controlStalls == 3) {
        // stallsDAnimate(1)
      }
    }
  }
  /*
   *
   * 面板拖拽事件，加速
   *
   * */
  currentIsFaultPage() {
    if (
      this.appService.progressData.describeFlag !== 11 &&
      this.appService.progressData.describeFlag !== 12 &&
      this.appService.progressData.describeFlag !== 13 &&
      this.appService.progressData.describeFlag !== 15 &&
      this.appService.progressData.describeFlag !== 16 &&
      this.appService.progressData.describeFlag !== 17 &&
      this.appService.progressData.describeFlag !== 21 &&
      this.appService.progressData.describeFlag !== 22 &&
      this.appService.progressData.describeFlag !== 23 &&
      this.appService.progressData.describeFlag !== 2 &&
      (this.appService.progressData.describeFlag == 1 ||
        this.appService.progressData.describeFlag == 3 ||
        this.appService.progressData.describeFlag == 4 ||
        this.appService.progressData.describeFlag == 5 ||
        this.appService.progressData.describeFlag == 6 ||
        this.appService.progressData.describeFlag == 7 ||
        this.appService.progressData.describeFlag == 8 ||
        this.appService.progressData.describeFlag == 9 ||
        this.appService.progressData.describeFlag == 10 ||
        (this.appService.progressData.describeFlag == 14 &&
          this.appService.skillFault01IsGood == "1") ||
        (this.appService.progressData.describeFlag == 18 &&
          this.appService.skillFault02IsGood == "1") ||
        this.appService.progressData.describeFlag == 19 ||
        this.appService.progressData.describeFlag == 20 ||
        (this.appService.progressData.describeFlag == 24 &&
          this.appService.examFault01IsGood == "1"))
    ) {
      return true;
    } else {
      return false;
    }
  }

  //  同步拖动油门开始
  dragStartAccelerator() {
    // console.log("start");
  }

  // 同步拖动油门拖动中
  dragDragAccelerator() {
    this.gearPanelService.isDrag = 1;
    let _left = parseInt($(".accelerator").css("top"), 10);
    let oldLeft = $(".data-show").html();

    let newLeft = Math.floor(_left * (83 / 50)) + 16;
    if(this.skillService.V_Pin_Install=='1'&&this.skillService.T_Pin_Install=='1'){
      this.obdscanService.Zdata.acceleratorPedalPosition =
        Number(Math.ceil(_left*1.47)+16)+'';
         // 拖拽时取电路图中0.8~4.1的取值范围;
      this.appService.VCUB = Number((_left * (3.3 / 57) + 0.8).toFixed(1));
    }

    if (
      this.multimeterService.Mdata.currentPinOut !== "allOut" &&
      this.multimeterService.Mdata.currentPinOut !== "offT6"
    ) {
      this.obdscanService.Zdata.dataStreamContent.VCUA = String(
        this.appService.VCUA
      );
      this.obdscanService.Zdata.dataStreamContent.VCUB = String(
        this.appService.VCUB
      );
      this.obdscanService.Zdata.dataStreamContent.VCUC = String(
        this.appService.VCUC
      );
      this.obdscanService.Zdata.dataStreamContent.VCUD = String(
        this.appService.VCUD
      );
      // 拖拽时取电路图中0.4~2.0的取值范围;
      this.appService.VCUA = Number((_left * (1.6 / 57) + 0.4).toFixed(1));
      // 拖拽时取电路图中0.8~4.1的取值范围;
      // this.appService.VCUB = Number((_left * (3.3 / 57) + 0.8).toFixed(1));
      // 拖拽时取电路图中0.6~3.3的取值范围;
      this.appService.VCUC = Number((_left * (2.7 / 57) + 0.6).toFixed(1));
      // 拖拽时取电路图中0.2~1.5的取值范围;
      this.appService.VCUD = Number((_left * (1.3 / 57) + 0.2).toFixed(1));
    }
    this.obdscanService.Zdata.reloadCurrenDataStream();

    this.multimeterService.Mdata.isDrop(null, null, null);
    // console.log(this.multimeterService.Mdata.wybShow);

    if (
      (this.gearPanelService.controlStalls === 1 ||
        this.gearPanelService.controlStalls === 3) &&
      this.gearPanelService.isBrake == 1
    ) {
      // console.log(this.multimeterService.Mdata.Adata['1'].dvNum.toall[12]);

      // 控制中d心档位在r和d档
      this.handleErrorService.handleError({ message: "请松开刹车踏板" });
      return;
    }

    // 加速踏板拖拽动画
    this.gearPanelService.accDrag(newLeft, oldLeft);
    this.dashboardService.Mint.In1NER_APP_NO1_x_x = newLeft + "";
    $(".data-show").html(newLeft);
    let speed = newLeft + 10;
    if (this.gearPanelService.controlStalls === 3) {
      clearTimeout(this.clearTimer1);
      clearTimeout(this.clearTimer2);
      this.obdscanService.Zdata.motorSpeed =
        1500 + Math.floor(_left * (298.22 / 2));
      if ((this.appService.progressData.describeFlag == 17 && this.appService.moni1IsOk) || (this.appService.progressData.describeFlag == 23 && this.appService.moni2IsOk) || (this.appService.progressData.describeFlag == 29 && this.appService.moni3IsOk) || (this.appService.progressData.describeFlag == 35 && this.appService.moni4IsOk) || this.appService.progressData.describeFlag == 37 || (this.appService.progressData.describeFlag == 39 && parseInt(this.skillService.T_Pin_Install) && parseInt(this.skillService.V_Pin_Install)) || this.appService.progressData.describeFlag == 41) { 
        Window["gear"].forwardGetInputGear(newLeft);
      }
    } else if (this.gearPanelService.controlStalls === 1) {
      clearTimeout(this.clearTimer1);
      clearTimeout(this.clearTimer2);
      this.obdscanService.Zdata.motorSpeed =
        800 + Math.floor(_left * (298.22 / 4.593));
        if ((this.appService.progressData.describeFlag == 17 && this.appService.moni1IsOk) || (this.appService.progressData.describeFlag == 23 && this.appService.moni2IsOk) || (this.appService.progressData.describeFlag == 29 && this.appService.moni3IsOk) || (this.appService.progressData.describeFlag == 35 && this.appService.moni4IsOk) || this.appService.progressData.describeFlag == 37 || (this.appService.progressData.describeFlag == 39 && parseInt(this.skillService.T_Pin_Install) && parseInt(this.skillService.V_Pin_Install)) || this.appService.progressData.describeFlag == 41) { 
        Window["gear"].reversalGetInputGear(newLeft);
      }
    }
  }

  // 同步拖动油门停止
  dragStopAccelerator() {
    clearTimeout(this.timeout);
    let _top = parseInt($(".accelerator").css("top"));

    let currentTopNumber = Math.floor(_top * (176 / 129)) + 16;
    if(this.skillService.V_Pin_Install=='1'&&this.skillService.T_Pin_Install=='1'){
      this.obdscanService.Zdata.acceleratorPedalPosition = "16";
      this.appService.VCUB = 0.8;
    }
    // 拖拽时取电路图中0.4~2.0的取值范围;
    this.appService.VCUA = 0.4;
    // 拖拽时取电路图中0.8~4.1的取值范围;
    // this.appService.VCUB = 0.8;
    // 拖拽时取电路图中0.6~3.3的取值范围;
    this.appService.VCUC = 0.6;
    // 拖拽时取电路图中0.2~1.5的取值范围;
    this.appService.VCUD = 0.2;

    if (
      this.multimeterService.Mdata.currentPinOut !== "allOut" &&
      this.multimeterService.Mdata.currentPinOut !== "offT6"
    ) {
      this.obdscanService.Zdata.dataStreamContent.VCUA = String(
        this.appService.VCUA
      );
      this.obdscanService.Zdata.dataStreamContent.VCUB = String(
        this.appService.VCUB
      );
      this.obdscanService.Zdata.dataStreamContent.VCUC = String(
        this.appService.VCUC
      );
      this.obdscanService.Zdata.dataStreamContent.VCUD = String(
        this.appService.VCUD
      );
    }
    this.obdscanService.Zdata.reloadCurrenDataStream();

    $(".accelerator").css("top", "0");
    if (
      this.gearPanelService.controlStalls === 3 &&
      this.gearPanelService.isBrake !== 1
    ) {
      clearTimeout(this.clearTimer1);
      this.clearTimer2 = setInterval(() => {
        this.stopMotorSpeedD();
      }, 50);
      if ((this.appService.progressData.describeFlag == 17 && this.appService.moni1IsOk) || (this.appService.progressData.describeFlag == 23 && this.appService.moni2IsOk) || (this.appService.progressData.describeFlag == 29 && this.appService.moni3IsOk) || (this.appService.progressData.describeFlag == 35 && this.appService.moni4IsOk) || this.appService.progressData.describeFlag == 37 || (this.appService.progressData.describeFlag == 39 && parseInt(this.skillService.T_Pin_Install) && parseInt(this.skillService.V_Pin_Install)) || this.appService.progressData.describeFlag == 41) { 
        Window["gear"].forwardGetInputGear(currentTopNumber, 1);
      }
    } else if (
      this.gearPanelService.controlStalls === 1 &&
      this.gearPanelService.isBrake !== 1
    ) {
      clearTimeout(this.clearTimer1);
      this.clearTimer2 = setInterval(() => {
        this.stopMotorSpeedR();
      }, 100);
      if ((this.appService.progressData.describeFlag == 17 && this.appService.moni1IsOk) || (this.appService.progressData.describeFlag == 23 && this.appService.moni2IsOk) || (this.appService.progressData.describeFlag == 29 && this.appService.moni3IsOk) || (this.appService.progressData.describeFlag == 35 && this.appService.moni4IsOk) || this.appService.progressData.describeFlag == 37 || (this.appService.progressData.describeFlag == 39 && parseInt(this.skillService.T_Pin_Install) && parseInt(this.skillService.V_Pin_Install)) || this.appService.progressData.describeFlag == 41) { 
        Window["gear"].reversalGetInputGear(currentTopNumber, 1);
      }
    }

    this.multimeterService.Mdata.isDrop(null, null, null);
    this.dashboardService.Mint.In1NER_APP_NO1_x_x = "16";

    $(".data-show").html("16");
    // 控制中心档位在r和d档
    if (
      (this.gearPanelService.controlStalls == 1 ||
        this.gearPanelService.controlStalls == 3) &&
      this.gearPanelService.isBrake == 1
    ) {
      this.handleErrorService.handleError({ message: "请松开刹车踏板" });
      return;
    }
    // 加速踏板松开动画
    this.accRelease();
    this.gearPanelService.isDrag = 2;
    // 进度记录
    this.communicationService.setAction({
      id: "ver011",
      flag: "",
      sub: "",
      value: undefined
    });
  }

  dragAcc(): void {
    var _this = this;
    //给新面板加上拖拽事件
    $(".accelerator").draggable({
      containment: ".gear-accelerator",
      cursor: "move",
      axis: "y",
      start: function() {
        _this.dragStartAccelerator();
      },
      drag: function() {
        _this.dragDragAccelerator();
      },
      stop: function() {
        _this.dragStopAccelerator();
      }
    });
  }

  getValue() {
    let _this = this;
    function rotate() {
      _this.dashboardService.Mout.Out1DrMotor_x_Power_x_x =
        _this.speedArrLeft[_this.speedArrLeftGet[0]];
      _this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x =
        _this.speedArrRight[0];
      _this.obdscanService.Zdata.resultVerificationSpeedGood =
        _this.resultVerificationSpeedGood[0];
      if (_this.dashboardService.stalls == 0) {
        _this.speedArrLeftGet = [];
        _this.speedArrRight = [0];
      }
      if (_this.speedArrLeftGet.length > 1) {
        _this.speedArrLeftGet.shift();
      }
      if (_this.speedArrRight.length > 1) {
        _this.speedArrRight.shift();
      }
      if (_this.resultVerificationSpeedGood.length > 1) {
        _this.resultVerificationSpeedGood.shift();
      } else {
        _this.obdscanService.Zdata.resultVerificationSpeedGood = 0;
      }
    }
    setInterval(() => {
      rotate();
    }, 80);
  }
  /*
   *
   * 档位事件
   *
   * */
  switchGear(id, obj) {
    this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x = 0;
    Window["gear"].meterAry = [0];
    // console.log(dashboardService.Mint.In1Mot_Gear_Signal_x_x +',,,,'+id)
    if (this.dashboardService.Mint.In1Mot_Gear_Signal_x_x == id) {
      return;
    }
    // console.log(this.dashboardService.stalls);
    // 档位在on档;
    console.log(this.dashboardService.stalls, 'opopop');
    if (this.dashboardService.stalls == 1) {
      if (id == 1) {
        // 啥车踩下
        if (this.gearPanelService.isBrake == 0) {
          this.handleErrorService.handleError({
            message: "请确认刹车踏板已踩下"
          });
          return;
        }

        this.gearPanelService.controlStalls = 1;
          this.gearPanelService.currentStallText = "R";
        this.dashboardService.stallScintillation(this.dashboardService.pageLight[this.appService.progressData.describeFlag], 'N')

        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "1";

        $(".gear-switch").css("transform", "rotate(-90deg)");

        $(".circuit-stalls").attr("stroke", "#231815");

        $(".circuit-r").attr("stroke", "#28C2FF");
        if(this.appService.progressData.describeFlag===13||this.appService.progressData.describeFlag===15||(this.appService.progressData.describeFlag===17&&!this.appService.moni1IsOk)){
          $(".gear-stalls").html("N");
        }else{
          $(".gear-stalls").html("R");
        }
        //进度记录
        this.communicationService.setAction({
          id: "ver012",
          flag: "",
          sub: "",
          value: undefined
        });
        if (this.gearPanelService.reverseFun()) {
          this.gearPanelService.reverseFun();
        }
      } else if (id == 2) {
        if (this.gearPanelService.isBrake == 0) {
          this.handleErrorService.handleError({
            message: "请确认刹车踏板已踩下"
          });
          return;
        }
        this.gearPanelService.controlStalls = 2;
        this.gearPanelService.currentStallText = "N";
        this.dashboardService.stallScintillation(this.dashboardService.pageLight[this.appService.progressData.describeFlag], 'N')

        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "2";

        $(".gear-switch").css("transform", "rotate(-44deg)");

        $(".circuit-stalls").attr("stroke", "#231815");

        $(".circuit-n").attr("stroke", "#28C2FF");

        $(".gear-stalls").html("N");

        this.gearPanelService.stopanimate();
        if (this.gearPanelService.neutralFun()) {
          this.gearPanelService.neutralFun();
        }
      } else if (id == 3) {
        if (this.gearPanelService.isBrake == 0) {
          this.handleErrorService.handleError({
            message: "请确认刹车踏板已踩下"
          });
          return;
        }
        this.gearPanelService.controlStalls = 3;

          this.gearPanelService.currentStallText = "D";
        this.dashboardService.stallScintillation(this.dashboardService.pageLight[this.appService.progressData.describeFlag], 'N')

        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "3";

        $(".gear-switch").css("transform", "rotate(0deg)");

        $(".circuit-stalls").attr("stroke", "#231815");

        $(".circuit-d").attr("stroke", "#28C2FF");

        if(this.appService.progressData.describeFlag===13||this.appService.progressData.describeFlag===15||(this.appService.progressData.describeFlag===17&&!this.appService.moni1IsOk)){
          $(".gear-stalls").html("N");
        }else{
          $(".gear-stalls").html("D");
        }

        //进度记录
        this.communicationService.setAction({
          id: "ver012",
          flag: "",
          sub: "",
          value: undefined
        });
        if (this.gearPanelService.driveFun()) {
          this.gearPanelService.driveFun();
        }
      }

      //页面动画先初始化一下
      //stallsInit();
      //circuitInit();

      //按钮样式
      $(".state-wrap span").removeClass("active");
      $(obj).addClass("active");
    }
  }

  /*
   *
   * 松开刹车动画
   *
   * */
  releaseBrake() {
    let pageTimer = {
      mask: null
    };

    //松开刹车
    //r
    // console.log(this.dashboardService.stalls);
    if (
      this.gearPanelService.controlStalls == 1 &&
      this.dashboardService.stalls == 1
    ) {
      //stallsRAnimate(1);
      $(".block-slide2").show();
      $(".block-slide1").hide();
      //流向控制电机
      $(".line-flow1").show();
      $(".line-flow2").hide();
      clearInterval(pageTimer["mask"]);

      pageTimer["mask"] = setInterval(function() {
        if ($(".line-mask4").css("display") == "none") {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").hide();
          $(".line-mask4,.line-mask5").show();
        } else if ($(".line-mask3").css("display") == "none") {
          $(".line-mask1,.line-mask2").hide();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").show();
        } else if ($(".line-mask1").css("display") == "none") {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").hide();
        } else {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").hide();
        }
      }, 300);
    } else if (
      this.gearPanelService.controlStalls == 3 &&
      this.dashboardService.stalls == 1
    ) {
      //stallsDAnimate(1);

      $(".block-slide2").show();
      $(".block-slide1").hide();
      //流向控制电机
      $(".line-flow1").show();
      $(".line-flow2").hide();

      clearInterval(pageTimer["mask"]);

      pageTimer["mask"] = setInterval(function() {
        if ($(".line-mask4").css("display") == "none") {
          $(".line-mask1,.line-mask2").hide();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").show();
        } else if ($(".line-mask1").css("display") == "none") {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").hide();
          $(".line-mask4,.line-mask5").show();
        } else if ($(".line-mask3").css("display") == "none") {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").hide();
        } else {
          $(".line-mask1,.line-mask2").show();
          $(".line-mask3").show();
          $(".line-mask4,.line-mask5").hide();
        }
      }, 300);
    }
  }

  /*
*
* 加速踏板拖动动画
*
* */

  // accDrag(newLeft, oldLeft) {
  //   let speedListener = 0;
  //   let times = 0;
  //   //console.log('------------------------------------');
  //   //如果是往上滑动，就是减速，减速动画改变
  //   if ((this.gearPanelService.controlStalls == 1 || this.gearPanelService.controlStalls == 3) && this.dashboardService.stalls == 1 && this.gearPanelService.isBrake == 0 && this.gearPanelService.isDrag == 1) {
  //     if (newLeft == oldLeft) {
  //       if (this.gearPanelService.rackAcceleratorFun()) {
  //         this.gearPanelService.rackAcceleratorFun()
  //       }

  //       //return false;
  //     } else {
  //       if (oldLeft > newLeft) {
  //         if (this.gearPanelService.minusAcceleratorFun()) {
  //           this.gearPanelService.minusAcceleratorFun()
  //         }
  //         $('.block-slide1').show();
  //         $('.block-slide2').hide();
  //         //流向动力电池
  //         $('.line-flow1').hide();
  //         $('.line-flow2').show();
  //       } else {
  //         if (this.gearPanelService.addAcceleratorFun()) {
  //           this.gearPanelService.addAcceleratorFun()
  //         }
  //         $('.block-slide1').hide();
  //         $('.block-slide2').show();
  //         //流向动力电池
  //         $('.line-flow1').show();
  //         $('.line-flow2').hide();
  //       }
  //     }

  //   }
  // }
}
