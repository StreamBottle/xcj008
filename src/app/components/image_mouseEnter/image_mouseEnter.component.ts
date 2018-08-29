import {
    Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';
import { flyIn, halo } from '../../animations';
import { AppService } from '../../index/app.service';
import { Observable, Observer } from 'rxjs';
declare const $;

@Component({
    selector: 'sgm-image-mouseenter',
    templateUrl: './image_mouseEnter.component.html',
    styleUrls: ['./image_mouseEnter.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class ImageMouseEnterComponent implements OnInit {
    timerrr;
    data: any;
    nativeElement: any;
    subscription: any;
    @Input('data') dataConf: any;
    @Output('event') publishEvent = new EventEmitter<void>();

    modal: boolean = false;

    constructor(
        element: ElementRef,
        public appService: AppService,
    ) {
        this.nativeElement = element.nativeElement;
    }

    ngOnInit() {
        this.data = this.dataConf || {};
        this.addEvent(this.data.publish);
        console.log(this.data);
        // console.log(this.data)
    }
    setStyle() {
        if (!this.data.currentStyle) return;
        const style = this.data.currentStyle;
        if (!style) return;
        const _backgroundImage = style.backgroundImage || this.data.src;

        const styles = {
            'left': parseInt(style.positionLeft, 10) + 'px',
            'top': parseInt(style.positionTop, 10) + 'px',
            'width': parseInt(style.width, 10) + 'px',
            // 'height': parseInt(style.height, 10) + 'px',
            'backgroundImage': 'url("' + _backgroundImage + '")',
            'zIndex': style.zIndex,
            'cursor': style.cursor,
            // 'display': style.display,
            'height': parseInt(style.height, 10) + 'px' || 'auto',
            'display': style.display,
            'backgroundSize': style.backgroundSize
        };
        return styles;

        // console.log(this.data.style);
        // if (!this.data.style) return;

        // const styles = {
        //     'left': parseInt(this.data.style.positionLeft, 10) + 'px',
        //     'top': parseInt(this.data.style.positionTop, 10) + 'px',
        //     'width': parseInt(this.data.style.width, 10) + 'px',
        //     'height': parseInt(this.data.style.height, 10) + 'px',
        //     'background-image': 'url(' + this.data.src + ')',
        //     'z-index': this.data.style.zIndex,

        // };
        // return styles;
    }

    // 设置画上时目标元素的样式
    targetElementStyle(item) {
        if (!item.targetElementStyle) return;
        const styles = {
            position: 'absolute',
            'left': parseInt(item.targetElementStyle.positionLeft, 10) + 'px',
            'top': parseInt(item.targetElementStyle.positionTop, 10) + 'px',
            'width': parseInt(item.targetElementStyle.width, 10) + 'px',
            'backgroundImage': 'url("' + item.targetElementStyle.backgroundImage + '")',
            'backgroundColor': item.targetElementStyle.backgroundColor,
            'zIndex': item.targetElementStyle.zIndex,
            'cursor': item.targetElementStyle.cursor,
            // 'display': style.display,
            'height': parseInt(item.targetElementStyle.height, 10) + 'px' || 'auto',
            'display': item.targetElementStyle.display,
            'backgroundSize': item.targetElementStyle.backgroundSize,
            'borderRadius': item.targetElementStyle.borderRadius,
            'border':
                item.targetElementStyle.border,
        };
        return styles;
    }

    // 设置弹出图片的背景图框的样式
    imgPromptBg(item) {
        if (!item.imgPromptBgStyle) return;
        const styles = {
            position: 'absolute',
            'left': parseInt(item.imgPromptBgStyle.positionLeft, 10) + 'px',
            'top': parseInt(item.imgPromptBgStyle.positionTop, 10) + 'px',
            'width': parseInt(item.imgPromptBgStyle.width, 10) + 'px',
            'backgroundImage': 'url("' + item.imgPromptBgStyle.backgroundImage + '")',
            'backgroundColor': item.imgPromptBgStyle.backgroundColor,
            'zIndex': item.imgPromptBgStyle.zIndex,
            'cursor': item.imgPromptBgStyle.cursor,
            // 'display': style.display,
            'height': parseInt(item.imgPromptBgStyle.height, 10) + 'px' || 'auto',
            'display': item.imgPromptBgStyle.display,
            'backgroundSize': item.imgPromptBgStyle.backgroundSize,
            'borderRadius': item.imgPromptBgStyle.borderRadius,
        };
        return styles;
    }

    // 设置画上时显示图片元素的样式
    setMouseEnterImgStyle(item) {
        if (!item.mouseEnterimgStyle) return;
        const styles = {
            position: 'absolute',
            'left': parseInt(item.mouseEnterimgStyle.positionLeft, 10) + 'px',
            'top': parseInt(item.mouseEnterimgStyle.positionTop, 10) + 'px',
            'width': parseInt(item.mouseEnterimgStyle.width, 10) + 'px',
            // 'height': parseInt(style.height, 10) + 'px',
            'backgroundImage': 'url("' + item.mouseEnterimgStyle.backgroundImage + '")',
            'backgroundRepeat': 'no-repeat',
            'zIndex': item.mouseEnterimgStyle.zIndex,
            'cursor': item.mouseEnterimgStyle.cursor,
            // 'display': style.display,
            'height': parseInt(item.mouseEnterimgStyle.height, 10) + 'px' || 'auto',
            'display': item.mouseEnterimgStyle.display,
            'backgroundSize': item.mouseEnterimgStyle.backgroundSize,

        };
        return styles;
    }


    // 设置画上时显示图片元素的样式
    setMouseEnterTextStyle(item) {
        if (!item.mouseEnterTextStyle) return;
        const styles = {
            position: 'absolute',
            'left': parseInt(item.mouseEnterTextStyle.positionLeft, 10) + 'px',
            'top': parseInt(item.mouseEnterTextStyle.positionTop, 10) + 'px',
            'width': parseInt(item.mouseEnterTextStyle.width, 10) + 'px',
            // 'height': parseInt(style.height, 10) + 'px',
            'backgroundImage': 'url("' + item.mouseEnterTextStyle.backgroundImage + '")',
            'zIndex': item.mouseEnterTextStyle.zIndex,
            'cursor': item.mouseEnterTextStyle.cursor,
            // 'display': style.display,
            'height': parseInt(item.mouseEnterTextStyle.height, 10) + 'px' || 'auto',
            'display': item.mouseEnterTextStyle.display,
            'backgroundSize': item.mouseEnterTextStyle.backgroundSize,
            'background': item.mouseEnterTextStyle.background,
            'border': item.mouseEnterTextStyle.border,
            'text-align': item.mouseEnterTextStyle.textAlign,
            'line-height': parseInt(item.mouseEnterTextStyle.height, 10) + 'px' || 'auto',
            'border-radius': item.mouseEnterTextStyle.borderRadius + 'px',
            'padding': item.mouseEnterTextStyle.padding + 'px',

        };
        return styles;
    }

    // 移上事件
    targetElementMouseEnter(item, event) {

    }

    targetElementMouseout(item, event) {
    }



    ready() {
        this.modal = false;
    }



    // 实现点的无限闪烁
    // animationDone(a) {
    //     if (a.showed) return;
    //     // console.log('done', a);
    //     if (this.halo === 'start') {
    //         setTimeout(() => {
    //             this.halo = 'end';
    //         }, 15);
    //     } else {
    //         setTimeout(() => {
    //             this.halo = 'start';
    //         }, 15);
    //     }
    // }



    // 监听事件
    private addEvent(eventObject) {

    }
}
