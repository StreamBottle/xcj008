import {
  Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef

} from '@angular/core';
import { flyIn, halo } from '../../animations';


@Component({
  selector: 'sgm-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  animations: [
    flyIn,
    halo,
  ],
})
export class TextComponent implements OnInit {
  data: any;
  nativeElement: any;
  @Input('data') dataConf: any;

  @Output('event') clickEvent = new EventEmitter<void>();
  // @Output('close') closeEvent = new EventEmitter<void>();
  constructor(
    element: ElementRef,
  ) {
    // console.log(element);
    this.nativeElement = element.nativeElement;
  }

  ngOnInit() {
    this.data = this.dataConf || {};
    // console.log(this.data);
    if (Array.isArray(this.data.stateArray)) {
      this.data.stateArray.forEach((v, i, arr) => {
        Object.defineProperty(arr, v.id, { value: v });
        if (Array.isArray(arr.textArray))
          arr.textArray.sort(this.compare('order'));
      });
      // Object.assign(this.data, {
      //     currentStateID: this.data.initialStateID,
      // });
      // Object.assign(this.data, {
      //     currentState: this.data.stateArray[this.data.currentStateID],
      //     // currentState: undefined,
      // });
    }




    this.addEvent(this.data.publish);

  }
  // @HostListener('click', ['$event']) onClick(e) {
  //     console.log(e);
  //     this.clickEvent.emit(e);
  //     console.log(this.dataConf);
  // }

  //
  setStyle(item) {
    // console.log(this.data.style);
    // console.log(this.data.stateArray[this.data.initialStateID].style);
    if (!this.data.currentStyle) return;

    const style = this.data.currentStyle;

    if (!style) return;
    const styles = {
      'left': parseInt(style.positionLeft, 10) + 'px',
      'top': parseInt(style.positionTop, 10) + 'px',
      'width': parseInt(style.width, 10) + 'px',
      'height': parseInt(style.height, 10) + 'px',
      'text-align': style.textAlign,
      'z-index': style.zIndex,
      'display': style.display,
      'backgroundColor': style.backgroundColor,
      // 新加边框样式
      'border': style.border,
      'box-shadow': style.boxShadow,
      'border-radius': style.borderRadius,
      'padding': style.padding,

    };
    return styles;
  }
  setTextStyle(item) {
    // console.log(this.data.style);
    if (!item.style) return;

    const styles = {
      'color': item.style.color,
      'fontSize': parseInt(item.style.fontSize, 10) + 'px',
      'fontWeight': item.style.fontWeight,
      // 'display': item.isLF ? 'block' : 'inline',
      'lineHeight': parseInt(item.style.lineHeight, 10) + 'px',
      'textDecoration': item.style.textDecoration,
      'textAlign': item.style.textAlign,
    };
    return styles;
  }

  // 根据属性的值对数组排序
  private compare(property: string) {
    return (a, b) => {
      const value1 = a[property];
      const value2 = b[property];
      return value1 - value2;
    };
  }


  // 监听事件
  private addEvent(eventObject) {
    for (let key in eventObject) {
      if (eventObject.hasOwnProperty(key)) {
        // console.log(key);

        this.nativeElement.addEventListener(key, (e) => {
          // console.log(e, this);
          // console.log(this.data);
          this.clickEvent.emit(e);

        });
      }
    }
  }






}
