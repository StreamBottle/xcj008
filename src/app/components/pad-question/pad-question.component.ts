import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';
import { PadQuestionService } from './pad-question.service';
declare const $;

// 替换文本指令，遇到$XCJ$替换为input
@Directive({ selector: '[replaceTianKongInput]' })
export class Replace$XCJ$Directive implements OnInit, AfterViewInit {
	@Input() replaceTianKongInput;
	constructor(private element: ElementRef) { }
	ngOnInit() { }
	ngAfterViewInit() {
		let html = this.element.nativeElement.innerText;
		let htmlArr = html.split('$XCJ$');
		this.element.nativeElement.innerText = '';
		htmlArr.map((m, mIndex, mArr) => {
			let span = document.createElement('span');
			span.innerText = m;
			this.element.nativeElement.appendChild(span);
			if (mIndex < mArr.length - 1) {
				let input = document.createElement('input');
				input.type = 'text';
				input.id = this.replaceTianKongInput[mIndex].id;
				input.style.cssText = `border-bottom: 1px solid #000;width: 0.7rem;text-align: center;font-weight:bold;color:blue;`;
				this.element.nativeElement.appendChild(input);
			}
		});
	}
}

// 如果td为空字符串则替换为input
@Directive({ selector: '[replaceKongStringInput]' })
export class ReplaceKongStringDirective implements OnInit, AfterViewInit {
	@Input() replaceKongStringInput;
	constructor(private element: ElementRef) { }
	ngOnInit() { }
	ngAfterViewInit() {
		// console.log(this.element.nativeElement.innerText, 'asdfa;sdlkfja;sldkfj');
		if (this.element.nativeElement.innerText !== '' && this.element.nativeElement.innerText !== '$alphanumeric$') {
			return;
		}
		String.prototype.trim = function () {
			return this.replace(/\s+/g, '');
		};

		if (!this.element.nativeElement.innerText.trim()) {
			let input = document.createElement('input');
			input.type = 'text';
			input.id = this.replaceKongStringInput;
			input.style.cssText = `width: 100%;height: 100%;text-align:center;font-size: .08rem;font-weight:bold;color:blue;`;
			this.element.nativeElement.appendChild(input);
		} else if (this.element.nativeElement.innerText.trim() == '$alphanumeric$') {
			this.element.nativeElement.innerText = '';
			let input = document.createElement('input');
			input.type = 'text';
			// input.onkeyup = function () {
			// 	// console.log($(this).val());
			// 	$(this).val($(this).val().replace(/[^\w\.\/]/gi, ''));
			// };
			input.id = this.replaceKongStringInput;
			input.style.cssText = `width: 100%;height: 100%;text-align:center;font-size: .08rem;font-weight:bold;color:blue;`;
			this.element.nativeElement.appendChild(input);
		}
	}
}

@Component({
	selector: 'pad-question',
	templateUrl: './pad-question.component.html',
	styleUrls: ['./pad-question.component.scss']
})
export class PadQuestionComponent implements OnInit, AfterViewInit, OnDestroy {
	@Input('currentChapter') currentChapter = 'skill'; // 区分章节类型的标识--show
	@Input('childCatalog') childCatalog = ''; // 区分学校端技能和考试下页面的不同的任务
	@Output('repairFault') isRepair = new EventEmitter();
	@Output('isSub') isSub = new EventEmitter();
	score: number = 0; // 总分数
	tipsBox: string = '';
	tipsBoxTimer: any = null;

	currentQuestion = null; // 按照章节类型区分后的试题数组

	ligatureRecordLeftId = null;
	ligatureRecordRightId = null;

	characterA = this.communicationService.communication.adapter.characterA;
	characterB = this.communicationService.communication.adapter.characterB;

	constructor(
		public communicationService: CommunicationService,
		public padQuestionService: PadQuestionService
	) { }

	ngOnInit() {
		// this.setLocalStroage(false);
		console.log(this.characterB.question);
		this.getCurrentQuestion(this.characterB.question);
	}
	ngAfterViewInit() {
		this.draggable();
		this.tableAnswerQuestion();
		this.setEcho();
		setTimeout(() => {
			this.setEcho();
		}, 300);
	}

	// 根据当前章节获取题目
	getCurrentQuestion(questionCollection) {
		if (Array.isArray(questionCollection)) {
			console.log((questionCollection.filter((m, mIndex, mArr) => m.catalog === this.currentChapter))[0]);
			if (questionCollection.filter((m, mIndex, mArr) => m.catalog === this.currentChapter)[0]) {
				this.currentQuestion = questionCollection.filter(
					(m, mIndex, mArr) => m.catalog === this.currentChapter
				)[0].question;
			}
		}
	}

