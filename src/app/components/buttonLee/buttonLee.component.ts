import {
    Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';
import { flyIn, halo } from '../../animations';
import { AppService } from '../../index/app.service';
import { setTimeout, clearTimeout } from 'timers';
declare const $;

@Component({
    selector: 'sgm-buttonlee',
    templateUrl: './buttonLee.component.html',
    styleUrls: ['./buttonLee.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class ButtonLeeComponent implements OnInit {
    clearAnimateTime = [];

    data: any;
    nativeElement: any;
    style: any;
    @Input('data') dataConf: any;

    @Output('event') publishEvent = new EventEmitter<void>();

    @HostListener('mouseenter', ['$event']) onmouseenter(e) {
        if (this.data.currentState.style.hover)
            Object.assign(this.data.currentStyle, this.data.currentState.style.hover);
    }
    @HostListener('mouseleave', ['$event']) onmouseleave(e) {
        Object.assign(this.data.currentStyle, this.data.currentState.style.default);
    }

    constructor(
        element: ElementRef,
        public appService: AppService,
    ) {
        this.nativeElement = element.nativeElement;
        this.style = {};
    }

    ngOnInit() {
        this.data = this.dataConf || {};
        // this.addEvent(this.data.publish);
    }

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
            'top': parseInt(style.positionTop, 10) + 'px',
            'width': parseInt(style.width, 10) + 'px',
            'height': parseInt(style.height, 10) + 'px',
            'textAlign': style.textAlign,
            'zIndex': style.zIndex,
            'backgroundColor': style.backgroundColor,
            'borderRadius': style.borderRadius,
            'color': '#fff',
            'display': style.display,
            'cursor': style.cursor,
            'border': style.border,
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
            'position': 'relative',
            'display': item.style.display,
            'left': parseInt(item.style.positionLeft, 10) + 'px',
            'top': parseInt(item.style.positionTop, 10) + 'px',
            'width': item.style.width ? parseInt(item.style.width, 10) + 'px' : '855px',
            'marginLeft': item.style.marginLeft,
            'border': item.style.border,
            'border-radius': item.style.borderRadius + 'px',
            'background-color': item.style.backgroundColor,
            cursor: item.style.cursor,
        };
        return styles;
    }

    // 根据属性的值对数组排序

    buttonLeeClick() {
        this.addEvent(this.data.publish);
    }

    // 监听事件
    private addEvent(eventObject) {

    }
}

