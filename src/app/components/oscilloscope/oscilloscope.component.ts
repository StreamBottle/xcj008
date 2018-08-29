import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { OscilloscopeService } from '../oscilloscope/oscilloscope.service';
import { MultimeterService } from '../multimeter/multimeter.service';
import { HandleErrorService } from '../../components/handle_error/handle_error.service';
import { AppService } from '../../index/app.service';
import { CoursePrepareService } from '../../views/course_prepare/course_prepare.service';


declare var $: any;
declare var io: any;
@Component({
  selector: 'oscilloscope',
  styleUrls: ['./oscilloscope.component.scss'],
  templateUrl: './oscilloscope.component.html',
  providers: []
})

export class OscilloscopeComponent implements OnDestroy, OnInit {
  waveTimer = null;   // 波浪线图形的定时器
  
  oscilloscopeServiceMdata = this.oscilloscopeService.Mdata;
  oscilloscopeServiceMout = this.oscilloscopeService.Mdata.Mout;

  plusOrReduce = true;   // 当前是升高波形还是降低波形


  constructor(
    private handleErrorService: HandleErrorService,
    private appService: AppService,
    private oscilloscopeService: OscilloscopeService,
    private multimeterService: MultimeterService,
    private coursePrepareService: CoursePrepareService

  ) {

  }
  ngOnInit() {
    setTimeout(() => {
      this.spotHotDraggable();
      this.oscilloscopeDraggable();
      this.oscilloscopeWacth();
    }, 100);
  }

  oscilloscopeHide(param) {
    this.oscilloscopeService.Mdata.oscilloscopeHide();
    this.coursePrepareService.closeTool(param);
  }
  oscilloscope() {
    let browserName = navigator.userAgent;
    if (browserName.indexOf('Firefox') > -1 || browserName.indexOf('Chrome') > -1) { // 谷歌浏览器增加宽度、高度
      $('#oscilloscope-svg').css({ width: '1024px', height: '580px' });
    }
    this.oscilloscopeServiceMdata.oscilloscopeStatus = true;
    this.oscilloscopeServiceMdata.SvgStatus = true;
    this.multimeterService.Mdata.freshHontspot();
  };

