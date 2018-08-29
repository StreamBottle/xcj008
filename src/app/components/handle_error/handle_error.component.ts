import { Component } from '@angular/core';
import { ErrorMessage } from './error_message';
import { HandleErrorService } from './handle_error.service';
import { CloseWindowService } from '../close_window';
import { AppService } from '../../index/app.service';


declare const io: any;

/**
 * 
 * 处理错误component
 * @export
 * @class HandleErrorComponent
 */


@Component({
  selector: 'handle-error',
  styleUrls: ['./handle_error.component.scss'],
  templateUrl: './handle_error.component.html',
  providers: []
})
export class HandleErrorComponent {
  constructor(private handleErrorService: HandleErrorService, private closeWindowService: CloseWindowService, public appService: AppService) {

  }
  ngOnInit() {

  }

  closeErrorPopup(): void {
    this.handleErrorService.closeErrorPopup();
    if (this.handleErrorService.closepage) {
      this.closeWindowService.closeWindow();
    }
  }
}
