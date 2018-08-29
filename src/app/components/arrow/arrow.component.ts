import {
    Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';
import { flyIn, halo } from '../../animations';
import { Observable, Observer } from 'rxjs';

@Component({
    selector: 'sgm-arrow',
    templateUrl: './arrow.component.html',
    styleUrls: ['./arrow.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class ArrowComponent implements OnInit {
    data: any;
    nativeElement: any;
    subscription: any;
    @Input('data') dataConf: any;
    @Output('event') publishEvent = new EventEmitter<void>();

    constructor(
        element: ElementRef,
    ) {
        this.nativeElement = element.nativeElement;
    }

    ngOnInit() {
        this.data = this.dataConf || {};
        this.addEvent(this.data.publish);
        console.log(this.data)
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
            'height': parseInt(style.height, 10) + 'px',
            'backgroundImage': 'url("' + _backgroundImage + '")',
            'zIndex': style.zIndex,
            'cursor': style.cursor,
            'backgroundSize': style.backgroundSize,
            // 'display': style.display,
        };
        return styles;
    }


    // 监听事件
    private addEvent(eventObject) {
        for (let key in eventObject) {
            if (eventObject.hasOwnProperty(key)) {
                // console.log(key);
                this.nativeElement.addEventListener(key, (e) => {
                    // console.log(e, this);
                    // console.log(this.data);
                    this.publishEvent.emit(e);
                });
            }
        }
    }
}