	// 设置characterA
	setCharacterA(characterA) {
		console.log(characterA);
		if (characterA && typeof characterA == 'string') {
			characterA = JSON.parse(characterA);
		}

		if (characterA['score'] && characterA['score'].length !== 0) {
			this.characterA = characterA;
			return;
		}
		console.log('当前没有characterA------');

		this.characterA['progress'] = [];
		this.characterA['score'] = [];

		this.characterB['question'].map((i, iIndex) => {
			let obj2 = Object.assign({}, {
				catalog: i.catalog,
				sumScore: 0,
				score: []
			});

			i['question'].map((k, kIndex) => {
				obj2['score'].push(
					Object.assign(
						{},
						{
							handleArray: [],
							// id: k.id,
							isRight: 0,
							// rate: k.rate,
							optionArray: [],
							questionID: k.id,
							type: k.type
						}
					)
				);
			});
			this.characterA['score'].push(obj2);
		});

		this.characterB['score'].map((i, iIndex) => {
			this.characterA.score.map((k, kIndex) => {
				k['score']
					.filter((l, lIndex) => {
						// console.log(l.questionID, i.questionId);
						return l.questionID === i.questionId;
					})
					.map((m, mIndex) => {
						m.id = i.id;
						m.rate = i.rate;
					});
			});
		});
		console.log(this.characterA);
	}

	/**
   * @param event 获取的DOm元素
   */
	answerQuestion(event) {
		if ($(event).attr('type') == 'radio') {
			$(event).parents('ul').find('input').attr('isCheck', 'false');
			$(event).attr('isCheck', 'true');
		} else if ($(event).attr('type') == 'checkbox') {
			if ($(event).attr('isCheck') == 'true' || $(event).attr('isCheck') == true) {
				$(event).attr('isCheck', 'false');
			} else {
				$(event).attr('isCheck', 'true');
			}
		}
		this.setRight();
	}

	/**
   * 简答题答题
   */
	shortAnswer() {
		this.setRight();
	}

	/**
   * 设置本地缓存---模拟提交回显功能
   * @param isSet 是保存到本地缓存还是读取本地缓存
   */
	setLocalStroage(isSet) {
		// if (isSet) {
		// 	localStorage.characterA = JSON.stringify(this.characterA);
		// } else {
		// 	let characterA = { progress: [], score: [] };
		// 	if (localStorage.characterA) {
		// 		characterA = localStorage.characterA;
		// 	}
		// 	this.setCharacterA(characterA);
		// }
	}

	tableAnswerQuestion() {
		$('pad-question table').find('input').keyup(() => {
			this.setRight();
		})
	}

	// 拖拽题专用
	draggable() {
		let vm = this;
		let drag = () => {
			$('#' + $('.draggable-question').attr('id') + ' .right>div span').draggable({
				helper: 'clone',
				revert: true
			});

			$('#' + $('.draggable-question').attr('id') + ' .left .text-wrap span').draggable({
				helper: 'clone',
				revert: true
			});

			$('.animate01 .dragRight ul li').draggable({
				start() { },
				drag() { },
				stop(ui, event) {
					vm.padQuestionService.recordPosition[event.helper[0].id] = {};
					vm.padQuestionService.recordPosition[event.helper[0].id]['top'] = ui.target.style.top;
					vm.padQuestionService.recordPosition[event.helper[0].id]['left'] = ui.target.style.left;
				}
			});


		};

		let drop = () => {
			$('#' + $('.draggable-question').attr('id') + ' .left .text-wrap span').droppable({
				accept: '#' + $('.draggable-question').attr('id') + ' .right>div span', // 可拖拽的元素
				tolerance: 'pointer', // 鼠标指针覆盖时判定
				greedy: true, // 父元素无法接收
				drop(event, ui) {
					// console.log('drop');
					if ($(ui.draggable[0]).html() === '') {
						drag();
						drop();
						return;
					}
					if ($(this).html() !== '') {
						drag();
						drop();
						return;
					}
					$(ui.draggable[0]).draggable('option', 'revert', false);
					$(ui.draggable[0]).parent().hide();
					$(this).html($(ui.draggable[0]).html());
					$(this).attr('currentAnswerId', ui.draggable[0].id);
					vm.setRight();
				}
			});

			$('#' + $('.draggable-question').attr('id') + ' .right').droppable({
				accept: '#' + $('.draggable-question').attr('id') + ' .left .text-wrap span', // 可拖拽的元素
				tolerance: 'pointer', // 鼠标指针覆盖时判定
				greedy: true, // 父元素无法接收
				drop(event, ui) {
					// console.log('drop');
					$(ui.draggable[0]).draggable('option', 'revert', false);
					if ($(ui.draggable[0]).html() === '') {
						drag();
						drop();
						return;
					}
					$(ui.draggable[0]).html('');
					$(`#${$(ui.draggable[0]).attr('currentAnswerId')}`).parent().show();
					$(ui.draggable[0]).attr('currentAnswerId', $(ui.draggable[0]).attr('id'));
					vm.setRight();
				}
			});
		};
		drag();
		drop();
	}

