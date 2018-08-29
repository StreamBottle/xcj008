import { Injectable } from '@angular/core';
declare let $: any;
/**
 * 基类
 * 
 * @class ControlCenter
 */
class ControlCenter {
    center_control_button_down: boolean = false;
    gearPanelHidden: boolean = true;
    /**
     * 控制中心，显示和隐藏方法
     * 
     * @param {*} obj
     * 
     * @memberOf ControlCenter
     */
    bottomLockToggle(obj: any): void {
        //加上拖拽事件
        //dragDiv();
        if (!this.center_control_button_down) {
            this.center_control_button_down = true;
            $(".center-control").animate({
                bottom: '0px'
            }, 200);
        } else {
            this.center_control_button_down = false;
            $(".center-control").animate({
                bottom: '-63px'
            }, 200);
        }
    }
    /**
     * 打开档位开关方法
     * 
     * 
     * @memberOf ControlCenter
     */
    openSwitchPanel() {
        $(".gear-wrap").removeClass("hide-important");
        $(".door-switch").parent().addClass("active");
    }
}
/**
 * 
 * 
 * @export
 * @class ControlCenterService
 * @extends {ControlCenter}
 */
@Injectable()
export class ControlCenterService extends ControlCenter {
    bottomLockToggle(obj: any): void {
        super.bottomLockToggle(obj);
    }
    openSwitchPanel() {
        super.openSwitchPanel();
    }
}