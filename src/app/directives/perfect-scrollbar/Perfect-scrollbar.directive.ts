import { Component, Directive, ElementRef, Renderer } from '@angular/core';

/**
 * 引入 perfect-scrollbar
 */
const ps = require('perfect-scrollbar');
require('./perfect-scrollbar.min.css');

/*
 * 指令
 */
@Directive({
    selector: '[PerfectScrollbar]',
})
export class PerfectScrollbarDirective {
    constructor(element: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(element.nativeElement, 'position', 'relative');
        setTimeout(() => {
            console.log(ps.initialize);
            ps.initialize(element.nativeElement);
        }, 0);
    }
}
