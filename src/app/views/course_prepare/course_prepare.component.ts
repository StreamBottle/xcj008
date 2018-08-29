import { Router } from "@angular/router";
import {
  Component,
  ViewEncapsulation,
  ElementRef,
  OnInit
} from "@angular/core";
import { AppService } from "../../index/app.service";
import { flyIn } from "../../animations/index";
import { SimulationService } from "../../components/simulation/simulation.service";
import { CommunicationService } from "../../components/communication/communication.service";
import { ObdscanService } from "../../components/obdscan/obdscan.service";
import { DashboardService } from "../../components/dashboard/dashboard.service";
import { GearPanelService } from "../../components/gear_panel/gear_panel.service";
import { MultimeterService } from "../../components/multimeter/multimeter.service";
import { OscilloscopeService } from "../../components/oscilloscope/oscilloscope.service";
import { CoursePrepareService } from "../course_prepare/course_prepare.service";
import { SkillService } from "../skill/skill.service";
import { StructureDescribe } from "../../interfaces/structure.describe";

declare const $;

@Component({
  selector: "component-courseprepare",
  providers: [],
  templateUrl: "./course_prepare.component.html",
  styleUrls: ["./course_prepare.component.scss"],
  animations: [flyIn]
})
export class CoursePrepareComponent implements OnInit {
  componentArray;
  rightNavIsShow: boolean = false; // 右侧导航显示
  rightNavAnimation: string = ""; // 右侧导航动画
  indexShow: boolean = true; // 首页是否显示
  remindContentShow: boolean = false; // 消息提醒内容的显示

