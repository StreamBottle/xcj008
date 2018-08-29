import {
    Component,
    Input,
    Output,
    OnInit,
    HostListener,
    Directive,
    ElementRef,
    Renderer,
    EventEmitter,
    DoCheck,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
/*
 * 指令
 * 设置元素的自定义属性，动态传值方式差值表达式不能添加到自定义属性上
 */
@Directive({
    selector: '[addClass]'
})
export class addClassDirective implements OnInit {
    @Input('addClass') addClass;
    constructor(private element: ElementRef, private renderer: Renderer) {
    }
    ngOnInit() {
        if (/left/.test(this.addClass[0]['answerID'])) {
            this.element.nativeElement.className = this.addClass[1];
        } else if (/right/.test(this.addClass[0]['answerID'])) {
            this.element.nativeElement.className = this.addClass[2];
        }
    }
}

