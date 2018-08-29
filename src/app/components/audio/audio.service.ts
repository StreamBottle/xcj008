import { Injectable } from '@angular/core';
declare var $: any;

/**
 * 基类
 * 
 * @class Audio
 */
class Audio {
    /**
     * 创建音频标签并，开始播放
     * 
     * @param {any} data
     * 
     * @memberOf Audio
     */
    audioPlayLoop(data): void {
        //开始创建音频时，检测是否有音频标签，有就删除
        if ($("#audio")) {
            $("#audio").remove();
        }
        //创建音频标签，两种音频source做浏览器兼容
        let audioElement = document.createElement("audio"),
            source1Element = document.createElement("source"),
            source2Element = document.createElement("source");
        audioElement.id = "audio";
        document.body.appendChild(audioElement);
        audioElement.appendChild(source1Element);
        audioElement.appendChild(source2Element);
        source1Element.src = data.audioSrc[1];
        source2Element.src = data.audioSrc[0];
        audioElement.autoplay = true;//设置声音自动播放
        audioElement.loop = false;
    }
}

/**
 * 
 * 
 * @export
 * @class AudioService
 * @extends {Audio}
 */
@Injectable()
export class AudioService extends Audio {

    audioPlayLoop(data): void {
        super.audioPlayLoop(data);
    }
}