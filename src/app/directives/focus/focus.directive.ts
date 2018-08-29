import {
  Directive, ElementRef, Renderer, HostListener, Input, Output, EventEmitter
} from '@angular/core';

// 属性型指令
@Directive({
    selector: '[inputFofus]',
})
export class FocusDirective {
    @Input('inputFofus') inputFofus: string;
    @Output('change') changeHandler = new EventEmitter<void>();
    constructor(elem: ElementRef, render: Renderer) {
      // elem.nativeElement.autofocus = true;
    }

    @HostListener('focus')
    onFofus() {
      // this.focusHandler.emit();
    }
    @HostListener('keyup', ['$event'])
    onkeyup(e) {
      // console.log(e)
      this.changeHandler.emit(e);
    }
    @HostListener('keypress')
    onkeypress() {
      // this.changeHandler.emit();
    }
}

