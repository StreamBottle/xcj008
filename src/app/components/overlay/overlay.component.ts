import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { flyIn, halo } from '../../animations';


@Component({
    selector: 'sgm-overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.scss'],
    animations: [
        flyIn,
        halo,
    ],
})
export class OverlayComponent implements OnInit {
    data: any;
    @Input('data') dataConf: any;
    @Output('show') clickEvent = new EventEmitter<void>();
    // @Output('close') closeEvent = new EventEmitter<void>();
    // @HostListener('click', ['$event']) onClick(e) {
    //     console.log(e);
    //     this.clickEvent.emit();

    // }
    constructor(
    ) {
    }

    ngOnInit() {
        this.data = this.dataConf || {
            style: {
                color: '#fff',
                opacity: '0.5'
            }
        };
        // console.log(this.data);

        // this.data = {
        //     style: {
        //         color: '#fff',
        //         opacity: '0.5'
        //     }
        // };

    }


    setOverlayStyle() {


        if (!this.data.currentStyle) return;
        // const style = this.data.currentState.style;
        const style = this.data.currentStyle;

        if (!style) return;
        const styles = {
            'backgroundColor': style.color,
            'opacity': style.opacity,
        };
        return styles;

        // console.log(this.data.style);
        // if (!this.data.style) return;

        // const styles = {
        //     'background-color': this.data.style.color,
        //     'opacity': this.data.style.opacity,
        // };
        // return styles;
    }

    setWrapperStyle() {
        // console.log(this.data.style);
        if (!this.data.currentStyle) return;
        // const style = this.data.currentState.style;
        const style = this.data.currentStyle;

        if (!style) return;
        const styles = {
            'z-index': style.zIndex,
            'display': style.display,
        };
        return styles;


        // if (!this.data.style) return;
        // // console.log(this.data.style.zIndex);
        // const styles = {
        //     'z-index': this.data.style.zIndex,
        // };
        // return styles;
    }



}
