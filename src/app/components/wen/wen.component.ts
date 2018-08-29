import { Component, OnInit, Input } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-wen',
  templateUrl: './wen.component.html',
  styleUrls: ['./wen.component.scss']
})
export class WenComponent implements OnInit {
  @Input() data: any;
  public isDiv = false;

  constructor() {}
  isHide() {
    this.isDiv = !this.isDiv;
    if (this.isDiv) {
      setTimeout(() => {
        $('.div').animate({ bottom: '0' }, 500, 'linear', function() {});
      }, 10);
    }
  }
  ngOnInit() {}
}
