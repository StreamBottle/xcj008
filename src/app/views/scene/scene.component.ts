import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from '../../index/app.service';
import { flyIn } from '../../animations/index';
import { CoursePrepareService } from '../course_prepare/course_prepare.service';

declare var $: any;

@Component({
	selector: 'magotan-scene',
	providers: [],
	templateUrl: './scene.component.html',
	styleUrls: ['./scene.component.scss'],
	animations: [flyIn]
})
export class SceneComponent implements OnInit {
	sceneLeftNav: boolean = false;
	sceneLeftNavAnimation: string = '';
	pageNum: number = 1;
	constructor(
		private appService: AppService,
		private zone: NgZone,
		public coursePrepareService: CoursePrepareService
	) { }

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
		console.log(this.sceneLeftNav);
	}
	pageShow(num) {
		let isAllowTurn = this.coursePrepareService.isAllowClickTurn(num);
		console.log(isAllowTurn, num, '11111');
		if (!isAllowTurn) return;
		this.coursePrepareService.setStandingTime(this.appService.progressData.describeFlag, false, true);
		this.appService.progressData.describeFlag = num;
		this.coursePrepareService.setStandingTime(this.appService.progressData.describeFlag, true, false);
		this.coursePrepareService.closeAll();
		switch (num) {
			case 1:
				this.appService.isDisabled = true; // 底部导航启用
				break;
			case 2:
				this.appService.isDisabled = false; // 底部导航禁用
				break;
			case 3:
				this.appService.isDisabled = false; // 底部导航禁用
				break;
			default:
				return;
		}
		this.appService.sceneProgress = num;
		this.coursePrepareService.platformRouterTurn(['tool', 'controlCenter'], false);
	}

	// 生命周期钩子函数
	ngOnInit() { }

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