  spotHotDraggable() {
    let vm = this;
    $('#oscilloscopeHot-red').draggable({ // 示波仪表笔拖拽
      containment: '#contain', // 只能在规定范围
      scroll: false, // 不出现滚动条
      iframeFix: true, // 不受iframe的影响
      cursor: 'move', // 拖动的鼠标样式
      start: () => {
        vm.multimeterService.Mdata.freshHontspot();
      },
      drag(event) {
        if (navigator.userAgent.indexOf('Firefox') !== -1) {
          if (!vm.oscilloscopeServiceMdata.SvgStatus) {
            vm.oscilloscopeServiceMdata.SvgStatus = true;
          }
        }
        vm.oscilloscopeServiceMdata.oscilloscope_test = false;
        vm.oscilloscopeServiceMdata.oscilloscope_left = 1;
        // window.clearInterval(oscilloscopeService.Mdata.startRollTwo);
        $('#oscilloscope-red').css('top', '' + (parseInt($('#oscilloscopeHot-red').css('top').replace('px', ''), 10) - 217) + 'px');
        $('#oscilloscope-red').css('left', '' + (parseInt($('#oscilloscopeHot-red').css('left').replace('px', ''), 10)) + 'px');

        $('#oscilloscopeHot-red').css('top', '' + parseInt($('#oscilloscope-red').css('top'), 10) + 'px');
        $('#oscilloscopeHot-red').css('left', '' + parseInt($('#oscilloscope-red').css('left'), 10) + 'px');


        let redLeftInt = parseInt($('#oscilloscope-red').css('left').replace('px', ''), 10) + 17;
        let redTopInt = parseInt($('#oscilloscope-red').css('top').replace('px', ''), 10) + 5;
        let topInt = parseInt($('#mask-oscilloscope').css('top').replace('px', ''), 10) - 162;
        let leftInt = parseInt($('#mask-oscilloscope').css('left').replace('px', ''), 10) + 87;
        let cl = (redLeftInt + 40);
        let ct = (redTopInt - 200);


        vm.oscilloscopeServiceMdata.oscilloscopestartx = leftInt.toString();
        vm.oscilloscopeServiceMdata.oscilloscopestarty = topInt.toString();
        vm.oscilloscopeServiceMdata.oscilloscoperadianx = cl.toString();
        vm.oscilloscopeServiceMdata.oscilloscoperadiany = ct.toString();
        vm.oscilloscopeServiceMdata.oscilloscopestopx = redLeftInt.toString();
        vm.oscilloscopeServiceMdata.oscilloscopestopy = redTopInt.toString();
        // multimeterService.Mint.In1MultiLogic_x_Red_x_x = '0';
        let redLeftIntt = redLeftInt - 15;
        let redTopIntt = parseInt(redTopInt.toString(), 10) + 230;
        $('#path_left').attr('d', 'M' + redLeftInt + ' ' + redTopInt + ' C' + redLeftInt + ' ' + redTopInt + ' ' + cl + ' ' + ct + ' ' + leftInt + ' ' + topInt);
        // multimeterService.Mint.In1MultiLogic_x_Red_x_x = '0';
        vm.oscilloscopeServiceMdata.svgRecoverStatus = '1'

      },
      stop() {
        let topInt = parseInt($('#mask-oscilloscope').css('top').replace('px', ''), 10);
        let leftInt = parseInt($('#mask-oscilloscope').css('left').replace('px', ''), 10);
        let toppoint = topInt - 80;
        let leftpoint = leftInt - 290;
        vm.oscilloscopeServiceMdata.Param_leftx = (leftpoint + 376).toString();
        vm.oscilloscopeServiceMdata.Param_lefty = (toppoint - 82).toString();
        vm.oscilloscopeServiceMdata.Param_leftcx = (leftpoint + 330).toString();
        vm.oscilloscopeServiceMdata.Param_leftcy = (toppoint - 160).toString();
        vm.oscilloscopeServiceMdata.Param_leftpx = (leftpoint + 278).toString();
        vm.oscilloscopeServiceMdata.Param_leftpy = (toppoint + 85).toString();
        console.log(vm.oscilloscopeServiceMdata.svgRecoverStatus);
        if (vm.oscilloscopeServiceMdata.svgRecoverStatus == '1') {
          vm.oscilloscopeServiceMdata.oscilloscopeRedRecover();
          $('#path_left').attr('d', 'M' + vm.oscilloscopeServiceMdata.Param_leftx
            + ' ' + vm.oscilloscopeService.Mdata.Param_lefty
            + ' C' + vm.oscilloscopeService.Mdata.Param_leftx
            + ' ' + vm.oscilloscopeService.Mdata.Param_lefty
            + ' ' + vm.oscilloscopeService.Mdata.Param_leftcx
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftcy
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftpx
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftpy);

        } else {
          vm.oscilloscopeServiceMdata.svgRecoverStatus = '1';
        }
      }
    });

    $('#oscilloscopeHot-black').draggable({ // 示波仪表笔拖拽
      containment: '#contain', // 只能在规定范围
      scroll: false, // 不出现滚动条
      iframeFix: true, // 不受iframe的影响
      cursor: 'move', // 拖动的鼠标样式
      start: () => {
        vm.multimeterService.Mdata.freshHontspot();
      },
      drag(event) {
        if (navigator.userAgent.indexOf('Firefox') !== -1) {
          if (!vm.oscilloscopeServiceMdata.SvgStatus) {
            vm.oscilloscopeServiceMdata.SvgStatus = true;
          }
        }
        vm.oscilloscopeServiceMdata.oscilloscope_test = false;
        vm.oscilloscopeServiceMdata.oscilloscope_right = 1;
        // window.clearInterval(oscilloscopeService.Mdata.startRollTwo);
        $('#oscilloscope-black').css('top', '' + (parseInt($('#oscilloscopeHot-black').css('top').replace('px', ''), 10) - 217) + 'px');
        $('#oscilloscope-black').css('left', '' + (parseInt($('#oscilloscopeHot-black').css('left').replace('px', ''), 10)) + 'px');

        $('#oscilloscopeHot-black').css('top', '' + parseInt($('#oscilloscope-black').css('top'), 10) + 'px');
        $('#oscilloscopeHot-black').css('left', '' + parseInt($('#oscilloscope-black').css('left'), 10) + 'px');


        let redLeftInt = parseInt($('#oscilloscope-black').css('left').replace('px', ''), 10) + 17;
        let redTopInt = parseInt($('#oscilloscope-black').css('top').replace('px', ''), 10) + 5;
        let topInt = parseInt($('#mask-oscilloscope').css('top').replace('px', ''), 10) - 162;
        let leftInt = parseInt($('#mask-oscilloscope').css('left').replace('px', ''), 10) + 87;
        let cl = (redLeftInt + 40);
        let ct = (redTopInt - 200);


        vm.oscilloscopeServiceMdata.oscilloscopestartx = leftInt.toString();
        vm.oscilloscopeServiceMdata.oscilloscopestarty = topInt.toString();
        vm.oscilloscopeServiceMdata.oscilloscoperadianx = cl.toString();
        vm.oscilloscopeServiceMdata.oscilloscoperadiany = ct.toString();
        vm.oscilloscopeServiceMdata.oscilloscopestopx = redLeftInt.toString();
        vm.oscilloscopeServiceMdata.oscilloscopestopy = redTopInt.toString();
        // multimeterService.Mint.In1MultiLogic_x_Red_x_x = '0';
        let redLeftIntt = redLeftInt - 15;
        let redTopIntt = parseInt(redTopInt.toString(), 10) + 230;
        $('#path_left').attr('d', 'M' + redLeftInt + ' ' + redTopInt + ' C' + redLeftInt + ' ' + redTopInt + ' ' + cl + ' ' + ct + ' ' + leftInt + ' ' + topInt);
        // multimeterService.Mint.In1MultiLogic_x_Red_x_x = '0';
        vm.oscilloscopeServiceMdata.svgRecoverStatus = '1';

      },
      stop() {
        let topInt = parseInt($('#mask-oscilloscope').css('top').replace('px', ''), 10);
        let leftInt = parseInt($('#mask-oscilloscope').css('left').replace('px', ''), 10);
        let toppoint = topInt - 80;
        let leftpoint = leftInt - 290;
        vm.oscilloscopeServiceMdata.Param_leftx = (leftpoint + 376).toString();
        vm.oscilloscopeServiceMdata.Param_lefty = (toppoint - 82).toString();
        vm.oscilloscopeServiceMdata.Param_leftcx = (leftpoint + 330).toString();
        vm.oscilloscopeServiceMdata.Param_leftcy = (toppoint - 160).toString();
        vm.oscilloscopeServiceMdata.Param_leftpx = (leftpoint + 278).toString();
        vm.oscilloscopeServiceMdata.Param_leftpy = (toppoint + 85).toString();
        console.log(vm.oscilloscopeServiceMdata.svgRecoverStatus);
        if (vm.oscilloscopeServiceMdata.svgRecoverStatus == '1') {
          vm.oscilloscopeServiceMdata.oscilloscopeBlackRecover();
          $('#path_left').attr('d', 'M' + vm.oscilloscopeServiceMdata.Param_leftx
            + ' ' + vm.oscilloscopeService.Mdata.Param_lefty
            + ' C' + vm.oscilloscopeService.Mdata.Param_leftx
            + ' ' + vm.oscilloscopeService.Mdata.Param_lefty
            + ' ' + vm.oscilloscopeService.Mdata.Param_leftcx
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftcy
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftpx
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftpy);

        } else {
          vm.oscilloscopeServiceMdata.svgRecoverStatus = '1';
        }
      }
    });
  }

