import {
    Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';
import { flyIn, halo } from '../../animations';
import { Observable, Observer } from 'rxjs';
declare const $;

@Component({
    selector: 'sgm-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class ImageComponent implements OnInit {
    data: any;
    nativeElement: any;
    subscription: any;
    @Input('data') dataConf: any;
    @Output('event') publishEvent = new EventEmitter<void>();

    modal: boolean = false;

    constructor(
        element: ElementRef,
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
        let self = this;
        for (let key in eventObject) {
            if (eventObject.hasOwnProperty(key)) {
                this.nativeElement.addEventListener(key, (e) => {
                    this.publishEvent.emit(e);
                    console.log($('.textInfoBox')[0]);

                    if (this.data.id === 'page01-component04' && this.data.currentStateID === 'state05') {
                        setTimeout(() => {
                            if ($('.textInfoBox')[0]) {
                                $('.textInfoBox').scrollTop($('.textInfoBox')[0].scrollHeight);
                            }
                        }, 200);

                        setTimeout(() => {
                            $('.textInfoBox').animate({
                                'scrollTop': 0
                            }, 2000);
                            $('.textInfoBoxShadow').remove();
                            $('.ps__scrollbar-x-rail').remove();
                        }, 2000);
                    } else if ($('.textInfoBox')[0] && $('.textInfoBox')[0].scrollHeight &&
                        this.data.currentStateID !== 'state09' && this.data.currentStateID !== 'state99' && this.data.currentStateID !== 'state999') {

                        setTimeout(() => {
                            if ($('.textInfoBox')[0]) {
                                $('.textInfoBox').scrollTop($('.textInfoBox')[0].scrollHeight);
                            }
                        }, 500);
                    }
                });
            }
        }
    }
}
