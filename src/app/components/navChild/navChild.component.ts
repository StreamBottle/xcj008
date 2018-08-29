/*
 * @Author: nan.wang
 * @Date: 2018-05-24 17:08:19
 * @LastEditors: nan.wang
 * @LastEditTime: 2018-05-24 17:09:13
 * @Description: 四级导航跳转组件
 */

import { Component, OnInit, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { flyIn, halo } from '../../animations';
import { AppService } from '../../index/app.service';
import { MultimeterService } from '../../components/multimeter';
import { DashboardService } from '../../components/dashboard';
import { CoursePrepareComponent } from '../../views/course_prepare/course_prepare.component';
import { CoursePrepareService } from '../../views/course_prepare/course_prepare.service';
declare var $: any;

@Component({
	selector: 'app-navchild',
	templateUrl: './navChild.component.html',
	styleUrls: ['./navChild.component.scss'],
	animations: [flyIn, halo]
})
export class NavChildComponent implements OnInit {
	@Input() arr: [number];
	constructor(
		public appService: AppService,
		public coursePrepareComponent: CoursePrepareComponent,
		public coursePrepareService: CoursePrepareService,
		public multimeterService: MultimeterService,
		public dashboardService: DashboardService,
	) { }

	ngOnInit() { }
	/**
   * 传递进来的参数等于要跳转到的页码数;
   * @param num 接收组件传递进来的页码数
   */
	pageShow(num: number): void {
		$('.skill-circuit').hide();
		this.appService.progressData.describeFlag = num;
		this.dashboardService.stalls = 0;
		this.coursePrepareComponent.clearNumber();
		this.dashboardService.dashboardCurrentState = 1;
		this.dashboardService.isFlag = false;
		// this.multimeterService.Mdata.multimeter();
		this.coursePrepareService.closeAll();
		if (
			this.appService.progressData.describeFlag !== 12 ||
			this.appService.progressData.describeFlag !== 16 ||
			this.appService.progressData.describeFlag !== 22 ||
			this.appService.progressData.describeFlag !== 26
		) {
			this.multimeterService.Mdata.multimeterblackRecover();
			this.multimeterService.Mdata.multimeterredRecover();
			this.multimeterService.Mdata.closemultimeter();
			this.coursePrepareService.closeTool('multimeters');
			this.coursePrepareService.platformRouterTurn(['tool', 'controlCenter'], false);
		}
		if (num === 15) {
			this.appService.currentFault = '1';
			setTimeout(() => {
				$('.bgpic-circuit').css('backgroundImage', 'url(./assets/images/skill/1.png)');
			})
		} else if (num === 21) {
			this.appService.currentFault = '2';
			setTimeout(() => {
				$('.bgpic-circuit').css('backgroundImage', 'url(./assets/images/skill/5.png)');
			})
		} else if (num === 27) {
			this.appService.currentFault = '3';
			setTimeout(() => {
				$('.bgpic-circuit').css('backgroundImage', 'url(./assets/images/skill/9.png)');
			})
		} else if (num === 33) {
			this.appService.currentFault = '4';
			setTimeout(() => {
				$('.bgpic-circuit').css('backgroundImage', 'url(./assets/images/skill/13.png)');
			})
		} else if (num === 39) {
			this.appService.currentFault = '5';
			setTimeout(() => {
				$('.bgpic-circuit').css('backgroundImage', 'url(./assets/images/skill/17.png)');
			})
		}
	}
}
