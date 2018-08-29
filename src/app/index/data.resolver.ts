
export class DataResolver {
    pageArray: any[];
    chapterArray: any[];
    // state: {
    //     current: any,
    //     progress: number,
    //     publishProgress: number,
    //     isPass: boolean,
    // };
    description: any;
    constructor(appConfig) {
        this.description = this.parserDescription(appConfig);
        this.pageArray = this.parserPageArray(appConfig);
        this.chapterArray = this.parserChapterArray(appConfig);
        // this.state = {
        //     current: {},
        //     progress: 0,
        //     publishProgress: 0,
        //     isPass: false,
        // };
    }

    // 解析description

    private parserDescription(appConfig: any) {
        const description = appConfig.description;
        return {
            name: description.name,
            courseNumber: description.courseNumber,
            metadata: description.metadata,
            type: description.type,
            types: description.types,
            purpose: description.purpose,
            require: description.require,
            keyword: description.keyword,
            language: description.language,
            version: description.version,
            client: description.client,
            sumScore: description.sumScore,
            passCondition: description.passCondition,
            completeCondition: description.completeCondition,
            entry: description.entry,
        };
    }
    // 解析pageArray
    private parserPageArray(appConfig: any) {
        // return [];

        if (Array.isArray(appConfig.pageArray) && appConfig.pageArray) {
            const pageArray = appConfig.pageArray.sort(this.compare('order'));
            const newPageArray = pageArray.map((v, i, ) => {

                appConfig.chapterArray.forEach((element, key, arr) => {
                    if (element.id === v.chapterID) {
                        if (element.pages === undefined)
                            element.pages = [];
                        // pages.push(element);
                        element.pages.push(v);
                    }
                });
                // console.log(appConfig.chapterArray);
                const pageObject = {};
                Object.defineProperty(pageObject, 'isPass_initial', { value: !!v.isPass });
                Object.assign(pageObject,
                    {
                        id: v.id,
                        order: parseInt(v.order, 10),
                        chapterID: v.chapterID,
                        isPass: !!v.isPass,
                        // isPass_initial: !!v.isPass,
                        pageNumber: ++i,
                        componentArray: v.componentArray,
                        publishArray: v.publishArray,
                        backgroundImageSrc: v.backgroundImageSrc,
                        animation: v.animation,
                    },
                );
                return pageObject;
            });
            return newPageArray;
        } else {
            return [];
        }
    }
    // 解析chapterArray
    private parserChapterArray(appConfig: any) {
        // return [];
        let count: number = 1;
        if (Array.isArray(appConfig.chapterArray) && appConfig.chapterArray) {
            const chapterArray = appConfig.chapterArray.sort(this.compare('order'));
            const newChapterArray = chapterArray.map((v, i, ) => {


                // const pages = v.pageID.split(',');
                // console.log(this.pageArray);

                // let pages = [];
                // this.pageArray.forEach(element => {
                //     if (element.chapterID === v.id) {
                //         pages.push(element);
                //     }
                // });
                // console.log(v.pages);
                const startPage = count;
                const endPage = count = count + v.pages.length;
                if (Array.isArray(v.childChapterArray) && v.childChapterArray.length > 0) {
                    console.error('数据包含子章节,暂时不对此结构解析');

                } else {

                    return {
                        id: v.id,
                        order: parseInt(v.order, 10),
                        name: v.name,
                        description: v.description,
                        startPage: startPage,
                        endPage: endPage - 1,
                        pages: v.pages,
                    };
                }
            });
            return newChapterArray;
        } else {
            return [];
        }
    }

    // 根据属性的值对数组排序
    private compare(property: string) {
        return (a, b) => {
            const value1 = a[property];
            const value2 = b[property];
            return value1 - value2;
        };
    }
}