	/**
   * 连线题答题
   */
	ligatureSelect(event) {

		$(`#${$(event).attr('tdId')}`).prop('checked', true);

		$(event).parents('form').find('input').attr('isCheck', 'false');
		$(`#${$(event).attr('tdId')}`).attr('isCheck', 'true');


		if ($(event).attr('currentPosition') == 'left') {
			this.ligatureRecordLeftId = $(event).attr('tdId');
		} else if ($(event).attr('currentPosition') == 'right') {
			this.ligatureRecordRightId = $(event).attr('tdId');
		}

		let completeDrawLine = this.drawLine(this.ligatureRecordLeftId, this.ligatureRecordRightId);
		if (completeDrawLine) {
			this.ligatureRecordLeftId = null;
			this.ligatureRecordRightId = null;
			$(event).parents('form').find('input').attr('isCheck', 'false');
		}

		this.setRight();
	}

	/**
   * @param ligatureRecordLeftId 左侧id
   * @param ligatureRecordRightId 右侧id
   * 根据当前已经选择的id画线
   */
	drawLine(ligatureRecordLeftId, ligatureRecordRightId) {
		let leftEleX, leftEleY, rightEleX, rightEleY;
		if (ligatureRecordLeftId && ligatureRecordRightId && ligatureRecordRightId !== ligatureRecordLeftId) {
			Array.from($('.ligature-line'))
				.filter((l) => {
					let [a, b] = $(l).attr('id').split('¥XCJ¥');
					return a == ligatureRecordLeftId || b == ligatureRecordRightId;
				})
				.map((m) => {
					$(m).remove();
				});

			$(`#${ligatureRecordLeftId}`).attr('currentAnswerId', $(`#${ligatureRecordRightId}`).attr('id'));

			leftEleX =
				$(`#${ligatureRecordLeftId}+span`)[0].offsetLeft +
				parseInt($(`#${ligatureRecordLeftId}+span`).css('width'), 10);
			leftEleY =
				$(`#${ligatureRecordLeftId}+span`)[0].offsetTop +
				parseInt($(`#${ligatureRecordLeftId}+span`).css('height'), 10) / 2;

			rightEleX = $(`#${ligatureRecordRightId}+span`)[0].offsetLeft;
			rightEleY =
				$(`#${ligatureRecordRightId}+span`)[0].offsetTop +
				parseInt($(`#${ligatureRecordRightId}+span`).css('height'), 10) / 2;

			let aLine = rightEleY - leftEleY;
			let bLine = rightEleX - leftEleX;
			let cLine = Math.sqrt(aLine * aLine + bLine * bLine);
			let rotate = 180 * Math.asin(aLine / cLine) / Math.PI;
			let line = document.createElement('span');
			line.style.cssText = `position:absolute;left:${leftEleX}px;top:${leftEleY}px;transform:rotate(${rotate}deg);width:${cLine}px;display:inline-block;height:2px;background-color:#000;transform-origin:left top;`;
			line.id = `${ligatureRecordLeftId}¥XCJ¥${ligatureRecordRightId}`;
			line.className = 'ligature-line';
			$(`#${ligatureRecordLeftId}`).parents('.ligature-question')[0].appendChild(line);

			$(`#${ligatureRecordLeftId}`).prop('checked', false);
			$(`#${ligatureRecordRightId}`).prop('checked', false);
			// 画线成功
			return true;
		}
		// 画线失败
		return false;
	}

