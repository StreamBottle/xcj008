import { Injectable } from "@angular/core";

@Injectable()
export class PadQuestionService {
  constructor() { }
  recordPosition = {}; // 记录拖拽题随意拖拽的位置
}

// characterB 第二版

// {
//     "exclusive": "",
//     "handle": "",
//     "progress": "",
//     "question": [{
//         "catalog": "show",
//         "description": "案例导入测评",
//         "id": "show",
//         "question": [{
//             "description": "（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？",
//             "id": "show_001",
//             "option": [{
//                 "description": "火花塞间隙变大，点火击穿电压增加",
//                 "id": "show_001_p1",
//                 "isRight": "0"
//             }, {
//                 "description": "火花塞间隙变大，充电时间增加",
//                 "id": "show_001_p2",
//                 "isRight": "1"
//             }, {
//                 "description": "火花塞间隙变小，点火击穿电压增加",
//                 "id": "show_001_p3",
//                 "isRight": "0"
//             }, {
//                 "description": "火花塞间隙变小，点火线圈的震荡波次数增加",
//                 "id": "show_001_p4",
//                 "isRight": "0"
//             }],
//             "rate": "1",
//             "type": "1",
//             "url": "/aaa/bbb/index.html"
//         }, {
//             "description": "（不定项）点火线圈主要由（）部分组成",
//             "id": "show_002",
//             "option": [{
//                 "description": "初级线圈、次级线圈",
//                 "id": "show_002_p1",
//                 "isRight": "1"
//             }, {
//                 "description": "弹簧、护套",
//                 "id": "show_002_p2",
//                 "isRight": "1"
//             }, {
//                 "description": "高压二极管、抗干扰电阻",
//                 "id": "show_002_p3",
//                 "isRight": "0"
//             }, {
//                 "description": "火花塞",
//                 "id": "show_002_p4",
//                 "isRight": "0"
//             }],
//             "rate": "5",
//             "type": "2",
//             "url": "aaa/bbb/index.html"
//         }, {
//             "description": "这是一个连线题",
//             "id": "show_004",
//             "question": [{
//                 "id": "show_004_001_001",
//                 "option": [],
//                 "rate": "",
//                 "td": {
//                     "option": [],
//                     "td": ["项目内容", "连线区域", "项目内容"]
//                 }
//             }, {
//                 "id": "show_004_001_001_001",
//                 "option": [{
//                     "description": "发动机严重抖动、动力不足",
//                     "id": "show_004_001_001_001_a001",
//                     "isRight": "1"
//                 }],
//                 "rate": "1",
//                 "td": {
//                     "option": ["all"],
//                     "td": ["火花塞间隙过大"]
//                 }
//             }, {
//                 "id": "show_005_001_001_002",
//                 "option": [{
//                     "description": "发动机间歇性动力不足",
//                     "id": "show_005_001_001_002_a001",
//                     "isRight": "1"
//                 }],
//                 "rate": "2",
//                 "td": {
//                     "option": ["all"],
//                     "td": ["点火线圈内部断路"]
//                 }
//             }, {
//                 "id": "show_005_001_001_003",
//                 "option": [{
//                     "description": "发动机抖动、尾气油味浓",
//                     "id": "show_005_001_001_003_a001",
//                     "isRight": "1"
//                 }],
//                 "rate": "2",
//                 "td": {
//                     "option": ["all"],
//                     "td": ["火花塞型号不对"]
//                 }
//             }, {
//                 "id": "show_005_001_001_004",
//                 "option": [{
//                     "description": "发动机爆燃、温度过高",
//                     "id": "show_005_001_001_004_a001",
//                     "isRight": "1"
//                 }],
//                 "rate": "1",
//                 "td": {
//                     "option": ["all"],
//                     "td": ["点火线圈插接件虚接"]
//                 }
//             }],
//             "rate": "",
//             "type": "6",
//             "url": "aaa/bbb/index.html"
//         }, {
//             "description": "将下列元件的故障现象拖拽至相对应的元件框内",
//             "id": "show_005",
//             "option": [{
//                 "description": "发动机爆燃、温度过高",
//                 "id": "show_005_001_p1",
//                 "isRight": "1"
//             }, {
//                 "description": "火花塞电极无火花产生",
//                 "id": "show_005_002_p1",
//                 "isRight": "1"
//             }, {
//                 "description": "点火线圈过热",
//                 "id": "show_005_003_p1",
//                 "isRight": "0"
//             }, {
//                 "description": "火花塞电极火花时有时无",
//                 "id": "show_005_004_p1",
//                 "isRight": "0"
//             }],
//             "question": [{
//                 "description": "火花塞",
//                 "id": "show_005_001",
//                 "options": [{
//                     "description": "发动机爆燃、温度过高",
//                     "id": "show_005_001_p1",
//                     "isRight": "1"
//                 }],
//                 "rate": "1",
//                 "url": "/aaa/bbb/index.html"
//             }, {
//                 "description": "火花塞222",
//                 "id": "show_005_002",
//                 "options": [{
//                     "description": "火花塞电极无火花产生",
//                     "id": "show_005_002_p1",
//                     "isRight": "1"
//                 }],
//                 "rate": "1",
//                 "url": "/aaa/bbb/index.html"
//             }],
//             "rate": "",
//             "type": "7",
//             "url": ""
//         }, {
//             "description": "通过实际测量，点火系统中影响发动机抖动的原因都有哪些因素？",
//             "id": "show_006",
//             "option": [{
//                 "description": "初级线圈、次级线圈",
//                 "id": "show_006_p1",
//                 "isRight": "1"
//             }],
//             "rate": "1",
//             "type": "8",
//             "url": "/aaa/bbb/index.html"
//         }, {
//             "description": "这是填空加选择题",
//             "id": "show_007",
//             "question": [{
//                 "description": "传感器1的电源电压是$XCJ$伏，传感器2的电源电压是$XCJ$伏",
//                 "id": "show_007_001",
//                 "option": [{
//                     "description": "3V",
//                     "id": "show_007_001_a001",
//                     "isRight": "1"
//                 }, {
//                     "description": "3V",
//                     "id": "show_007_001_a002",
//                     "isRight": "1"
//                 }],
//                 "type": "9",
//                 "url": "/aaa/bbb/index.html"
//             }, {
//                 "description": "根据以上测量结果判断，两个传感器的电源是否正常",
//                 "id": "show_007_002",
//                 "option": [{
//                     "description": "3V",
//                     "id": "show_007_002_a003",
//                     "isRight": "0"
//                 }, {
//                     "description": "3V",
//                     "id": "show_007_002_a004",
//                     "isRight": "1"
//                 }],
//                 "type": "1",
//                 "url": "/aaa/bbb/index.html"
//             }],
//             "rate": "1",
//             "type": "10",
//             "url": ""
//         }, {
//             "description": "这是表格和选择题",
//             "id": "show_009",
//             "question": [{
//                 "description": "",
//                 "id": "show_009_001",
//                 "question": [{
//                     "description": "",
//                     "id": "show_009_001_001",
//                     "option": [],
//                     "td": {
//                         "option": [],
//                         "td": ["操作内容", "油门踏板开度（％）", "信号1电压（V）", "信号2电压（V）"]
//                     },
//                     "url": "/aaa/bbb/index.html"
//                 }, {
//                     "description": "",
//                     "id": "show_009_001_002",
//                     "option": [{
//                         "description": "30%",
//                         "id": "show_009_001_002_001",
//                         "isRight": "1"
//                     }, {
//                         "description": "4v",
//                         "id": "show_009_001_002_002",
//                         "isRight": "1"
//                     }, {
//                         "description": "5v",
//                         "id": "show_009_001_002_003",
//                         "isRight": "1"
//                     }],
//                     "td": {
//                         "option": [],
//                         "td": ["不踩加速踏板", "", "", ""]
//                     },
//                     "url": "/aaa/bbb/index.html"
//                 }, {
//                     "description": "",
//                     "id": "show_009_001_003",
//                     "option": [{
//                         "description": "30%",
//                         "id": "show_009_001_003_001",
//                         "isRight": "1"
//                     }, {
//                         "description": "4v",
//                         "id": "show_009_001_003_002",
//                         "isRight": "1"
//                     }, {
//                         "description": "5v",
//                         "id": "show_009_001_003_003",
//                         "isRight": "1"
//                     }],
//                     "td": {
//                         "option": [],
//                         "td": ["加速踏板踩下一半", "", "", ""]
//                     },
//                     "url": "/aaa/bbb/index.html"
//                 }, {
//                     "description": "",
//                     "id": "show_009_001_004",
//                     "option": [{
//                         "description": "30%",
//                         "id": "show_009_001_004_001",
//                         "isRight": "1"
//                     }, {
//                         "description": "4v",
//                         "id": "show_009_001_004_002",
//                         "isRight": "1"
//                     }, {
//                         "description": "5v",
//                         "id": "show_009_001_004_003",
//                         "isRight": "1"
//                     }],
//                     "td": {
//                         "option": [],
//                         "td": ["加速踏板踩到底", "", "", ""]
//                     },
//                     "url": "/aaa/bbb/index.html"
//                 }],
//                 "type": "3",
//                 "url": "/aaa/bbb/index.html"
//             }, {
//                 "description": "通过以上数据分析，加速踏板位置传感器两个信号之间符合什么样的逻辑关系？",
//                 "id": "show_009_002",
//                 "option": [{
//                     "description": "两个信号呈相反变化",
//                     "id": "show_009_002_001",
//                     "isRight": "1"
//                 }, {
//                     "description": "一个值变大的时候另一个值变小",
//                     "id": "show_009_002_002",
//                     "isRight": "0"
//                 }, {
//                     "description": "两个信号之间符合2倍的关系",
//                     "id": "show_009_002_003",
//                     "isRight": "0"
//                 }, {
//                     "description": "两个信号之间没有逻辑关系",
//                     "id": "show_009_002_004",
//                     "isRight": "0"
//                 }],
//                 "type": "1",
//                 "url": "/aaa/bbb/index.html"
//             }],
//             "rate": "",
//             "type": "11",
//             "url": ""
//         }],
//         "remark": ""
//     }],
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

