interface Config {
    description;
    chapterArray;
    pageArray;
}
const appConfig: Config = {
  description: {
    name: '车型介绍',
    metadata: {
      schema: '', // 基于什么标准，xcj，scrom
      schemaversion: '0.1',
    },
    courseNumber: 'SK_WJZ1Q0001_2017V1',
    type: '', // 课件类型，WBT ,SBT,RM
    types: '', // wbtCourseWare，rmCourseWare，sbtCourseWare
    purpose: '',  // 目的
    require: '', // 学习课件之前需要掌握什么技术
    keyword: '', // 关键词
    language: '', // 课件语言
    version: '', // 课件自身版本号
    client: 'PC',  // 适用终端，PC、Android、iOS
    sumScore: '',  // 总分数
    passCondition: '', // 通过条件
    completeCondition: '',  // 完成条件，nub，
    entry: '', // 课件入口链接
  },
  chapterArray: [
    {
      id: 'chapter01',
      name: '',
      description: '',
      order: '1',
      childChapterArray: [],
    },
    {
      id: 'chapter02',
      name: '',
      description: '',
      order: '99',
      childChapterArray: [],
    },
    {
      id: 'chapter03',
      name: '五菱-荣光V',
      description: '多拉快跑 更实用！',
      order: '2',
      childChapterArray: [],
    },
    {
      id: 'chapter04',
      name: '宝骏310',
      description: '家庭，让生活更美好',
      order: '3',
      childChapterArray: [],
    },
    {
      id: 'chapter05',
      name: '宝骏730',
      description: '为每一代家庭七座车出尽全力',
      order: '4',
      childChapterArray: [],
    },
  ],
  pageArray: [
    {
      id: 'page02',
      isPass: 1,
      order: '2',
      chapterID: 'chapter02',
      componentArray: [
        // 按钮-使用本课程
        {
          id: 'page01-component0100',
          type: 'button',
          initialStateID: 'state01',
          passCondition: {
            event: 'click',
            state: 'start',
          },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '240',
                  height: '64',
                  positionLeft: '705',
                  positionTop: '370',
                  textAlign: 'center',
                  zIndex: '4',
                  backgroundImage: './assets/images/bt1.png',
                },
                hover: {
                  backgroundImage: './assets/images/bt1_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '64',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
            },
          ],
        },
        // 标题--课程简介
        {
          id: 'page01-component01',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '标题--课程简介',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '102',
                  positionTop: '80',
                  zIndex: '1',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '课程简介',
                  style: {
                    color: '#000',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textDecoration: 'underline',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 按钮-退出课程
        {
          id: 'page01-component02',
          type: 'button',
          initialStateID: 'state01',
          passCondition: {
            event: 'click',
            state: 'start',
          },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '240',
                  height: '64',
                  positionLeft: '705',
                  positionTop: '433',
                  zIndex: '6',
                  textAlign: 'center',
                  backgroundImage: './assets/images/instruction/7.png',
                },
                hover: {},
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '64',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
            },
          ],
        },
        // 遮罩层
        {
          id: 'page01-component08',
          type: 'overlay',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          remark: '遮罩层',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  color: '',
                  opacity: '',
                  zIndex: '1000',
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  color: '',
                  opacity: '',
                  zIndex: '1000',
                  display: 'block',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        // 弹窗背景
        {
          id: 'page01-component09',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '弹窗背景',
          initialStateID: 'state01',
          src: './assets/images/dialog_bg.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '240',
                  positionLeft: '300',
                  positionTop: '170',
                  zIndex: '1001',
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '240',
                  positionLeft: '300',
                  positionTop: '170',
                  zIndex: '1001',
                  display: 'block',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        // 弹窗标题1
        {
          id: 'page01-component10',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '弹窗标题1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'none',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
          ],
        },
        {
          id: 'page01-component11',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '弹窗标题2',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
          ],
        },
        //  弹窗内容
        {
          id: 'page01-component12',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                  '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'block',
                },
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                  '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },
        {
          id: 'page01-component13',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容2',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },

        // 弹窗按钮
        {
          id: 'page01-component14',
          type: 'button',
          initialStateID: 'state03',
          passCondition: { event: '', state: '', },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '130',
                  height: '50',
                  positionLeft: '588',
                  positionTop: '365',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/dialog_bt1.png',
                },
                hover: {
                  backgroundImage: './assets/images/dialog_bt1_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '130',
                  height: '50',
                  positionLeft: '588',
                  positionTop: '365',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/dialog_bt1_act.png',
                  display: 'none',
                }
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
        // 弹窗按钮-延时
        {
          id: 'page01-component15',
          type: 'button',
          initialStateID: 'state03',
          passCondition: { event: '', state: '', },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '680',
                  positionTop: '180',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close_bg.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '680',
                  positionTop: '180',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close.png',
                },
                hover: {
                  backgroundImage: './assets/images/close_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是bushi',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '130',
                  height: '50',
                  positionLeft: '680',
                  positionTop: '180',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/dialog_bt1_act.png',
                  display: 'none',
                }
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是-----',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
      ],
      publishArray: [

        // 页面按钮--使用本课程
        {
          id: 'publish05',
          component: {
            id: 'page01-component0100',
            stateID: 'state01',
          },
          order: '3',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },

        // 页面按钮--退出本课程
        {
          id: 'publish08',
          component: {
            id: 'page01-component02',
            stateID: 'state01',
          },
          order: '5',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },

        // 弹窗按钮--是
        {
          id: 'publish11',
          component: {
            id: 'page01-component14',
            stateID: 'state01',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },

          ],
        },

        // 弹窗按钮--yanshi
        {
          id: 'publish12',
          component: {
            id: 'page01-component15',
            stateID: 'state02',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },

          ],
        },

      ],
      // 页面动画,暂没此功能
      animation: {
        animationInID: '',
        animationOnID: '',
        animationOutID: '',
      },
      backgroundImageSrc: './assets/images/profile_bg.png',
    },
    {
      id: 'page01',
      isPass: 1,
      order: '1',
      chapterID: 'chapter01',
      componentArray: [
        // 按钮-使用本课程
        {
          id: 'page01-component0100',
          type: 'button',
          initialStateID: 'state01',
          passCondition: {
            event: 'click',
            state: 'start',
          },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '240',
                  height: '64',
                  positionLeft: '705',
                  positionTop: '370',
                  textAlign: 'center',
                  zIndex: '4',
                  backgroundImage: './assets/images/bt1.png',
                },
                hover: {
                  backgroundImage: './assets/images/bt1_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '64',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
            },
          ],
        },
        // 标题--课程简介
        {
          id: 'page01-component01',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '标题--课程简介',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '102',
                  positionTop: '80',
                  zIndex: '1',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '课程简介',
                  style: {
                    color: '#000',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    // textDecoration: 'underline',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 按钮-退出课程
        {
          id: 'page01-component02',
          type: 'button',
          initialStateID: 'state01',
          passCondition: {
            event: 'click',
            state: 'start',
          },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '240',
                  height: '64',
                  positionLeft: '705',
                  positionTop: '433',
                  zIndex: '6',
                  textAlign: 'center',
                  backgroundImage: './assets/images/bt1.png',
                },
                hover: {},
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '64',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
            },
          ],
        },
        // 遮罩层
        {
          id: 'page01-component08',
          type: 'overlay',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          remark: '遮罩层',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  color: '',
                  opacity: '',
                  zIndex: '1000',
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  color: '',
                  opacity: '',
                  zIndex: '1000',
                  display: 'block',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        // 弹窗背景
        {
          id: 'page01-component09',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '弹窗背景',
          initialStateID: 'state01',
          src: './assets/images/dialog_bg.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '240',
                  positionLeft: '300',
                  positionTop: '170',
                  zIndex: '1001',
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '240',
                  positionLeft: '300',
                  positionTop: '170',
                  zIndex: '1001',
                  display: 'block',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        // 弹窗标题1
        {
          id: 'page01-component10',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '弹窗标题1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'none',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
          ],
        },
        {
          id: 'page01-component11',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '弹窗标题2',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
          ],
        },
        //  弹窗内容
        {
          id: 'page01-component12',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                  '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'block',
                },
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                  '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },
        {
          id: 'page01-component13',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容2',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },

        // 弹窗按钮
        {
          id: 'page01-component14',
          type: 'button',
          initialStateID: 'state03',
          passCondition: { event: '', state: '', },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '130',
                  height: '50',
                  positionLeft: '588',
                  positionTop: '365',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/dialog_bt1.png',
                },
                hover: {
                  backgroundImage: './assets/images/dialog_bt1_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '130',
                  height: '50',
                  positionLeft: '588',
                  positionTop: '365',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/dialog_bt1_act.png',
                  display: 'none',
                }
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
        // 弹窗按钮-延时
        {
          id: 'page01-component15',
          type: 'button',
          initialStateID: 'state03',
          passCondition: { event: '', state: '', },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '680',
                  positionTop: '180',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close_bg.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '680',
                  positionTop: '180',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close.png',
                },
                hover: {
                  backgroundImage: './assets/images/close_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是bushi',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '130',
                  height: '50',
                  positionLeft: '680',
                  positionTop: '180',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/dialog_bt1_act.png',
                  display: 'none',
                }
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是-----',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
      ],
      publishArray: [

        // 页面按钮--使用本课程

        {
          id: 'publish05',
          component: {
            id: 'page01-component0100',
            stateID: '',
          },
          order: '8',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },

          ],

        },
        {
          id: 'publish04',
          component: {
            id: 'page01-component0100',
            stateID: '',
            isPass: 1,
          },
          order: '8',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state03',
              },
              // timeOut: '0',
              setCurrentState: 'state02',
            },
          ],
        },
        {
          id: 'publish03',
          component: {
            id: 'page01-component0100',
            stateID: '',
            isPass: 0,
          },
          order: '8',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              timeOut: '3000',
              setCurrentState: 'state02',
            },
          ],
        },
        // 页面按钮--退出本课程
        {
          id: 'publish08',
          component: {
            id: 'page01-component02',
            stateID: '',
          },
          order: '5',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },

        // 弹窗按钮--是
        {
          id: 'publish11',
          component: {
            id: 'page01-component14',
            stateID: '',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },

          ],
        },

        // 弹窗按钮--yanshi
        {
          id: 'publish12',
          component: {
            id: 'page01-component15',
            stateID: 'state02',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },

          ],
        },

      ],
      // 页面动画,暂没此功能
      animation: {
        animationInID: '',
        animationOnID: '',
        animationOutID: '',
      },
      backgroundImageSrc: './assets/images/profile_bg.png',
    },
    {
      id: 'page03',
      isPass: 1,
      order: '3',
      chapterID: 'chapter03',
      componentArray: [
        // 按钮-使用本课程
        {
          id: 'page01-component0100',
          type: 'button',
          initialStateID: 'state01',
          passCondition: {
            event: 'click',
            state: 'start',
          },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '240',
                  height: '64',
                  positionLeft: '705',
                  positionTop: '370',
                  textAlign: 'center',
                  zIndex: '4',
                  backgroundImage: './assets/images/bt1.png',
                },
                hover: {
                  backgroundImage: './assets/images/bt1_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '64',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
            },
          ],
        },
        // 标题--课程简介
        {
          id: 'page01-component01',
          type: 'text',
          initialStateID: 'state01',
          passCondition: { event: '', state: '', },
          remark: '标题--课程简介',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '',
                  height: '',
                  positionLeft: '102',
                  positionTop: '80',
                  zIndex: '1',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '课程简介',
                  style: {
                    color: '#000',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: 'bold',
                    lineHeight: '',
                    textDecoration: 'underline',
                    textAlign: '',
                  },
                }
              ],
            },
          ],
        },
        // 按钮-退出课程
        {
          id: 'page01-component02',
          type: 'button',
          initialStateID: 'state01',
          passCondition: {
            event: 'click',
            state: 'start',
          },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '240',
                  height: '64',
                  positionLeft: '705',
                  positionTop: '433',
                  zIndex: '6',
                  textAlign: 'center',
                  backgroundImage: './assets/images/bt1.png',
                },
                hover: {},
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '64',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
            },
          ],
        },
        // 遮罩层
        {
          id: 'page01-component08',
          type: 'overlay',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          remark: '遮罩层',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  color: '',
                  opacity: '',
                  zIndex: '1000',
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  color: '',
                  opacity: '',
                  zIndex: '1000',
                  display: 'block',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        // 弹窗背景
        {
          id: 'page01-component09',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '弹窗背景',
          initialStateID: 'state01',
          src: './assets/images/dialog_bg.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '240',
                  positionLeft: '300',
                  positionTop: '170',
                  zIndex: '1001',
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '240',
                  positionLeft: '300',
                  positionTop: '170',
                  zIndex: '1001',
                  display: 'block',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        // 弹窗标题1
        {
          id: 'page01-component10',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '弹窗标题1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'none',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
          ],
        },
        {
          id: 'page01-component11',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '弹窗标题2',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
          ],
        },
        //  弹窗内容
        {
          id: 'page01-component12',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                  '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'block',
                },
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                  '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },
        {
          id: 'page01-component13',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容2',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },

        // 弹窗按钮
        {
          id: 'page01-component14',
          type: 'button',
          initialStateID: 'state03',
          passCondition: { event: '', state: '', },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '130',
                  height: '50',
                  positionLeft: '588',
                  positionTop: '365',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/dialog_bt1.png',
                },
                hover: {
                  backgroundImage: './assets/images/dialog_bt1_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '130',
                  height: '50',
                  positionLeft: '588',
                  positionTop: '365',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/dialog_bt1_act.png',
                  display: 'none',
                }
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
        // 弹窗按钮-延时
        {
          id: 'page01-component15',
          type: 'button',
          initialStateID: 'state03',
          passCondition: { event: '', state: '', },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '680',
                  positionTop: '180',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close_bg.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '680',
                  positionTop: '180',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close.png',
                },
                hover: {
                  backgroundImage: './assets/images/close_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是bushi',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state03',
              isScroll: 1,
              style: {
                default: {
                  width: '130',
                  height: '50',
                  positionLeft: '680',
                  positionTop: '180',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/dialog_bt1_act.png',
                  display: 'none',
                }
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是-----',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
      ],
      publishArray: [

        // 页面按钮--使用本课程
        {
          id: 'publish05',
          component: {
            id: 'page01-component0100',
            stateID: 'state01',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },

        // 页面按钮--退出本课程
        {
          id: 'publish08',
          component: {
            id: 'page01-component02',
            stateID: 'state01',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },

        // 弹窗按钮--是
        {
          id: 'publish11',
          component: {
            id: 'page01-component14',
            stateID: 'state01',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },

          ],
        },

        // 弹窗按钮--yanshi
        {
          id: 'publish12',
          component: {
            id: 'page01-component15',
            stateID: 'state02',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },

          ],
        },

      ],
      // 页面动画,暂没此功能
      animation: {
        animationInID: '',
        animationOnID: '',
        animationOutID: '',
      },
      backgroundImageSrc: './assets/images/profile_bg.png',
    },
    {
      id: 'page04',
      isPass: 1,
      order: '4',
      chapterID: 'chapter03',
      componentArray: [

        // 闪烁点
        {
          id: 'page01-component01',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '604',
                  positionTop: '396',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '1',
                  style: {
                    color: '#fff',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '40',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'page01-component02',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '366',
                  positionTop: '353',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '2',
                  style: {
                    color: '#fff',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '40',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'page01-component03',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '521',
                  positionTop: '265',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '3',
                  style: {
                    color: '#fff',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '40',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'page01-component04',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '455',
                  positionTop: '208',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '4',
                  style: {
                    color: '#fff',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '40',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'page01-component05',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '381',
                  positionTop: '395',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '5',
                  style: {
                    color: '#fff',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '40',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'page01-component06',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '599',
                  positionTop: '288',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '6',
                  style: {
                    color: '#fff',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '40',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },

        // 遮罩层
        {
          id: 'page01-component08',
          type: 'overlay',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          remark: '遮罩层',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  color: '',
                  opacity: '',
                  zIndex: '1000',
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  color: '',
                  opacity: '',
                  zIndex: '1000',
                  display: 'block',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        // 框
        {
          id: 'page01-component09',
          type: 'quadrilateral',
          passCondition: { event: '', state: '', },
          remark: '弹窗背景',
          initialStateID: 'state01',
          // src: './assets/images/dialog_bg.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '826',
                  height: '260',
                  positionLeft: '90',
                  positionTop: '170',
                  zIndex: '1001',
                  display: 'block',
                  borderWidth: '2',
                  borderColor: '#000',
                  backgroundColor: '#fff',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        // 弹窗标题1
        {
          id: 'page01-component10',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '弹窗标题1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'none',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
          ],
        },
        {
          id: 'page01-component11',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '弹窗标题2',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
          ],
        },
        //  弹窗内容
        {
          id: 'page01-component12',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                  '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'block',
                },
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                  '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },
        {
          id: 'page01-component13',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容2',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },


        // 弹窗按钮-延时
        {
          id: 'page01-component15',
          type: 'button',
          initialStateID: 'state03',
          passCondition: { event: '', state: '', },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '885',
                  positionTop: '170',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close_bg.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '885',
                  positionTop: '170',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close.png',
                },
                hover: {
                  backgroundImage: './assets/images/close_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是bushi',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state03',
              isScroll: 1,
              style: {
                default: {

                  display: 'none',
                }
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是-----',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state04',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '885',
                  positionTop: '170',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close_bg.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state05',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '885',
                  positionTop: '170',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close.png',
                },
                hover: {
                  backgroundImage: './assets/images/close_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是bushi',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },

        // 弹窗内容 1
        {
          id: 'page01-component21',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '',
          initialStateID: 'state01',
          src: './assets/images/baojun310_a.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '240',
                  positionLeft: '500',
                  positionTop: '170',
                  zIndex: '1001',
                  display: 'block',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        {
          id: 'page01-component22',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  display: 'none',
                },
              },
              textArray: [],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '405',
                  height: '240',
                  positionLeft: '95',
                  positionTop: '180',
                  zIndex: '1004',
                  display: 'block',
                  // backgroundColor: '#fff',
                },
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '宝骏310的前脸设计继承和发扬宝骏品牌风格，前格栅完美调和设计美感与功能需求，' +
                  '格栅镀铬饰条一直延伸到大灯下沿，简洁锐利，奔腾有力，将宝骏品牌与产品特征尽情释放。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: 'U型格栅通过引擎盖外侧力量线延伸至A柱，超小2.4度A柱障碍角有效提升驾驶员视域，提升驾驶安全性。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },
      ],
      publishArray: [


        // point
        {
          id: 'publish01',
          component: {
            id: 'page01-component01',
            // stateID: 'state01',
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗tupian
              id: 'subscribe1101',
              component: {
                id: 'page01-component21',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容wenzi
              id: 'subscribe1103',
              component: {
                id: 'page01-component22',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },

          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component01',
            // stateID: 'state01',
            isPass: 1,
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component01',
            // stateID: 'state01',
            isPass: 0,
          },
          order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        // point 2
        {
          id: 'publish01',
          component: {
            id: 'page01-component02',
            // stateID: 'state01',

          },
          order: '2',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                // stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component02',
            // stateID: 'state01',
            isPass: 1,
          },
          order: '2',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component02',
            // stateID: 'state01',
            isPass: 0,
          },
          order: '2',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        // point 3
        {
          id: 'publish01',
          component: {
            id: 'page01-component03',
            // stateID: 'state01',

          },
          order: '3',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                // stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component03',
            // stateID: 'state01',
            isPass: 1,
          },
          order: '3',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component03',
            // stateID: 'state01',
            isPass: 0,
          },
          order: '3',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        //
        // point 4
        {
          id: 'publish01',
          component: {
            id: 'page01-component04',
            // stateID: 'state01',

          },
          order: '4',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                // stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component04',
            // stateID: 'state01',
            isPass: 1,
          },
          order: '4',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component04',
            // stateID: 'state01',
            isPass: 0,
          },
          order: '4',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        //

        {
          id: 'publish05',
          component: {
            id: 'page01-component05',
            // stateID: 'state01',
          },
          order: 5,
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              // timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish06',
          component: {
            id: 'page01-component06',
            // stateID: 'state01',
          },
          order: 6,
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              // timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },


        // 弹窗按钮--是
        {
          id: 'publish11',
          component: {
            id: 'page01-component14',
            stateID: 'state01',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },

          ],
        },

        // 弹窗按钮--yanshi
        {
          id: 'publish12',
          component: {
            id: 'page01-component15',
            stateID: 'state02',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮-yanshi
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component21',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component22',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        {
          id: 'publish12',
          component: {
            id: 'page01-component15',
            stateID: 'state02',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component21',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component22',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-yanshi
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },

      ],
      // 页面动画,暂没此功能
      animation: {
        animationInID: '',
        animationOnID: '',
        animationOutID: '',
      },
      backgroundImageSrc: './assets/images/baojun310.png',
    },
    {
      id: 'page05',
      // isPass: 0,
      order: '5',
      chapterID: 'chapter04',
      componentArray: [

        // 闪烁点
        {
          id: 'page01-component01',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '604',
                  positionTop: '396',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: 'halo',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '604',
                  positionTop: '396',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        {
          id: 'page01-component02',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '366',
                  positionTop: '353',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: 'halo',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '366',
                  positionTop: '353',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        {
          id: 'page01-component03',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '521',
                  positionTop: '265',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: 'halo',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '521',
                  positionTop: '265',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        {
          id: 'page01-component04',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '455',
                  positionTop: '208',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: 'halo',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '455',
                  positionTop: '208',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        {
          id: 'page01-component05',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '381',
                  positionTop: '395',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: 'halo',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '381',
                  positionTop: '395',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        {
          id: 'page01-component06',
          type: 'button',
          initialStateID: 'state01',
          passCondition: { event: 'click', state: 'start', },
          remark: '',
          // src: './assets/images/point.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '599',
                  positionTop: '288',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: 'halo',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '40',
                  height: '40',
                  positionLeft: '599',
                  positionTop: '288',
                  zIndex: '1',
                  textAlign: 'center',
                  backgroundImage: './assets/images/point.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },

        // 遮罩层
        {
          id: 'page01-component08',
          type: 'overlay',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          remark: '遮罩层',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  color: '',
                  opacity: '',
                  zIndex: '1000',
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  color: '',
                  opacity: '',
                  zIndex: '1000',
                  display: 'block',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        // 框
        {
          id: 'page01-component09',
          type: 'quadrilateral',
          passCondition: { event: '', state: '', },
          remark: '弹窗背景',
          initialStateID: 'state01',
          // src: './assets/images/dialog_bg.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '826',
                  height: '260',
                  positionLeft: '90',
                  positionTop: '170',
                  zIndex: '1001',
                  display: 'block',
                  borderWidth: '2',
                  borderColor: '#000',
                  backgroundColor: '#fff',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        // 弹窗标题1
        {
          id: 'page01-component10',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '弹窗标题1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'none',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '使用本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
          ],
        },
        {
          id: 'page01-component11',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '弹窗标题2',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '42',
                  positionLeft: '314',
                  positionTop: '170',
                  zIndex: '1002',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '退出本课程',
                  style: {
                    color: '#fff',
                    fontSize: '20',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '42',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
          ],
        },
        //  弹窗内容
        {
          id: 'page01-component12',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                  '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'block',
                },
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
                  '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                }
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },
        {
          id: 'page01-component13',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容2',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'none',
                },


              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '400',
                  height: '150',
                  positionLeft: '314',
                  positionTop: '234',
                  zIndex: '1004',
                  display: 'block',
                },

              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },


        // 弹窗按钮-延时
        {
          id: 'page01-component15',
          type: 'button',
          initialStateID: 'state03',
          passCondition: { event: '', state: '', },
          remark: 'anniu',
          src: '',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '885',
                  positionTop: '170',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close_bg.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '885',
                  positionTop: '170',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close.png',
                },
                hover: {
                  backgroundImage: './assets/images/close_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是bushi',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state03',
              isScroll: 1,
              style: {
                default: {

                  display: 'none',
                }
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '是-----',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state04',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '885',
                  positionTop: '170',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close_bg.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
            {
              id: 'state05',
              isScroll: 1,
              style: {
                default: {
                  width: '33',
                  height: '22',
                  positionLeft: '885',
                  positionTop: '170',
                  zIndex: '1007',
                  textAlign: 'center',
                  backgroundImage: './assets/images/close.png',
                },
                hover: {
                  backgroundImage: './assets/images/close_act.png',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  // content: '是bushi',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '50',
                    textDecoration: '',
                  },
                },
              ],
            },
          ],
        },

        // 弹窗内容 1
        {
          id: 'page01-component21',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '',
          initialStateID: 'state01',
          src: './assets/images/baojun310_a.png',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  display: 'none',
                },
              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '420',
                  height: '240',
                  positionLeft: '500',
                  positionTop: '170',
                  zIndex: '1001',
                  display: 'block',
                },

              },
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
              textArray: [],
            },
          ],
        },
        {
          id: 'page01-component22',
          type: 'text',
          passCondition: { event: '', state: '', },
          initialStateID: 'state01',
          src: '',
          remark: '内容1',
          stateArray: [
            {
              id: 'state01',
              isScroll: 1,
              style: {
                default: {
                  display: 'none',
                },
              },
              textArray: [],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },
            {
              id: 'state02',
              isScroll: 1,
              style: {
                default: {
                  width: '405',
                  height: '240',
                  positionLeft: '95',
                  positionTop: '180',
                  zIndex: '1004',
                  display: 'block',
                  // backgroundColor: '#fff',
                },
              },
              textArray: [
                {
                  id: '',
                  order: '1',
                  content: '宝骏310的前脸设计继承和发扬宝骏品牌风格，前格栅完美调和设计美感与功能需求，' +
                  '格栅镀铬饰条一直延伸到大灯下沿，简洁锐利，奔腾有力，将宝骏品牌与产品特征尽情释放。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
                {
                  id: '',
                  order: '1',
                  content: 'U型格栅通过引擎盖外侧力量线延伸至A柱，超小2.4度A柱障碍角有效提升驾驶员视域，提升驾驶安全性。',
                  style: {
                    color: '#000',
                    fontSize: '14',
                    fontStyle: '',
                    fontWeight: '',
                    lineHeight: '',
                    textDecoration: '',
                    textAlign: '',
                  },
                },
              ],
              animation: {
                animationInID: '',
                animationOnID: '',
                animationOutID: '',
              },
            },

          ],
        },
      ],
      publishArray: [


        // point
        {
          id: 'publish01',
          component: {
            id: 'page01-component01',
            // stateID: 'state01',
          },
          // order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗tupian
              id: 'subscribe1101',
              component: {
                id: 'page01-component21',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容wenzi
              id: 'subscribe1103',
              component: {
                id: 'page01-component22',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              //
              id: 'subscribe11007',
              component: {
                id: 'page01-component01',
                stateID: 'state01',
              },
              // timeOut: '5000',
              setCurrentState: 'state02',
            },

          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component01',
            // stateID: 'state01',
            isPass: 1,
          },
          // order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component01',
            // stateID: 'state01',
            isPass: 0,
          },
          // order: '1',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        // point 2
        {
          id: 'publish01',
          component: {
            id: 'page01-component02',
            // stateID: 'state01',

          },
          // order: '2',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                // stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              //
              id: 'subscribe11007',
              component: {
                id: 'page01-component02',
                stateID: 'state01',
              },
              // timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component02',
            // stateID: 'state01',
            isPass: 1,
          },
          // order: '2',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component02',
            // stateID: 'state01',
            isPass: 0,
          },
          // order: '2',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        // point 3
        {
          id: 'publish01',
          component: {
            id: 'page01-component03',
            // stateID: 'state01',

          },
          // order: '3',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                // stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              //
              id: 'subscribe11007',
              component: {
                id: 'page01-component03',
                stateID: 'state01',
              },
              // timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component03',
            // stateID: 'state01',
            isPass: 1,
          },
          // order: '3',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component03',
            // stateID: 'state01',
            isPass: 0,
          },
          // order: '3',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        //
        // point 4
        {
          id: 'publish01',
          component: {
            id: 'page01-component04',
            // stateID: 'state01',

          },
          // order: '4',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                // stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              //
              id: 'subscribe11007',
              component: {
                id: 'page01-component04',
                stateID: 'state01',
              },
              // timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component04',
            // stateID: 'state01',
            isPass: 1,
          },
          // order: '4',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish0100',
          component: {
            id: 'page01-component04',
            // stateID: 'state01',
            isPass: 0,
          },
          // order: '4',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                // stateID: 'state01',
              },
              timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        //

        {
          id: 'publish05',
          component: {
            id: 'page01-component05',
            // stateID: 'state01',
          },
          // order: 5,
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              // timeOut: '5000',
              setCurrentState: 'state02',
            },
            {
              //
              id: 'subscribe11007',
              component: {
                id: 'page01-component05',
                stateID: 'state01',
              },
              // timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },
        {
          id: 'publish06',
          component: {
            id: 'page01-component06',
            // stateID: 'state01',
          },
          // order: 6,
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state02',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state03',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state03',
              },
              timeOut: '',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-延时
              id: 'subscribe11006',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              // timeOut: '5000',
              setCurrentState: 'state02',
            },
            {
              //
              id: 'subscribe11007',
              component: {
                id: 'page01-component06',
                stateID: 'state01',
              },
              // timeOut: '5000',
              setCurrentState: 'state02',
            },
          ],

        },


        // 弹窗按钮--是
        {
          id: 'publish11',
          component: {
            id: 'page01-component14',
            stateID: 'state01',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },

          ],
        },

        // 弹窗按钮--yanshi
        {
          id: 'publish12',
          component: {
            id: 'page01-component15',
            stateID: 'state02',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component09',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题1
              id: 'subscribe1102',
              component: {
                id: 'page01-component10',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              component: {
                id: 'page01-component11',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容1
              id: 'subscribe1103',
              component: {
                id: 'page01-component12',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component13',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮
              id: 'subscribe1104',
              component: {
                id: 'page01-component14',
                // stateID: 'state01',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗关闭按钮-yanshi
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component21',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component22',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
          ],
        },
        {
          id: 'publish12',
          component: {
            id: 'page01-component15',
            stateID: 'state02',
          },
          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 遮罩层
              id: 'subscribe1101',
              component: {
                id: 'page01-component08',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗背景
              id: 'subscribe1101',
              component: {
                id: 'page01-component21',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              component: {
                id: 'page01-component22',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state01',
            },
            {
              // 弹窗关闭按钮-yanshi
              id: 'subscribe11005',
              component: {
                id: 'page01-component15',
                // stateID: 'state02',
              },
              timeOut: '0',
              setCurrentState: 'state03',
            },
          ],
        },

      ],
      // 页面动画,暂没此功能
      animation: {
        animationInID: '',
        animationOnID: '',
        animationOutID: '',
      },
      backgroundImageSrc: './assets/images/baojun310.png',
    },

    {
      id: 'page06',
      order: '6',
      chapterID: 'chapter05',
      componentArray: [
        {
          id: 'page01-component01',

          passCondition: { event: '', state: '', },
          remark: '标题--课程简介',
          textArray: [
            {
              id: '',
              order: '1',
              content: '课程简介',
              style: {
                color: '#000',
                fontSize: '20',
                fontStyle: '',
                fontWeight: 'bold',
                lineHeight: '',
                textDecoration: 'underline',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '',
            height: '',
            positionLeft: '102',
            positionTop: '80',
            zIndex: '1',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component02',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '按钮背景-使用课程',
          src: './assets/images/bt1.png',
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '370',
            zIndex: '2',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component03',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '按钮背景划过样式-使用课程',
          src: './assets/images/bt1_act.png',
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '370',
            zIndex: '3',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component04',

          passCondition: { event: '', state: '', },
          remark: '按钮文字-使用课程',
          textArray: [
            {
              id: '',
              order: '1',
              content: '使用本课程',
              style: {
                color: '#fff',
                fontSize: '20',
                fontStyle: '',
                fontWeight: 'bold',
                lineHeight: '64',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '370',
            zIndex: '4',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component05',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '按钮背景-退出课程',
          src: './assets/images/bt1.png',
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '433',
            zIndex: '5',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component06',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '按钮背景划过样式-退出课程',
          src: './assets/images/bt1_act.png',
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '433',
            zIndex: '6',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component07',

          passCondition: { event: '', state: '', },
          remark: '按钮文字-退出课程',
          textArray: [
            {
              id: '',
              order: '1',
              content: '退出本课程',
              style: {
                color: '#fff',
                fontSize: '20',
                fontStyle: '',
                fontWeight: 'bold',
                lineHeight: '64',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '433',
            zIndex: '7',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component08',
          type: 'overlay',
          passCondition: { event: '', state: '', },
          remark: '遮罩层',
          style: {
            color: '',
            opacity: '',
            zIndex: '1000',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component09',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '弹窗背景',
          src: './assets/images/bt1_act.png',
          style: {
            width: '420',
            height: '240',
            positionLeft: '300',
            positionTop: '170',
            zIndex: '1001',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component10',

          passCondition: { event: '', state: '', },
          remark: '弹窗标题1',
          textArray: [
            {
              id: '',
              order: '1',
              content: '使用本课程',
              style: {
                color: '#fff',
                fontSize: '20',
                fontStyle: '',
                fontWeight: 'bold',
                lineHeight: '42',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '420',
            height: '42',
            positionLeft: '300',
            positionTop: '170',
            zIndex: '1002',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component11',

          passCondition: { event: '', state: '', },
          remark: '弹窗标题2',
          textArray: [
            {
              id: '',
              order: '1',
              content: '退出本课程',
              style: {
                color: '#fff',
                fontSize: '20',
                fontStyle: '',
                fontWeight: 'bold',
                lineHeight: '42',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '420',
            height: '42',
            positionLeft: '300',
            positionTop: '170',
            zIndex: '1003',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component12',

          passCondition: { event: '', state: '', },
          remark: '弹窗内容1',
          textArray: [
            {
              id: '',
              order: '1',
              content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
              '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
              style: {
                color: '#000',
                fontSize: '14',
                fontStyle: '',
                fontWeight: '',
                lineHeight: '',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '400',
            height: '150',
            positionLeft: '330',
            positionTop: '234',
            zIndex: '1004',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component13',

          passCondition: { event: '', state: '', },
          remark: '弹窗内容2',
          textArray: [
            {
              id: '',
              order: '1',
              content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
              style: {
                color: '#000',
                fontSize: '14',
                fontStyle: '',
                fontWeight: '',
                lineHeight: '',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '400',
            height: '150',
            positionLeft: '330',
            positionTop: '234',
            zIndex: '1005',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component14',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '弹窗关闭按钮背景',
          src: './assets/images/bt1.png',
          style: {
            width: '130',
            height: '50',
            positionLeft: '600',
            positionTop: '375',
            zIndex: '1006',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component15',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '弹窗关闭按钮划过背景',
          src: './assets/images/bt1_act.png',
          style: {
            width: '130',
            height: '50',
            positionLeft: '600',
            positionTop: '375',
            zIndex: '1007',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component16',

          passCondition: { event: '', state: '', },
          remark: '弹窗关闭按钮-文字',
          textArray: [
            {
              id: '',
              order: '1',
              content: '是',
              style: {
                color: '#000',
                fontSize: '14',
                fontStyle: '',
                fontWeight: '',
                lineHeight: '',
                textDecoration: '',
                textAlign: '',
              },
            },
          ],
          style: {
            width: '130',
            height: '50',
            positionLeft: '600',
            positionTop: '375',
            zIndex: '1008',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
      ],
      publishArray: [
        // 此页响应next与pre相同,
        {
          id: 'publish01',
          componentID: '',

          order: '',
          triggerEvent: '',
          subscribeArray: [
            // 默认响应为out,
            {
              id: 'subscribe0101',
              componentID: 'page01-component01',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0102',
              componentID: 'page01-component02',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0103',
              componentID: 'page01-component03',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0104',
              componentID: 'page01-component04',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0105',
              componentID: 'page01-component05',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0106',
              componentID: 'page01-component06',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0107',
              componentID: 'page01-component07',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0108',
              componentID: 'page01-component08',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0109',
              componentID: 'page01-component09',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0110',
              componentID: 'page01-component10',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0111',
              componentID: 'page01-component11',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0112',
              componentID: 'page01-component12',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0113',
              componentID: 'page01-component13',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0114',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0115',
              componentID: 'page01-component15',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0116',
              componentID: 'page01-component16',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },
        {
          id: 'publish02',
          componentID: '',

          order: '',
          triggerEvent: '',
          subscribeArray: [
            // 默认响应为out,
            {
              id: 'subscribe0101',
              componentID: 'page01-component01',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0202',
              componentID: 'page01-component02',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0203',
              componentID: 'page01-component03',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0204',
              componentID: 'page01-component04',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0205',
              componentID: 'page01-component05',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0206',
              componentID: 'page01-component06',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0207',
              componentID: 'page01-component07',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0208',
              componentID: 'page01-component08',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0209',
              componentID: 'page01-component09',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0210',
              componentID: 'page01-component10',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0211',
              componentID: 'page01-component11',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0212',
              componentID: 'page01-component12',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0213',
              componentID: 'page01-component13',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0214',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0215',
              componentID: 'page01-component15',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0216',
              componentID: 'page01-component16',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },
        // 页面按钮--使用本课程
        {
          id: 'publish03',
          componentID: 'page01-component04',

          order: '',
          triggerEvent: 'mouseover',
          subscribeArray: [
            {
              // 隐藏默认按钮背景,
              id: 'subscribe0301',
              componentID: 'page01-component02',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 展示鼠标划过的按钮背景,
              id: 'subscribe0302',
              componentID: 'page01-component03',
              timeOut: '0',
              responseEvent: 'in',
            },
          ],
        },
        {
          id: 'publish04',
          componentID: 'page01-component04',

          order: '',
          triggerEvent: 'mouseout',
          subscribeArray: [
            {
              // 展示默认按钮背景,
              id: 'subscribe0401',
              componentID: 'page01-component02',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 隐藏鼠标划过的按钮背景,
              id: 'subscribe0402',
              componentID: 'page01-component03',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },
        {
          id: 'publish05',
          componentID: 'page01-component04',

          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗背景
              id: 'subscribe0501',
              componentID: 'page01-component09',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗标题1
              id: 'subscribe0502',
              componentID: 'page01-component10',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗内容1
              id: 'subscribe0503',
              componentID: 'page01-component12',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗关闭按钮背景
              id: 'subscribe0504',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗关闭按钮-文字
              id: 'subscribe0505',
              componentID: 'page01-component16',
              timeOut: '0',
              responseEvent: 'in',
            },
          ],
        },
        // 页面按钮--退出本课程
        {
          id: 'publish06',
          componentID: 'page01-component07',

          order: '',
          triggerEvent: 'mouseover',
          subscribeArray: [
            {
              // 隐藏默认按钮背景,
              id: 'subscribe0601',
              componentID: 'page01-component05',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 展示鼠标划过的按钮背景,
              id: 'subscribe0602',
              componentID: 'page01-component06',
              timeOut: '0',
              responseEvent: 'in',
            },
          ],
        },
        {
          id: 'publish07',
          componentID: 'page01-component07',

          order: '',
          triggerEvent: 'mouseout',
          subscribeArray: [
            {
              // 展示默认按钮背景,
              id: 'subscribe0701',
              componentID: 'page01-component05',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 隐藏鼠标划过的按钮背景,
              id: 'subscribe0702',
              componentID: 'page01-component06',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },
        {
          id: 'publish08',
          componentID: 'page01-component07',

          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗背景
              id: 'subscribe0801',
              componentID: 'page01-component09',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗标题2
              id: 'subscribe0802',
              componentID: 'page01-component11',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗内容2
              id: 'subscribe0803',
              componentID: 'page01-component13',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗关闭按钮背景
              id: 'subscribe0804',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗关闭按钮-文字
              id: 'subscribe0805',
              componentID: 'page01-component16',
              timeOut: '0',
              responseEvent: 'in',
            },
          ],
        },
        // 弹窗按钮--是
        {
          id: 'publish09',
          componentID: 'page01-component16',

          order: '',
          triggerEvent: 'mouseover',
          subscribeArray: [
            {
              // 隐藏默认按钮背景,
              id: 'subscribe0901',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 展示鼠标划过的按钮背景,
              id: 'subscribe0902',
              componentID: 'page01-component15',
              timeOut: '0',
              responseEvent: 'in',
            },
          ],
        },
        {
          id: 'publish10',
          componentID: 'page01-component16',

          order: '',
          triggerEvent: 'mouseout',
          subscribeArray: [
            {
              // 展示默认按钮背景,
              id: 'subscribe1001',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 隐藏鼠标划过的按钮背景,
              id: 'subscribe1002',
              componentID: 'page01-component15',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },
        {
          id: 'publish11',
          componentID: 'page01-component16',

          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗背景
              id: 'subscribe1101',
              componentID: 'page01-component09',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              componentID: 'page01-component11',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              componentID: 'page01-component13',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 弹窗关闭按钮背景
              id: 'subscribe1104',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 弹窗关闭按钮-文字
              id: 'subscribe1105',
              componentID: 'page01-component16',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },

      ],
      // 页面动画,暂没此功能
      animation: {
        animationInID: '',
        animationOnID: '',
        animationOutID: '',
      },
      backgroundImageSrc: './assets/images/profile_bg.png',
    },
    {
      id: 'page99',
      order: '99',
      chapterID: 'chapter02',
      componentArray: [
        {
          id: 'page01-component01',

          passCondition: { event: '', state: '', },
          remark: '标题--课程简介',
          textArray: [
            {
              id: '',
              order: '1',
              content: '课程简介',
              style: {
                color: '#000',
                fontSize: '20',
                fontStyle: '',
                fontWeight: 'bold',
                lineHeight: '',
                textDecoration: 'underline',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '',
            height: '',
            positionLeft: '102',
            positionTop: '80',
            zIndex: '1',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component02',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '按钮背景-使用课程',
          src: './assets/images/bt1.png',
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '370',
            zIndex: '2',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component03',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '按钮背景划过样式-使用课程',
          src: './assets/images/bt1_act.png',
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '370',
            zIndex: '3',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component04',

          passCondition: { event: '', state: '', },
          remark: '按钮文字-使用课程',
          textArray: [
            {
              id: '',
              order: '1',
              content: '使用本课程',
              style: {
                color: '#fff',
                fontSize: '20',
                fontStyle: '',
                fontWeight: 'bold',
                lineHeight: '64',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '370',
            zIndex: '4',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component05',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '按钮背景-退出课程',
          src: './assets/images/bt1.png',
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '433',
            zIndex: '5',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component06',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '按钮背景划过样式-退出课程',
          src: './assets/images/bt1_act.png',
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '433',
            zIndex: '6',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component07',

          passCondition: { event: '', state: '', },
          remark: '按钮文字-退出课程',
          textArray: [
            {
              id: '',
              order: '1',
              content: '退出本课程',
              style: {
                color: '#fff',
                fontSize: '20',
                fontStyle: '',
                fontWeight: 'bold',
                lineHeight: '64',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '240',
            height: '64',
            positionLeft: '705',
            positionTop: '433',
            zIndex: '7',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component08',
          type: 'overlay',
          passCondition: { event: '', state: '', },
          remark: '遮罩层',
          style: {
            color: '',
            opacity: '',
            zIndex: '1000',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component09',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '弹窗背景',
          src: './assets/images/bt1_act.png',
          style: {
            width: '420',
            height: '240',
            positionLeft: '300',
            positionTop: '170',
            zIndex: '1001',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component10',

          passCondition: { event: '', state: '', },
          remark: '弹窗标题1',
          textArray: [
            {
              id: '',
              order: '1',
              content: '使用本课程',
              style: {
                color: '#fff',
                fontSize: '20',
                fontStyle: '',
                fontWeight: 'bold',
                lineHeight: '42',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '420',
            height: '42',
            positionLeft: '300',
            positionTop: '170',
            zIndex: '1002',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component11',

          passCondition: { event: '', state: '', },
          remark: '弹窗标题2',
          textArray: [
            {
              id: '',
              order: '1',
              content: '退出本课程',
              style: {
                color: '#fff',
                fontSize: '20',
                fontStyle: '',
                fontWeight: 'bold',
                lineHeight: '42',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '420',
            height: '42',
            positionLeft: '300',
            positionTop: '170',
            zIndex: '1003',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component12',

          passCondition: { event: '', state: '', },
          remark: '弹窗内容1',
          textArray: [
            {
              id: '',
              order: '1',
              content: '浏览本课程两种方式，第一种是使用右下角的向前和向后箭头按钮，' +
              '或者您可以使用左下角的菜单按钮，这种方式能够使您能直接选择某一章节，当您完成某一章节后，圆圈内会显示对号进行标注。',
              style: {
                color: '#000',
                fontSize: '14',
                fontStyle: '',
                fontWeight: '',
                lineHeight: '',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '400',
            height: '150',
            positionLeft: '330',
            positionTop: '234',
            zIndex: '1004',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component13',

          passCondition: { event: '', state: '', },
          remark: '弹窗内容2',
          textArray: [
            {
              id: '',
              order: '1',
              content: '请使用屏幕左下角关闭按钮，关闭课程，返回到培训平台当前帐号主页面。',
              style: {
                color: '#000',
                fontSize: '14',
                fontStyle: '',
                fontWeight: '',
                lineHeight: '',
                textDecoration: '',
                textAlign: '',
              },
            }
          ],
          style: {
            width: '400',
            height: '150',
            positionLeft: '330',
            positionTop: '234',
            zIndex: '1005',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component14',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '弹窗关闭按钮背景',
          src: './assets/images/bt1.png',
          style: {
            width: '130',
            height: '50',
            positionLeft: '600',
            positionTop: '375',
            zIndex: '1006',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component15',
          type: 'image',
          passCondition: { event: '', state: '', },
          remark: '弹窗关闭按钮划过背景',
          src: './assets/images/bt1_act.png',
          style: {
            width: '130',
            height: '50',
            positionLeft: '600',
            positionTop: '375',
            zIndex: '1007',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
        {
          id: 'page01-component16',

          passCondition: { event: '', state: '', },
          remark: '弹窗关闭按钮-文字',
          textArray: [
            {
              id: '',
              order: '1',
              content: '是',
              style: {
                color: '#000',
                fontSize: '14',
                fontStyle: '',
                fontWeight: '',
                lineHeight: '',
                textDecoration: '',
                textAlign: '',
              },
            },
          ],
          style: {
            width: '130',
            height: '50',
            positionLeft: '600',
            positionTop: '375',
            zIndex: '1008',
          },
          animation: {
            animationInID: '',
            animationOnID: '',
            animationOutID: '',
          },
        },
      ],
      publishArray: [
        // 此页响应next与pre相同,
        {
          id: 'publish01',
          componentID: '',

          order: '',
          triggerEvent: '',
          subscribeArray: [
            // 默认响应为out,
            {
              id: 'subscribe0101',
              componentID: 'page01-component01',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0102',
              componentID: 'page01-component02',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0103',
              componentID: 'page01-component03',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0104',
              componentID: 'page01-component04',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0105',
              componentID: 'page01-component05',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0106',
              componentID: 'page01-component06',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0107',
              componentID: 'page01-component07',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0108',
              componentID: 'page01-component08',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0109',
              componentID: 'page01-component09',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0110',
              componentID: 'page01-component10',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0111',
              componentID: 'page01-component11',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0112',
              componentID: 'page01-component12',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0113',
              componentID: 'page01-component13',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0114',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0115',
              componentID: 'page01-component15',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0116',
              componentID: 'page01-component16',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },
        {
          id: 'publish02',
          componentID: '',

          order: '',
          triggerEvent: '',
          subscribeArray: [
            // 默认响应为out,
            {
              id: 'subscribe0101',
              componentID: 'page01-component01',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0202',
              componentID: 'page01-component02',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0203',
              componentID: 'page01-component03',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0204',
              componentID: 'page01-component04',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0205',
              componentID: 'page01-component05',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0206',
              componentID: 'page01-component06',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0207',
              componentID: 'page01-component07',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              id: 'subscribe0208',
              componentID: 'page01-component08',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0209',
              componentID: 'page01-component09',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0210',
              componentID: 'page01-component10',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0211',
              componentID: 'page01-component11',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0212',
              componentID: 'page01-component12',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0213',
              componentID: 'page01-component13',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0214',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0215',
              componentID: 'page01-component15',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              id: 'subscribe0216',
              componentID: 'page01-component16',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },
        // 页面按钮--使用本课程
        {
          id: 'publish03',
          componentID: 'page01-component04',

          order: '',
          triggerEvent: 'mouseover',
          subscribeArray: [
            {
              // 隐藏默认按钮背景,
              id: 'subscribe0301',
              componentID: 'page01-component02',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 展示鼠标划过的按钮背景,
              id: 'subscribe0302',
              componentID: 'page01-component03',
              timeOut: '0',
              responseEvent: 'in',
            },
          ],
        },
        {
          id: 'publish04',
          componentID: 'page01-component04',

          order: '',
          triggerEvent: 'mouseout',
          subscribeArray: [
            {
              // 展示默认按钮背景,
              id: 'subscribe0401',
              componentID: 'page01-component02',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 隐藏鼠标划过的按钮背景,
              id: 'subscribe0402',
              componentID: 'page01-component03',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },
        {
          id: 'publish05',
          componentID: 'page01-component04',

          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗背景
              id: 'subscribe0501',
              componentID: 'page01-component09',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗标题1
              id: 'subscribe0502',
              componentID: 'page01-component10',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗内容1
              id: 'subscribe0503',
              componentID: 'page01-component12',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗关闭按钮背景
              id: 'subscribe0504',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗关闭按钮-文字
              id: 'subscribe0505',
              componentID: 'page01-component16',
              timeOut: '0',
              responseEvent: 'in',
            },
          ],
        },
        // 页面按钮--退出本课程
        {
          id: 'publish06',
          componentID: 'page01-component07',

          order: '',
          triggerEvent: 'mouseover',
          subscribeArray: [
            {
              // 隐藏默认按钮背景,
              id: 'subscribe0601',
              componentID: 'page01-component05',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 展示鼠标划过的按钮背景,
              id: 'subscribe0602',
              componentID: 'page01-component06',
              timeOut: '0',
              responseEvent: 'in',
            },
          ],
        },
        {
          id: 'publish07',
          componentID: 'page01-component07',

          order: '',
          triggerEvent: 'mouseout',
          subscribeArray: [
            {
              // 展示默认按钮背景,
              id: 'subscribe0701',
              componentID: 'page01-component05',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 隐藏鼠标划过的按钮背景,
              id: 'subscribe0702',
              componentID: 'page01-component06',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },
        {
          id: 'publish08',
          componentID: 'page01-component07',

          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗背景
              id: 'subscribe0801',
              componentID: 'page01-component09',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗标题2
              id: 'subscribe0802',
              componentID: 'page01-component11',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗内容2
              id: 'subscribe0803',
              componentID: 'page01-component13',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗关闭按钮背景
              id: 'subscribe0804',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 弹窗关闭按钮-文字
              id: 'subscribe0805',
              componentID: 'page01-component16',
              timeOut: '0',
              responseEvent: 'in',
            },
          ],
        },
        // 弹窗按钮--是
        {
          id: 'publish09',
          componentID: 'page01-component16',

          order: '',
          triggerEvent: 'mouseover',
          subscribeArray: [
            {
              // 隐藏默认按钮背景,
              id: 'subscribe0901',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 展示鼠标划过的按钮背景,
              id: 'subscribe0902',
              componentID: 'page01-component15',
              timeOut: '0',
              responseEvent: 'in',
            },
          ],
        },
        {
          id: 'publish10',
          componentID: 'page01-component16',

          order: '',
          triggerEvent: 'mouseout',
          subscribeArray: [
            {
              // 展示默认按钮背景,
              id: 'subscribe1001',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'in',
            },
            {
              // 隐藏鼠标划过的按钮背景,
              id: 'subscribe1002',
              componentID: 'page01-component15',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },
        {
          id: 'publish11',
          componentID: 'page01-component16',

          order: '',
          triggerEvent: 'click',
          subscribeArray: [
            {
              // 弹窗背景
              id: 'subscribe1101',
              componentID: 'page01-component09',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 弹窗标题2
              id: 'subscribe1102',
              componentID: 'page01-component11',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 弹窗内容2
              id: 'subscribe1103',
              componentID: 'page01-component13',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 弹窗关闭按钮背景
              id: 'subscribe1104',
              componentID: 'page01-component14',
              timeOut: '0',
              responseEvent: 'out',
            },
            {
              // 弹窗关闭按钮-文字
              id: 'subscribe1105',
              componentID: 'page01-component16',
              timeOut: '0',
              responseEvent: 'out',
            },
          ],
        },

      ],
      // 页面动画,暂没此功能
      animation: {
        animationInID: '',
        animationOnID: '',
        animationOutID: '',
      },
      backgroundImageSrc: './assets/images/profile_bg.png',
    },

  ],
};

export {
  Config,
  appConfig,
}

