import { Injectable } from '@angular/core';

/**
 * 基类
 * 
 * @class CloseWindow
 */
class CloseWindow {
  /**
   * 关闭当前标签页
   * 
   * 
   * @memberOf CloseWindow
   */
  closeWindow(): void {

    let userAgent = navigator.userAgent;
    //兼容谷歌、火狐和其他浏览器
    if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
      top.window.parent.opener = top;
      top.window.parent.open('', '_self', '');
      top.window.parent.close();
      window.location.href = "http://content.xiaochejiang.com/warn.html";
    } else {
      window.parent.opener = null;
      window.parent.open("", "_self");
      window.parent.close();
      window.location.href = "http://content.xiaochejiang.com/warn.html";
    }
  }
}

/**
 * 
 * 
 * @export
 * @class CloseWindowService
 * @extends {CloseWindow}
 */
@Injectable()
export class CloseWindowService extends CloseWindow {
  closeWindow(): void {
    super.closeWindow();
  }
}
