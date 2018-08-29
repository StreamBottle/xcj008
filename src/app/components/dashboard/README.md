

    实现解耦合

import dashboard 文件 yoururl[用相对路径替换‘youurl’]

    import { DashboardService} from '‘＋yoururl’＋/components/dashboard';

在构造器中实例化

    constructor(private dashboardService: DashboardService) {

    }

调用方法
所有的lock档位执行的方法都写在lockGearFun()里面，返回lockGearFun()

  /**
    * 设置仪表需要在哪个档位执行外部的什么方法
    * 
    * @param {any} gear   在哪个档位执行
    * @param {any} fun    执行什么方法
    * 
    * @memberOf DashboardService
    */
    setGearsFun(gear, fun) 

    this.dashboardService.setGearsFun('lock', () => { return this.lockGearFun() })



##### 所有的on档位执行的方法都写在onGearFun()里面，返回onGearFun()

/**
* 设置仪表需要在哪个档位执行外部的什么方法
*
* @param {any} gear 在哪个档位执行
* @param {any} fun 执行什么方法
*
* @memberOf DashboardService
*/
setGearsFun(gear, fun)

this.dashboardService.setGearsFun('on', () => { return this.onGearFun() })

##### 所有的车速为固定值时执行的方法都写在setSpeedIsFixedFun()里面，返回setSpeedIsFixedFun()

/**
 * 设置速度为零需要在哪个档位执行外部的什么方法
 * 
 * @param {number} num
 * @param {any} fun
 * 
 * @memberOf DashboardService
 */
setSpeedIsFixedFun(num, fun) 

this.dashboardService.setSpeedIsFixedFun(0, () => { return this.setSpeedIsFixedFun() })

##### 所有的车速为某种状态时执行的方法都写在setspeedIsStatusFun()里面，返回setspeedIsStatusFun()

 /**
 * 设置速度在某个状态时需要在哪个档位执行外部的什么方法
 * 
 * @param {any} status   //匀速："rack"，跟随速度："follow"
 * @param {any} fun
 * 
 * @memberOf DashboardService
 */
setspeedIsStatusFun(status, fun) 

this.dashboardService.setspeedIsStatusFun("rack", () => { return this.setspeedIsStatusFun() })

#### 是否需要执行仪表开关本身动画

##### 是否需要执行仪表开关off本身动画

// 是

this.dashboardService.lockGearContinue=true;
// 否
this.dashboardService.lockGearContinue=flase;

##### 是否需要执行仪表开关on本身动画

// 是

this.dashboardService.onGearContinue=true;
// 否
this.dashboardService.onGearContinue=flase;