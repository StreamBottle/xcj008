import { Component, Input } from '@angular/core';
declare var $: any;
/**
 * 
 * 音频的component部分
 * @export
 * @class AudioComponent
 */
@Component({

    selector: 'audio-center',
    providers: [
    ],
    // styleUrls: [ '../../../assets/css/template.css' ],
    templateUrl: './audio.component.html'
})
export class AudioComponent {
    /**
     * 手动播放音频
     * 
     * 
     * @memberOf AudioComponent
     */
    audioPlayLoop(): void {
        let audio = $('#audio')[0];
        if (audio) {
            audio.load();
        }
    }


}
