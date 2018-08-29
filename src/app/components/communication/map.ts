/**
 * @author  谢国亮
 * @updated bingur
 * 定义模拟map方法 size ， put ， get ， delete ， eachMap
 */

export class XMap {
    map;
    constructor() {
        this.map = {};
    }
    /**
     * 获得map容器的个数
     */

    size() {
        let sum = 0;
        for (let props in this.map) {
            if (props)
                sum += 1;
        }
        return sum;
    };

    /**
     * 添加元素
     * @param key
     * @param value
     */

    put(key, value) {

        this.map[key] = value;

    };


    /**
     * get 方法 根据key 取得value
     * @param key
     */

    get(key) {

        return this.map[key];

    };

    /**
     * find 方法 查找value 是否存在
     * @param key
     * @returns {*}
     */
    find(key) {
        if (this.map[key] || this.map[key] === 0 || this.map[key] === false) {
            return true;
        } else {
            return false;
        }
    };

    /**
     *  map 中的删除方法
     * @param key
     */

    delete(key) {
        if (this.map[key] || this.map === 0 || this.map === false) {
            delete this.map[key];
        }
    };



    /**
     * 遍历map 容器的方法
     * @param fn
     */

    eachMap(fn) {
        for (let props in this.map) {
            if (props)
                fn(props, this.map[props]);
        }
    };



}








