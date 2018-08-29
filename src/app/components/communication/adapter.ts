/**
 * @author  bingur
 * 定义与后台通信对象
 * @construtor
 */
import {
    DescriptionObject,
    ConditionObject,
    HandleObject,
    DesOptionObject,
    OptionObject,
    ExclusiveObject,
    QuestionObject,
    ProgressObject,
    ScoreObject,
    ValueObject,
    ProgressArray,
    Paper,
    HandleArray,
} from './dataObject';
import { HandleErrorService } from '../handle_error';
import { AppService } from '../../index/app.service';

declare let $: any;
// let dtdTs = $.Deferred();
let url, domainUrl, code, question, order = [], totalScore = 0, // 记录获取服务器时间的本地时间节点
    studyCodeUrl = '/web/api/getStudyCode',         // 获取code
    studyTsUrl = '/web/api/token/getStudyTs',      // 获取token，sessionId的服务器接口
    startStudyUrl = '/api/oper/study/startStudy',    // 开始学习的服务器接口
    commitStudyUrl = '/api/oper/study/commitStudy',  // 提交的服务器接口
    exitStudyUrl = '/api/oper/study/exitStudy';      // 退出的服务器接口

/**
 * 解析url后面的数据的方法
 * @param search 传入url的search数据部分
 * @returns {{urlObj}} 返回一个以数据为属性的对象
 */
let urlParse = (search, appService): any => {
    let urlObj: any = {};
    if (search === '') {
        // window.location.href='http://content.xiaochejiang.com/warn.html';
    }
    if (search.indexOf('?') !== -1) {
        let dataStr = search.substr(1).split('&');
        for (let i = 0, len = dataStr.length; i < len; i++) {
            let dataStrsin = dataStr[i].split('=');
            urlObj[dataStrsin[0]] = dataStrsin[1];
        }
    } else if (appService.getActivityInfoObj) {
        urlObj = appService.getActivityInfoObj;
        if (!urlObj.faultNumber) {
            urlObj.faultNumber = '';
        } else if (!urlObj.domainAccount) {
            urlObj.domainAccount = '';
        }
    }

    if (
        typeof urlObj.courseNumber === 'undefined' ||
        typeof urlObj.faultNumber === 'undefined' ||
        typeof urlObj.domainUrl === 'undefined' ||
        typeof urlObj.userEmail === 'undefined' ||
        typeof urlObj.domainAccount === 'undefined' ||
        typeof urlObj.userCourseClassId === 'undefined'
    ) {
        // window.location.href='http://content.xiaochejiang.com/warn.html';
    }
    // alert('adapter-url');
    // alert(JSON.stringify(urlObj));
    return urlObj;
};


/**
 * @author  周博宇
 * 定义与后台通信对象
 * @construtor
 */
