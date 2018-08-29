import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group,
} from '@angular/core';

export const flyIn = trigger('flyIn',
  [
    transition('void => left', [
      animate(500, keyframes([
        // style({ opacity: 1, transform: 'translateX(15px)', offset: 0.8 }),
        style({ transform: 'translateX(250px)', }),
        style({ transform: 'translateX(0px)', }),
      ])),
    ]),
    transition('right => void', [
      animate(500, keyframes([
        style({ transform: 'translateX(0px)', }),
        style({ transform: 'translateX(250px)', }),
      ])),
    ]),
    transition('void => sceneLeft', [
      animate(500, keyframes([
        // style({ opacity: 1, transform: 'translateX(15px)', offset: 0.8 }),
        style({ transform: 'translateX(-250px)', }),
        style({ transform: 'translateX(0px)', }),
      ])),
    ]),
    transition('sceneRight => void', [
      animate(500, keyframes([
        style({ transform: 'translateX(0px)', }),
        style({ transform: 'translateX(-250px)', }),
      ])),
    ]),
    transition('void => down', [
      animate(500, keyframes([
        style({ opacity: 0, transform: 'translateY(-600px)', offset: 0 }),
        // style({ opacity: 1, transform: 'translateY(15px)', offset: 0.8 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ])),
    ]),
    transition('void => up', [
      animate(500, keyframes([
        style({ opacity: 0, transform: 'translateY(600px)', offset: 0 }),
        // style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.8 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ])),
    ]),



    transition('* => left130', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(-130px)', })
      ])),
    ]),

    transition('* => right80', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(81px)', })
      ])),
    ]),

    transition('* => right80', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateY(-61px)', }),
        style({ opacity: 1, transform: 'translateX(80px)', })
      ])),
    ]),


    transition('* => up210', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(-210px)', })
      ])),
    ]),

    transition('* => up21', [
      animate(500, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(-21px)', })
      ])),
    ]),

    transition('* => up211', [
      animate(1000, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(-211px)', })
      ])),
    ]),



    transition('* => down36', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(36px)', })
      ])),
    ]),




    transition('* => left400', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(-400px)', }),
      ])),
    ]),

    transition('* => left170', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(-170px)', }),
      ])),
    ]),

    transition('* => right440', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(440px)', }),
      ])),
    ]),

    transition('* => right200', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(200px)', }),
      ])),
    ]),

    transition('* => leftTop150', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translate(0px,0px)', }),
        style({ opacity: 1, transform: 'translate(-200px,-65px)', }),
      ])),
    ]),
    transition('* => down80', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(80px)', })
      ])),
    ]),
    transition('* => down40', [
      animate(1500, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(40px)', })
      ])),
    ]),
    transition('* => down150', [
      animate(1500, keyframes([
        style({ opacity: 1, transform: 'translateY(0px)', }),
        style({ opacity: 1, transform: 'translateY(150px)', })
      ])),
    ]),
    transition('* => left200', [
      animate(1500, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translateX(-200px)', })
      ])),
    ]),
    transition('* => leftTop240', [
      animate(2000, keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', }),
        style({ opacity: 1, transform: 'translate(-240px,-120px)', })
      ])),
    ]),




    transition('* => light3', [
      animate(3000, keyframes([
        style({ opacity: 1, }),
        style({ opacity: 0, }),
        style({ opacity: 1, }),
        style({ opacity: 0, }),
        style({ opacity: 1, }),
        style({ opacity: 0, }),
        style({ opacity: 1, }),
      ])),
    ]),
    transition('* => light2', [
      animate(2000, keyframes([
        style({ opacity: 1, }),
        style({ opacity: 0, }),
        style({ opacity: 1, }),
        style({ opacity: 0, }),
        style({ opacity: 1, }),
      ])),
    ]),

    transition('* => fadein', [
      animate(80, keyframes([
        style({ opacity: 0, }),
        style({ opacity: .2, }),
        style({ opacity: .4, }),
        style({ opacity: .6, }),
        style({ opacity: .8, }),
        style({ opacity: 1, }),
      ])),
    ]),

    transition('* => fadeout', [
      animate(500, keyframes([
        style({ opacity: 1, }),
        style({ opacity: 0, }),
      ])),
    ]),

    transition('* => 100ms', [
      animate(1000, keyframes([
        style({ opacity: 0, }),
        style({ opacity: 1, }),
      ])),
    ])
  ],


);
