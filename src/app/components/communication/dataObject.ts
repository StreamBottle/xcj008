/**
 * @author  谢国亮
 * @update  bingur
 * 定义对平台数据处理方法
 */

import { totalScore } from './adapter';
import { XMap as xMap } from './map';
class ProgressArray {
    progressMap;
    rate;
    progressStr;
    isUpdate;
    constructor() {
        this.progressMap = new xMap();                  // 进度点点对象集合
        this.rate = 0;                                 // array中所有isPass为true的rate之和
        this.progressStr = [];                         // array中所有isPass为true的id
        this.isUpdate = false;                         // 是否更新
        // console.log('progre',Map);
    }

    /**
     *
     * 更新progressStr
     */
    sumProgressStr() {
        let progressArray = [];
        if (this.isUpdate) {
            let progressObject = function (id) {
                this.id = id;
            };
            this.progressMap.eachMap(function (key, value) {
                if (value.isPass) {
                    progressArray.push(new progressObject(value.id));
                }
            });
            if (progressArray.length !== 0) {
                this.progressStr = progressArray;
            }
            this.isUpdate = false;
        }
    };

    /**
     *
     * 进度点汇总方法
     */
    sumRate() {
        let sum = 0, allRate = 0;
        this.progressMap.eachMap(function (key, value) {
            if (value.isPass) {
                sum += parseFloat(value.rate);
                // console.log('做了的',value);
            }
            // console.log(sum);
            allRate += parseFloat(value.rate);
            // console.log('所有的',value);
            // console.log('allRate-'+allRate);
        });
        this.rate = (sum / allRate * 100).toFixed(2);
        // console.log(sum+'+++++++++='+allRate)
        // console.log(' this.rate--'+ this.rate)
    };

    /**
     *
     * 触发进度点
     * @param progressID
     */
    setProgress(progressID) {
        // console.log(progressID)
        if (this.progressMap.find(progressID)) {
            this.progressMap.get(progressID).isPass = true;
            this.isUpdate = true;
        }
    };





};

/**
 *
 * 定义进度基本数据对象
 * @param id
 * @param rate
 * @constructor
 */
class ProgressObject {
    id;
    rate;
    isPass;
    handleArray;
    constructor(id, rate) {
        this.id = id;                                     // 进度点编号
        this.rate = rate;                                 // 所占比例
        this.isPass = false;                              // 该进度点是否通过
        this.handleArray = [];                            // 关联动作项集合
    }




};




/**
 *
 * 定义试题数据对象paper
 * @constructor
 */
class Paper {
    scoreMap;
    questionArray;
    exclusiveArray;
    rate;
    scoresStr;
    isUpdate;
    constructor() {
        this.scoreMap = new xMap();                        // 得分点对象集合
        this.questionArray = [];                          // 试题对象集合
        this.exclusiveArray = [];                         // 互斥得分项集合
        this.rate = 0;                                    // 得分
        this.scoresStr = [];                              // scoreArray数组转换的json
        this.isUpdate = true;                            // scoresStr是否已更新
    }


    /**
     *  计算rate
     */

    sumRate() {
        let sumRate = 0, score: any = 0, flag = false;
        this.scoreMap.eachMap(function (key, value) {
            if (value.rate !== '-5') {
                sumRate += Number(value.rate);
            }
        });
        this.scoreMap.eachMap(function (key, value) {
            if (value.isRight && value.rate !== '-5') {

                score += parseFloat(value.rate / sumRate + '') * totalScore;
            }
            if (value.isRight && value.rate === '-5') {
                flag = true;
            } else {
                flag = false;
            }

        });
        if (flag) {
            score = score.toFixed(2) - 5;
        }
        this.rate = score.toFixed(2);
        // console.log('this.rate++++'+this.rate<0);
        this.rate = this.rate < 0 ? 0 : this.rate;
        // console.log('sumRate---'+sumRate);
        // console.log('得分---****'+this.rate);
        // 计算互斥得分项有没有同时得分,如果有，在rate中扣除优先级较低的得分项比例；
        if (this.exclusiveArray.length) {
            let priorityId, flag = true;
            for (let i = 0; i < this.exclusiveArray.length; i++) {
                for (let j = 0; j < this.exclusiveArray[i].idArray.length; j++) {
                    if (!this.scoreMap.get(this.exclusiveArray[i].idArray[j]).isRight) {
                        flag = false;
                    }
                }
                if (flag) {
                    for (let k = 0; k < this.exclusiveArray[i].idArray.length; k++) {
                        this.rate - this.scoreMap.get(this.exclusiveArray[i].idArray[k]).rate;
                    }
                }
            }
        }
        this.rate < 0 ? this.rate = 0 : null;
    };

