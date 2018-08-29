import {
  Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';
import { flyIn, halo } from '../../animations';
import { AppService } from '../../index/app.service';
import { setTimeout } from 'timers';
declare const $;

@Component({
  selector: 'sgm-buttonclick',
  templateUrl: './buttonClick.component.html',
  styleUrls: ['./buttonClick.component.scss'],
  animations: [
    flyIn,
    halo,
  ],
})
export class ButtonClickComponent implements OnInit {
  data: any;
  nativeElement: any;
  style: any;
  @Input('data') dataConf: any;

  @Output('event') publishEvent = new EventEmitter<void>();
  // @Output('close') closeEvent = new EventEmitter<void>();

  @HostListener('mouseenter', ['$event']) onmouseenter(e) {
    // console.log(e);
    if (this.data.currentState.style.hover)
      Object.assign(this.data.currentStyle, this.data.currentState.style.hover);
  }
  @HostListener('mouseleave', ['$event']) onmouseleave(e) {
    // console.log(e);
    Object.assign(this.data.currentStyle, this.data.currentState.style.default);
    // console.log(this.data.currentState.style.default);
  }

  constructor(
    element: ElementRef,
    public appService: AppService,
  ) {
    // console.log(element);
    this.nativeElement = element.nativeElement;
    this.style = {};
  }

  ngOnInit() {
    this.data = this.dataConf || {};
    // console.log(this.data);

    // Object.assign(this.style, this.data.currentState.style.default);
    // this.style = this.data.currentState.style.currentStyle;


    this.addEvent(this.data.publish);

  }
  // @HostListener('click', ['$event']) onClick(e) {
  //     console.log(e);
  //     this.publishEvent.emit(e);
  //     console.log(this.dataConf);
  // }

  //
  setStyle(item) {
    // console.log(this.data.style);
    // console.log(this.data.stateArray[this.data.initialStateID].style);
    if (!this.data.currentStyle) return;
    const style = this.data.currentStyle;
    // const style = this.style;
    if (!style) return;
    const styles = {
      'left': parseInt(style.positionLeft, 10) + 'px',
      'right': parseInt(style.positionRight, 10) + 'px',
      'top': parseInt(style.positionTop, 10) + 'px',
      'width': parseInt(style.width, 10) + 'px',
      'height': parseInt(style.height, 10) + 'px',
      'textAlign': style.textAlign,
      'zIndex': style.zIndex,
      'backgroundImage': 'url("' + style.backgroundImage + '")',
      'backgroundSize': style.backgroundSize,
      'display': style.display,
      'border': style.border,
      'boxShadow': style.boxShadow,
      'backgroundColor': style.backgroundColor,
      'borderRadius': style.borderRadius,
      'cursor': style.cursor,
      'lineHeight': style.lineHeight + 'px',
      'fontWeight': style.fontWeight,
      'color': style.color,
      'fontSize': style.fontSize + 'px',
    };
    return styles;
  }
  setTextStyle(item) {
    if (!item.style) return;

    const styles = {
      'color': item.style.color,
      'fontSize': parseInt(item.style.fontSize, 10) + 'px',
      'fontWeight': item.style.fontWeight,
      'textDecoration': item.style.textDecoration,
      'textAlign': item.style.textAlign,
      'lineHeight': parseInt(item.style.lineHeight, 10) + 'px',

    };
    return styles;
  }

  // 根据属性的值对数组排序

  // 监听事件
  private addEvent(eventObject) {

  }

}
