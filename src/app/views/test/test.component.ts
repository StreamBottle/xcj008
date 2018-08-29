/**
 * Created by Administrator on 2016/12/21.
 */
import { Component } from '@angular/core';
import { Resource } from '../../interface/resources';
import { TestService } from './test.service';
import { AppService } from '../../index/app.service';
import { MultimeterService } from '../../components/multimeter';
declare var $: any, Ps: any, io: any;

@Component({
  selector: 'test',
  styleUrls: ['test.component.scss'],
  providers: [
  ],
  templateUrl: 'test.component.html'
})
export class TestComponent {
  
  constructor(private appService: AppService, private multimeterService: MultimeterService) { }
  ngOnInit() {
    this.appService.setTextAnimate('open', () => { return this.doAnimate() });
    this.appService.setTextAnimate('close', () => { return this.closeAnimate() });
    this.doAnimate();
  }

  ngOnDestroy() {
  }



  doAnimate() {
    // if ($('.alert-part').css("opacity") == '0') {
    this.hotareaAnimate(true);
    // }
    // if ($('.alert-part1').css("opacity") == '0') {
    //     this.hotareaAnimate1(true);
    // }
  }
  closeAnimate() {
    this.hotareaAnimate(false);
    this.hotareaAnimate1(false);
  }
  /**
   * 热区闪烁
   * @param doOrfalse
   */
  hotareaAnimate(doOrfalse: boolean) {
    if (doOrfalse) {
      let hotarea = function () {
        $('.hotareatest').show().stop().animate({
          'display': 'block'
        }, 300, function () {
          $(this).hide().stop().animate({
            'display': 'block'
          }, 300, function () {
            $(this).hide();
            hotarea();
          });
        })
      };
      hotarea();
    } else {
      $('.hotareatest').hide().stop();
    }
  }


  alertPartShow() {
    //关闭闪烁
    this.hotareaAnimate(false);
    $('.hotareatest').hide();
    $('.alert-part').show();
    this.alertPartHide1();
    this.multimeterService.Mdata.multimeterredRecover();
    this.multimeterService.Mdata.multimeterblackRecover();
    this.multimeterService.Mdata.freshHontspot();
    if (this.multimeterService.Mdata.Mint.In1NER_Multi_Insulate_Ohm_x == '1') {
      this.multimeterService.Mdata.modelOrself = 'self';
    } else {
      this.multimeterService.Mdata.arrowAnimate(true);

    }

  }
  alertPartHide() {
    this.hotareaAnimate(true);
    $('.hotareatest').show();
    $('.alert-part').hide();

  }

  /**
   * 热区闪烁
   * @param doOrfalse
   */
  hotareaAnimate1(doOrfalse: boolean) {
    if (doOrfalse) {
      let hotarea = function () {
        $('.hotareatest1').show().stop().animate({
          'display': 'block'
        }, 300, function () {
          $(this).hide().stop().animate({
            'display': 'block'
          }, 300, function () {
            $(this).hide();
            hotarea();
          });
        })
      };
      hotarea();
    } else {
      $('.hotareatest1').hide().stop();
    }
  }


  alertPartShow1() {
    //关闭闪烁
    this.hotareaAnimate1(false);
    $('.hotareatest1').hide();
    $('.alert-part1').show();
    this.alertPartHide();
    this.multimeterService.Mdata.multimeterredRecover();
    this.multimeterService.Mdata.multimeterblackRecover();
    this.multimeterService.Mdata.freshHontspot();
    if (this.multimeterService.Mdata.Mint.In1NER_Multi_Pass2Ohm_x_x == '1') {
      this.multimeterService.Mdata.modelOrself = 'model';
    } else {
      this.multimeterService.Mdata.arrowAnimate1(true);

    }
  }
  alertPartHide1() {
    this.hotareaAnimate1(true);
    $('.hotareatest1').show();
    $('.alert-part1').hide();
  }



}



