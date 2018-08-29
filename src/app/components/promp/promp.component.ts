import {
    Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';
import { flyIn, halo } from '../../animations';
import { Observable, Observer } from 'rxjs';

@Component({
    selector: 'sgm-promp',
    templateUrl: './promp.component.html',
    styleUrls: ['./promp.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class PrompComponent implements OnInit {
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
            'display': style.display,
            'opacity': style.opacity,
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