    /**
     * 更新scoresStr
     */
    sumScoresStr() {
        let scoreArray = [];
        if (this.isUpdate) {
            let scoreObject = function (id, isRight, questionID, optionArray, handleArray) {
                this.id = id;
                this.isRight = Number(isRight);
                this.questionID = questionID;
                this.optionArray = [];
                this.handleArray = [];
                if (optionArray.length) {
                    for (let i = 0; i < optionArray.length; i++) {
                        let obj: any = {};
                        obj.id = optionArray[i].id;
                        obj.optionArray = [];
                        if (optionArray[i].optionArray.length) {
                            for (let k = 0; k < optionArray[i].optionArray.length; k++) {
                                obj.optionArray.push(optionArray[i].optionArray[k].id);
                            }
                        }
                        this.optionArray.push(obj);
                    }
                }
                if (handleArray.length) {
                    for (let j = 0; j < handleArray.length; j++) {
                        let obj: any = {};
                        obj.id = handleArray[j].id;
                        obj.isAction = Number(handleArray[j].isAction);
                        this.handleArray.push(obj);
                    }
                }

            };
            this.scoreMap.eachMap(function (key, value) {
                scoreArray.push(new scoreObject(
                    value.id, value.isRight,
                    value.questionID,
                    value.optionArray, value.handleArray));
            });
            if (scoreArray.length !== 0) {
                this.scoresStr = scoreArray;
            }
            this.isUpdate = false;
        }
    };

    /**
     *
     * @param questionID
     * @param optionIDs
     */
    setQuestion(questionID, optionIDs) {
        let optionIds = optionIDs.split(',');
        let scoreId, array = [], rightAns = [], rightAnsMap = new xMap();
        this.scoreMap.eachMap(function (key, value) {
            if (value.questionID === questionID) {
                scoreId = value.id;
            }
        });
        if (scoreId) {
            let scoreObject = this.scoreMap.get(scoreId);
            let questionArray = this.questionArray;
            let optionMap = new xMap();
            ~function findQuestion(questionArray) {
                for (let i = 0; i < questionArray.length; i++) {
                    if (questionArray[i].id === questionID) {
                        for (let j = 0; j < questionArray[i].optionArray.length; j++) {
                            if (questionArray[i].optionArray[j].isRight === '1') {
                                rightAnsMap.put(questionArray[i].optionArray[j].id, questionArray[i].optionArray[j].id);
                            }
                        }
                        // findOption(questionArray[i].optionArray);
                        let _optionArray = questionArray[i].optionArray

                        for (let i = 0; i < optionIds.length; i++) {
                            for (let j = 0; j < _optionArray.length; j++) {
                                if (_optionArray[j].id === optionIds[i]) {
                                    optionMap.put(_optionArray[j].id, _optionArray[j]);
                                }
                                if (_optionArray[j]._optionArray.length !== '0') {
                                    for (let k = 0; k < _optionArray[j]._optionArray.length; k++) {
                                        if (_optionArray[j]._optionArray[k].isRight === '1') {
                                            rightAnsMap.put(_optionArray[j]._optionArray[k].id, _optionArray[j]._optionArray[k].id);
                                        }
                                    }
                                    arguments.callee(_optionArray[j]._optionArray);
                                }

                            }
                        }

                    } else {
                        if (questionArray[i].questionArray.length !== '0') {
                            arguments.callee(questionArray[i].questionArray);
                        }
                    }
                }
            }(questionArray);


            rightAnsMap.eachMap(function (key, value) {
                rightAns.push(value);
            });

            optionMap.eachMap(function (key, value) {
                array.push(value);
            });
            scoreObject.optionArray = array.concat();
            // 判断用户选择是否正确
            let flag = true;
            for (let i = 0; i < rightAns.length; i++) {
                if (!optionMap.find(rightAns[i])) {
                    flag = false;
                }
            }
            if (flag && optionMap.size() === rightAns.length) {
                if (!scoreObject.isRight) {
                    scoreObject.isRight = true;
                }
            } else {
                if (scoreObject.isRight) {
                    scoreObject.isRight = false;
                }
            }
        }
        this.isUpdate = true;
        // console.log(scoreObject.id+'-----'+scoreObject.isRight+'%%%%'+scoreObject.rate);
    };







}

