import {
  Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';
import { flyIn, halo } from '../../animations';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'header-title',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    flyIn,
    halo,
  ],
})
export class HeaderComponent implements OnInit {
  @Input('title') title = '';
  @Output('event') publishEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {

  }

  routerTurn() {
    this.publishEvent.emit();
  }

}
