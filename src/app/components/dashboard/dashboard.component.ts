import { Component, OnDestroy } from "@angular/core";
import { DashboardService } from "../dashboard/dashboard.service";
import { GearPanelService } from "../gear_panel/gear_panel.service";
import { ObdscanService } from "../obdscan/obdscan.service";
import { CommunicationService } from "../communication/communication.service";
import { AppService } from "../../index/app.service";
import { CoursePrepareService } from "../../views/course_prepare/course_prepare.service";
import { MultimeterService } from "../../components/multimeter";

declare let $: any;
declare let io: any;
@Component({
  selector: "dashboard",
  providers: [],
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent {
  timerDashBoardPointer;
  dashboardShowFlag: boolean = false;

  constructor(
    public obdscanService: ObdscanService,
    public dashboardService: DashboardService,
    public gearPanelService: GearPanelService,
    public communicationService: CommunicationService,
    public appService: AppService,
    public coursePrepareService: CoursePrepareService,
    public multimeterService: MultimeterService
  ) {}
  ngOnInit() {
    setTimeout(() => {
      this.dragDiv();
    }, 100);
    if (this.dashboardService.dashboardCurrentState === 2) {
      this.dashboardService.isFlag = true;
      // this.obdscanService.Zdata.pageRecord = 'noCommunication';
    }
    this.stallsAngle(this.dashboardService.dashboardCurrentState);
  }

  ngOnDestroy() {
    this.dashboardService.gearStallsHalo = "";
    this.dashboardService.isFlag = false;
  }

  setDashboard(top, left) {
    $(".dashboard-body").css({ top: top, left: left });
  }

  // onGearFun() {
  //     if(this.dashboardService.onGearContinue){
  //         this.dashboardService.onGearContinue=false;
  //         return false;
  //     }
  //      this.dashboardService.onGearContinue=true;
  //     console.log("heheh");
  // }
  dragDiv(): void {
    // 给新面板加上拖拽事件
    $(".dashboard-body").draggable({
      containment: ".container",
      cursor: "move"
    });
  }

  /*
  *
  *仪表的打开和关闭
  *
  * */

  dashboardShowOrHide(param) {
    this.coursePrepareService.closeTool(param);
    $(".dashboard1").css('display', 'block');
    if (this.dashboardService.dashboardCurrentState === 2) {
      $(".dashboard-body").css('display', 'none');
      return;
    }
    this.dashboardService.stalls = 0;
    this.dashboardService.dashboardShowFlag = false;
  }

  stallsAngle(val) {
    // 如果档位在lock档就跳出
    this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x = 0;
    if (val == this.dashboardService.stalls + 1) {
      return false;
    }

    // 首次点击时
    if (val == 1) {
      let MediaJin = document.getElementById("jin");
      let MediaTui = document.getElementById("tui");
      if (MediaJin || MediaTui) {
        MediaJin["pause"]();
        MediaTui["pause"]();
      }
      this.dashboardService.dashboardCurrentState = val;
      this.dashboardService.isFlag = false;
      this.dashboardService.lightFunDefine.closeLight();
      $(".faultText").html("");
      Array.from($(".faultLight span")).map((item, index) => {
        console.log($(item));
        $(item).hide();
      });
      this.obdscanService.Zdata.onORlock = 0; // 当前档位位置；
      this.obdscanService.Zdata.showNotCommunication(); // 仪表盘在ON档或LOCK档的情况（主要和诊断仪有关）
      if (this.dashboardService.lockGearFun()) {
        this.dashboardService.lockGearFun();
        return this.dashboardService.lockGearContinue;
      }

      if (this.dashboardService.lockGearContinue) {
        if (this.timerDashBoardPointer) {
          clearInterval(this.timerDashBoardPointer);
        }

        this.obdscanService.Zdata.obdscanOpen = false;
        // 模型通讯
        this.dashboardService.Mint.In1NER_IgnKey_LOCK_x_x = "1";
        this.dashboardService.Mint.In1NER_IgnKey_ON_x_x = "0";
        // 按钮旋转
        $(".ignition").css("transform", "rotate(0deg)");
        $(".dashborad-screen").show();

        // 转速指针旋转
        $(".pointer-right").css({
          transform: "rotate(0deg)",
          "-ms-transform": "rotate(0deg)",
          "-moz-transform": "rotate(0deg)",
          "-webkit-transform": "rotate(0deg)"
        });
        $(".pointer-left").css({
          transform: "rotate(0deg)",
          "-ms-transform": "rotate(0deg)",
          "-moz-transform": "rotate(0deg)",
          "-webkit-transform": "rotate(0deg)"
        });

        //诊断仪断开
        if (!this.obdscanService.Zdata.obdscanOpen) {
          if ($.inArray("obdscan2", this.obdscanService.Zdata.memory) != -1) {
            this.obdscanService.Zdata.memory.pop();
          }
        }

        //档位信号
        this.gearPanelService.controlStalls = 0;
        //档位信号
        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "0";
        // 按钮样式
        $(".gear-switch").css("transform", "rotate(-44deg)");
        $(".state-wrap span").removeClass("active");
        this.dashboardService.stalls = 0;
      }

      this.multimeterService.Mdata.isDrop(null, null, null);
      this.multimeterService.Mdata.isOscilloscopeDrop();
    } else if (val == 2) {
      // 仪表盘灯点亮，2S熄灭
      this.dashboardService.dashboardCurrentState = val;
      this.obdscanService.Zdata.onORlock = 1; // 当前档位位置
      this.dashboardService.lightFun(
        this.dashboardService.pageLight[
          this.appService.progressData.describeFlag
        ]
      );
      this.dashboardService.stallScintillation(
        this.dashboardService.pageLight[
          this.appService.progressData.describeFlag
        ],
        "N"
      );
      if (!this.dashboardService.isFlag) {
        this.obdscanService.Zdata.showNotCommunication();
      }
      this.gearPanelService.currentStallText = "N";

      // lock档位是否执行自有的任务
      if (this.dashboardService.onGearContinue) {
        let _this: any = this;
        this.obdscanService.Zdata.obdscanOpen = true;
        // 模型通讯
        this.dashboardService.Mint.In1NER_IgnKey_LOCK_x_x = "0";
        this.dashboardService.Mint.In1NER_IgnKey_ON_x_x = "1";

        $(".ignition").css("transform", "rotate(90deg)"); // 按钮旋转
        $(".dashborad-screen").hide();
        $(".pointer-left").css({
          transform: "rotate(0deg)",
          "-ms-transform": "rotate(0deg)",
          "-moz-transform": "rotate(0deg)",
          "-webkit-transform": "rotate(0deg)"
        });
        if (this.timerDashBoardPointer) {
          clearInterval(this.timerDashBoardPointer);
        }
        this.timerDashBoardPointer = setInterval(function() {
          var angle =
            _this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x * 1.1125;
          let angle1 =
            _this.dashboardService.Mout.Out1DrMotor_x_Power_x_x * 1.1125;
          //转速指针旋转
          $(".pointer-right").css({
            transform: "rotate(" + "-" + angle + "deg)",
            "-ms-transform": "rotate(" + "-" + angle + "deg)",
            "-moz-transform": "rotate(" + "-" + angle + "deg)",
            "-webkit-transform": "rotate(" + "-" + angle + "deg)"
          });
          $(".pointer-left").css({
            transform: "rotate(" + angle1 + "deg)",
            "-ms-transform": "rotate(" + angle1 + "deg)",
            "-moz-transform": "rotate(" + angle1 + "deg)",
            "-webkit-transform": "rotate(" + angle1 + "deg)"
          });
        }, 100);
        let obj = this.obdscanService.Zdata.memory.pop();
        if (obj) {
        }
        this.gearPanelService.controlStalls = 2;

        // 档位在on档
        this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "2";

        if (val == this.dashboardService.stalls + 1) {
          return false;
        }
        if (val == 1) {
          if (this.dashboardService.lockGearFun()) {
            this.dashboardService.lockGearFun();
            return this.dashboardService.lockGearContinue;
          }

          if (this.dashboardService.lockGearContinue) {
            if (this.timerDashBoardPointer) {
              clearInterval(this.timerDashBoardPointer);
            }

            this.obdscanService.Zdata.obdscanOpen = false;
            //模型通讯
            this.dashboardService.Mint.In1NER_IgnKey_LOCK_x_x = "1";
            this.dashboardService.Mint.In1NER_IgnKey_ON_x_x = "0";
            //按钮旋转
            $(".ignition").css("transform", "rotate(0deg)");
            $(".dashborad-screen").show();

            //转速指针旋转
            $(".pointer-right").css({
              transform: "rotate(0deg)",
              "-ms-transform": "rotate(0deg)",
              "-moz-transform": "rotate(0deg)",
              "-webkit-transform": "rotate(0deg)"
            });
            $(".pointer-left").css({
              transform: "rotate(0deg)",
              "-ms-transform": "rotate(0deg)",
              "-moz-transform": "rotate(0deg)",
              "-webkit-transform": "rotate(0deg)"
            });

            //诊断仪断开
            if (!this.obdscanService.Zdata.obdscanOpen) {
              // this.obdscanService.Zdata.url = 'guzhang';
              if (
                $.inArray("obdscan2", this.obdscanService.Zdata.memory) != -1
              ) {
                this.obdscanService.Zdata.memory.pop();
              }
            }
            //档位信号
            this.gearPanelService.controlStalls = 0;
            //档位信号
            this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "0";
            // 按钮样式
            $(".gear-switch").css("transform", "rotate(-44deg)");
            $(".state-wrap span").removeClass("active");
            this.dashboardService.stalls = 0;
          }
        } else if (val == 2) {
          if (this.dashboardService.onGearFun()) {
            this.dashboardService.onGearFun();
            return false;
          }
          if (this.dashboardService.onGearContinue) {
            let _this: any = this;
            this.obdscanService.Zdata.obdscanOpen = true;
            // 模型通讯
            this.dashboardService.Mint.In1NER_IgnKey_LOCK_x_x = "0";
            this.dashboardService.Mint.In1NER_IgnKey_ON_x_x = "1";
            // 按钮旋转
            $(".ignition").css("transform", "rotate(90deg)");
            $(".dashborad-screen").hide();
            $(".pointer-left").css({
              transform: "rotate(0deg)",
              "-ms-transform": "rotate(0deg)",
              "-moz-transform": "rotate(0deg)",
              "-webkit-transform": "rotate(0deg)"
            });
            if (this.timerDashBoardPointer) {
              clearInterval(this.timerDashBoardPointer);
            }
            this.timerDashBoardPointer = setInterval(function() {
              if (_this.gearPanelService.controlStalls === 3) {
                var angle1 = Window["gear"].forwardOilPointer() * 1.1125;
                var angle = Window["gear"].forwardMeterPointer() * 1.125;
                _this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x = Window[
                  "gear"
                ].forwardMeterPointer();
                _this.dashboardService.Mout.Out1DrMotor_x_Power_x_x = Window[
                  "gear"
                ].forwardOilPointer();
              } else if (_this.gearPanelService.controlStalls === 1) {
                var angle1 = Window["gear"].reversalOilPointer() * 1.1125;
                var angle = Window["gear"].reversalMeterPointer() * 1.1125;
                _this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x = Window[
                  "gear"
                ].reversalMeterPointer();
                _this.dashboardService.Mout.Out1DrMotor_x_Power_x_x = Window[
                  "gear"
                ].reversalOilPointer();
              }
              //转速指针旋转
              $(".pointer-right").css({
                transform: "rotate(" + "-" + angle + "deg)",
                "-ms-transform": "rotate(" + "-" + angle + "deg)",
                "-moz-transform": "rotate(" + "-" + angle + "deg)",
                "-webkit-transform": "rotate(" + "-" + angle + "deg)"
              });
              $(".pointer-left").css({
                transform: "rotate(" + angle1 + "deg)",
                "-ms-transform": "rotate(" + angle1 + "deg)",
                "-moz-transform": "rotate(" + angle1 + "deg)",
                "-webkit-transform": "rotate(" + angle1 + "deg)"
              });
            }, 100);
            $(".pointer-left").css({
              transform: "rotate(50deg)",
              "-ms-transform": "rotate(50deg)",
              "-moz-transform": "rotate(50deg)",
              "-webkit-transform": "rotate(50deg)"
            });

            // }

            let obj = this.obdscanService.Zdata.memory.pop();
            if (obj) {
            }
            this.gearPanelService.controlStalls = 2;

            // 档位在on档
            this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "2";
            // 按钮样式

            $(".gear-stalls").html("N");
            $(".state-wrap .stateN").removeClass("active");
            $(".state-wrap .stateN").addClass("active");

            this.dashboardService.stalls = 1;

            // 记录进度点
            this.communicationService.setAction({
              id: "ver008",
              flag: "",
              sub: "",
              value: undefined
            });
          }
        }
      }

      this.multimeterService.Mdata.isDrop(null, null, null);
      this.multimeterService.Mdata.isOscilloscopeDrop();
    }
  }
}
