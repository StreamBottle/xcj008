import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { CommunicationService } from "../communication";
import { AppService } from "../../index/app.service";
import { DashboardService } from "../dashboard/dashboard.service";
import { MultimeterService } from "../multimeter/multimeter.service";
import { SkillService } from "../../views/skill/skill.service";

declare let $: any;
@Injectable()
export class ObdscanService {
  Zdata = {
    // 诊断仪相关数据
    // 数据流页面驱动电机转子角度
    rotorAngle: 10,
    // 数据流页面电机转速
    motorSpeed: 0,
    // 数据流页面绝缘故障V,V1,或者都拔下插头拔下正极数据
    collectionData: '1.00',
    // 数据流页面绝缘故障V,V1,或者都拔下插头拔下负极数据
    negativePole: '1.00',
    // 数据流页面油踏板位置
    acceleratorPedalPosition: '16',
    // 记录当前时是系统选择还是快速测试
    xtORks: '',
    monixunlian02fault01: 0, // 模拟训练1故障
    monixunlian01fault01: 0, // 模拟训练1故障
    isPower: true, // 诊断仪遮罩显示
    obdscanStatus: false,
    obdscanOpen: false,
    layerType: "lay1", // 动作测试类型弹出层
    actionType: "py", // 发动机控制系统动作测试选项
    diagnosticStay: 0, // 代表诊断没有点开过
    memory: [],
    communicationService: this.communicationService,
    appService: this.appService,
    dashboardService: this.dashboardService,
    multimeterService: this.multimeterService,
    skillService: this.skillService,
    obdscanData: {
      py: [
        "喷油量测试",
        "本测试选择喷油量从24.8%至-12.5%",
        "-12.5:Min to24.8%Max ",
        "在发动机转速不高于 3000 rpm ，冷却液温度不低于170F(77℃)并且过热保护装置关闭的情况下操作。"
      ]
    },

    resultVerification: false, // 维修正确后，结果验证车速允许变化
    // rotorAngle: 0, // 维修正确后，驱动电机转子角度（随机）
    resultVerificationSpeedGood: 0, // 维修正确后，结果验证车速

    // new Obdscan逻辑需要的参数
    onORlock: 0, // 当前档位位置
    pageRecord: "0", // 诊断仪页面记录当前页数
    currentShowPage: "modelsData", // 当前页面是哪个页面
    historyArr: [], // 保存历史页面
    navNameArr: [], // 根据当前导航的title数组
    navName: "", // 当前title导航的拼接
    addObjPageNum: {
      obj: {},
      add: function (param) {
        this.obj = {};
        param.map(item => {
          this.obj[item[0]] = item[1];
        });
        return this.obj;
      }
    },

    // 数据流的数据，有些数据流的数据是变化的，在这里定义,然后使用返回值的方式获取，下边有数据流刷新函数
    dataStreamContent: {
      VCUA: "0.4",
      VCUB: "0.8",
      VCUC: "0.6",
      VCUD: "0.2"
    },

    // 诊断仪的整体逻辑
    obdscanObj: {
      /**
       * @param name---名称
       * @param isShow---是否显示
       * @param isClick---是否允许点击
       * @param parentId---当前属于哪一个子集
       * @param id---当前id
       * @param next---下一页内容
       */
      carBrandData: [
        {
          name: "汽车诊断",
          isShow: true,
          isClick: true,
          id: "carDiagnosis01",
          next: "modelsData"
        }
      ],
      /**
       * @param name---名称
       * @param isShow---是否显示
       * @param isClick---是否允许点击
       * @param parentId---当前属于哪一个子集
       * @param id---当前id
       * @param next---下一页内容
       */
      modelsData: [
        {
          name: "北汽新能源",
          isShow: true,
          isClick: true,
          parentId: "carDiagnosis01",
          id: "modelsData01",
          next: "carSelect"
        }
      ],

      /**
       * @param name---名称
       * @param isShow---是否显示
       * @param isClick---是否允许点击
       * @param parentId---当前属于哪一个子集
       * @param id---当前id
       * @param next---下一页内容
       */
      carSelect: [
        {
          name: "EV160",
          isShow: true,
          isClick: true,
          parentId: "modelsData01",
          id: "carSelect01",
          next: "systemSelect"
        },
        {
          name: "绅宝EV",
          isShow: true,
          isClick: false,
          parentId: "modelsData01",
          id: "carSelect02",
          next: "systemSelect"
        },
        {
          name: "E150EV",
          isShow: true,
          isClick: false,
          parentId: "modelsData01",
          id: "carSelect03",
          next: "systemSelect"
        },
        {
          name: "EV200",
          isShow: true,
          isClick: false,
          parentId: "modelsData01",
          id: "carSelect04",
          next: "systemSelect"
        },
        {
          name: "M30EV",
          isShow: true,
          isClick: false,
          parentId: "modelsData01",
          id: "carSelect05",
          next: "systemSelect"
        }
      ],

      /**
       * @param name---名称
       * @param isShow---是否显示
       * @param isClick---是否允许点击
       * @param parentId---当前属于哪一个子集
       * @param id---当前id
       * @param next---下一页内容
       */
      systemSelect: [
        {
          name: "快速测试",
          isShow: true,
          isClick: true,
          parentId: "carSelect01",
          id: "systemSelect01",
          next: "systemData"
        },
        {
          name: "系统选择",
          isShow: true,
          isClick: true,
          parentId: "carSelect01",
          id: "systemSelect02",
          next: "systemData"
        }
      ],

      /**
       * @param isShow---是否显示
       * @param isClick---是否允许点击进入下一个
       * @param name---名称
       * @param parentId---当前属于哪一个子集
       * @param id---当前id
       * @param next---下一页内容
       * @param isOk---快速测试内容
       * @param systemNormalNum ----当前系统是否正常，在哪个页面是系统正常显示，不显示故障码的
       */
      systemData: [
        {
          isShow: true,
          isClick: true,
          name: "整车控制器(VCU)",
          parentId: "systemSelect02",
          id: "systemData01",
          next: "faultData"
        },
        {
          isShow: true,
          isClick: false,
          name: "驱动电机系统(MCU)",
          parentId: "systemSelect02",
          id: "systemData02",
          next: "faultData"
        },
        {
          isShow: true,
          isClick: false,
          name: "动力电池系统(BMS PPST)",
          parentId: "systemSelect02",
          id: "systemData21",
          next: "faultData"
        },
        {
          isShow: true,
          isClick: false,
          name: "组合仪表(ICM)",
          parentId: "systemSelect02",
          id: "systemData03",
          next: "faultData"
        },
        {
          isShow: true,
          isClick: false,
          name: "车载充电机(CHG)",
          parentId: "systemSelect02",
          id: "systemData04",
          next: "faultData"
        },
        {
          isShow: true,
          isClick: false,
          name: "动力电池系统(BMS BESK)",
          parentId: "systemSelect02",
          id: "systemData05",
          next: "faultData"
        },
        {
          isShow: true,
          isClick: false,
          name: "远程监控系统(RMS)",
          parentId: "systemSelect02",
          id: "systemData06",
          next: "faultData"
        },
        {
          isShow: true,
          isClick: false,
          name: "组合仪表(ICM)",
          parentId: "systemSelect02",
          id: "systemData07",
          next: "faultData"
        },
        {
          isShow: true,
          isClick: false,
          name: "电动助力转向系统(EPS)",
          parentId: "systemSelect02",
          id: "systemData08",
          next: "faultData"
        },
        {
          isShow: true,
          isClick: false,
          name: "中控信息娱乐系统(EHU)",
          parentId: "systemSelect02",
          id: "systemData09",
          next: "faultData"
        },
        {
          isShow: true,
          isClick: false,
          name: "车身电控模块(BCM)",
          parentId: "systemSelect02",
          id: "systemData10",
          next: "faultData"
        },

        {
          isShow: true,
          isClick: true,
          name: "整车控制器(VCU)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData11",
          systemNormalNum: "",
          next: "faultCodeData"
        },
        {
          isShow: true,
          isClick: false,
          name: "驱动电机系统(MCU)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData12",
          systemNormalNum: "",
          next: "faultCodeData"
        },
        {
          isShow: true,
          isClick: false,
          name: "动力电池系统(BMS PPST)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData22",
          systemNormalNum: "",
          next: "faultCodeData"
        },
        {
          isShow: true,
          isClick: false,
          name: "组合仪表(ICM)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData13",
          systemNormalNum: "",
          next: "faultCodeData"
        },
        {
          isShow: true,
          isClick: false,
          name: "车载充电机(CHG)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData14",
          systemNormalNum: "",
          next: "faultCodeData"
        },
        {
          isShow: true,
          isClick: false,
          name: "动力电池系统(BMS BESK)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData15",
          systemNormalNum: "",
          next: "faultCodeData"
        },
        {
          isShow: true,
          isClick: false,
          name: "远程监控系统(RMS)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData16",
          systemNormalNum: "",
          next: "faultCodeData"
        },
        {
          isShow: true,
          isClick: false,
          name: "组合仪表(ICM)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData17",
          systemNormalNum: "",
          next: "faultCodeData"
        },
        {
          isShow: true,
          isClick: false,
          name: "电动助力转向系统(EPS)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData18",
          systemNormalNum: "",
          next: "faultCodeData"
        },
        {
          isShow: true,
          isClick: false,
          name: "中控信息娱乐系统(EHU)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData19",
          systemNormalNum: "",
          next: "faultCodeData"
        },
        {
          isShow: true,
          isClick: false,
          name: "车身电控模块(BCM)",
          isOk: "OK",
          parentId: "systemSelect01",
          id: "systemData20",
          systemNormalNum: "",
          next: "faultCodeData"
        }
      ],

      /**
       * @param isClick ---是否允许点击
       * @param name ---名称
       * @param id ---当前id
       * @param next ---下一页内容
       */
      faultData: [
        {
          isClick: false,
          name: "故障码",
          id: "readFaultCode",
          next: "faultCodeData"
        },
        {
          isClick: false,
          name: "数据流",
          id: "readDataStream",
          next: "dataStream"
        },
        { isClick: false, name: "动作测试", id: "test" }
      ],

      /**
       * @param faultPageNum---所有显示故障码的页面
       * @param num---在num页面下才能够清除故障码
       * @param isShow---是否显示当前故障码
       * @param faultCode---故障编号
       * @param faultMean---故障含义
       * @param history---当前是历史故障码还是当前故障码
       * @param isClear---故障码是否已经清除
       * @param isRepair---故障是否修好
       */

      faultCodeData: [
        {
          faultPageNum: "2",
          num: 17,
          isShow: false,
          faultCode: "P078001",
          faultMean: "档位故障",
          history: false,
          isClear: false,
          isCleared: false,
          isRepair: this.skill01
        },

        {
          faultPageNum: "13,15,17",
          num: 17,
          isShow: false,
          faultCode: "P078001",
          faultMean: "档位故障",
          history: false,
          isClear: false,
          isCleared: false,
          isRepair: this.skill01
        },

        {
          faultPageNum: "19,21,23",
          num: 23,
          isShow: false,
          faultCode: "P0A3F00",
          faultMean: "MCU位置信号检测回路故障",
          history: false,
          isClear: false,
          isCleared: false,
          isRepair: this.skill02
        },

        {
          faultPageNum: "25,27,29",
          num: 29,
          isShow: false,
          faultCode: "P0002",
          faultMean: "高压母线绝缘等级太低故障",
          history: false,
          isClear: false,
          isCleared: false,
          isRepair: this.skill03
        },

        {
          faultPageNum: "31,33,35",
          num: 35,
          isShow: false,
          faultCode: "P0540",
          faultMean: "制动开关“A”/“B”相关性",
          history: false,
          isClear: false,
          isCleared: false,
          isRepair: this.skill04
        },
        {
          faultPageNum: "37,39,41",
          num: 41,
          isShow: false,
          faultCode: "P2122",
          faultMean: "电子油门踏板位置传感器1#线路低电压",
          history: false,
          isClear: false,
          isCleared: false,
          isRepair: this.skill05
        },
        {
          faultPageNum: "37,39,41",
          num: 50,
          isShow: false,
          faultCode: "P2138",
          faultMean: "传感器1#，2#关联性故障",
          history: false,
          isClear: false,
          isCleared: false,
          isRepair: this.skill05
        }
      ],

      /**
       * @param showDataStream---所有显示数据流的页面
       * @param isShow---是否显示当前数据流
       * @param template---可能会有不同的数据流模板，定义不同的数据流模版,暂时模版只写了一套，后期需要另行添加
       * @param item---数据流的名称
       * @param data---渲染到页面的数据，有些数据流是变化的从datafun中获取
       * @param datafun---返回变化的数据流内容，赋值到data上，实现页面渲染变化，不能直接获取后渲染到页面，如果该数据流是死值择写成空字符串
       * @param unit---单位，没有单位时写成'';
       */
      dataStream: [
        // {
        // 	showDataStream: '13,15,17,19,21,23,25,27,29,31,33,35,41,43,45',
        // 	isShow: false,
        // 	template: 'dataStream01',
        // 	item: '名称',
        // 	data: '当前值',
        // 	T6Fault: '当前值',
        // 	datafun: '当前值',
        // 	unit: '单位'
        // },
        // {
        // 	showDataStream: '13,15',
        // 	isShow: false,
        // 	template: 'dataStream01',
        // 	item: 'A/C请求状态',
        // 	data: '关',
        // 	T6Fault: '0',
        // 	datafun: '关',
        // 	unit: ''
        // },
      ]
    },

    /**
     * 刷新当前数据流
     */
    reloadCurrenDataStream() {
      /**
       * 拔下T6显示拔下数据
       */
      if (
        this.multimeterService.Mdata.currentPinOut == "allOut" ||
        this.multimeterService.Mdata.currentPinOut == "offT6"
      ) {
        this.obdscanObj.dataStream
          .filter((l, lIndex, lArr) => {
            return l.isShow;
          })
          .map((m, mIndex, mArr) => {
            m.data = m.T6Fault;
          });
      } else {
        this.obdscanObj.dataStream
          .filter(l => {
            return typeof l.datafun !== "string";
          })
          .map(m => {
            m.data = m.datafun.call(this);
          });
        this.obdscanObj.dataStream
          .filter(l => {
            return typeof l.datafun === "string";
          })
          .map(m => {
            m.data = m.datafun;
          });
      }
    },

    /**
     * @param id----当前点击的元素的id---就是要进入的控制器的id
     * 是否允许从系统选择读取故障码
     */
    isAllowEnterFaultCode(id) {
      let currentAllowFastTestFault = "systemData11"; // 是否允许从快速测试进入读取故障码，都有哪个控制器能从快速测试进入读取故障码，系统测试的不需要添加判断选择，系统选择都让进入，快速测试直接读取的故障码，需要加条件限制
      let arr = [
        [2, "systemData11"],
        [13, "systemData11"],
        [15, "systemData11"],
        [17, "systemData11"],
        [19, "systemData12"],
        [21, "systemData12"],
        [23, "systemData12"],
        [25, "systemData22"],
        [27, "systemData22"],
        [29, "systemData22"],
        [31, "systemData11"],
        [33, "systemData11"],
        [35, "systemData11"],
        [37, "systemData11"],
        [39, "systemData11"],
        [41, "systemData11"]
      ];
      let obj = this.addObjPageNum.add(arr);
      currentAllowFastTestFault =
        obj[this.appService.progressData.describeFlag] || "systemData11";

      let isAllowEnterFaultCodeFastTest = false; // 快速测试页面的是否允许当前故障码

      let ary = [
        2,
        13,
        15,
        17,
        19,
        21,
        23,
        25,
        27,
        29,
        31,
        33,
        35,
        37,
        39,
        41
      ];
      let ary1 = ary.some(item => {
        return this.appService.progressData.describeFlag == item;
      });

      // 添加判断条件，什么时候不能读取故障码
      if (ary1) {
        if (this.navNameArr.includes("快速测试")) {
          // 从快速测试直接读取故障码
          this.obdscanObj.systemData.map((m, mIndex, mArr) => {
            if (m.isOk) {
              m.isClick = false;
              isAllowEnterFaultCodeFastTest = m.isClick;
              if (currentAllowFastTestFault.includes(id)) {
                m.isClick = true;
                isAllowEnterFaultCodeFastTest = m.isClick;
              }
            }
          });
          return isAllowEnterFaultCodeFastTest;
        } else {
          this.obdscanObj.faultData[0].isClick = true; // 从系统选择进入是否能读取
          return this.obdscanObj.faultData[0].isClick;
        }
      }
      if (this.navNameArr.includes("快速测试")) {
        return isAllowEnterFaultCodeFastTest;
      } else {
        this.obdscanObj.faultData[0].isClick = false; // 从系统选择进入是否能读取
        return this.obdscanObj.faultData[0].isClick;
      }
    },

    /**
     *  是否允许进入读取数据流
     */
    isAllowEnterDataStream() {
      let ary = [2, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41];
      let ary1 = ary.some(item => {
        return this.appService.progressData.describeFlag == item;
      });

      // 添加判断条件，什么时候不能读取数据流
      if (ary1) {
        this.obdscanObj.faultData[1].isClick = true;
        return this.obdscanObj.faultData[1].isClick;
      }
      this.obdscanObj.faultData[1].isClick = false;
      return this.obdscanObj.faultData[1].isClick;
    },

    // 控制显示的title导航
    showNavName(navNameArr) {
      navNameArr = Array.from(new Set(navNameArr));
      // 获取当前数组的第几项然后拼接起来成为title导航
      let getName = splitNavIndex => {
        let obj = [];
        navNameArr
          .filter((j, jIndex, jArr) => {
            return splitNavIndex.includes(String(jIndex));
          })
          .map((k, kIndex, kArr) => {
            obj.push(k);
          });
        return obj.join("/");
      };

      let obj = {
        modelsData: getName("0"),
        carSelect: getName("0,1"),
        systemSelect: getName("0,1,2"),
        systemData: getName("0,2,3"),
        faultData: getName("0,2,4"),
        default: function () {
          if (navNameArr.includes("快速测试")) {
            if (this.pageRecord != "noCommunication") {
              navNameArr.push("故障码");
              return getName("0,4,5");
            } else {
              return getName("0,2,4");
            }
          } else {
            return getName("0,4,5");
          }
        }
      };
      this.navName = obj[this.currentShowPage]
        ? obj[this.currentShowPage]
        : obj["default"]();
    },

    /**
     * @param id 当前点击的项的id
     * 是否允许进入当前模块，有时候每个任务之间的可以进入的模块不同
     */
    isAllowEnterSystemSelectModule(id) {
      let currentAllowSystemSelectFault = "systemData01"; // 是否允许从快速测试进入读取故障码，都有哪个控制器能从快速测试进入读取故障码，系统测试的不需要添加判断选择，系统选择都让进入，快速测试直接读取的故障码，需要加条件限制

      let arr = [
        [2, "systemData01"],
        [13, "systemData01"],
        [15, "systemData01"],
        [17, "systemData01"],
        [19, "systemData02"],
        [21, "systemData02"],
        [23, "systemData02"],
        [25, "systemData21"],
        [27, "systemData21"],
        [29, "systemData21"],
        [31, "systemData01"],
        [33, "systemData01"],
        [35, "systemData01"],
        [37, "systemData01"],
        [39, "systemData01"],
        [41, "systemData01"]
      ];
      let obj = this.addObjPageNum.add(arr);

      currentAllowSystemSelectFault =
        obj[this.appService.progressData.describeFlag] || "systemData01";

      let isAllowEnterFaultCodeSystemSelect = false;
      this.obdscanObj.systemData.map((m, mIndex, mArr) => {
        m.isClick = false;
        isAllowEnterFaultCodeSystemSelect = m.isClick;
        if (currentAllowSystemSelectFault.includes(id)) {
          m.isClick = true;
          isAllowEnterFaultCodeSystemSelect = m.isClick;
        }
      });
      return isAllowEnterFaultCodeSystemSelect;
    },

    // 进入到下一页
    changeTemplate(id, nextPage, isClick, parentId, name) {

      // 快速测试中显示的1dtc在哪一个模块的入口
      let obj = {
        2: "systemData11",
        13: "systemData11",
        15: "systemData11",
        17: "systemData11",
        19: "systemData12",
        21: "systemData12",
        23: "systemData12",
        25: "systemData22",
        27: "systemData22",
        29: "systemData22",
        31: "systemData11",
        33: "systemData11",
        35: "systemData11",
        37: "systemData11",
        39: "systemData11",
        41: "systemData11"
      };

      let arr = [
        [2, "systemData11"],
        [13, "systemData11"],
        [15, "systemData11"],
        [17, "systemData11"],
        [19, "systemData12"],
        [21, "systemData12"],
        [23, "systemData12"],
        [25, "systemData22"],
        [27, "systemData22"],
        [29, "systemData22"],
        [31, "systemData11"],
        [33, "systemData11"],
        [35, "systemData11"],
        [37, "systemData11"],
        [39, "systemData11"],
        [41, "systemData11"]
      ];
      let obj = this.addObjPageNum.add(arr);

      let whereIsDtc =
        obj[this.appService.progressData.describeFlag] || "systemData11";

      this.obdscanObj.systemData.map(item => {
        /**
         * 重置所有的isOK参数，后边再变
         */
        if (item.isOk) {
          item.isOk = "OK";
        }
        /**
         * 根据当前页码显示DTC
         */
        if (item.isOk && item.id == whereIsDtc) {
          item.isOk = "1DTC";
        }
        if (this.obdscanObj.faultCodeData.some((item1, index) => {
          return item1.num === this.appService.progressData.describeFlag && item1.isClear;
        })) {
          if (item.isOk) {
            item.isOk = 'OK';
          }
        }
        /**
         * 如果当前页码应该显示系统正常页码，则没有DTC选项
         */
        if (item.isOk) {
          let newSystemNormalNum = item.systemNormalNum;
          if (
            newSystemNormalNum.includes(
              this.appService.progressData.describeFlag
            )
          ) {
            item.isOK = "OK";
          }
        }
      });

      switch (nextPage) {
        case "faultCodeData":
          isClick = this.isAllowEnterFaultCode(id); // 在点击的时候重新判断是否能读取
          break;
        case "dataStream":
          isClick = this.isAllowEnterDataStream(); // 在点击的时候重新判断是否能读取
          break;
        case "faultData":
          isClick = this.isAllowEnterSystemSelectModule(id); // 在点击的时候重新判断是否能读取
          break;
        default:
      }

      // 如果不能点击则return掉
      if (!isClick) {
        return;
      }
      this.xtORks = id;

      this.currentShowPage = nextPage; // 赋值当前需要显示的页面
      this.historyArr.push(this.pageRecord); // 存入历史页面
      this.navNameArr.push(name); // 把点击过的明名字存储起来，用于显示导航

      // 每页都有他自己的子集，只显示他自己的子集
      this.obdscanObj[nextPage].map((m, mIndex, mArr) => {
        if (!m.parentId) {
          return;
        }
        m.isShow = false;
        if (m.parentId == id) {
          m.isShow = true;
        }
      });

      this.pageRecord = nextPage; // 当前页面的显示类型，显示相对应的模版

      if (nextPage == "faultCodeData") {
        // 如果是故障码显示页面匹配当前页面，每个故障码只在相对应的页面显示
        this.obdscanObj.faultCodeData
          .filter((l, lIndex, lArr) => {
            l.isShow = false;
            return l.faultPageNum
              .split(",")
            ["includes"](String(this.appService.progressData.describeFlag));
          })
          .map((m, mIndex, mArr) => {
            m.isShow = true;
            if (this.appService.progressData.describeFlag == m.num) {
              m.isClear = m.isCleared;
            } else {
              m.isClear = false;
            }
          });

        // 判断当前是否有故障码显示
        let arr = this.obdscanObj.faultCodeData.filter((l, lIndex, lArr) => {
          return l.faultPageNum
            .split(",")
          ["includes"](String(this.appService.progressData.describeFlag));
        });
        // 如果当前页没有要显示的故障码那么显示

        // 如果是在读取故障码页面并且已经清除过故障码直接显示故障码已清除页面
        setTimeout(() => {
          this.obdscanObj.faultCodeData
            .filter((l, lIndex, lArr) => {
              return (
                l.num === this.appService.progressData.describeFlag && l.isClear
              );
            })
            .map((m, mIndex, mArr) => {
              $(".faultCode-cleared").show();
            });

          if (
            arr.length === 0 &&
            $(".faultCode-cleared").css("display") === "none"
          ) {
            this.systemNormal("block");
          }
        }, 0);
      }

      if (nextPage == "dataStream") {
        this.reloadCurrenDataStream(); // 刷新数据流数值
        // 数据流页面显示相应的数据流数据，否则不显示
        this.obdscanObj.dataStream
          .filter((l, lIndex, lArr) => {
            l.isShow = false;
            return l.showDataStream
              .split(",")
            ["includes"](String(this.appService.progressData.describeFlag));
          })
          .map((m, mIndex, mArr) => {
            m.isShow = true;
          });
      }

      // 处理导航Nav的title
      this.showNavName(this.navNameArr);

      // 当前故障码显示的历史故障码还是当前故障码
      this.isChangeHistoryCode();

      // 仪表板没打到On档位的情况下调用显示故障页面
      if (this.onORlock == 0 || this.partIsInstall()) {
        this.showNotCommunication();
      }

      // this.showNotCommunication(); // 模拟当前故障页面
    },

    // 清除故障码----如果在当前页面清除掉页面并且显示清除故障码页面
    clearFaultCode() {
      $(".faultCode-cleared").hide(); // 隐藏当前故障码已删除页面
      // 故障码页面中匹配是否是检验交车页面并且是否故障修好了，如果是那么清除故障码参数变成true，让故障码已清除显示出来
      this.obdscanObj.faultCodeData
        .filter((l, lIndex, lArr) => {
          return (
            l.num === this.appService.progressData.describeFlag &&
            l.isRepair.call(this)
          );
        })
        .map((m, mIndex, mArr) => {
          $(".faultCode-cleared").show();
          m.isClear = true;
          m.isCleared = true;
        });
    },

    // 在检验交车页面如果修好了则显示的是历史故障码
    isChangeHistoryCode() {
      // 在修好的状态下，显示历史故障码，可以清除
      this.obdscanObj.faultCodeData
        .filter((l, lIndex, lArr) => {
          l.history = false;
          return (
            l.num === this.appService.progressData.describeFlag &&
            l.isRepair.call(this)
          );
        })
        .map((m, mIndex, mArr) => {
          m.history = true;
        });

      // 在没有修好的状态下，显示当前故障码，并且隐藏掉已清除页面
      this.obdscanObj.faultCodeData
        .filter((l, lIndex, lArr) => {
          return (
            l.num === this.appService.progressData.describeFlag &&
            !l.isRepair.call(this)
          );
        })
        .map((m, mIndex, mArr) => {
          $(".faultCode-cleared").hide();
          m.history = false;
          m.isClear = false;
          m.isCleared = false;
        });
    },

    // 显示故障页面即不通讯页面
    showNotCommunication() {
      if (
        this.pageRecord == "systemData" ||
        this.pageRecord == "faultData" ||
        this.pageRecord == "faultCodeData" ||
        this.pageRecord == "dataStream"
      ) {
        this.pageRecord = "noCommunication";
        this.historyArr = ["0", "modelsData", "carSelect", "systemSelect"];
        this.navNameArr[this.navNameArr.length - 1] = "驱动电机系统(MCU)";
        this.showNavName(this.navNameArr);
      } else if (this.onORlock == 1 && this.pageRecord == "noCommunication") {
        this.currentShowPage = "systemSelect";
        this.pageRecord = "systemSelect";
        this.historyArr = ["0", "modelsData", "carSelect"];
        this.navNameArr.length = this.navNameArr.length - 1;
        this.navNameArr = this.navNameArr.filter((item, index) => {
          return item != '快速测试';
        })
        this.showNavName(this.navNameArr);
      } else {
        return false;
      }
    },

    /**
     * 处理当前部件的插拔,诊断仪显示不通讯页面
     */
    partIsInstall() {
      if (
        this.skillService.V_Pin_Install == 0 ||
        this.skillService.T6_Pin_Install == 0
      ) {
        return false;
      } else {
        return false;
      }
    },

    // 当前是否显示系统正常
    systemNormal(param) {
      $(".system-normal").css("display", param); // 每次返回时隐藏

      if (param !== "none") {
        $(".button-wrap-clearfaultcode").css("display", "none");
      } else {
        $(".button-wrap-clearfaultcode").css("display", "block");
      }
    },

    // 诊断仪的返回
    obdscanReturn() {
      this.isAllowEnterFaultCode(); // 返回时判断是否允许进入故障码
      this.isAllowEnterDataStream(); // 返回时判断是否允许进入数据流
      if (this.historyArr.length <= 0) {
        return;
      }
      if (!this.historyArr["includes"]("0")) {
        this.historyArr.unshift("0");
      }
      this.currentShowPage = this.historyArr.pop();
      this.navNameArr.pop();

      this.pageRecord = this.currentShowPage;
      this.showNavName(this.navNameArr);
      console.log(this.navNameArr, 'opopuiuui');
      if (this.navNameArr[this.navNameArr.length - 1] == '快速测试') { this.xtORks = 'systemSelect01' };
      this.systemNormal("none");
      this.obdscanObj.systemData.map(item => {
        if (this.obdscanObj.faultCodeData.some((item1, index) => {
          return item1.num === this.appService.progressData.describeFlag && item1.isClear;
        })) {
          if (item.isOk) {
            item.isOk = "OK";
          }
        }
      })
    },

    // 驱动电机转子角度随机
    rotorAngleRandomNum() {
      this.rotorAngle = Math.round(Math.random() * (360 - 1 + 1) + 1) + "°";
    },

    // 仪表盘在ON档或LOCK档的情况
    dashboardSwitchGear() {
      if (
        (this.pageRecord === 3 ||
          this.pageRecord === 4 ||
          this.pageRecord === 5) &&
        (this.onORlock === 0 || !this.appService.prevupORdown)
      ) {
        this.pageRecord = 2;
        this.communicationFailureFlag = true;
        this.pageNav = "汽车诊断/" + this.systemNav;
        return;
      } else if (this.onORlock === 1) {
        this.stallFlag = true;
      }
    },

    // 切换页面工具收回,数据初始化
    changePageToolBack() {
      this.closedobdscan();
      this.dashboardService.dashboardShowFlag = false;
      this.appService.prevupORdown = true;
      this.appService.nextupORdown = true;
    },
    //关闭诊断仪
    closedobdscan() {
      this.fastTestPage = 0;
      //设置工具栏目状态万用表
      $("#zdy").removeClass("selected");
      $("#zdy")
        .children("images")
        .attr("src", "images/zdyunSelect.png");
      this.dataStreamFlag = false;
      this.faultFlag = false;
      this.obdscanStatus = false;
      // this.switchPage('obdscanMenu');

      //去除右侧工具栏的触发状态
      $(".right-diagnostic")
        .parent()
        .removeClass("active");
      //去除诊断仪使用状态码
      this.diagnosticStay = 0;
      //关闭诊断仪供电
      this.isPower = true;
      this.communicationFailureFlag = false;
    },
    //诊断仪的加电
    obdscanPower() {
      this.isPower = !this.isPower;
      if (!this.isPower) {
        this.pageRecord = "0";
        this.pageNav = "汽车诊断";
      }
    },

    Mint: {
      In1NER_OBD_ClearCode_x_x: "0", //    清除故障码动作
      In1OBD_x_CtrlInjVol_x_x: "0", //    清除故障码动作
      In1OBD_x_CtrlVVTLinear_x_x: "0", //    清除故障码动作
      In1OBD_x_CtrlVVTExLinear_x_x: "0", //    清除故障码动作
      In1OBD_x_CtrlInjVolforAF_x_x: "0", //    清除故障码动作
      In1OBD_x_ActiVsvEvap_x_x: "",
      In1OBD_x_CtrlTCandTE1_x_x: "",
      In1OBD_x_ElecCoolFan_x_x: "",
      In1OBD_x_ActiStRelay_x_x: "",
      In1OBD_x_EtcsOpClSlowSpeed_x_x: "",
      In1OBD_x_SeleCylFuelCut_x_x: "",
      In1OBD_x_ActiSolenoldSLT_x_x: "",
      In1OBD_x_ActiSolenoldS1_x_x: "",
      In1OBD_x_ActiSolenoldS2_x_x: "",
      In1OBD_x_ActiLockUp_x_x: "",
      In1OBD_x_ActiSolenoldSL_x_x: "",
      In1OBD_x_ShiftPosition_x_x: "",
      In1OBD_x_ActiSolenoldST_x_x: "",
      In1OBD_x_SeleCylFuelCutNum_x_x: "",
      In1Mot_Gear_Signal_x_x: "" //档位信号
    },
    /**
     * @param 获取模拟训练1的是否修复值
     */
    skill01() {
      return this.appService.moni1IsOk;
    },
    /**
     * @param 获取模拟训练2的是否修复值
     */
    skill02() {
      return this.appService.moni2IsOk;
    },
    /**
     * @param 获取模拟训练3的是否修复值
     */
    skill03() {
      return this.appService.moni3IsOk;
    },
    /**
     * @param 获取模拟训练4的是否修复值
     */
    skill04() {
      return this.appService.moni4IsOk;
    },
    skill05() {
      return this.appService.moni5IsOk;
    },
    /**
     * @param 获取考试1的是否修复值
     */
    exam01() {
      return this.appService.exam1IsOk;
    },

    /**
     * @param 电源电压数据
     * @param 如果数据流中需要多个变化的值，那么也需要多个函数去返回控制
     */
    dataStream01() {
      return this["dataStreamContent"]["VCUA"];
    },
    /**
     * @param 1#踏板位置
     * @param 如果数据流中需要多个变化的值，那么也需要多个函数去返回控制
     */
    dataStream02() {
      return this["dataStreamContent"]["VCUB"];
    },
    /**
     * @param 2#踏板位置
     * @param 如果数据流中需要多个变化的值，那么也需要多个函数去返回控制
     */
    dataStream03() {
      return this["dataStreamContent"]["VCUC"];
    },
    /**
     * @param 踏板位置
     * @param 如果数据流中需要多个变化的值，那么也需要多个函数去返回控制
     */
    dataStream04() {
      return this["dataStreamContent"]["VCUD"];
    }
  };
  Mout = {
    Out1Mot_Ignit_Key_x_x: 0, //点火开关
    Out1Mot_Gear_Signal_x_x: 0, //档位
    Out1Mot_Brake_Signal_x_x: 0, //制动信号
    Out1Mot_Busbar_Current_x_x: 0, //母线电流
    Out1Mot_Busbar_Vlt_x_x: 0, //母线电压

    Out1Mot_Drection_Order_x_x: 0, //驱动电机转矩，转速指令方向命令

    Out1Mot_MCU_Sped_Order_x: 0, //MCU接收到的转速指令
    Out1Mot_Motor_Sped_rpm_x: 0, //电机当前转速
    Out1Mot_D_Shaft_Vlt_x: 0, //D轴电压
    Out1Mot_Q_Shaft_Vlt_x: 0, //Q轴电压
    Out1Mot_D_Shaft_Current_x: 0, //D轴电流
    Out1Mot_Q_Shaft_Current_x: 0, //Q轴电流
    Out1Mot_Motor_Temp_x_x: 0, //电机温度
    Out1Mot_Motor_Ctr_Temp_x: 0, //电机控制器温度
    Out1Mot_MCU_Batt_Vlt_x: "", //MCU低压供电电源电压
    Out1Mot_Motor_work_mode_x: 0, //驱动电机当前工作模式
    Out1AT_Gear_Position_x_x: ""
  };

