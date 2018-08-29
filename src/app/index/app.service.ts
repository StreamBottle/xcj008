import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { appConfig as confMock } from "../../app-config.mock";
import "rxjs/add/operator/toPromise";
import { Resource } from "../../interface/resources";
import { DataResolver } from "./data.resolver";

declare const $;

@Injectable()
export class AppService {
  getActivityInfoObj; // 缓存时没有域名打开时通过平台获取域名及课件所需要的参数
  // 判断一级导航现在在哪个位置
  OneNavState = 0;
  clearTimer = null;
  // 交表动画清除
  jiaoBiao: boolean = false;
  currentRoute = "scene";
  bushou = false;
  progressData: any = {
    describeFlag: 1
  };
  upLoadAvatar: string = ""; // 上传的头像显示
  userInfo: any = ""; // 当前登录账号信息
  loginFlag: boolean = false; // 登录页面显示
  logoutDisplay: string = ""; // 注销页面显示
  loginOutFlag: boolean = false; // 退出提示框显示
  lockTask: boolean = false; // 锁定状态的弹出框
  syncTask: boolean = false; // 同步状态的弹出框
  cancellationFlag: boolean = false; // 注销页面显示
  registerFlag: boolean = false; // 注册页显示

  forgetPassword: boolean = false; // 忘记密码页面显示

  controlled: boolean = false; // 设备同步或异步标志
  isDisabled: boolean = false; // 底部导航是否禁用；

  sceneProgress: number = 1; // 情景记录的页码;
  knowledgeProgress: number = 4;
  skillProgress: number = 12;
  examProgress: number = 35;
  sceneIsPass: boolean = true;
  knowledgeIsPass: boolean = true;
  skillIsPass: boolean = true;
  examIsPass: boolean = true;

  skillFault01IsGood = "0";
  skillFault02IsGood = "0";
  skillFault03IsGood = "0";
  examFault01IsGood = "0";

  moni1IsOk: boolean = false;
  moni2IsOk: boolean = false;
  moni3IsOk: boolean = false;
  moni4IsOk: boolean = false;
  moni5IsOk: boolean = false;
  exam1IsOk: boolean = false;

  VCUA: number = 0.4; // 0.4~2.0的取值范围;
  VCUB: number = 0.8; // 0.8~4.1的取值范围;
  VCUC: number = 0.6; // 0.6~3.3的取值范围;
  VCUD: number = 0.2; // 0.2~1.5的取值范围;

  currentFault: string = "0";
  courseParams = {
    activeQuestion: "",
    videoQuestion: "",
    prevRouter: "", // 保存上一个路由
    indexShow: true
  };

  prevupORdown: boolean = true; // 技能页面上面插座的拔下或者插上
  nextupORdown: boolean = true; // 技能页面下面插座的拔下或者插上
  constructor(private http: Http, private router: Router) { }

  // 将课件内导航颜色初始化
  navColorInit() {
    $(".scene").css({ borderBottomColor: "rgb(80,80,80)" });
    $(".knowledge").css({ borderBottomColor: "rgb(80,80,80)" });
    $(".skill").css({ borderBottomColor: "rgb(80,80,80)" });
    $(".examination").css({ borderBottomColor: "rgb(80,80,80)" });
  }

  routerTurn() {
    if (this.courseParams.prevRouter && /courseprepare/.test(this.courseParams.prevRouter)) {
      this.router.navigate([this.courseParams.prevRouter]);
      return;
    }
    this.courseParams.prevRouter = "";

    this.router.navigate(["home"]);
  }

  setTextAnimate(status, fun) {
    // tslint:disable-next-line:switch-default
    switch (status) {
      case "open":
        this.dotestAnimate = fun;
        break;
      case "close":
        this.closetestAnimate = fun;
        break;
    }
  }

  // 本地打开活动时，获取平台传过来的参数---id，courseNumber，domainUrl，courseId
  getActivityInfo(param) {
    this.getActivityInfoObj = param;
  }

  /**
   * 
   * @param callbackIsDo 条件执行，是否能继续执行callback函数
   * @param callback 条件执行，执行回调函数
   */
  setIntervalCallback(name, callbackIsDo, callback) {
    if (this.getActivityInfoObj) {
      callback && callback();
    } else {
      let isDo = () => {
        // console.log(callbackIsDo);
        if (callbackIsDo()) {
          setTimeout(() => {
            isDo();
          }, 100);
          return false;
        }

        console.log(name);
        // tslint:disable-next-line:no-unused-expression
        callback && callback();
      }
      isDo();
    }
  }
  // setPrincipleAnimate(fun){
  //   this.InitializePrinciple = fun;
  // }
  // InitializePrinciple(){
  // }
  dotestAnimate() { }
  closetestAnimate() { }

  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // obdscanPosition(top, left) {
  //   let setObdscanPosition = null;
  //   xxxx.emit("event", "setObdscanPosition(" + top + "-" + left + ")")
  // }

  characterC;
  // 点击技能的二级导航时的事件处理
  startStudyEventList = {};
  startStudyEventAdd(param: string, fn) {
    this.startStudyEventList[param] = fn;
  }
  startStudyEvent() {
    let arr = Object['entries'](this.startStudyEventList);
    console.log('chengongdiaoyong');
    arr.map((item) => {
      let [key, fn] = item;
      if (key) {
        fn.call(this);
      }
    })
  }

}
