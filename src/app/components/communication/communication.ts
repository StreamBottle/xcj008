// declare let $,   ProgressArray: any, Paper: any, HandleArray: any;
import { HandleErrorService } from '../handle_error';
import { AppService } from '../../index/app.service';

import { Adapter } from './adapter';
import {
    ProgressArray,
    Paper,
    HandleArray,
} from './dataObject';

declare let $;
/**
 * 通信类
 * @class Communication
 */
export class Communication {
    faultType = '';
    questionOrder = [];
    seconds = 0;
    result = false;
    adapter: any;                            // 通信对象实例
    progressArray: any;                      // 进度点集合
    paper: any;                              // 试题、得分点集合
    handleArray: any;                        // 操作记录、动作标集合
    isAuto = true;                           // 是否自动提交
    isAutoSeconds = '120000';                   // 自动提交间隔时间
    clock: number;
    /**
     * 初始化各个实例，并调用实例的初始化方法
     */
    constructor(
        private handleErrorService: HandleErrorService,
        private appService: AppService,
    ) { }
    init() {
        this.adapter = new Adapter(this.handleErrorService, this.appService);
        this.progressArray = new ProgressArray();
        this.paper = new Paper();
        this.handleArray = new HandleArray();

        this.adapter.init();
        let dtd = $.Deferred();

        dtd.promise(this.adapter.getStudyTs);
        this.adapter.getStudyTs.done(() => {
            // this.group.getStudentList();
            // this.group.getGroupList();
            // this.group.getEvaluationList();
            this.adapter.startStudy();
        });

        this.adapter.getStudyTs(dtd);

        this.faultType = this.adapter.faultNumber || 'SBT_VER_ES_ST_001_FAULT';
        this.clock = new Date().getTime();
        if (this.isAuto) {
            setInterval(() => {
                this.commit('commit');
            }, this.isAutoSeconds);
        }
    };

    /**
     * 提交数据
     * @param mode 判断提交和退出的标识
     */
    commit(mode) {
        this.seconds = Math.round((new Date().getTime() - this.clock) / 1000);
        if (this.seconds > 150) {

        }
        this.adapter.seconds += this.seconds;
        if (mode === 'commit') {
            this.adapter.commitStudy(this.progressArray, this.paper, this.handleArray);
        } else if (mode === 'exit') {

            this.adapter.exitStudy(this.progressArray, this.paper, this.handleArray);
        }
        this.seconds = 0;
        this.clock = new Date().getTime();
    };
    /**
     * 设置进度点
     * @param id 进度点id
     */
    setProgress(id, allChapter) {
        if (id) {
            this.adapter.characterA.progress.push(id);
        }
        this.adapter.characterA.progress = Array.from(new Set(this.adapter.characterA.progress));
        let currentPercent = (this.adapter.characterA.progress.length / allChapter) * 100;

        this.adapter.progress = Number(parseInt(String(currentPercent), 10));
        console.log(this.adapter.characterA.progress.length, allChapter, this.adapter.progress);


    };

    /**
     * 答题
     * @param id 题目id
     * @param optionId 选项id
     */
    setQuestion(id, optionId) {

        this.paper.setQuestion(id, optionId);
    };

    /**
     * 出发动作
     * @param id 动作id
     * @param flag 故障是否修复
     * @param sub 是否扣分
     */
    setHandle(id, flag, sub) {
        if (this.adapter) {
            let time = this.seconds * 1000 + this.adapter.serverTime;
            this.handleArray.setHandle(id, this.progressArray, this.paper, time, flag, sub);
        }
    };

    /**
     * 触发数组对象变更数值
     * @param id value对象的id
     * @param value value对象要赋予的值
     * @param flag 故障是否修复
     */
    setCondition(id, value, flag) {

        let hid = this.handleArray.setCondition(id, value);

        this.setHandle(hid, flag, null);
    }

}

// export var communication = new Communication;