  /**
   * @param 获取模拟训练1的是否修复值
   */
  skill01() {
    return this.appService.moni1IsOk;
  }
  /**
   * @param 获取模拟训练2的是否修复值
   */
  skill02() {
    return this.appService.moni2IsOk;
  }
  /**
   * @param 获取模拟训练3的是否修复值
   */
  skill03() {
    return this.appService.moni3IsOk;
  }
  /**
   * @param 获取模拟训练4的是否修复值
   */
  skill04() {
    return this.appService.moni4IsOk;
  }
  /**
   * @param 获取模拟训练5的是否修复值
   */
  skill05() {
    return this.appService.moni5IsOk;
  }
  /**
   * @param 获取考试1的是否修复值
   */
  exam01() {
    return this.appService.exam1IsOk;
  }

  /**
   * @param 电源电压数据
   * @param 如果数据流中需要多个变化的值，那么也需要多个函数去返回控制
   */
  dataStream01() {
    return this["dataStreamContent"]["VCUA"];
  }
  /**
   * @param 1#踏板位置
   * @param 如果数据流中需要多个变化的值，那么也需要多个函数去返回控制
   */
  dataStream02() {
    return this["dataStreamContent"]["VCUB"];
  }
  /**
   * @param 2#踏板位置
   * @param 如果数据流中需要多个变化的值，那么也需要多个函数去返回控制
   */
  dataStream03() {
    return this["dataStreamContent"]["VCUC"];
  }
  /**
   * @param 踏板位置
   * @param 如果数据流中需要多个变化的值，那么也需要多个函数去返回控制
   */
  dataStream04() {
    return this["dataStreamContent"]["VCUD"];
  }

  constructor(
    public communicationService: CommunicationService,
    public appService: AppService,
    public dashboardService: DashboardService,
    public multimeterService: MultimeterService,
    public skillService: SkillService
  ) { }
}
