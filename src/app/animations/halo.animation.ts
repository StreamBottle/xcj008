import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
    group,
} from '@angular/core';


export const halo = trigger('haloless',

    [
        transition('* => void',
            [
                animate('1s linear', keyframes([
                    style({ opacity: 1, }),
                    style({ opacity: 0.2, }),
                ])),
                animate('1s linear', keyframes([
                    style({ opacity: 0.2, }),
                    style({ opacity: 1, }),
                ])),
            ]
        ),
    ],
);