/**
 * 定义得分基本数据对象scoreObject
 * @param id
 * @param rate
 * @param questionID
 * @constructor
 */
class ScoreObject {
    id;
    rate;
    isRight;
    questionID;
    optionArray;
    handleArray;
    constructor(id, rate, questionID) {
        this.id = id;                                     // 得分点编号
        this.rate = rate;                                 // 所占比例
        this.isRight = false;                             // 该得分点是否通过
        this.questionID = questionID;                     // 该得分点是否通过
        this.optionArray = [];                            // 选项数组
        this.handleArray = [];                            // 关联动作项集合
    }
}

/**
 *
 * @param id
 * @param rate
 * @param type
 * @param description
 * @param kp
 * @param remark
 * @constructor
 */
class QuestionObject {
    id;
    rate;
    type;
    description;
    optionArray;
    kp;
    remark;
    questionArray;
    constructor(id, rate, type, description, kp, remark) {
        this.id = id;                                         // 试题编号
        this.rate = rate;	                                    // 所占比例
        this.type = type;	                                    // 题型
        this.description = description;                       // 题干
        this.optionArray = [];	                            // 选项数组
        this.kp = kp;	                                        // 知识点
        this.remark = remark;	                                // 备注
        this.questionArray = [];	                            // 子试题数组
    }
}

/**
 *
 * 定义互斥得分项对象exclusiveObject
 * @param idArray
 * @param priorityId
 * @constructor
 */
class ExclusiveObject {
    idArray;
    priorityId;
    constructor(idArray, priorityId) {
        this.idArray = idArray;                           // 得分项数组
        this.priorityId = priorityId;                     //
    }
}

/**
 *
 * 定义题干基本数据对象descriptionObject
 * @param tdArray
 * @param optionArray
 * @constructor
 */
class DescriptionObject {
    tdArray;
    optionArray;
    constructor(tdArray, optionArray) {
        this.tdArray = tdArray;                         // 数组中每一项表示一个td中的内容
        this.optionArray = optionArray;	                    // 数组中每一项表示为一个td；td内显示option
    }
}

/**
 *
 * 定义选项基本数据对象optionObject
 * @param id
 * @param description
 * @param isRight
 * @constructor
 */
class OptionObject {
    id;
    description;
    isRight;
    optionArray;
    constructor(id, description, isRight) {
        this.id = id;	                                    // 选项编号
        this.description = description;	                    // 描述
        this.isRight = isRight;	                            // 是否是正确答案
        this.optionArray = [];	                            // 子选项集合
    }
}

/**
 *
 * @param linkOptionID
 * @param description
 * @param isSub
 * @constructor
 */
