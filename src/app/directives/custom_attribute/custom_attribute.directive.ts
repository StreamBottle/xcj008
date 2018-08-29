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
    selector: '[customAttribute]'
})
export class CustomAttributeDirective implements OnInit {
    @Input('customAttribute') customAttribute;
    constructor(private element: ElementRef, private renderer: Renderer) {
    }
    ngOnInit() {
        this.customAttribute.map((k) => {
            this.element.nativeElement.setAttribute(k[0], k[1]);
        })
    }
}