// characterB 第一版
// {
//     'handles': {},
//     'question': [
//         {
//             'catalog': 'show',
//             'description': 'SHOW',
//             'id': 'show',
//             'question': [{
//                 'description': '（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？',
//                 'id': 'show_001',
//                 'childCatalog': 'skill01',
//                 'option': [{
//                     'description': '火花塞间隙变大，点火击穿电压增加',
//                     'id': 'show_001_p1',
//                     'isRight': '0'
//                 }, {
//                     'description': '火花塞间隙变大，充电时间增加',
//                     'id': 'show_001_p2',
//                     'isRight': '1'
//                 }, {
//                     'description': '火花塞间隙变小，点火击穿电压增加',
//                     'id': 'show_001_p3',
//                     'isRight': '0'
//                 }, {
//                     'description': '火花塞间隙变小，点火线圈的震荡波次数增加',
//                     'id': 'show_001_p4',
//                     'isRight': '0'
//                 }],
//                 'rate': '1',
//                 'type': '1',
//                 'url': '/aaa/bbb/index.html'
//             }, {
//                 'description': '（不定项）点火线圈主要由（）部分组成',
//                 'id': 'show_002',
//                 'option': [{
//                     'description': '初级线圈、次级线圈',
//                     'id': 'show_002_p1',
//                     'isRight': '1'
//                 }, {
//                     'description': '弹簧、护套',
//                     'id': 'show_002_p2',
//                     'isRight': '1'
//                 }, {
//                     'description': '高压二极管、抗干扰电阻',
//                     'id': 'show_002_p3',
//                     'isRight': '0'
//                 }, {
//                     'description': '火花塞',
//                     'id': 'show_002_p4',
//                     'isRight': '0'
//                 }],
//                 'rate': '1',
//                 'type': '2',
//                 'url': 'aaa/bbb/index.html'
//             }, {
//                 'description': '这是一个连线题',
//                 'id': 'show_004',
//                 'question': [{
//                     'id': 'show_004_001_001',
//                     'option': [],
//                     'rate': '',
//                     'td': {
//                         'option': [],
//                         'td': ['项目内容', '连线区域', '项目内容']
//                     }
//                 }, {
//                     'id': 'show_004_001_001_001',
//                     'option': [{
//                         'description': '发动机严重抖动、动力不足',
//                         'id': 'show_004_001_001_001_a001',
//                         'isRight': '1'
//                     }],
//                     'rate': '1',
//                     'td': {
//                         'option': ['all'],
//                         'td': ['火花塞间隙过大']
//                     }
//                 }, {
//                     'id': 'show_005_001_001_002',
//                     'option': [{
//                         'description': '发动机间歇性动力不足',
//                         'id': 'show_005_001_001_002_a001',
//                         'isRight': '1'
//                     }],
//                     'rate': '',
//                     'td': {
//                         'option': ['all'],
//                         'td': ['点火线圈内部断路']
//                     }
//                 }, {
//                     'id': 'show_005_001_001_003',
//                     'option': [{
//                         'description': '发动机抖动、尾气油味浓',
//                         'id': 'show_005_001_001_003_a001',
//                         'isRight': '1'
//                     }],
//                     'rate': '',
//                     'td': {
//                         'option': ['all'],
//                         'td': ['火花塞型号不对']
//                     }
//                 }, {
//                     'id': 'show_005_001_001_004',
//                     'option': [{
//                         'description': '发动机爆燃、温度过高',
//                         'id': 'show_005_001_001_004_a001',
//                         'isRight': '1'
//                     }],
//                     'rate': '',
//                     'td': {
//                         'option': ['all'],
//                         'td': ['点火线圈插接件虚接']
//                     }
//                 }],
//                 'rate': '',
//                 'type': '6',
//                 'url': 'aaa/bbb/index.html'
//             }, {
//                 'description': '将下列元件的故障现象拖拽至相对应的元件框内',
//                 'id': 'show_005',
//                 'option': [{
//                     'description': '发动机爆燃、温度过高',
//                     'id': 'show_005_001_p1',
//                     'isRight': '1'
//                 }, {
//                     'description': '火花塞电极无火花产生',
//                     'id': 'show_005_002_p1',
//                     'isRight': '1'
//                 }, {
//                     'description': '点火线圈过热',
//                     'id': 'show_005_003_p1',
//                     'isRight': '0'
//                 }, {
//                     'description': '火花塞电极火花时有时无',
//                     'id': 'show_005_004_p1',
//                     'isRight': '0'
//                 }],
//                 'question': [{
//                     'description': '火花塞',
//                     'id': 'show_005_001',
//                     'options': [{
//                         'description': '发动机爆燃、温度过高',
//                         'id': 'show_005_001_p1',
//                         'isRight': '1'
//                     }],
//                     'rate': '2',
//                     'url': '/aaa/bbb/index.html'
//                 }, {
//                     'description': '火花塞222',
//                     'id': 'show_005_001',
//                     'options': [{
//                         'description': '火花塞电极无火花产生',
//                         'id': 'show_005_002_p1',
//                         'isRight': '1'
//                     }],
//                     'rate': '2',
//                     'url': '/aaa/bbb/index.html'
//                 }],
//                 'rate': '',
//                 'type': '7',
//                 'url': ''
//             }, {
//                 'description': '通过实际测量，点火系统中影响发动机抖动的原因都有哪些因素？',
//                 'id': 'show_006',
//                 'option': [{
//                     'description': '初级线圈、次级线圈',
//                     'id': 'show_006_p1',
//                     'isRight': '1'
//                 }],
//                 'rate': '',
//                 'type': '8',
//                 'url': '/aaa/bbb/index.html'
//             }, {
//                 'description': '这是填空加选择题',
//                 'id': 'show_007',
//                 'question': [{
//                     'description': '打开点火开关到 ON 档，在不断开加速踏板位置传感器插头的状态下，在传感器插头位置分别测量两个传感器的电源电压，传感器 1 的电源电压是$XCJ$伏，传感器 2 的电源电压是$XCJ$伏。',
//                     'option': [{
//                         'description': '3V',
//                         'id': 'show_007_a001',
//                         'isRight': '1'
//                     }, {
//                         'description': '3V',
//                         'id': 'show_007_a002',
//                         'isRight': '1'
//                     }],
//                     'type': '9',
//                     'url': '/aaa/bbb/index.html'
//                 }, {
//                     'description': '根据以上测量结果判断，两个传感器的电源是否正常:',
//                     'option': [{
//                         'description': '正常',
//                         'id': 'show_007_a003',
//                         'isRight': '0'
//                     }, {
//                         'description': '不正常',
//                         'id': 'show_007_a004',
//                         'isRight': '1'
//                     }],
//                     'type': '1',
//                     'url': '/aaa/bbb/index.html'
//                 }],
//                 'rate': '',
//                 'type': '10',
//                 'url': ''
//             }, {
//                 'description': '这是填空加选择题',
//                 'id': 'show_018',
//                 'question': [{
//                     'description': '打开点火开关到 ON 档，在不断开加速版位置传感器插头的状态下，在传感器插头位置分别测量两个传感器的接地线（万用表红表笔连接蓄电池正极，黑表笔分别连接两个传感器的接地线），其电压分别是$XCJ$伏、$XCJ$伏。',
//                     'id': 'show_007_001',
//                     'option': [{
//                         'description': '3V',
//                         'id': 'show_007_001_a001',
//                         'isRight': '1'
//                     }, {
//                         'description': '3V',
//                         'id': 'show_007_001_a002',
//                         'isRight': '1'
//                     }],
//                     'type': '9',
//                     'url': '/aaa/bbb/index.html'
//                 }, {
//                     'description': '根据以上测量结果判断，两个传感器的电源是否正常',
//                     'option': [{
//                         'description': '正常',
//                         'id': 'show_007_001_a003',
//                         'isRight': '0'
//                     }, {
//                         'description': '不正常',
//                         'id': 'show_007_001_a004',
//                         'isRight': '1'
//                     }],
//                     'type': '2',
//                     'url': '/aaa/bbb/index.html'
//                 }],
//                 'rate': '',
//                 'type': '10',
//                 'url': ''
//             }, {
//                 'description': '这是表格和选择题',
//                 'id': 'show_009',
//                 'question': [{
//                     'description': '同时使用两个万用表测量加速踏板位置传感器的信号电压，并用诊断仪读取加速踏板开度数据以及故障码情况，并把检查结果填入下表',
//                     'id': 'show_009_001',
//                     'question': [{
//                         'description': '',
//                         'id': 'show_009_001_001',
//                         'option': [],
//                         'td': {
//                             'option': [],
//                             'td': ['操作内容', '油门踏板开度（％）', '信号1电压（V）', '信号2电压（V)']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_009_001_002',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_009_001_002_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_009_001_002_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_009_001_002_003',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['不踩加速踏板', '', '', '']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_009_001_003',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_009_001_003_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_009_001_003_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_009_001_003_003',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['加速踏板踩下一半', '', '', '']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_009_001_004',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_009_001_004_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_009_001_004_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_009_001_004_003',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['加速踏板踩到底', '', '', '']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }],
//                     'type': '3',
//                     'url': '/aaa/bbb/index.html'
//                 }, {
//                     'description': '通过以上数据分析，加速踏板位置传感器两个信号之间符合什么样的逻辑关系？',
//                     'id': 'show_009_002',
//                     'option': [{
//                         'description': '两个信号呈相反变化',
//                         'id': 'show_009_002_001',
//                         'isRight': '1'
//                     }, {
//                         'description': '一个值变大的时候另一个值变小',
//                         'id': 'show_009_002_002',
//                         'isRight': '0'
//                     }, {
//                         'description': '两个信号之间符合2倍的关系',
//                         'id': 'show_009_002_003',
//                         'isRight': '0'
//                     }, {
//                         'description': '两个信号之间没有逻辑关系',
//                         'id': 'show_009_002_004',
//                         'isRight': '0'
//                     }],
//                     'type': '1',
//                     'url': '/aaa/bbb/index.html'
//                 }],
//                 'rate': '',
//                 'type': '11',
//                 'url': ''
//             }, {
//                 'description': '这是表格',
//                 'id': 'show_010',
//                 'question': [{
//                     'description': '同时使用两个万用表测量加速踏板位置传感器的信号电压，并用诊断仪读取加速踏板开度数据以及故障码情况，并把检查结果填入下表',
//                     'id': 'show_010_001',
//                     'question': [{
//                         'description': '',
//                         'id': 'show_010_001_001',
//                         'option': [],
//                         'td': {
//                             'option': [],
//                             'td': ['操作内容', '油门踏板开度（％）', '信号1电压（V）', '信号2电压（V)', '故障码']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_010_001_002',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_010_001_002_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_010_001_002_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_002_003',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_002_004',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['不踩加速踏板', '', '', '', '$alphanumeric$']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_010_001_003',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_010_001_003_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_010_001_003_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_003_003',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_003_004',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['加速踏板踩下一半', '', '', '', '$alphanumeric$']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_010_001_004',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_010_001_004_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_010_001_004_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_004_003',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_004_004',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['加速踏板踩到底', '', '', '', '$alphanumeric$']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_010_001_005',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_010_001_005_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_010_001_005_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_005_003',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_005_004',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['加速踏板踩到底', '', '', '', '$alphanumeric$']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_010_001_006',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_010_001_006_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_010_001_006_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_006_003',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_006_004',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['加速踏板踩到底', '', '', '', '$alphanumeric$']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_010_001_007',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_010_001_007_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_010_001_007_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_007_003',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_007_004',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['加速踏板踩到底', '', '', '', '$alphanumeric$']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_010_001_008',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_010_001_008_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_010_001_008_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_008_003',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_010_001_008_004',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['加速踏板踩到底', '', '', '', '$alphanumeric$']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }],
//                     'type': '3',
//                     'url': '/aaa/bbb/index.html'
//                 }],
//                 'rate': '',
//                 'type': '3',
//                 'url': ''
//             },

