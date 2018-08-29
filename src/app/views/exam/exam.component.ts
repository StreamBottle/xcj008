import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../../index/app.service';
import { DashboardService } from '../../components/dashboard';
import { MultimeterService } from '../../components/multimeter';
import { HandleErrorService } from '../../components/handle_error';
import { flyIn } from '../../animations/index';
import { SkillService } from '../skill/skill.service';
import { CoursePrepareService } from '../course_prepare/course_prepare.service';
import { OscilloscopeService } from '../../components/oscilloscope';
import { ObdscanService } from '../../components/obdscan';
declare const $;
declare const io: any;

@Component({
  selector: 'magotan-exam',
  providers: [],
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
  animations: [flyIn]
})
export class ExamComponent implements OnInit {
  sceneLeftNav: boolean = false;
  sceneLeftNavAnimation: string = '';

  // 故障分析组件的数据--包括左侧数据，右侧数据
  faultDiagnosis = {
    skill01FaultDiagnosis: this.skillService.skill01,
    skill02FaultDiagnosis: this.skillService.skill02,
    skill03FaultDiagnosis: this.skillService.skill03,
    skill04FaultDiagnosis: this.skillService.skill04,
    skill05FaultDiagnosis: this.skillService.skill05,
  };

  // 故障分析组件显示的正确答案的图片,根据当前页面显示相应的正确答案
  faultDiagnosisAnswerPic = {
    pic14path: "./assets/images/skill/answer01.png",
    pic20path: "./assets/images/skill/answer02.png",
    pic26path: "./assets/images/skill/answer03.png",
    pic32path: "./assets/images/skill/answer04.png",
    pic38path: "./assets/images/skill/answer05.png",
  };