class DesOptionObject {
    linkOptionID;
    description;
    isSub;
    constructor(linkOptionID, description, isSub) {
        this.linkOptionID = linkOptionID;                         // 关联选项ID
        this.description = description;	                        // 描述
        this.isSub = isSub;
    }

}






/**
 *
 * 定义操作数据对象handleArray
 * @constructor
 */
class HandleArray {
    handleArray;
    actionMap;
    valueMap;
    handleStr;
    isUpdate;
    reHandle;
    constructor() {
        this.handleArray = [];                        // 操作对象集合，记录用户操作，只进行累加
        this.actionMap = new xMap();                   // 对应xml中动作表动作
        this.valueMap = new xMap();                    // 作为条件比对的数值对象集合
        this.handleStr = [];                          // handleArray数组转换的json
        this.isUpdate = false;                        // handleStr是否已更新
        this.reHandle = new xMap();
    }

    /**
     * 添加动作
     * @param handleID
     * @param progress
     * @param paper
     * @param time
     * @param flag  是否要计算这个动作的分数
     * @param sub   是否要减去这个动作的分数
     */

    setHandle(handleID, progress, paper, time, flag, sub) {
        flag = flag || 0;
        sub = sub || 0;
        let preIsAction, paperFlag = true, progressFlag = true, isCondition = false;
        if (handleID === '') return;
        if (this.actionMap.find(handleID)) {
            this.actionMap.get(handleID).conditionMap.eachMap(function (key, value) {
                value.isAction = false;
            });
            preIsAction = this.actionMap.get(handleID).isAction;
            this.actionMap.get(handleID).isAction = true;
            this.actionMap.get(handleID).time = time;
            if (sub !== '1' && this.handleArray.indexOf(this.actionMap.get(handleID)) === -1) {
                this.handleArray.push(this.actionMap.get(handleID));
            }
            this.isUpdate = true;
            if (flag === '0') {
                if (paper.scoreMap.find(this.actionMap.get(handleID).SID)) {
                    if (!preIsAction) {
                        let handleArray = paper.scoreMap
                            .get(this.actionMap.get(handleID).SID)
                            .handleArray;
                        for (let i = 0; i < handleArray.length; i++) {
                            if (!handleArray[i].isAction) {
                                paperFlag = false;
                            }
                        }
                        if (paperFlag) {
                            paper.scoreMap.get(this.actionMap.get(handleID).SID).isRight = true;

// this.actionMap.get(handleID).score=paper.scoreMap.get(this.actionMap.get(handleID).SID).score;
                            paper.isUpdate = true;
                        }
                    }
                }
            }
            if (sub === '1') {
                if (paper.scoreMap.find(this.actionMap.get(handleID).SID)) {
                    this.actionMap.get(handleID).isAction = false;
                    paper.scoreMap.get(this.actionMap.get(handleID).SID).isRight = false;
                    paper.isUpdate = true;
                }
            }


            if (progress.progressMap) {
                if (progress.progressMap.find(this.actionMap.get(handleID).PID)) {
                    if (!preIsAction) {
                        let prehandleArray = progress.progressMap
                            .get(this.actionMap.get(handleID).PID)
                            .handleArray;
                        for (let i = 0; i < prehandleArray.length; i++) {
                            if (!prehandleArray[i].isAction) {
                                progressFlag = false;
                            }
                        }
                        if (progressFlag) {
                            progress.progressMap
                                .get(this.actionMap.get(handleID).PID)
                                .isPass = true;
                            progress.isUpdate = true;
                        }
                    }
                }
            }
        }
    };

