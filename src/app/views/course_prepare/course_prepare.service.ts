import { Injectable } from "@angular/core";
import { AppService } from "../../index/app.service";
import { ObdscanService } from "../../components/obdscan/obdscan.service";
import { DashboardService } from "../../components/dashboard/dashboard.service";
import { GearPanelService } from "../../components/gear_panel/gear_panel.service";
import { MultimeterService } from "../../components/multimeter/multimeter.service";
import { OscilloscopeService } from "../../components/oscilloscope/oscilloscope.service";
import { Router } from "@angular/router";
import { CommunicationService } from "../../components/communication/communication.service";
import { HandleErrorService } from "../../components/handle_error/handle_error.service";

declare var $: any;
@Injectable()
export class CoursePrepareService {
  curIsCourseBefore = 'in'; // 当前是课前课中还是课后
  public characterCStandingTimeArr = []; // 获取characterC中的停留时间Time
  constructor(
    private obdscanService: ObdscanService,
    private dashboardService: DashboardService,
    private gearPanelService: GearPanelService,
    private multimeterService: MultimeterService,
    private oscilloscopeService: OscilloscopeService,
    private appService: AppService,
    private communicationService: CommunicationService,
    private handleErrorService: HandleErrorService,
    private router: Router
  ) {
    this.appService.startStudyEventAdd('exportCharacterCStandingTime', () => {
      return this.changeCharacterCStandingTimeArr();
    });
  }

