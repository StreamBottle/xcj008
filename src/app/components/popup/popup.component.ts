import { Component, Input } from '@angular/core';
import { Resource } from '../../resources';
import { PopupService } from './popup.service';
declare var $: any, Ps: any;
@Component({

  selector: 'popup',
  providers: [
  ],
  styleUrls: [ './popup.component.scss' ],
  templateUrl: './popup.component.html'
})
export class PopupComponent {
  popupsHidden = true;
  popupsOnclick = false;
  constructor(private popupService: PopupService) {

  }
  ngOnInit(): void {
    Ps.initialize(document.getElementById('Demo'));

  }

  alertTextClick(): void {
    this.popupsOnclick = !this.popupsOnclick;
    if (this.popupsHidden) {
      this.alertTextMouseover();
    } else {
      this.alertTextMouseout();
    }
  }
  alertTextMouseover(): void {
    this.popupsHidden = false;


    Ps.update(document.getElementById('Demo'));

  }
  //鼠标离开弹出框图标
  alertTextMouseout() {
    if (!this.popupsOnclick) {
      this.popupsHidden = true;
    }

  }
}