    /**
     * 更新handle
     */
    sumHandleStr() {
        let handleArray = [];
        if (this.isUpdate) {
            let handleObject = function (id, time, score) {
                this.id = id;
                this.time = time;
                this.score = score;
            };
            for (let i = 0; i < this.handleArray.length; i++) {
                handleArray.push(new handleObject(
                    this.handleArray[i].id,
                    this.handleArray[i].time,
                    this.handleArray[i].score,
                ));
                // console.log(this.handleArray[i].isAction);
                if (!this.handleArray[i].isAction) {
                    let handle = {
                        id: this.handleArray[i].id,
                        time: this.handleArray[i].time
                    };
                    this.reHandle.put(this.handleArray[i].id, handle);
                } else {
                    if (this.reHandle.find(this.handleArray[i].id)) {
                        this.reHandle.delete(this.handleArray[i].id);
                    }
                }
                // console.log(this.reHandle);
            }
            if (handleArray.length !== 0) {
                this.handleStr = handleArray;
            }
            this.isUpdate = false;
        }
    };


    /**
     *
     * 触发数组对象变更数值
     * @param id
     * @param value
     */
    setCondition(id, value) {
        let arrayHID = '', vid = '';
        let valueObject = this.valueMap, actionMap = this.actionMap;

        if (valueObject.find(id)) {
            valueObject.get(id).value = value;

            valueObject.get(id).cdtMap.eachMap(function (key, value) {
                let tFlag = false;
                if ('cdtValue' in value) {
                    let cdtValueArray = [];
                    if (value.cdtValue) {
                        cdtValueArray = value.cdtValue.split(',');
                    }
                    for (let i = 0; i < cdtValueArray.length; i++) {
                        if (cdtValueArray[i] === valueObject.get(id).value) {
                            tFlag = true;
                        }
                    }
                    value.isAction = tFlag;
                }
                let flag = false;

                if (value.isAction) {
                    actionMap.get(value.linkHID).conditionMap.eachMap(function (ckey, cvalue) {
                        if ('cdtID' in cvalue) {
                            if (valueObject.find(cvalue.cdtID)) {
                                if (valueObject.get(cvalue.cdtID).value !==
                                    valueObject.get(cvalue.linkVID).value
                                ) {
                                    cvalue.isAction = true;
                                } else {
                                    cvalue.isAction = false;
                                }
                            }
                        }
                        if (cvalue.isAction !== true) {
                            flag = true;
                        }
                    });
                    if (!flag) {

                        arrayHID = value.linkHID;
                    }
                }
            });
        }
        return arrayHID;
    };


}

/**
 *
 * 定义动作基本数据对象handleObject
 * @constructor
 */
class HandleObject {
    id;
    time;
    isAction;
    score;
    conditionMap;
    PID;
    SID;
    constructor(id, score) {
        this.id = id;                                         // 动作编号
        this.time = '';                                        // 动作时间
        this.isAction = false;                                // 是否触发动作
        this.score = score;                                   // 得分
        this.conditionMap = new xMap();                        // 关联判定条件计划集合
        this.PID = '';                                        //
        this.SID = '';
    }
}

/**
 *
 * 定义条件数据对象
 * @param id
 * @param linkVID
 * @param cdt
 * @param cdtID
 * @param cdtValue
 * @constructor
 */
class ConditionObject {
    id;
    linkVID;
    cdt;
    cdtID;
    cdtValue;
    linkHID;
    isAction;
    constructor(id, linkVID, cdt, cdtID, cdtValue) {
        this.id = id;	                                    // 条件编号
        this.linkVID = linkVID;	                            // 关联数值对象ID
        this.cdt = cdt;	                                    // 条件方式
        this.cdtID = cdtID;	                                // 比对数值对象ID
        this.cdtValue = cdtValue;	                        // 比对数值
        this.linkHID = '';                                    // 关联动作handleID
        this.isAction = false;
    }
}




/**
 *
 * @param id
 * @param description
 * @constructor
 */
class ValueObject {
    id;
    description;
    value;
    cdtMap;
    constructor(id, description, value?) {
        this.id = id;                                         // 数值对象编号
        this.description = description;                       // 描述
        this.value = '';                                   // 默认值
        this.cdtMap = new xMap();                              // 用户条件condition
    }
}


export {
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
};