  changeCharacterCStandingTimeArr() {
    this.characterCStandingTimeArr = this.exportCharacterCStandingTime();
  }
  // 关闭工具，下方工具框显示
  closeTool(param) {
    $("." + param).css("display", "block");
  }
  // 控制中心或工具栏显示或隐藏
  platformRouterTurn(param, flag, cont = undefined) {
    console.log(param, flag, cont);
    if (flag) {
      if (
        (cont == "measureTool" &&
          (this.appService.progressData.describeFlag == 2 ||
            (this.appService.progressData.describeFlag == 13 && this.appService.OneNavState == 2) ||
            (this.appService.progressData.describeFlag == 15 && this.appService.OneNavState == 2) ||
            (this.appService.progressData.describeFlag == 17 && this.appService.OneNavState == 2) ||
            this.appService.progressData.describeFlag == 19 ||
            this.appService.progressData.describeFlag == 21 ||
            this.appService.progressData.describeFlag == 23 ||
            this.appService.progressData.describeFlag == 25 ||
            this.appService.progressData.describeFlag == 27 ||
            this.appService.progressData.describeFlag == 29 ||
            this.appService.progressData.describeFlag == 31 ||
            this.appService.progressData.describeFlag == 33 ||
            (this.appService.progressData.describeFlag == 35 && this.appService.OneNavState == 2) ||
            this.appService.progressData.describeFlag == 37 ||
            this.appService.progressData.describeFlag == 39 ||
            this.appService.progressData.describeFlag == 41)) ||
        (cont == "controlCenter" &&
          (this.appService.progressData.describeFlag == 2 ||
            (this.appService.progressData.describeFlag == 13 && this.appService.OneNavState == 2) ||
            (this.appService.progressData.describeFlag == 15 && this.appService.OneNavState == 2) ||
            (this.appService.progressData.describeFlag == 17 && this.appService.OneNavState == 2) ||
            this.appService.progressData.describeFlag == 19 ||
            this.appService.progressData.describeFlag == 21 ||
            this.appService.progressData.describeFlag == 23 ||
            this.appService.progressData.describeFlag == 25 ||
            this.appService.progressData.describeFlag == 27 ||
            this.appService.progressData.describeFlag == 29 ||
            this.appService.progressData.describeFlag == 31 ||
            this.appService.progressData.describeFlag == 33 ||
            (this.appService.progressData.describeFlag == 35 && this.appService.OneNavState == 2) ||
            this.appService.progressData.describeFlag == 37 ||
            this.appService.progressData.describeFlag == 39 ||
            this.appService.progressData.describeFlag == 41))
      ) {
        // alert(cont);
        // tslint:disable-next-line:no-unused-expression
        Array.isArray(param) &&
          param.map((item, index) => {
            $("." + item).css("display", "block");
          });
      } else {
        this.handleErrorService.handleError({ message: "此功能不可用" });
      }
    } else if (!flag) {
      // tslint:disable-next-line:no-unused-expression
      Array.isArray(param) &&
        param.map((item, index) => {
          $("." + item).css("display", "none");
        });
      // $('.instrument').css('display', 'block');
      // $('.multimeter').css('display', 'block');
      // $('.oscilloscope').css('display', 'block');
      // $('.Meter').css('display', 'block');
      // $('.pedal').css('display', 'block');
      // this.obdscanService.Zdata.obdscanStatus = false;
      // this.multimeterService.Mdata.multimeterStatus = false;
      // this.oscilloscopeService.Mdata.oscilloscopeStatus = false;
      // this.dashboardService.dashboardShowFlag = false;
      // this.gearPanelService.pedalShowFlag = false;
    }
  }
  // 切换页面工具箱的工具显示
  closeAll() {
    this.closeTool("multimeters");
    this.closeTool("dashboard1");
    this.closeTool("instrument");
    this.closeTool("oscilloscope");
    this.closeTool("pedal");
    this.dashboardService.dashboardCurrentState = 1;
    this.dashboardService.isFlag = false;
    this.obdscanService.Zdata.onORlock = 0;
    this.gearPanelService.controlStalls = 0;
    this.dashboardService.stalls = 0;
    this.dashboardService.Mint.In1Mot_Gear_Signal_x_x = "0";
    this.gearPanelService.pedalShowFlag = false;
    this.dashboardService.dashboardShowFlag = false;
    this.obdscanService.Zdata.obdscanStatus = false;
    this.multimeterService.Mdata.multimeterStatus = false;
    this.oscilloscopeService.Mdata.oscilloscopeStatus = false;
    this.oscilloscopeService.Mdata.oscilloscopeHide();
    this.multimeterService.Mdata.freshHontspot();
    this.multimeterService.Mdata.redPen = 0;
    this.multimeterService.Mdata.blackPen = 0;
    this.multimeterService.Mdata.wybShow = 0;
    this.multimeterService.Mdata.dropRedID = null;
    this.multimeterService.Mdata.dropBlackID = null;
    this.multimeterService.Mdata.multimeterScreenNum = "0";
    this.appService.jiaoBiao = false;
    clearTimeout(this.appService.clearTimer);
  }
  // 根据传进的不同参数显示不同的工具
  toolShow(str) {
    // 增加判断条件  只有当工具箱仪器隐藏的时候才可以显示     2018-5-28 nan.wang;
    switch (str) {
      case "instrument":
        if ($("." + str + "1").css("backgroundColor") == "rgb(170, 170, 170)") {
          return;
        }
        if (this.obdscanService.Zdata.obdscanStatus) {
          return;
        }
        this.obdscanService.Zdata.obdscanStatus = true;
        $("." + str).css("display", "none");
        break;
      case "multimeters":
        if ($("." + str + "1").css("backgroundColor") == "rgb(170, 170, 170)") {
          return;
        }
        if (this.multimeterService.Mdata.multimeterStatus) {
          return;
        }
        // $('.xiaob').show();
        this.appService.jiaoBiao = true;
        this.multimeterService.Mdata.multimeterStatus = true;
        $("." + str).css("display", "none");
        break;
      case "oscilloscope":
        if ($("." + str + "1").css("backgroundColor") == "rgb(170, 170, 170)") {
          return;
        }
        if (this.oscilloscopeService.Mdata.oscilloscopeStatus) {
          return;
        }
        this.oscilloscopeService.Mdata.oscilloscopeStatus = true;
        $("." + str).css("display", "none");
        break;
      case "dashboard":
        if ($("." + str + "1").css("backgroundColor") == "rgb(170, 170, 170)") {
          return;
        }
        $(".dashboard-body").css("display", "block");
        $("." + str + '1').css("display", "none");
        if (this.dashboardService.dashboardShowFlag) {
          return;
        }
        this.dashboardService.dashboardShowFlag = true;
        break;
      case "pedal":
        if ($("." + str + "1").css("backgroundColor") == "rgb(170, 170, 170)") {
          return;
        }
        if (this.gearPanelService.pedalShowFlag) {
          return;
        }
        this.gearPanelService.pedalShowFlag = true;
        $("." + str).css("display", "none");
        break;
      default:
        return;
    }
  }
  // 知识页面概述模块点击转动动画
  scroll(obj, time, direction?) {
    setTimeout(() => {
      var width = parseInt($(obj).css("width"));
      var height = parseInt($(obj).css("height"));
      var _top: any = 0;
      var _left: any = 0;
      var offsetTop = parseInt(_top) - height;
      var resetTop = parseInt(_top) + height;
      var offsetLeft = parseInt(_left) - width;
      var resetLeft = parseInt(_left) + width;
      let up = function () {
        $(obj).append(
          "<img width=" +
          width +
          " height=" +
          height +
          " style='position: absolute;top: 0;left: 0;border-radius: 5px;' src='./assets/images/function/tyre_" +
          obj.split("-")[1] +
          ".png' />"
        );
        $(obj)
          .find("img")
          .eq(0)
          .css({ top: "0px", left: "0px" })
          .stop()
          .animate({ top: offsetTop + "px" }, time, "linear", function () { });
        $(obj)
          .find("img")
          .eq(1)
          .css("top", resetTop + "px")
          .stop()
          .animate({ top: _top }, time, "linear", function () {
            removeDiv();
            up();
          });
      };
      let removeDiv = function () {
        $(obj)
          .find("img")
          .eq(0)
          .remove();
      };
      up();
    }, 100);
  }




