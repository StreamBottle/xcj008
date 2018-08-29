import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import {flyIn, halo} from '../../animations';

@Component({
  selector: 'sgm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [flyIn, halo]
})
export class InputComponent implements OnInit {
  data: any;
  nativeElement: any;
  style: any;
  number: number = 0;
  input: any;
  @Input('data')dataConf: any;

  @Output('event')publishEvent = new EventEmitter < void > ();
  // @Output('close') closeEvent = new EventEmitter<void>();

  constructor(element: ElementRef) {
    // console.log(element);
    this.nativeElement = element.nativeElement;
    this.style = {};
  }

  ngOnInit() {
    this.data = this.dataConf || {};
    this.number = 0;
    console.log(this.data);
    // Object.assign(this.isNodeStyleEventEmmitter(sourceObj: any),
    // this.data.currentState.style.default); this.style =
    // this.data.currentState.style.currentStyle; this.addEvent(this.data.publish);

  }
// xdescribex
  changeHandler(e) {
    e.myType = 'input';
    this.input = this
      .nativeElement
      .firstElementChild
      .getElementsByTagName('input')[0];
    if (this.input.value.length === this.data.currentState.length) {
      this.input.disabled = true;
      if (this.input.value.length === 2) {
        if (this.input.value === 'CN') {
          this.publishEvent.emit(e);
        } else {
          this.input.disabled = false;
        }
      } else {
         this.publishEvent.emit(e);
      }
    }
  }

  //
  setStyle(item) {
    // console.log(this.data.style);
    // console.log(this.data.stateArray[this.data.initialStateID].style);
    if (!this.data.currentStyle)
      return;
    const style = this.data.currentStyle;
    // const style = this.style;
    if (!style)
      return;
    const styles = {
      'left': parseInt(style.positionLeft, 10) + 'px',
      'top': parseInt(style.positionTop, 10) + 'px',
      'width': parseInt(style.width, 10) + 'px',
      'height': parseInt(style.height, 10) + 'px',
      'zIndex': style.zIndex,
      'backgroundImage': 'url("' + style.backgroundImage + '")',
      'display': style.display
    };
    return styles;
  }
  setTextStyle(item) {
    // console.log(this.data.style);
    if (!item.style)
      return;

    const styles = {
      'color': item.style.color,
      'fontSize': parseInt(item.style.fontSize, 10) + 'px',
      'fontWeight': item.style.fontWeight,
      // 'display': item.isLF ? 'block' : 'inline',
      'lineHeight': parseInt(item.style.lineHeight, 10) + 'px',
      'textDecoration': item.style.textDecoration,
      'textAlign': item.style.textAlign,
      'border': item.style.border
    };
    return styles;
  }

  // 根据属性的值对数组排序 监听事件
  private addEvent(eventObject) {
    for (let key in eventObject) {
      if (eventObject.hasOwnProperty(key)) {
        // console.log(key); if(key'input'){     return; }

        this
          .nativeElement
          .addEventListener(key, (e) => {
            // console.log(e, this); console.log(this.data);
            this
              .publishEvent
              .emit(e);
          });
      }
    }
  }
}
