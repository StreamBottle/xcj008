import { Injectable } from '@angular/core';
//  import { hideAHot } from '../main';
import { HandleErrorService } from '../../components/handle_error';
import { OscilloscopeService } from '../../components/oscilloscope/oscilloscope.service';
import { GearPanelService } from '../../components/gear_panel/gear_panel.service';
import { DashboardService } from '../../components/dashboard/dashboard.service';
import { CommunicationService } from '../communication';
import { AppService } from '../../index/app.service';

declare let $: any, io: any;

@Injectable()
export class MultimeterService {
  constructor(
    public communicationService: CommunicationService,
    public appService: AppService,
    public oscilloscopeService: OscilloscopeService,
    public gearPanelService: GearPanelService,
    public dashboardService: DashboardService,
  ) {
  }

  // 万用表中自己的参数
  Mdata = {
    Adata: {
      '0': {
        // 交流数据
        'dvNum': {
          'toall': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [1.7, 1.9, 'random'],
            [1.7, 1.9, 'random'],
            [0, 1.5, 'add'],
            [0, 0, 'on'],
            [0, 1.5, 'add'],
            [0, 1.5, 'add'],
            [1.7, 1.9, 'random'],
            [1.7, 1.9, 'random'],
            [0, 1.5, 'add'],
            [0, 1.5, 'add'],
            [1.5, 0, 'add'],
            [1.5, 0, 'add']],
          'offV': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on']],
          'offT6': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [3.5, 3.5, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [3.5, 3.5, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on']
          ]
        },
        'resistance': {
          'allOut': {
            'V1,T6P1': ['0.01'],
            'V2,T6P2': ['0.01'],
            'V3,T6P3': ['0.01'],
            'V4,T6P4': ['0.01'],
            'V5,T6P5': ['0.01'],
            'V6,T6P6': ['0.01'],

            'V1,2': ['OL'],
            'V2,2': ['OL'],
            'V3,2': ['OL'],
            'V4,2': ['OL'],
            'V5,2': ['OL'],
            'V6,2': ['OL'],

            'T6P1,2': ['OL'],
            'T6P2,2': ['OL'],
            'T6P3,2': ['OL'],
            'T6P4,2': ['OL'],
            'T6P5,2': ['OL'],
            'T6P6,2': ['OL'],

            'T6P1,T6P2': ['21'],
            'T6P3,T6P4': ['49'],
            'T6P5,T6P6': ['48'],
          }
        }
      },
      '1': {
        // 交流数据
        'dvNum': {
          'toall': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [1.7, 1.9, 'random'],
            [1.7, 1.9, 'random'],
            [0, 1.5, 'add'],
            [0, 0, 'on'],
            [0, 1.5, 'add'],
            [0, 1.5, 'add'],
            [1.7, 1.9, 'random'],
            [1.7, 1.9, 'random'],
            [0, 1.5, 'add'],
            [0, 1.5, 'add'],
            [1.5, 0, 'add'],
            [1.5, 0, 'add']],
          'offV': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on']],
          'offT6': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [3.5, 3.5, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [3.5, 3.5, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on']
          ]
        },
        'resistance': {
          'allOut': {
            'V1,T6P1': ['0.01'],
            'V2,T6P2': ['0.01'],
            'V3,T6P3': ['0.01'],
            'V4,T6P4': ['0.01'],
            'V5,T6P5': ['0.01'],
            'V6,T6P6': ['0.01'],

            'V1,2': ['OL'],
            'V2,2': ['OL'],
            'V3,2': ['OL'],
            'V4,2': ['OL'],
            'V5,2': ['OL'],
            'V6,2': ['OL'],

            'T6P1,2': ['OL'],
            'T6P2,2': ['OL'],
            'T6P3,2': ['OL'],
            'T6P4,2': ['OL'],
            'T6P5,2': ['OL'],
            'T6P6,2': ['OL'],

            'T6P1,T6P2': ['OL'],
            'T6P3,T6P4': ['49'],
            'T6P5,T6P6': ['48'],
          }
        }
      },
      '2': {
        // 交流数据
        'dvNum': {
          'toall': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [1.7, 1.9, 'random'],
            [1.7, 1.9, 'random'],
            [0, 1.5, 'add'],
            [0, 0, 'on'],
            [0, 1.5, 'add'],
            [0, 1.5, 'add'],
            [1.7, 1.9, 'random'],
            [1.7, 1.9, 'random'],
            [0, 1.5, 'add'],
            [0, 1.5, 'add'],
            [1.5, 0, 'add'],
            [1.5, 0, 'add']],
          'offV': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on']],
          'offT6': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [3.5, 3.5, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [3.5, 3.5, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on']
          ]
        },
        'resistance': {
          'allOut': {
            'V1,T6P1': ['0.01'],
            'V2,T6P2': ['OL'],
            'V3,T6P3': ['0.01'],
            'V4,T6P4': ['0.01'],
            'V5,T6P5': ['0.01'],
            'V6,T6P6': ['0.01'],

            'V1,2': ['OL'],
            'V2,2': ['OL'],
            'V3,2': ['OL'],
            'V4,2': ['OL'],
            'V5,2': ['OL'],
            'V6,2': ['OL'],

            'T6P1,2': ['OL'],
            'T6P2,2': ['OL'],
            'T6P3,2': ['OL'],
            'T6P4,2': ['OL'],
            'T6P5,2': ['OL'],
            'T6P6,2': ['OL'],

            'T6P1,T6P2': ['21'],
            'T6P3,T6P4': ['49'],
            'T6P5,T6P6': ['48'],
          }
        }
      },
      '3': {
        // 交流数据
        'dvNum': {
          'toall': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [1.7, 1.9, 'random'],
            [1.7, 1.9, 'random'],
            [0, 1.5, 'add'],
            [0, 0, 'on'],
            [0, 1.5, 'add'],
            [0, 1.5, 'add'],
            [1.7, 1.9, 'random'],
            [1.7, 1.9, 'random'],
            [0, 1.5, 'add'],
            [0, 1.5, 'add'],
            [1.5, 0, 'add'],
            [1.5, 0, 'add']],
          'offV': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on']],
          'offT6': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [3.5, 3.5, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [3.5, 3.5, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on']
          ]
        },
        'resistance': {
          'allOut': {
            'V1,T6P1': ['0.01'],
            'V2,T6P2': ['0.01'],
            'V3,T6P3': ['0.01'],
            'V4,T6P4': ['0.01'],
            'V5,T6P5': ['0.01'],
            'V6,T6P6': ['0.01'],

            'V1,2': ['0.01'],
            'V2,2': ['OL'],
            'V3,2': ['OL'],
            'V4,2': ['OL'],
            'V5,2': ['OL'],
            'V6,2': ['OL'],

            'T6P1,2': ['0.01'],
            'T6P2,2': ['OL'],
            'T6P3,2': ['OL'],
            'T6P4,2': ['OL'],
            'T6P5,2': ['OL'],
            'T6P6,2': ['OL'],

            'T6P1,T6P2': ['21'],
            'T6P3,T6P4': ['49'],
            'T6P5,T6P6': ['48'],
          }
        }
      },
      '4': {
        // 交流数据
        'dvNum': {
          'toall': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [1.7, 1.9, 'random'],
            [1.7, 1.9, 'random'],
            [0, 1.5, 'add'],
            [0, 0, 'on'],
            [0, 1.5, 'add'],
            [0, 1.5, 'add'],
            [1.7, 1.9, 'random'],
            [1.7, 1.9, 'random'],
            [0, 1.5, 'add'],
            [0, 1.5, 'add'],
            [1.5, 0, 'add'],
            [1.5, 0, 'add']],
          'offV': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on']],
          'offT6': [
            [0, 0, 'on'],
            [13.8, 13.8, 'on'],
            [0, 0, 'on'],
            [3.5, 3.5, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [3.5, 3.5, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on'],
            [0, 0, 'on']
          ]
        },
        'resistance': {
          'allOut': {
            'V1,T6P1': ['0.01'],
            'V2,T6P2': ['0.01'],
            'V3,T6P3': ['0.01'],
            'V4,T6P4': ['0.01'],
            'V5,T6P5': ['0.01'],
            'V6,T6P6': ['0.01'],

            'V1,2': ['OL'],
            'V2,2': ['OL'],
            'V3,2': ['OL'],
            'V4,2': ['OL'],
            'V5,2': ['0.01'],
            'V6,2': ['OL'],

            'T6P1,2': ['OL'],
            'T6P2,2': ['OL'],
            'T6P3,2': ['OL'],
            'T6P4,2': ['OL'],
            'T6P5,2': ['0.01'],
            'T6P6,2': ['OL'],

            'T6P1,T6P2': ['21'],
            'T6P3,T6P4': ['49'],
            'T6P5,T6P6': ['48'],
          }
        }
      },
    },
    appService: this.appService,
    oscilloscopeService: this.oscilloscopeService,
    gearPanelService: this.gearPanelService,
    dashboardService: this.dashboardService,
    currentFault: this.appService.currentFault,    // 0为正常状态，1为故障1，2为故障2，3为故障3，4为故障4
    currentPinOut: 'toall',  // V就是拔下了V插头，T6就是拔下了T6插头，toall是插头都插着
    currentOsciMeasureHotSpot: [0, 0],  // 当前示波器所在热区是多少

    falseconnectStatus: false,
    dropsuccessNum: '', //  表笔放在热区位置代表的数值 1正常测试，2短路
    redposition: '',  //  红表笔在热区的位置
    blackposition: '', // 黑表笔在热区的位置
    multimeterStatus: false, // 万用表的表身显示和隐藏
    multimeterScreenStatus: false, // 万用表的显示屏显示和隐藏
    multimeterScreenNum: '', // 万用表的显示屏数值
    multimeterScreenUnit: '', // 万用表的显示屏中的单位是什么
    multimeterScreenUnitSelf: '', // 万用表的显示屏中的单位是什么
    multimeterScreenrightUnit: '', // 左边单位
    multimetershowDateUnit: '', //  字体为LED，而欧姆单位显示不见，增加一个单位
    SvgStatus: false, // 万用表红表线和红表笔显示和隐藏
    SvgRedStatus: true, // 万用表红表线和红表笔显示和隐藏
    SvgBlackStatus: true, // 万用表黑表线和黑表笔显示和隐藏
    multimeter_drag: '0', // 万用表是否拖动了
    multimeterinsulated: false, // 万用表是否在绝缘电阻档位
    wanyongbiao: '',
    multimeter_body: '1', // 万用表表身是否能拖动，1代表能，0代表不能
    multimeter_red: '1', // 万用表红表笔是否能拖动，1代表能，0代表不能
    multimeter_black: '1', // 万用表黑表笔是否能拖动，1代表能，0代表不能
    svgRecoverStatus: '1', // 万用表的表针时候需要恢复回原处，1代表用，0为不用
    multimeterblackPosition: null, // 存储万用表黑色表笔放在那个控件上
    multimeterredPosition: null, // 存储万用表红色表笔放在那个控件上
    Radrepetition: '0', // 存储万用表红色表笔放在那个热区上
    Blackrepetition: '0', // 存储万用表黑色表笔放在那个热区上
    w_multimeter_redHtml: null, // 万用表红表笔的那个页面
    w_multimeter_blackHtml: null, // 万用表红表笔的那个页面
    Param_redx: '440', // 红色表线起始x坐标\红色表线曲线起始x坐标
    Param_redy: '100', // 红色表线起始y坐标\红色表线曲线起始y坐标
    Param_redcx: '420', // 红色表线曲线拐x坐标
    Param_redcy: '37', // 红色表线曲线拐y坐标
    Param_redpx: '403', // 红色表线曲线结束x坐标
    Param_redpy: '375', // 红色表线曲线结束x坐标
    Param_blackx: '282', // 黑色表线起始x坐标\黑色表线曲线起始x坐标
    Param_blacky: '100', // 黑色表线起始y坐标\黑色表线曲线起始y坐标
    Param_blackcx: '302', // 黑色表线曲线拐x坐标
    Param_blackcy: '37', // 黑色表线曲线拐y坐标
    Param_blackpx: '376', // 黑色表线曲线结束x坐标
    Param_blackpy: '375', // 黑色表线曲线结束x坐标
    multimeterredstartx: '440', // 红色表线起始x坐标\红色表线曲线起始x坐标的恢复值
    multimeterredstarty: '100', // 红色表线起始y坐标\红色表线曲线起始y坐标的恢复值
    multimeterredradianx: '420', // 红色表线曲线拐x坐标的恢复值
    multimeterredradiany: '37', // 红色表线曲线拐y坐标的恢复值
    multimeterredstopx: '403', // 红色表线曲线结束x坐标的恢复值
    multimeterredstopy: '375', // 红色表线曲线结束x坐标的恢复值
    multimeterblackstartx: '282', // 黑色表线起始x坐标\黑色表线曲线起始x坐标的恢复值
    multimeterblackstarty: '100', // 黑色表线起始y坐标\黑色表线曲线起始y坐标的恢复值
    multimeterblackradianx: '302', // 黑色表线曲线拐x坐标的恢复值
    multimeterblackradiany: '37', // 黑色表线曲线拐y坐标的恢复值
    multimeterblackstopx: '376', // 黑色表线曲线结束x坐标的恢复值
    multimeterblackstopy: '375', // 黑色表线曲线结束x坐标的恢复值
    communicationService: this.communicationService,

    modelOrself: 'self',
    multimeter() {
      let _this: any = this;
      // 被使用的状态码
      // multimeterStay = 1;
      // 加上触发样式
      $('.right-multimeter').parent().addClass('active');
      $('.test1').css('opacity', 0.5);
      $('.test1').css('z-index', 1);
      $('.test2').css('z-index', 6666);
      $('#mask-svg').removeClass('hide-important');
      $('.multimeter-bottom').css('transform', 'rotate(0deg)');
      $('.multimeter-contain').removeClass('hide-important');
      $('.clickcircle').css('opacity', 1);
      // continuevoltageflash(voltageflash);
      $('.buttonflash').addClass('hide-important');
      // 显示热区
      $('.circuit-multimeter-hot').removeClass('hide-important');
      // showAHot();
      // 记录进度
      //         recordHistory('A008');
      if ($('.test2').css('opacity') === 0.5) {
        $('.temperature-contain').addClass('hide-important');
        $('.test2').css('opacity', 0);
        $('.temperaturehotwrap').addClass('hide-important');
        $('.multimeter-contain').removeClass('hide-important');
      }
      $('.hotareatest').css('zIndex', 5);
      this.SvgStatus = true;
      this.multimeterScreenNum = '';
      this.multimeterScreenUnit = '';
      this.multimeterScreenUnitSelf = '';
      this.multimeterStatus = true; // 万用表身显示
      this.SvgRedStatus = true; // 万用表红表笔和红表线显示
      this.SvgBlackStatus = true; // 万用表黑表笔和黑表线显示
      setTimeout(() => {
        _this.multimeterredRecover();
        _this.multimeterblackRecover();

        _this.freshHontspot(); // 刷新页面的热区，为表笔接触做准备

        _this.dragStart();

        if ($('.alert-part').css('display') == 'block') {

          _this.arrowAnimate(true);

        } else if ($('.alert-part1').css('display') == 'block') {

          _this.arrowAnimate1(true);

        }
      }, 500);
    },

    redHotspotDrag(top: string, left: string) {
      if (top && left) {
        $('#hhjmultimeterRed-hotspot').css({ 'top': top, 'left': left });
      }

      this.multimeterredPosition = 0;

      $('#hhjmultimeterRed').css('top', '' + (parseInt($('#hhjmultimeterRed-hotspot').css('top').replace('px', ''), 10) - 160) + 'px');
      $('#hhjmultimeterRed').css('left', '' + (parseInt($('#hhjmultimeterRed-hotspot').css('left').replace('px', ''), 10) - 5) + 'px');
      var redLeftInt = parseInt($('#hhjmultimeterRed').css('left').replace('px', ''), 10) + 15,
        redTopInt = parseInt($('#hhjmultimeterRed').css('top').replace('px', ''), 10) + 5,
        topInt = parseInt($('#mask-multimeter').css('top').replace('px', ''), 10) + 230,
        leftInt = parseInt($('#mask-multimeter').css('left').replace('px', ''), 10) + 110,

        cl = (redLeftInt - 40),
        ct = (redTopInt - 80);
      /* console.log(window.parent.Param_stasds);*/

      this.multimeterredstartx = leftInt;
      this.multimeterredstarty = topInt;
      this.multimeterredradianx = cl;
      this.multimeterredradiany = ct;
      this.multimeterredstopx = redLeftInt;
      this.multimeterredstopy = redTopInt;

      var redLeftIntt = redLeftInt - 15, redTopIntt = redTopInt + 230;
      // $('.clickcircle').css('opacity',1);

      $('#path_Red').attr('d', 'M' + redLeftInt + ' ' + redTopInt + ' C' + redLeftInt + ' ' + redTopInt + ' ' + cl + ' ' + ct + ' ' + leftInt + ' ' + topInt);

      if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == '1') {
        this.Mout.Out1NER_Multi_ToScreen_x_x = 'OL';

      } else if (this.Mint.In1NER_Multi_Insulate_Ohm_x == '1') {
        this.Mout.Out1NER_Multi_ToScreen_x_x = '----';
        this.multimeterScreenUnit = '----';
        this.multimeterScreenUnitSelf = '----';
      }
    },
    redHotspotStop(top: string, left: string) {
      console.log('asldfkjalsdjkflaksjdf');
      if (this.svgRecoverStatus == 1) {
        this.multimeterredRecover();
      } else {

        this.svgRecoverStatus = 1;
      }
      if (top && left) {
        this.multimeterredRecover(top, left);
      }

      if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == '1') {
        if (this.multimeter_black == 0 && this.multimeter_red == 0) {
          $('.buttonflash').css('z-index', 3);
          $('.clickcircle ').css('z-index', 1);
          this.Mout.Out1NER_Multi_ToScreen_x_x = 'OL';
          //  this.multimeterScreenUnit = '';
        }
        else {
          //  this.Mout.Out1NER_Multi_ToScreen_x_x = '1.';
          //  this.multimeterScreenUnit = '';
        }
      }
      //  multimeterServiceMout.Out1NER_Multi_ToScreen_x_x
      // 判断是否测量了电阻(两个表针是否都测量了，并且是否打到欧姆档)
      if ((this.Mint.In1NER_Multi_Pass2Ohm_x_x == '1') && (this.Radrepetition != '0') && (this.Blackrepetition != '0')) {
        // 创建警告框
        if ((parseInt(this.Radrepetition, 10) <= 1000)) {
          // $rootScope.createResistanceWarn('此功能不能用');
        }
      }
      // 进度点记录
      this.communicationService.setAction({ id: 'v02', flag: '', sub: '', value: 'redUsed' });
    },
    blackHotspotDrag(top: string, left: string) {

      this.multimeterblackPosition = 0;

      if (top && left) {
        $('#hhjmultimeterBlack-hotspot').css({ 'top': top, 'left': left });
      }
      $('#hhjmultimeterBlack').css('top', '' + (parseInt($('#hhjmultimeterBlack-hotspot').css('top'), 10) - 160) + 'px');
      $('#hhjmultimeterBlack').css('left', '' + (parseInt($('#hhjmultimeterBlack-hotspot').css('left'), 10) - 5) + 'px');
      var redLeftInt = parseInt($('#hhjmultimeterBlack').css('left'), 10) + 10,
        redTopInt = parseInt($('#hhjmultimeterBlack').css('top'), 10) + 10,
        topInt = parseInt($('#mask-multimeter').css('top'), 10) + 295,
        leftInt = parseInt($('#mask-multimeter').css('left'), 10) + 85,
        cl = (redLeftInt - 40),
        ct = (redTopInt - 80);
      //                   $('.clickcircle').css('opacity',1);
      $('#path_black').attr('d', 'M' + redLeftInt + ' ' + redTopInt + ' C' + redLeftInt + ' ' + redTopInt + ' ' + cl + ' ' + ct + ' ' + leftInt + ' ' + topInt);

      if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == '1') {
        this.Mout.Out1NER_Multi_ToScreen_x_x = 'OL';

      } else if (this.Mint.In1NER_Multi_Insulate_Ohm_x == '1') {
        this.Mout.Out1NER_Multi_ToScreen_x_x = '----';
        this.multimeterScreenUnit = '----';
        this.multimeterScreenUnitSelf = '----';
      }

    },
    blackHotspotStop(top: string, left: string) {
      console.log(this.svgRecoverStatus);
      if (this.svgRecoverStatus == 1) {
        this.multimeterblackRecover();
      } else {
        this.svgRecoverStatus = 1;
      }

      if (top && left) {
        this.multimeterblackRecover(top, left);
      }

      //  判断是否测量了电阻(两个表针是否都测量了，并且是否打到欧姆档)
      if ((this.Mint.In1NER_Multi_Pass2Ohm_x_x == '1') && (this.Radrepetition != '0') && (this.Blackrepetition != '0')) {
        //  创建警告框
        if ((parseInt(this.Radrepetition, 10) <= 1000)) {
          //  $rootScope.createResistanceWarn('此功能不能用');
        }
      }
      if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == '1') {
        //  if (this.multimeter_black == 0 && this.multimeter_red == 0) {
        //      //                       $('.buttonflash').animate({'opacity':1},250,function(){$('.buttonflash').animate({'opacity':0},250)})
        //      //  this.openbuttonflash();
        //      //  this.continuebuttonflash(this.buttonflash);
        //      $('.buttonflash').css('z-index', 3);
        //      $('.clickcircle ').css('z-index', 1);
        //      this.multimeterScreenNum = '1.';
        //      this.multimeterScreenUnit = '';
        //  } else {
        //      this.multimeterScreenNum = '1.';
        //      this.multimeterScreenUnit = '';
        //      //  this.closebuttonflash();
        //  }


      }
      // 进度点记录
      this.communicationService.setAction({ id: 'v03', flag: '', sub: '', value: 'blackUesd' });
    },
    maskMultimeterDrag(top: string, left: string) {
      if (this.multimeter_body == 1 && this.multimeter_red == 1 && this.multimeter_black == 1) {
        if (top && left) {
          $('#mask-multimeter').css({ 'top': top, 'left': left });
        }
        var topInt = top ? parseInt(top, 10) : parseInt($('#mask-multimeter').css('top'), 10),
          leftInt = left ? parseInt(left, 10) : parseInt($('#mask-multimeter').css('left'), 10),
          toppoint = topInt - 80,
          leftpoint = leftInt - 290;
        if (leftpoint > 355) {
          // $('.multimeter-contain').css('z-index', '7');
        } else {
          //  $('.multimeter-contain').css('z-index', '5');
        }
        $('#hhjmultimeterRed').css('top', '' + (toppoint + 97) + 'px');
        $('#hhjmultimeterRed').css('left', '' + (leftpoint + 415) + 'px');
        $('#hhjmultimeterBlack').css('top', '' + (toppoint + 97) + 'px');
        $('#hhjmultimeterBlack').css('left', '' + (leftpoint + 275) + 'px');
        $('#hhjmultimeterRed-hotspot').css('top', '' + (toppoint + 245) + 'px');
        $('#hhjmultimeterRed-hotspot').css('left', '' + (leftpoint + 414) + 'px');
        $('#hhjmultimeterBlack-hotspot').css('top', '' + (toppoint + 250) + 'px');
        $('#hhjmultimeterBlack-hotspot').css('left', '' + (leftpoint + 272) + 'px');
        this.Param_redx = leftpoint + 440;
        this.Param_redy = toppoint + 100;
        this.Param_redcx = leftpoint + 420;
        this.Param_redcy = toppoint + 37;
        this.Param_redpx = leftpoint + 403;
        this.Param_redpy = toppoint + 325;

        this.Param_blackx = leftpoint + 282;
        this.Param_blacky = toppoint + 100;
        this.Param_blackcx = leftpoint + 302;
        this.Param_blackcy = toppoint + 37;
        this.Param_blackpx = leftpoint + 376;
        this.Param_blackpy = toppoint + 325;
        $('#path_Red').attr('d', 'M' + this.Param_redx + ' ' + this.Param_redy + ' C' + this.Param_redx + ' ' + this.Param_redy + ' ' + this.Param_redcx + ' ' + this.Param_redcy + ' ' + this.Param_redpx + ' ' + this.Param_redpy);
        $('#path_black').attr('d', 'M' + this.Param_blackx + ' ' + this.Param_blacky + ' C' + this.Param_blackx + ' ' + this.Param_blacky + ' ' + this.Param_blackcx + ' ' + this.Param_blackcy + ' ' + this.Param_blackpx + ' ' + this.Param_blackpy);

        this.multimeterredstartx = this.Param_redx;
        this.multimeterredstarty = this.Param_redy;
        this.multimeterredradianx = this.Param_redcx;
        this.multimeterredradiany = this.Param_redcy;
        this.multimeterredstopx = this.Param_redpx;
        this.multimeterredstopy = this.Param_redpy;

        this.multimeterblackstartx = this.Param_blackx;
        this.multimeterblackstarty = this.Param_blacky;
        this.multimeterblackradianx = this.Param_blackcx;
        this.multimeterblackradiany = this.Param_blackcy;
        this.multimeterblackstopx = this.Param_blackpx;
        this.multimeterblackstopy = this.Param_blackpy;

      }
      ; // 当黑表笔都在热区上时，万用表整体的拖动
      if (this.multimeter_body == 1 && this.multimeter_red == 1 && this.multimeter_black == 0) {
        if (top && left) {
          $('#mask-multimeter').css({ 'top': top, 'left': left });
        }
        var blackLeftInt = parseInt($('#hhjmultimeterBlack').css('left').replace('px', ''), 10) + 10,
          blackTopInt = parseInt($('#hhjmultimeterBlack').css('top').replace('px', ''), 10) + 5,
          topInt = top ? parseInt(top, 10) : parseInt($('#mask-multimeter').css('top').replace('px', ''), 10),
          leftInt = left ? parseInt(left, 10) : parseInt($('#mask-multimeter').css('left').replace('px', ''), 10),

          cl = (blackLeftInt - 40),
          ct = (blackTopInt - 80);


        toppoint = topInt - 80;
        leftpoint = leftInt - 290;
        if (leftpoint > 355) {
          // $('.multimeter-contain').css('z-index', '7');
        } else {
          //  $('.multimeter-contain').css('z-index', '5');
        }

        $('#hhjmultimeterRed').css('top', '' + (toppoint + 97) + 'px');
        $('#hhjmultimeterRed').css('left', '' + (leftpoint + 415) + 'px');
        //  $('#hhjmultimeterBlack').css('top', '' + (toppoint + 97) + 'px');
        //  $('#hhjmultimeterBlack').css('left', '' + (leftpoint + 256) + 'px');
        $('#hhjmultimeterRed-hotspot').css('top', '' + (toppoint + 245) + 'px');
        $('#hhjmultimeterRed-hotspot').css('left', '' + (leftpoint + 414) + 'px');
        //  $('#hhjmultimeterBlack-hotspot').css('top', '' + (toppoint + 436) + 'px');
        //  $('#hhjmultimeterBlack-hotspot').css('left', '' + (leftpoint + 262) + 'px');

        //  $('#hhjmultimeterRed').css('top', '' + (toppoint + 97) + 'px');
        //  $('#hhjmultimeterRed').css('left', '' + (leftpoint + 428) + 'px');
        //  $('#hhjmultimeterRed-hotspot').css('top', '' + (toppoint + 311) + 'px');
        //  $('#hhjmultimeterRed-hotspot').css('left', '' + (leftpoint + 431) + 'px');
        /* console.log(toppoint); */
        this.Param_blackx = blackLeftInt;
        this.Param_blacky = blackTopInt;
        this.Param_blackcx = cl;
        this.Param_blackcy = ct;
        this.Param_blackpx = leftInt + 90;
        this.Param_blackpy = topInt + 250;

        this.multimeterblackstartx = this.Param_blackx;
        this.multimeterblackstarty = this.Param_blacky;
        this.multimeterblackradianx = this.Param_blackcx;
        this.multimeterblackradiany = this.Param_blackcy;
        this.multimeterblackstopx = this.Param_blackpx;
        this.multimeterblackstopy = this.Param_blackpy;

        this.Param_redx = leftpoint + 440;
        this.Param_redy = toppoint + 100;
        this.Param_redcx = leftpoint + 420;
        this.Param_redcy = toppoint + 37;
        this.Param_redpx = leftpoint + 403;
        this.Param_redpy = toppoint + 325;

        this.multimeterredstartx = this.Param_redx;
        this.multimeterredstarty = this.Param_redy;
        this.multimeterredradianx = this.Param_redcx;
        this.multimeterredradiany = this.Param_redcy;
        this.multimeterredstopx = this.Param_redpx;
        this.multimeterredstopy = this.Param_redpy;
        $('#path_Red').attr('d', 'M' + this.Param_redx + ' ' + this.Param_redy + ' C' + this.Param_redx + ' ' + this.Param_redy + ' ' + this.Param_redcx + ' ' + this.Param_redcy + ' ' + this.Param_redpx + ' ' + this.Param_redpy);
        $('#path_black').attr('d', 'M' + this.Param_blackx + ' ' + this.Param_blacky + ' C' + this.Param_blackx + ' ' + this.Param_blacky + ' ' + this.Param_blackcx + ' ' + this.Param_blackcy + ' ' + this.Param_blackpx + ' ' + this.Param_blackpy);
      }// 当红表笔都在热区上时，万用表整体的拖动
      if (this.multimeter_body == 1 && this.multimeter_red == 0 && this.multimeter_black == 1) {
        if (top && left) {
          $('#mask-multimeter').css({ 'top': top, 'left': left });
        }
        this.Param_stasds = 1;
        var redLeftInt = parseInt($('#hhjmultimeterRed').css('left').replace('px', ''), 10) + 10,
          redTopInt = parseInt($('#hhjmultimeterRed').css('top').replace('px', ''), 10) - 104,
          topInt = top ? parseInt(top, 10) : parseInt($('#mask-multimeter').css('top').replace('px', ''), 10),
          leftInt = left ? parseInt(left, 10) : parseInt($('#mask-multimeter').css('left').replace('px', ''), 10),

          cl = (redLeftInt - 40),
          ct = (redTopInt - 80);


        toppoint = topInt - 80;
        leftpoint = leftInt - 290;
        if (leftpoint > 355) {
          // $('.multimeter-contain').css('z-index', '7');
        } else {
          // $('.multimeter-contain').css('z-index', '5');
        }

        //  $('#hhjmultimeterRed').css('top', '' + (toppoint + 97) + 'px');
        //  $('#hhjmultimeterRed').css('left', '' + (leftpoint + 519) + 'px');
        $('#hhjmultimeterBlack').css('top', '' + (toppoint + 97) + 'px');
        $('#hhjmultimeterBlack').css('left', '' + (leftpoint + 275) + 'px');
        //  $('#hhjmultimeterRed-hotspot').css('top', '' + (toppoint + 436) + 'px');
        //  $('#hhjmultimeterRed-hotspot').css('left', '' + (leftpoint + 526) + 'px');
        $('#hhjmultimeterBlack-hotspot').css('top', '' + (toppoint + 250) + 'px');
        $('#hhjmultimeterBlack-hotspot').css('left', '' + (leftpoint + 272) + 'px');

        //  $('#hhjmultimeterBlack').css('top', '' + (toppoint + 97) + 'px');
        //  $('#hhjmultimeterBlack').css('left', '' + (leftpoint + 272) + 'px');
        //  $('#hhjmultimeterBlack-hotspot').css('top', '' + (toppoint + 315) + 'px');
        //  $('#hhjmultimeterBlack-hotspot').css('left', '' + (leftpoint + 272) + 'px');
        this.Param_redx = redLeftInt;
        this.Param_redy = redTopInt + 110;
        this.Param_redcx = cl;
        this.Param_redcy = ct;
        this.Param_redpx = leftInt + 114;
        this.Param_redpy = topInt + 260;

        this.multimeterredstartx = this.Param_redx;
        this.multimeterredstarty = this.Param_redy;
        this.multimeterredradianx = this.Param_redcx;
        this.multimeterredradiany = this.Param_redcy;
        this.multimeterredstopx = this.Param_redpx;
        this.multimeterredstopy = this.Param_redpy;
        this.Param_blackx = leftpoint + 282;
        this.Param_blacky = toppoint + 100;
        this.Param_blackcx = leftpoint + 302;
        this.Param_blackcy = toppoint + 37;
        this.Param_blackpx = leftpoint + 376;
        this.Param_blackpy = toppoint + 325;

        this.multimeterblackstartx = this.Param_blackx;
        this.multimeterblackstarty = this.Param_blacky;
        this.multimeterblackradianx = this.Param_blackcx;
        this.multimeterblackradiany = this.Param_blackcy;
        this.multimeterblackstopx = this.Param_blackpx;
        this.multimeterblackstopy = this.Param_blackpy;
        $('#path_Red').attr('d', 'M' + this.Param_redx + ' ' + this.Param_redy + ' C' + this.Param_redx + ' ' + this.Param_redy + ' ' + this.Param_redcx + ' ' + this.Param_redcy + ' ' + this.Param_redpx + ' ' + this.Param_redpy);
        $('#path_black').attr('d', 'M' + this.Param_blackx + ' ' + this.Param_blacky + ' C' + this.Param_blackx + ' ' + this.Param_blacky + ' ' + this.Param_blackcx + ' ' + this.Param_blackcy + ' ' + this.Param_blackpx + ' ' + this.Param_blackpy);
      }// 当红黑表笔都在热区上时，万用表整体的拖动
      if (this.multimeter_body == 1 && this.multimeter_red == 0 && this.multimeter_black == 0) {
        if (top && left) {
          $('#mask-multimeter').css({ 'top': top, 'left': left });
        }
        var redLeftInt = parseInt($('#hhjmultimeterRed').css('left').replace('px', ''), 10) + 10,
          redTopInt = parseInt($('#hhjmultimeterRed').css('top').replace('px', ''), 10) - 104,
          blackLeftInt = parseInt($('#hhjmultimeterBlack').css('left').replace('px', ''), 10) + 10,
          blackTopInt = parseInt($('#hhjmultimeterBlack').css('top').replace('px', ''), 10) + 10,
          topInt = top ? parseInt(top, 10) : parseInt($('#mask-multimeter').css('top').replace('px', ''), 10),
          leftInt = left ? parseInt(left, 10) : parseInt($('#mask-multimeter').css('left').replace('px', ''), 10),
          redcl = (redLeftInt - 40),
          redct = (redTopInt - 80),
          blackcl = (blackLeftInt - 40),
          blackct = (blackTopInt - 80);
        if (leftInt > 670) {
          //  $('.multimeter-contain').css('z-index', '7');
        } else {
          //  $('.multimeter-contain').css('z-index', '5');
        }
        this.Param_redx = redLeftInt;
        this.Param_redy = redTopInt + 110;
        this.Param_redcx = redcl;
        this.Param_redcy = redct;
        this.Param_redpx = leftInt + 114;
        this.Param_redpy = topInt + 250;

        this.multimeterredstartx = this.Param_redx;
        this.multimeterredstarty = this.Param_redy;
        this.multimeterredradianx = this.Param_redcx;
        this.multimeterredradiany = this.Param_redcy;
        this.multimeterredstopx = this.Param_redpx;
        this.multimeterredstopy = this.Param_redpy;

        this.Param_blackx = blackLeftInt;
        this.Param_blacky = blackTopInt;
        this.Param_blackcx = blackcl;
        this.Param_blackcy = blackct;
        this.Param_blackpx = leftInt + 90;
        this.Param_blackpy = topInt + 250;

        this.multimeterblackstartx = this.Param_blackx;
        this.multimeterblackstarty = this.Param_blacky;
        this.multimeterblackradianx = this.Param_blackcx;
        this.multimeterblackradiany = this.Param_blackcy;
        this.multimeterblackstopx = this.Param_blackpx;
        this.multimeterblackstopy = this.Param_blackpy;

        // 测量点记录
        this.recordProgress();

        $(document).find('#path_Red').attr('d', 'M' + this.Param_redx + ' ' + this.Param_redy + ' C' + this.Param_redx + ' ' + this.Param_redy + ' ' + this.Param_redcx + ' ' + this.Param_redcy + ' ' + this.Param_redpx + ' ' + this.Param_redpy);
        $(document).find('#path_black').attr('d', 'M' + this.Param_blackx + ' ' + this.Param_blacky + ' C' + this.Param_blackx + ' ' + this.Param_blacky + ' ' + this.Param_blackcx + ' ' + this.Param_blackcy + ' ' + this.Param_blackpx + ' ' + this.Param_blackpy);
      }
    },


    dragStart() {
      let _this: any = this;
      // 红表笔drag，通过一个小块热区带动红表笔
      $('#hhjmultimeterRed-hotspot').draggable({
        containment: '.container', // 只能在规定范围
        scroll: false, // 不出现滚动条
        iframeFix: true, // 不受iframe的影响
        cursor: 'move', // 拖动的鼠标样式
        start(event, ui) {
          _this.freshHontspot();
          clearInterval(this.timer);
        },
        drag: function (event) {

          _this.redHotspotDrag(null, null);
        },
        stop: function () {
          _this.redHotspotStop(null, null);
        }


      });
      // 黑表笔drag，通过一个小块热区带动红表笔
      $('#hhjmultimeterBlack-hotspot').draggable({
        containment: '.container',
        scroll: false,
        iframeFix: true,
        cursor: 'move',
        start(event, ui) {
          console.log('22222222');
          _this.freshHontspot();
          clearInterval(this.timer);
        },
        drag: function (event) {
          _this.blackHotspotDrag(null, null);

        },

        stop: function () {
          _this.blackHotspotStop(null, null);
        }
      });




      // 整个万用表drag，通过万用表表身带动红表笔
      $('#mask-multimeter').draggable({
        containment: '.container',
        scroll: false,
        cursor: 'move',
        // iframeFix: true,
        drag: function (event) {
          _this.maskMultimeterDrag(null, null);
        }
      });
    },


    // 处理范围内的随机数
    isRandom(parmA, parmB): number {
      const num1 = Number((Math.random()).toFixed(2));
      const num2 = Number((Math.random() + parmA).toFixed(2));
      const num = Number(num2 >= parmA && num2 <= parmB ? num2 : this.isRandom(parmA, parmB));
      return num;
    },


    iTrue: true, // 判断是递增还是递减 true=>递增 false=>递减
    arrIndex: 0, // 获取当前数组的索引；

    // 处理范围内的下标递增，数据实现递增或递减
    isArr(arr) {
      let isEntry = true;
      let newarr3 = [];
      let newarr2 = [arr[1]];
      if (arr[0] < arr[1]) {
        newarr3 = [];
        for (let i = 0; i <= arr[1] * 10; i++) {
          let newarr = i * 0.2;
          if (newarr < arr[1]) {
            newarr3.push(newarr);
          } else if (newarr3[newarr3.length - 1] < arr[1]) {
            newarr3.push(arr[1]);
          }
        }
        isEntry = false;
      } else {
        newarr3 = [arr[0]];
        for (let i = Math.floor((arr[0] * 10) / 2); i >= Math.floor((arr[1] * 10) / 2); i--) {
          let newarr = i * .2;
          if (newarr > arr[1]) {
            newarr3.push(newarr);
          } else if (newarr3[newarr3.length - 1] > arr[1]) {
            newarr3.push(arr[1]);
          }
        }
        isEntry = false;
      }
      if (!isEntry) {
        if (this.arrIndex <= 0) {
          this.iTrue = true;
        }

        if (this.arrIndex === newarr3.length - 1) {
          this.iTrue = false;
        }

        if (!this.iTrue) {
          if (this.gearPanelService.isBrake !== 1 && this.gearPanelService.controlStalls !== 2) {
            this.arrIndex--;
          }
        } else {
          if (this.gearPanelService.isBrake !== 1 && this.gearPanelService.controlStalls !== 2) {
            this.arrIndex++;
          }
        }
      }

      return newarr3[this.arrIndex];
    },

    redPen: 0,    // 保存当前红表笔的数值
    blackPen: 0,  // 保存当前黑表笔的数值
    wybShow: 0,   // 计算当前万用表要显示的数值

    dropRedType: null,  // 记录当前红表笔的类型是random还是add还是on
    dropBlackType: null,  // 记录当前黑表笔的类型是random还是add还是on

    dropRedID: null,  // 记录当前黑表笔的类型是random还是add还是on
    dropBlackID: null,  // 记录当前黑表笔的类型是random还是add还是on

    timer: null,

    // 万用表表笔触发drop时触发定时器，移开时关闭定时器

    /**
     * @type eventID   获取当前drop热区的ID
     * @type uiDraggableID   获取当前拖动元素的ID---是红表笔还是黑表笔
     * @type isGears  当前是出发的drop事件还是点击档位事件，如果是点击切换档位则不能给dropRedID、dropRedType赋值----false为drop，true为却换万用表档位
     */
    isDrop(eventID, uiDraggableID, isGears) {
      let id = Number(eventID);

      /**
       * @type pinType 当前拔下的是哪一个插头
       * @type id  当前的表笔drop事件触发的ID
       * @type isGears  当前是出发的drop事件还是点击档位事件，如果是点击切换档位则不能给dropRedID、dropRedType赋值----false为drop，true为却换万用表档位
       */
      let DCElectric = (pinType, id, isGears) => {
        // [this.appService.currentFault]---当前是哪一个故障的数据
        // [pinType]---当前是哪一个插头拔下的数据
        // id---当前是测量电压的测量点的下标ID
        clearInterval(this.timer);
        if (!isGears) {
          // 判断拖动的是哪一个表笔，把相应的ID和类型进行保存
          if (uiDraggableID === 'hhjmultimeterRed-hotspot') {
            this.dropRedID = id;
            this.dropRedType = this.Adata[this.appService.currentFault].dvNum[pinType][id][this.Adata[this.appService.currentFault].dvNum[pinType][id].length - 1];

          } else if (uiDraggableID === 'hhjmultimeterBlack-hotspot') {
            this.dropBlackID = id;
            this.dropBlackType = this.Adata[this.appService.currentFault].dvNum[pinType][id][this.Adata[this.appService.currentFault].dvNum[pinType][id].length - 1];
          }
        }

        if (!this.multimeterblackPosition || !this.multimeterredPosition || this.Mint.In1NER_Multi_ACVlt_x_x !== '1') {
          return;
        }

        clearInterval(this.timer);

        // 封装当前执行的定时器函数------交流电压值相加
        this.timer = setInterval(() => {
          switch (this.dropRedType) {
            case 'random':
              this.redPen = this.isRandom(this.Adata[this.appService.currentFault].dvNum[pinType][this.dropRedID][0], this.Adata[this.appService.currentFault].dvNum[pinType][this.dropRedID][1]);
              break;
            case 'add':
              this.redPen = this.isArr([this.Adata[this.appService.currentFault].dvNum[pinType][this.dropRedID][0], this.Adata[this.appService.currentFault].dvNum[pinType][this.dropRedID][1]]);
              break;
            case 'on':
              this.redPen = this.Adata[this.appService.currentFault].dvNum[pinType][this.dropRedID][0];
              break;
            default:
              this.redPen = 0;
          }
          switch (this.dropBlackType) {
            case 'random':
              this.blackPen = this.isRandom(this.Adata[this.appService.currentFault].dvNum[pinType][this.dropBlackID][0], this.Adata[this.appService.currentFault].dvNum[pinType][this.dropBlackID][1]);
              break;
            case 'add':
              this.blackPen = this.isArr([this.Adata[this.appService.currentFault].dvNum[pinType][this.dropBlackID][0], this.Adata[this.appService.currentFault].dvNum[pinType][this.dropBlackID][1]]);
              break;
            case 'on':
              this.blackPen = this.Adata[this.appService.currentFault].dvNum[pinType][this.dropBlackID][0];
              break;
            default:
              this.blackPen = 0;
          }

          this.wybShow = this.redPen + this.blackPen;

          if (this.dashboardService.stalls === 0) {
            this.wybShow = 0;
          }

          this.multimeterScreenNum = this.wybShow;

          console.log(this.redPen, this.blackPen);
          console.log(this.wybShow);
        }, 1000);
      }

      // 电阻值
      let resistance = () => {
        if (this.timer) {
          clearInterval(this.timer);
        }
        // [this.appService.currentFault]---当前是哪一个故障的数据
        // [this.currentPinOut]---当前是哪一个插头拔下的数据  同测量交流电压时的[pinType]
        // currentOsciMeasureOhm.join()   获取电阻值数据中对象的值

        if (!this.multimeterblackPosition || !this.multimeterredPosition || this.Mint.In1NER_Multi_Pass2Ohm_x_x !== '1') {
          return;
        }

        // 测量电阻时两个表笔放置的位置
        let currentOsciMeasureOhm = [this.multimeterblackPosition, this.multimeterredPosition];
        if (this.Adata[this.appService.currentFault].resistance[this.currentPinOut] && this.Adata[this.appService.currentFault].resistance[this.currentPinOut][currentOsciMeasureOhm.join(',')]) {
          this.wybShow = this.Adata[this.appService.currentFault].resistance[this.currentPinOut][currentOsciMeasureOhm.join()][0];
        } else if (this.Adata[this.appService.currentFault].resistance[this.currentPinOut] && this.Adata[this.appService.currentFault].resistance[this.currentPinOut][currentOsciMeasureOhm.reverse().join(',')]) {
          this.wybShow = this.Adata[this.appService.currentFault].resistance[this.currentPinOut][currentOsciMeasureOhm.join()][0];
        } else {
          this.wybShow = 0;
        }

        this.multimeterScreenNum = this.wybShow;

        console.log(this.wybShow);

      }

      // 交流电压档位
      if (this.Mint.In1NER_Multi_ACVlt_x_x === '1') {
        // 交流电压
        DCElectric(this.currentPinOut, id, false);
      } else if (this.Mint.In1NER_Multi_Pass2Ohm_x_x === '1') {
        // 测量电阻
        if (this.currentPinOut !== 'allOut') {
          // 判断放置表笔时是否拔下插头
          if (uiDraggableID === 'hhjmultimeterRed-hotspot') {
            console.error('请拔下该插头');
            this.multimeterredRecover(null, null);
            return;
          } else if (uiDraggableID === 'hhjmultimeterBlack-hotspot') {
            console.error('请拔下该插头');
            this.multimeterblackRecover(null, null);
            return;
          }
        }

        resistance();
      }
    },


    multimeterShortcutHtml(href) {
      if (this.multimeterStatus) {
        if (this.w_multimeter_blackHtml == href || this.w_multimeter_blackHtml == null) {
          this.SvgBlackStatus = true;
        } else {
          this.SvgBlackStatus = false;
        }
        if (this.w_multimeter_redHtml == href || this.w_multimeter_redHtml == null) {

          this.SvgRedStatus = true;
        } else {
          this.SvgRedStatus = false;
        }
      }
    },
    multimeteroff() {
      // console.log('off');
      //  万用表OFF档位
      this.circleareaAnimate(false);
      this.Mint.In1NER_Multi_Off_x_x = '1';
      this.Mint.In1NER_Multi_ACVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCmVlt_x_x = '0';
      this.Mint.In1NER_Multi_Pass2Ohm_x_x = '0';
      this.Mint.In1NER_Multi_hFE_x_x = '0';
      this.Mint.In1NER_Multi_Amp_x_x = '0';
      this.multimeterinsulated = false;
      this.Mint.In1NER_Multi_mAmp_x_x = '0';
      this.Mint.In1NER_Multi_mirAmp_x_x = '0';
      this.multimeterScreenStatus = false;
      this.multimeterScreenrightUnit = '';
      this.multimetershowDateUnit = '';
      // console.log(2)
      this.multimeterScreenUnit = '';
      this.multimeterScreenUnitSelf = '';
      this.multimeterScreenNum = '';
      //  $('.multimeter-top').css({ 'left': '9px', 'top': '15px' });
      $('.opacitybox').show();
      $('.multimeter-bottom').css('transform', 'rotate(0deg)');
      //  关闭热区板
      // $('.multimeterBlack').css('background-image', 'url(./images/36704121.png)')
      // $('.multimeterRed').css('background-image', 'url(./images/3670412.png)')
      $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack');
      $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed');
      $('.multimeter-Red').css({ 'transform': 'rotate(-30deg)', 'right': '22px', 'bottom': '25px' });
      $('.multimeter-black').css({ 'right': '52px' });

    },
    multimetervv() {
      this.circleareaAnimate(false);
      this.multimeterScreenNum = '0';
      this.multimeterScreenStatus = true;
      this.multimeterinsulated = false;
      this.multimeterScreenrightUnit = '';
      this.multimetershowDateUnit = '';
      this.multimeterScreenUnit = 'V~';
      this.multimeterScreenUnitSelf = 'V~';
      this.Mint.In1NER_Multi_Off_x_x = '0';
      this.Mint.In1NER_Multi_ACVlt_x_x = '1';
      this.Mint.In1NER_Multi_DCVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCmVlt_x_x = '0';
      this.Mint.In1NER_Multi_Pass2Ohm_x_x = '0';
      this.Mint.In1NER_Multi_hFE_x_x = '0';
      this.Mint.In1NER_Multi_Amp_x_x = '0';
      this.Mint.In1NER_Multi_mAmp_x_x = '0';
      this.Mint.In1NER_Multi_mirAmp_x_x = '0';
      $('.multimeter-top').css({ 'left': '25px', 'top': '25px' });
      $('.multimeter-bottom').css('transform', 'rotate(27deg)');
      $('.opacitybox').show();
      $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack');;
      $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed');;
      $('.multimeter-Red').css({ 'transform': 'rotate(-30deg)', 'right': '22px', 'bottom': '25px' });
      $('.multimeter-black').css({ 'right': '52px' });

      this.isDrop(null, null, true);
    },
    multimeterv() {
      this.circleareaAnimate(false);
      this.multimeterScreenNum = '0';
      this.multimeterScreenStatus = true;
      this.multimeterinsulated = false;
      this.multimeterScreenrightUnit = '';
      this.multimetershowDateUnit = '';
      this.multimeterScreenUnit = 'V';
      this.multimeterScreenUnitSelf = 'V';
      this.Mint.In1NER_Multi_Off_x_x = '0';
      this.Mint.In1NER_Multi_ACVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCVlt_x_x = '1';
      this.Mint.In1NER_Multi_DCmVlt_x_x = '0';
      this.Mint.In1NER_Multi_Pass2Ohm_x_x = '0';
      this.Mint.In1NER_Multi_hFE_x_x = '0';
      this.Mint.In1NER_Multi_Amp_x_x = '0';
      this.Mint.In1NER_Multi_mAmp_x_x = '0';
      this.Mint.In1NER_Multi_mirAmp_x_x = '0';
      $('.multimeter-top').css({ 'left': '25px', 'top': '25px' });
      $('.multimeter-bottom').css('transform', 'rotate(56deg)');
      $('.opacitybox').show();
      $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack');;
      $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed');;
      $('.multimeter-Red').css({ 'transform': 'rotate(-30deg)', 'right': '22px', 'bottom': '25px' });
      $('.multimeter-black').css({ 'right': '52px' });
      // 测量点记录
      // $rootScope.recordProgress();
    },
    multimetermv() {
      this.circleareaAnimate(false);
      this.multimeterScreenNum = '0';
      this.multimeterScreenStatus = true;
      this.multimeterinsulated = false;
      this.multimeterScreenUnit = 'mV';
      this.multimeterScreenUnitSelf = 'mV';
      this.multimetershowDateUnit = '';
      this.multimeterScreenrightUnit = '';
      this.Mint.In1NER_Multi_Off_x_x = '0';
      this.Mint.In1NER_Multi_ACVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCmVlt_x_x = '1';
      this.Mint.In1NER_Multi_Pass2Ohm_x_x = '0';
      this.Mint.In1NER_Multi_hFE_x_x = '0';
      this.Mint.In1NER_Multi_Amp_x_x = '0';
      this.Mint.In1NER_Multi_mAmp_x_x = '0';
      this.Mint.In1NER_Multi_mirAmp_x_x = '0';
      $('.multimeter-top').css({ 'left': '25px', 'top': '25px' });
      $('.multimeter-bottom').css('transform', 'rotate(87deg)');
      $('.opacitybox').show();
      $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack');;
      $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed');;
      $('.multimeter-Red').css({ 'transform': 'rotate(-30deg)', 'right': '22px', 'bottom': '25px' });
      $('.multimeter-black').css({ 'right': '52px' });
    },

    multimeterres() {
      this.multimeterScreenNum = '----';
      this.multimeterScreenStatus = true;
      this.multimeterinsulated = true;
      this.multimeterScreenUnit = '---'; // 去除Ω
      this.multimeterScreenUnitSelf = '---'; // 去除Ω
      this.multimeterScreenrightUnit = '1000v'; // 去除Ω
      this.multimetershowDateUnit = '';
      this.Mint.In1NER_Multi_Off_x_x = '0';
      this.Mint.In1NER_Multi_ACVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCmVlt_x_x = '0';
      this.Mint.In1NER_Multi_Pass2Ohm_x_x = '0';
      this.Mint.In1NER_Multi_hFE_x_x = '0';
      this.Mint.In1NER_Multi_Amp_x_x = '0';
      this.Mint.In1NER_Multi_mAmp_x_x = '0';
      this.Mint.In1NER_Multi_mirAmp_x_x = '0';
      this.Mint.In1NER_Multi_Insulate_Ohm_x = '1';
      $('.opacitybox').hide();
      //  console.log(this.dropsuccessNum)
      if (this.dropsuccessNum && this.dropsuccessNum != 0) {
        // this.circleareaAnimate(true);
      }
      $('.multimeter-top').css({ 'left': '25px', 'top': '25px' });
      $('.multimeter-bottom').css('transform', 'rotate(200deg)');
      $('.multimeterBlack').addClass('multimeterjiaziBlack').removeClass('.multimeterBlack');;
      $('.multimeterRed').addClass('multimeterjiaziRed').removeClass('.multimeterRed');;
      // this.multimeterredRecover();
      // this.multimeterblackRecover();
      $('.multimeter-arrow2').stop().hide();
      $('.multimeter-Red').css({ 'transform': 'rotate(-57deg)', 'right': '77px', 'bottom': '23px' });
      $('.multimeter-black').css({ 'right': '84px' });
      // 测量点记录
      this.communicationService.setAction({ id: 'v01', flag: '', sub: '', value: 'res' });

    },
    multimeternofine() {
      this.circleareaAnimate(false);
      this.multimeterScreenNum = '0';
      this.multimeterScreenStatus = true;
      this.multimeterinsulated = false;
      this.multimeterScreenrightUnit = '';
      this.multimetershowDateUnit = '';
      console.log(3);;
      this.multimeterScreenUnit = '';
      this.multimeterScreenUnitSelf = '';
      this.Mint.In1NER_Multi_Off_x_x = '0';
      this.Mint.In1NER_Multi_ACVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCmVlt_x_x = '0';
      this.Mint.In1NER_Multi_Pass2Ohm_x_x = '0';
      this.Mint.In1NER_Multi_hFE_x_x = '1';
      this.Mint.In1NER_Multi_Amp_x_x = '0';
      this.Mint.In1NER_Multi_mAmp_x_x = '0';
      this.Mint.In1NER_Multi_mirAmp_x_x = '0';
      $('.multimeter-top').css({ 'left': '25px', 'top': '25px' });
      $('.multimeter-bottom').css('transform', 'rotate(145deg)');
      $('.opacitybox').show();
      $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack');;
      $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed');;
      $('.multimeter-Red').css({ 'transform': 'rotate(-30deg)', 'right': '22px', 'bottom': '25px' });
      $('.multimeter-black').css({ 'right': '52px' });
    },
    multimeterAA() {
      this.circleareaAnimate(false);
      this.multimeterredRecover();
      this.multimeterblackRecover();
      this.multimeterScreenNum = '0';
      this.multimeterScreenStatus = true;
      this.multimetershowDateUnit = '';
      this.multimeterinsulated = false;
      this.multimeterScreenrightUnit = '';
      this.multimeterScreenUnit = 'A~';
      this.multimeterScreenUnitSelf = 'A~';
      this.Mint.In1NER_Multi_Off_x_x = '0';
      this.Mint.In1NER_Multi_ACVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCmVlt_x_x = '0';
      this.Mint.In1NER_Multi_Pass2Ohm_x_x = '0';
      this.Mint.In1NER_Multi_hFE_x_x = '0';
      this.Mint.In1NER_Multi_Amp_x_x = '1';
      this.Mint.In1NER_Multi_mAmp_x_x = '0';
      this.Mint.In1NER_Multi_mirAmp_x_x = '0';
      $('.multimeter-top').css({ 'left': '25px', 'top': '25px' });
      $('.multimeter-bottom').css('transform', 'rotate(160deg)');
      $('.opacitybox').show();
      $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack');;
      $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed');;
      $('.multimeter-Red').css({ 'transform': 'rotate(-30deg)', 'right': '22px', 'bottom': '25px' });
      $('.multimeter-black').css({ 'right': '52px' });
    },
    multimeterk() {
      this.circleareaAnimate(false);
      this.multimeterScreenNum = 'OL';
      this.multimeterScreenStatus = true;
      this.multimeterinsulated = false;
      this.multimeterScreenrightUnit = '';
      this.multimetershowDateUnit = '';
      this.multimeterScreenUnit = 'Ω';
      this.multimeterScreenUnitSelf = 'Ω';
      this.Mint.In1NER_Multi_Off_x_x = '0';
      this.Mint.In1NER_Multi_ACVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCmVlt_x_x = '0';
      this.Mint.In1NER_Multi_Pass2Ohm_x_x = '1';
      this.Mint.In1NER_Multi_hFE_x_x = '0';
      this.Mint.In1NER_Multi_Amp_x_x = '0';
      this.Mint.In1NER_Multi_mAmp_x_x = '1';
      this.Mint.In1NER_Multi_mirAmp_x_x = '0';
      this.Mint.In1NER_Multi_Insulate_Ohm_x = '0';
      $('.multimeter-top').css({ 'left': '25px', 'top': '25px' });
      $('.multimeter-bottom').css('transform', 'rotate(120deg)');
      $('.opacitybox').show();
      $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack');
      $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed');
      $('.multimeter-arrow1').stop().hide();
      $('.multimeter-Red').css({ 'transform': 'rotate(-30deg)', 'right': '20px', 'bottom': '24px' });
      $('.multimeter-black').css({ 'right': '28px' });
      // 进度点记录
      this.communicationService.setAction({ id: 'v01', flag: '', sub: '', value: '欧姆' });

      this.isDrop(null, null, true);
    },


    multimetermA() {
      this.circleareaAnimate(false);
      this.multimeterScreenNum = '0';
      this.multimeterScreenStatus = true;
      this.multimeterinsulated = false;
      this.multimeterScreenrightUnit = '';
      this.multimetershowDateUnit = '';
      this.multimeterScreenUnit = 'mA';
      this.multimeterScreenUnitSelf = 'mA';
      this.Mint.In1NER_Multi_Off_x_x = '0';
      this.Mint.In1NER_Multi_ACVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCVlt_x_x = '0';
      this.Mint.In1NER_Multi_DCmVlt_x_x = '0';
      this.Mint.In1NER_Multi_Pass2Ohm_x_x = '0';
      this.Mint.In1NER_Multi_hFE_x_x = '0';
      this.Mint.In1NER_Multi_Amp_x_x = '0';
      this.Mint.In1NER_Multi_mAmp_x_x = '0';
      this.Mint.In1NER_Multi_mirAmp_x_x = '1';
      $('.multimeter-top').css({ 'left': '25px', 'top': '25px' });
      $('.multimeter-bottom').css('transform', 'rotate(175deg)');
      $('.opacitybox').show();
      $('.multimeterjiaziBlack').addClass('multimeterBlack').removeClass('multimeterjiaziBlack');
      $('.multimeterjiaziRed').addClass('multimeterRed').removeClass('multimeterjiaziRed');
      $('.multimeter-Red').css({ 'transform': 'rotate(-30deg)', 'right': '22px', 'bottom': '25px' });
      $('.multimeter-black').css({ 'right': '52px' });
    },
    multimeterCircle() {
      if (this.Mint.In1NER_Multi_Insulate_Ohm_x === '0') {
        return;
      }
      $('.clickcircle').hide();
      setTimeout(function () {
        $('.clickcircle').show();
      }, 300);
      if (!this.blackposition || !this.redposition) {
        return false;
      }
      this.circleareaAnimate(false);
      if (this.multimeterinsulated) {
        if (this.dropsuccessNum === '1' || this.dropsuccessNum === '2' || this.dropsuccessNum === '3') {
          this.multimeterScreenUnit = '1023v';
          this.multimeterScreenUnitSelf = '1023v';
          this.multimeterScreenNum = '2.2';
          this.multimetershowDateUnit = 'MΩ';
        }
        else if (this.dropsuccessNum === '4' || this.dropsuccessNum === '5' || this.dropsuccessNum === '6') {
          this.multimeterScreenUnit = '1023v';
          this.multimeterScreenUnitSelf = '1023v';
          this.multimeterScreenNum = '100';
          this.multimetershowDateUnit = 'MΩ';
        }
        else if (this.dropsuccessNum === '10' || this.dropsuccessNum === '20' || this.dropsuccessNum === '30') {
          this.multimeterScreenUnit = '1023v';
          this.multimeterScreenUnitSelf = '1023v';
          this.multimeterScreenNum = '100';
          this.multimetershowDateUnit = 'MΩ';
        }
        else if (this.dropsuccessNum === '11' || this.dropsuccessNum === '21') {
          this.multimeterScreenUnit = '1023v';
          this.multimeterScreenUnitSelf = '1023v';
          this.multimeterScreenNum = '10';
          this.multimetershowDateUnit = 'MΩ';
        }
        else {
          this.multimeterScreenUnit = '1023v';
          this.multimeterScreenUnitSelf = '1023v';
          //  this.multimeterScreenUnit = '---';
          this.multimeterScreenNum = '0';
          this.multimetershowDateUnit = '';
        }
      } else {
        this.multimeterScreenrightUnit = '';
        this.multimeterScreenNum = '0';
      }
      // 进度点记录
      this.communicationService.setAction({ id: 'v04', flag: '', sub: '', value: 'used' });
    },
    closemultimeter() {
      $('.test1').css('opacity', 0);
      // $('.multimeterBlack').css('background-image', 'url(./app/components/multimeter/images/36704121.png)');
      //  $('.multimeterRed').css('background-image', 'url(./app/components/multimeter/images/3670412.png)');
      // 具体注释见js/angularJs/Service.js
      this.multimeteroff();
      this.circleareaAnimate(false);
      this.multimeterinsulated = false;
      this.dropsuccessNum = '';
      this.redposition = '';
      this.blackposition = '';
      this.multimeterStatus = false;
      this.multimeter_drag = '0';
      this.Mint.In1NER_Multi_Red_x_x = '0',
        this.Mint.In1NER_Multi_Black_x_x = '0';
      this.w_multimeter_redHtml = null;
      this.w_multimeter_blackHtml = null;
      this.SvgStatus = false;
      this.multimeter_red = '0';
      this.multimeter_black = '0';
      this.wanyongbiao = '0';
      this.svgRecoverStatus = '1';
      this.multimeterblackPosition = null;
      this.multimeterredPosition = null;
      this.Radrepetition = '0';
      this.Blackrepetition = '0';
      this.multimeter_red = '1';
      this.multimeter_black = '1';
      this.Mint.In1NER_Multi_Insulate_Ohm_x = '0';
      this.Mint.In1NER_Multi_Pass2Ohm_x_x = '0';
      this.multimeterredstartx = this.Param_redx = '440'; // 红色表线起始x坐标
      this.multimeterredstarty = this.Param_redy = '100'; // 红色表线起始y坐标
      this.multimeterredradianx = this.Param_redcx = '420'; // 红色表线曲线拐x坐标
      this.multimeterredradiany = this.Param_redcy = '37'; // 红色表线曲线拐y坐标
      this.multimeterredstopx = this.Param_redpx = '403'; // 红色表线曲线结束x坐标
      this.multimeterredstopy = this.Param_redpy = '375'; // 红色表线曲线结束x坐标
      this.multimeterblackstartx = this.Param_blackx = '282';
      this.multimeterblackstarty = this.Param_blacky = '100';
      this.multimeterblackradianx = this.Param_blackcx = '302';
      this.multimeterblackradiany = this.Param_blackcy = '37';
      this.multimeterblackstopx = this.Param_blackpx = '376';
      this.multimeterblackstopy = this.Param_blackpy = '375';
      $('#mask-multimeter').css('top', '80px');
      $('#mask-multimeter').css('left', '290px');
      $('#hhjmultimeterRed').css('top', '97px');
      $('#hhjmultimeterRed').css('left', '515px');
      $('#hhjmultimeterBlack').css('top', '97px');
      $('#hhjmultimeterBlack').css('left', '254px');
      $('#hhjmultimeterRed-hotspot').css('top', '690px');
      $('#hhjmultimeterRed-hotspot').css('left', '695px');
      $('#hhjmultimeterBlack-hotspot').css('top', '690px');
      $('#hhjmultimeterBlack-hotspot').css('left', '262px');
      $('.multimeter-Red').css({ 'transform': 'rotate(-30deg)', 'right': '22px', 'bottom': '25px' });
      $('.multimeter-black').css({ 'right': '52px' });
      $('#path_Red').attr('d', 'M' + this.multimeterredstartx + ' ' + this.multimeterredstarty + ' C' + this.multimeterredstartx + ' ' + this.multimeterredstarty + ' ' + this.multimeterredradianx + ' ' + this.multimeterredradiany + ' ' + this.multimeterredstopx + ' ' + this.multimeterredstopy);
      $('#path_black').attr('d', 'M' + this.multimeterblackstartx + ' ' + this.multimeterblackstarty + ' C' + this.multimeterblackstartx + ' ' + this.multimeterblackstarty + ' ' + this.multimeterblackradianx + ' ' + this.multimeterblackradiany + ' ' + this.multimeterblackstopx + ' ' + this.multimeterblackstopy);
      // 去除右侧工具栏的触发状态
      $('.right-multimeter').parent().removeClass('active');
      // 隐藏热区
      //  hideAHot();
      // 把状态码设为0；
      // **multimeterStay = 0;
    },

    // 测量点记录
    recordProgress() {
      //  console.log(this.Mout.Out1NER_Multi_ToScreen_x_x);

    },
    judgeS: function (href) {
      if (this.multimeterStatus) {
        if (this.w_multimeter_blackHtml == href || this.w_multimeter_blackHtml == null) {
          this.SvgBlackStatus = true;
        } else {
          this.SvgBlackStatus = false;
        }
        if (this.w_multimeter_redHtml == href || this.w_multimeter_redHtml == null) {

          this.SvgRedStatus = true;
        } else {
          this.SvgRedStatus = false;
        }
      }
    },

    freshHontspotDrop(eventClass, uiDraggableID, eventID) {
      console.log(uiDraggableID, this.oscilloscopeService.Mdata.oscilloscopeRedPosition, $(eventClass).attr('wybblackPosition'), '[][][][][]');
      // 红表笔位置的top值，用来判断表笔层级
      var redPositionTop = 0;
      // 黑表笔位置的top值，用来判断表笔层级
      var blackPositionTop = 0;
      //  通过这两个属性进行表笔的定位
      let hTop = $(eventClass).attr('h-top'),
        hLeft = $(eventClass).attr('h-left');
      if (uiDraggableID == 'hhjmultimeterRed-hotspot' && this.multimeterblackPosition != $(eventClass).attr('wybredPosition')) {
        if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == '1') {
          $('#path_Red').css('stroke', '#db3040');
          this.multimeterScreenUnit = 'Ω';
          this.multimeterScreenUnitSelf = 'Ω';
          //  $('#hhjmultimeterRed').css('background', 'url(./app/components/multimeter/images/clip_r.png)');
        } else {
          $('#path_Red').css('stroke', '#db3040');
        }
        this.redposition = $(eventClass).attr('wybredPosition') || 0;
        $('#hhjmultimeterRed-hotspot').css({
          'top': '' + (parseInt(hTop) + 45, 10) + 'px',
          'left': '' + (parseInt(hLeft) - 15, 10) + 'px'
        });
        $('#hhjmultimeterRed').css({
          'top': '' + (parseInt($('#hhjmultimeterRed-hotspot').css('top'), 10) - $('#hhjmultimeterRed').height() + 41) + 'px',
          'left': '' + (parseInt($('#hhjmultimeterRed-hotspot').css('left'), 10) - 1) + 'px'
        });
        $('#hhjmultimeterRed').addClass('multimeterRed-on');
        var redLeftInt = parseInt(hLeft, 10) - 5,
          redTopInt = parseInt(hTop, 10) + 40,
          //  topInt = parseInt(hTop) + 295,
          //  leftInt = parseInt(hLeft) + 113,
          cl = (redLeftInt - 40),
          ct = (redTopInt + 80);
        $('#path-Red').attr('d', 'M' + redLeftInt + ' ' + redTopInt + ' C' + redLeftInt + ' ' + redTopInt + ' ' + cl + ' ' + ct + ' 523 291');
        this.multimeter_red = 0;
        this.Mint.In1NER_Multi_Red_x_x = $(eventClass).attr('rqPosition');
        this.Radrepetition = $(eventClass).attr('rqPosition'); // 记忆已经有一只放在热区上
        this.multimeterredstartx = parseInt($('#hhjmultimeterRed').css('left'), 10) + 10;
        this.multimeterredstarty = parseInt($('#hhjmultimeterRed').css('top'), 10) + 5;
        this.multimeterredradianx = parseInt($('#hhjmultimeterRed').css('left'), 10) - 90;
        this.multimeterredradiany = parseInt($('#hhjmultimeterRed').css('top'), 10) - 90;
        this.multimeterredstopx = parseInt($('#mask-multimeter').css('left'), 10) + 114;
        this.multimeterredstopy = parseInt($('#mask-multimeter').css('top'), 10) + 258;
        this.svgRecoverStatus = 0;
        this.w_multimeter_redHtml = $(eventClass).attr('h_href');
        this.multimeterredPosition = $(eventClass).attr('wybredPosition');
        // console.log('%c 红表笔的触发值----------' + this.Mint.In1NER_Multi_Red_x_x, 'color: #cc0000');
        $('#path_Red').attr('d', 'M' + this.multimeterredstartx + ' ' + this.multimeterredstarty + ' C' + this.multimeterredstartx + ' ' + this.multimeterredstarty + ' ' + this.multimeterredradianx + ' ' + this.multimeterredradiany + ' ' + this.multimeterredstopx + ' ' + this.multimeterredstopy);

        // 测量点记录
        this.recordProgress();
        // 红黑表笔层级判断
        redPositionTop = parseInt($('#hhjmultimeterRed').css('top'), 10);
        blackPositionTop = parseInt($('#hhjmultimeterBlack').css('top'), 10);


        this.isDrop(eventID, uiDraggableID, false);
      }
      else if (uiDraggableID == 'hhjmultimeterBlack-hotspot' && this.multimeterredPosition != $(eventClass).attr('wybblackPosition')) {
        if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == '1') {
          $('#path_black').css('stroke', '#656261');
          this.multimeterScreenUnit = 'Ω';
          this.multimeterScreenUnitSelf = 'Ω';
          //  $('#hhjmultimeterBlack').css('background', 'url(./app/components/multimeter/images/clip_b.png)');
        } else {
          $('#path_black').css('stroke', '#656261');
        }
        this.blackposition = $(eventClass).attr('wybblackPosition') || 0;
        $('#hhjmultimeterBlack-hotspot').css({
          'top': '' + (parseInt(hTop, 10) + 40) + 'px',
          'left': '' + (parseInt(hLeft, 10) - 15) + 'px'
        });
        $('#hhjmultimeterBlack').addClass('multimeterBlack-on');
        $('#hhjmultimeterBlack').css({
          'top': '' + (parseInt($('#hhjmultimeterBlack-hotspot').css('top'), 10) - $('#hhjmultimeterBlack').height() + 46) + 'px',
          'left': '' + (parseInt($('#hhjmultimeterBlack-hotspot').css('left'), 10) + 2) + 'px'
        });
        var blackLeftInt = parseInt(hLeft, 10) - 5,
          redTopInt = parseInt(hTop, 10) + 40,
          //  topInt = parseInt(hTop) + 295,
          //  blackLeft = parseInt(hLeft) + 113,
          blackCl = (blackLeftInt + 40),
          blackCt = (redTopInt + 80);
        $('#path-black').attr('d', 'M' + blackLeftInt + ' ' + redTopInt + ' C' + blackLeftInt + ' ' + redTopInt + ' ' + blackCl + ' ' + blackCt + ' 501 291 ');
        this.multimeter_black = 0;
        this.Blackrepetition = $(eventClass).attr('rqPosition'); // 记忆已经有一只放在热区上
        this.multimeterblackstartx = parseInt($('#hhjmultimeterBlack').css('left'), 10) + 5;
        this.multimeterblackstarty = parseInt($('#hhjmultimeterBlack').css('top'), 10) + 5;
        this.multimeterblackradianx = parseInt($('#hhjmultimeterBlack').css('left'), 10) + 90;
        this.multimeterblackradiany = parseInt($('#hhjmultimeterBlack').css('top'), 10) - 90;
        this.multimeterblackstopx = parseInt($('#mask-multimeter').css('left'), 10) + 90;
        this.multimeterblackstopy = parseInt($('#mask-multimeter').css('top'), 10) + 260;
        this.svgRecoverStatus = 0;
        this.Mint.In1NER_Multi_Black_x_x = $(eventClass).attr('rqPosition');
        this.w_multimeter_blackHtml = $(eventClass).attr('h_href');
        this.multimeterblackPosition = $(eventClass).attr('wybblackPosition');
        // console.info(' 黑表笔的触发值----------' + this.Mint.In1NER_Multi_Black_x_x);
        $('#path_black').attr('d', 'M' + this.multimeterblackstartx + ' ' + this.multimeterblackstarty + ' C' + this.multimeterblackstartx + ' ' + this.multimeterblackstarty + ' ' + this.multimeterblackradianx + ' ' + this.multimeterblackradiany + ' ' + this.multimeterblackstopx + ' ' + this.multimeterblackstopy);

        // 红黑表笔层级判断
        redPositionTop = parseInt($('#hhjmultimeterRed').css('top'), 10);
        blackPositionTop = parseInt($('#hhjmultimeterBlack').css('top'), 10);
        this.recordProgress();

        this.isDrop(eventID, uiDraggableID, false);

      }
      else if (uiDraggableID == 'oscilloscopeHot-black' && this.oscilloscopeService.Mdata.oscilloscopeRedPosition != $(eventClass).attr('wybblackPosition')) {
        $('#oscilloscope-black').css('top', '' + (parseInt($(eventClass).attr('h-top'), 10) - 166) + 'px');
        $('#oscilloscope-black').css('left', '' + (parseInt($(eventClass).attr('h-left'), 10) - 28) + 'px');
        $('#oscilloscopeHot-black').css('top', '' + (parseInt($(eventClass).attr('h-top'), 10) + 51) + 'px');
        $('#oscilloscopeHot-black').css('left', '' + (parseInt($(eventClass).attr('h-left'), 10) - 28) + 'px');

        this.oscilloscopeService.Mdata.oscilloscope_test = true;
        this.oscilloscopeService.Mdata.oscilloscope_right = 0;
        this.oscilloscopeService.Mdata.svgRecoverStatus = 0;
        this.oscilloscopeService.Mdata.oscilloscope_Html = $(eventClass).attr('h_href');
        this.oscilloscopeService.Mdata.oscilloscopeBlackPosition = $(eventClass).attr('wybblackPosition');
        this.Mint.In1MultiLogic_x_Black_x_x = $(eventClass).attr('rqPosition');

        this.currentOsciMeasureHotSpot = [this.oscilloscopeService.Mdata.oscilloscopeRedPosition, this.oscilloscopeService.Mdata.oscilloscopeBlackPosition];

        if (this.oscilloscopeService.Mdata.oscilloscopeRedPosition != 0 && this.oscilloscopeService.Mdata.oscilloscopeBlackPosition != 0 && this.oscilloscopeService.oscilloscopeWaveValue01[this.currentFault][this.currentPinOut][this.currentOsciMeasureHotSpot.join(',')]) {
          this.oscilloscopeService.Mdata.currentOscilloscopeArr = this.oscilloscopeService.oscilloscopeWaveValue01[this.currentFault][this.currentPinOut][this.currentOsciMeasureHotSpot.join(',')];
          if (this.oscilloscopeService.Mdata.currentOscilloscopeArr[0] < this.oscilloscopeService.Mdata.currentOscilloscopeArr[1]) {
            this.oscilloscopeService.Mdata.yReduce = 0;
          } else {
            this.oscilloscopeService.Mdata.yReduce = this.oscilloscopeService.Mdata.currentOscilloscopeArr[0] * 2;;
          }

        } else if (this.oscilloscopeService.Mdata.oscilloscopeRedPosition != 0 && this.oscilloscopeService.Mdata.oscilloscopeBlackPosition != 0 && this.oscilloscopeService.oscilloscopeWaveValue01[this.currentFault][this.currentPinOut][this.currentOsciMeasureHotSpot.reverse().join(',')]) {
          console.log(this.currentOsciMeasureHotSpot);
          this.oscilloscopeService.Mdata.currentOscilloscopeArr = this.oscilloscopeService.oscilloscopeWaveValue01[this.currentFault][this.currentPinOut][this.currentOsciMeasureHotSpot];
          if (this.oscilloscopeService.Mdata.currentOscilloscopeArr[0] < this.oscilloscopeService.Mdata.currentOscilloscopeArr[1]) {
            this.oscilloscopeService.Mdata.yReduce = 0;
          } else {
            this.oscilloscopeService.Mdata.yReduce = this.oscilloscopeService.Mdata.currentOscilloscopeArr[0] * 2;;
          }
        } else {
          this.oscilloscopeService.Mdata.currentOscilloscopeArr = [0, 0];;
        }
      }
      else if (uiDraggableID == 'oscilloscopeHot-red' && this.oscilloscopeService.Mdata.oscilloscopeBlackPosition != $(eventClass).attr('wybredPosition')) {
        $('#oscilloscope-red').css('top', '' + (parseInt($(eventClass).attr('h-top'), 10) - 166) + 'px');
        $('#oscilloscope-red').css('left', '' + (parseInt($(eventClass).attr('h-left'), 10) - 28) + 'px');

        $('#oscilloscopeHot-red').css('top', '' + (parseInt($(eventClass).attr('h-top'), 10) + 51) + 'px');
        $('#oscilloscopeHot-red').css('left', '' + (parseInt($(eventClass).attr('h-left'), 10) - 28) + 'px');

        this.oscilloscopeService.Mdata.oscilloscope_test = true;
        this.oscilloscopeService.Mdata.oscilloscope_left = 0;
        this.oscilloscopeService.Mdata.svgRecoverStatus = 0;
        this.oscilloscopeService.Mdata.oscilloscope_Html = $(eventClass).attr('h_href');
        this.oscilloscopeService.Mdata.oscilloscopeRedPosition = $(eventClass).attr('wybredPosition');
        this.Mint.In1MultiLogic_x_Red_x_x = $(eventClass).attr('rqPosition');

        this.currentOsciMeasureHotSpot = [this.oscilloscopeService.Mdata.oscilloscopeRedPosition, this.oscilloscopeService.Mdata.oscilloscopeBlackPosition];

        if (this.oscilloscopeService.Mdata.oscilloscopeRedPosition != 0 && this.oscilloscopeService.Mdata.oscilloscopeBlackPosition != 0 && this.oscilloscopeService.oscilloscopeWaveValue01[this.currentFault][this.currentPinOut][this.currentOsciMeasureHotSpot.join(',')]) {
          this.oscilloscopeService.Mdata.currentOscilloscopeArr = this.oscilloscopeService.oscilloscopeWaveValue01[this.currentFault][this.currentPinOut][this.currentOsciMeasureHotSpot.join(',')];
        } else if (this.oscilloscopeService.Mdata.oscilloscopeRedPosition != 0 && this.oscilloscopeService.Mdata.oscilloscopeBlackPosition != 0 && this.oscilloscopeService.oscilloscopeWaveValue01[this.currentFault][this.currentPinOut][this.currentOsciMeasureHotSpot.reverse().join(',')]) {
          console.log(this.currentOsciMeasureHotSpot);
          this.oscilloscopeService.Mdata.currentOscilloscopeArr = this.oscilloscopeService.oscilloscopeWaveValue01[this.currentFault][this.currentPinOut][this.currentOsciMeasureHotSpot];
        } else {

          this.oscilloscopeService.Mdata.currentOscilloscopeArr = [0, 0];;
        }
        console.log(this.currentPinOut);
      } else {

      }

      // 万用表表笔层级判断
      if ((blackPositionTop != 0) && (redPositionTop != 0)) {
        if (blackPositionTop > redPositionTop) {
          $('#hhjmultimeterRed').css('z-index', '13');
          $('#hhjmultimeterBlack').css('z-index', '13');
        } else {
          $('#hhjmultimeterRed').css('z-index', '13');
          $('#hhjmultimeterBlack').css('z-index', '13');
        }
      }


      if (this.Mint.In1NER_Multi_Pass2Ohm_x_x == '1') {
        // setTimeout(() => {
        this.multimeterScreenUnit = 'Ω';
        this.multimeterScreenUnitSelf = 'Ω';
        // }, 10)
      }
      console.log(this.oscilloscopeService.Mdata.oscilloscope_right, this.oscilloscopeService.Mdata.oscilloscope_left);
    },

    freshHontspot() {
      let _this: any = this;
      $('body').find('a').droppable({
        accept: '#hhjmultimeterBlack-hotspot,#hhjmultimeterRed-hotspot,#oscilloscopeHot-black,#oscilloscopeHot-red',
        tolerance: 'pointer',
        greedy: true,

        over: function (event, ui) {
          console.log(ui.draggable[0].id, 'klklklk');
        },
        out: function (event, ui) {
        },


        drop: function (event, ui) {
          console.log('.' + $(event.target).attr('class').split(' ')[0], ui.draggable[0].id);
          console.log(ui.draggable[0].id);
          _this.freshHontspotDrop('.' + $(event.target).attr('class').split(' ')[0], ui.draggable[0].id, $(event.target).attr('id'));
        }
      });

    }, // 刷新热区

    multimeterblackRecover(top, left) {
      this.blackposition = 0;
      this.w_multimeter_blackHtml = null;

      if (top && left) {
        $('#mask-multimeter').css({ 'top': top, 'left': left });
      }

      var topInt = parseInt($('#mask-multimeter').css('top'), 10),
        leftInt = parseInt($('#mask-multimeter').css('left'), 10),
        toppoint = topInt - 80,
        leftpoint = leftInt - 290;
      $('#path_black').css('stroke', '#656261');


      //  $('#hhjmultimeterRed').css('top', '' + (toppoint + 97) + 'px');
      //  $('#hhjmultimeterRed').css('left', '' + (leftpoint + 519) + 'px');
      $('#hhjmultimeterBlack').css('top', '' + (toppoint + 97) + 'px');
      $('#hhjmultimeterBlack').css('left', '' + (leftpoint + 275) + 'px');
      //  $('#hhjmultimeterRed-hotspot').css('top', '' + (toppoint + 436) + 'px');
      //  $('#hhjmultimeterRed-hotspot').css('left', '' + (leftpoint + 526) + 'px');
      $('#hhjmultimeterBlack-hotspot').css('top', '' + (toppoint + 250) + 'px');
      $('#hhjmultimeterBlack-hotspot').css('left', '' + (leftpoint + 272) + 'px');

      //  $('#hhjmultimeterBlack').css('top', '' + (toppoint + 97) + 'px');
      //  $('#hhjmultimeterBlack').css('left', '' + (leftpoint + 272) + 'px');
      //  $('#hhjmultimeterBlack-hotspot').css('top', '' + (toppoint + 315) + 'px');
      //  $('#hhjmultimeterBlack-hotspot').css('left', '' + (leftpoint + 272) + 'px');

      if (this.Mint.In1NER_Multi_Pass2Ohm_x_x === '1') {
        this.multimeterScreenNum = 'OL';
      } else if (this.Mint.In1NER_Multi_Insulate_Ohm_x === '1') {
        this.multimeterScreenNum = '----';
      }

      this.Param_blackx = leftpoint + 282;
      this.Param_blacky = toppoint + 100;
      this.Param_blackcx = leftpoint + 302;
      this.Param_blackcy = toppoint + 37;
      this.Param_blackpx = leftpoint + 376;
      this.Param_blackpy = toppoint + 375;
      //       $('#path_Red').attr('d', 'M' + this.Param_redx + ' ' + this.Param_redy + ' C' + this.Param_redx + ' ' + this.Param_redy + ' ' + this.Param_redcx + ' ' + this.Param_redcy + ' ' + this.Param_redpx + ' ' + this.Param_redpy);
      this.multimeter_black = 1;
      this.multimeterblackstartx = this.Param_blackx;
      this.multimeterblackstarty = this.Param_blacky;
      this.multimeterblackradianx = this.Param_blackcx;
      this.multimeterblackradiany = this.Param_blackcy;
      this.multimeterblackstopx = this.Param_blackpx;
      this.multimeterblackstopy = this.Param_blackpy;
      this.Param_blackstas = 0;
      this.Param_stasds = 0;
      this.hlq_multimeterBlackLine = true;
      this.Mint.In1NER_Multi_Black_x_x = '0';

      // 车上位置和车上模型编码都要置为0
      this.multimeterblackPosition = 0;
      this.Blackrepetition = 0;
      this.blackposition = 0;

      //       console.info('恢复的黑表笔的触发值----------' + this.Mint.In1NER_Multi_Black_x_x);
      $('#path_black').attr('d', 'M' + this.Param_blackx + ' ' + this.Param_blacky + ' C' + this.Param_blackx + ' ' + this.Param_blacky + ' ' + this.Param_blackcx + ' ' + this.Param_blackcy + ' ' + this.Param_blackpx + ' ' + this.Param_blackpy);

    }, // 黑表笔的恢复初位置
    multimeterredRecover(top, left) {
      this.redposition = 0;
      this.w_multimeter_redHtml = null;

      if (top && left) {
        $('#mask-multimeter').css({ 'top': top, 'left': left });
      }

      var topInt = parseInt($('#mask-multimeter').css('top'), 10),
        leftInt = parseInt($('#mask-multimeter').css('left'), 10),
        toppoint = topInt - 80,
        leftpoint = leftInt - 290;

      $('#hhjmultimeterRed').css('top', '' + (toppoint + 97) + 'px');
      $('#hhjmultimeterRed').css('left', '' + (leftpoint + 415) + 'px');
      //  $('#hhjmultimeterBlack').css('top', '' + (toppoint + 97) + 'px');
      //  $('#hhjmultimeterBlack').css('left', '' + (leftpoint + 256) + 'px');
      $('#hhjmultimeterRed-hotspot').css('top', '' + (toppoint + 245) + 'px');
      $('#hhjmultimeterRed-hotspot').css('left', '' + (leftpoint + 414) + 'px');
      //  $('#hhjmultimeterBlack-hotspot').css('top', '' + (toppoint + 436) + 'px');
      //  $('#hhjmultimeterBlack-hotspot').css('left', '' + (leftpoint + 262) + 'px');


      //  $('#hhjmultimeterRed').css('top', '' + (toppoint + 97) + 'px');
      //  $('#hhjmultimeterRed').css('left', '' + (leftpoint + 428) + 'px');

      //  $('#hhjmultimeterRed-hotspot').css('top', '' + (toppoint + 311) + 'px');
      //  $('#hhjmultimeterRed-hotspot').css('left', '' + (leftpoint + 431) + 'px');
      if (this.Mint.In1NER_Multi_Pass2Ohm_x_x === '1') {
        this.multimeterScreenNum = 'OL';
      } else if (this.Mint.In1NER_Multi_Insulate_Ohm_x === '1') {
        this.multimeterScreenNum = '----';
      }

      this.Param_redx = leftpoint + 440;
      this.Param_redy = toppoint + 100;
      this.Param_redcx = leftpoint + 420;
      this.Param_redcy = toppoint + 37;
      this.Param_redpx = leftpoint + 403;
      this.Param_redpy = toppoint + 375;

      this.multimeter_red = 1;
      $('#path_Red').css('stroke', '#db3040');
      this.Mint.In1NER_Multi_Red_x_x = '0';

      // 车上位置和车上模型编码都要置为0
      this.multimeterredPosition = 0;
      this.Radrepetition = 0;
      this.redposition = 0;
      this.multimeterredstartx = this.Param_redx;
      this.multimeterredstarty = this.Param_redy;
      this.multimeterredradianx = this.Param_redcx;
      this.multimeterredradiany = this.Param_redcy;
      this.multimeterredstopx = this.Param_redpx;
      this.multimeterredstopy = this.Param_redpy;
      this.hlq_multimeterBlackLine = true;
      /* console.log(Param_stasds);*/
      this.Param_redstas = 0;
      this.Param_stasds = 0;
      $('#path_Red').attr('d', 'M' + this.Param_redx + ' ' + this.Param_redy + ' C' + this.Param_redx + ' ' + this.Param_redy + ' ' + this.Param_redcx + ' ' + this.Param_redcy + ' ' + this.Param_redpx + ' ' + this.Param_redpy);
    }, // 红表笔的恢复初位置
    rtnMultimeterPosition: function (num) {
      if (this.multimeterredPosition == num) {
        this.multimeterredRecover();
      }
      if (this.multimeterblackPosition == num) {
        this.multimeterblackRecover();
      }
    }, // 判断红黑表笔是否在控件上，是否要回到热区上
    multimeterRecover: function (redProbe, blackProbe, gear) {
      if (redProbe === 'redProbe' && this.multimeterredPosition !== null) {
        this.multimeterredRecover();
      }
      if (blackProbe === 'blackProbe' && this.multimeterblackPosition !== null) {
        this.multimeterblackRecover();
      }
      if (gear === 'gear' && this.Mint.In1NER_Multi_Off_x_x !== '1') {
        this.multimeteroff();
      }
    },
    // 判断红黑表笔是否在控件上，是否要回到热区上
    multimeterOpen() {

      this.multimeter();

    },


    circleareaAnimate(doOrfalse: boolean) {
      if (doOrfalse) {
        let hotarea = function () {
          $('.circleinfobox').show().stop().animate({
            'display': 'block'
          }, 300, function () {
            $(this).hide().stop().animate({
              'display': 'block'
            }, 300, function () {
              $(this).hide();
              hotarea();
            });
          })
        };;
        hotarea();
      } else {
        $('.circleinfobox').hide().stop();
      }


    },

    /**
     * 万用表箭头波动
     * @param doOrfalse
     */
    arrowAnimate1(doOrfalse: boolean) {

      if (doOrfalse) {
        let arrow = function () {
          $('.multimeter-arrow1').show().stop().animate({
            'top': '130px'
          }, 300, 'linear', function () {
            $(this).animate({
              'top': '126px'
            }, 300, 'linear', function () {
              arrow();
            });
          });
        };
        arrow();
        $('.multimeter-arrow2').stop().hide();

      } else {
        $('.multimeter-arrow1').stop().hide();
      }

    },

    /**
     * 万用表箭头波动
     * @param doOrfalse
     */
    arrowAnimate(doOrfalse: boolean) {
      if (doOrfalse) {
        let arrow = function () {
          $('.multimeter-arrow2').show().stop().animate({
            'top': '170px'
          }, 300, 'linear', function () {
            $(this).animate({
              'top': '167px'
            }, 300, 'linear', function () {
              arrow();
            });
          });

        };;
        $('.multimeter-arrow1').stop().hide();
        arrow();
      } else {

        $('.multimeter-arrow2').stop().hide();
      }

    },
    // 万用表中向仿真模型传输的参数
    Mint: {
      In1NER_Multi_Off_x_x: '1',
      In1NER_Multi_ACVlt_x_x: '0', // 电压交流
      In1NER_Multi_DCVlt_x_x: '0', // 电压直流
      In1NER_Multi_DCmVlt_x_x: '0', // 电压没用
      In1NER_Multi_Pass2Ohm_x_x: '0', // 当时电阻档时该值为1
      In1NER_Multi_hFE_x_x: '0', // 
      In1NER_Multi_Amp_x_x: '0',
      In1NER_Multi_mAmp_x_x: '0',
      In1NER_Multi_mirAmp_x_x: '0',
      In1NER_Multi_Hold_x_x: '0',
      In1NER_Multi_VltRP_x_x: '1',
      In1NER_Multi_AmpMea_x_x: '0',
      In1NER_Multi_mirAmA_x_x: '0',
      In1NER_Multi_COM_x_x: '1',
      In1NER_Multi_Power_x_x: '1',
      In1NER_Multi_Red_x_x: '0', // 红表笔输入
      In1NER_Multi_Black_x_x: '0', // 黑表笔输入
      In1NER_Multi_Insulate_Ohm_x: '0', // 万用表绝缘电阻档位
      In1NER_Multi_Insulate_Switch_x: '0', // 万用表绝缘电阻开关
      //  In1NER_Multi_Pass2Ohm_x_x: '',
      In1MultiLogic_x_Black_x_x: '',
      In1MultiLogic_x_Red_x_x: '',
      In1MultiLogic_x_DCmVlt_x_x: ''

    },
    // 万用表中从仿真模型获取的参数
    Mout: {
      Out1NER_Multi_ToScreen_x_x: '----', // 万用表读数显示参数
      Out1MultiLogic_x_ToScreen_x_x: ''
    }
  };




}