  /**
 * @param id 当前页码的id
 * @param enter 当前是刚进入的页面
 * @param leave 当前是刚离开的页面
 * 设置当前页面的停留时间
 */
  recordInitTime = 0; // 记录进入页面的当前时间
  recordEndTime = 0; // 记录离开页面的当前时间
  currentStandingTime = 0;  // 页面停留的时间

  setStandingTime(page: number, enter: boolean, leave: boolean, route?) {
    console.log(this.characterCStandingTimeArr);
    console.log(page);
    console.log('');
    let route_page = route + '_' + page;
    // 根据页码定义并获取当前页面的id-----仅限当前固定页面的id
    let allId = {
      scene_1: 'chapter01_01_page_01',
      scene_2: 'chapter01_02_page_01',
      scene_3: 'chapter01_03_page_01',
      knowledge_4: 'chapter02_01_page_01',
      knowledge_5: 'chapter02_02_page_01',
      knowledge_6: 'chapter02_03_page_01',
      knowledge_7: 'chapter02_03_page_02',
      knowledge_8: 'chapter02_03_page_03',
      knowledge_9: 'chapter02_03_page_04',
      knowledge_10: 'chapter02_03_page_05',
      knowledge_11: 'chapter02_03_page_07',
      knowledge_12: 'chapter02_03_page_08',
      knowledge_13: 'chapter02_03_page_09',
      knowledge_14: 'chapter02_03_page_10',
      knowledge_15: 'chapter02_03_page_11',
      knowledge_16: 'chapter02_03_page_12',
      knowledge_17: 'chapter02_03_page_13',
      knowledge_18: 'chapter02_03_page_14',

      skill_12: 'chapter03_01_page_01',
      skill_13: 'chapter03_01_page_02',
      skill_14: 'chapter03_01_page_03',
      skill_15: 'chapter03_01_page_04',
      skill_16: 'chapter03_01_page_05',
      skill_17: 'chapter03_01_page_06',
      skill_18: 'chapter03_02_page_01',
      skill_19: 'chapter03_02_page_02',
      skill_20: 'chapter03_02_page_03',
      skill_21: 'chapter03_02_page_04',
      skill_22: 'chapter03_02_page_05',
      skill_23: 'chapter03_02_page_06',
      skill_24: 'chapter03_03_page_01',
      skill_25: 'chapter03_03_page_02',
      skill_26: 'chapter03_03_page_03',
      skill_27: 'chapter03_03_page_04',
      skill_28: 'chapter03_03_page_05',
      skill_29: 'chapter03_03_page_06',
      skill_30: 'chapter03_04_page_01',
      skill_31: 'chapter03_04_page_02',
      skill_32: 'chapter03_04_page_03',
      skill_33: 'chapter03_04_page_04',
      skill_34: 'chapter03_04_page_05',
      skill_35: 'chapter03_04_page_06',

      // skill_36: 'chapter03_07_page_01',
      // skill_37: 'chapter03_08_page_01',
      // skill_38: 'chapter03_09_page_01',
      // skill_39: 'chapter03_10_page_01',
      // skill_40: 'chapter03_11_page_01',
      // skill_41: 'chapter03_12_page_01',

      exam_29: 'chapter04_01_page_01',
      exam_30: 'chapter04_02_page_01',
      exam_31: 'chapter04_02_page_02',
      exam_32: 'chapter04_02_page_03',
      exam_33: 'chapter04_02_page_04',
      exam_34: 'chapter04_02_page_05',
      exam_35: 'chapter04_02_page_06',

    };

    if (!allId[route_page]) {
      return;
    }

    if (enter) {
      this.recordInitTime = +new Date();
    } else if (leave) {
      this.recordEndTime = +new Date();
      this.currentStandingTime = this.recordEndTime - this.recordInitTime;
      let isHasId = this.characterCStandingTimeArr[0].filter((i, iIndex, iArr) => {
        if (i.id == allId[route_page]) {
          console.log(i.id, allId[route_page])
        }
        return i.id == allId[route_page];
      });

      switch (isHasId.length) {
        case 0:
          break;
        default:
          isHasId[0]['standingTime'] ? isHasId[0]['standingTime'] = isHasId[0]['standingTime'] + this.currentStandingTime : isHasId[0]['standingTime'] = this.currentStandingTime;
      }
    }
    console.log(this.characterCStandingTimeArr);
    console.log(this.communicationService.communication.adapter.characterC);
    // this.setDirectoryRights();
  }