  oscilloscopeDraggable() {
    let vm = this;
    // 整个示波仪表drag，通过示波仪表身表笔
    $('#mask-oscilloscope').draggable({
      containment: '.ui-page',
      scroll: false,
      cursor: 'move',
      iframeFix: true,
      drag(event) {
        if (navigator.userAgent.indexOf('Firefox') !== -1) {
          if (!vm.oscilloscopeServiceMdata.SvgStatus) {
            vm.oscilloscopeServiceMdata.SvgStatus = true;
          }
        }
        // 当表笔不在热区上时，
        if (vm.oscilloscopeServiceMdata.oscilloscope_body === 1 && vm.oscilloscopeServiceMdata.oscilloscope_left === 1 && vm.oscilloscopeServiceMdata.oscilloscope_right === 1) {
          let topInt = parseInt($('#mask-oscilloscope').css('top').replace('px', ''), 10);
          let leftInt = parseInt($('#mask-oscilloscope').css('left').replace('px', ''), 10);
          let toppoint = topInt - 80;
          let leftpoint = leftInt - 290;

          $('#oscilloscope-left').css('top', '' + (toppoint - 90) + 'px');
          $('#oscilloscope-left').css('left', '' + (leftpoint + 358) + 'px');
          $('#oscilloscope-right').css('top', '' + (toppoint - 90) + 'px');
          $('#oscilloscope-right').css('left', '' + (leftpoint + 472) + 'px');

          $('#oscilloscope-red').css('top', '' + (toppoint + 82) + 'px');
          $('#oscilloscope-red').css('left', '' + (leftpoint + 259) + 'px');
          $('#oscilloscopeHot-red').css('top', '' + (toppoint + 282) + 'px');
          $('#oscilloscopeHot-red').css('left', '' + (leftpoint + 259) + 'px');

          $('#oscilloscope-black').css('top', '' + (toppoint + 82) + 'px');
          $('#oscilloscope-black').css('left', '' + (leftpoint + 564) + 'px');
          $('#oscilloscopeHot-black').css('top', '' + (toppoint + 282) + 'px');
          $('#oscilloscopeHot-black').css('left', '' + (leftpoint + 564) + 'px');
          // 设置left表线

          vm.oscilloscopeServiceMdata.Param_leftx = (leftpoint + 375).toString();
          vm.oscilloscopeServiceMdata.Param_lefty = (toppoint - 80).toString();
          vm.oscilloscopeServiceMdata.Param_leftcx = (leftpoint + 320).toString();
          vm.oscilloscopeServiceMdata.Param_leftcy = (toppoint - 150).toString();
          vm.oscilloscopeServiceMdata.Param_leftpx = (leftpoint + 277).toString();
          vm.oscilloscopeServiceMdata.Param_leftpy = (toppoint + 85).toString();

          // 设置right表线
          vm.oscilloscopeServiceMdata.Param_rightx = (leftpoint + 490).toString();
          vm.oscilloscopeServiceMdata.Param_righty = (toppoint - 135).toString();
          vm.oscilloscopeServiceMdata.Param_rightcx = (leftpoint + 550).toString();
          vm.oscilloscopeServiceMdata.Param_rightcy = (toppoint - 220).toString();
          vm.oscilloscopeServiceMdata.Param_rightpx = (650).toString();
          vm.oscilloscopeServiceMdata.Param_rightpy = (150).toString();
          $('#path_left').attr('d', 'M' + vm.oscilloscopeServiceMdata.Param_leftx
            + ' ' + vm.oscilloscopeServiceMdata.Param_lefty
            + ' C' + vm.oscilloscopeServiceMdata.Param_leftx
            + ' ' + vm.oscilloscopeServiceMdata.Param_lefty
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftcx
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftcy
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftpx
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftpy);
          $('#path_right').attr('d', 'M' + vm.oscilloscopeServiceMdata.Param_rightx
            + ' ' + vm.oscilloscopeServiceMdata.Param_righty
            + ' C' + vm.oscilloscopeServiceMdata.Param_rightx
            + ' ' + vm.oscilloscopeServiceMdata.Param_righty
            + ' ' + vm.oscilloscopeServiceMdata.Param_rightcx
            + ' ' + vm.oscilloscopeServiceMdata.Param_rightcy
            + ' ' + vm.oscilloscopeServiceMdata.Param_rightpx
            + ' ' + vm.oscilloscopeServiceMdata.Param_rightpy);
        } else if (vm.oscilloscopeServiceMdata.oscilloscope_body === 1 && vm.oscilloscopeServiceMdata.oscilloscope_left === 0 && vm.oscilloscopeServiceMdata.oscilloscope_right === 1) {
          // 左侧红表笔在热区上时的整体拖动

          let topInt = parseInt($('#mask-oscilloscope').css('top').replace('px', ''), 10);
          let leftInt = parseInt($('#mask-oscilloscope').css('left').replace('px', ''), 10);
          let toppoint = topInt - 80;
          let leftpoint = leftInt - 290;

          $('#oscilloscope-black').css('top', '' + (toppoint + 82) + 'px');
          $('#oscilloscope-black').css('left', '' + (leftpoint + 564) + 'px');
          $('#oscilloscopeHot-black').css('top', '' + (toppoint + 282) + 'px');
          $('#oscilloscopeHot-black').css('left', '' + (leftpoint + 564) + 'px');

          // 设置right表线
          vm.oscilloscopeServiceMdata.Param_rightx = (leftpoint + 490).toString();
          vm.oscilloscopeServiceMdata.Param_righty = (toppoint - 135).toString();
          vm.oscilloscopeServiceMdata.Param_rightcx = (leftpoint + 550).toString();
          vm.oscilloscopeServiceMdata.Param_rightcy = (toppoint - 220).toString();
          vm.oscilloscopeServiceMdata.Param_rightpx = (650).toString();
          vm.oscilloscopeServiceMdata.Param_rightpy = (150).toString();
          $('#path_right').attr('d', 'M' + vm.oscilloscopeServiceMdata.Param_rightx
            + ' ' + vm.oscilloscopeServiceMdata.Param_righty
            + ' C' + vm.oscilloscopeServiceMdata.Param_rightx
            + ' ' + vm.oscilloscopeServiceMdata.Param_righty
            + ' ' + vm.oscilloscopeServiceMdata.Param_rightcx
            + ' ' + vm.oscilloscopeServiceMdata.Param_rightcy
            + ' ' + vm.oscilloscopeServiceMdata.Param_rightpx
            + ' ' + vm.oscilloscopeServiceMdata.Param_rightpy);




        } else if (vm.oscilloscopeServiceMdata.oscilloscope_body === 1 && vm.oscilloscopeServiceMdata.oscilloscope_left === 1 && vm.oscilloscopeServiceMdata.oscilloscope_right === 0) {
          // 右侧黑表笔在热区上时的整体拖动
          let topInt = parseInt($('#mask-oscilloscope').css('top').replace('px', ''), 10);
          let leftInt = parseInt($('#mask-oscilloscope').css('left').replace('px', ''), 10);
          let toppoint = topInt - 80;
          let leftpoint = leftInt - 290;

          $('#oscilloscope-red').css('top', '' + (toppoint + 82) + 'px');
          $('#oscilloscope-red').css('left', '' + (leftpoint + 259) + 'px');
          $('#oscilloscopeHot-red').css('top', '' + (toppoint + 282) + 'px');
          $('#oscilloscopeHot-red').css('left', '' + (leftpoint + 259) + 'px');
          // 设置left表线

          vm.oscilloscopeServiceMdata.Param_leftx = (leftpoint + 375).toString();
          vm.oscilloscopeServiceMdata.Param_lefty = (toppoint - 80).toString();
          vm.oscilloscopeServiceMdata.Param_leftcx = (leftpoint + 320).toString();
          vm.oscilloscopeServiceMdata.Param_leftcy = (toppoint - 150).toString();
          vm.oscilloscopeServiceMdata.Param_leftpx = (leftpoint + 277).toString();
          vm.oscilloscopeServiceMdata.Param_leftpy = (toppoint + 85).toString();

          $('#path_left').attr('d', 'M' + vm.oscilloscopeServiceMdata.Param_leftx
            + ' ' + vm.oscilloscopeServiceMdata.Param_lefty
            + ' C' + vm.oscilloscopeServiceMdata.Param_leftx
            + ' ' + vm.oscilloscopeServiceMdata.Param_lefty
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftcx
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftcy
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftpx
            + ' ' + vm.oscilloscopeServiceMdata.Param_leftpy);

        } else if (vm.oscilloscopeServiceMdata.oscilloscope_body === 1 && vm.oscilloscopeServiceMdata.oscilloscope_left === 0 && vm.oscilloscopeServiceMdata.oscilloscope_right === 0) {
          // 红黑表逼都在热区上时的整体拖动

        }
      },
      stop() {

      }
    });
  }

