import {Component} from '@angular/core';
import {ControlCenterService} from './control_center.service'
declare var $: any;
@Component({
    selector: 'ctrl-center',
    providers: [
    ],
    styleUrls: ['./control_center.component.scss'],
    templateUrl: './control_center.component.html'
})
export class ControlCenterComponent {
    constructor(private controlCenterService:ControlCenterService ){

    }
    
    bottomLockToggle(obj: any): void {
        this.controlCenterService.bottomLockToggle(obj);
    }
    openSwitchPanel() {
        this.controlCenterService.openSwitchPanel();
    }

}
