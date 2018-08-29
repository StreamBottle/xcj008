import { Injectable } from "@angular/core";
import { AppService } from "../../index/app.service";
declare var $: any;
@Injectable()
export class DashboardService {
  // tslint:disable-next-line:variable-name
  dashboardCurrentState = 1;
  isFlag = false;
  constructor(public appService: AppService) {}
  Mint = {
    In1NER_APP_NO1_x_x: "16", // 油门踏板信号
    In1NER_x_BrakeSig_x_x: "0", // 制动踏板信号
    In1Mot_Gear_Signal_x_x: "0", // 档位信号
    In1NER_IgnKey_LOCK_x_x: "1", // 点火LOCK档位
    In1NER_IgnKey_ON_x_x: "0" // on
  };
  // tslint:disable-next-line:variable-name
  Mout = {
    Out1NER_x_LED_ABS_Jud: "0", // ABS灯输出
    Out1NER_x_LED_Brake_Jud: "0", // 驻车制动灯输出
    Out1NER_x_LED_SafeBag_Jud: "0", // 安全气囊灯输出
    Out1NER_x_LED_MIL_Jud: "0", // 发动机故障灯输出
    Out1NER_x_LED_OilPre_Jud: "0", // 油压灯输出
    Out1NER_x_LED_BATTFault_Jud: "0", // 蓄电池灯输出
    Out1NER_x_LED_SafeBelt_Jud: "0", // 安全带灯输出
    Out1NER_x_LED_BrakLamp_Jud: "", // 制动液位灯
    Out1DrMotor_x_Power_x_x: "0", // 功率表指针参数
    Out1DrMotor_x_VehSpeed_x_x: 0, // 车速
    qudongdianjifault: "0"
  };
  dashboardShowFlag = false;
  stalls = 0; // 档位在lock档
  /**
   * 储存lock档位需要执行哪些外部方法
   *
   *
   * @memberOf DashboardService
   */
  lockGear = [];
  /**
   * lock档位是否执行自有的任务
   *
   *
   * @memberOf DashboardService
   */
  lockGearContinue: boolean = true;
  /**
   * lock档位执行那些外部方法的下标
   *
   *
   * @memberOf DashboardService
   */
  lockGearIndex: number = 0;

  /**
   * 储存on档位需要执行哪些外部方法
   *
   *
   * @memberOf DashboardService
   */
  onGear = [];
  /**
   * on档位执行那些外部方法的下标
   *
   *
   * @memberOf DashboardService
   */
  onGearIndex: number = 0;
  /**
   * lock档位是否执行自有的任务
   *
   *
   * @memberOf DashboardService
   */
  onGearContinue: boolean = true;
  /**
   * 设置仪表需要在哪个档位执行外部的什么方法
   *
   * @param {any} gear
   * @param {any} fun
   *
   * @memberOf DashboardService
   */
  setGearsFun(gear, fun) {
    switch (gear) {
      case "lock":
        this.lockGear[this.lockGearIndex] = fun;
        this.lockGearIndex += 1;
        // console.log(this.lockGear);
        break;
      case "on":
        this.onGear[this.onGearIndex] = fun;
        this.onGearIndex += 1;
        // console.log(this.onGear);
        break;
      default:
        break;
    }
  }

  /**
   * lock档位需要执行的哪些方法
   *
   *
   * @memberOf DashboardService
   */
  lockGearFun() {
    // tslint:disable-next-line:forin
    for (let i in this.lockGear) {
      this.lockGear[i]();
    }
  }
  /**
   * on档位需要执行的哪些方法
   *
   *
   * @memberOf DashboardService
   */
  onGearFun() {
    // tslint:disable-next-line:forin
    for (let i in this.onGear) {
      this.onGear[i]();
    }
  }
  /**
   * 储存车速为零需要执行哪些外部方法
   *
   *
   * @memberOf DashboardService
   */
  // tslint:disable-next-line:member-ordering
  speedIsZero = [];
  /**
   * 车速为零执行那些外部方法的下标
   *
   *
   * @memberOf DashboardService
   */
  // tslint:disable-next-line:member-ordering
  speedIsZeroIndex: number = 0;
  /**
   * 设置速度为固定值需要在哪个档位执行外部的什么方法
   *
   * @param {number} num
   * @param {any} fun
   *
   * @memberOf DashboardService
   */
  setSpeedIsFixedFun(num, fun) {
    switch (num) {
      case 0:
        this.speedIsZero[this.speedIsZeroIndex] = fun;
        this.speedIsZeroIndex += 1;
        break;
      default:
        break;
    }
  }
  /**
   * 速度为零需要执行的哪些方法
   *
   *
   * @memberOf DashboardService
   */
  SpeedIsZeroFun() {
    // tslint:disable-next-line:forin
    for (let i in this.speedIsZero) {
      this.speedIsZero[i]();
    }
  }
  // tslint:disable-next-line:member-ordering
  oldSpeed = ["test", "teat"];
  // tslint:disable-next-line:member-ordering
  oldSpeedIndex: number = 1;
  /**
   * 储存车速不变时需要执行哪些外部方法
   *
   *
   * @memberOf DashboardService
   */
  // tslint:disable-next-line:member-ordering
  speedIsRack = [];
  /**
   * 车速不变时执行那些外部方法的下标
   *
   *
   * @memberOf DashboardService
   */
  // tslint:disable-next-line:member-ordering
  speedIsRackIndex: number = 0;
  /**
   * 储存车速不变时需要执行哪些外部方法
   *
   *
   * @memberOf DashboardService
   */
  // tslint:disable-next-line:member-ordering
  followSpeed = [];
  /**
   * 车速不变时执行那些外部方法的下标
   *
   *
   * @memberOf DashboardService
   */
  // tslint:disable-next-line:member-ordering
  followSpeedIndex: number = 1;
  /**
   * 设置速度在某个状态时需要在哪个档位执行外部的什么方法
   *
   * @param {any} status
   * @param {any} fun
   *
   * @memberOf DashboardService
   */
  setspeedIsStatusFun(status, fun) {
    switch (status) {
      case "rack":
        this.speedIsRack[this.speedIsRackIndex] = fun;
        this.speedIsRackIndex += 1;
        break;
      case "follow":
        this.followSpeed[this.followSpeedIndex] = fun;
        this.followSpeedIndex += 1;
        break;
      default:
    }
  }
  /**
   * 速度不变需要执行的哪些方法
   *
   *
   * @memberOf DashboardService
   */
  speedIsRackFun() {
    // tslint:disable-next-line:forin
    for (let i in this.speedIsRack) {
      this.speedIsRack[i]();
    }
  }

