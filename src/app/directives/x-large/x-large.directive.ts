import { Component, Directive, ElementRef, Renderer } from '@angular/core';
/*
 * 指令
 * XLarge 字体变大
 */
@Directive({
    selector: '[xLarge]' // 用 [ ] 代表 属性
})
export class XLargeDirective {
    constructor(element: ElementRef, renderer: Renderer) {
        // 设置 font size 成 x-large
        // `nativeElement` 是作用元素
        // element.nativeElement.style.fontSize = 'x-large';
        console.log(element);
        // 为了让 server/webworker 支持 用  renderer 渲染
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
}
