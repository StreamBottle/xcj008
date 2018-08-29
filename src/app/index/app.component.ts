import { Router } from '@angular/router';
import {
  Component,
  ViewEncapsulation,
  ElementRef,
  OnInit,
  OnDestroy
} from '@angular/core';
import { AppService } from './app.service';
import { flyIn } from '../animations/index';
import { ObdscanService } from '../components/obdscan/index';
import { DashboardService } from '../components/dashboard/index';
import { GearPanelService } from '../components/gear_panel/gear_panel.service';
import { MultimeterService } from '../components/multimeter/index';
import { SimulationService } from '../components/simulation';
import { CommunicationService } from '../components/communication';
import { HandleErrorService } from '../components/handle_error';
import { OscilloscopeService } from '../components/oscilloscope';
import { CoursePrepareService } from '../views/course_prepare';

import { ajax } from '../../AJAX/index';

declare let $: any;
declare const io: any;

require('./app.component.css');

@Component({
  selector: 'support-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
  animations: [flyIn]
})
export class AppComponent implements OnInit, OnDestroy {
  rightNavIsShow: boolean = false; // 右侧导航显示
  rightNavAnimation: string = ''; // 右侧导航动画
  holdAllFlag: boolean = false; // 工具箱子内容
  controlCenterFlag: boolean = false; // 控制中心下面的子内容
  indexBgFlag: boolean = true; // 首页显示
  loginFlag: boolean = false; // 登录也显示
  curLoginIsSingleOrDouble: boolean = true;
  promptInfoName: string = ''; // 注册姓名提示信息
  promptInfoUserName: string = ''; // 注册身份证提示信息
  promptInfoPassWord: string = ''; // 注册密码提示信息
  promptInfoDubPassWord: string = ''; // 两次输入的密码是否一致提示信息
  promptInfoCompany: string = ''; // 注册单位提示信息
  promptInfoPosition: string = ''; // 注册职位提示信息
  loginPromptInfoUserName: string = ''; // 单人模式登录身份证号码提示信息
  loginPromptInfoPassWord: string = ''; // 单人登录密码提示信息
  doubleLeftLoginPromptInfo: string = ''; // 双人模式左侧身份证号码和密码提示信息
  doubleRightLoginPromptInfo: string = ''; // 双人模式右侧身份证号码和密码提示信息

  promptInfoNameFlag: boolean = false; // 注册姓名标志
  promptInfoUserNameFlag: boolean = false; // 注册身份证标志
  promptInfoPassWordFlag: boolean = false; // 注册密码提示标志
  promptInfoDubPassWordFlag: boolean = false; // 注册第二次密码提示标志

  // tslint:disable-next-line:max-line-length
  constructor(
    public router: Router,
    public obdscanService: ObdscanService,
    public dashboardService: DashboardService,
    public gearPanelService: GearPanelService,
    public multimeterService: MultimeterService,
    public appService: AppService,
    private simulationService: SimulationService,
    private communicationService: CommunicationService,
    public handleErrorService: HandleErrorService,
    public oscilloscopeService: OscilloscopeService,
    public coursePrepareService: CoursePrepareService
  ) { }
  ngOnInit() {
    window['getActivityInfo'] = (param) => {
      return this.appService.getActivityInfo(param);
    };
    window['accidentallyClosed'] = (param) => {
      return this.accidentallyClosed();
    };

  }

  accidentallyClosed() {
    this.communicationService.communication.commit('exit');
  }

  ngAfterViewInit() {
    this.dragTestDiv();
    this.appService.setIntervalCallback('adapterCommunication',
      () => {
        return !window.location.host && !this.appService.getActivityInfoObj;
      }, () => {

        this.communicationService.init(); // 通信初始化
        this.coursePrepareService.characterCStandingTimeArr = this.coursePrepareService.exportCharacterCStandingTime();

        $('.scene').css({ borderBottomColor: 'red' });
        this.indexBgFlag = false;
        this.appService.loginFlag = true;
        setInterval(() => {
          this.dashboardService.checkSpeed(
            this.dashboardService.Mout.Out1DrMotor_x_VehSpeed_x_x
          );
        }, 120);
        console.log(1231231111111);
        this.router.navigate(['courseprepare/scene']);

      });
  }

  // 组件销毁
  ngOnDestroy() {
    this.appService.lockTask = false;
  }

  dragTestDiv() {
    $('.test-position').draggable({
      containment: '',
      stop(ui, event) {
        console.log(ui.pageX - 10 + '++++' + (ui.pageY - 41));
      }
    });
  }
}
