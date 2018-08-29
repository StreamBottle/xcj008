import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { MultimeterService } from './multimeter.service';
import { HandleErrorService } from '../../components/handle_error';
import { AppService } from '../../index/app.service';
import { CoursePrepareService } from '../../views/course_prepare/course_prepare.service';

declare var $: any;
declare var io: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'multimeter',
  styleUrls: ['./multimeter.component.scss'],
  templateUrl: './multimeter.component.html',
  providers: []
})
// @Injectable()
export class MultimeterComponent implements OnDestroy, OnInit {
  socket = null;
  multimeterServiceMdata = this.multimeterService.Mdata;
  multimeterServiceMout = this.multimeterService.Mdata.Mout;
  modelOrself = this.multimeterService.Mdata.modelOrself;

  currentKfilker01: boolean = true;
  currentKfilker02: boolean = true;
  currentKfilkerres01: boolean = true;
  currentKfilkerres02: boolean = true;

  currentKfilker22: boolean = true;
  currentKfilkerres22: boolean = true;
  constructor(
    public multimeterService: MultimeterService,
    private handleErrorService: HandleErrorService,
    private appService: AppService,
    public coursePrepareService: CoursePrepareService
  ) {}
  ngOnInit() {
    console.log('[][][][]');
    setTimeout(() => {
      this.dragStart();
    }, 1000);
  }

  ngOnDestroy() {}


  setRedHotspotDrag(top, left) {
    // $('#hhjmultimeterRed-hotspot').css({ 'top': top, 'left': left });
    this.multimeterServiceMdata.redHotspotDrag(top, left);
  }
  setRedHotspotStop(top, left) {
    // $('#hhjmultimeterRed-hotspot').css({ 'top': top, 'left': left });
    this.multimeterServiceMdata.redHotspotStop(top, left);
  }
  setBlackHotspotDrag(top, left) {
    // $('#hhjmultimeterBlack-hotspot').css({ 'top': top, 'left': left });
    this.multimeterServiceMdata.blackHotspotDrag(top, left);
  }
  setBlackHotspotStop(top, left) {
    // $('#hhjmultimeterBlack-hotspot').css({ 'top': top, 'left': left });
    this.multimeterServiceMdata.blackHotspotStop(top, left);
  }

  setMaskMultimeterDrag(top, left) {
    // $('#mask-multimeter').css({ 'top': top, 'left': left });
    this.multimeterServiceMdata.maskMultimeterDrag(top, left);
  }

  // setRed(top, left) {
  //     $('#hhjmultimeterRed').css({ 'top': top, 'left': left })
  // }
  // setBlack(top, left) {
  //     $('#hhjmultimeterBlack').css({ 'top': top, 'left': left })
  // }

  multimeter() {
    this.multimeterService.Mdata.multimeter();
  }
  dragStart() {
    this.multimeterService.Mdata.dragStart();
  }
  multimeterCircle() {
    this.multimeterService.Mdata.multimeterCircle();
  }
  multimeterShortcutHtml(href) {
    this.multimeterService.Mdata.multimeterShortcutHtml(href);
  }
  multimeteroff() {
    this.multimeterService.Mdata.multimeteroff();
  }
  multimetervv() {
    this.multimeterService.Mdata.multimetervv();
  }
  multimeterv() {
    this.multimeterService.Mdata.multimeterv();
  }
  multimetermv() {
    this.multimeterService.Mdata.multimetermv();
  }

  multimeterres() {
    this.multimeterService.Mdata.modelOrself = 'self';
    switch (this.appService.progressData.describeFlag) {
      case 12:
        this.currentKfilkerres01 = false;
        break;
      case 16:
        this.currentKfilkerres02 = false;
        break;
      case 22:
        this.currentKfilkerres22 = false;
        break;
      default:
    }
    this.multimeterService.Mdata.multimeterres();

    // 电阻测量不能进行
    if (
      this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x !== '0' &&
      (this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '5' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '6' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '7' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '8' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '9' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '10' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1007' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1008' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1009' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1010' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1011' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x === '1012')
    ) {
      this.multimeterServiceMdata.falseconnectStatus = true;
    }
    if (
      this.multimeterService.Mdata.Mint.In1NER_Multi_Red_x_x !== '0' &&
      (this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '5' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '6' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '7' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '8' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '9' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '10' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1007' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1008' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1009' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1010' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1011' ||
        this.multimeterService.Mdata.Mint.In1NER_Multi_Black_x_x === '1012')
    ) {
      // this.handleErrorService.handleError({message:"绝缘电阻档不能测试低压电路"});
      this.multimeterServiceMdata.falseconnectStatus = true;
    }
  }
  multimeternofine() {
    this.multimeterService.Mdata.multimeternofine();
  }
  multimeterAA() {
    this.multimeterService.Mdata.multimeterAA();
  }
  multimeterk() {
    this.multimeterService.Mdata.modelOrself = 'self';
    switch (this.appService.progressData.describeFlag) {
      case 12:
        this.currentKfilker01 = false;
        break;
      case 16:
        this.currentKfilker02 = false;
        break;
      case 22:
        this.currentKfilker22 = false;
        break;
      default:
    }
    this.multimeterService.Mdata.multimeterk();
  }
  multimetermA() {
    this.multimeterService.Mdata.multimetermA();
  }
  closemultimeter(param) {
    // this.multimeterService.Mdata.closemultimeter(param);
    this.coursePrepareService.closeTool(param);
  }
  onMouseover() {
    // this.multimeterService.Mdata.circleareaAnimate(false);
    // $('.clickcircle').css('zIndex',3);
  }
  onMouseout() {
    // this.multimeterService.Mdata.circleareaAnimate(true);
    // $('.clickcircle').css('zIndex',0);
  }
  change2pointer() {
    $('.multimeter-hotarea').css('cursor', 'pointer');
  }
  change2default() {
    $('.multimeter-hotarea').css('cursor', 'default');
  }

  removefalseConnect() {
    this.multimeterServiceMdata.falseconnectStatus = false;
    this.multimeterServiceMdata.multimeterblackRecover(null, null);
    this.multimeterServiceMdata.multimeterredRecover(null, null);
  }

  // 测量点记录
  recordProgress = function() {
    this.multimeterService.Mdata.recordProgress();
  };
}