class Adapter {
    domainAccount: string;
    userEmail;
    sessionId;
    token;
    courseNumber;
    faultNumber;
    userCourseClassId;
    type;
    seconds;
    progress;
    score;
    isComplete;
    isPass;
    characterA;
    characterB;
    characterC;
    courseName;
    passCondition;
    completeCondition;
    serverTime;
    code?;
    activitys;
    constructor(private handleErrorService: HandleErrorService, private appService: AppService) {
        this.domainAccount = '';      // 当前域名
        this.userEmail = '';          // 当前用户email（当前账号唯一标识）
        this.sessionId = '';          // 当前学习过程唯一标识
        this.token = '';              // 当前学习过程口令
        this.courseNumber = '';       // 当前学习课程编号
        this.faultNumber = '';        // 当前学习故障编号
        this.userCourseClassId = '';               // 随机验证码
        this.type = 1;                // 课件类型
        this.seconds = 0;             // 学习时间
        this.progress = 0;            // 进度
        this.score = 0;               // 得分
        this.isComplete = 0;          // 是否完成
        this.isPass = 0;              // 能否通过
        this.characterA = {
            progress: [],
            score: [],
            handle: []
        };         // 进度、得分、动作详细数据
        this.characterB = {};         // 试题集合
        this.characterC = {
            chapter: [],
            handle: []
        };         // 自定义参数
        this.courseName = '';         // 课件名称
        this.passCondition = 0;       // 通过条件
        this.completeCondition = 0;   // 完成条件
        this.serverTime = '';           // 服务器返回时间
        this.activitys = '';           // 服务器返回时间
        // 无通信服务时打开
        if ((window.location.host).includes('9026')) {
            console.log(123);
            this.characterB = {
                "chapter": [
                    {
                        "chapter": [
                            {
                                "condition": [{
                                    "show": "before"
                                },
                                {
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "客户描述",
                                "id": "chapter01_01",
                                "page": [{
                                    "description": "客户描述页面1",
                                    "id": "chapter01_01_page_01",
                                    "time": "30"
                                }]
                            },
                            {
                                "condition": [
                                    {
                                        "show": "in"
                                    },
                                    {
                                        "show": "after"
                                    }
                                ],
                                "description": "故障验证",
                                "id": "chapter01_02",
                                "page": [{
                                    "description": "故障验证页面1",
                                    "id": "chapter01_02_page_01",
                                    "time": "35"
                                }]
                            },
                            {
                                "condition": [{
                                    "show": "before"
                                },
                                {
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "课程目标",
                                "id": "chapter01_03",
                                "page": [{
                                    "description": "课程目标页面1",
                                    "id": "chapter01_03_page_01",
                                    "time": "35"
                                }]
                            }
                        ],
                        "condition": [{

                            "show": "before"
                        },
                        {
                            "show": "in"
                        },
                        {
                            "show": "after"
                        }
                        ],
                        "description": "scene",
                        "id": "chapter01",
                        "page": [
                            //     {
                            //     "description": "页面一01",
                            //     "id": "chapter01_page_01",
                            //     "time": "30"
                            // },
                            // {
                            //     "description": "页面二02",
                            //     "id": "chapter01_page_02",
                            //     "time": "60"
                            // }
                        ]
                    },

                    {
                        "chapter": [
                            {
                                "condition": [
                                    { "show": "before" },
                                    {
                                        "show": "in"
                                    },
                                    {
                                        "show": "after"
                                    }
                                ],
                                "description": "概述",
                                "id": "chapter02_01",
                                "page": [
                                    {
                                        "description": "概述1",
                                        "id": "chapter02_01_page_01",
                                        "time": "30"
                                    }
                                ]
                            },
                            {
                                "condition": [{
                                    "show": "before"
                                },
                                {
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "结构",
                                "id": "chapter02_02",
                                "page": [
                                    {
                                        "description": "结构1",
                                        "id": "chapter02_02_page_01",
                                        "time": "30"
                                    }
                                ]
                            },
                            {
                                "condition": [{
                                    "show": "before"
                                },
                                {
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "原理",
                                "id": "chapter02_03",
                                "page": [
                                    {
                                        "description": "原理1",
                                        "id": "chapter02_03_page_01",
                                        "time": "30"
                                    },
                                    {
                                        "description": "原理2",
                                        "id": "chapter02_03_page_02",
                                        "time": "30"
                                    },
                                    {
                                        "description": "原理3",
                                        "id": "chapter02_03_page_03",
                                        "time": "30"
                                    },
                                    {
                                        "description": "原理4",
                                        "id": "chapter02_03_page_04",
                                        "time": "30"
                                    },
                                    {
                                        "description": "原理5",
                                        "id": "chapter02_03_page_05",
                                        "time": "30"
                                    }
                                ]
                            },
                            {
                                "condition": [{
                                    "show": "before"
                                },
                                {
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "诊断",
                                "id": "chapter02_04",
                                "page": [
                                    {
                                        "description": "诊断1",
                                        "id": "chapter02_04_page_01",
                                        "time": "30"
                                    }
                                ]
                            },
                            {
                                "condition": [{
                                    "show": "before"
                                },
                                {
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "维修",
                                "id": "chapter02_05",
                                "page": [
                                    {
                                        "description": "维修1",
                                        "id": "chapter02_05_page_01",
                                        "time": "30"
                                    }
                                ]
                            },
                        ],
                        "condition": [

                            {
                                "show": "before"
                            },
                            {
                                "show": "in"
                            },
                            {
                                "show": "after"
                            }
                        ],
                        "description": "knowledge",
                        "id": "chapter02",
                        "page": []
                    },

                    {
                        "chapter": [
                            {
                                "condition": [{
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "任务1",
                                "id": "chapter03_01",
                                "page": [
                                    {
                                        "description": "维修工单页面1",
                                        "id": "chapter03_01_page_01",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障验证页面1",
                                        "id": "chapter03_01_page_02",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障分析页面1",
                                        "id": "chapter03_01_page_03",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障诊断页面1",
                                        "id": "chapter03_01_page_04",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障维修页面1",
                                        "id": "chapter03_01_page_05",
                                        "time": "30"
                                    },
                                    {
                                        "description": "检验交车页面1",
                                        "id": "chapter03_01_page_06",
                                        "time": "30"
                                    }
                                ]
                            },
                            {

                                "condition": [{
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "任务2",
                                "id": "chapter03_02",
                                "page": [
                                    {
                                        "description": "维修工单页面1",
                                        "id": "chapter03_02_page_01",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障验证页面1",
                                        "id": "chapter03_02_page_02",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障分析页面1",
                                        "id": "chapter03_02_page_03",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障诊断页面1",
                                        "id": "chapter03_02_page_04",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障维修页面1",
                                        "id": "chapter03_02_page_05",
                                        "time": "30"
                                    },
                                    {
                                        "description": "检验交车页面1",
                                        "id": "chapter03_02_page_06",
                                        "time": "30"
                                    }
                                ]
                            },
                            {

                                "condition": [{
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "任务3",
                                "id": "chapter03_03",
                                "page": [
                                    {
                                        "description": "维修工单页面1",
                                        "id": "chapter03_03_page_01",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障验证页面1",
                                        "id": "chapter03_03_page_02",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障分析页面1",
                                        "id": "chapter03_03_page_03",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障诊断页面1",
                                        "id": "chapter03_03_page_04",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障维修页面1",
                                        "id": "chapter03_03_page_05",
                                        "time": "30"
                                    },
                                    {
                                        "description": "检验交车页面1",
                                        "id": "chapter03_03_page_06",
                                        "time": "30"
                                    }
                                ]
                            },

                            {

                                "condition": [{
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "任务4",
                                "id": "chapter03_04",
                                "page": [
                                    {
                                        "description": "维修工单页面1",
                                        "id": "chapter03_04_page_01",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障验证页面1",
                                        "id": "chapter03_04_page_02",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障分析页面1",
                                        "id": "chapter03_04_page_03",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障诊断页面1",
                                        "id": "chapter03_04_page_04",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障维修页面1",
                                        "id": "chapter03_04_page_05",
                                        "time": "30"
                                    },
                                    {
                                        "description": "检验交车页面1",
                                        "id": "chapter03_04_page_06",
                                        "time": "30"
                                    }
                                ]
                            },


                            {
                                "condition": [
                                    {
                                        "show": "before"
                                    },
                                    {
                                        "show": "in"
                                    },
                                    {
                                        "show": "after"
                                    }
                                ],
                                "description": "活动任务",
                                "id": "chapter03_07",
                                "page": [
                                    {
                                        "description": "活动任务1",
                                        "id": "chapter03_07_page_01",
                                        "time": "30"
                                    },
                                ]
                            },
                            {
                                "condition": [
                                    {
                                        "show": "before"
                                    },
                                    {
                                        "show": "in"
                                    },
                                    {
                                        "show": "after"
                                    }
                                ],
                                "description": "任务目标",
                                "id": "chapter03_08",
                                "page": [
                                    {
                                        "description": "任务目标1",
                                        "id": "chapter03_08_page_01",
                                        "time": "30"
                                    },
                                ]
                            },
                            {
                                "condition": [
                                    {
                                        "show": "before"
                                    },
                                    {
                                        "show": "in"
                                    },
                                    {
                                        "show": "after"
                                    }
                                ],
                                "description": "任务组织",
                                "id": "chapter03_09",
                                "page": [
                                    {
                                        "description": "任务组织1",
                                        "id": "chapter03_09_page_01",
                                        "time": "30"
                                    },

                                ]
                            },
                            {
                                "condition": [
                                    {
                                        "show": "before"
                                    },
                                    {
                                        "show": "in"
                                    },
                                    {
                                        "show": "after"
                                    }
                                ],
                                "description": "注意事项",
                                "id": "chapter03_10",
                                "page": [
                                    {
                                        "description": "注意事项1",
                                        "id": "chapter03_10_page_01",
                                        "time": "30"
                                    },
                                ]
                            },
                            {
                                "condition": [
                                    {
                                        "show": "before"
                                    },
                                    {
                                        "show": "in"
                                    },
                                    {
                                        "show": "after"
                                    }
                                ],
                                "description": "任务准备",
                                "id": "chapter03_11",
                                "page": [
                                    {
                                        "description": "任务准备1",
                                        "id": "chapter03_11_page_01",
                                        "time": "30"
                                    },
                                ]
                            },
                            {
                                "condition": [
                                    {
                                        "show": "before"
                                    },
                                    {
                                        "show": "in"
                                    },
                                    {
                                        "show": "after"
                                    }
                                ],
                                "description": "任务实施",
                                "id": "chapter03_12",
                                "page": [
                                    {
                                        "description": "任务实施1",
                                        "id": "chapter03_12_page_01",
                                        "time": "30"
                                    },
                                ]
                            },
                            {
                                "condition": [
                                    {
                                        "show": "before"
                                    },
                                    {
                                        "show": "in"
                                    },
                                    {
                                        "show": "after"
                                    }
                                ],
                                "description": "任务总结",
                                "id": "chapter03_13",
                                "page": [
                                    {
                                        "description": "任务总结1",
                                        "id": "chapter03_13_page_01",
                                        "time": "30"
                                    },
                                ]
                            },
                        ],
                        "condition": [
                            {
                                "show": "before"
                            },
                            {
                                "show": "in"
                            },
                            {
                                "show": "after"
                            }
                        ],
                        "description": "skill",
                        "id": "chapter03",
                        "page": []
                    },


                    {
                        "chapter": [
                            {
                                "condition": [
                                    {
                                        "show": "before"
                                    },
                                    {
                                        "show": "in"
                                    },
                                    {
                                        "show": "after"
                                    }
                                ],
                                "description": "知识",
                                "id": "chapter04_01",
                                "page": [{
                                    "description": "知识页面一",
                                    "id": "chapter04_01_page_01",
                                    "time": "30"
                                }
                                ]
                            },
                            {
                                "condition": [{
                                    "show": "in"
                                },
                                {
                                    "show": "after"
                                }
                                ],
                                "description": "技能",
                                "id": "chapter04_02",
                                "page": [
                                    {
                                        "description": "维修工单页面1",
                                        "id": "chapter04_02_page_01",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障验证页面1",
                                        "id": "chapter04_02_page_02",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障分析页面1",
                                        "id": "chapter04_02_page_03",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障诊断页面1",
                                        "id": "chapter04_02_page_04",
                                        "time": "30"
                                    },
                                    {
                                        "description": "故障维修页面1",
                                        "id": "chapter04_02_page_05",
                                        "time": "30"
                                    },
                                    {
                                        "description": "检验交车页面1",
                                        "id": "chapter04_02_page_06",
                                        "time": "30"
                                    }
                                ]
                            },
                        ],
                        "condition": [

                            {
                                "show": "before"
                            },
                            {
                                "show": "in"
                            },
                            {
                                "show": "after"
                            }
                        ],
                        "description": "exam",
                        "id": "chapter04",
                        "page": []
                    }
                ],
                "exclusive": [],
                "handle": "",
                "progress": [],
                "question": [{
                    "catalog": "skill",
                    "description": "案例导入测评",
                    "id": "skill",
                    "question": [{
                        "catalog": "skill01",
                        "courseNumber": "HITS_COURSE_005_test0713_001",
                        "description": "",
                        "id": "skill_001",
                        "option": [{
                            "description": "更换电机控制器MCU",
                            "id": "skill_001_p1",
                            "isRight": "1"
                        },
                        {
                            "description": "维修高压线束",
                            "id": "skill_001_p2",
                            "isRight": "0"
                        },
                        {
                            "description": "更换动力电池",
                            "id": "skill_001_p3",
                            "isRight": "0"
                        },
                        {
                            "description": "更换驱动电机",
                            "id": "skill_001_p4",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电机控制器上游的电源线束",
                            "id": "skill_001_p5",
                            "isRight": "0"
                        },
                        {
                            "description": "更换高压盒",
                            "id": "skill_001_p6",
                            "isRight": "0"
                        },
                        {
                            "description": "更换点火开关",
                            "id": "skill_001_p7",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电源主继电器",
                            "id": "skill_001_p8",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电机控制器的搭铁线束",
                            "id": "skill_001_p9",
                            "isRight": "0"
                        }
                        ],
                        "rate": "1",
                        "type": "1",
                        "url": ""
                    },
                    {
                        "catalog": "skill02",
                        "courseNumber": "HITS_COURSE_005_test0713_002",
                        "description": "",
                        "id": "skill_002",
                        "option": [{
                            "description": "更换电机控制器MCU",
                            "id": "skill_002_p1",
                            "isRight": "0"
                        },
                        {
                            "description": "维修高压线束",
                            "id": "skill_002_p2",
                            "isRight": "0"
                        },
                        {
                            "description": "更换动力电池",
                            "id": "skill_002_p3",
                            "isRight": "0"
                        },
                        {
                            "description": "更换驱动电机",
                            "id": "skill_002_p4",
                            "isRight": "0"
                        },
                        {
                            "description": "维修电机控制器电源线路",
                            "id": "skill_002_p5",
                            "isRight": "1"
                        },
                        {
                            "description": "维修电机控制器的接地线路",
                            "id": "skill_002_p6",
                            "isRight": "0"
                        },
                        {
                            "description": "更换点火开关",
                            "id": "skill_002_p7",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电源主继电器",
                            "id": "skill_002_p8",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电机控制器的搭铁线束",
                            "id": "skill_002_p9",
                            "isRight": "0"
                        }
                        ],
                        "rate": "5",
                        "type": "2",
                        "url": "aaa/bbb/index.html"
                    },
                    {
                        "catalog": "skill03",
                        "courseNumber": "HITS_COURSE_005_test0713_003",
                        "description": "（不定项）点火线圈主要由（）部分组成",
                        "id": "skill_003",
                        "option": [{
                            "description": "更换电机控制器MCU",
                            "id": "skill_003_p1",
                            "isRight": "0"
                        },
                        {
                            "description": "维修高压线束",
                            "id": "skill_003_p2",
                            "isRight": "0"
                        },
                        {
                            "description": "更换动力电池",
                            "id": "skill_003_p3",
                            "isRight": "0"
                        },
                        {
                            "description": "更换驱动电机",
                            "id": "skill_003_p4",
                            "isRight": "0"
                        },
                        {
                            "description": "维修电机控制器电源线路",
                            "id": "skill_003_p5",
                            "isRight": "0"
                        },
                        {
                            "description": "维修电机控制器的接地线路",
                            "id": "skill_003_p6",
                            "isRight": "1"
                        },
                        {
                            "description": "更换点火开关",
                            "id": "skill_003_p7",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电源主继电器",
                            "id": "skill_003_p8",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电机控制器的搭铁线束",
                            "id": "skill_003_p9",
                            "isRight": "0"
                        }
                        ],
                        "rate": "1",
                        "type": "2",
                        "url": "aaa/bbb/index.html"
                    },
                    {
                        "catalog": "skill04",
                        "courseNumber": "HITS_COURSE_005_test0713_004",
                        "description": "（不定项）点火线圈主要由（）部分组成",
                        "id": "skill_004",
                        "option": [{
                            "description": "更换电机控制器MCU",
                            "id": "skill_004_p1",
                            "isRight": "1"
                        },
                        {
                            "description": "维修高压线束",
                            "id": "skill_004_p2",
                            "isRight": "0"
                        },
                        {
                            "description": "更换动力电池",
                            "id": "skill_004_p3",
                            "isRight": "0"
                        },
                        {
                            "description": "更换驱动电机",
                            "id": "skill_004_p4",
                            "isRight": "0"
                        },
                        {
                            "description": "维修电机控制器电源线路",
                            "id": "skill_004_p5",
                            "isRight": "0"
                        },
                        {
                            "description": "维修电机控制器的接地线路",
                            "id": "skill_004_p6",
                            "isRight": "0"
                        },
                        {
                            "description": "更换点火开关",
                            "id": "skill_004_p7",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电源主继电器",
                            "id": "skill_004_p8",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电机控制器的搭铁线束",
                            "id": "skill_004_p9",
                            "isRight": "0"
                        }
                        ],
                        "rate": "2",
                        "type": "2",
                        "url": "aaa/bbb/index.html"
                    },
                    {
                        "catalog": "skill05",
                        "courseNumber": "HITS_COURSE_005_test0713_004",
                        "description": "（不定项）点火线圈主要由（）部分组成",
                        "id": "skill_004",
                        "option": [{
                            "description": "更换电机控制器MCU",
                            "id": "skill_004_p1",
                            "isRight": "1"
                        },
                        {
                            "description": "维修高压线束",
                            "id": "skill_004_p2",
                            "isRight": "0"
                        },
                        {
                            "description": "更换动力电池",
                            "id": "skill_004_p3",
                            "isRight": "0"
                        },
                        {
                            "description": "更换驱动电机",
                            "id": "skill_004_p4",
                            "isRight": "0"
                        },
                        {
                            "description": "维修电机控制器电源线路",
                            "id": "skill_004_p5",
                            "isRight": "0"
                        },
                        {
                            "description": "维修电机控制器的接地线路",
                            "id": "skill_004_p6",
                            "isRight": "0"
                        },
                        {
                            "description": "更换点火开关",
                            "id": "skill_004_p7",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电源主继电器",
                            "id": "skill_004_p8",
                            "isRight": "0"
                        },
                        {
                            "description": "更换电机控制器的搭铁线束",
                            "id": "skill_004_p9",
                            "isRight": "0"
                        }
                        ],
                        "rate": "2",
                        "type": "2",
                        "url": "aaa/bbb/index.html"
                    },
                    {
                        "catalog": "",
                        "courseNumber": "HITS_COURSE_005_test0713_005",
                        "description": "1、这是填空加选择题",
                        "id": "skill_005",
                        "question": [{
                            "description": "打开点火开关到ON档，在不断开加速踏板位置传感器插头的状态下，在传感器插头位置分别测量两个传感器的电源电压，传感器1的电源电压是$XCJ$伏，传感器2的电源电压是$XCJ$伏。",
                            "id": "skill_005_001",
                            "option": [{
                                "description": "3V",
                                "id": "skill_005_001_a001",
                                "isRight": "1"
                            },
                            {
                                "description": "3V",
                                "id": "skill_005_001_a002",
                                "isRight": "1"
                            }
                            ],
                            "type": "9",
                            "url": ""
                        },
                        {
                            "description": "根据以上测量结果判断，两个传感器的电源是否正常:",
                            "id": "skill_005_002",
                            "option": [{
                                "description": "正常",
                                "id": "skill_005_002_a003",
                                "isRight": "0"
                            },
                            {
                                "description": "不正常",
                                "id": "skill_005_002_a004",
                                "isRight": "1"
                            }
                            ],
                            "rate": "5",
                            "type": "1",
                            "url": ""
                        }
                        ],
                        "rate": "",
                        "type": "10",
                        "url": ""
                    },
                    {
                        "catalog": "",
                        "courseNumber": "HITS_COURSE_005_test0713_005",
                        "description": "2、这是填空加选择题",
                        "id": "skill_006",
                        "question": [{
                            "description": "打开点火开关到ON档，在不断开加速踏板位置传感器插头的状态下，在传感器插头位置分别测量两个传感器的接地线（万用表红表笔连接蓄电池正极，黑表笔分别连接两个传感器的接地线），其电压分别是$XCJ$伏、$XCJ$伏。",
                            "id": "skill_006_001",
                            "option": [{
                                "description": "3V",
                                "id": "skill_006_001_a001",
                                "isRight": "1"
                            },
                            {
                                "description": "3V",
                                "id": "skill_006_001_a002",
                                "isRight": "1"
                            }
                            ],
                            "type": "9",
                            "url": ""
                        },
                        {
                            "description": "根据以上测量结果判断，两个传感器的接地线是否正常:",
                            "id": "skill_006_002",
                            "option": [{
                                "description": "正常",
                                "id": "skill_006_002_a003",
                                "isRight": "0"
                            },
                            {
                                "description": "不正常",
                                "id": "skill_006_002_a004",
                                "isRight": "1"
                            }
                            ],
                            "rate": "5",
                            "type": "1",
                            "url": ""
                        }
                        ],
                        "rate": "",
                        "type": "10",
                        "url": ""
                    },
                    {
                        "catalog": "",
                        "courseNumber": "HITS_COURSE_005_test0713_005",
                        "description": "3、这是表格和选择题",
                        "id": "skill_007",
                        "question": [{
                            "description": "",
                            "id": "skill_007_001",
                            "question": [{
                                "description": "",
                                "id": "skill_007_001_001",
                                "option": [],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "操作内容",
                                        "油门踏板开度（％）",
                                        "信号1电压（V）",
                                        "信号2电压（V）"
                                    ]
                                },
                                "url": ""
                            },
                            {
                                "description": "",
                                "id": "skill_007_001_002",
                                "option": [{
                                    "description": "30%",
                                    "id": "skill_007_001_002_001",
                                    "isRight": "1"
                                },
                                {
                                    "description": "4v",
                                    "id": "skill_007_001_002_002",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_007_001_002_003",
                                    "isRight": "1"
                                }
                                ],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "不踩加速踏板",
                                        "",
                                        "",
                                        ""
                                    ]
                                },
                                "url": ""
                            },
                            {
                                "description": "",
                                "id": "skill_007_001_003",
                                "option": [{
                                    "description": "30%",
                                    "id": "skill_007_001_003_001",
                                    "isRight": "1"
                                },
                                {
                                    "description": "4v",
                                    "id": "skill_007_001_003_002",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_007_001_003_003",
                                    "isRight": "1"
                                }
                                ],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "加速踏板踩下一半",
                                        "",
                                        "",
                                        ""
                                    ]
                                },
                                "url": ""
                            },
                            {
                                "description": "",
                                "id": "skill_007_001_004",
                                "option": [{
                                    "description": "30%",
                                    "id": "skill_007_001_004_001",
                                    "isRight": "1"
                                },
                                {
                                    "description": "4v",
                                    "id": "skill_007_001_004_002",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_007_001_004_003",
                                    "isRight": "1"
                                }
                                ],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "加速踏板踩到底",
                                        "",
                                        "",
                                        ""
                                    ]
                                },
                                "url": ""
                            }
                            ],
                            "type": "3",
                            "url": ""
                        },
                        {
                            "description": "通过以上数据分析，加速踏板位置传感器两个信号之间符合什么样的逻辑关系？",
                            "id": "skill_007_002",
                            "option": [{
                                "description": "两个信号呈相反变化",
                                "id": "skill_007_002_001",
                                "isRight": "1"
                            },
                            {
                                "description": "一个值变大的时候另一个值变小",
                                "id": "skill_007_002_002",
                                "isRight": "0"
                            },
                            {
                                "description": "两个信号之间符合2倍的关系",
                                "id": "skill_007_002_003",
                                "isRight": "0"
                            },
                            {
                                "description": "两个信号之间没有逻辑关系",
                                "id": "skill_007_002_004",
                                "isRight": "0"
                            }
                            ],
                            "rate": "5",
                            "type": "1",
                            "url": ""
                        }
                        ],
                        "rate": "",
                        "type": "11",
                        "url": ""
                    },
                    {
                        "catalog": "",
                        "courseNumber": "HITS_COURSE_005_test0713_005",
                        "description": "4、这是表格",
                        "id": "skill_008",
                        "question": [{
                            "description": "",
                            "id": "skill_008_001",
                            "question": [{
                                "description": "",
                                "id": "skill_008_001_001",
                                "option": [],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "操作内容",
                                        "油门踏板开度（％）",
                                        "信号1电压（V）",
                                        "信号2电压（V）",
                                        "故障码"
                                    ]
                                },
                                "url": ""
                            },
                            {
                                "description": "",
                                "id": "skill_008_001_002",
                                "option": [{
                                    "description": "30%",
                                    "id": "skill_008_001_002_001",
                                    "isRight": "1"
                                },
                                {
                                    "description": "4v",
                                    "id": "skill_008_001_002_002",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_002_003",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_002_004",
                                    "isRight": "1"
                                }
                                ],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "断开传感器1电源",
                                        "",
                                        "",
                                        "",
                                        "$alphanumeric$"
                                    ]
                                },
                                "url": ""
                            },
                            {
                                "description": "",
                                "id": "skill_008_001_003",
                                "option": [{
                                    "description": "30%",
                                    "id": "skill_008_001_003_001",
                                    "isRight": "1"
                                },
                                {
                                    "description": "4v",
                                    "id": "skill_008_001_003_002",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_003_003",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_003_004",
                                    "isRight": "1"
                                }
                                ],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "断开传感器2电源",
                                        "",
                                        "",
                                        "",
                                        "$alphanumeric$"
                                    ]
                                },
                                "url": ""
                            },
                            {
                                "description": "",
                                "id": "skill_008_001_004",
                                "option": [{
                                    "description": "30%",
                                    "id": "skill_008_001_004_001",
                                    "isRight": "1"
                                },
                                {
                                    "description": "4v",
                                    "id": "skill_008_001_004_002",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_004_003",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_004_004",
                                    "isRight": "1"
                                }
                                ],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "断开传感器1接地",
                                        "",
                                        "",
                                        "",
                                        "$alphanumeric$"
                                    ]
                                },
                                "url": ""
                            },
                            {
                                "description": "",
                                "id": "skill_008_001_005",
                                "option": [{
                                    "description": "30%",
                                    "id": "skill_008_001_005_001",
                                    "isRight": "1"
                                },
                                {
                                    "description": "4v",
                                    "id": "skill_008_001_005_002",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_005_003",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_005_004",
                                    "isRight": "1"
                                }
                                ],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "断开传感器2接地",
                                        "",
                                        "",
                                        "",
                                        "$alphanumeric$"
                                    ]
                                },
                                "url": ""
                            },
                            {
                                "description": "",
                                "id": "skill_008_001_006",
                                "option": [{
                                    "description": "30%",
                                    "id": "skill_008_001_006_001",
                                    "isRight": "1"
                                },
                                {
                                    "description": "4v",
                                    "id": "skill_008_001_006_002",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_006_003",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_006_004",
                                    "isRight": "1"
                                }
                                ],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "断开传感器1信号",
                                        "",
                                        "",
                                        "",
                                        "$alphanumeric$"
                                    ]
                                },
                                "url": ""
                            },
                            {
                                "description": "",
                                "id": "skill_008_001_007",
                                "option": [{
                                    "description": "30%",
                                    "id": "skill_008_001_007_001",
                                    "isRight": "1"
                                },
                                {
                                    "description": "4v",
                                    "id": "skill_008_001_007_002",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_007_003",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_007_004",
                                    "isRight": "1"
                                }
                                ],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "断开传感器2信号",
                                        "",
                                        "",
                                        "",
                                        "$alphanumeric$"
                                    ]
                                },
                                "url": ""
                            },
                            {
                                "description": "",
                                "id": "skill_008_001_008",
                                "option": [{
                                    "description": "30%",
                                    "id": "skill_008_001_008_001",
                                    "isRight": "1"
                                },
                                {
                                    "description": "4v",
                                    "id": "skill_008_001_008_002",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_008_003",
                                    "isRight": "1"
                                },
                                {
                                    "description": "5v",
                                    "id": "skill_008_001_008_004",
                                    "isRight": "1"
                                }
                                ],
                                "td": {
                                    "option": [],
                                    "td": [
                                        "将传感器1和2信号线短接",
                                        "",
                                        "",
                                        "",
                                        "$alphanumeric$"
                                    ]
                                },
                                "url": ""
                            }
                            ],
                            "type": "3",
                            "url": ""
                        }],
                        "rate": "",
                        "type": "11",
                        "url": ""
                    }
                    ],
                    "remark": ""
                },
                {
                    "catalog": "exam",
                    "description": "案例导入测评",
                    "id": "exam",
                    "question": [{
                        "catalog": "exam01",
                        "courseNumber": "HITS_COURSE_005_test0713_006",
                        "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
                        "id": "exam_001",
                        "option": [{
                            "description": "维修加速踏板位置传感器1#电源线束",
                            "id": "exam_001_p1",
                            "isRight": "0"
                        },
                        {
                            "description": "维修加速踏板位置传感器1#搭铁线束",
                            "id": "exam_001_p2",
                            "isRight": "1"
                        },
                        {
                            "description": "维修加速踏板位置传感器1#信号线束",
                            "id": "exam_001_p3",
                            "isRight": "0"
                        },
                        {
                            "description": "维修加速踏板位置传感器2#电源线束",
                            "id": "exam_001_p4",
                            "isRight": "0"
                        },
                        {
                            "description": "维修加速踏板位置传感器2#搭铁线束",
                            "id": "exam_001_p5",
                            "isRight": "0"
                        },
                        {
                            "description": "维修加速踏板位置传感器2#信号线束",
                            "id": "exam_001_p6",
                            "isRight": "0"
                        },
                        {
                            "description": "更换加速踏板位置传感器",
                            "id": "exam_001_p7",
                            "isRight": "0"
                        },
                        {
                            "description": "更换整车控制器",
                            "id": "exam_001_p8",
                            "isRight": "0"
                        }
                        ],
                        "rate": "2",
                        "type": "1",
                        "url": ""
                    },
                    {
                        "catalog": "",
                        "courseNumber": "HITS_COURSE_005_test0713_007",
                        "description": "1、加速踏板模块通常由几个传感器组成？",
                        "id": "exam_002",
                        "option": [{
                            "description": "1个",
                            "id": "exam_002_p1",
                            "isRight": "0"
                        },
                        {
                            "description": "2个",
                            "id": "exam_002_p2",
                            "isRight": "1"
                        },
                        {
                            "description": "3个",
                            "id": "exam_002_p3",
                            "isRight": "0"
                        },
                        {
                            "description": "4个",
                            "id": "exam_002_p4",
                            "isRight": "0"
                        }
                        ],
                        "rate": "2",
                        "type": "1",
                        "url": ""
                    },
                    {
                        "catalog": "",
                        "courseNumber": "HITS_COURSE_005_test0713_007",
                        "description": "2、加速踏板位置传感器的电源电压通常是多少？",
                        "id": "exam_003",
                        "option": [{
                            "description": "0V",
                            "id": "exam_003_p1",
                            "isRight": "0"
                        },
                        {
                            "description": "5V",
                            "id": "exam_003_p2",
                            "isRight": "1"
                        },
                        {
                            "description": "8V",
                            "id": "exam_003_p3",
                            "isRight": "0"
                        },
                        {
                            "description": "12V",
                            "id": "exam_003_p4",
                            "isRight": "0"
                        }
                        ],
                        "rate": "2",
                        "type": "1",
                        "url": ""
                    },
                    {
                        "catalog": "",
                        "courseNumber": "HITS_COURSE_005_test0713_007",
                        "description": "3、接触式加速踏板位置传感器采用什么原理改变信号电压？",
                        "id": "exam_004",
                        "option": [{
                            "description": "串联电路的分压原理",
                            "id": "exam_004_p1",
                            "isRight": "0"
                        },
                        {
                            "description": "串联电路的分压原理",
                            "id": "exam_004_p2",
                            "isRight": "1"
                        },
                        {
                            "description": "传感器元件的霍尔效应",
                            "id": "exam_004_p3",
                            "isRight": "0"
                        },
                        {
                            "description": "传感器元件的光电效应",
                            "id": "exam_004_p4",
                            "isRight": "0"
                        }
                        ],
                        "rate": "2",
                        "type": "1",
                        "url": ""
                    },
                    {
                        "catalog": "",
                        "courseNumber": "HITS_COURSE_005_test0713_007",
                        "description": "4、非接触式加速踏板位置传感器随加速踏板旋转的部件为？",
                        "id": "exam_005",
                        "option": [{
                            "description": "滑动电阻",
                            "id": "exam_005_p1",
                            "isRight": "0"
                        },
                        {
                            "description": "霍尔元件",
                            "id": "exam_005_p2",
                            "isRight": "1"
                        },
                        {
                            "description": "磁铁",
                            "id": "exam_005_p3",
                            "isRight": "0"
                        },
                        {
                            "description": "滑动触点",
                            "id": "exam_005_p4",
                            "isRight": "0"
                        }
                        ],
                        "rate": "",
                        "type": "1",
                        "url": ""
                    }
                    ],
                    "remark": ""
                }
                ],
                "score": [{
                    "id": "q01",
                    "kp": "",
                    "questionId": "skill_001",
                    "rate": "1",
                    "type": "question"
                },
                {
                    "id": "q02",
                    "kp": "",
                    "questionId": "skill_002",
                    "rate": "5",
                    "type": "question"
                },
                {
                    "id": "q03",
                    "kp": "",
                    "questionId": "skill_003",
                    "rate": "1",
                    "type": "question"
                },
                {
                    "id": "q04",
                    "kp": "",
                    "questionId": "skill_004",
                    "rate": "2",
                    "type": "question"
                },
                {
                    "id": "q05",
                    "kp": "",
                    "questionId": "skill_004",
                    "rate": "2",
                    "type": "question"
                },
                {
                    "id": "q06",
                    "kp": "",
                    "questionId": "skill_006_001",
                    "rate": "2",
                    "type": "question"
                },
                {
                    "id": "q07",
                    "kp": "",
                    "questionId": "skill_006_002",
                    "rate": "2",
                    "type": "question"
                },
                {
                    "id": "q08",
                    "kp": "",
                    "questionId": "skill_007_002",
                    "rate": "2",
                    "type": "question"
                },
                {
                    "id": "q09",
                    "kp": "",
                    "questionId": "exam_001",
                    "rate": "2",
                    "type": "question"
                },
                {
                    "id": "q10",
                    "kp": "",
                    "questionId": "exam_002",
                    "rate": "2",
                    "type": "question"
                },
                {
                    "id": "q11",
                    "kp": "",
                    "questionId": "exam_003",
                    "rate": "2",
                    "type": "question"
                },
                {
                    "id": "q12",
                    "kp": "",
                    "questionId": "exam_004",
                    "rate": "2",
                    "type": "question"
                }
                ],
                "value": ""
            };

