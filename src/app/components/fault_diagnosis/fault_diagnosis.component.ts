

import {
  Input,
  Output,
  HostListener,
  Directive,
  ElementRef,
  Renderer,
  EventEmitter,
  DoCheck,
  OnChanges,
  SimpleChanges
} from '@angular/core';
/*
 * 指令
 * 设置元素的自定义属性，动态传值方式差值表达式不能添加到自定义属性上
 */
@Directive({
  selector: '[changeElePosition]'
})
export class ChangeElePositionDirective implements OnInit {
  @Input('changeElePosition') changeElePosition;
  constructor(private element: ElementRef, private renderer: Renderer) { }
  ngOnInit() {
    // console.log(123, this.changeElePosition);
    if (this.changeElePosition[0].twoTitle.length === 1) {
      this.element.nativeElement.className = 'second-title03';
    } else {
      this.element.nativeElement.className = `second-title0${this.changeElePosition[1] + 1}`;
    }
  }
}


@Directive({ selector: '[changeImgPath]' })
export class ChangeImgPathDirective {
  @Input('changeImgPath') changeImgPath;

  constructor(
    private element: ElementRef,
  ) { }
  ngOnChanges() {
    console.log('12312312312');
    this.element.nativeElement.src = this.changeImgPath[0]['pic' + this.changeImgPath[1] + 'path'];
    console.log(this.changeImgPath[0]['pic' + this.changeImgPath[1] + 'path']);
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FaultDiagnosisService } from './fault_diagnosis.service';
import { SkillService } from '../../views/skill/skill.service';
declare const $;

@Component({
  selector: 'fault-diagnosis',
  templateUrl: './fault_diagnosis.component.html',
  styleUrls: ['./fault_diagnosis.component.scss']
})
export class FaultDiagnosisComponent implements OnInit, AfterViewInit, OnChanges {
  dragstartPositionLeft: '';
  dragstartPositionTop: '';
  leftDropAreaList;
  rightDragAreaList;
  answerLeft;
  answerRight;

  @Input('operator') operator;
  @Input('answer') answer;
  @Input('chapter') chapter;
  @Input('rightAnswer') rightAnswer;
  @Output('showRightAnswer') showRightAnswer = new EventEmitter();

  constructor(
    public faultDiagnosisService: FaultDiagnosisService,
    public skillService: SkillService,
  ) { }

  ngOnInit() {
    this.leftDropAreaList = this.operator['left'];
    this.rightDragAreaList = this.operator['right'];
  }
  ngAfterViewInit() {
    if (!this.faultDiagnosisService[this.chapter].isShowAnswer) {
      this.drag();
      this.drop();
    }
  }
  ngOnChanges() {
    this.leftDropAreaList = this.operator['left'];
    this.rightDragAreaList = this.operator['right'];
  }
  drag() {
    $('.right-answer-content').draggable({ containment: '.right-answer-wrap' })

    let draggingSpanStyle = (ui) => {
      let thisText = $(ui.helper[0]).text();
      if (thisText.length < 8) {
        $(ui.helper[0]).css({ 'height': '.18rem', 'lineHeight': '.18rem' })
      } else {
        $(ui.helper[0]).css({ 'height': '.18rem', 'lineHeight': '.09rem' })
      }
    }

    $('.right-drag-area ul li span').draggable({
      revert: true,
      helper: 'clone',
      start(event, ui) {
        $(ui.helper[0]).css('zIndex', '999');
        draggingSpanStyle(ui);
        if ($(ui.helper[0]).html() == '') {
          return;
        }
      },
      drag(event, ui) {
        if ($(ui.helper[0]).html() == '') {
          return;
        }
        // console.log('drag');
      },
      stop(event, ui) {
        // console.log('stop');
        $(ui.helper[0]).css('zIndex', '1');
      }
    });

    $('.left-drop-area p span').draggable({
      revert: true,
      helper: 'clone',
      start(event, ui) {
        $(ui.helper[0]).css('zIndex', '999');
        draggingSpanStyle(ui);
        if ($(ui.helper[0]).html() == '') {
          return;
        }
      },
      drag(event, ui) {
        // console.log('drag');
        if ($(ui.helper[0]).html() == '') {
          return;
        }
      },
      stop(event, ui) {
        // console.log('stop');
        $(ui.helper[0]).css('zIndex', '1');
      }
    });
  }