	/**
   * 设置当前答案到characterA，并判断是否是正确答案
   */
	setRight() {
		console.time('12');
		Array.from($('.pad-question>div')).map((m, mIndex, mArr) => {
			this.characterA.score
				.filter((o) => {
					return o.catalog === this.currentChapter;
				})
				.map((i, iIndex, iArr) => {
					// 判断当前是填空选择题----进行答案储存
					i.score.map((p, pIndex, pArr) => {
						if (p.questionID !== $(m).attr('id')) {
							return;
						}
						if ($(m).attr('type') === '10') {
							p.optionArray = [];

							let rightAnswerArr = [];
							let allSelectedArr = [];
							Array.from($(m).find('input[type=number],input[type=text]')).map((f, fIndex, fArr) => {
								let obj = {};
								obj[$(f).attr('id')] = $(f).val();
								p.optionArray.push(obj);
							});
							Array.from(
								$(m).find('li input[type=radio],input[type=checkbox]')
							).map((f, fIndex, fArr) => {
								if ($(f).attr('isCheck') === true || $(f).attr('isCheck') === 'true') {
									allSelectedArr.push($(f).attr('id'));
									p.optionArray.push($(f).attr('id'));
								}
								if ($(f).attr('isRight') === 1 || $(f).attr('isRight') === '1') {
									// console.log($(f).attr('isRight'), 123123);
									rightAnswerArr.push($(f).attr('id'));
								}
							});
							p.isRight = rightAnswerArr.sort().toString() === allSelectedArr.sort().toString() ? 1 : 0;
						} else if ($(m).attr('type') === '1' || $(m).attr('type') === '2') {
							let rightAnswerArr = [];
							let allSelectedArr = [];
							p.optionArray = [];
							Array.from(
								$(m).find('li input[type=radio],input[type=checkbox]')
							).map((f, fIndex, fArr) => {
								if ($(f).attr('isCheck') === true || $(f).attr('isCheck') === 'true') {
									allSelectedArr.push($(f).attr('id'));
									p.optionArray.push($(f).attr('id'));
								}
								if ($(f).attr('isRight') === 1 || $(f).attr('isRight') === '1') {
									rightAnswerArr.push($(f).attr('id'));
								}
							});

							p.isRight = rightAnswerArr.sort().toString() === allSelectedArr.sort().toString() ? 1 : 0;
						} else if ($(m).attr('type') === '11') {
							let rightAnswerArr = [];
							let allSelectedArr = [];
							p.optionArray = [];
							Array.from($(m).find('td input')).map((f, fIndex, fArr) => {
								let obj = {};
								obj[$(f).attr('id')] = $(f).val();
								p.optionArray.push(obj);
							});

							Array.from(
								$(m).find('li input[type=radio],input[type=checkbox]')
							).map((f, fIndex, fArr) => {
								if ($(f).attr('isCheck') === true || $(f).attr('isCheck') === 'true') {
									allSelectedArr.push($(f).attr('id'));
									p.optionArray.push($(f).attr('id'));
								}
								if ($(f).attr('isRight') === 1 || $(f).attr('isRight') === '1') {
									rightAnswerArr.push($(f).attr('id'));
								}
							});

							p.isRight = rightAnswerArr.sort().toString() === allSelectedArr.sort().toString() ? 1 : 0;
						} else if ($(m).attr('type') === '3') {
							p.optionArray = [];
							Array.from($(m).find('td input')).map((f, fIndex, fArr) => {
								let obj = {};
								obj[$(f).attr('id')] = $(f).val();
								p.optionArray.push(obj);
							});
						} else if ($(m).attr('type') === '7') {
							p.optionArray = [];
							let allSelectedArr = [];
							Array.from($(m).find('.content-left .text-wrap span')).map((f, fIndex, fArr) => {
								let obj = {};
								obj[$(f).attr('id')] = $(f).attr('currentAnswerId');
								p.optionArray.push(obj);

								if ($(f).attr('rightId') == $(f).attr('currentAnswerId')) {
									allSelectedArr.push($(f).attr('rightId'));
								}
								p.isRight = allSelectedArr.length == fArr.length ? 1 : 0;
							});
						} else if ($(m).attr('type') === '6') {
							p.optionArray = [];
							let allSelectedArr = [];
							Array.from($(m).find('.line-area-left input')).map((f, fIndex, fArr) => {
								let obj = {};
								obj[$(f).attr('id')] = $(f).attr('currentAnswerId');
								p.optionArray.push(obj);
								if ($(f).attr('rightId') == $(f).attr('currentAnswerId')) {
									allSelectedArr.push($(f).attr('rightId'));
								}

								// console.log(allSelectedArr.length, fArr, f);
								p.isRight = allSelectedArr.length == fArr.length ? 1 : 0;
							});
						} else if ($(m).attr('type') === '8') {
							p.optionArray = [];
							p.optionArray[0] = $(m).find('textarea').val();
							// console.log(p.optionArray[0]);
							// console.log(p.optionArray);
						}
					});
				});
		});
		console.timeEnd('12');
		// console.log(this.characterA);
		this.setLocalStroage(true);
		this.sumScore();
	}