            this.activitys = [{
                "characterB": {
                    "chapter": [{
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            },
                            {
                                "show": "in"
                            }
                            ],
                            "description": "导入",
                            "id": "chapter01_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_01_page_03",
                                "time": "40"
                            }
                            ]
                        },
                        {
                            "condition": [{
                                "show": "after"
                            }],
                            "description": "客户描述",
                            "id": "chapter01_02",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_02_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_02_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_02_page_03",
                                "time": "40"
                            }
                            ]
                        }
                        ],
                        "condition": [{
                            "show": "before"
                        }],
                        "description": "show",
                        "id": "chapter01",
                        "page": [{
                            "description": "页面一",
                            "id": "chapter01_page_01",
                            "time": "30"
                        },
                        {
                            "description": "页面二",
                            "id": "chapter01_page_02",
                            "time": "60"
                        }
                        ]
                    },
                    {
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            }],
                            "description": "啦啦啦啦",
                            "id": "chapter02_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter02_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter02_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter02_01_page_03",
                                "time": "40"
                            },
                            {
                                "description": "页面四",
                                "id": "chapter02_01_page_04",
                                "time": "30"
                            }
                            ]
                        }],
                        "condition": [{
                            "show": "before"
                        },
                        {
                            "show": "in"
                        }
                        ],
                        "description": "summary",
                        "id": "chapter02",
                        "page": []
                    }
                    ],
                    "score": [{
                        "questionId": "skill_001",
                        "kp": "",
                        "rate": "1",
                        "id": "q01",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_002",
                        "kp": "",
                        "rate": "5",
                        "id": "q02",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_003",
                        "kp": "",
                        "rate": "1",
                        "id": "q03",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q04",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q05",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q06",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q07",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_007_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q08",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q09",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q10",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_003",
                        "kp": "",
                        "rate": "2",
                        "id": "q11",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q12",
                        "type": "question"
                    }
                    ],
                    "question": [{
                        "question": [{
                            "courseNumber": "HITS_COURSE_005_test0713_003",
                            "rate": "1",
                            "catalog": "skill03",
                            "description": "（不定项）点火线圈主要由（）部分组成",
                            "id": "skill_003",
                            "type": "2",
                            "url": "aaa/bbb/index.html",
                            "option": [{
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#电源线束",
                                "id": "skill_003_p1"
                            },
                            {
                                "isRight": "1",
                                "description": "维修加速踏板位置传感器1#搭铁线束",
                                "id": "skill_003_p2"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#信号线束",
                                "id": "skill_003_p3"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#电源线束",
                                "id": "skill_003_p4"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#搭铁线束",
                                "id": "skill_003_p5"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#信号线束",
                                "id": "skill_003_p6"
                            },
                            {
                                "isRight": "0",
                                "description": "更换加速踏板位置传感器",
                                "id": "skill_003_p7"
                            },
                            {
                                "isRight": "0",
                                "description": "更换整车控制器",
                                "id": "skill_003_p8"
                            }
                            ]
                        }],
                        "catalog": "skill",
                        "description": "案例导入测评",
                        "remark": "",
                        "id": "skill"
                    }],
                    "progress": [],
                    "exclusive": [],
                    "handle": "",
                    "value": ""
                },
                "characterA": "",
                "courseNumber": "HITS_COURSE_005_test0713_006"
            },
            {
                "characterB": {
                    "chapter": [{
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            },
                            {
                                "show": "in"
                            }
                            ],
                            "description": "导入",
                            "id": "chapter01_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_01_page_03",
                                "time": "40"
                            }
                            ]
                        },
                        {
                            "condition": [{
                                "show": "after"
                            }],
                            "description": "客户描述",
                            "id": "chapter01_02",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_02_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_02_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_02_page_03",
                                "time": "40"
                            }
                            ]
                        }
                        ],
                        "condition": [{
                            "show": "before"
                        }],
                        "description": "show",
                        "id": "chapter01",
                        "page": [{
                            "description": "页面一",
                            "id": "chapter01_page_01",
                            "time": "30"
                        },
                        {
                            "description": "页面二",
                            "id": "chapter01_page_02",
                            "time": "60"
                        }
                        ]
                    },
                    {
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            }],
                            "description": "啦啦啦啦",
                            "id": "chapter02_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter02_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter02_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter02_01_page_03",
                                "time": "40"
                            },
                            {
                                "description": "页面四",
                                "id": "chapter02_01_page_04",
                                "time": "30"
                            }
                            ]
                        }],
                        "condition": [{
                            "show": "before"
                        },
                        {
                            "show": "in"
                        }
                        ],
                        "description": "summary",
                        "id": "chapter02",
                        "page": []
                    }
                    ],
                    "score": [{
                        "questionId": "skill_001",
                        "kp": "",
                        "rate": "1",
                        "id": "q01",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_002",
                        "kp": "",
                        "rate": "5",
                        "id": "q02",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_003",
                        "kp": "",
                        "rate": "1",
                        "id": "q03",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q04",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q05",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q06",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q07",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_007_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q08",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q09",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q10",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_003",
                        "kp": "",
                        "rate": "2",
                        "id": "q11",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q12",
                        "type": "question"
                    }
                    ],
                    "question": [{
                        "question": [{
                            "courseNumber": "HITS_COURSE_005_test0713_003",
                            "rate": "1",
                            "catalog": "skill03",
                            "description": "（不定项）点火线圈主要由（）部分组成",
                            "id": "skill_003",
                            "type": "2",
                            "url": "aaa/bbb/index.html",
                            "option": [{
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#电源线束",
                                "id": "skill_003_p1"
                            },
                            {
                                "isRight": "1",
                                "description": "维修加速踏板位置传感器1#搭铁线束",
                                "id": "skill_003_p2"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#信号线束",
                                "id": "skill_003_p3"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#电源线束",
                                "id": "skill_003_p4"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#搭铁线束",
                                "id": "skill_003_p5"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#信号线束",
                                "id": "skill_003_p6"
                            },
                            {
                                "isRight": "0",
                                "description": "更换加速踏板位置传感器",
                                "id": "skill_003_p7"
                            },
                            {
                                "isRight": "0",
                                "description": "更换整车控制器",
                                "id": "skill_003_p8"
                            }
                            ]
                        }],
                        "catalog": "skill",
                        "description": "案例导入测评",
                        "remark": "",
                        "id": "skill"
                    }],
                    "progress": [],
                    "exclusive": [],
                    "handle": "",
                    "value": ""
                },
                "characterA": "",
                "courseNumber": "HITS_COURSE_005_test0713_005"
            },
            {
                "characterB": {
                    "chapter": [{
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            },
                            {
                                "show": "in"
                            }
                            ],
                            "description": "导入",
                            "id": "chapter01_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_01_page_03",
                                "time": "40"
                            }
                            ]
                        },
                        {
                            "condition": [{
                                "show": "after"
                            }],
                            "description": "客户描述",
                            "id": "chapter01_02",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_02_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_02_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_02_page_03",
                                "time": "40"
                            }
                            ]
                        }
                        ],
                        "condition": [{
                            "show": "before"
                        }],
                        "description": "show",
                        "id": "chapter01",
                        "page": [{
                            "description": "页面一",
                            "id": "chapter01_page_01",
                            "time": "30"
                        },
                        {
                            "description": "页面二",
                            "id": "chapter01_page_02",
                            "time": "60"
                        }
                        ]
                    },
                    {
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            }],
                            "description": "啦啦啦啦",
                            "id": "chapter02_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter02_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter02_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter02_01_page_03",
                                "time": "40"
                            },
                            {
                                "description": "页面四",
                                "id": "chapter02_01_page_04",
                                "time": "30"
                            }
                            ]
                        }],
                        "condition": [{
                            "show": "before"
                        },
                        {
                            "show": "in"
                        }
                        ],
                        "description": "summary",
                        "id": "chapter02",
                        "page": []
                    }
                    ],
                    "score": [{
                        "questionId": "skill_001",
                        "kp": "",
                        "rate": "1",
                        "id": "q01",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_002",
                        "kp": "",
                        "rate": "5",
                        "id": "q02",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_003",
                        "kp": "",
                        "rate": "1",
                        "id": "q03",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q04",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q05",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q06",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q07",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_007_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q08",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q09",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q10",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_003",
                        "kp": "",
                        "rate": "2",
                        "id": "q11",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q12",
                        "type": "question"
                    }
                    ],
                    "question": [{
                        "question": [{
                            "courseNumber": "HITS_COURSE_005_test0713_003",
                            "rate": "1",
                            "catalog": "skill03",
                            "description": "（不定项）点火线圈主要由（）部分组成",
                            "id": "skill_003",
                            "type": "2",
                            "url": "aaa/bbb/index.html",
                            "option": [{
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#电源线束",
                                "id": "skill_003_p1"
                            },
                            {
                                "isRight": "1",
                                "description": "维修加速踏板位置传感器1#搭铁线束",
                                "id": "skill_003_p2"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#信号线束",
                                "id": "skill_003_p3"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#电源线束",
                                "id": "skill_003_p4"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#搭铁线束",
                                "id": "skill_003_p5"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#信号线束",
                                "id": "skill_003_p6"
                            },
                            {
                                "isRight": "0",
                                "description": "更换加速踏板位置传感器",
                                "id": "skill_003_p7"
                            },
                            {
                                "isRight": "0",
                                "description": "更换整车控制器",
                                "id": "skill_003_p8"
                            }
                            ]
                        }],
                        "catalog": "skill",
                        "description": "案例导入测评",
                        "remark": "",
                        "id": "skill"
                    }],
                    "progress": [],
                    "exclusive": [],
                    "handle": "",
                    "value": ""
                },
                "characterA": "",
                "courseNumber": "HITS_COURSE_005_test0713_007"
            },
            {
                "characterB": {
                    "chapter": [{
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            },
                            {
                                "show": "in"
                            }
                            ],
                            "description": "导入",
                            "id": "chapter01_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_01_page_03",
                                "time": "40"
                            }
                            ]
                        },
                        {
                            "condition": [{
                                "show": "after"
                            }],
                            "description": "客户描述",
                            "id": "chapter01_02",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_02_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_02_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_02_page_03",
                                "time": "40"
                            }
                            ]
                        }
                        ],
                        "condition": [{
                            "show": "before"
                        }],
                        "description": "show",
                        "id": "chapter01",
                        "page": [{
                            "description": "页面一",
                            "id": "chapter01_page_01",
                            "time": "30"
                        },
                        {
                            "description": "页面二",
                            "id": "chapter01_page_02",
                            "time": "60"
                        }
                        ]
                    },
                    {
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            }],
                            "description": "啦啦啦啦",
                            "id": "chapter02_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter02_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter02_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter02_01_page_03",
                                "time": "40"
                            },
                            {
                                "description": "页面四",
                                "id": "chapter02_01_page_04",
                                "time": "30"
                            }
                            ]
                        }],
                        "condition": [{
                            "show": "before"
                        },
                        {
                            "show": "in"
                        }
                        ],
                        "description": "summary",
                        "id": "chapter02",
                        "page": []
                    }
                    ],
                    "score": [{
                        "questionId": "skill_001",
                        "kp": "",
                        "rate": "1",
                        "id": "q01",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_002",
                        "kp": "",
                        "rate": "5",
                        "id": "q02",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_003",
                        "kp": "",
                        "rate": "1",
                        "id": "q03",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q04",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q05",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q06",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q07",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_007_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q08",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q09",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q10",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_003",
                        "kp": "",
                        "rate": "2",
                        "id": "q11",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q12",
                        "type": "question"
                    }
                    ],
                    "question": [{
                        "question": [{
                            "courseNumber": "HITS_COURSE_005_test0713_003",
                            "rate": "1",
                            "catalog": "skill03",
                            "description": "（不定项）点火线圈主要由（）部分组成",
                            "id": "skill_003",
                            "type": "2",
                            "url": "aaa/bbb/index.html",
                            "option": [{
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#电源线束",
                                "id": "skill_003_p1"
                            },
                            {
                                "isRight": "1",
                                "description": "维修加速踏板位置传感器1#搭铁线束",
                                "id": "skill_003_p2"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#信号线束",
                                "id": "skill_003_p3"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#电源线束",
                                "id": "skill_003_p4"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#搭铁线束",
                                "id": "skill_003_p5"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#信号线束",
                                "id": "skill_003_p6"
                            },
                            {
                                "isRight": "0",
                                "description": "更换加速踏板位置传感器",
                                "id": "skill_003_p7"
                            },
                            {
                                "isRight": "0",
                                "description": "更换整车控制器",
                                "id": "skill_003_p8"
                            }
                            ]
                        }],
                        "catalog": "skill",
                        "description": "案例导入测评",
                        "remark": "",
                        "id": "skill"
                    }],
                    "progress": [],
                    "exclusive": [],
                    "handle": "",
                    "value": ""
                },
                "characterA": "",
                "courseNumber": "HITS_COURSE_005_test0713_002"
            },
            {
                "characterB": {
                    "chapter": [{
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            },
                            {
                                "show": "in"
                            }
                            ],
                            "description": "导入",
                            "id": "chapter01_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_01_page_03",
                                "time": "40"
                            }
                            ]
                        },
                        {
                            "condition": [{
                                "show": "after"
                            }],
                            "description": "客户描述",
                            "id": "chapter01_02",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_02_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_02_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_02_page_03",
                                "time": "40"
                            }
                            ]
                        }
                        ],
                        "condition": [{
                            "show": "before"
                        }],
                        "description": "show",
                        "id": "chapter01",
                        "page": [{
                            "description": "页面一",
                            "id": "chapter01_page_01",
                            "time": "30"
                        },
                        {
                            "description": "页面二",
                            "id": "chapter01_page_02",
                            "time": "60"
                        }
                        ]
                    },
                    {
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            }],
                            "description": "啦啦啦啦",
                            "id": "chapter02_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter02_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter02_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter02_01_page_03",
                                "time": "40"
                            },
                            {
                                "description": "页面四",
                                "id": "chapter02_01_page_04",
                                "time": "30"
                            }
                            ]
                        }],
                        "condition": [{
                            "show": "before"
                        },
                        {
                            "show": "in"
                        }
                        ],
                        "description": "summary",
                        "id": "chapter02",
                        "page": []
                    }
                    ],
                    "score": [{
                        "questionId": "skill_001",
                        "kp": "",
                        "rate": "1",
                        "id": "q01",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_002",
                        "kp": "",
                        "rate": "5",
                        "id": "q02",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_003",
                        "kp": "",
                        "rate": "1",
                        "id": "q03",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q04",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q05",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q06",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q07",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_007_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q08",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q09",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q10",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_003",
                        "kp": "",
                        "rate": "2",
                        "id": "q11",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q12",
                        "type": "question"
                    }
                    ],
                    "question": [{
                        "question": [{
                            "courseNumber": "HITS_COURSE_005_test0713_003",
                            "rate": "1",
                            "catalog": "skill03",
                            "description": "（不定项）点火线圈主要由（）部分组成",
                            "id": "skill_003",
                            "type": "2",
                            "url": "aaa/bbb/index.html",
                            "option": [{
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#电源线束",
                                "id": "skill_003_p1"
                            },
                            {
                                "isRight": "1",
                                "description": "维修加速踏板位置传感器1#搭铁线束",
                                "id": "skill_003_p2"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#信号线束",
                                "id": "skill_003_p3"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#电源线束",
                                "id": "skill_003_p4"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#搭铁线束",
                                "id": "skill_003_p5"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#信号线束",
                                "id": "skill_003_p6"
                            },
                            {
                                "isRight": "0",
                                "description": "更换加速踏板位置传感器",
                                "id": "skill_003_p7"
                            },
                            {
                                "isRight": "0",
                                "description": "更换整车控制器",
                                "id": "skill_003_p8"
                            }
                            ]
                        }],
                        "catalog": "skill",
                        "description": "案例导入测评",
                        "remark": "",
                        "id": "skill"
                    }],
                    "progress": [],
                    "exclusive": [],
                    "handle": "",
                    "value": ""
                },
                "characterA": "",
                "courseNumber": "HITS_COURSE_005_test0713_001"
            },
            {
                "characterB": {
                    "chapter": [{
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            },
                            {
                                "show": "in"
                            }
                            ],
                            "description": "导入",
                            "id": "chapter01_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_01_page_03",
                                "time": "40"
                            }
                            ]
                        },
                        {
                            "condition": [{
                                "show": "after"
                            }],
                            "description": "客户描述",
                            "id": "chapter01_02",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_02_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_02_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_02_page_03",
                                "time": "40"
                            }
                            ]
                        }
                        ],
                        "condition": [{
                            "show": "before"
                        }],
                        "description": "show",
                        "id": "chapter01",
                        "page": [{
                            "description": "页面一",
                            "id": "chapter01_page_01",
                            "time": "30"
                        },
                        {
                            "description": "页面二",
                            "id": "chapter01_page_02",
                            "time": "60"
                        }
                        ]
                    },
                    {
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            }],
                            "description": "啦啦啦啦",
                            "id": "chapter02_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter02_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter02_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter02_01_page_03",
                                "time": "40"
                            },
                            {
                                "description": "页面四",
                                "id": "chapter02_01_page_04",
                                "time": "30"
                            }
                            ]
                        }],
                        "condition": [{
                            "show": "before"
                        },
                        {
                            "show": "in"
                        }
                        ],
                        "description": "summary",
                        "id": "chapter02",
                        "page": []
                    }
                    ],
                    "score": [{
                        "questionId": "skill_001",
                        "kp": "",
                        "rate": "1",
                        "id": "q01",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_002",
                        "kp": "",
                        "rate": "5",
                        "id": "q02",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_003",
                        "kp": "",
                        "rate": "1",
                        "id": "q03",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q04",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q05",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q06",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q07",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_007_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q08",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q09",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q10",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_003",
                        "kp": "",
                        "rate": "2",
                        "id": "q11",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q12",
                        "type": "question"
                    }
                    ],
                    "question": [{
                        "question": [{
                            "courseNumber": "HITS_COURSE_005_test0713_003",
                            "rate": "1",
                            "catalog": "skill03",
                            "description": "（不定项）点火线圈主要由（）部分组成",
                            "id": "skill_003",
                            "type": "2",
                            "url": "aaa/bbb/index.html",
                            "option": [{
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#电源线束",
                                "id": "skill_003_p1"
                            },
                            {
                                "isRight": "1",
                                "description": "维修加速踏板位置传感器1#搭铁线束",
                                "id": "skill_003_p2"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#信号线束",
                                "id": "skill_003_p3"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#电源线束",
                                "id": "skill_003_p4"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#搭铁线束",
                                "id": "skill_003_p5"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#信号线束",
                                "id": "skill_003_p6"
                            },
                            {
                                "isRight": "0",
                                "description": "更换加速踏板位置传感器",
                                "id": "skill_003_p7"
                            },
                            {
                                "isRight": "0",
                                "description": "更换整车控制器",
                                "id": "skill_003_p8"
                            }
                            ]
                        }],
                        "catalog": "skill",
                        "description": "案例导入测评",
                        "remark": "",
                        "id": "skill"
                    }],
                    "progress": [],
                    "exclusive": [],
                    "handle": "",
                    "value": ""
                },
                "characterA": "",
                "courseNumber": "HITS_COURSE_005_test0713_004"
            },
            {
                "characterB": {
                    "chapter": [{
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            },
                            {
                                "show": "in"
                            }
                            ],
                            "description": "导入",
                            "id": "chapter01_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_01_page_03",
                                "time": "40"
                            }
                            ]
                        },
                        {
                            "condition": [{
                                "show": "after"
                            }],
                            "description": "客户描述",
                            "id": "chapter01_02",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter01_02_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter01_02_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter01_02_page_03",
                                "time": "40"
                            }
                            ]
                        }
                        ],
                        "condition": [{
                            "show": "before"
                        }],
                        "description": "show",
                        "id": "chapter01",
                        "page": [{
                            "description": "页面一",
                            "id": "chapter01_page_01",
                            "time": "30"
                        },
                        {
                            "description": "页面二",
                            "id": "chapter01_page_02",
                            "time": "60"
                        }
                        ]
                    },
                    {
                        "chapter": [{
                            "condition": [{
                                "show": "before"
                            }],
                            "description": "啦啦啦啦",
                            "id": "chapter02_01",
                            "page": [{
                                "description": "页面一",
                                "id": "chapter02_01_page_01",
                                "time": "30"
                            },
                            {
                                "description": "页面二",
                                "id": "chapter02_01_page_02",
                                "time": "60"
                            },
                            {
                                "description": "页面三",
                                "id": "chapter02_01_page_03",
                                "time": "40"
                            },
                            {
                                "description": "页面四",
                                "id": "chapter02_01_page_04",
                                "time": "30"
                            }
                            ]
                        }],
                        "condition": [{
                            "show": "before"
                        },
                        {
                            "show": "in"
                        }
                        ],
                        "description": "summary",
                        "id": "chapter02",
                        "page": []
                    }
                    ],
                    "score": [{
                        "questionId": "skill_001",
                        "kp": "",
                        "rate": "1",
                        "id": "q01",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_002",
                        "kp": "",
                        "rate": "5",
                        "id": "q02",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_003",
                        "kp": "",
                        "rate": "1",
                        "id": "q03",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q04",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q05",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q06",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_006_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q07",
                        "type": "question"
                    },
                    {
                        "questionId": "skill_007_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q08",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_001",
                        "kp": "",
                        "rate": "2",
                        "id": "q09",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_002",
                        "kp": "",
                        "rate": "2",
                        "id": "q10",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_003",
                        "kp": "",
                        "rate": "2",
                        "id": "q11",
                        "type": "question"
                    },
                    {
                        "questionId": "exam_004",
                        "kp": "",
                        "rate": "2",
                        "id": "q12",
                        "type": "question"
                    }
                    ],
                    "question": [{
                        "question": [{
                            "courseNumber": "HITS_COURSE_005_test0713_003",
                            "rate": "1",
                            "catalog": "skill03",
                            "description": "（不定项）点火线圈主要由（）部分组成",
                            "id": "skill_003",
                            "type": "2",
                            "url": "aaa/bbb/index.html",
                            "option": [{
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#电源线束",
                                "id": "skill_003_p1"
                            },
                            {
                                "isRight": "1",
                                "description": "维修加速踏板位置传感器1#搭铁线束",
                                "id": "skill_003_p2"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器1#信号线束",
                                "id": "skill_003_p3"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#电源线束",
                                "id": "skill_003_p4"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#搭铁线束",
                                "id": "skill_003_p5"
                            },
                            {
                                "isRight": "0",
                                "description": "维修加速踏板位置传感器2#信号线束",
                                "id": "skill_003_p6"
                            },
                            {
                                "isRight": "0",
                                "description": "更换加速踏板位置传感器",
                                "id": "skill_003_p7"
                            },
                            {
                                "isRight": "0",
                                "description": "更换整车控制器",
                                "id": "skill_003_p8"
                            }
                            ]
                        }],
                        "catalog": "skill",
                        "description": "案例导入测评",
                        "remark": "",
                        "id": "skill"
                    }],
                    "progress": [],
                    "exclusive": [],
                    "handle": "",
                    "value": ""
                },
                "characterA": "",
                "courseNumber": "HITS_COURSE_005_test0713_003"
            }];

            // this.characterB = {
            //     catalog: [
            //         {
            //             condition: [
            //                 {
            //                     show: 'before'
            //                 }
            //             ],
            //             description: 'SHOW',
            //             id: 'SHOW'
            //         },
            //         {
            //             condition: [
            //                 {
            //                     show: 'before'
            //                 },
            //                 {
            //                     show: 'in'
            //                 }
            //             ],
            //             description: 'SKILL',
            //             id: 'skill'
            //         },
            //         {
            //             condition: [
            //                 {
            //                     show: 'after'
            //                 }
            //             ],
            //             description: 'RESULT',
            //             id: 'result'
            //         },
            //         {
            //             condition: [
            //                 {
            //                     show: 'in'
            //                 }
            //             ],
            //             description: 'EXAM',
            //             id: 'exam'
            //         }
            //     ],
            //     exclusive: [],
            //     handle: '',
            //     progress: [],
            //     question: [
            //         {
            //             catalog: 'skill',
            //             description: '案例导入测评',
            //             id: 'skill',
            //             question: [
            //                 {
            //                     catalog: 'skill01',
            //                     description: '',
            //                     id: 'skill_001',
            //                     option: [
            //                         {
            //                             description: '维修加速踏板位置传感器1#电源线束',
            //                             id: 'skill_001_p1',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器1#搭铁线束',
            //                             id: 'skill_001_p2',
            //                             isRight: '1'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器1#信号线束',
            //                             id: 'skill_001_p3',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#电源线束',
            //                             id: 'skill_001_p4',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#搭铁线束',
            //                             id: 'skill_001_p5',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#信号线束',
            //                             id: 'skill_001_p6',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '更换加速踏板位置传感器',
            //                             id: 'skill_001_p7',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '更换整车控制器',
            //                             id: 'skill_001_p8',
            //                             isRight: '0'
            //                         }
            //                     ],
            //                     rate: '1',
            //                     type: '1',
            //                     url: ''
            //                 },
            //                 {
            //                     catalog: 'skill02',
            //                     description: '',
            //                     id: 'skill_002',
            //                     option: [
            //                         {
            //                             description: '维修加速踏板位置传感器1#电源线束',
            //                             id: 'skill_002_p1',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器1#搭铁线束',
            //                             id: 'skill_002_p2',
            //                             isRight: '1'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器1#信号线束',
            //                             id: 'skill_002_p3',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#电源线束',
            //                             id: 'skill_002_p4',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#搭铁线束',
            //                             id: 'skill_002_p5',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#信号线束',
            //                             id: 'skill_002_p6',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '更换加速踏板位置传感器',
            //                             id: 'skill_002_p7',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '更换整车控制器',
            //                             id: 'skill_002_p8',
            //                             isRight: '0'
            //                         }
            //                     ],
            //                     rate: '5',
            //                     type: '2',
            //                     url: 'aaa/bbb/index.html'
            //                 },
            //                 {
            //                     catalog: 'skill03',
            //                     description: '（不定项）点火线圈主要由（）部分组成',
            //                     id: 'skill_003',
            //                     option: [
            //                         {
            //                             description: '维修加速踏板位置传感器1#电源线束',
            //                             id: 'skill_003_p1',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器1#搭铁线束',
            //                             id: 'skill_003_p2',
            //                             isRight: '1'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器1#信号线束',
            //                             id: 'skill_003_p3',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#电源线束',
            //                             id: 'skill_003_p4',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#搭铁线束',
            //                             id: 'skill_003_p5',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#信号线束',
            //                             id: 'skill_003_p6',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '更换加速踏板位置传感器',
            //                             id: 'skill_003_p7',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '更换整车控制器',
            //                             id: 'skill_003_p8',
            //                             isRight: '0'
            //                         }
            //                     ],
            //                     rate: '1',
            //                     type: '2',
            //                     url: 'aaa/bbb/index.html'
            //                 },
            //                 {
            //                     catalog: 'skill04',
            //                     description: '（不定项）点火线圈主要由（）部分组成',
            //                     id: 'skill_004',
            //                     option: [
            //                         {
            //                             description: '维修加速踏板位置传感器1#电源线束',
            //                             id: 'skill_004_p1',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器1#搭铁线束',
            //                             id: 'skill_004_p2',
            //                             isRight: '1'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器1#信号线束',
            //                             id: 'skill_004_p3',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#电源线束',
            //                             id: 'skill_004_p4',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#搭铁线束',
            //                             id: 'skill_004_p5',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#信号线束',
            //                             id: 'skill_004_p6',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '更换加速踏板位置传感器',
            //                             id: 'skill_004_p7',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '更换整车控制器',
            //                             id: 'skill_004_p8',
            //                             isRight: '0'
            //                         }
            //                     ],
            //                     rate: '2',
            //                     type: '2',
            //                     url: 'aaa/bbb/index.html'
            //                 },
            //                 {
            //                     catalog: '',
            //                     description: '1、这是填空加选择题',
            //                     id: 'skill_005',
            //                     question: [
            //                         {
            //                             description:
            //                                 '打开点火开关到ON档，在不断开加速踏板位置传感器插头的状态下，在传感器插头位置分别测量两个传感器的电源电压，传感器1的电源电压是$$XCJ伏，传感器2的电源电压是$XCJ$伏。',
            //                             id: 'skill_005_001',
            //                             option: [
            //                                 {
            //                                     description: '3V',
            //                                     id: 'skill_005_001_a001',
            //                                     isRight: '1'
            //                                 },
            //                                 {
            //                                     description: '3V',
            //                                     id: 'skill_005_001_a002',
            //                                     isRight: '1'
            //                                 }
            //                             ],
            //                             type: '9',
            //                             url: ''
            //                         },
            //                         {
            //                             description: '根据以上测量结果判断，两个传感器的电源是否正常:',
            //                             id: 'skill_005_002',
            //                             option: [
            //                                 {
            //                                     description: '正常',
            //                                     id: 'skill_005_002_a003',
            //                                     isRight: '0'
            //                                 },
            //                                 {
            //                                     description: '不正常',
            //                                     id: 'skill_005_002_a004',
            //                                     isRight: '1'
            //                                 }
            //                             ],
            //                             type: '1',
            //                             url: ''
            //                         }
            //                     ],
            //                     rate: '',
            //                     type: '10',
            //                     url: ''
            //                 },
            //                 {
            //                     catalog: '',
            //                     description: '2、这是填空加选择题',
            //                     id: 'skill_006',
            //                     question: [
            //                         {
            //                             description:
            //                                 '打开点火开关到ON档，在不断开加速踏板位置传感器插头的状态下，在传感器插头位置分别测量两个传感器的接地线（万用表红表笔连接蓄电池正极，黑表笔分别连接两个传感器的接地线），其电压分别是$XCJ$伏、$XCJ$伏。',
            //                             id: 'skill_006_001',
            //                             option: [
            //                                 {
            //                                     description: '3V',
            //                                     id: 'skill_006_001_a001',
            //                                     isRight: '1'
            //                                 },
            //                                 {
            //                                     description: '3V',
            //                                     id: 'skill_006_001_a002',
            //                                     isRight: '1'
            //                                 }
            //                             ],
            //                             type: '9',
            //                             url: ''
            //                         },
            //                         {
            //                             description: '根据以上测量结果判断，两个传感器的接地线是否正常:',
            //                             id: 'skill_006_002',
            //                             option: [
            //                                 {
            //                                     description: '正常',
            //                                     id: 'skill_006_002_a003',
            //                                     isRight: '0'
            //                                 },
            //                                 {
            //                                     description: '不正常',
            //                                     id: 'skill_006_002_a004',
            //                                     isRight: '1'
            //                                 }
            //                             ],
            //                             type: '1',
            //                             url: ''
            //                         }
            //                     ],
            //                     rate: '',
            //                     type: '10',
            //                     url: ''
            //                 },
            //                 {
            //                     catalog: '',
            //                     description: '3、这是表格和选择题',
            //                     id: 'skill_007',
            //                     question: [
            //                         {
            //                             description: '',
            //                             id: 'skill_007_001',
            //                             question: [
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_007_001_001',
            //                                     option: [],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['操作内容', '油门踏板开度（％）', '信号1电压（V）', '信号2电压（V）']
            //                                     },
            //                                     url: ''
            //                                 },
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_007_001_002',
            //                                     option: [
            //                                         {
            //                                             description: '30%',
            //                                             id: 'skill_007_001_002_001',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '4v',
            //                                             id: 'skill_007_001_002_002',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_007_001_002_003',
            //                                             isRight: '1'
            //                                         }
            //                                     ],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['不踩加速踏板', '', '', '']
            //                                     },
            //                                     url: ''
            //                                 },
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_007_001_003',
            //                                     option: [
            //                                         {
            //                                             description: '30%',
            //                                             id: 'skill_007_001_003_001',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '4v',
            //                                             id: 'skill_007_001_003_002',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_007_001_003_003',
            //                                             isRight: '1'
            //                                         }
            //                                     ],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['加速踏板踩下一半', '', '', '']
            //                                     },
            //                                     url: ''
            //                                 },
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_007_001_004',
            //                                     option: [
            //                                         {
            //                                             description: '30%',
            //                                             id: 'skill_007_001_004_001',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '4v',
            //                                             id: 'skill_007_001_004_002',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_007_001_004_003',
            //                                             isRight: '1'
            //                                         }
            //                                     ],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['加速踏板踩到底', '', '', '']
            //                                     },
            //                                     url: ''
            //                                 }
            //                             ],
            //                             type: '3',
            //                             url: ''
            //                         },
            //                         {
            //                             description: '通过以上数据分析，加速踏板位置传感器两个信号之间符合什么样的逻辑关系？',
            //                             id: 'skill_007_002',
            //                             option: [
            //                                 {
            //                                     description: '两个信号呈相反变化',
            //                                     id: 'skill_007_002_001',
            //                                     isRight: '1'
            //                                 },
            //                                 {
            //                                     description: '一个值变大的时候另一个值变小',
            //                                     id: 'skill_007_002_001',
            //                                     isRight: '0'
            //                                 },
            //                                 {
            //                                     description: '两个信号之间符合2倍的关系',
            //                                     id: 'skill_007_002_001',
            //                                     isRight: '0'
            //                                 },
            //                                 {
            //                                     description: '两个信号之间没有逻辑关系',
            //                                     id: 'skill_007_002_001',
            //                                     isRight: '0'
            //                                 }
            //                             ],
            //                             type: '1',
            //                             url: ''
            //                         }
            //                     ],
            //                     rate: '',
            //                     type: '11',
            //                     url: ''
            //                 },
            //                 {
            //                     catalog: '',
            //                     description: '4、这是表格',
            //                     id: 'skill_008',
            //                     question: [
            //                         {
            //                             description: '',
            //                             id: 'skill_008_001',
            //                             question: [
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_008_001_001',
            //                                     option: [],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['操作内容', '油门踏板开度（％）', '信号1电压（V）', '信号2电压（V）', '故障码']
            //                                     },
            //                                     url: ''
            //                                 },
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_008_001_002',
            //                                     option: [
            //                                         {
            //                                             description: '30%',
            //                                             id: 'skill_008_001_002_001',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '4v',
            //                                             id: 'skill_008_001_002_002',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_002_003',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_002_004',
            //                                             isRight: '1'
            //                                         }
            //                                     ],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['断开传感器1电源', '', '', '', '$alphanumeric$']
            //                                     },
            //                                     url: ''
            //                                 },
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_008_001_003',
            //                                     option: [
            //                                         {
            //                                             description: '30%',
            //                                             id: 'skill_008_001_003_001',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '4v',
            //                                             id: 'skill_008_001_003_002',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_003_003',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_003_004',
            //                                             isRight: '1'
            //                                         }
            //                                     ],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['断开传感器2电源', '', '', '', '$alphanumeric$']
            //                                     },
            //                                     url: ''
            //                                 },
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_008_001_004',
            //                                     option: [
            //                                         {
            //                                             description: '30%',
            //                                             id: 'skill_008_001_004_001',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '4v',
            //                                             id: 'skill_008_001_004_002',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_004_003',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_004_004',
            //                                             isRight: '1'
            //                                         }
            //                                     ],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['断开传感器1接地', '', '', '', '$alphanumeric$']
            //                                     },
            //                                     url: ''
            //                                 },
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_008_001_005',
            //                                     option: [
            //                                         {
            //                                             description: '30%',
            //                                             id: 'skill_008_001_005_001',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '4v',
            //                                             id: 'skill_008_001_005_002',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_005_003',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_005_004',
            //                                             isRight: '1'
            //                                         }
            //                                     ],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['断开传感器2接地', '', '', '', '$alphanumeric$']
            //                                     },
            //                                     url: ''
            //                                 },
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_008_001_006',
            //                                     option: [
            //                                         {
            //                                             description: '30%',
            //                                             id: 'skill_008_001_006_001',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '4v',
            //                                             id: 'skill_008_001_006_002',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_006_003',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_006_004',
            //                                             isRight: '1'
            //                                         }
            //                                     ],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['断开传感器1信号', '', '', '', '$alphanumeric$']
            //                                     },
            //                                     url: ''
            //                                 },
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_008_001_007',
            //                                     option: [
            //                                         {
            //                                             description: '30%',
            //                                             id: 'skill_008_001_007_001',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '4v',
            //                                             id: 'skill_008_001_007_002',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_007_003',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_007_004',
            //                                             isRight: '1'
            //                                         }
            //                                     ],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['断开传感器2信号', '', '', '', '$alphanumeric$']
            //                                     },
            //                                     url: ''
            //                                 },
            //                                 {
            //                                     description: '',
            //                                     id: 'skill_008_001_008',
            //                                     option: [
            //                                         {
            //                                             description: '30%',
            //                                             id: 'skill_008_001_008_001',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '4v',
            //                                             id: 'skill_008_001_008_002',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_008_003',
            //                                             isRight: '1'
            //                                         },
            //                                         {
            //                                             description: '5v',
            //                                             id: 'skill_008_001_008_004',
            //                                             isRight: '1'
            //                                         }
            //                                     ],
            //                                     td: {
            //                                         option: [],
            //                                         td: ['将传感器1和2信号线短接', '', '', '', '$alphanumeric$']
            //                                     },
            //                                     url: ''
            //                                 }
            //                             ],
            //                             type: '3',
            //                             url: ''
            //                         }
            //                     ],
            //                     rate: '',
            //                     type: '11',
            //                     url: ''
            //                 }
            //             ],
            //             remark: ''
            //         },
            //         {
            //             catalog: 'exam',
            //             description: '案例导入测评',
            //             id: 'exam',
            //             question: [
            //                 {
            //                     catalog: 'exam01',
            //                     description: '（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？',
            //                     id: 'exam_001',
            //                     option: [
            //                         {
            //                             description: '维修加速踏板位置传感器1#电源线束',
            //                             id: 'exam_001_p1',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器1#搭铁线束',
            //                             id: 'exam_001_p2',
            //                             isRight: '1'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器1#信号线束',
            //                             id: 'exam_001_p3',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#电源线束',
            //                             id: 'exam_001_p4',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#搭铁线束',
            //                             id: 'exam_001_p5',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '维修加速踏板位置传感器2#信号线束',
            //                             id: 'exam_001_p6',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '更换加速踏板位置传感器',
            //                             id: 'exam_001_p7',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '更换整车控制器',
            //                             id: 'exam_001_p8',
            //                             isRight: '0'
            //                         }
            //                     ],
            //                     rate: '2',
            //                     type: '1',
            //                     url: ''
            //                 },
            //                 {
            //                     catalog: '',
            //                     description: '1、加速踏板模块通常由几个传感器组成？',
            //                     id: 'exam_002',
            //                     option: [
            //                         {
            //                             description: '1个',
            //                             id: 'exam_002_p1',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '2个',
            //                             id: 'exam_002_p2',
            //                             isRight: '1'
            //                         },
            //                         {
            //                             description: '3个',
            //                             id: 'exam_002_p3',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '4个',
            //                             id: 'exam_002_p4',
            //                             isRight: '0'
            //                         }
            //                     ],
            //                     rate: '2',
            //                     type: '1',
            //                     url: ''
            //                 },
            //                 {
            //                     catalog: '',
            //                     description: '2、加速踏板位置传感器的电源电压通常是多少？',
            //                     id: 'exam_003',
            //                     option: [
            //                         {
            //                             description: '0V',
            //                             id: 'exam_003_p1',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '5V',
            //                             id: 'exam_003_p2',
            //                             isRight: '1'
            //                         },
            //                         {
            //                             description: '8V',
            //                             id: 'exam_003_p3',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '12V',
            //                             id: 'exam_003_p4',
            //                             isRight: '0'
            //                         }
            //                     ],
            //                     rate: '2',
            //                     type: '1',
            //                     url: ''
            //                 },
            //                 {
            //                     catalog: '',
            //                     description: '3、接触式加速踏板位置传感器采用什么原理改变信号电压？',
            //                     id: 'exam_004',
            //                     option: [
            //                         {
            //                             description: '串联电路的分压原理',
            //                             id: 'exam_004_p1',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '串联电路的分压原理',
            //                             id: 'exam_004_p2',
            //                             isRight: '1'
            //                         },
            //                         {
            //                             description: '传感器元件的霍尔效应',
            //                             id: 'exam_004_p3',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '传感器元件的光电效应',
            //                             id: 'exam_004_p4',
            //                             isRight: '0'
            //                         }
            //                     ],
            //                     rate: '2',
            //                     type: '1',
            //                     url: ''
            //                 },
            //                 {
            //                     catalog: '',
            //                     description: '4、非接触式加速踏板位置传感器随加速踏板旋转的部件为？',
            //                     id: 'exam_005',
            //                     option: [
            //                         {
            //                             description: '滑动电阻',
            //                             id: 'exam_005_p1',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '霍尔元件',
            //                             id: 'exam_005_p2',
            //                             isRight: '1'
            //                         },
            //                         {
            //                             description: '磁铁',
            //                             id: 'exam_005_p3',
            //                             isRight: '0'
            //                         },
            //                         {
            //                             description: '滑动触点',
            //                             id: 'exam_005_p4',
            //                             isRight: '0'
            //                         }
            //                     ],
            //                     rate: '2',
            //                     type: '1',
            //                     url: ''
            //                 }
            //             ],
            //             remark: ''
            //         }
            //     ],
            //     score: [
            //         {
            //             id: 'q01',
            //             kp: '',
            //             questionId: 'skill_001',
            //             rate: '1',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q02',
            //             kp: '',
            //             questionId: 'skill_002',
            //             rate: '5',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q03',
            //             kp: '',
            //             questionId: 'skill_003',
            //             rate: '1',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q04',
            //             kp: '',
            //             questionId: 'skill_004',
            //             rate: '2',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q05',
            //             kp: '',
            //             questionId: 'skill_004',
            //             rate: '2',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q06',
            //             kp: '',
            //             questionId: 'skill_006_001',
            //             rate: '2',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q07',
            //             kp: '',
            //             questionId: 'skill_006_002',
            //             rate: '2',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q08',
            //             kp: '',
            //             questionId: 'skill_007_002',
            //             rate: '2',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q09',
            //             kp: '',
            //             questionId: 'exam_001',
            //             rate: '2',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q10',
            //             kp: '',
            //             questionId: 'exam_002',
            //             rate: '2',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q11',
            //             kp: '',
            //             questionId: 'exam_003',
            //             rate: '2',
            //             type: 'question'
            //         },
            //         {
            //             id: 'q12',
            //             kp: '',
            //             questionId: 'exam_004',
            //             rate: '2',
            //             type: 'question'
            //         }
            //     ],
            //     value: ''
            // };
            // this.characterB = {
            //     "exclusive": "",
            //     "handle": "",
            //     "progress": "",
            //     "question": [
            //         {
            //             "catalog": "skill",
            //             "description": "案例导入测评",
            //             "id": "skill",
            //             "question": [
            //                 {
            //                     "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
            //                     "id": "show_0012",
            //                     'catalog': 'skill01',
            //                     "option": [{
            //                         "description": "火花塞间隙变大，点火击穿电压增加",
            //                         "id": "show_0012_p1",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "火花塞间隙变大，充电时间增加",
            //                         "id": "show_0012_p2",
            //                         "isRight": "1"
            //                     }, {
            //                         "description": "火花塞间隙变小，点火击穿电压增加",
            //                         "id": "show_0012_p3",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
            //                         "id": "show_0012_p4",
            //                         "isRight": "0"
            //                     }],
            //                     "rate": "1",
            //                     "type": "1",
            //                     "url": ""
            //                 },
            //                 {
            //                     "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
            //                     "id": "show_0011",
            //                     'catalog': 'skill02',
            //                     "option": [{
            //                         "description": "火花塞间隙变大，点火击穿电压增加",
            //                         "id": "show_0011_p1",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "火花塞间隙变大，充电时间增加",
            //                         "id": "show_0011_p2",
            //                         "isRight": "1"
            //                     }, {
            //                         "description": "火花塞间隙变小，点火击穿电压增加",
            //                         "id": "show_0011_p3",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
            //                         "id": "show_003_p4",
            //                         "isRight": "0"
            //                     }],
            //                     "rate": "1",
            //                     "type": "1",
            //                     "url": ""
            //                 },
            //                 {
            //                     "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
            //                     "id": "show_0010",
            //                     'catalog': 'skill03',
            //                     "option": [{
            //                         "description": "火花塞间隙变大，点火击穿电压增加",
            //                         "id": "show_0010_p1",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "火花塞间隙变大，充电时间增加",
            //                         "id": "show_0010_p2",
            //                         "isRight": "1"
            //                     }, {
            //                         "description": "火花塞间隙变小，点火击穿电压增加",
            //                         "id": "show_0010_p3",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
            //                         "id": "show_0010_p4",
            //                         "isRight": "0"
            //                     }],
            //                     "rate": "1",
            //                     "type": "1",
            //                     "url": ""
            //                 },
            //                 {
            //                     "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
            //                     "id": "show_001",
            //                     'catalog': 'skill04',
            //                     "option": [{
            //                         "description": "火花塞间隙变大，点火击穿电压增加",
            //                         "id": "show_001_p1",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "火花塞间隙变大，充电时间增加",
            //                         "id": "show_001_p2",
            //                         "isRight": "1"
            //                     }, {
            //                         "description": "火花塞间隙变小，点火击穿电压增加",
            //                         "id": "show_001_p3",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
            //                         "id": "show_001_p4",
            //                         "isRight": "0"
            //                     }],
            //                     "rate": "1",
            //                     "type": "1",
            //                     "url": ""
            //                 },
            //                 {
            //                     "description": "（不定项）点火线圈主要由（）部分组成",
            //                     "id": "show_002",
            //                     "option": [{
            //                         "description": "初级线圈、次级线圈",
            //                         "id": "show_002_p1",
            //                         "isRight": "1"
            //                     }, {
            //                         "description": "弹簧、护套",
            //                         "id": "show_002_p2",
            //                         "isRight": "1"
            //                     }, {
            //                         "description": "高压二极管、抗干扰电阻",
            //                         "id": "show_002_p3",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "火花塞",
            //                         "id": "show_002_p4",
            //                         "isRight": "0"
            //                     }],
            //                     "rate": "5",
            //                     "type": "2",
            //                     "url": "aaa/bbb/index.html"
            //                 }, {
            //                     "description": "这是一个连线题",
            //                     "id": "show_004",
            //                     "question": [{
            //                         "id": "show_004_001_001",
            //                         "option": [],
            //                         "rate": "",
            //                         "td": {
            //                             "option": [],
            //                             "td": ["项目内容", "连线区域", "项目内容"]
            //                         }
            //                     }, {
            //                         "id": "show_004_001_001_001",
            //                         "option": [{
            //                             "description": "发动机严重抖动、动力不足",
            //                             "id": "show_004_001_001_001_a001",
            //                             "isRight": "1"
            //                         }],
            //                         "rate": "1",
            //                         "td": {
            //                             "option": ["all"],
            //                             "td": ["火花塞间隙过大"]
            //                         }
            //                     }, {
            //                         "id": "show_005_001_001_002",
            //                         "option": [{
            //                             "description": "发动机间歇性动力不足",
            //                             "id": "show_005_001_001_002_a001",
            //                             "isRight": "1"
            //                         }],
            //                         "rate": "2",
            //                         "td": {
            //                             "option": ["all"],
            //                             "td": ["点火线圈内部断路"]
            //                         }
            //                     }, {
            //                         "id": "show_005_001_001_003",
            //                         "option": [{
            //                             "description": "发动机抖动、尾气油味浓",
            //                             "id": "show_005_001_001_003_a001",
            //                             "isRight": "1"
            //                         }],
            //                         "rate": "2",
            //                         "td": {
            //                             "option": ["all"],
            //                             "td": ["火花塞型号不对"]
            //                         }
            //                     }, {
            //                         "id": "show_005_001_001_004",
            //                         "option": [{
            //                             "description": "发动机爆燃、温度过高",
            //                             "id": "show_005_001_001_004_a001",
            //                             "isRight": "1"
            //                         }],
            //                         "rate": "1",
            //                         "td": {
            //                             "option": ["all"],
            //                             "td": ["点火线圈插接件虚接"]
            //                         }
            //                     }],
            //                     "rate": "",
            //                     "type": "6",
            //                     "url": "aaa/bbb/index.html"
            //                 }, {
            //                     "description": "将下列元件的故障现象拖拽至相对应的元件框内",
            //                     "id": "show_005",
            //                     "option": [{
            //                         "description": "发动机爆燃、温度过高",
            //                         "id": "show_005_001_p1",
            //                         "isRight": "1"
            //                     }, {
            //                         "description": "火花塞电极无火花产生",
            //                         "id": "show_005_002_p1",
            //                         "isRight": "1"
            //                     }, {
            //                         "description": "点火线圈过热",
            //                         "id": "show_005_003_p1",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "火花塞电极火花时有时无",
            //                         "id": "show_005_004_p1",
            //                         "isRight": "0"
            //                     }],
            //                     "question": [{
            //                         "description": "火花塞",
            //                         "id": "show_005_001",
            //                         "options": [{
            //                             "description": "发动机爆燃、温度过高",
            //                             "id": "show_005_001_p1",
            //                             "isRight": "1"
            //                         }],
            //                         "rate": "1",
            //                         "url": ""
            //                     }, {
            //                         "description": "火花塞222",
            //                         "id": "show_005_002",
            //                         "options": [{
            //                             "description": "火花塞电极无火花产生",
            //                             "id": "show_005_002_p1",
            //                             "isRight": "1"
            //                         }],
            //                         "rate": "1",
            //                         "url": ""
            //                     }],
            //                     "rate": "",
            //                     "type": "7",
            //                     "url": ""
            //                 }, {
            //                     "description": "通过实际测量，点火系统中影响发动机抖动的原因都有哪些因素？",
            //                     "id": "show_006",
            //                     "option": [{
            //                         "description": "初级线圈、次级线圈",
            //                         "id": "show_006_p1",
            //                         "isRight": "1"
            //                     }],
            //                     "rate": "1",
            //                     "type": "8",
            //                     "url": ""
            //                 }, {
            //                     "description": "这是填空加选择题",
            //                     "id": "show_007",
            //                     "question": [{
            //                         "description": "传感器1的电源电压是$XCJ$伏，传感器2的电源电压是$XCJ$伏",
            //                         "id": "show_007_001",
            //                         "option": [{
            //                             "description": "3V",
            //                             "id": "show_007_001_a001",
            //                             "isRight": "1"
            //                         }, {
            //                             "description": "3V",
            //                             "id": "show_007_001_a002",
            //                             "isRight": "1"
            //                         }],
            //                         "type": "9",
            //                         "url": ""
            //                     }, {
            //                         "description": "根据以上测量结果判断，两个传感器的电源是否正常",
            //                         "id": "show_007_002",
            //                         "option": [{
            //                             "description": "3V",
            //                             "id": "show_007_002_a003",
            //                             "isRight": "0"
            //                         }, {
            //                             "description": "3V",
            //                             "id": "show_007_002_a004",
            //                             "isRight": "1"
            //                         }],
            //                         "type": "1",
            //                         "url": ""
            //                     }],
            //                     "rate": "1",
            //                     "type": "10",
            //                     "url": ""
            //                 }, {
            //                     "description": "这是表格和选择题",
            //                     "id": "show_009",
            //                     "question": [{
            //                         "description": "",
            //                         "id": "show_009_001",
            //                         "question": [{
            //                             "description": "",
            //                             "id": "show_009_001_001",
            //                             "option": [],
            //                             "td": {
            //                                 "option": [],
            //                                 "td": ["操作内容", "油门踏板开度（％）", "信号1电压（V）", "信号2电压（V）"]
            //                             },
            //                             "url": ""
            //                         }, {
            //                             "description": "",
            //                             "id": "show_009_001_002",
            //                             "option": [{
            //                                 "description": "30%",
            //                                 "id": "show_009_001_002_001",
            //                                 "isRight": "1"
            //                             }, {
            //                                 "description": "4v",
            //                                 "id": "show_009_001_002_002",
            //                                 "isRight": "1"
            //                             }, {
            //                                 "description": "5v",
            //                                 "id": "show_009_001_002_003",
            //                                 "isRight": "1"
            //                             }],
            //                             "td": {
            //                                 "option": [],
            //                                 "td": ["不踩加速踏板", "", "", ""]
            //                             },
            //                             "url": ""
            //                         }, {
            //                             "description": "",
            //                             "id": "show_009_001_003",
            //                             "option": [{
            //                                 "description": "30%",
            //                                 "id": "show_009_001_003_001",
            //                                 "isRight": "1"
            //                             }, {
            //                                 "description": "4v",
            //                                 "id": "show_009_001_003_002",
            //                                 "isRight": "1"
            //                             }, {
            //                                 "description": "5v",
            //                                 "id": "show_009_001_003_003",
            //                                 "isRight": "1"
            //                             }],
            //                             "td": {
            //                                 "option": [],
            //                                 "td": ["加速踏板踩下一半", "", "", ""]
            //                             },
            //                             "url": ""
            //                         }, {
            //                             "description": "",
            //                             "id": "show_009_001_004",
            //                             "option": [{
            //                                 "description": "30%",
            //                                 "id": "show_009_001_004_001",
            //                                 "isRight": "1"
            //                             }, {
            //                                 "description": "4v",
            //                                 "id": "show_009_001_004_002",
            //                                 "isRight": "1"
            //                             }, {
            //                                 "description": "5v",
            //                                 "id": "show_009_001_004_003",
            //                                 "isRight": "1"
            //                             }],
            //                             "td": {
            //                                 "option": [],
            //                                 "td": ["加速踏板踩到底", "", "", ""]
            //                             },
            //                             "url": ""
            //                         }],
            //                         "type": "3",
            //                         "url": ""
            //                     }, {
            //                         "description": "通过以上数据分析，加速踏板位置传感器两个信号之间符合什么样的逻辑关系？",
            //                         "id": "show_009_002",
            //                         "option": [{
            //                             "description": "两个信号呈相反变化",
            //                             "id": "show_009_002_001",
            //                             "isRight": "1"
            //                         }, {
            //                             "description": "一个值变大的时候另一个值变小",
            //                             "id": "show_009_002_002",
            //                             "isRight": "0"
            //                         }, {
            //                             "description": "两个信号之间符合2倍的关系",
            //                             "id": "show_009_002_003",
            //                             "isRight": "0"
            //                         }, {
            //                             "description": "两个信号之间没有逻辑关系",
            //                             "id": "show_009_002_004",
            //                             "isRight": "0"
            //                         }],
            //                         "type": "1",
            //                         "url": ""
            //                     }],
            //                     "rate": "",
            //                     "type": "11",
            //                     "url": ""
            //                 }],
            //             "remark": ""
            //         },
            //         {
            //             "catalog": "exam",
            //             "description": "案例导入测评",
            //             "id": "skill",
            //             "question": [{
            //                 "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
            //                 "id": "show_001",
            //                 'catalog': 'exam01',
            //                 "option": [{
            //                     "description": "火花塞间隙变大，点火击穿电压增加",
            //                     "id": "show_001_p1",
            //                     "isRight": "0"
            //                 }, {
            //                     "description": "火花塞间隙变大，充电时间增加",
            //                     "id": "show_001_p2",
            //                     "isRight": "1"
            //                 }, {
            //                     "description": "火花塞间隙变小，点火击穿电压增加",
            //                     "id": "show_001_p3",
            //                     "isRight": "0"
            //                 }, {
            //                     "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
            //                     "id": "show_001_p4",
            //                     "isRight": "0"
            //                 }],
            //                 "rate": "1",
            //                 "type": "1",
            //                 "url": ""
            //             }, {
            //                 "description": "（不定项）点火线圈主要由（）部分组成",
            //                 "id": "show_002",
            //                 "option": [{
            //                     "description": "初级线圈、次级线圈",
            //                     "id": "show_002_p1",
            //                     "isRight": "1"
            //                 }, {
            //                     "description": "弹簧、护套",
            //                     "id": "show_002_p2",
            //                     "isRight": "1"
            //                 }, {
            //                     "description": "高压二极管、抗干扰电阻",
            //                     "id": "show_002_p3",
            //                     "isRight": "0"
            //                 }, {
            //                     "description": "火花塞",
            //                     "id": "show_002_p4",
            //                     "isRight": "0"
            //                 }],
            //                 "rate": "5",
            //                 "type": "2",
            //                 "url": "aaa/bbb/index.html"
            //             }, {
            //                 "description": "这是一个连线题",
            //                 "id": "show_004",
            //                 "question": [{
            //                     "id": "show_004_001_001",
            //                     "option": [],
            //                     "rate": "",
            //                     "td": {
            //                         "option": [],
            //                         "td": ["项目内容", "连线区域", "项目内容"]
            //                     }
            //                 }, {
            //                     "id": "show_004_001_001_001",
            //                     "option": [{
            //                         "description": "发动机严重抖动、动力不足",
            //                         "id": "show_004_001_001_001_a001",
            //                         "isRight": "1"
            //                     }],
            //                     "rate": "1",
            //                     "td": {
            //                         "option": ["all"],
            //                         "td": ["火花塞间隙过大"]
            //                     }
            //                 }, {
            //                     "id": "show_005_001_001_002",
            //                     "option": [{
            //                         "description": "发动机间歇性动力不足",
            //                         "id": "show_005_001_001_002_a001",
            //                         "isRight": "1"
            //                     }],
            //                     "rate": "2",
            //                     "td": {
            //                         "option": ["all"],
            //                         "td": ["点火线圈内部断路"]
            //                     }
            //                 }, {
            //                     "id": "show_005_001_001_003",
            //                     "option": [{
            //                         "description": "发动机抖动、尾气油味浓",
            //                         "id": "show_005_001_001_003_a001",
            //                         "isRight": "1"
            //                     }],
            //                     "rate": "2",
            //                     "td": {
            //                         "option": ["all"],
            //                         "td": ["火花塞型号不对"]
            //                     }
            //                 }, {
            //                     "id": "show_005_001_001_004",
            //                     "option": [{
            //                         "description": "发动机爆燃、温度过高",
            //                         "id": "show_005_001_001_004_a001",
            //                         "isRight": "1"
            //                     }],
            //                     "rate": "1",
            //                     "td": {
            //                         "option": ["all"],
            //                         "td": ["点火线圈插接件虚接"]
            //                     }
            //                 }],
            //                 "rate": "",
            //                 "type": "6",
            //                 "url": "aaa/bbb/index.html"
            //             }, {
            //                 "description": "将下列元件的故障现象拖拽至相对应的元件框内",
            //                 "id": "show_005",
            //                 "option": [{
            //                     "description": "发动机爆燃、温度过高",
            //                     "id": "show_005_001_p1",
            //                     "isRight": "1"
            //                 }, {
            //                     "description": "火花塞电极无火花产生",
            //                     "id": "show_005_002_p1",
            //                     "isRight": "1"
            //                 }, {
            //                     "description": "点火线圈过热",
            //                     "id": "show_005_003_p1",
            //                     "isRight": "0"
            //                 }, {
            //                     "description": "火花塞电极火花时有时无",
            //                     "id": "show_005_004_p1",
            //                     "isRight": "0"
            //                 }],
            //                 "question": [{
            //                     "description": "火花塞",
            //                     "id": "show_005_001",
            //                     "options": [{
            //                         "description": "发动机爆燃、温度过高",
            //                         "id": "show_005_001_p1",
            //                         "isRight": "1"
            //                     }],
            //                     "rate": "1",
            //                     "url": ""
            //                 }, {
            //                     "description": "火花塞222",
            //                     "id": "show_005_002",
            //                     "options": [{
            //                         "description": "火花塞电极无火花产生",
            //                         "id": "show_005_002_p1",
            //                         "isRight": "1"
            //                     }],
            //                     "rate": "1",
            //                     "url": ""
            //                 }],
            //                 "rate": "",
            //                 "type": "7",
            //                 "url": ""
            //             }, {
            //                 "description": "通过实际测量，点火系统中影响发动机抖动的原因都有哪些因素？",
            //                 "id": "show_006",
            //                 "option": [{
            //                     "description": "初级线圈、次级线圈",
            //                     "id": "show_006_p1",
            //                     "isRight": "1"
            //                 }],
            //                 "rate": "1",
            //                 "type": "8",
            //                 "url": ""
            //             }, {
            //                 "description": "这是填空加选择题",
            //                 "id": "show_007",
            //                 "question": [{
            //                     "description": "传感器1的电源电压是$XCJ$伏，传感器2的电源电压是$XCJ$伏",
            //                     "id": "show_007_001",
            //                     "option": [{
            //                         "description": "3V",
            //                         "id": "show_007_001_a001",
            //                         "isRight": "1"
            //                     }, {
            //                         "description": "3V",
            //                         "id": "show_007_001_a002",
            //                         "isRight": "1"
            //                     }],
            //                     "type": "9",
            //                     "url": ""
            //                 }, {
            //                     "description": "根据以上测量结果判断，两个传感器的电源是否正常",
            //                     "id": "show_007_002",
            //                     "option": [{
            //                         "description": "3V",
            //                         "id": "show_007_002_a003",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "3V",
            //                         "id": "show_007_002_a004",
            //                         "isRight": "1"
            //                     }],
            //                     "type": "1",
            //                     "url": ""
            //                 }],
            //                 "rate": "1",
            //                 "type": "10",
            //                 "url": ""
            //             }, {
            //                 "description": "这是表格和选择题",
            //                 "id": "show_009",
            //                 "question": [{
            //                     "description": "",
            //                     "id": "show_009_001",
            //                     "question": [{
            //                         "description": "",
            //                         "id": "show_009_001_001",
            //                         "option": [],
            //                         "td": {
            //                             "option": [],
            //                             "td": ["操作内容", "油门踏板开度（％）", "信号1电压（V）", "信号2电压（V）"]
            //                         },
            //                         "url": ""
            //                     }, {
            //                         "description": "",
            //                         "id": "show_009_001_002",
            //                         "option": [{
            //                             "description": "30%",
            //                             "id": "show_009_001_002_001",
            //                             "isRight": "1"
            //                         }, {
            //                             "description": "4v",
            //                             "id": "show_009_001_002_002",
            //                             "isRight": "1"
            //                         }, {
            //                             "description": "5v",
            //                             "id": "show_009_001_002_003",
            //                             "isRight": "1"
            //                         }],
            //                         "td": {
            //                             "option": [],
            //                             "td": ["不踩加速踏板", "", "", ""]
            //                         },
            //                         "url": ""
            //                     }, {
            //                         "description": "",
            //                         "id": "show_009_001_003",
            //                         "option": [{
            //                             "description": "30%",
            //                             "id": "show_009_001_003_001",
            //                             "isRight": "1"
            //                         }, {
            //                             "description": "4v",
            //                             "id": "show_009_001_003_002",
            //                             "isRight": "1"
            //                         }, {
            //                             "description": "5v",
            //                             "id": "show_009_001_003_003",
            //                             "isRight": "1"
            //                         }],
            //                         "td": {
            //                             "option": [],
            //                             "td": ["加速踏板踩下一半", "", "", ""]
            //                         },
            //                         "url": ""
            //                     }, {
            //                         "description": "",
            //                         "id": "show_009_001_004",
            //                         "option": [{
            //                             "description": "30%",
            //                             "id": "show_009_001_004_001",
            //                             "isRight": "1"
            //                         }, {
            //                             "description": "4v",
            //                             "id": "show_009_001_004_002",
            //                             "isRight": "1"
            //                         }, {
            //                             "description": "5v",
            //                             "id": "show_009_001_004_003",
            //                             "isRight": "1"
            //                         }],
            //                         "td": {
            //                             "option": [],
            //                             "td": ["加速踏板踩到底", "", "", ""]
            //                         },
            //                         "url": ""
            //                     }],
            //                     "type": "3",
            //                     "url": ""
            //                 }, {
            //                     "description": "通过以上数据分析，加速踏板位置传感器两个信号之间符合什么样的逻辑关系？",
            //                     "id": "show_009_002",
            //                     "option": [{
            //                         "description": "两个信号呈相反变化",
            //                         "id": "show_009_002_001",
            //                         "isRight": "1"
            //                     }, {
            //                         "description": "一个值变大的时候另一个值变小",
            //                         "id": "show_009_002_002",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "两个信号之间符合2倍的关系",
            //                         "id": "show_009_002_003",
            //                         "isRight": "0"
            //                     }, {
            //                         "description": "两个信号之间没有逻辑关系",
            //                         "id": "show_009_002_004",
            //                         "isRight": "0"
            //                     }],
            //                     "type": "1",
            //                     "url": ""
            //                 }],
            //                 "rate": "",
            //                 "type": "11",
            //                 "url": ""
            //             }],
            //             "remark": ""
            //         }
            //     ],
            //     "score": [{
            //         "id": "q01",
            //         "kp": "",
            //         "questionId": "show_001",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q02",
            //         "kp": "",
            //         "questionId": "show_002",
            //         "rate": "5",
            //         "type": "question"
            //     }, {
            //         "id": "q03",
            //         "kp": "",
            //         "questionId": "show_004_001_001_001",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q04",
            //         "kp": "",
            //         "questionId": "show_005_001_001_002",
            //         "rate": "2",
            //         "type": "question"
            //     }, {
            //         "id": "q05",
            //         "kp": "",
            //         "questionId": "show_005_001_001_003",
            //         "rate": "2",
            //         "type": "question"
            //     }, {
            //         "id": "q06",
            //         "kp": "",
            //         "questionId": "show_005_001_001_004",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q07",
            //         "kp": "",
            //         "questionId": "show_005_001",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q08",
            //         "kp": "",
            //         "questionId": "show_005_002",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q09",
            //         "kp": "",
            //         "questionId": "show_006",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q10",
            //         "kp": "",
            //         "questionId": "show_007",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q11",
            //         "kp": "",
            //         "questionId": "show_007_001",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q12",
            //         "kp": "",
            //         "questionId": "show_007_002",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q12",
            //         "kp": "",
            //         "questionId": "show_009_001_002",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q12",
            //         "kp": "",
            //         "questionId": "show_009_001_003",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q12",
            //         "kp": "",
            //         "questionId": "show_009_001_004",
            //         "rate": "1",
            //         "type": "question"
            //     }, {
            //         "id": "q12",
            //         "kp": "",
            //         "questionId": "show_009_002",
            //         "rate": "1",
            //         "type": "question"
            //     }],
            //     "values": ""
            // }
        }
    }

    /**
     * @author 周博宇
     * 初始化必要参数
     */
    init() {
        let data = urlParse(location.search, this.appService);

        this.courseNumber = data.courseNumber;
        this.faultNumber = data.faultNumber;
        domainUrl = data.domainUrl;
        this.userEmail = data.userEmail;
        this.domainAccount = data.domainAccount;
        this.userCourseClassId = data.userCourseClassId;

        // 无通信服务时打开
        if ((window.location.host).includes('9026') || (window.location.host).includes('9017') || (window.location.host).includes('9019')) {
            this.setCharacterA(JSON.stringify({ "progress": [], "score": [], "handle": [] }));
            console.log(123123);
            this.setCharacterC(JSON.stringify({ "handle": [], "chapter": [] }));
        }
    };

    /**
     * @author 周博宇
     * 获取token，sessionId
     * @param dtd
     */
    getStudyTs(dtd) {
        let userEmail = this.userEmail;
        let getStudyTsUrl = domainUrl + studyTsUrl;
        let data1 = {
            'email': this.userEmail,
            'courseNumber': this.courseNumber,
            'userCourseClassId': this.userCourseClassId,
        };
        let getStudyCodeUrl = domainUrl + studyCodeUrl;

        $.ajax({
            type: 'get',
            url: getStudyCodeUrl,
            data: data1,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: (data) => {
                if (data === '') {
                    this.handleErrorService.handleError(21);
                } else {
                    if (data.errCode === '0' || data.errCode === 0) {
                        code = data.code;
                    } else {
                        // console.log(data.errCode);
                        this.handleErrorService.handleError(+data.errCode);
                    }
                }
            },
            error: (jqXHR, textStatus, errorMsg) => {
                this.handleErrorService.handleError(20);
                // console.error(errorMsg);
            }
        }).then(() => {
            let data = { 'userEmail': this.userEmail, 'code': code };

            $.ajax({
                type: 'get',
                url: getStudyTsUrl,
                data,
                dataType: 'jsonp',
                jsonp: 'callback',
                // tslint:disable-next-line:no-shadowed-variable
                success: (data) => {
                    if (data === '') {
                        this.handleErrorService.handleError(21);
                    } else {
                        if (data.errCode === '0' || data.errCode === 0) {
                            this.sessionId = data.sessionId;
                            this.token = data.token;
                            dtd.resolve();
                        } else {
                            // console.log(data.errCode);
                            this.handleErrorService.handleError(+data.errCode);
                        }
                    }
                },
                error: (jqXHR, textStatus, errorMsg) => {
                    this.handleErrorService.handleError(20);
                    // console.error(errorMsg);
                },
            });

        });
    };



    /**
     * @author 周博宇
     * 开始学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    startStudy() {
        let obj: any = {};
        let obj2 = Object.assign({}, {
            userEmail: this.userEmail,
            sessionId: this.sessionId,
            token: this.token,
            courseNumber: this.courseNumber,
            faultNumber: this.faultNumber,
            userCourseClassId: this.userCourseClassId,
            type: this.type,
            seconds: this.seconds,
            progress: this.progress,
            score: this.score,
            isComplete: this.isComplete,
            isPass: this.isPass,
            characterA: {
                progress: [],
                score: [],
                handle: []
            },         // 进度、得分、动作详细数据
            characterB: this.characterB,
            characterC: {
                handle: [],
                chapter: []

            },         // 自定义参数
            courseName: this.courseName,
            passCondition: this.passCondition,
            completeCondition: this.completeCondition,
            serverTime: this.serverTime,
            activitys: this.activitys,
        })
        obj.adapter = JSON.stringify(obj2);
        url = domainUrl + startStudyUrl;
        // url = 'http:\/\/' + location.host + startStudyUrl;

        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            data: obj,
            success: (data) => {
                if (data.errCode === '0' || data.errCode === 0) {
                    totalScore = data.adapter.totalScore;
                    this.characterB = JSON.parse(data.adapter.characterB);
                    console.log(this.characterB, 'alskdfjasdflkj');
                    this.domainAccount = data.adapter.domainAccount;
                    this.userEmail = data.adapter.userEmail;
                    this.sessionId = data.adapter.sessionId;
                    this.token = data.adapter.token;
                    this.courseNumber = data.adapter.courseNumber;
                    this.faultNumber = data.adapter.faultNumber;
                    this.code = data.adapter.code;
                    this.type = data.adapter.type;
                    this.seconds = data.adapter.seconds;
                    this.progress = data.adapter.progress;
                    this.score = data.adapter.score;
                    this.isComplete = data.adapter.isComplete;
                    this.isPass = data.adapter.isPass;
                    this.courseName = data.adapter.courseName;
                    this.passCondition = data.adapter.passCondition;
                    this.completeCondition = data.adapter.completeCondition;


                    if (data.adapter) {
                        this.serverTime = data.adapter.serverTime;
                    }
                    this.characterC = data.adapter.characterC;
                    this.activitys = data.adapter.activitys;

                    // 设置characterA
                    this.setCharacterA(data.adapter.characterA);
                    this.setCharacterC(data.adapter.characterC);

                    // progress.rate = this.progress;
                    // paper.rate = this.score;
                } else {
                    this.handleErrorService.handleError(+data.errCode);
                }
                if (data === '') {
                    this.handleErrorService.handleError(21);
                }
                // console.log(data.errCode);
            },
            error: (jqXHR, textStatus, errorMsg) => {
                console.log(jqXHR, textStatus, errorMsg);
                this.handleErrorService.handleError(20);
                //  console.error(errorMsg);
            }
        });

    };


    setCharacterA(characterA) {

        if (characterA) {
            characterA = JSON.parse(characterA);
        }
        console.log('characterA---chenggong');
        if (characterA['score'] && characterA['score'].length !== 0) {
            this.characterA = characterA;
            return;
        }
        this.characterA['progress'] = [];
        this.characterA['score'] = [];

        this.characterB['question'].map((i, iIndex) => {
            let obj2 = Object.assign({}, {
                'catalog': i.catalog,
                'sumScore': 0,
                'score': [],
            });
            i['question'].map((k, kIndex) => {
                obj2['score'].push(
                    Object.assign({}, {
                        handleArray: [],
                        // id: k.id,
                        isRight: 0,
                        // rate: k.rate,
                        optionArray: [],
                        questionID: k.id,
                        courseNumber: k.courseNumber
                    }));
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
    }


    setCharacterC(characterC) {
        if (characterC) {
            characterC = JSON.parse(characterC);
        }
        if (characterC['chapter'] && characterC['chapter'].length !== 0) {
            this.characterC = characterC;
            this.appService.characterC = this.characterC;
            this.appService.startStudyEvent();
            return;
        }
        this.characterC = {};
        this.characterC['handle'] = [];
        this.characterC['chapter'] = [];
        this.characterB['chapter'].map((i, iIndex) => {
            this.characterC.chapter.push(i);
        });
        this.appService.characterC = this.characterC;
        this.appService.startStudyEvent();
    }


    /**
     * @author 周博宇
     * 提交学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    commitStudy(progress, paper, handle) {
        let obj1: any = {};
        console.log(this.characterA);

        this.activitys.map((cont, contIndex, contArr) => {
            cont.characterA = {};
            cont.characterA['progress'] = [];
            cont.characterA['handle'] = [];
            cont.characterA['score'] = [];
            this.characterA.score.map((param, paramIndex, paramArr) => {
                let obj = {};
                obj['catalog'] = param.catalog;
                obj['sumScore'] = param.sumScore;
                obj['score'] = [];
                cont.characterA['score'].push(obj);
                param.score.map((item, itemIndex, itemArr) => {
                    cont.characterA['score'].map((ele, eleIndex, eleArr) => {
                        if (cont.courseNumber == item.courseNumber && ele.catalog == param.catalog) {
                            ele.score.push(item);
                        }
                    })
                })
            })
        })

        console.log(this.activitys);

        let obj2 = Object.assign({}, {
            userEmail: this.userEmail,
            sessionId: this.sessionId,
            token: this.token,
            courseNumber: this.courseNumber,
            faultNumber: this.faultNumber,
            userCourseClassId: this.userCourseClassId,
            type: this.type,
            seconds: this.seconds,
            progress: this.progress,
            score: this.score,
            isComplete: this.isComplete,
            isPass: this.isPass,
            characterA: this.characterA,         // 进度、得分、动作详细数据
            characterB: this.characterB,
            characterC: this.characterC,         // 自定义参数
            courseName: this.courseName,
            passCondition: this.passCondition,
            completeCondition: this.completeCondition,
            serverTime: this.serverTime,
            activitys: this.activitys,
        })
        obj1.adapter = JSON.stringify(obj2);
        url = domainUrl + commitStudyUrl;
        // url = 'http:\/\/' + location.host + commitStudyUrl;

        $.ajax({
            type: 'post',
            url: url,
            data: obj1,
            dataType: 'json',
            success: (data) => {
                if (data === '') {
                    this.handleErrorService.handleError(21);
                } else {
                    if (data.errCode === '0') {
                        if (data) {
                            if (data) {
                                this.serverTime = data.serverTime;
                            }
                        }
                    } else {
                        this.handleErrorService.handleError(+data.errCode);
                    }
                }
                // console.log(data.errCode);
            },
            error: (jqXHR, textStatus, errorMsg) => {
                this.handleErrorService.handleError(20);
                // console.error(errorMsg);
            }
        });
    };

    /**
     * @author 周博宇
     * 退出学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    exitStudy(progress, paper, handle) {
        let obj2: any = {};
        let obj3 = Object.assign({}, {
            userEmail: this.userEmail,
            sessionId: this.sessionId,
            token: this.token,
            courseNumber: this.courseNumber,
            faultNumber: this.faultNumber,
            userCourseClassId: this.userCourseClassId,
            type: this.type,
            seconds: this.seconds,
            progress: this.progress,
            score: this.score,
            isComplete: this.isComplete,
            isPass: this.isPass,
            characterA: this.characterA,         // 进度、得分、动作详细数据
            characterB: this.characterB,
            characterC: this.characterC,         // 自定义参数
            courseName: this.courseName,
            passCondition: this.passCondition,
            completeCondition: this.completeCondition,
            serverTime: this.serverTime,
            activitys: this.activitys,
        })
        obj2.adapter = JSON.stringify(obj3);
        url = domainUrl + exitStudyUrl;
        // url = 'http:\/\/' + location.host + exitStudyUrl;
        $.ajax({
            type: 'post',
            url: url,
            data: obj2,
            dataType: 'json'
        });
    };
}
export { Adapter, totalScore };
