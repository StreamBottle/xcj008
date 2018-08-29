export const appConfig: {
    chapter: string,
    isChapter: boolean,
    logo?: string,
    pages: any[],
}[] =
    [
        // 按章节定义配置数据
        {
            chapter: '介绍',
            isChapter: false,
            pages: [
                {
                    // 简介页面
                    template: 'profile',
                    img: './assets/images/profile_bg.png',
                },
                {
                    // 目标页面
                    template: 'info',
                    img: './assets/images/info_bg.png',
                    text: '认知荣光V、宝骏310、宝骏730、宏光S1、宝骏560等车型相关技术参数及设计要点。',
                },
            ],
        },
        {
            chapter: '荣光V',
            isChapter: true,
            logo: './assets/images/logo_5ling.png',
            pages: [
                {
                    // 包含多个详细内容的页面
                    template: 'multiple',
                    img: './assets/images/rongguang_bg.png',
                    title: '荣光V',
                    'banner': '多拉快跑 更实用',
                    content: [
                        // 1 上2图,下文字
                        {
                            point: '1',
                            position: {
                                left: '291',
                                top: '345',
                            },
                            animation: 'left',
                            content: {
                                type: 1,
                                img1: './assets/images/rongguang_a_1.png',
                                img2: './assets/images/rongguang_a_2.png',
                                title: '发动机前置后驱',
                                text: [
                                    '前悬尺寸加长到 680mm',
                                    '动力系统结构紧凑，驱动轴短，动力输出损耗低。在布局方面，没有传动轴经过车厢，可以降低车身中间的隆起，增大车厢可用空间。',
                                ],
                            },
                        },
                        // 2 双图,无文字
                        {
                            point: '2',
                            position: {
                                left: '576',
                                top: '270',
                            },
                            animation: 'down',
                            content: {
                                type: 2,
                                img1: './assets/images/rongguang_b_1.png',
                                img2: './assets/images/rongguang_b_2.png',
                            },
                        },
                        // 3 右图,左字
                        {
                            point: '3',
                            position: {
                                left: '604',
                                top: '396',
                            },
                            animation: 'right',
                            content: {
                                type: 3,
                                img1: './assets/images/baojun310_a.png',
                                title: '双U前脸设计',
                                text: [
                                    '宝骏310的前脸设计继承和发扬宝骏品牌风格，前格栅完美调和设计美感与功能需求，' +
                                    '格栅镀铬饰条一直延伸到大灯下沿，简洁锐利，奔腾有力，将宝骏品牌与产品特征尽情释放。',

                                    'U型格栅通过引擎盖外侧力量线延伸至A柱，超小2.4度A柱障碍角有效提升驾驶员视域，提升驾驶安全性。',
                                ],
                            },
                        },
                        // 4 左图,右字
                        {
                            point: '4',
                            position: {
                                left: '455',
                                top: '208',
                            },
                            animation: 'up',
                            content: {
                                type: 4,
                                img1: './assets/images/baojun310_d.png',
                                title: '电动天窗',
                                text: [
                                    '打开遮阳帘，便可以看到宝骏310配备的大视野电动天窗，打开天窗，不仅让车内空间感觉更宽敞，' +
                                    '而且，在行驶途中可以感受大自然的徐徐微风。',

                                    '天窗具备双模式开启方式，满足不同场景应用需求，防夹功能贴心保护所有乘员。',
                                ],
                            },
                        },
                        // 5 双图(左上右下),双字(右上左下)
                        {
                            point: '5',
                            position: {
                                left: '521',
                                top: '265',
                            },
                            animation: 'show',
                            content: {
                                type: 5,
                                img1: './assets/images/baojun310_c_1.png',
                                img2: './assets/images/baojun310_c_2.png',
                                title1: '炫动皮革座椅',
                                title2: '科技品质内饰',
                                text: {
                                    text1: [
                                        '黑色搭配双侧橙色皮座椅，时尚运动风展现得淋漓尽致，更有档次，流畅感、立体感更强，更符合年轻家庭的审美品味。',
                                    ],
                                    text2: [
                                        '中控台飞鸟灵动设计、搭配水转印木纹饰板、黑亮钢琴烤漆，六边形镀铬饰圈自发光组合仪表；',
                                        '内部软皮革包覆的门封板、中央扶手盒；无不体现宝骏310 对内饰设计及品质的用心诠释。',
                                    ],
                                },
                            },
                        },
                        // 6 单图
                        {
                            point: '6',
                            position: {
                                left: '599',
                                top: '288',
                            },
                            animation: 'down',
                            content: {
                                type: 6,
                                img1: './assets/images/baojun310_2_a.png',
                            },
                        },
                        // 7 定速巡航
                        {
                            point: '7',
                            position: {
                                left: '573',
                                top: '255',
                            },
                            animation: 'down',
                            content: {
                                type: 7,
                                animation: 'baojun310',
                                // images: {
                                //     bg: './assets/images/baojun310_2_b-bg.jpg',
                                //     car: './assets/images/baojun310_2_b-car.png',
                                //     pan: './assets/images/baojun310_2_b-pan.png',
                                //     zhen: './assets/images/baojun310_2_b-zhen.png',
                                // },
                                title: '多功能方向盘+定速巡航',
                                text: [
                                    '宝骏310配备了定速巡航系统，让您在长途驾驶时可以解放您的右脚，驾驶更轻松。',
                                    '由ECU控制您的车速，让您的油耗更加节省，避免大脚油门产生的燃油浪费，' +
                                    '而且，高速行驶时还能避免超速现象的发生，让您的行驶更安全，节省不必要的开支。',
                                ],
                            },
                            // img: './assets/images/baojun310_2_b.png',
                        },
                        // 8 轮播图
                        {
                            point: '8',
                            position: {
                                left: '277',
                                top: '300',
                            },
                            content: {
                                type: 8,
                                images: [
                                    './assets/images/baojun310_2_f-1.jpg',
                                    './assets/images/baojun310_2_f-2.jpg',
                                    './assets/images/baojun310_2_f-3.jpg',
                                    './assets/images/baojun310_2_f-4.jpg',
                                ],
                                title: '250-1000L多变后备箱空间',
                                text: [
                                    '在后排座椅正常使用的情况下，宝骏310后备箱容积达到250L，若将座椅放倒，纯平空间' +
                                    '可扩充至1000L，满足不同消费者储物需求。',

                                ],
                            },
                            img: './assets/images/baojun310_2_f.png',
                        },
                        // 9 上1图,下文字
                        {
                            point: '9',
                            position: {
                                left: '456',
                                top: '260',
                            },
                            content: {
                                type: 9,
                                img1: './assets/images/bj730_bg_b.png',
                                title: '高品质内饰&超级配置',
                                text: [
                                    '飞翼式中控台搭配全彩液晶组合仪表高端气质四射，双色皮革座椅充满温馨的色彩。',
                                    '8英寸娱乐系统，自动恒温空调，娱乐设备满足出行之乐，同时拥有舒适室内享受； 无钥匙进入+一键启动系统，方便快捷。',
                                ],
                            },
                        },
                        // 10 jingyin
                        {
                            point: '10',
                            position: {
                                left: '650',
                                top: '362',
                            },
                            content: {
                                type: 10,
                                images: {
                                    bg: './assets/images/hongguang_s1_i-bg.jpg',
                                    car: './assets/images/pic_hvn.png',
                                    pan: './assets/images/hongguang_s1_i-pan.png',
                                    zhen: './assets/images/hongguang_s1_i-zhen.png',
                                },
                                title: '全方位降噪优化，车门双密封胶条(宏光S1)',
                                text: [
                                    '宏光S1的车身尺寸更长、更宽，不但行驶稳定性更好，而且空间更大，乘坐更宽敞舒适；视野更开阔，更方便地沿途欣赏风景。',
                                ],
                            },
                        },
                    ],
                },
                {
                    // 图表类型的页面
                    template: 'chart',
                    img: './assets/images/rongguang_table.png',
                },
                {
                    template: 'target',
                    img: './assets/images/bg.png.png',
                    line: true,
                    pointStyle: 'point',
                    order: true,
                    content: [
                        {
                            point: '1',
                            pointStyle: 'mail',
                            animation: 'right',
                            tip: 'tip',
                            position: {
                                left: '110',
                                top: '150',
                                wbleft: '-10',
                                wbtop: '20',
                            },
                            style: {
                                width: '240px',
                            },
                            content: {
                                text: [
                                    '检查立柱内侧滑块运动是否正确,必要时补充润滑脂',
                                ],
                            },
                        },
                        {
                            point: '2',
                            position: {
                                left: '191',
                                top: '245',
                                wbleft: '410',
                                wbtop: '300',
                            },
                            style: {
                                width: '200px',
                            },
                            content: {
                                text: [
                                    '检查液压系统是否出现磨损、渗漏情况',
                                ],
                            },
                        },
                        {
                            point: '3',
                            position: {
                                left: '391',
                                top: '345',
                                wbleft: '250',
                                wbtop: '380',
                            },
                            style: {
                                width: '110px',
                            },
                            content: {
                                text: [
                                    '正反转按钮',
                                ],
                            },
                        },
                        {
                            point: '4',
                            position: {
                                left: '300',
                                top: '290',
                                wbleft: '380',
                                wbtop: '180',
                            },
                            style: {
                                width: '90px',
                            },
                            content: {
                                text: [
                                    '121212121212121212',
                                ],
                            },
                        },
                        {
                            point: '5',
                            position: {
                                left: '350',
                                top: '320',
                                wbleft: '500',
                                wbtop: '250',
                            },
                            style: {
                                width: '40px',
                                height: '40px',
                                'border-width': '0',
                                background: '#fff',
                            },
                            content: {
                                img: './assets/images/logo_5ling.png',
                            },
                        },
                    ]
                },
                {
                    // 目标页面
                    template: 'fjzinfo',
                    img: './assets/images/info_bg.png',
                    targetList: ['认知转向系统部件组成', '识别常见悬挂类型与优缺点', '认知减震器结构及工作原理', '能够对悬挂故障有基本诊断思路'],
                    targetText: '本课程旨在帮助大家认识转向与悬挂的基本结构与功能作用。',
                },
                {
                    // 上文字  下图
                    template: 'fjz_hc_mi',
                    content: {
                        // 内容头部数据
                        head: {
                            // 控制内容头部的样式 可以控制头部div的样式
                            style: {
                                'height': '100px'
                            },
                            // 头部内容标题
                            title: '转向系统作用',
                            // 标题下面的内容块 可以是多个
                            p_contents: {
                                // 具体某一个大段落段落
                                p_content: [
                                    {
                                        // 组成段落的小部分 如颜色字体大小等
                                        style: { 'display': 'block' },
                                        content: '转向系统的方向盘与车轮通过杆系连接在一起，使司机能控制汽车的方向。'
                                    },

                                ],
                            },
                        },
                        imgs: {
                            // 图片路径
                            img: './assets/images/2.png',
                            // 图片顶部文字以及样式
                            top: {
                                // 图片顶部文字样式
                                style: '',
                                // 文字内容
                                content: ''
                            },
                            // 图片底部文字以及样式
                            bottom: {
                                // 图片底部文字样式
                                style: {
                                    'color': '#AE0000',
                                    'font-size': '18px',
                                    'font-weight': 'bold'
                                },
                                // 文字内容
                                content: '1 钢轮辋'
                            }
                        },
                    }
                },
                {
                    // 上文字  下多图
                    template: 'fjz-hc-mis',
                    content: {
                        head: {
                            title: '轮辋的形式',
                            p_contents: {
                                p_content: [

                                    {
                                        content: '钢制轮辋采用钢板冲压轮盘铆接或焊接而成。铝轮辋比钢轮辋重量轻，而且有多种型式。'
                                    },

                                ],
                            },
                        },
                        imgs: [
                            {
                                img: './assets/images/6.png',
                                top: {},
                                bottom: {
                                    style: {
                                        'color': '#AE0000',
                                        'font-size': '18px',
                                        'font-weight': 'bold'
                                    }, content: '1 钢轮辋'
                                }
                            },
                            {
                                img: './assets/images/7.png',
                                top: {},
                                bottom: {
                                    style: {
                                        'color': '#AE0000',
                                        'font-size': '18px',
                                        'font-weight': 'bold'
                                    },
                                    content: '2 带车轮盖的钢轮辋'
                                }
                            },
                            {
                                img: './assets/images/8.png',
                                top: {},
                                bottom: {
                                    style: {
                                        'color': '#AE0000',
                                        'font-size': '18px',
                                        'font-weight': 'bold'
                                    },
                                    content: '3 铝轮辋'
                                }
                            },
                        ],
                    }


                },
                {
                    // 上文字  中图片  下文字
                    template: 'fjz_hc_mis_bc',
                    content: {
                        head: {
                            title: '轮辋尺寸',
                            p_contents: {
                                p_content: [
                                    {
                                        style: {},
                                        content: '如果需更换车轮，换装车轮的容许'
                                    },
                                    {
                                        style: { 'font-weight': 'bold' },
                                        content: '载荷、直径、宽度、偏距'
                                    },
                                    {
                                        style: {},
                                        content: '与'
                                    },
                                    {
                                        style: { 'font-weight': 'bold' },
                                        content: '固定型式'
                                    },
                                    {
                                        style: {},
                                        content: '均必须与原装车轮相同；不正确的换装车轮会影响车轮寿命、离地间隙和轮胎间隙，以及车速里程表的标定。'
                                    },

                                ]
                            },
                        },
                        imgs: [
                            {
                                img: './assets/images/16-1.png',
                                top: {
                                    style: {},
                                    content: ''
                                },
                                bottom: {
                                    style: {},
                                    content: ''
                                }
                            },
                            {
                                img: './assets/images/16-2.png',
                                top: {
                                    style: {},
                                    content: ''
                                },
                                bottom: {
                                    style: {},
                                    content: ''
                                }
                            },
                        ],
                        p_contents: {
                            p_content: [
                                {
                                    style: {
                                        'font-weight': 'bold',
                                        'font-size': '14px',
                                        'color': 'black'
                                    },
                                    content: '车轮偏距:'
                                },
                                {
                                    style: {},
                                    content: `是轮辋中心线与轮盘安全面之间的距离。轮辋中心线在安装面内侧时偏距为正，
                                    反之为负；改变车轮偏距会影响前悬架的负荷与车轮定位。`
                                }
                            ],

                        }
                    }
                },
                {
                    // 左文字  右图片
                    template: 'fjz_lc_ri',
                    content: {
                        left: [
                            {
                                title: [
                                    {
                                        style: { 'color': 'black', 'display': 'inline-block' },
                                        content: '轮胎'
                                    }
                                ],
                                smallTitle: [
                                ],
                                p_contents: [
                                    {
                                        style: {
                                            'color': 'black',
                                            'display': 'block',
                                            'margin-bottom': '20px'
                                        },
                                        content: `轮胎基本结构：胎体由粘合为一体的多层浸渍橡胶的绳线（称为胎体层）组成；
                                        胎体层决定轮胎的强度、汽车的操纵性、平顺性以及抗疲劳、热和擦伤的能力。`
                                    },
                                    {
                                        style: {
                                            'color': 'black',
                                            'display': 'block',
                                            'margin-bottom': '20px'
                                        },
                                        content: '趾口是轮胎与轮辋接触的部分；提供轮辋与轮胎之间的气密密封。'
                                    },
                                    {
                                        style: {
                                            'color': 'black',
                                            'display': 'block',
                                            'margin-bottom': '20px'
                                        },
                                        content: `胎冠是轮胎与路面接触的部位；胎冠上设有花纹，花纹不仅为轮胎提供了附着力，
                                        还提供了排除路面与轮胎之间积水的通道。`
                                    },
                                    {
                                        style: {
                                            'color': 'black',
                                            'display': 'block',
                                            'margin-bottom': '20px'
                                        },
                                        content: `为了适应特定的路况，开发出了各种不同的胎面花纹，比如泥地型、雪地型及全天候型等。
                                        有的轮胎胎面上设有小切口，叫作刀槽花纹，当轮胎在路面上挠曲变形时，刀槽花纹会张开，使胎面具有更好的附着性。`
                                    },
                                    {
                                        style: {
                                            'color': 'black',
                                            'display': 'block',
                                            'margin-bottom': '20px'
                                        },
                                        content: '胎侧是轮胎的侧壁。胎侧的胶层较薄以便具有更大的柔性。'
                                    },
                                ],
                            }
                        ],
                        imgs: {
                            // 图片路径
                            img: './assets/images/12.png',
                            // 图片顶部文字以及样式
                            top: {
                                style: '',
                                content: ''
                            },
                            // 图片底部文字以及样式
                            bottom: {
                                style: {},
                                content: ''
                            }
                        },
                    }
                },
                {
                    // 上文字  中图片  下文字
                    template: 'fjz_hc_mis_bsc',
                    content: {
                        head: {
                            title: '轮胎磨损标记',
                            style: {
                                'height': '40px'
                            },
                            p_contents: {
                            },
                        },
                        imgs: [
                            {
                                img: './assets/images/24.png',
                                top: {
                                    style: {
                                    },
                                    content: ''
                                },
                                bottom: { style: {}, content: '' }
                            }
                        ],
                        p_contents: {
                            p_content: [

                                {
                                    style: { 'font-weight': 'bold', 'color': 'black' },
                                    content: '轮胎磨耗标记：指示胎面已经磨损到必须更换，否则抓地性能将下降，尤其是湿滑路面'
                                }
                            ]

                        }
                    }
                },
            ],
        },

        // 宝骏310
        {
            chapter: '宝骏310',
            isChapter: true,
            logo: './assets/images/logo_baojun.png',
            pages: [
                {
                    template: 'video',
                    title: ' ',
                    text: ' ',
                    img: './assets/images/baojun310.png',
                    video: './assets/videos/baojun310.mp4',
                },


            ],
        },

        // 宝骏730
        {
            chapter: '宝骏730',
            isChapter: true,
            logo: './assets/images/logo_baojun.png',
            pages: [
                {
                    // 包含多个详细内容的页面
                    template: 'multiple',
                    img: './assets/images/bj730_bg.png',
                    title: '全新宝骏730',
                    'banner': '为每一代家庭七座车出尽全力',
                    content: [
                        {
                            point: '',
                            pointStyle: 'mail',
                            position: {
                                left: '283',
                                top: '332',
                            },
                            content: {
                                // 右图,左字
                                type: 3,
                                img1: './assets/images/bj730_bg_a.png',
                                title: '动感流线外观',
                                text: [
                                    '方形双透镜LED前大灯时尚迷人，灵动腰线动感味道十足，横拉式全LED尾灯更显大气。',
                                ],
                            },
                        },
                        {
                            point: '',
                            pointStyle: 'box',
                            position: {
                                left: '497',
                                top: '326',
                            },
                            content: {
                                // 单图
                                type: 6,
                                img1: './assets/images/bj730_bg_d.png',
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '590',
                                top: '316',
                            },
                            content: {
                                type: 4,
                                img1: './assets/images/bj730_bg_e.png',
                                title: '变速箱',
                                text: [
                                    '配备6速手动变速箱，传动比更加细腻。',
                                    '高配车辆配备智能手动档变速箱： •方便操作 •有效减少车身的振动 • 成本低 • 燃油经济性好•' +
                                    '动力传输直接• 维修方便。',
                                ],
                            },
                        },

                    ],
                },
                {
                    // 图表类型的页面
                    template: 'chart',
                    img: './assets/images/bj730_table.png',
                },
            ],
        },

        // 五菱宏光S1
        {
            chapter: '五菱宏光S1',
            isChapter: true,
            logo: './assets/images/logo_5ling.png',
            pages: [
                {
                    // 包含多个详细内容的页面
                    template: 'multiple',
                    img: './assets/images/hongguang_s1.png',
                    title: '五菱宏光S1',
                    'banner': '更好的驾乘体验',
                    content: [
                        {
                            point: '',
                            position: {
                                left: '438',
                                top: '392',
                            },
                            content: {
                                type: 4,
                                img1: './assets/images/hongguang_s1_a.png',
                                title: 'LED 日间行车灯+LED 后雾灯(宏光S1尊享型)',
                                text: [
                                    '配备高亮度的LED日间行车灯和LED后雾灯，非常漂亮、醒目，和很多中高级轿车、SUV车的设计完全一致，很有档次感。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '539',
                                top: '408',
                            },
                            content: {
                                type: 4,
                                img1: './assets/images/hongguang_s1_b.png',
                                title: '套色精车铝合金轮辋前后护板和底部护板(宏光S1尊享型)',
                                text: [
                                    '宝骏560同款旋风式铝轮辋，颜值极高，高光亮面配以亚光凹槽，突显出极强时尚感、档次感。' +
                                    '底部护板可防止飞石和沙砾的撞击，避免潮气、酸雨、盐分对车辆底盘金属的侵蚀，防止底盘生锈和锈蚀，保护车主的行车安全。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '622',
                                top: '300',
                            },
                            content: {
                                type: 4,
                                img1: './assets/images/hongguang_s1_c.png',
                                title: '车身加大门、窗面积加大(宏光S1)',
                                text: [
                                    '宏光S1的车身尺寸更长、更宽，不但行驶稳定性更好，而且空间更大，乘坐更宽敞舒适；视野更开阔，更方便地沿途欣赏风景。',
                                ],
                            },
                        },

                        {
                            point: '',
                            position: {
                                left: '709',
                                top: '399',
                            },
                            content: {
                                // 双图(左上右下),双字(右上左下)
                                type: 5,
                                img1: './assets/images/hongguang_s1_e_1.png',
                                img2: './assets/images/hongguang_s1_e_2.png',
                                title1: '尊享型四轮盘刹(宏光S1尊享型)',
                                title2: '胎压监测(宏光S1)',
                                text: {
                                    text1: [
                                        '利用刹车油泵产生的压力，带动刹车卡钳挤压刹车盘产生制动力。主要特点是热衰减比较小、刹车灵敏，' +
                                        '配合ABS系统能有效防止车轮抱死，刹车力量强劲。',
                                    ],
                                    text2: [
                                        '在汽车行驶过程中对轮胎气压进行实时自动监测，并对轮胎漏气和低气压进行报警，以确保行车安全。',
                                    ],
                                },
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '602',
                                top: '244',
                            },
                            content: {
                                type: 3,
                                img1: './assets/images/hongguang_s1_f.png',
                                title: '外后视镜电加热(宏光S1)',
                                text: [
                                    '配备了电加热外后视镜，雨雪天可方便快捷的祛除外后视镜上附着的水滴，确保后视镜清晰，看得更清楚，提升安全性。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '356',
                                top: '374',
                            },
                            content: {
                                // 单图
                                type: 6,
                                img1: './assets/images/hongguang_s1_g.png',
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '324',
                                top: '284',
                            },
                            content: {
                                type: 3,
                                img1: './assets/images/hongguang_s1_h.png',
                                title: '发动机防盗系统(宏光S1)',
                                text: [
                                    '宏光S1标配电子防盗和发动机防盗系统，防盗性能更好，减少了用车的后顾之忧。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '498',
                                top: '239',
                            },
                            content: {
                                // 定速巡航
                                type: 7,
                                animation: 'hongguangS1',
                                // images: {
                                //     bg: './assets/images/hongguang_s1_i-bg.jpg',
                                //     car: './assets/images/hongguang_s1_i-car.png',
                                //     pan: './assets/images/hongguang_s1_i-pan.png',
                                //     zhen: './assets/images/hongguang_s1_i-zhen.png',
                                // },
                                title: '定速巡航(宏光S1)',
                                text: [
                                    '配备了定速巡航系统，高速行驶时不用一直踩着油门踏板，大大的减轻用户长途开车的疲劳感。' +
                                    '同时还减少了不必要的车速变化，进一步节省燃油。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '670',
                                top: '261',
                            },
                            content: {
                                type: 4,
                                img1: './assets/images/hongguang_s1_j_1.jpg',
                                img2: './assets/images/hongguang_s1_j_2.png',
                                title: '后排座椅靠背6/4分 25处车内储物空间',
                                text: [
                                    '宏光S1的6/4分座椅，整体式座椅更灵活、更实用。更好兼顾人员乘坐，放工具、放东西等多样化的使用需求。',
                                    '宏光S1的储物空间多达25处，日常用车时，放置水杯、票据、手机等小物品更方便实用，置物更便利。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '734',
                                top: '306',
                            },
                            content: {
                                type: 4,
                                img1: './assets/images/hongguang_s1_k.png',
                                title: '尾门电子按钮开启(宏光S1)',
                                text: [
                                    '不需要用力掰开，轻轻一按就可以，装卸更省力。',
                                ],
                            },
                        },
                    ],
                },
                {
                    // 图表类型的页面
                    template: 'chart',
                    img: './assets/images/hongguang_s1_table.png',
                },
            ],
        },
        {
            chapter: '宝骏560',
            isChapter: true,
            logo: './assets/images/logo_baojun.png',
            pages: [
                {
                    template: 'video',
                    title: ' ',
                    text: ' ',
                    img: './assets/images/baojun560_bg.png',
                    video: './assets/videos/baojun560.mp4',
                },
                {
                    template: 'multiple',
                    img: './assets/images/baojun560_bg.png',
                    title: '',
                    'banner': ' ',
                    content: [
                        {
                            point: '',
                            position: {
                                left: '558',
                                top: '233',
                            },
                            content: {
                                // 右图,左字
                                type: 3,
                                img1: './assets/images/baojun560_a.png',
                                title: '顶级视听，豪华尽显',
                                text: [
                                    '量身定制9扬声器Infinity®品牌音响，卓越的音色还原，顶级的视听享受，同级别无出其右的豪华尊享。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '774',
                                top: '378',
                            },
                            content: {
                                // 轮播图
                                type: 8,
                                images: [
                                    './assets/images/baojun560_b-1.jpg',
                                    './assets/images/baojun560_b-2.jpg',
                                    './assets/images/baojun560_b-3.jpg',
                                    './assets/images/baojun560_b-4.jpg',
                                ],
                                title: '品质提升，内外兼修',
                                text: [
                                    '大气饱满的新前脸设计，优化全LED后尾灯 组，外观更大气，细节更精致；',
                                    '全新设计的“曲线式”中央扶手区域，优化 主副驾驶的座椅造型，黑棕撞色真皮打孔面料，造型优雅，质感升级，内饰氛围更豪华。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '590',
                                top: '183',
                            },
                            content: {
                                // 左图,右字
                                type: 4,
                                img1: './assets/images/baojun560_c.png',
                                title: '全景天窗，尊享体验',
                                text: [
                                    '可分段式开启的全景天窗，加强人、车、自然的沟通感，畅享驾驶新风尚。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '686',
                                top: '318',
                            },
                            content: {
                                // 左图,右字
                                type: 4,
                                img1: './assets/images/baojun560_d.png',
                                title: '卓越性能，动若脱兔',
                                text: [
                                    '采用国际知名供应商霍尼韦尔低惯量高效涡轮增压器，充分利用热-机动能转换，提高进气效率，' +
                                    '保证良好的响应特性，并最大限度的减缓涡轮迟滞现象。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '463',
                                top: '445',
                            },
                            content: {
                                // 左图,右字
                                type: 4,
                                img1: './assets/images/baojun560_e.png',
                                title: '卓越隔音，心静思远',
                                text: [
                                    '采用3M最新隔音工程方案，继续强化NVH的提升静音效果再升级，引入自动恒温空调，' +
                                    '增加副驾驶座椅电动调节功能，长途出行，舒适舒心。',
                                    '德国马牌轮胎，目前国内市场中高端轮胎品牌之一。具有卓越的干湿地性能、刹车性能，舒适静音并且非常耐磨。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '706',
                                top: '262',
                            },
                            content: {
                                // 上2图,下文字
                                type: 1,
                                img1: './assets/images/baojun560_f_1.png',
                                img2: './assets/images/baojun560_f_2.png',
                                title: '五星安全，可靠防护',
                                text: [
                                    '高刚性车身设计，C-NCAP五星安全评定，新增侧向安全气帘，6安全气囊为全家人出行保驾护航。',
                                    '配备ESC车身电子稳定系统，可以使车辆在各种状况下保持最佳的稳定性。各个传感器探测和分析车况，' +
                                    '并及时发出纠偏指令，来帮助车辆维持动态平衡，纠正危险驾驶，防患于未然。',
                                ],
                            },

                        },
                        {
                            point: '',
                            position: {
                                left: '636',
                                top: '265',
                            },
                            content: {
                                // 左图,右字
                                type: 4,
                                img1: './assets/images/baojun560_g.png',
                                title: '全景影像，全方位安全',
                                text: [
                                    '智能化360°全景影像，提供四方位实时景象呈现，让行车更安全，泊车更从容。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '361',
                                top: '369',
                            },
                            content: {
                                // 左图,右字
                                type: 4,
                                img1: './assets/images/baojun560_h.png',
                                title: '双横臂式后独立悬挂的结构',
                                text: [
                                    '独立悬挂能提高车辆在转弯或不平路面的轮胎与地面的摩擦抓地力，提高车辆的安全性能同时提高乘坐的舒适性。',
                                ],
                            },
                        },
                        {
                            point: '',
                            position: {
                                left: '357',
                                top: '453',
                            },
                            content: {
                                // 左图,右字
                                type: 4,
                                img1: './assets/images/baojun560_i.png',
                                title: 'EPB电子手刹，安全锁定',
                                text: [
                                    '采用天合先进的EPB电子手刹系统，附带Autohold自动驻车功能，驻车安全，坡起稳健，避免车辆不必要的滑行。',
                                ],
                            },
                        },
                    ],
                },
                {
                    // 图表类型的页面
                    template: 'chart',
                    img: './assets/images/baojun560_table.png',
                },
            ],
        },
        {
            chapter: '结束',
            isChapter: false,
            pages: [
                {
                    template: 'single',
                    title: '所有内容已经学习完成，您可以开始课后测试',
                    text: '请在[课后测试]页面完成本课程测试',
                    img: './assets/images/profile_bg.png',
                },
            ],
        },
    ];
