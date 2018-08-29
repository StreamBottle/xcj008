import { Component } from '@angular/core';
import { CommonPromptService } from './common_prompt.service';


/**
 * 
 * 处理错误component
 * @export
 * @class HandleErrorComponent
 */
@Component({
  selector: 'common-prompt',
  styleUrls: ['./common_prompt.component.scss'],
  templateUrl: './common_prompt.component.html',
  providers: []
})
export class CommonPromptComponent {


  constructor(
    private commonPromptService: CommonPromptService,
  ) {

  }
  closePrompt() {
    this.commonPromptService.messages = [];
    this.commonPromptService.tipPrompt(null);
  }
}
