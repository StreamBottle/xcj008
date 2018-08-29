### dashboard中传入要执行的方法

> 实现解耦合

#### import dashboard 文件 `yoururl`[用相对路径替换‘youurl’]

```
    import { GearPanelService } from '‘＋yoururl’＋/components/gear_panel';

```

#### 在构造器中实例化

```
    constructor(private gearPanelService: GearPanelService) {

    }
```
#### 调用方法

##### 调用档位开关方法

> 所有的倒档执行的方法都写在reverseFun()里面，返回reverseFun()

```
    reverseFun(){
        
    }

    this.gearPanelService.setShiftFun('reverse', () => { return this.reverseFun() })
      
```

> 所有的空档执行的方法都写在neutralFun()里面，返回neutralFun()

```
    neutralFun(){
        
    }
    this.gearPanelService.setShiftFun('neutral', () => { return this.neutralFun() })
      
```

> 所有的空档执行的方法都写在driveFun()里面，返回driveFun()

```
    driveFun(){
        
    }
    this.gearPanelService.setShiftFun('drive', () => { return this.driveFun() })
      
```


##### 调用刹车踏板方法

> 所有的踩下刹车执行的方法都写在pressBrakeFun()里面，返回pressBrakeFun()

```
    pressBrakeFun(){
        
    }

    this.gearPanelService.setBrakesFun('press', () => { return this.pressBrakeFun() })
      
```

> 所有的松开刹车执行的方法都写在loosenBrakeFun()里面，返回loosenBrakeFun()

```
    loosenBrakeFun(){
        
    }
    this.gearPanelService.setBrakesFun('loosen', () => { return this.loosenBrakeFun() })
      
```



##### 油门踏板方法

> 所有的加油门执行的方法都写在addAcceleratorFun()里面，返回addAcceleratorFun()

```
    addAcceleratorFun(){
        
    }

    this.gearPanelService.setAcceleratorsFun('add', () => { return this.addAcceleratorFun() })
      
```

> 所有的减油门执行的方法都写在minusAcceleratorFun()里面，返回minusAcceleratorFun()

```
    minusAcceleratorFun(){
        
    }
    this.gearPanelService.setAcceleratorsFun('minus', () => { return this.minusAcceleratorFun() })
      
```

> 所有的松开油门执行的方法都写在loosenAcceleratorFun()里面，返回loosenAcceleratorFun()

```
    loosenAcceleratorFun(){
        
    }
    this.gearPanelService.setAcceleratorsFun('loosen', () => { return this.loosenAcceleratorFun() })
      
```

> 所有的油门不在降低执行的方法都写在rackAcceleratorFun()里面，返回rackAcceleratorFun()

```
    rackAcceleratorFun(){
        
    }
    this.gearPanelService.setAcceleratorsFun('rack', () => { return this.rackAcceleratorFun() })
      
```

#### 方法参数介绍

##### 档位开关
```
    /**
     * 设置档位开关需要在哪个状态执行外部的什么方法
     * 
     * @param {any} gear
     * @param {any} fun
     * 
     * @memberOf GearPanelService
     */
    setShiftFun(gear, fun) 


```
##### 油门
```
    /**
     * 设置油门需要在哪个状态执行外部的什么方法
     * 
     * @param {any} status
     * @param {any} fun
     * 
     * @memberOf GearPanelService
     */
    setAcceleratorsFun(status, fun) 

```

##### 制动踏板
```
    /**
     * 设置制动踏板需要在哪个状态执行外部的什么方法
     * 
     * @param {any} status
     * @param {any} fun
     * 
     * @memberOf GearPanelService
     */
    setBrakesFun(status, fun) 
```

