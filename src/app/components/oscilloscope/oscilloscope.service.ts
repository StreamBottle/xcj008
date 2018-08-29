import { Injectable } from '@angular/core';
//  import { hideAHot } from '../main';
import { HandleErrorService } from '../../components/handle_error';
import { CommunicationService } from '../communication/communication.service';
import { AppService } from '../../index/app.service';


declare let $: any;
@Injectable()
export class OscilloscopeService {
  constructor(
    public communicationService: CommunicationService,
    private appService: AppService,
  ) {
  }

  ngOnInit() {
    this.Mdata.ie();
  }

  // 示波器显示数值数据大表
  oscilloscopeWaveValue01 = {
    // 当前有没有故障，故障是哪一个故障-----0为没有故障，1及以上有故障
    '0': {
      // 当前拔下的是V还是T6部件，还有都插着或都拔下
      'V': {
        'V1,V2': [0, 0],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [0, 0],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [0, 0],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [0, 0],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      },
      'T6': {
        'V1,V2': [48, 48],
        'V3,V4': [0, 29],
        'V5,V6': [29, 0],
        'T6P1,T6P2': [48, 48],
        'T6P3,T6P4': [0, 29],
        'T6P5,T6P6': [29, 0],
        'V1,T6P2': [48, 48],
        'V3,T6P4': [0, 29],
        'V5,T6P6': [29, 0],
        'V2,T6P1': [48, 48],
        'V4,T6P3': [0, 29],
        'V6,T6P5': [29, 0],
      },
      'toall': {
        'V1,V2': [48, 48],
        'V3,V4': [0, 29],
        'V5,V6': [29, 0],
        'T6P1,T6P2': [48, 48],
        'T6P3,T6P4': [0, 29],
        'T6P5,T6P6': [29, 0],
        'V1,T6P2': [48, 48],
        'V3,T6P4': [0, 29],
        'V5,T6P6': [29, 0],
        'V2,T6P1': [48, 48],
        'V4,T6P3': [0, 29],
        'V6,T6P5': [29, 0],
      },
      'allOut': {
        'V1,V2': [0, 0],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [0, 0],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [0, 0],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [0, 0],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      }
    },
    '1': {
      // 当前拔下的是V还是T6部件，还有都插着或都拔下
      'V': {
        'V1,V2': [0, 0],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [0, 0],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [0, 0],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [0, 0],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      },
      'T6': {
        'V1,V2': [48, 48],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [48, 48],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [48, 48],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [48, 48],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      },
      'toall': {
        'V1,V2': [48, 48],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [48, 48],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [48, 48],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [48, 48],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      },
      'allOut': {
        'V1,V2': [0, 0],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [0, 0],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [0, 0],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [0, 0],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      }
    },
    '2': {
      // 当前拔下的是V还是T6部件，还有都插着或都拔下
      'offV': {
        'N90,N95': [48, 48],
        'N90,GND': [48, 48],
        'N95,1': [48, 48],
        'GND,1': [48, 48],
      },
      'offT6': {
        'N90,N95': [48, 48],
        'N90,GND': [48, 48],
        'N95,1': [48, 48],
        'GND,1': [48, 48],
      },
      'toall': {
        'N90,N95': [48, 48],
        'N90,GND': [48, 48],
        'N95,1': [48, 48],
        'GND,1': [48, 48],
      },
      'allOut': {
        'N90,N95': [48, 48],
        'N90,GND': [48, 48],
        'N95,1': [48, 48],
        'GND,1': [48, 48],
      }
    },
    '3': {
      // 当前拔下的是V还是T6部件，还有都插着或都拔下
      'V': {
        'V1,V2': [0, 0],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [0, 0],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [0, 0],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [0, 0],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      },
      'T6': {
        'V1,V2': [0, 0],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [0, 0],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [0, 0],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [0, 0],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      },
      'toall': {
        'V1,V2': [0, 0],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [0, 0],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [0, 0],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [0, 0],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      },
      'allOut': {
        'V1,V2': [0, 0],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [0, 0],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [0, 0],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [0, 0],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      }
    },
    '4': {
      // 当前拔下的是V还是T6部件，还有都插着或都拔下
      'V': {
        'V1,V2': [48, 48],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [0, 0],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [0, 0],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [0, 0],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      },
      'T6': {
        'V1,V2': [48, 48],
        'V3,V4': [0, 29],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [48, 48],
        'T6P3,T6P4': [0, 29],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [48, 48],
        'V3,T6P4': [0, 29],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [48, 48],
        'V4,T6P3': [0, 29],
        'V6,T6P5': [0, 0],
      },
      'toall': {
        'V1,V2': [48, 48],
        'V3,V4': [0, 29],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [48, 48],
        'T6P3,T6P4': [0, 29],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [48, 48],
        'V3,T6P4': [0, 29],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [48, 48],
        'V4,T6P3': [0, 29],
        'V6,T6P5': [0, 0],
      },
      'allOut': {
        'V1,V2': [0, 0],
        'V3,V4': [0, 0],
        'V5,V6': [0, 0],
        'T6P1,T6P2': [0, 0],
        'T6P3,T6P4': [0, 0],
        'T6P5,T6P6': [0, 0],
        'V1,T6P2': [0, 0],
        'V3,T6P4': [0, 0],
        'V5,T6P6': [0, 0],
        'V2,T6P1': [0, 0],
        'V4,T6P3': [0, 0],
        'V6,T6P5': [0, 0],
      }
    }
  }