  pageNum: number = this.appService.progressData['describeFlag']; // 显示当前页数
  isBol: boolean; // 用来记录答题是否有选择;
  // pageNum: number = this.appService.progressData['describeFlag'];  // 显示当前页数
  titleArray: any = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '知识',
    '技能-故障现象，车辆起动后不能行驶',
    '技能-故障现象，车辆起动后不能行驶',
    '技能-故障现象，车辆起动后不能行驶',
    '技能-故障现象，车辆起动后不能行驶',
    '模拟训练2-故障现象，仪表绝缘警告灯点亮，车辆不能行驶',
    '模拟训练2-故障现象，仪表绝缘警告灯点亮，车辆不能行驶',
    '模拟训练2-故障现象，仪表绝缘警告灯点亮，车辆不能行驶',
    '模拟训练2-故障现象，仪表绝缘警告灯点亮，车辆不能行驶'
  ];

  componentArray;
  shicaogongdanpage02Question: any = [
    {
      questionTitle: '1.加速踏板模块通常由几个传感器组成？',
      selectAnswer: [
        {
          id: '1-01',
          answer: '1个'
        },
        {
          id: '1-02',
          answer: '2个'
        },
        {
          id: '1-03',
          answer: '3个'
        },
        {
          id: '1-04',
          answer: '4个'
        }
      ]
    },
    {
      questionTitle: '2.加速踏板位置传感器的电源电压通常是多少？',
      selectAnswer: [
        {
          id: '1-01',
          answer: '0V'
        },
        {
          id: '1-02',
          answer: '5V'
        },
        {
          id: '1-03',
          answer: '8V'
        },
        {
          id: '1-04',
          answer: '12V'
        }
      ]
    },
    {
      questionTitle: '3.接触式加速踏板位置传感器采用什么原理改变信号电压？',
      selectAnswer: [
        {
          id: '1-01',
          answer: '串联电路的分压原理'
        },
        {
          id: '1-02',
          answer: '并联电路的分流原理'
        },
        {
          id: '1-03',
          answer: '传感器元件的霍尔效应'
        },
        {
          id: '1-04',
          answer: '传感器元件的光电效应'
        }
      ]
    },
    {
      questionTitle: '4.非接触式加速踏板位置传感器随加速踏板旋转的部件为？',
      selectAnswer: [
        {
          id: '1-01',
          answer: '滑动电阻'
        },
        {
          id: '1-02',
          answer: '霍尔元件'
        },
        {
          id: '1-03',
          answer: '磁铁'
        },
        {
          id: '1-04',
          answer: '滑动触点'
        }
      ]
    }
  ];
  shicaogongdanpage03Question: any = [
    {
      questionTitle: '1.检测驱动电机是否存在故障时，需要检查的项目有哪些?',
      selectAnswer: [
        {
          id: '1-01',
          answer: '转动输出轴是否有卡滞或异响'
        },
        {
          id: '1-02',
          answer: '测量定子线圈绕组的阻值是否符合标准'
        },
        {
          id: '1-03',
          answer: '测量定子绕组与壳体的绝缘性能是否符合标准'
        },
        {
          id: '1-04',
          answer: '拆解检测转子是否有摩擦痕迹'
        }
      ]
    },
    {
      questionTitle: '2.拆装驱动电机总成时，哪些操作项目是必须的？',
      selectAnswer: [
        {
          id: '1-01',
          answer: '关闭点火开关'
        },
        {
          id: '1-02',
          answer: '断开蓄电池负极'
        },
        {
          id: '1-03',
          answer: '断开高压安全开关'
        },
        {
          id: '1-04',
          answer: '拆卸动力电池包总成'
        }
      ]
    }
  ];
  shicaogongdanCurrentPage = 1;
  constructor(
    public appService: AppService,
    private dashboardService: DashboardService,
    public multimeterService: MultimeterService,
    public handleErrorService: HandleErrorService,
    private zone: NgZone,
    public coursePrepareService: CoursePrepareService,
    public oscilloscopeService: OscilloscopeService,
    public skillService: SkillService,
    public obdscanService: ObdscanService
  ) { }

  // 生命周期钩子函数
  ngOnInit() {
    this.dashboardService.setGearsFun('on', () => {
      return this.onGearFun();
    });
  }

  /**
   * 仪表板的on档位执行方法
   */
  onGearFun() {
    this.controlLight();
  }

  /**
   * 控制灯的变化
   */
  controlLight() { }

  // 上一页
  shicaogongdanpageCurrentShowSub() {
    if (this.shicaogongdanCurrentPage <= 1) {
      return;
    }
    console.log(this.shicaogongdanCurrentPage);
    this.shicaogongdanCurrentPage = this.shicaogongdanCurrentPage - 1;
  }
  // 下一页
  shicaogongdanpageCurrentShowAdd() {
    if (this.shicaogongdanCurrentPage >= 2) {
      return;
    }
    console.log(this.shicaogongdanCurrentPage);
    this.shicaogongdanCurrentPage = this.shicaogongdanCurrentPage + 1;
  }
  // 取消单选
  cancelRadio(event) { }

  // 同步时设置滚动条高度
  setScrollTop(top) {
    $('.shicaogongdanpage02').scrollTop(top);
    $('.shicaogongdanpage03').scrollTop(top);
  }

  /**
   * 左侧导航打开
   */
  sceneLeftNavShow() {
    $('.arrowL').hide();
    this.sceneLeftNav = true;
    this.sceneLeftNavAnimation = 'sceneLeft';
  }

  /**
   * 左侧导航收回
   */
  closeSceneLeftNav() {
    $('.arrowL').show(800);
    setTimeout(() => {
      this.sceneLeftNav = false;
    }, 100);
    this.sceneLeftNavAnimation = 'sceneRight';
  }

  /**
   * 点击左侧导航，切换当前显示的第几个目录
   * num 传入的参数
   */
  pageShow(num) {

    let isAllowTurn = this.coursePrepareService.isAllowClickTurn(num);
    console.log(isAllowTurn, num, '11111');
    if (!isAllowTurn) return;
    this.coursePrepareService.setStandingTime(this.appService.progressData.describeFlag, false, true);
    this.appService.progressData.describeFlag = num;
    this.coursePrepareService.setStandingTime(this.appService.progressData.describeFlag, true, false);

    if (
      this.appService.progressData.describeFlag != 12 ||
      this.appService.progressData.describeFlag != 16 ||
      this.appService.progressData.describeFlag != 22 ||
      this.appService.progressData.describeFlag != 26
    ) {
      this.multimeterService.Mdata.multimeterblackRecover();
      this.multimeterService.Mdata.multimeterredRecover();
      this.multimeterService.Mdata.closemultimeter();
    }
    if (this.appService.progressData.describeFlag === num) {
      return;
    }

    if (num === 43) {
      this.appService.currentFault = '0';
    }

    this.appService.progressData.describeFlag = num;
    this.appService.examProgress = num;
    this.coursePrepareService.platformRouterTurn(['tool', 'controlCenter'], false);
  }

  recordCurrentID = null; // 点击单选按钮时进行保存点击的ID

  /**
   * 确定
   * 模拟训练一维修方案选择
   */
  confirmSelect() {
    this.handleErrorService.handleError({ message: '维修已完成！' });
    this.radioClick(this.recordCurrentID, true);
    this.recordCurrentID = null;
    if (this.appService.examFault01IsGood === '1') {
      this.appService.progressData.describeFlag;
    }
  }

  /**
   * 选中单选题
   */
  radioClick(id, isConfirm) {
    if (!isConfirm) {
      this.recordCurrentID = id;
      return;
    }

    $('#' + id)
      .parent('label')
      .siblings()
      .find('input')
      .removeAttr('checked');
    $('#' + id).attr('checked', true);

    if (this.appService.progressData.describeFlag === 26) {
      this.appService.examFault01IsGood = $('#' + id).attr('isRight');
    }
  }

  // 考试答题
  skillTrainClick(id) {
    if ($('#' + id).is(':checked')) {
      $('#' + id).removeAttr('checked');
    } else {
      $('#' + id).attr('checked', true);
    }
  }

  /**
   * 提交测评试题
   */
  submitSkillTest() {
    this.handleErrorService.handleError({ message: '已提交!' });
  }
  /**
   * 保存测评试题
   */
  saveSkillTest() {
    this.handleErrorService.handleError({ message: '已保存!' });
  }

  /**
   * 拔下插头
   */
  // pullOutUnit(event) {
  //   let classNameArr = $(event).attr('class');
  //   let className = classNameArr.split(' ')[0];
  //   this.skillService[className.split('-')[0] + '_Pin_Install'] = '0';

  //   let obj = {
  //     // V插头是否拔下,先判断
  //     '0': {
  //       // T6插头是否拔下，后判断
  //       '0': 'allOut',
  //       '1': 'offV'
  //     },
  //     '1': {
  //       '0': 'offT6',
  //       '1': 'toall'
  //     }
  //   };
  //   if (
  //     (!parseInt(this.skillService.V_Pin_Install, 10) && !parseInt(this.skillService.T_Pin_Install, 10)) ||
  //     !parseInt(this.skillService.V_Pin_Install, 10)
  //   ) {
  //     this.appService.prevupORdown = false;
  //   }
  //   this.multimeterService.Mdata.currentPinOut = obj[this.skillService.V_Pin_Install][this.skillService.T_Pin_Install];
  //   if (this.oscilloscopeService.Mdata.oscilloscopeStatus) {
  //     this.oscilloscopeService.Mdata.oscilloscopeRedRecover();
  //     this.oscilloscopeService.Mdata.oscilloscopeBlackRecover();
  //     this.multimeterService.Mdata.multimeterblackRecover();
  //     this.multimeterService.Mdata.multimeterredRecover();
  //     this.obdscanService.Zdata.dashboardSwitchGear();
  //   }
  // }

  // /**
  //  * 插上插头
  //  */
  // pullInUnit(event) {
  //   let classNameArr = $(event).attr('class');
  //   let className = classNameArr.split(' ')[0];
  //   this.skillService[className.split('-')[0] + '_Pin_Install'] = '1';

  //   // obj用于判断V插头拔下的同时是否T6也拔下
  //   let obj = {
  //     // V插头是否拔下,先判断
  //     '0': {
  //       // T6插头是否拔下，后判断
  //       '0': 'allOut',
  //       '1': 'offV'
  //     },
  //     '1': {
  //       '0': 'offT6',
  //       '1': 'toall'
  //     }
  //   };
  //   if (
  //     (parseInt(this.skillService.V_Pin_Install, 10) && parseInt(this.skillService.T_Pin_Install, 10)) ||
  //     parseInt(this.skillService.V_Pin_Install, 10)
  //   ) {
  //     this.appService.prevupORdown = true;
  //     this.obdscanService.Zdata.dashboardSwitchGear();
  //   }

  //   // 将当前拔下的插头赋值给变量
  //   this.multimeterService.Mdata.currentPinOut = obj[this.skillService.V_Pin_Install][this.skillService.T_Pin_Install];
  //   if (this.oscilloscopeService.Mdata.oscilloscopeStatus) {
  //     this.oscilloscopeService.Mdata.oscilloscopeRedRecover();
  //     this.oscilloscopeService.Mdata.oscilloscopeBlackRecover();
  //     this.multimeterService.Mdata.multimeterblackRecover();
  //     this.multimeterService.Mdata.multimeterredRecover();
  //   }
  // }


  pullOutUnit(event) {
    this.multimeterService.Mdata.multimeterredRecover();
    this.multimeterService.Mdata.multimeterblackRecover();
    let classNameArr = $(event).parent().attr("class");
    let className = classNameArr.split(" ")[0];
    this.skillService[className.split("")[0] + "_Pin_Install"] = "0";
    this.multimeterService.Mdata.dropRedID = null;
    this.multimeterService.Mdata.dropBlackID = null;
    this.chatouBG();
    this.obdscanService.Zdata.acceleratorPedalPosition = '0';
    this.appService.VCUB = 0;
    let obj = {
      // V插头是否拔下,先判断
      "0": {
        // T6插头是否拔下，后判断
        "0": "allOut",
        "1": "offV"
      },
      "1": {
        "0": "offT6",
        "1": "toall"
      }
    };
    if (
      (!parseInt(this.skillService.V_Pin_Install, 10) &&
        !parseInt(this.skillService.T_Pin_Install, 10)) ||
      !parseInt(this.skillService.V_Pin_Install, 10)
    ) {
      this.appService.prevupORdown = false;
    }
    this.multimeterService.Mdata.currentPinOut =
      obj[this.skillService.V_Pin_Install][this.skillService.T_Pin_Install];

    // this.obdscanService.Zdata.reloadCurrenDataStream();

    if (this.oscilloscopeService.Mdata.oscilloscopeStatus) {
      this.oscilloscopeService.Mdata.oscilloscopeRedRecover();
      this.oscilloscopeService.Mdata.oscilloscopeBlackRecover();
      this.multimeterService.Mdata.multimeterblackRecover();
      this.multimeterService.Mdata.multimeterredRecover();
      this.obdscanService.Zdata.dashboardSwitchGear();
    }

    // this.obdscanService.Zdata.showNotCommunication();
  }


  chatouBG() {
    setTimeout(() => {
      this.multimeterService.Mdata.freshHontspot();
    }, 2000);
    // 任务一显示的电路图变化
    if (
      this.skillService.V_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 15
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/3.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.T_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 15
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/4.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.V_Pin_Install === "0" &&
      this.skillService.T_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 15
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/2.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.V_Pin_Install === "1" &&
      this.skillService.T_Pin_Install === "1" &&
      this.appService.progressData.describeFlag === 15
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/1.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    // 任务二显示的电路图变化
    if (
      this.skillService.V_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 21
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/8.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.T_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 21
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/7.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.V_Pin_Install === "0" &&
      this.skillService.T_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 21
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/6.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.V_Pin_Install === "1" &&
      this.skillService.T_Pin_Install === "1" &&
      this.appService.progressData.describeFlag === 21
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/5.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    // 任务三显示的电路图变化
    if (
      this.skillService.V_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 27
    ) {
      console.log('op[poityuiop[');
      this.obdscanService.Zdata.collectionData = '20.00';
      this.obdscanService.Zdata.negativePole = '20.00';
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/11.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.T_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 27
    ) {
      this.obdscanService.Zdata.collectionData = '120.00';
      this.obdscanService.Zdata.negativePole = '124.00';
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/12.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.V_Pin_Install === "0" &&
      this.skillService.T_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 27
    ) {
      this.obdscanService.Zdata.collectionData = '120.00';
      this.obdscanService.Zdata.negativePole = '124.00';
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/10.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.V_Pin_Install === "1" &&
      this.skillService.T_Pin_Install === "1" &&
      this.appService.progressData.describeFlag === 27
    ) {
      this.obdscanService.Zdata.collectionData = '1.00';
      this.obdscanService.Zdata.negativePole = '1.00';
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/9.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    // 任务四显示的电路图变化
    if (
      this.skillService.V_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 33
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/15.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.T_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 33
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/16.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.V_Pin_Install === "0" &&
      this.skillService.T_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 33
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/14.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.V_Pin_Install === "1" &&
      this.skillService.T_Pin_Install === "1" &&
      this.appService.progressData.describeFlag === 33
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/13.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    // 任务五显示的电路图变化
    if (
      this.skillService.V_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 39
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/19.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.T_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 39
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/20.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.V_Pin_Install === "0" &&
      this.skillService.T_Pin_Install === "0" &&
      this.appService.progressData.describeFlag === 39
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/18.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
    if (
      this.skillService.V_Pin_Install === "1" &&
      this.skillService.T_Pin_Install === "1" &&
      this.appService.progressData.describeFlag === 39
    ) {
      $(".bgpic-circuit").css({
        background: 'url("./assets/images/skill/17.png") no-repeat center',
        backgroundSize: "78%"
      });
    }
  }




  /**
   * 插上插头
   */
  pullInUnit(event) {
    this.multimeterService.Mdata.multimeterredRecover();
    this.multimeterService.Mdata.multimeterblackRecover();
    let classNameArr = $(event).parent().attr("class");
    let className = classNameArr.split(" ")[0];
    this.skillService[className.split("")[0] + "_Pin_Install"] = "1";
    this.multimeterService.Mdata.dropRedID = null;
    this.multimeterService.Mdata.dropBlackID = null;
    this.chatouBG();
    this.obdscanService.Zdata.acceleratorPedalPosition = '16';
    this.appService.VCUB = 0.8;
    // obj用于判断V插头拔下的同时是否T6也拔下
    let obj = {
      // 0 拔下/ 1 插上
      // V插头是否拔下,先判断
      "0": {
        // T6插头是否拔下，后判断
        "0": "allOut",
        "1": "offV"
      },
      "1": {
        "0": "offT6",
        "1": "toall"
      }
    };
    if (
      (parseInt(this.skillService.V_Pin_Install, 10) &&
        parseInt(this.skillService.T_Pin_Install, 10)) ||
      parseInt(this.skillService.V_Pin_Install, 10)
    ) {
      this.appService.prevupORdown = true;
      this.obdscanService.Zdata.dashboardSwitchGear();
    }

    // 将当前拔下的插头赋值给变量
    this.multimeterService.Mdata.currentPinOut =
      obj[this.skillService.V_Pin_Install][this.skillService.T_Pin_Install];

    // this.obdscanService.Zdata.reloadCurrenDataStream();

    if (this.oscilloscopeService.Mdata.oscilloscopeStatus) {
      this.oscilloscopeService.Mdata.oscilloscopeRedRecover();
      this.oscilloscopeService.Mdata.oscilloscopeBlackRecover();
      this.multimeterService.Mdata.multimeterblackRecover();
      this.multimeterService.Mdata.multimeterredRecover();
    }

    // this.obdscanService.Zdata.showNotCommunication();
  }

  /**
   *
   * @param parames 根据传进来的值判断选项是否正确,true正确,false错误;
   * @param name  根据名字来判断是那个模拟训练,从而改变相对应的值;
   * @param ev 事件对象;
   * 改变选中答案的样式,同时记录选中答案的对错;
   */
  isWeixiu(param) {
    let [parames, name] = [Boolean(Number(param[0])), param[1]];
    switch (name) {
      case 'moni1':
        if (parames) {
          this.appService.moni1IsOk = true;
        } else {
          this.appService.moni1IsOk = false;
        }
        break;
      case 'moni2':
        if (parames) {
          this.appService.moni2IsOk = true;
        } else {
          this.appService.moni2IsOk = false;
        }
        break;
      case 'moni3':
        if (parames) {
          this.appService.moni3IsOk = true;
        } else {
          this.appService.moni3IsOk = false;
        }
        break;
      case 'moni4':
        if (parames) {
          this.appService.moni4IsOk = true;
        } else {
          this.appService.moni4IsOk = false;
        }
        break;
      case 'moni5':
        if (parames) {
          this.appService.moni5IsOk = true;
        } else {
          this.appService.moni5IsOk = false;
        }
        break;
      default:
        break;
    }
    this.isBol = true;
    // $(ev.target)
    //   .css({
    //     background: '#5a6a8b',
    //     color: '#fff'
    //   })
    //   .siblings('li')
    //   .css({
    //     background: '#fff',
    //     color: '#5a6a8b'
    //   });
  }

  /**
   * 答题页面提交;
   */
  isSub() {
    console.log(123);
    $('.p1').show();
    if (this.isBol) {
      $('.p1').text('维修已完成');
      console.log("维修已完成");
    } else {
      $('.p1').text('请选择维修方式');
      console.log("维修已sdfds完成");
    }

    const setTime = setTimeout(() => {
      $('.p1').hide();
      $('.weixiu li').css({
        background: '#fff',
        color: '#5a6a8b'
      });
      clearTimeout(setTime);
    }, 2000);
  }

  faultDiagnosisShowAnswer(event) {
    console.log(event);
    // $('.right-answer-content').show();
    // this.skillService[event].operator = this.skillService[event].answer;
  }

  ngAfterViewInit() {
    this.appService.setIntervalCallback('sceneInit',
      () => {
        return !window.location.host && !this.appService.getActivityInfoObj;
        // return false;
      }, () => {
        this.coursePrepareService.setStandingTime(this.appService.progressData.describeFlag, true, false);
      })
  }
}

