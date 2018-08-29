/**
 * Created by Administrator on 2016/12/21.
 */
/**
 * Created by Administrator on 2016/12/13.
 */
import { Injectable } from '@angular/core';
declare let $: any;

@Injectable()
export class TestService {
    Mdata = [
        {
            imgSrc: './assets/images/structure/alert_img1.png',
            infoText: ['定子主要由定子铁芯和定子绕组组成。',
                '定子铁芯由导磁性良好的硅钢片叠压而成，用于降低磁场损失。',
                '定子绕组由三组线圈缠绕而成，线圈相互间隔120°，对称排列，结构完全相同。三相绕组有星型和三角形两种连接方式。']
        },



        {
            imgSrc: './assets/images/structure/alert_img2.png',

            infoText: [
                '永磁电动机的转子内部嵌有许多小的永磁体，他们按图中所示的次序一次排列。',
                '当电动机工作时，转子中永磁体的磁场与定子线圈产生的旋转磁场相作用，使得转子旋转产生动能。'
            ]
        },
        {
            imgSrc: './assets/images/structure/alert_img3.png',

            infoText: [
                '旋转变压器是角位移传感器，用来测量旋转物体的转轴角位移和角速度。',
                '在旋转变压器中运用了变压器的原理，初级线圈输入单相电压，两个次级线圈内产生与初级线圈频率相同的感应电压，感应电压的大小决定于旋转角。',
                '在驱动电机中，旋转变压器检测电机转子位置，经过电机控制器内旋变解码器解码后，电机控制器可获知电机当前转子位置，从而控制相应的IGBT功率管导通，按顺序给定子三个线圈通电，驱动电机旋转。'
            ]
        }


    ]
}