  constructor(
    public router: Router,
    public obdscanService: ObdscanService,
    public dashboardService: DashboardService,
    public gearPanelService: GearPanelService,
    public multimeterService: MultimeterService,
    public appService: AppService,
    public simulationService: SimulationService,
    public communicationService: CommunicationService,
    public coursePrepareService: CoursePrepareService,
    public oscilloscopeService: OscilloscopeService,
    public skillService: SkillService
  ) { }
  ngOnInit() {
    // this.appService.navColorInit();

    window["leftFlip"] = () => {
      return this.leftFlip();
    };
    window["rightFlip"] = () => {
      return this.rightFlip();
    };
    window["dashboardTool"] = () => {
      // alert('dashboardTool01');
      return this.dashboardTool();
    };
    window["measureTool"] = () => {
      // alert('measureTool01');
      return this.measureTool();
    };

    if (
      this.appService.progressData.describeFlag >= 1 &&
      this.appService.progressData.describeFlag <= 3
    ) {
      this.router.navigate(["/courseprepare/scene"]);
      $(".scene")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("./assets/images/navBG.png") no-repeat',
          color: "#292c33",
          backgroundSize: "100%"
        });
    } else if (
      this.appService.progressData.describeFlag >= 4 &&
      this.appService.progressData.describeFlag <= 8
    ) {
      this.router.navigate(["/courseprepare/knowledge"]);
      $(".knowledge").css({
        borderBottomColor: "red"
      });
    } else if (
      this.appService.progressData.describeFlag >= 9 &&
      this.appService.progressData.describeFlag <= 22
    ) {
      this.router.navigate(["/courseprepare/skill"]);
      $(".skill").css({
        borderBottomColor: "red"
      });
    } else if (
      this.appService.progressData.describeFlag >= 23 &&
      this.appService.progressData.describeFlag <= 27
    ) {
      this.router.navigate(["/courseprepare/examination"]);
      $(".examination").css({
        borderBottomColor: "red"
      });
    }
    if (this.simulationService.init()) {
      this.simulationService.init();
    }
  }
  isPlay() {
    $('.alert').hide();
    $('.xiaob').append(
      '<video src="./assets/video/xbdh.mp4" autoplay style = "width:662px;height:418px;position:absolute;left:50%;top:50%;margin-left:-331px;margin-top:-259px"></video>'
    );
    this.appService.clearTimer = setTimeout(() => {
      // $('video').hide();
      $('.xiaob video').hide().remove();
      $('.alert').show();
      this.isClose();
    }, 14000);
    // this.isClose();
  }
  
  isClose() {
    $(".xiaob").hide();
    this.multimeterService.Mdata.multimeterStatus = true;
  }
  // 点击出现右导航
  rightNavShow() {
    $(".arrowR").hide();
    this.rightNavAnimation = "left";
    this.rightNavIsShow = true;
  }
  // 点击关闭右导航
  closeRightNav() {
    $(".arrowR").show(800);
    setTimeout(() => {
      this.rightNavIsShow = false;
    }, 100);
    this.rightNavAnimation = "right";
  }
  // 切换路由
  routeNav(routeJump) {
    let a = [
      "courseprepare/scene",
      "courseprepare/knowledge",
      "courseprepare/skill",
      "courseprepare/examination"
    ];
    a.map((a, i) => {
      console.log(routeJump, a);
      if (routeJump == a) {
        this.appService.OneNavState = i;
      }
    });
    console.log(this.appService.OneNavState);
    $(".skill-circuit").hide();
    this.multimeterService.Mdata.multimeterblackRecover();
    this.multimeterService.Mdata.multimeterredRecover();
    this.multimeterService.Mdata.closemultimeter();
    this.coursePrepareService.platformRouterTurn(
      ["tool", "controlCenter"],
      false
    );
    let pageOld = this.appService.progressData.describeFlag;

    switch (routeJump) {
      case "courseprepare/scene":
        this.appService.progressData.describeFlag = this.appService.sceneProgress;
        // if (this.appService.sceneIsPass) {
        //   this.appService.progressData.describeFlag = this.appService.sceneProgress;
        // }
        break;
      case "courseprepare/knowledge":
        this.coursePrepareService.scroll(".tyre-trail7", 1000, "up");
        this.appService.progressData.describeFlag = this.appService.knowledgeProgress;
        // if (this.appService.knowledgeIsPass) {
        //   this.appService.progressData.describeFlag = 4;
        // }
        break;
      case "courseprepare/skill":
        this.appService.progressData.describeFlag = this.appService.skillProgress;
        // if (this.appService.skillIsPass) {
        //   this.appService.progressData.describeFlag = 11;
        // }
        break;
      case "courseprepare/examination":
        this.appService.progressData.describeFlag = this.appService.examProgress;
        // if (this.appService.examIsPass) {
        //   this.appService.progressData.describeFlag = 20;
        // }
        break;
      default:
        return;
    }
    let isAllowTurn = this.coursePrepareService.isAllowClickTurn(routeJump.split('/')[1]);
    console.log(isAllowTurn, 'lalalalalalalalalalalal');
    if (!isAllowTurn) {
      this.appService.progressData.describeFlag = pageOld;
      return;
    }
    this.router.navigate([routeJump]);
    this.coursePrepareService.setStandingTime(this.appService.progressData.describeFlag, false, true);
    this.coursePrepareService.closeAll();
    $(".nav")
      .find("li")
      .find("span")
      .css({
        borderBottomColor: "#eb4e3d"
      });
    let newrouteJump = routeJump.split("/")[1];
    $("." + newrouteJump)
      .css({
        borderBottomColor: "#77797d"
      })
      .parent("li")
      .css({
        background: 'url("./assets/images/navBG.png") no-repeat',
        color: "#292c33",
        backgroundSize: "100%"
      })
      .siblings("li")
      .css({
        background: "#eb4e3d",
        color: "#fff"
      });
  }
  // 根据传进的不同参数显示不同的工具
  toolShow(str) {
    this.coursePrepareService.toolShow(str);
  }

  // 清除技能-故障诊断页面的电路图状态；
  clearNumber() {
    this.skillService.V_Pin_Install = "1";
    this.skillService.T_Pin_Install = "1";
    this.multimeterService.Mdata.currentPinOut = "toall";
  }
  // 翻页切换电路图
  changeBgpicCircuit(num) {
    if (num === 15) {
      this.appService.currentFault = '1';
      setTimeout(() => {
        $('.bgpic-circuit').css('backgroundImage', 'url(./assets/images/skill/1.png)');
      }, 100)
    } else if (num === 21) {
      this.appService.currentFault = '2';
      setTimeout(() => {
        $('.bgpic-circuit').css('backgroundImage', 'url(./assets/images/skill/5.png)');
      }, 100)
    } else if (num === 27) {
      this.appService.currentFault = '3';
      setTimeout(() => {
        $('.bgpic-circuit').css('backgroundImage', 'url(./assets/images/skill/9.png)');
      }, 100)
    } else if (num === 33) {
      this.appService.currentFault = '4';
      setTimeout(() => {
        $('.bgpic-circuit').css('backgroundImage', 'url(./assets/images/skill/13.png)');
      }, 100)
    } else if (num === 39) {
      this.appService.currentFault = '5';
      setTimeout(() => {
        $('.bgpic-circuit').css('backgroundImage', 'url(./assets/images/skill/17.png)');
      }, 100)
    }
  }
  // 向左翻页
  leftFlip() {
    $(".skill-circuit").hide();
    this.clearNumber();
    this.coursePrepareService.platformRouterTurn(
      ["tool", "controlCenter"],
      false
    );
    // if (this.appService.progressData.describeFlag === 21) {
    //   // this.appService.getCurrentScroll('shicaogongdanpage02');
    // }
    // 表笔不在测量的Flag回到初始位置
    // if (this.appService.progressData.describeFlag !== 12 || this.appService.progressData.describeFlag !== 16 || this.appService.progressData.describeFlag !== 22 || this.appService.progressData.describeFlag !== 26) {
    this.multimeterService.Mdata.multimeterblackRecover();
    this.multimeterService.Mdata.multimeterredRecover();
    this.multimeterService.Mdata.closemultimeter();
    this.coursePrepareService.closeTool("multimeters");
    this.dashboardService.stalls = 0;
    this.dashboardService.dashboardCurrentState = 1;
    this.dashboardService.isFlag = false;
    // }
    this.coursePrepareService.closeAll();
    if (this.appService.progressData.describeFlag === 1) {
      return;
    }
    this.appService.progressData.describeFlag--;
    let isAllow = this.coursePrepareService.recursionNext('left');
    if (!isAllow) return;
    this.changeBgpicCircuit(this.appService.progressData.describeFlag);
    if (this.appService.progressData.describeFlag === 15) {
      this.appService.currentFault = "1";
    } else if (this.appService.progressData.describeFlag === 21) {
      this.appService.currentFault = "2";
    } else if (this.appService.progressData.describeFlag === 27) {
      this.appService.currentFault = "3";
    } else if (this.appService.progressData.describeFlag === 33) {
      this.appService.currentFault = "4";
    } else if (this.appService.progressData.describeFlag === 39) {
      this.appService.currentFault = "5";
    }

    // if (this.appService.progressData.describeFlag === 11) {
    //   this.appService.currentFault = '1';
    // } else if (this.appService.progressData.describeFlag === 15) {
    //   this.appService.currentFault = '2';
    // } else if (this.appService.progressData.describeFlag === 19) {
    //   this.appService.currentFault = '3';
    // } else if (this.appService.progressData.describeFlag === 25) {
    //   this.appService.currentFault = '4';
    // }

    // if (this.appService.progressData.describeFlag !== 13) {
    //   this.appService.skillFault01IsGood = '0';
    // }
    // if (this.appService.progressData.describeFlag !== 17) {
    //   this.appService.skillFault02IsGood = '0';
    // }
    // if (this.appService.progressData.describeFlag !== 21) {
    //   this.appService.skillFault03IsGood = '0';
    // }
    // if (this.appService.progressData.describeFlag !== 27) {
    //   this.appService.examFault01IsGood = '0';
    // }

    // if (
    //   this.appService.progressData.describeFlag >= 1 ||
    //   this.appService.progressData.describeFlag <= 3
    // ) {
    //   this.appService.sceneProgress = this.appService.progressData.describeFlag;
    // }
    // if (
    //   this.appService.progressData.describeFlag >= 4 &&
    //   this.appService.progressData.describeFlag <= 8
    // ) {
    //   this.coursePrepareService.scroll('.tyre-trail7', 1000, 'up');
    //   this.appService.knowledgeProgress = this.appService.progressData.describeFlag;
    //   this.appService.knowledgeIsPass = false;
    // }
    // if (
    //   this.appService.progressData.describeFlag >= 9 &&
    //   this.appService.progressData.describeFlag <= 22
    // ) {
    //   this.appService.skillProgress = this.appService.progressData.describeFlag;
    //   this.appService.skillIsPass = false;
    // }
    // if (
    //   this.appService.progressData.describeFlag >= 23 &&
    //   this.appService.progressData.describeFlag <= 28
    // ) {
    //   this.appService.examProgress = this.appService.progressData.describeFlag;
    //   this.appService.examIsPass = false;
    // }

    // condition限制start



    // condition限制end
    console.log(this.appService.progressData.describeFlag);
    if (this.appService.progressData.describeFlag === 3 && this.appService.OneNavState === 1) {
      this.appService.sceneIsPass = false;
      this.router.navigate(["courseprepare/scene"]);
      this.appService.OneNavState = 0;
      console.log(this.appService.progressData.describeFlag, this.appService.OneNavState);
      $(".scene")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("../../../assets/images/navBG.png") no-repeat center',
          backgroundSize: "100%",
          color: "#292c33"
        })
        .siblings("li")
        .css({
          background: "#eb4e3d",
          color: "#fff"
        })
        .find("span")
        .css({
          borderBottomColor: "#eb4e3d"
        });
    }
    console.log(this.appService.progressData.describeFlag, this.appService.OneNavState);
    if (this.appService.progressData.describeFlag === 11 &&
      this.appService.OneNavState === 2) {
      this.appService.knowledgeIsPass = false;
      this.router.navigate(["courseprepare/knowledge"]);
      this.appService.progressData.describeFlag = 18;
      this.appService.OneNavState = 1;
      console.log(this.appService.progressData.describeFlag, this.appService.OneNavState);
      $(".knowledge")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("../../../assets/images/navBG.png") no-repeat center',
          backgroundSize: "100%",
          color: "#292c33"
        })
        .siblings("li")
        .css({
          background: "#eb4e3d",
          color: "#fff"
        })
        .find("span")
        .css({
          borderBottomColor: "#eb4e3d"
        });
    }
    if (this.appService.progressData.describeFlag === 34 &&
      this.appService.OneNavState === 3) {
      this.appService.skillIsPass = false;
      this.router.navigate(["courseprepare/skill"]);
      this.appService.progressData.describeFlag = 41;
      this.appService.OneNavState = 2;
      $(".skill")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("../../../assets/images/navBG.png") no-repeat center',
          backgroundSize: "100%",
          color: "#292c33"
        })
        .siblings("li")
        .css({
          background: "#eb4e3d",
          color: "#fff"
        })
        .find("span")
        .css({
          borderBottomColor: "#eb4e3d"
        });
    }

    if (this.appService.progressData.describeFlag === 8) {
      // this.hua();
    }
  }
  // 向右翻页
  rightFlip() {
    $(".skill-circuit").hide();
    this.clearNumber();
    this.coursePrepareService.platformRouterTurn(
      ["tool", "controlCenter"],
      false
    );

    // if (this.appService.progressData.describeFlag !== 12 || this.appService.progressData.describeFlag !== 16 || this.appService.progressData.describeFlag !== 22 || this.appService.progressData.describeFlag !== 26) {
    this.multimeterService.Mdata.multimeterblackRecover();
    this.multimeterService.Mdata.multimeterredRecover();
    this.multimeterService.Mdata.closemultimeter();
    this.coursePrepareService.closeTool("multimeters");
    this.dashboardService.stalls = 0;
    this.dashboardService.dashboardCurrentState = 1;
    this.dashboardService.isFlag = false;
    // }
    this.coursePrepareService.closeAll();
    if (this.appService.progressData.describeFlag === 41 && this.appService.OneNavState === 3) {
      return;
    }

    this.appService.progressData.describeFlag++;
    let isAllow = this.coursePrepareService.recursionNext('right');
    if (!isAllow) return;
    this.changeBgpicCircuit(this.appService.progressData.describeFlag);
    if (this.appService.progressData.describeFlag === 15) {
      this.appService.currentFault = "1";
    } else if (this.appService.progressData.describeFlag === 21) {
      this.appService.currentFault = "2";
    } else if (this.appService.progressData.describeFlag === 27) {
      this.appService.currentFault = "3";
    } else if (this.appService.progressData.describeFlag === 33) {
      this.appService.currentFault = "4";
    } else if (this.appService.progressData.describeFlag === 39) {
      this.appService.currentFault = "5";
    }

    // if (this.appService.progressData.describeFlag === 11) {
    //   this.appService.currentFault = '1';
    // } else if (this.appService.progressData.describeFlag === 15) {
    //   this.appService.currentFault = '2';
    // } else if (this.appService.progressData.describeFlag === 19) {
    //   this.appService.currentFault = '3';
    // } else if (this.appService.progressData.describeFlag === 25) {
    //   this.appService.currentFault = '4';
    // }

    // if (this.appService.progressData.describeFlag !== 13) {
    //   this.appService.skillFault01IsGood = '0';
    // }
    // if (this.appService.progressData.describeFlag !== 17) {
    //   this.appService.skillFault02IsGood = '0';
    // }
    // if (this.appService.progressData.describeFlag !== 21) {
    //   this.appService.skillFault03IsGood = '0';
    // }
    // if (this.appService.progressData.describeFlag !== 27) {
    //   this.appService.examFault01IsGood = '0';
    // }

    // if (
    //   this.appService.progressData.describeFlag === 2 ||
    //   this.appService.progressData.describeFlag === 3
    // ) {
    //   this.appService.sceneProgress = this.appService.progressData.describeFlag;
    // }
    // if (
    //   this.appService.progressData.describeFlag >= 4 &&
    //   this.appService.progressData.describeFlag <= 8
    // ) {
    //   this.coursePrepareService.scroll('.tyre-trail7', 1000, 'up');
    //   this.appService.knowledgeProgress = this.appService.progressData.describeFlag;
    //   this.appService.knowledgeIsPass = false;
    // }
    // if (
    //   this.appService.progressData.describeFlag >= 9 &&
    //   this.appService.progressData.describeFlag <= 22
    // ) {
    //   this.appService.skillProgress = this.appService.progressData.describeFlag;
    //   this.appService.skillIsPass = false;
    // }
    // if (
    //   this.appService.progressData.describeFlag >= 23 &&
    //   this.appService.progressData.describeFlag <= 28
    // ) {
    //   this.appService.examProgress = this.appService.progressData.describeFlag;
    //   this.appService.examIsPass = false;
    // }
    // if (
    //   this.appService.progressData.describeFlag === 2 ||
    //   this.appService.progressData.describeFlag === 3
    // ) {
    //   this.appService.sceneProgress = this.appService.progressData.describeFlag;
    // }
    // console.log(this.appService.progressData.describeFlag);
    if (this.appService.progressData.describeFlag === 4) {
      this.appService.knowledgeIsPass = false;
      this.router.navigate(["courseprepare/knowledge"]);
      this.appService.OneNavState = 1;
      console.log(this.appService.progressData.describeFlag, this.appService.OneNavState);
      $(".knowledge")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("../../../assets/images/navBG.png") no-repeat center',
          backgroundSize: "100%",
          color: "#292c33"
        })
        .siblings("li")
        .css({
          background: "#eb4e3d",
          color: "#fff"
        })
        .find("span")
        .css({
          borderBottomColor: "#eb4e3d"
        });
    }
    console.log(this.appService.progressData.describeFlag, this.appService.OneNavState);
    if (this.appService.progressData.describeFlag === 19 && this.appService.OneNavState === 1) {
      this.appService.skillIsPass = false;
      this.router.navigate(["courseprepare/skill"]);
      this.appService.progressData.describeFlag = 12;
      this.appService.OneNavState = 2;
      console.log(this.appService.progressData.describeFlag, this.appService.OneNavState);
      $(".skill")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("../../../assets/images/navBG.png") no-repeat center',
          backgroundSize: "100%",
          color: "#292c33"
        })
        .siblings("li")
        .css({
          background: "#eb4e3d",
          color: "#fff"
        })
        .find("span")
        .css({
          borderBottomColor: "#eb4e3d"
        });
    }
    if (this.appService.progressData.describeFlag === 42 && this.appService.OneNavState === 2) {
      this.appService.examIsPass = false;
      this.router.navigate(["courseprepare/examination"]);
      this.appService.progressData.describeFlag = 35;
      this.appService.OneNavState = 3;
      $(".examination")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("../../../assets/images/navBG.png") no-repeat center',
          backgroundSize: "100%",
          color: "#292c33"
        })
        .siblings("li")
        .css({
          background: "#eb4e3d",
          color: "#fff"
        })
        .find("span")
        .css({
          borderBottomColor: "#eb4e3d"
        });
    }

    if (this.appService.progressData.describeFlag === 8) {
      // this.hua();
    }
  }
  // 控制中心或工具栏显示或隐藏
  platformRouterTurn(param, flag, event?) {
    this.coursePrepareService.platformRouterTurn(param, flag, event);
  }

  dashboardTool() {
    // alert('dashboardTool02');
    this.coursePrepareService.platformRouterTurn(
      ["controlCenter"],
      true,
      "controlCenter"
    );
  }
  measureTool() {
    // alert('measureTool02');
    this.coursePrepareService.platformRouterTurn(["tool"], true, "measureTool");
  }

  // 消息提醒
  informationRemind() {
    this.remindContentShow = !this.remindContentShow;
  }
}
