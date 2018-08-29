import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/**
 * 
 */
@Injectable()
export class CommonPromptService {
    hiddenCommonPrompt = false; // 隐藏弹框
    messages = [];
    tipPrompt(obj) {
        if (this.hiddenCommonPrompt) {
            this.hiddenCommonPrompt = false;
        } else {
            this.messages.push(obj);
            this.hiddenCommonPrompt = true;
        }
    }

}
