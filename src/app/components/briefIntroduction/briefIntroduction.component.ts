import { Component, OnInit, Input, Output } from '@angular/core';
declare const $: any;
@Component({
  selector: 'text-introduction',
  templateUrl: './briefIntroduction.component.html',
  styleUrls: ['./briefIntroduction.component.scss'],
  animations: []
})
export class textIntroduction implements OnInit {
  @Input('data') dataConf: Array<Object>;
  openORclose: string = '';
  isShowFlag: boolean = false;
  dataArray: Array<Object> = [];
  constructor() {

  }
  ishidden(){
    this.isShowFlag = true;
    this.isShow('text')
  }
  ngOnInit() {
    this.dataArray = this.dataConf;
    console.log(this.dataArray, '[][]');
  };
  isShow(param) {
    this.isShowFlag = !this.isShowFlag;
    if (this.isShowFlag) {
      setTimeout(() => {
        $('.' + param).animate({ bottom: '-60px' }, 500, 'linear', function () { })
      }, 10);
    } else {
      this.openORclose = 'close';
    }
  }
}