  /**
   * 导出characterC中的chapter页面停留时间，和新的页面停留时间进行设置或叠加，导出当前是课中课前还是课后的数组
   * pageArr----导出的页面page中的id，用于存储存储时间的页面id
   * conditionArr----导出的课前课中课后的id及condition数组
   */
  exportCharacterCStandingTime() {
    let pageArr = [];
    let conditionArr = [];

    // 根据characterC设置ID数组
    let getCharacterCChapter = (cont) => {
      // pushID
      let pushId = (item) => {
        console.log(item);
        if (item.page && item.page.length !== 0) {
          item.page.map((i, iIndex, iArr) => {
            pageArr.push(i);
          });
        }
        if (item.condition) {
          conditionArr.push(item);
        }
      };

      // 如果chapter是数组类型的情况
      let caseArray = (cont) => {
        cont
          .map((param, paramIndex, paramArr) => {
            param['chapter']
              .map((ele, eleIndex, eleArr) => {
                pushId(ele);
                if (ele['chapter']) {
                  ele['chapter'].map((eleChapter, eleChapterIndex) => {
                    pushId(eleChapter);
                  })

                }
              });
          });
      };

      // 如果chapter是对象类型的情况
      let caseObject = (cont) => {
        cont['chapter']
          .map((item, itemIndex, itemArr) => {
            pushId(item);
          });
      };

      console.log(cont);

      // tslint:disable-next-line:no-unused-expression
      Array.isArray(cont) ? caseArray(cont) : typeof cont === 'object' ? caseObject(cont) : '';
      // tslint:disable-next-line:no-unused-expression
      cont.chapter ? getCharacterCChapter(cont.chapter) : '';
    }
    getCharacterCChapter(this.communicationService.communication.adapter.characterC);
    console.log([pageArr, conditionArr])
    return [pageArr, conditionArr];
  }