  /**
   * 速度不变需要执行的哪些方法
   *
   *
   * @memberOf DashboardService
   */
  followSpeedFun() {
    // tslint:disable-next-line:forin
    for (let i in this.followSpeed) {
      this.followSpeed[i]();
    }
  }
  // tslint:disable-next-line:member-ordering
  speedFixedFun: number = 0;
  // tslint:disable-next-line:member-ordering
  speedStatusFun: string = "rack";
  // tslint:disable-next-line:member-ordering
  timeoutID;
  checkSpeed(speed) {
    let _speed = speed;
    if (this.followSpeedFun()) {
      this.followSpeedFun();
    }
    if (this.oldSpeed[this.oldSpeedIndex] === _speed) {
      if (this.oldSpeedIndex === 10) {
        this.speedIsRackFun();
        this.speedStatusFun = "";
      }

      this.oldSpeedIndex += 1;
    } else {
      if (this.oldSpeed[this.oldSpeedIndex - 1] !== _speed) {
        this.oldSpeedIndex = 1;
      }
      this.oldSpeed[this.oldSpeedIndex] = _speed;
      // if(this.timeoutID){
      // clearTimeout(this.timeoutID);
      // }
      // this.timeoutID=setTimeout(()  => this.speedStatusFun = 'rack',1000);
    }
    if (speed !== 0) {
      // console.log(speed);

      this.speedFixedFun = 0;
    }
    switch (speed) {
      case 0:
        if (this.speedFixedFun === 0) {
          this.SpeedIsZeroFun();
          this.speedFixedFun = 1;
        }
        break;
      default:
    }
  }

