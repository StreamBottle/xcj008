import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PadQuestionComponent, PadQuestionService, Replace$XCJ$Directive, ReplaceKongStringDirective } from './index';

@NgModule({
    imports: [CommonModule],
    exports: [PadQuestionComponent, Replace$XCJ$Directive, ReplaceKongStringDirective],
    declarations: [PadQuestionComponent, Replace$XCJ$Directive, ReplaceKongStringDirective],
    providers: [PadQuestionService],
})
export class PadQuestionModule { }
