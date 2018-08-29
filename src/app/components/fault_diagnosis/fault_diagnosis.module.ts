import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaultDiagnosisComponent, FaultDiagnosisService, ChangeElePositionDirective, ChangeImgPathDirective } from './index';

@NgModule({
    imports: [CommonModule],
    declarations: [ChangeElePositionDirective, ChangeImgPathDirective, FaultDiagnosisComponent],
    providers: [FaultDiagnosisService],
    exports: [ChangeElePositionDirective, ChangeImgPathDirective, FaultDiagnosisComponent],
})
export class FaultDiagnosisModule { }
