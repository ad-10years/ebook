/**
 * Created by Dogfish on 2017/6/2.
 *
 */
const CHAPTER = 0;
const CHILD_CHAPTER = 1;


const bookListData = [
    {
        name: "-",type:CHAPTER,
        link: "",
    }, {
        name: "开始",type:CHILD_CHAPTER,
        link: "./contents/起/封面.html",
    },{
        name: "目录",type:CHILD_CHAPTER,
        link: "./contents/contents.html",
    },

    {
        name: "起·舞弄清影",type:CHAPTER,
        link: "",
    }, {
        name: "起·舞弄清影-导语",type:CHILD_CHAPTER,
        link: "./contents/起/导语.html",
    },{
        name: "十年一觉广告梦",type:CHILD_CHAPTER,
        link: "./contents/起/十年一觉广告梦.html",
    },

    //承·恩雨露流

    {
        name: "承·恩雨露流",type:CHAPTER,
        link: "",
    }, {
        name: "承·恩雨露流-导语",type:CHILD_CHAPTER,
        link: "./contents/承/导语.html",
    },{
        name: "沈伟：一桥筑梦初心显",type:CHILD_CHAPTER,
        link: "./contents/承/沈伟采访.html",
    }, {
        name: "周燕：喜欢才会坚持",type:CHILD_CHAPTER,
        link: "./contents/承/周燕采访.html",
    }, {
        name: "钟旭：多去涉猎知识",type:CHILD_CHAPTER,
        link: "./contents/承/钟旭采访.html",
    },

    //转·眼光阴暑渐除

    {
        name: "转·眼光阴暑渐消",type:CHAPTER,
        link: "",
    }, {
        name: "转·眼光阴暑渐消-导语",type:CHILD_CHAPTER,
        link: "./contents/转/导语.html",
    },
    {
        name: "采访：陈汉",type:CHILD_CHAPTER,
        link: "./contents/转/陈汉.html",
    },
    {
        name: "采访：胡倩苑",type:CHILD_CHAPTER,
        link: "./contents/转/胡倩苑.html",
    },
    {
        name: "采访：黄汇东",type:CHILD_CHAPTER,
        link: "./contents/转/黄汇东.html",
    },
    {
        name: "采访：虞晨",type:CHILD_CHAPTER,
        link: "./contents/转/虞晨.html",
    },{
        name: "采访：陈国濠",type:CHILD_CHAPTER,
        link: "./contents/转/陈国濠.html",
    },
    //合·睦此生乐百年
    {
        name: "合·睦此生乐百年",type:CHAPTER,
        link: "",
    },  {
        name: "合睦此生乐百年-导语",type:CHILD_CHAPTER,
        link: "./contents/合/导语.html",
    },{
        name: "历届优秀作品·平面类",type:CHILD_CHAPTER,
        link: "./contents/合/历届优秀作品·平面类.html",
    },{
        name: "历届优秀作品·策划类",type:CHILD_CHAPTER,
        link: "./contents/合/历届优秀作品·策划类.html",
    },{
        name: "历届优秀作品·视频类",type:CHILD_CHAPTER,
        link: "./contents/合/历届优秀作品·视频类.html",
    }
]
const buttonTemplate = `<li><button data-href="%LINK%">%NAME%</button></li>`;
const wrapperTemplate = `<div class="chapter-wrapper">
                        <div class="col s12 mainText">
                            <h1>%TITLE%</h1>
                        </div>
                        <div class="col s12 links">
                            <ul class="section links-inner">
                                %BUTTONS_TEMPLATE%
                            </ul>
                        </div>
                    </div>`

export default {
    get() {
        //总分类记录器
        let currentLink,sortedList = {}
        //分类排序，创建结构
        for (let i in bookListData) {
            let chapter = bookListData[i]

            if(chapter.type === CHAPTER){
                currentLink = chapter.name
                if(!sortedList.hasOwnProperty(currentLink)){
                    sortedList[currentLink] = {}
                    sortedList[currentLink].name = chapter.name
                    sortedList[currentLink].link = chapter.link
                    sortedList[currentLink].contents = []
                }
            }

            if(currentLink && chapter.type === CHILD_CHAPTER && sortedList.hasOwnProperty(currentLink)){
                sortedList[currentLink].contents.push(chapter)
            }

        }

        //根据结构创建模板
        let outputTemplate = "";
        for(let i in sortedList){
            //  大分类目录
            let currentChildButtonsTemplate = ""
            let chapter = sortedList[i]

            for(let j in chapter.contents){
                let childChapter = chapter.contents[j]
                // 子目录
                currentChildButtonsTemplate += getButtonTemplate(childChapter.link,childChapter.name)

            }
            outputTemplate += getWrapperTemplate(chapter.name,currentChildButtonsTemplate)
        }

        return outputTemplate

        function getButtonTemplate(link, name) {
            return buttonTemplate.replace(/%LINK%/g, link).replace(/%NAME%/g, name)
        }

        function getWrapperTemplate(title, buttons) {
            return wrapperTemplate.replace(/%TITLE%/g, title).replace(/%BUTTONS_TEMPLATE%/g, buttons)
        }

    },
    query(key,type="name"){
        let next,prev,parent;
        for(let i=0;i<bookListData.length;i++){
            let chapter = bookListData[i]
            if(chapter.type === CHAPTER){
                parent = chapter
            }
            if(chapter[type] === key){

                if(bookListData.length >1 && i !== bookListData.length-1){
                    for(let j=i+1;j<bookListData.length;j++){
                        let chapter = bookListData[j]
                        if(chapter.type === CHILD_CHAPTER){
                            next = chapter
                            break
                        }
                    }

                }

                if(bookListData.length >1 && i !== 0){
                    for(let j=i-1;j>0;j--){
                        let chapter = bookListData[j]
                        if(chapter.type === CHILD_CHAPTER){
                            prev = chapter
                            break
                        }
                    }
                }
                return {current:chapter,next,prev,parent}
            }
        }

    },
}

