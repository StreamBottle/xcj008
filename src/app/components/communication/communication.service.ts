import { Injectable } from '@angular/core';
import { HandleErrorService } from '../handle_error';
import { AppService } from '../../index/app.service';
import { Communication } from './communication';

/**
 * 代理通信的服务
 * @export
 * @class CommunicationService
 */
@Injectable()
export class CommunicationService {

    // 初始化通信业务实例时,注入处理错误的服务
    communication = new Communication(this.handleErrorService, this.appService);
    constructor(
        private handleErrorService: HandleErrorService,
        private appService: AppService,
    ) { }
    /**
     * 调用实例的初始化方法
     */
    init() {
        this.communication.init();
        // 非正常退出课程时,调用退出方法
        window.onbeforeunload = () => {
            this.communication.commit('exit');
        };
    };

    /**
     * 统一的动作入口
     * @param id 动作id /value对象的id
     * @param flag 故障是否修复
     * @param sub 是否扣分
     * @param value value对象要赋予的值
     */
    setAction({
        id,
        flag,
        sub,
        value,
    }: {
            id: string;
            flag?: any;
            sub?: any;
            value?: string;
        }): void {
        if (value === undefined) {
            // 出发动作
            // this.communication.setHandle(id, flag, sub);
        } else {
            // 触发数组对象变更数值
            // this.communication.setCondition(id, value, flag);
        }
    }

    /**
     * 提交数据
     * @param mode 判断提交和退出的标识
     */
    commit(mode) {
        this.communication.commit(mode);
    };
    /**
     * 设置进度点
     * @param id 进度点id
     */
    setProgress(id, allChapter) {
        this.communication.setProgress(id, allChapter);
    };

    /**
     * 答题
     * @param id 题目id
     * @param optionId 选项id
     */
    setQuestion(id, optionId) {
        this.communication.setQuestion(id, optionId);
    };
}
