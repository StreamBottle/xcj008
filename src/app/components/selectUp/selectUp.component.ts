import {
  Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef

} from '@angular/core';
import { flyIn, halo } from '../../animations';

declare const $;
@Component({
  selector: 'sgm-selectup',
  templateUrl: './selectUp.component.html',
  styleUrls: ['./selectUp.component.scss'],
})
export class SelectUpComponent implements OnInit {
  @Input() contentData;
  ngOnInit() {

  }
  constructor() {

  }
  select(event, text) {
    console.log($(event), text, 123);
    $(text).html($(event).html());
  }

}