//             ],
//             'remark': ''
//         },
//         {
//             'catalog': 'result',
//             'description': 'RESULT',
//             'id': 'show',
//             'question': [{
//                 'description': '（不定项）通过增大火花塞间隙或减小火花塞隙，发现（）？',
//                 'id': 'show_001',
//                 'option': [{
//                     'description': '火花塞间隙变大，点火击穿电压增加',
//                     'id': 'show_001_p1',
//                     'isRight': '0'
//                 }, {
//                     'description': '火花塞间隙变大，充电时间增加',
//                     'id': 'show_001_p2',
//                     'isRight': '1'
//                 }, {
//                     'description': '火花塞间隙变小，点火击穿电压增加',
//                     'id': 'show_001_p3',
//                     'isRight': '0'
//                 }, {
//                     'description': '火花塞间隙变小，点火线圈的震荡波次数增加',
//                     'id': 'show_001_p4',
//                     'isRight': '0'
//                 }],
//                 'rate': '1',
//                 'type': '1',
//                 'url': '/aaa/bbb/index.html'
//             }, {
//                 'description': '（不定项）点火线圈主要由（）部分组成',
//                 'id': 'show_002',
//                 'option': [{
//                     'description': '初级线圈、次级线圈',
//                     'id': 'show_002_p1',
//                     'isRight': '1'
//                 }, {
//                     'description': '弹簧、护套',
//                     'id': 'show_002_p2',
//                     'isRight': '1'
//                 }, {
//                     'description': '高压二极管、抗干扰电阻',
//                     'id': 'show_002_p3',
//                     'isRight': '0'
//                 }, {
//                     'description': '火花塞',
//                     'id': 'show_002_p4',
//                     'isRight': '0'
//                 }],
//                 'rate': '1',
//                 'type': '2',
//                 'url': 'aaa/bbb/index.html'
//             }, {
//                 'description': '这是一个连线题',
//                 'id': 'show_004',
//                 'question': [{
//                     'id': 'show_004_001_001',
//                     'option': [],
//                     'rate': '',
//                     'td': {
//                         'option': [],
//                         'td': ['项目内容', '连线区域', '项目内容']
//                     }
//                 }, {
//                     'id': 'show_004_001_001_001',
//                     'option': [{
//                         'description': '发动机严重抖动、动力不足',
//                         'id': 'show_004_001_001_001_a001',
//                         'isRight': '1'
//                     }],
//                     'rate': '1',
//                     'td': {
//                         'option': ['all'],
//                         'td': ['火花塞间隙过大']
//                     }
//                 }, {
//                     'id': 'show_005_001_001_002',
//                     'option': [{
//                         'description': '发动机间歇性动力不足',
//                         'id': 'show_005_001_001_002_a001',
//                         'isRight': '1'
//                     }],
//                     'rate': '',
//                     'td': {
//                         'option': ['all'],
//                         'td': ['点火线圈内部断路']
//                     }
//                 }, {
//                     'id': 'show_005_001_001_003',
//                     'option': [{
//                         'description': '发动机抖动、尾气油味浓',
//                         'id': 'show_005_001_001_003_a001',
//                         'isRight': '1'
//                     }],
//                     'rate': '',
//                     'td': {
//                         'option': ['all'],
//                         'td': ['火花塞型号不对']
//                     }
//                 }, {
//                     'id': 'show_005_001_001_004',
//                     'option': [{
//                         'description': '发动机爆燃、温度过高',
//                         'id': 'show_005_001_001_004_a001',
//                         'isRight': '1'
//                     }],
//                     'rate': '',
//                     'td': {
//                         'option': ['all'],
//                         'td': ['点火线圈插接件虚接']
//                     }
//                 }],
//                 'rate': '',
//                 'type': '6',
//                 'url': 'aaa/bbb/index.html'
//             }, {
//                 'description': '将下列元件的故障现象拖拽至相对应的元件框内',
//                 'id': 'show_005',
//                 'option': [{
//                     'description': '发动机爆燃、温度过高',
//                     'id': 'show_005_001_p1',
//                     'isRight': '1'
//                 }, {
//                     'description': '火花塞电极无火花产生',
//                     'id': 'show_005_002_p1',
//                     'isRight': '1'
//                 }, {
//                     'description': '点火线圈过热',
//                     'id': 'show_005_003_p1',
//                     'isRight': '0'
//                 }, {
//                     'description': '火花塞电极火花时有时无',
//                     'id': 'show_005_004_p1',
//                     'isRight': '0'
//                 }],
//                 'question': [{
//                     'description': '火花塞',
//                     'id': 'show_005_001',
//                     'options': [{
//                         'description': '发动机爆燃、温度过高',
//                         'id': 'show_005_001_p1',
//                         'isRight': '1'
//                     }],
//                     'rate': '2',
//                     'url': '/aaa/bbb/index.html'
//                 }, {
//                     'description': '火花塞222',
//                     'id': 'show_005_001',
//                     'options': [{
//                         'description': '火花塞电极无火花产生',
//                         'id': 'show_005_002_p1',
//                         'isRight': '1'
//                     }],
//                     'rate': '2',
//                     'url': '/aaa/bbb/index.html'
//                 }],
//                 'rate': '',
//                 'type': '7',
//                 'url': ''
//             }, {
//                 'description': '通过实际测量，点火系统中影响发动机抖动的原因都有哪些因素？',
//                 'id': 'show_006',
//                 'option': [{
//                     'description': '初级线圈、次级线圈',
//                     'id': 'show_006_p1',
//                     'isRight': '1'
//                 }],
//                 'rate': '',
//                 'type': '8',
//                 'url': '/aaa/bbb/index.html'
//             }, {
//                 'description': '这是填空加选择题',
//                 'id': 'show_007',
//                 'question': [{
//                     'description': '传感器1的电源电压是$XCJ$伏，传感器2的电源电压是$XCJ$伏',
//                     'option': [{
//                         'description': '3V',
//                         'id': 'show_007_a001',
//                         'isRight': '1'
//                     }, {
//                         'description': '3V',
//                         'id': 'show_007_a002',
//                         'isRight': '1'
//                     }],
//                     'type': '9',
//                     'url': '/aaa/bbb/index.html'
//                 }, {
//                     'description': '根据以上测量结果判断，两个传感器的电源是否正常',
//                     'option': [{
//                         'description': '3V',
//                         'id': 'show_007_a003',
//                         'isRight': '0'
//                     }, {
//                         'description': '3V',
//                         'id': 'show_007_a004',
//                         'isRight': '1'
//                     }],
//                     'type': '1',
//                     'url': '/aaa/bbb/index.html'
//                 }],
//                 'rate': '',
//                 'type': '10',
//                 'url': ''
//             }, {
//                 'description': '这是填空加选择题',
//                 'id': 'show_007',
//                 'question': [{
//                     'description': '传感器1的电源电压是$XCJ$伏，传感器2的电源电压是$XCJ$伏',
//                     'id': 'show_007_001',
//                     'option': [{
//                         'description': '3V',
//                         'id': 'show_007_001_a001',
//                         'isRight': '1'
//                     }, {
//                         'description': '3V',
//                         'id': 'show_007_001_a002',
//                         'isRight': '1'
//                     }],
//                     'type': '9',
//                     'url': '/aaa/bbb/index.html'
//                 }, {
//                     'description': '根据以上测量结果判断，两个传感器的电源是否正常',
//                     'option': [{
//                         'description': '正常',
//                         'id': 'show_007_001_a003',
//                         'isRight': '0'
//                     }, {
//                         'description': '不正常',
//                         'id': 'show_007_001_a004',
//                         'isRight': '1'
//                     }],
//                     'type': '1',
//                     'url': '/aaa/bbb/index.html'
//                 }],
//                 'rate': '',
//                 'type': '10',
//                 'url': ''
//             }, {
//                 'description': '这是表格和选择题',
//                 'id': 'show_009',
//                 'question': [{
//                     'description': '',
//                     'id': 'show_009_001',
//                     'question': [{
//                         'description': '',
//                         'id': 'show_009_001_001',
//                         'option': [],
//                         'td': {
//                             'option': [],
//                             'td': ['操作内容', '油门踏板开度（％）', '信号1电压（V）', '信号2电压（V）']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_009_001_002',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_009_001_002_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_009_001_002_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_009_001_002_003',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['不踩加速踏板', '', '', '']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_009_001_003',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_009_001_003_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_009_001_003_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_009_001_003_003',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['加速踏板踩下一半', '', '', '']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }, {
//                         'description': '',
//                         'id': 'show_009_001_004',
//                         'option': [{
//                             'description': '30%',
//                             'id': 'show_009_001_004_001',
//                             'isRight': '1'
//                         }, {
//                             'description': '4v',
//                             'id': 'show_009_001_004_002',
//                             'isRight': '1'
//                         }, {
//                             'description': '5v',
//                             'id': 'show_009_001_004_003',
//                             'isRight': '1'
//                         }],
//                         'td': {
//                             'option': [],
//                             'td': ['加速踏板踩到底', '', '', '']
//                         },
//                         'url': '/aaa/bbb/index.html'
//                     }],
//                     'type': '3',
//                     'url': '/aaa/bbb/index.html'
//                 }, {
//                     'description': '通过以上数据分析，加速踏板位置传感器两个信号之间符合什么样的逻辑关系？',
//                     'id': 'show_009_002',
//                     'option': [{
//                         'description': '两个信号呈相反变化',
//                         'id': 'show_009_002_001',
//                         'isRight': '1'
//                     }, {
//                         'description': '一个值变大的时候另一个值变小',
//                         'id': 'show_009_002_001',
//                         'isRight': '0'
//                     }, {
//                         'description': '两个信号之间符合2倍的关系',
//                         'id': 'show_009_002_001',
//                         'isRight': '0'
//                     }, {
//                         'description': '两个信号之间没有逻辑关系',
//                         'id': 'show_009_002_001',
//                         'isRight': '0'
//                     }],
//                     'type': '1',
//                     'url': '/aaa/bbb/index.html'
//                 }],
//                 'rate': '',
//                 'type': '11',
//                 'url': ''
//             }],
//             'remark': ''
//         },
//     ],
//     'values': {}
// }