  /**
   * 设置目录权限---在某些课前禁止点击的
   */
  setDirectoryRights() {
    let obj = {
      0: 'scene',
      1: 'knowledge',
      2: 'skill',
      3: 'exam',
    }

    let allId = {
      "scene_scene": 'chapter01',
      "knowledge_knowledge": 'chapter02',
      "skill_skill": 'chapter03',
      "exam_examination": 'chapter04',
      scene_1: 'chapter01_01',
      scene_2: 'chapter01_02',
      scene_3: 'chapter01_03',
      knowledge_4: 'chapter02_01',
      knowledge_5: 'chapter02_02',
      knowledge_6: 'chapter02_03',
      knowledge_7: 'chapter02_03',
      knowledge_8: 'chapter02_03',
      knowledge_9: 'chapter02_03',
      knowledge_10: 'chapter02_03',
      knowledge_11: 'chapter02_03',
      knowledge_12: 'chapter02_03',
      knowledge_13: 'chapter02_03',
      knowledge_14: 'chapter02_03',
      knowledge_15: 'chapter02_03',
      knowledge_16: 'chapter02_03',
      knowledge_17: 'chapter02_03',
      knowledge_18: 'chapter02_03',

      skill_12: 'chapter03_01',
      skill_13: 'chapter03_01',
      skill_14: 'chapter03_01',
      skill_15: 'chapter03_01',
      skill_16: 'chapter03_01',
      skill_17: 'chapter03_01',
      skill_18: 'chapter03_02',
      skill_19: 'chapter03_02',
      skill_20: 'chapter03_02',
      skill_21: 'chapter03_02',
      skill_22: 'chapter03_02',
      skill_23: 'chapter03_02',
      skill_24: 'chapter03_03',
      skill_25: 'chapter03_03',
      skill_26: 'chapter03_03',
      skill_27: 'chapter03_03',
      skill_28: 'chapter03_03',
      skill_29: 'chapter03_03',
      skill_30: 'chapter03_04',
      skill_31: 'chapter03_04',
      skill_32: 'chapter03_04',
      skill_33: 'chapter03_04',
      skill_34: 'chapter03_04',
      skill_35: 'chapter03_04',

      // skill_36: 'chapter03_07',
      // skill_37: 'chapter03_08',
      // skill_38: 'chapter03_09',
      // skill_39: 'chapter03_10',
      // skill_40: 'chapter03_11',
      // skill_41: 'chapter03_12',

      exam_35: 'chapter04_01',
      exam_36: 'chapter04_02',
      exam_37: 'chapter04_02',
      exam_38: 'chapter04_02',
      exam_39: 'chapter04_02',
      exam_40: 'chapter04_02',
      exam_41: 'chapter04_02'
    };

    /**
     * 查找Id----返回与当前课程的匹配是否匹配，是否是课前课中还是课后
     * @param param 传入的参数---可能是当前页数或大标题的名称
     */
    let findId = (param) => {
      let route = obj[this.appService.OneNavState];
      // console.log(route + '_' + param, '}}}}}}}}}}');
      // console.log(param);
      // console.log(this.characterCStandingTimeArr[1]);
      let curItem = this.characterCStandingTimeArr[1].filter((i, iIndex, iArr) => {
        // console.log(allId[route + '_' + param], i.id, param,'uiui');
        return i.id == allId[route + '_' + param];
      });

      let curState = curItem[0] && curItem[0].condition.filter((l, lIndex, lArr) => {
        return this.curIsCourseBefore == l.show;
      });

      // console.log(curItem, curState);

      if (!!curState && curState.length !== 0) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * 点击右侧翻页按钮时实现
     * @param param 传入的参数---可能是当前页数或大标题的名称
     */
    let plus = (param) => {
      let curState = findId(param);
      return curState;
    }

    /**
     * 点击左侧翻页按钮时实现
     * @param param 传入的参数---可能是当前页数或大标题的名称
     */
    let subtract = (param): Boolean => {
      let curState = findId(param);
      return curState;
    }

    /**
     * 点击导航时实现
     * @param param 传入的参数---可能是当前页数或大标题的名称
     */
    let clickNav = (param): Boolean => {
      let curState = findId(param);
      return curState;
    }
    // console.log(clickNav(this.appService.progressData.describeFlag));
    return [plus, subtract, clickNav];
  }


  // condition---暂时注释，调试用isAllowClickTurn，isAllowPlus，isAllowSubtract
  /**
   * 点击跳转页面按钮时是否允许跳转----如果定义的课中不能跳转的页面则不能跳转
   * @param param 点击按钮是接收的参数----为将要跳转的页数，或show，activity，result，summary
   */
  isAllowClickTurn(param) {
    let isAllowTurn = this.realizeDirectoryRights(param, 2);
    return isAllowTurn;
    // return true;
  }

  /**
   * @param 点击按钮是接收的参数----为将要跳转的页数
   */
  isAllowPlus(param) {
    let isAllowPlus = this.realizeDirectoryRights(param, 0);
    return isAllowPlus;
    // return true;
  }

  /**
   * @param 点击按钮是接收的参数----为将要跳转的页数
   */
  isAllowSubtract(param) {
    let isAllowSubtract = this.realizeDirectoryRights(param, 1);
    return isAllowSubtract;
    // return true;
  }

  /**
   * @param param 点击按钮是接收的参数----为将要跳转的页数，或show，activity，result，summary
   * @param num 当前要实现的方法是plus  subtract   clickNav
   */
  private realizeDirectoryRights(param, num: number) {

    let setDirectoryRights = this.setDirectoryRights();
    let isAllowTurn = setDirectoryRights[num](param);
    return isAllowTurn;
  }
  // 递归调用翻页---跳过当前禁止进入的课件页数
  /**
   * @param isNext 当前是下一页翻页isNext=right还是上一页翻页isNext=left，还是页面中的初始化调用isNext=init
   */
  recursionNext(isNext) {
    // condition限制start
    let count = this.appService.progressData.describeFlag; // 递归数页码时计数
    let saveIsisAllowTurn = null; // 保存当前页码是否跳转

    // 递归调用下一页是否允许进入

    let nextPage = () => {
      if (count === 3 && isNext == 'left' && this.appService.OneNavState == 1) {
        this.appService.sceneIsPass = false;
        this.appService.OneNavState = 0;
        count = 3;
      }
      if (count === 11 && isNext == 'left' && this.appService.OneNavState == 2) {
        this.appService.knowledgeIsPass = false;
        this.appService.OneNavState = 1;
        count = 18;
      }
      if (count === 34 && isNext == 'left' && this.appService.OneNavState == 3) {
        this.appService.skillIsPass = false;
        this.appService.OneNavState = 2;
        count = 35;
      }
      if (count === 4 && (isNext == 'right' || isNext == 'init') && this.appService.OneNavState == 0) {
        this.appService.OneNavState = 1;
      }
      if (count === 19 && (isNext == 'right' || isNext == 'init') && this.appService.OneNavState == 1) {
        this.appService.skillIsPass = false;
        this.appService.OneNavState = 2;
        count = 12;
      }
      if (count === 36 && (isNext == 'right' || isNext == 'init') && this.appService.OneNavState == 2) {
        this.appService.examIsPass = false;
        this.appService.OneNavState = 3;
        count = 35;
      }
      if (isNext == 'right' || isNext == 'init') {

        let isAllowTurn = this.isAllowPlus(count);
        saveIsisAllowTurn = isAllowTurn;

        if (count > 50) {
          saveIsisAllowTurn = null;
          if (isNext == 'right') {
            this.setStandingTime(this.appService.progressData.describeFlag, false, true);
            this.appService.progressData.describeFlag--;
            this.setStandingTime(this.appService.progressData.describeFlag, true, false);
          }

          return false;
        } else if (!isAllowTurn) {
          count++;
          nextPage();
        }
      } else if (isNext == 'left') {
        let isAllowTurn = this.isAllowSubtract(count);
        saveIsisAllowTurn = isAllowTurn;
        if (count < 0) {
          saveIsisAllowTurn = null;
          return false;
        } else if (!isAllowTurn) {
          count--;
          nextPage();
        }
      }
    };
    nextPage();
    // 如果后边的所有页数均不能进入那么停止执行代码

    if (!saveIsisAllowTurn) {
      return false;
    }
    let obj = {
      0: 'scene',
      1: 'knowledge',
      2: 'skill',
      3: 'exam',
    }
    let route = obj[this.appService.OneNavState];
    this.setStandingTime(this.appService.progressData.describeFlag, false, true, route);
    this.appService.progressData.describeFlag = count; // 给递归后的页码进行赋值，进行页码跳转

    console.log(this.appService.progressData.describeFlag, this.appService.OneNavState, '][][][][][][][]]][[[[[[[');
    this.setStandingTime(this.appService.progressData.describeFlag, true, false, route);
    if (this.appService.OneNavState == 0) {
      this.appService.sceneIsPass = false;
      this.router.navigate(["courseprepare/scene"]);
      $(".scene")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("../../../assets/images/navBG.png") no-repeat center 0px',
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
    if (this.appService.OneNavState == 1) {
      this.appService.knowledgeIsPass = false;
      this.router.navigate(["courseprepare/knowledge"]);
      $(".knowledge")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("../../../assets/images/navBG.png") no-repeat center 0px',
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
    if (this.appService.OneNavState == 2) {
      this.appService.skillIsPass = false;
      this.router.navigate(["courseprepare/skill"]);
      $(".skill")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("../../../assets/images/navBG.png") no-repeat center 0px',
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
    if (this.appService.OneNavState == 3) {
      this.appService.examIsPass = false;
      this.router.navigate(["courseprepare/examination"]);
      $(".examination")
        .css({
          borderBottomColor: "#77797d"
        })
        .parent("li")
        .css({
          background: 'url("../../../assets/images/navBG.png") no-repeat center 0px',
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

    return true;
    // condition限制end
  }

}