	/**
   * 设置回显功能---在跳转路由或二次进入页面时已经做过的答案
   */
	setEcho() {
		console.time('13');
		Array.from($('.pad-question>div')).map((a, aIndex, aArr) => {
			this.characterA.score
				.filter((m, mIndex, mArr) => {
					return m.catalog === this.currentChapter;
				})
				.map((l, lIndex, lArr) => {
					// console.log(l);
					l.score.map((p, pIndex, pArr) => {
						// console.log(p.type);
						p.optionArray.map((i, iIndex, iArr) => {
							if (p.type == '6') {
								let obj = Object['entries'](i);
								let [ligatureRecordLeftId, ligatureRecordRightId] = [obj[0][0], obj[0][1]];
								// console.log(ligatureRecordLeftId, ligatureRecordRightId);
								this.drawLine(ligatureRecordLeftId, ligatureRecordRightId);
							} else if (p.type == '7') {
								let obj = Object['entries'](i);
								$(`#${obj[0][0]}`).attr('currentAnswerId', obj[0][1]).html($(`#${obj[0][1]}`).html());
								// console.log($(`#${obj[0][1]}`));
								if (obj[0][0] !== obj[0][1]) {
									$(`#${obj[0][1]}`).parent().hide();
								}
							} else if (p.type == '8') {
								// console.log(p);
								$(`#${p.questionID}`).find('textarea').val(p.optionArray[0]);
							} else {
								if (i instanceof Object) {
									let obj = Object['entries'](i);
									// 填空表格题回显
									$(`#${obj[0][0]}`).val(obj[0][1]);
								} else if (typeof i == 'string') {
									// 选择题回显
									$(`#${i}`).prop('checked', true);
									$(`#${i}`).attr('isCheck', true);
								}
							}
						});
					});
				});
		});


		let recordQuestion = this.padQuestionService.recordPosition;
		for (let [key, value] of Object['entries'](recordQuestion)) {
			$('#' + key).css({ "top": value.top, "left": value.left });
		}
		console.timeEnd('13');
	}

	/**
   * 计算当前总分,按章节计算得分
   */
	sumScore() {
		// 计算当前总分,按章节进行计算
		let chapter = () => {
			this.characterA.score
				.filter((m, mIndex) => {
					// 当前章节
					return m.catalog === this.currentChapter;
				})
				.map((i, iIndex) => {
					i.sumScore = 0;
					i.score.map((n, nIndex) => {
						// console.log('%c' + '当前题目id------' + n.id + '++++++当前是否正确isRight------' + n.isRight + '+++++当前题目分数------' + n.rate, 'color:blue');
						if (n.isRight && n.rate) {
							i.sumScore += parseInt(n.rate, 10);
						}
					});
				});
		};

		// 计算所有章节总分加起来的总分
		let sumAllScore = () => {
			// this.communicationService.communication.adapter.score = 0;
			this.score = 0;
			this.characterA.score.map((i, iIndex) => {
				// this.communicationService.communication.adapter.score += parseInt(i.sumScore, 10);
				this.score += parseInt(i.sumScore, 10);
			});
		};
		chapter();
		sumAllScore();
		// console.log('');
		// console.log('%c' + '当前总分+++++++' + this.score + '___adapter', 'color:red');
	}

	/**
   * 提交答案
   */
	submitQuestion(tipParam) {
		// console.log('123asdfasdf');
		this.communicationService.commit('commit');
		this.tipsBox = tipParam;
		this.tipsBoxTimer = setTimeout(() => {
			this.tipsBox = '';
		}, 1000)

		if (this.childCatalog) {
			let obj = {
				skill01: 'moni1',
				skill02: 'moni2',
				skill03: 'moni3',
				skill04: 'moni4',
				skill05: 'moni5',
				exam01: 'exam1'
			};

			Array.from($('.pad-question>div')).map((a, aIndex, aArr) => {
				let isContain = []; // 不要被后边的0覆盖掉
				this.characterA.score
					.filter((m, mIndex, mArr) => {
						return m.catalog === this.currentChapter;
					})
					.map((l, lIndex, lArr) => {
						l.score.map((p, pIndex, pArr) => {
							if ($(a).attr('id') == p.questionID) {
								// console.log(isContain);
								if (!isContain['includes'](1)) {
									isContain.push(p.isRight);
									this.isRepair.emit([p.isRight, obj[this.childCatalog]]);
								}

							}
						});
					});
			});
			this.isSub.emit();
		}
	}

	ngOnDestroy() {
		clearTimeout(this.tipsBoxTimer);
	}
}