  // 波形变化
  oscilloscopeWacth() {
    let vm = this;
    let arr1 = [45, 45];  // 测试数组，波形固定不变
    let arr2 = [0, 29];   // 测试数组，波形由低至高
    let arr3 = [29, 0];   // 测试数组，波形由高至低
    let arr4 = [-10, 29];   // 测试数组，波形会降低到负波
    let arr5 = [29, -10];   // 测试数组，波形会降低到负波
    let arr6 = [0, 0];   // 测试数组，都为0时应该是一条直线
    let arr7 = [-29, 0];   // 测试数组，波形会向下
    // let arr = vm.oscilloscopeServiceMdata.currentOscilloscopeArr || arr5;       // 测量时的数组赋值给arr

    let y = 60;           // 波形的初始位置
    // let yReduce = 0;     // 如果arr[0]<arr[1]  则yReduce的初始值为波峰的两倍

    // 波形升高方法
    function plus() {
      if (vm.oscilloscopeServiceMdata.currentOscilloscopeArr[0] < vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1]) {
        y = vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1];
        $('#oscilloscopeWaveform').css('paddingTop', (90 - y) + 'px');
        vm.oscilloscopeServiceMdata.yReduce++;
        if (vm.oscilloscopeServiceMdata.yReduce >= y) {
          vm.plusOrReduce = false;
        }
      } else if (vm.oscilloscopeServiceMdata.currentOscilloscopeArr[0] == vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1]) {
        y = vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1];
        $('#oscilloscopeWaveform').css('paddingTop', (90 - y) + 'px');
        vm.oscilloscopeServiceMdata.yReduce = y;
        if (vm.oscilloscopeServiceMdata.yReduce >= y) {
          vm.plusOrReduce = false;
        }
      } else if (vm.oscilloscopeServiceMdata.currentOscilloscopeArr[0] > vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1]) {
        y = vm.oscilloscopeServiceMdata.currentOscilloscopeArr[0];
        $('#oscilloscopeWaveform').css('paddingTop', (90 - y) + 'px');
        vm.oscilloscopeServiceMdata.yReduce++;
        if (vm.oscilloscopeServiceMdata.yReduce >= y) {
          vm.plusOrReduce = false;
        }
      }

      // 波形设置
      let wave1 = 'M0 ' + y + ' C0 ' + y + ' 20 ' + (y - vm.oscilloscopeServiceMdata.yReduce) + ' 40 ' + y + ' C40 ' + y + ' 60 ' + (y +
        vm.oscilloscopeServiceMdata.yReduce) +
        ' 80 ' + y + ' C80 ' + y + ' 100 ' + (y -
          vm.oscilloscopeServiceMdata.yReduce) + ' 120 ' + y + ' C120 ' + y + ' 140 ' + (y + vm.oscilloscopeServiceMdata.yReduce) + ' 160 ' + y + ' C160 ' +
        y + ' 180 ' + (y - vm.oscilloscopeServiceMdata.yReduce) + ' 200 ' + y + ' ';

      // 波形的上下平分线
      let wave2 = 'M0 ' + y + ' C0 ' + y + ' 20 ' + (y) + ' 40 ' + y + ' C40 ' + y + ' 60 ' + (y) +
        ' 80 ' + y + ' C80 ' + y + ' 100 ' + (y) + ' 120 ' + y + ' C120 ' + y + ' 140 ' + (y) + ' 160 ' + y +
        ' C160 ' +
        y + ' 180 ' + (y) + ' 200 ' + y + ' ';

      $('#svg-wave1').attr('d', wave1);
      $('#svg-wave2').attr('d', wave2);

    }

    // 波形降低方法
    function reduce() {
      if (vm.oscilloscopeServiceMdata.currentOscilloscopeArr[0] < vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1]) {
        y = vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1];
        $('#oscilloscopeWaveform').css('paddingTop', (90 - y) + 'px');
        vm.oscilloscopeServiceMdata.yReduce--;
        if (vm.oscilloscopeServiceMdata.yReduce <= vm.oscilloscopeServiceMdata.currentOscilloscopeArr[0]) {
          vm.plusOrReduce = true;
        }
      } else if (vm.oscilloscopeServiceMdata.currentOscilloscopeArr[0] == vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1]) {
        y = vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1];
        $('#oscilloscopeWaveform').css('paddingTop', (90 - y) + 'px');
        vm.oscilloscopeServiceMdata.yReduce = y;
        if (vm.oscilloscopeServiceMdata.yReduce <= 0) {
          vm.plusOrReduce = true;
        }
      } else if (vm.oscilloscopeServiceMdata.currentOscilloscopeArr[0] > vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1]) {
        y = vm.oscilloscopeServiceMdata.currentOscilloscopeArr[0];
        $('#oscilloscopeWaveform').css('paddingTop', (90 - y) + 'px');
        vm.oscilloscopeServiceMdata.yReduce--;
        if (vm.oscilloscopeServiceMdata.yReduce <= vm.oscilloscopeServiceMdata.currentOscilloscopeArr[1]) {
          vm.plusOrReduce = true;
        }
      }

      let wave1 = 'M0 ' + y + ' C0 ' + y + ' 20 ' + (y - vm.oscilloscopeServiceMdata.yReduce) + ' 40 ' + y + ' C40 ' + y + ' 60 ' + (y +
        vm.oscilloscopeServiceMdata.yReduce) +
        ' 80 ' + y + ' C80 ' + y + ' 100 ' + (y -
          vm.oscilloscopeServiceMdata.yReduce) + ' 120 ' + y + ' C120 ' + y + ' 140 ' + (y + vm.oscilloscopeServiceMdata.yReduce) + ' 160 ' + y + ' C160 ' +
        y + ' 180 ' + (y - vm.oscilloscopeServiceMdata.yReduce) + ' 200 ' + y + ' ';

      let wave2 = 'M0 ' + y + ' C0 ' + y + ' 20 ' + (y) + ' 40 ' + y + ' C40 ' + y + ' 60 ' + (y) +
        ' 80 ' + y + ' C80 ' + y + ' 100 ' + (y) + ' 120 ' + y + ' C120 ' + y + ' 140 ' + (y) + ' 160 ' + y +
        ' C160 ' +
        y + ' 180 ' + (y) + ' 200 ' + y + ' ';
      $('#svg-wave1').attr('d', wave1);
      $('#svg-wave2').attr('d', wave2);
    }

    this.waveTimer = setInterval(() => {
      if (this.plusOrReduce) {
        plus();
      } else {
        reduce();
      }
      // console.log(vm.oscilloscopeServiceMdata.yReduce);
    }, 0);
  }

  ngOnDestroy() {
    clearInterval(this.waveTimer);
  }
}
