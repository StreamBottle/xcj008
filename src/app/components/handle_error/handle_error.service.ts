import { Injectable } from '@angular/core';
import { ErrorMessage } from './error_message';
import { ErrorMessages } from './handle_error.mock';
import 'rxjs/add/operator/toPromise';

/**
 * 
 * 处理错误
 * @export
 * @class HandleErrorService
 */
@Injectable()
export class HandleErrorService {
	/**
	 * 关闭错误窗口是否调用关闭窗口方法
	 * 
	 * @type {boolean}
	 * @memberOf HandleErrorService
	 */
  closepage: boolean;
	/**
	 * 存放所有的常规错误信息
	 * 
	 * @type {Object[]}
	 * @memberOf HandleErrorService
	 */
  errorMessages: Object[] = [{}];

	/**
	 * 参数，常规错误提示框
	 * 
	 * @type {boolean}
	 * @memberOf HandleErrorService
	 */
  errorPopupHidden: boolean = true;

	/**
	 * 获取所有的本地储存的常规错误信息
	 * 
	 * @returns {Promise<ErrorMessage[]>}
	 * 
	 * @memberOf HandleErrorService
	 */
  getErrorMessages(): Promise<any[]> {
    return Promise.resolve(ErrorMessages);
  }
  getError(code) {
    this.errorPopupHidden = false;
    this.errorMessages.push(ErrorMessages.find((item): any => {
      return item.code === code
    }));
  }
	/**
	 * 根据code获取某一个本地储存的常规错误信息
	 * 
	 * @param {number} code
	 * @returns {Promise<ErrorMessage>}
	 * 
	 * @memberOf HandleErrorService
	 */
  getErrorMessage(code: number): Promise<any> {
    return this.getErrorMessages()
      .then(errorMessages => errorMessages.find(errorMessage => errorMessage.code === code))
      .catch(error => this.handleError(error));
  }

	/**
	 * 处理错误方法，分常规错误和非常规
	 * 
	 * @param {*} code
	 * 
	 * @memberOf HandleErrorService
	 */
  handleError(code: any): void {
    let json = {};
    //是常规错误，在提示框中显示提示文字
    if (typeof (code) === 'number') {
      // this.errorPopupHidden = false;
      // this.closepage = true;
      // this.getErrorMsessage(code)
      // 	.then(errorMessage => {
      // 		if (this.errorMessages.indexOf(errorMessage) === -1) {
      // 			this.errorMessages.push(errorMessage);
      // 		}
      // 	})
      // 	.catch(error => this.handleError(error));
    } else {
      //非常规错误，控制台输出错误日志
      this.errorPopupHidden = false;
      this.closepage = false;
      this.errorMessages = [];
      this.errorMessages.push(code);
    }
  }
	/**
	 * 关闭错误提示框
	 * 
	 * 
	 * @memberOf HandleErrorService
	 */
  closeErrorPopup(): void {
    this.errorPopupHidden = true;
    this.errorMessages = [];
    // this.closeWindowService.closeWindow();

  }
}
