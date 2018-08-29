import { Component } from '@angular/core';
import { CloseWindowService } from './close_window.service';
import { SimulationService } from '../simulation';
@Component({
    selector: 'close-window',
    templateUrl: './close_window.component.html'
})
export class CloseWindowComponent {
    // constructor(private closeWindowService: CloseWindowService, private simulationService: SimulationService) {

    // }
    // exitStudy() {
    //     this.simulationService.exitSimulation();
    //     this.closeWindowService.closeWindow();
    // }
}