  drop() {
    let vm = this;
    $('.left-drop-area p').droppable({
      accept: '.right-drag-area ul li span, .left-drop-area p span', // 可拖拽的元素
      tolerance: 'pointer', // 鼠标指针覆盖时判定
      greedy: true, // 父元素无法接收

      // 当一个可接受的 draggable 被拖拽在 droppable上时触发。
      over(event, ui) {
        // console.log('over');
      },
      out(event, ui) {
        // console.log('out');
      },
      drop(event, ui) {
        let _this1 = this;
        // 如果drop的这个地方有人了，就不能再往这放了
        if ($(this).find('span').html() !== '' || $(ui.draggable[0]).html() == '') {
          // 重新添加drag和drop事件
          vm.drag();
          vm.drop();
          return;
        }

        let thisIdType = $(this).find('span').attr('id').split('0')[0];
        let uiDraggableIdType = $(ui.draggable[0]).attr('id').split('0')[0];

        // 判断当前要drop的是一级标题还是二级标题还是三级标题,添加文本内容
        vm.leftDropAreaList[thisIdType].map((m, mIndex, mArr) => {
          if (m.id !== $(this).find('span').attr('id')) return;
          m.content = $(ui.draggable[0]).html();
        });

        let dragEleId = document.getElementById(ui.draggable[0].id);
        // console.log($(`#${ui.draggable[0].id}`).attr('class'), 123123);
        if (!$(dragEleId).attr('class').includes('right-area')) {
          // 判断当前拖动的是一级标题还是二级标题还是三级标题，清空内容
          vm.leftDropAreaList[uiDraggableIdType].map((m, mIndex, mArr) => {
            if (m.id !== $(ui.draggable[0]).attr('id')) return;
            m.content = '';
          });
        } else if ($(dragEleId).attr('class').includes('right-area')) {
          // 当前拖动的是右侧栏里的内容
          // 改变右侧表的数据
          vm.rightDragAreaList.map((m, mIndex, mArr) => {
            // console.log(
            //   `asdf${m.id}asdf`,
            //   `asdf${ui.draggable[0].id}asdf`,
            //   m.id !== ui.draggable[0].id
            // );
            if (m.id !== ui.draggable[0].id) return;
            mArr.splice(mIndex, 1);
          });
        }
        setTimeout(() => {
          // 重新添加drag事件
          vm.drag();
        }, 200)
        // drop后取消掉revert效果
        $(ui.draggable[0]).draggable('option', 'revert', false);

        // console.log('drop');
      }
    });

    $('.right-drag-area ul').droppable({
      accept: '.left-drop-area p span', // 可拖拽的元素
      tolerance: 'pointer', // 鼠标指针覆盖时判定
      greedy: true, // 父元素无法接收

      // 当一个可接受的 draggable 被拖拽在 droppable上时触发。
      over(event, ui) {
        // console.log('over');
      },
      out(event, ui) {
        // console.log('out');
      },
      drop(event, ui) {
        if ($(ui.draggable[0]).html() === '') {
          vm.drag();
          vm.drop();
          return;
        }

        // 判断当前drag的是一级标题还是二级标题还是三级标题
        let uiDraggableIdType = $(ui.draggable[0]).attr('id').split('0')[0];
        vm.leftDropAreaList[uiDraggableIdType].map((m, mIndex, mArr) => {
          if (m.id !== $(ui.draggable[0]).attr('id')) return;
          m.content = '';
        });

        vm.rightDragAreaList.push({
          content: $(ui.draggable[0]).html(),
          id: $(ui.draggable[0]).attr('oldId') + Math.random()
        });

        // console.log($('.right-drag-area li'));
        setTimeout(() => {
          vm.drag();
        }, 200);

        $(ui.draggable[0]).css('zIndex', '1');
        $(ui.draggable[0]).draggable('option', 'revert', false);

        // console.log('drop2');
      }
    });
  }

  submitClick() {
    if (this.faultDiagnosisService[this.chapter].isSubmit) return;
    this.faultDiagnosisService[this.chapter].isSubmit = true;
  }

  showAnswer() {
    if (this.faultDiagnosisService[this.chapter].isShowAnswer) return;
    this.faultDiagnosisService[this.chapter].isShowAnswer = true;

    $('.right-answer-wrap').show();

    this.showRightAnswer.emit(this.chapter);
    console.log(this.skillService.skill01);
  }

  closeFaultDiagnosisWrap(event) {
    $('.right-answer-wrap').hide();
  }
}
