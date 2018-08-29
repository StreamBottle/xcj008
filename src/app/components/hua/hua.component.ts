/*
 * @Author: nan.wang
 * @Date: 2018-06-07 09:32:19
 * @LastEditors: nan.wang
 * @LastEditTime: 2018-06-07 09:36:26
 * @Description: 加速踏板油门踩踏开关,需配合动画脚本使用;
 */

import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef
} from "@angular/core";
import { flyIn, halo } from "../../animations";
import { Observable, Observer } from "rxjs";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
declare const $;

@Component({
  selector: "sgm-hua",
  templateUrl: "./hua.component.html",
  styleUrls: ["./hua.component.scss"]
})
export class HuaComponent implements OnInit {
  huoerD: number;
  newLeft: any = (1.0).toFixed(1);
  newLeft1: any = (0.5).toFixed(1);
  zhen: any;
  xian: any;
  xuanzhuanBG: any;
  //   nn: number;

  constructor(element: ElementRef) {}

  ngOnInit() {
    this.hua();
  }

  /**
   * 油门滑动函数;
   * 数值计算方法:Math.floor(_left * (17 / 246) + 0);
   * 246:总高度-滑块高度;
   * 17:数值范围的最大值;
   * 0:数值范围的最小值;
   */

  hua() {
    const that = this;
    $(".accelerator").draggable({
      containment: ".gear-accelerator",
      cursor: "move",
      axis: "y",
      start: function() {},
      drag: function() {
        let _left = parseInt($(".accelerator").css("top"), 10);
        that.newLeft = (_left * (3 / 246) + 1).toFixed(1);
        that.newLeft1 = (_left * (1.5 / 246) + 0.5).toFixed(1);
        that.huoerD = Math.floor(_left * (17 / 246) + 0);
        $(".img1,.img3").css("transform", "rotate(" + that.huoerD + "deg)");
        that.zhen = Math.floor(_left * (90 / 246) + -45);
        $(".zhizhen").css("transform", "rotate(" + -that.zhen + "deg)");
        that.xian = Math.floor(_left * (370 / 246) + 0);
        $(".xian").css("width", that.xian + "px");
        that.xuanzhuanBG = Math.floor(_left * (110 / 246) + 0);
        console.log(Math.floor(_left * (100 / 246) + -45) + 45);
        $("#xuanzhuanBG").css(
          "width",
          Math.floor(_left * (100 / 246) + -45) + 45 + "%"
        );
      },
      stop: function() {
        $(".accelerator").css("top", "0");
        that.huoerD = 0;
        that.zhen = 40;
        that.xian = 0;
        that.xuanzhuanBG = 0;
        that.newLeft = (1.0).toFixed(1);
        that.newLeft1 = (0.5).toFixed(1);
        $(".img1,.img3").css("transform", "rotate(" + that.huoerD + "deg)");
        $(".zhizhen").css("transform", "rotate(45deg)");
        $(".xian").css("width", that.xian + "px");
        $("#xuanzhuanBG").css("width", "0%");
      }
    });
  }
}