  // 仪表灯方法start
  timer = []; // 灯的定时器
  gearStallsHalo = "";
  // 根据当前页数显示不同的灯
  pageLight = {
    "2": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni1IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {},
      stallScintillation: {
        isHalo: true,
        twinklStall: ["R", "N", "D"],
        currentmoniIsOk: "moni1IsOk"
      }
    },
    "13": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni1IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {},
      stallScintillation: {
        isHalo: true,
        twinklStall: ["R", "N", "D"],
        currentmoniIsOk: "moni1IsOk"
      }
    },
    "15": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni1IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {},
      stallScintillation: {
        isHalo: true,
        twinklStall: ["R", "N", "D"],
        currentmoniIsOk: "moni1IsOk"
      }
    },
    "17": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni1IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {},
      stallScintillation: {
        isHalo: false,
        twinklStall: ["R", "N", "D"],
        currentmoniIsOk: "moni1IsOk"
      }
    },
    "19": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni2IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {
        isBright: true,
        faultLight: ["djFault"],
        currentmoniIsOk: "moni2IsOk",
        faultText: "驱动电机故障"
      },
      stallScintillation: {}
    },
    "21": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni2IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {
        isBright: true,
        faultLight: ["djFault"],
        currentmoniIsOk: "moni2IsOk",
        faultText: "驱动电机故障"
      },
      stallScintillation: {}
    },
    "23": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni2IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {
        isBright: false,
        faultLight: ["djFault"],
        currentmoniIsOk: "moni2IsOk",
        faultText: "驱动电机故障"
      },
      stallScintillation: {}
    },
    "25": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: false,
        currentmoniIsOk: "moni3IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {
        isBright: true,
        faultLight: ["jyFault"],
        currentmoniIsOk: "moni3IsOk",
        faultText: "绝缘故障"
      },
      stallScintillation: {}
    },
    "27": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: false,
        currentmoniIsOk: "moni3IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {
        isBright: true,
        faultLight: ["jyFault"],
        currentmoniIsOk: "moni3IsOk",
        faultText: "绝缘故障"
      },
      stallScintillation: {}
    },
    "29": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni3IsOk",
        faultReady: true
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {
        isBright: false,
        faultLight: ["jyFault"],
        currentmoniIsOk: "moni3IsOk",
        faultText: "绝缘故障"
      },
      stallScintillation: {}
    },
    "31": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni4IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {},
      stallScintillation: {
        isHalo: true,
        twinklStall: ["R", "N", "D"],
        currentmoniIsOk: "moni4IsOk"
      }
    },
    "33": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni4IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {},
      stallScintillation: {
        isHalo: true,
        twinklStall: ["R", "N", "D"],
        currentmoniIsOk: "moni4IsOk"
      }
    },
    "35": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni4IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {},
      stallScintillation: {
        isHalo: false,
        twinklStall: ["R", "N", "D"],
        currentmoniIsOk: "moni4IsOk"
      }
    },
    "37": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni5IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {
        isBright: true,
        faultLight: ["bxFault"],
        currentmoniIsOk: "moni5IsOk",
        faultText: ""
      },
      stallScintillation: {}
    },
    "39": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni5IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {
        isBright: true,
        faultLight: ["bxFault"],
        currentmoniIsOk: "moni5IsOk",
        faultText: ""
      },
      stallScintillation: {}
    },
    "41": {
      alawlysLight: {
        light: ["ready"],
        isLightUp: true,
        currentmoniIsOk: "moni5IsOk",
        faultReady: false
      },
      twoSecondDestroy: ["abs", "anQuanQiNang", "shouSha"],
      isRepairLight: {
        isBright: false,
        faultLight: ["bxFault"],
        currentmoniIsOk: "moni5IsOk",
        faultText: ""
      },
      stallScintillation: {}
    }
  };

  // 灯的状态方法的定义
  lightFunDefine = {
    /**
     * 点击ON档位后灯常量 ----点击on档位时调用
     */
    alawlysLight: eleArr => {
      if (!eleArr.isLightUp) return;
      if (
        (eleArr.isLightUp && !eleArr.faultReady) ||
        (this.appService[eleArr.currentmoniIsOk] && eleArr.faultReady)
      ) {
        eleArr.light.map(item => {
          $("." + item).show();
        });
      }
    },
    /**
     * 2s后熄灭 ---- 点击on档位时调用
     */
    twoSecondDestroy: eleArr => {
      if (this.isFlag) return;
      eleArr.map(item => {
        $("." + item).show();
        this.timer[this.timer.length + 1] = setTimeout(() => {
          $("." + item).hide();
        }, 2000);
      });
    },
    /**
     * 2s后点亮 ---- 点击on档位时调用
     */
    twoSecondLight: eleArr => {
      eleArr.map(item => {
        $("." + item).hide();
        this.timer[this.timer.length + 1] = setTimeout(() => {
          $("." + item).show();
        }, 2000);
      });
    },
    // 当前故障等常亮，维修成功后熄灭
    isRepairLight: eleArr => {
      if (JSON.stringify(eleArr) == "{}") return;
      if (eleArr.isBright || !this.appService[eleArr.currentmoniIsOk]) {
        eleArr.faultLight.map((item, index) => {
          $("." + item).show();
        });
        $(".faultText").html(eleArr.faultText);
      } else if (this.appService[eleArr.currentmoniIsOk]) {
        eleArr.faultLight.map((item, index) => {
          $("." + item).hide();
        });
        $(".faultText").html("");
      }
    },

    stallScintillation: eleArr => {},

    /**
     * 关闭所有灯---在点击lock档位时调用
     */
    closeLight: () => {
      $(".lamp span").hide();
    }
  };
  // 档位闪烁，维修成功后档位闪烁
  stallScintillation(eleArr, stall?) {
    if (JSON.stringify(eleArr.stallScintillation) == "{}") return;
    if (
      eleArr.stallScintillation.isHalo ||
      !this.appService[eleArr.stallScintillation.currentmoniIsOk]
    ) {
      this.gearStallsHalo = eleArr.stallScintillation.twinklStall.some(
        (item, index) => {
          return item === stall;
        }
      )
        ? "halo"
        : "";
    } else if (this.appService[eleArr.stallScintillation.currentmoniIsOk]) {
      this.gearStallsHalo = "";
    }
  }

  /**
   * @param paramObj 对象包含了要执行的方法类和灯的类名数组
   */
  lightFun(paramObj) {
    for (let [key, value] of Object["entries"](paramObj)) {
      this.lightFunDefine[key](value);
    }
  }

  // 清除灯的定时器
  clearTimer() {
    this.timer.map(item => {
      if (item) clearTimeout(item);
    });
    this.timer = [];
  }
  // 仪表灯方法end
}