  Mdata = {
    Mout: {
      Out1TestPS_x_Scope_x_x_x: '0', // 用于示波器的电压波形图显示
      Out1TestPS_x_Brightness_x_x: '0', // 试电笔亮度状态
      Out1TestPS_x_Flashing_x_x: '0', // 试点笔闪烁
      Out1TestPS_x_Scope_x_x: '1001', // 示波器输出
      Out1TestPS_x_Max_x_x: '0', // 示波器最大值
      Out1TestPS_x_Min_x_x: '0', // 示波器最小值
      Out1TestPS_x_XAxis_x_x: '0', // 示波器X轴
      Out1TestPS_x_YAxis_x_x: '0' // 示波器Y轴
    },

    rollInit: 0,
    boxingtu: {
      '1001': 1001
    },
    _this: this,
    // courseprepare课件示波器参数
    yReduce: 0,     // 如果arr[0]<arr[1]  则yReduce的初始值为波峰的两倍
    currentOscilloscopeArr: [0, 29],      // 测量时的数组赋值给arr
    // 0V的波形线
    zeroLine:false,
    // 12.5V的波形线
    noZeroLine:false,

    Out1TestPS_x_XAxis_x_x: 0, //示波器上的时间数
    time: 0, //时间单位
    oscilloscope_width: 0,
    oscilloscopeStatus: false, //二极管试灯的显示状态  
    SvgStatus: true, //二极管试灯的线状态
    SvgRightStatus: true, //示波仪右边表线
    SvgLeftStatus: true, //示波仪左边表线
    oscilloscope_test: true, //示波仪是否正在测量   
    oscilloscope_pen: true,
    oscilloscope_body: 1, //示波仪表身是否能拖动，1代表能，0代表不能
    oscilloscope_left: 1, //示波仪左侧黑色表笔
    oscilloscope_right: 1, //示波仪右侧黑色表笔

    redrepetition: null,
    blackrepetition: null,

    oscilloscopeRedPosition: 0, //示波仪表笔在那个控件上
    oscilloscopeBlackPosition: 0, //示波仪表笔在那个控件上

    Param_leftx: '357', //红色表线起始x坐标\红色表线曲线起始x坐标
    Param_lefty: '325', //红色表线起始y坐标\红色表线曲线起始y坐标
    Param_leftcx: '420', //红色表线曲线拐x坐标
    Param_leftcy: '90', //红色表线曲线拐y坐标
    Param_leftpx: '459', //红色表线曲线结束x坐标
    Param_leftpy: '154', //红色表线曲线结束x坐标



    Param_rightx: '559', //黑色表线起始x坐标\黑色表线曲线起始x坐标
    Param_righty: '104', //黑色表线起始y坐标\黑色表线曲线起始y坐标
    Param_rightcx: '610', //黑色表线曲线拐x坐标
    Param_rightcy: '80', //黑色表线曲线拐y坐标
    Param_rightpx: '650', //黑色表线曲线结束x坐标
    Param_rightpy: '150', //黑色表线曲线结束x坐标

    // oscilloscopestartx: '357', //left表线起始x坐标\红色表线曲线起始x坐标的恢复值
    // oscilloscopestarty: '325', //left表线起始y坐标\红色表线曲线起始y坐标的恢复值
    // oscilloscoperadianx: '420', //left表线曲线拐x坐标的恢复值
    oscilloscoperadiany: '90', //left表线曲线拐y坐标的恢复值
    oscilloscopestopx: '459', //left表线曲线结束x坐标的恢复值
    oscilloscopestopy: '154', //left表线曲线结束x坐标的恢复值
    ostartRollTwo: '', //定时器
    penRepetition: '0', //存储示波仪表笔放在那个热区上

    oscilloscope_Html: null, //表笔的那个页面
    oscilloscopestartx: '792', //二级管试灯表线起始x坐标\二级管试灯表线曲线起始x坐标的恢复值
    oscilloscopestarty: '199', //二级管试灯表线起始y坐标\二级管试灯表线曲线起始y坐标的恢复值
    oscilloscoperadianx: '810', //二级管试灯表线曲线拐x坐标的恢复值
    svgRecoverStatus: '1', //表针是否需要恢复回原处，1代表用，0为不用
    judgeS: function (href) {
      if (this.oscilloscope_Html == href || this.oscilloscope_Html == null) {
        this.SvgLeftStatus = true;
        this.oscilloscope_pen = true;
      } else {
        if (this.oscilloscope_test) {
          this.SvgLeftStatus = false;
          this.oscilloscope_pen = false;
        }
      }
    },

    //表笔笔的恢复初位置
    oscilloscopeRedRecover: function () {
      var topInt = parseInt($('#mask-oscilloscope').css('top').replace('px', '')),
        leftInt = parseInt($('#mask-oscilloscope').css('left').replace('px', '')),
        toppoint = topInt - 80,
        leftpoint = leftInt - 290;

      $('#path_black').css('stroke', '#656261');
      $('#oscilloscope-red').css('top', '' + (toppoint + 81) + 'px');
      $('#oscilloscope-red').css('left', '' + (leftpoint + 261) + 'px');
      $('#oscilloscopeHot-red').css('top', '' + (toppoint + 284) + 'px');
      $('#oscilloscopeHot-red').css('left', '' + (leftpoint + 261) + 'px');
      this.oscilloscope_Html = null;
      this.oscilloscopeRedPosition = 0;
      this.oscilloscope_left = 1;
    },

    // 示波器黑表比的恢复初始位置
    oscilloscopeBlackRecover: function () {
      var topInt = parseInt($('#mask-oscilloscope').css('top').replace('px', '')),
        leftInt = parseInt($('#mask-oscilloscope').css('left').replace('px', '')),
        toppoint = topInt - 80,
        leftpoint = leftInt - 290;

      $('#path_black').css('stroke', '#656261');
      $('#oscilloscope-black').css('top', '' + (toppoint + 81) + 'px');
      $('#oscilloscope-black').css('left', '' + (leftpoint + 566) + 'px');
      $('#oscilloscopeHot-black').css('top', '' + (toppoint + 284) + 'px');
      $('#oscilloscopeHot-black').css('left', '' + (leftpoint + 566) + 'px');
      this.oscilloscope_Html = null;
      this.oscilloscopeBlackPosition = 0;
      this.oscilloscope_right = 1;
    },

    addData: function (num) {
      $('.wave').css('background', "url('')");
      $('.vman').html();
      $('.vmin').html();
      $('.chi').html();
      $('.time').html();
    },

    /* 波形图片的预加载在万用表中示波器drop时有调用 */
    loadImage: function (url, callback) {
      var img = new Image();
      img.src = url;

      if (img.complete) {
        callback && callback();
        return;
      }
      img.onload = function () {
        callback && callback();
      };
    },

    Out1TestPS_x_Scope_x_xIsChange: 0,


    //波形动画
    rollTwo: function () {
      if (this.rollInit == 0) {
        $('.oUl').animate({ marginLeft: '-' + this.oscilloscope_width + 'px' }, 8000, 'linear', function () {
          $('.oUl').css({ marginLeft: '0px' });
        });
        if (this.Mout.Out1TestPS_x_Scope_x_x_x >= 0 && this.Mout.Out1TestPS_x_Scope_x_x_x < 1001) {
          $('.waveform ul').css('top', '-' + this.Mout.Out1TestPS_x_Scope_x_x_x / this.Mout.Out1TestPS_x_YAxis_x_x * 12 + 'px');
        } else {
          $('.waveform ul').css('top', '0px');
        }
      } else {
        this.rollInit = 0;
        if (this.Mout.Out1TestPS_x_Scope_x_x_x >= 0 && this.Mout.Out1TestPS_x_Scope_x_x_x < 1001) {
          $('.waveform ul').css('top', '-' + this.Mout.Out1TestPS_x_Scope_x_x_x / this.Mout.Out1TestPS_x_YAxis_x_x * 12 + 'px');
        } else {
          $('.waveform ul').css('top', '0px');
        }
        setTimeout(function () {
          this.loadImage('./images/' + this.Mout.Out1TestPS_x_Scope_x_x + '.png', this.rollTwo());
        }, 300);
      }

    },


    oscilloscopeHide: function () {
      // xcjDataService.setHandle('ver387');
      this.oscilloscopeStatus = false; //示波仪的显示状态
      this.SvgStatus = false; //示波仪的线状态
      this.SvgRightStatus = true; //示波仪右边表笔
      this.SvgLeftStatus = true; //示波仪左边表笔
      this.oscilloscope_test = false; //示波仪是否正在测量
      this.oscilloscope_pen = true;
      this.oscilloscope_body = 1; //示波仪表身是否能拖动，1代表能，0代表不能
      this.oscilloscope_left = 1; //示波仪左侧黑色表笔
      this.oscilloscope_right = 1; //示波仪右侧黑色表笔
      this.noZeroLine=false;
      this.zeroLine=false;

      this.Param_leftx = '358'; //红色表线起始x坐标\红色表线曲线起始x坐标
      this.Param_lefty = '325'; //红色表线起始y坐标\红色表线曲线起始y坐标
      this.Param_leftcx = '420'; //红色表线曲线拐x坐标
      this.Param_leftcy = '90'; //红色表线曲线拐y坐标
      this.Param_leftpx = '458'; //红色表线曲线结束x坐标
      this.Param_leftpy = '152'; //红色表线曲线结束x坐标



      this.Param_rightx = '559'; //黑色表线起始x坐标\黑色表线曲线起始x坐标
      this.Param_righty = '104'; //黑色表线起始y坐标\黑色表线曲线起始y坐标
      this.Param_rightcx = '610'; //黑色表线曲线拐x坐标
      this.Param_rightcy = '80'; //黑色表线曲线拐y坐标
      this.Param_rightpx = '650'; //黑色表线曲线结束x坐标
      this.Param_rightpy = '150'; //黑色表线曲线结束x坐标

      this.oscilloscopestartx = '360'; //left表线起始x坐标\红色表线曲线起始x坐标的恢复值
      this.oscilloscopestarty = '325'; //left表线起始y坐标\红色表线曲线起始y坐标的恢复值
      this.oscilloscoperadianx = '420'; //left表线曲线拐x坐标的恢复值
      this.oscilloscoperadiany = '90'; //left表线曲线拐y坐标的恢复值
      this.oscilloscopestopx = '458'; //left表线曲线结束x坐标的恢复值
      this.oscilloscopestopy = '152'; //left表线曲线结束x坐标的恢复值
      this.startRollTwo = ''; //波形定时器
      this.penRepetition = '0'; //存储示波仪表笔放在那个热区上

      this.oscilloscope_Html = null; //表笔的那个页面
      this.oscilloscopestartx = '792'; //示波仪表线起始x坐标\示波仪表线曲线起始x坐标的恢复值
      this.oscilloscopestarty = '199'; //示波仪表线起始y坐标\示波仪表线曲线起始y坐标的恢复值
      this.oscilloscoperadianx = '810'; //示波仪表线曲线拐x坐标的恢复值
      this.svgRecoverStatus = '1';

      this.currentOscilloscopeArr = [0, 0];
      this.yReduce = 0;
      this.oscilloscopeRedPosition = '0';
      this.oscilloscopeBlackPosition = '0';

      $('#mask-oscilloscope').css({ 'top': '319px', 'left': '372px' });
      $('#oscilloscope-left').css({ 'top': '146px', 'left': '440px' });
      $('#oscilloscope-right').css({ 'top': '146px', 'left': '541px' });
      $('#oscilloscope-red').css({ 'top': '320px', 'left': '340px' });
      $('#oscilloscopeHot-red').css({ 'top': '520px', 'left': '340px' });
      this.setRightPen();
      $('#path_left').attr('d', 'M' + this.Param_leftx + ' ' + this.Param_lefty
        + ' C' + this.Param_leftx + ' ' + this.Param_lefty + ' ' + this.Param_leftcx
        + ' ' + this.Param_leftcy + ' ' + this.Param_leftpx + ' ' + this.Param_leftpy);
      $('#oscilloscope').attr('src', 'images/oscilloscope.png');
      $('#path_left').css('stroke', '#656261');
    },
    setRightPen: function () {
      $('#path_right').attr('d', 'M' + this.Param_rightx + ' ' + this.Param_righty + ' C' + this.Param_rightx + ' ' + this.Param_righty + ' ' + this.Param_rightcx + ' ' + this.Param_rightcy + ' ' + this.Param_rightpx + ' ' + this.Param_rightpy);
    },
    smokehide0: function () {
      this.smokeStatus = false;
    },
    ie: function () {
      setTimeout(() => {
        this.SvgStatus = false;
      }, 100);
    },


  };





}
