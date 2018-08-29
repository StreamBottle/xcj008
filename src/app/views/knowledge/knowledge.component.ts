import { Component, OnInit, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { AppService } from '../../index/app.service';
import { flyIn } from '../../animations/index';
// import { setInterval } from 'timers';
import { CoursePrepareService } from '../course_prepare/course_prepare.service';
import { transition, trigger, state, style, animate, group } from '@angular/animations';
declare const $;
@Component({
	selector: 'magotan-knowledge',
	providers: [],
	templateUrl: './knowledge.component.html',
	styleUrls: ['./knowledge.component.scss'],
	animations: [flyIn]
})
export class KnowledgeComponent implements OnInit, OnDestroy {
	abc: string = 'inactive';
	@ViewChild('hua2') hua2;
	@ViewChild('hua1') hua1;
	@ViewChild('hua3') hua3;

	public data1: any = {
		arr: [
			// tslint:disable-next-line:max-line-length
			'为了最大限度的保证信号的可靠性，在加速踏板模块处通常安装两个加速踏板位置传感器。动力控制单元通过两个加速踏板位置传感器的信号识别出加速踏板的位置。'
		]
	};
	public data2: any = {
		arr: [
			// tslint:disable-next-line:max-line-length
			'滑动变阻式加速踏板传感器采用串联电阻的分压原理工作。请操作加速踏板，查看信号电压如何变化。'
		]
	};
	public data3: any = {
		arr: [
			// tslint:disable-next-line:max-line-length
			'霍尔式加速踏板位置传感器主要有霍尔元件、以及与与加速踏板共同运动的永久磁铁组成。当踩下加速踏板时，磁场跟随踏板转动，使通过霍尔元件的磁场发生变化，从而产生不同的霍尔电压输送到控制模块。请操作加速踏板，查看传感器如何工作。'
		]
	};
	public data4: any = {
		arr: [
			// tslint:disable-next-line:max-line-length
			'加速踏板位置传感器内部通常集成两个相关联的信号发生装置检测踏板位置。请操作加速踏板拉杆，查看示波器中的信号电压有何特点。'
		]
	};

	sceneLeftNav: boolean = false;
	sceneLeftNavAnimation: string = '';
	pageNum: number = this.appService.progressData['describeFlag']; // 显示当前页数
	// 概述 params
	gaishupageNum: number = 0; // 显示当前概述页数
	// 同步电机结构弹框 params
	yongcijiegouPrompt: number = 100; // 同步电机结构中弹框，共三个
	// 异步电机params
	yibudianjiyuanliRotate: number = 0; // 异步电机的旋转角度
	yibudianjiyuanliRotateTime: any = undefined;

	// 诊断params
	zhenduanlistShow01: number = 100;
	zhenduanContentShow01: number = 1;
	zhenduanlistShow02: number = 0;
	zhenduanContentShow02: number = 0;
	zhenduanlistShow03: number = 0;
	zhenduanContentShow03: number = 0;
	zhenduanVideoPrompt: number = 0; // 弹出相应的视频参数

	constructor(
		public appService: AppService,
		private zone: NgZone,
		public coursePrepareService: CoursePrepareService
	) { }

	// 生命周期钩子函数
	ngOnInit() {
		setTimeout(() => {
			this.alternateLight();
		}, 10);
	}
	/**
   * 动画测试
   */
	anim() {
		this.abc = this.abc === 'inactive' ? 'active' : 'inactive';
	}

	sceneLeftNavShow() {
		$('.arrowL').hide();
		this.sceneLeftNav = true;
		this.sceneLeftNavAnimation = 'sceneLeft';
	}
	closeSceneLeftNav() {
		$('.arrowL').show(800);
		setTimeout(() => {
			this.sceneLeftNav = false;
		}, 100);
		this.sceneLeftNavAnimation = 'sceneRight';
	}
	/**
   * 点击左侧导航，切换当前显示的第几个目录
   * num 传入的参数
   */
	pageShow(num) {
		this.coursePrepareService.closeAll();
		if (num === 4) {
			this.coursePrepareService.scroll('.tyre-trail7', 1000, 'up');
		}
		this.appService.progressData.describeFlag = num;
		this.appService.knowledgeProgress = num;
		this.yongcijiegouPrompt = 100;
		clearInterval(this.yibudianjiyuanliRotateTime);
		// recover概述页面的初始值
		this.gaishupageNum = 0;
		// 同步电机结构弹框 params
		// recover 异步电机原理页面的初始值
		this.yibudianjiyuanliRotate = 0; // 异步电机的旋转角度
		this.yibudianjiyuanliRotateTime = undefined;
		// 恢复诊断页面的初始值
		this.zhenduanlistShow01 = 100;
		this.zhenduanContentShow01 = 1;
		this.zhenduanlistShow02 = 0;
		this.zhenduanContentShow02 = 0;
		this.zhenduanlistShow03 = 0;
		this.zhenduanContentShow03 = 0;
		this.zhenduanVideoPrompt = 0; // 弹出相应的视频参数
	}

	/**
   * 概述页当前显示的是第几页，共三页，用于下一页点击
   */
	gaishupagenumAdd() {
		if (this.gaishupageNum >= 1) {
			return;
		}
		this.gaishupageNum = this.gaishupageNum + 1;
	}

	/**
   * 概述页当前显示的是第几页，共三页，用于下一页点击
   */
	gaishupagenumSub() {
		if (this.gaishupageNum <= 0) {
			return;
		}
		this.gaishupageNum = this.gaishupageNum - 1;
	}
	// 旋转变压器原理上一页和下一页
	nextORprevPage(str1, str2) {
		$('.' + str1).css('display', 'block');
		$('.' + str2).css('display', 'none');
	}
	/**
   * 点击故障原因诊断按钮
   * @param param 诊断参数
   */
	zhenduantankuang01(param) {
		this.zhenduanlistShow01 = param;
		if (this.zhenduanlistShow02 === 0) {
			this.zhenduanlistShow02 = 100;
		}
	}
	/**
   * 点击检测方法诊断按钮
   * @param param 诊断参数
   */
	zhenduantankuang02(param) {
		this.zhenduanlistShow02 = param;
		if (this.zhenduanlistShow03 === 0) {
			this.zhenduanlistShow03 = 100;
		}
	}
	/**
   * 点击标准值诊断按钮
   * @param param 诊参数
   */
	zhenduantankuang03(param) {
		this.zhenduanlistShow03 = param;
	}
	/**
   * 点击故障原因诊断按钮隐藏框
   * @param param 诊断参数
   */
	zhenduantankuangHide01(param) {
		this.zhenduanlistShow01 = param;
	}
	/**
   * 点击检测方法诊断按钮隐藏框
   * @param param 诊断参数
   */
	zhenduantankuangHide02(param) {
		this.zhenduanlistShow02 = param;
	}
	/**
   * 点击标准值诊断按钮隐藏框
   * @param param 诊参数
   */
	zhenduantankuangHide03(param) {
		this.zhenduanlistShow03 = param;
	}

	/**
   *
   * @param param 点击诊断检测方法中视频按钮弹出对应的视频弹框
   */
	zhenduanPrompt(param) {
		this.zhenduanVideoPrompt = param;
	}

	showVideo(param) {
		$('.' + param).css('display', 'block');
	}

	// 概述页面三根线闪烁
	alternateLight() {
		setInterval(() => {
			if ($('.line6').css('display') == 'none') {
				$('.line4').hide();
				$('.line5').show();
				$('.line6').show();
			} else if ($('.line4').css('display') == 'none') {
				$('.line4').show();
				$('.line5').hide();
				$('.line6').show();
			} else if ($('.line5').css('display') == 'none') {
				$('.line4').show();
				$('.line5').show();
				$('.line6').hide();
			} else {
				$('.line4').hide();
				$('.line5').show();
				$('.line6').show();
			}
		}, 300);
	}
	ngOnDestroy() {
		clearInterval(this.yibudianjiyuanliRotateTime);
	}

	onZhenduan(n: number) {
		switch (n) {
			case 1:
				$('.yuanyin').show();
				$('.btn2').show();
				break;
			case 2:
				$('.fangfa').show();
				$('.btn3').show();
				break;
			case 3:
				$('.zhi').show();
				break;
			default:
				break;
		}
	}

	videoMethods(params: number) {
		$('#video_warp').css('display', 'block');
		// $('#close').show();
		switch (params) {
			case 1:
				$('#video1').show();
				$('#video2').hide();
				break;
			case 2:
				$('#video2').show();
				$('#video1').hide();
				break;
			default:
				break;
		}
	}

	closeVideo(ev) {
		$('#video_warp').css('display', 'none');
	}

	ngAfterViewInit() {
		this.appService.setIntervalCallback('sceneInit',
			() => {
				return !window.location.host && !this.appService.getActivityInfoObj;
				// return false;
			}, () => {
				this.coursePrepareService.setStandingTime(this.appService.progressData.describeFlag, true, false);
			})
	}
}
