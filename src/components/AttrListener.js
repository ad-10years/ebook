/**
 * Created by Dogfish on 2017/5/30.
 */
//从某个指定节点开始，一直往上爬取所有注册属性的回调函数，并且执行
function attrListener() {
    this.attrList = {}
}

attrListener.prototype.pushEvent = function (eventTarget) {
    let sourceElement = eventTarget;

    do {
        for(let attr in this.attrList){
            if(!eventTarget.hasAttribute(attr)){continue}

            let attrVal = eventTarget.getAttribute(attr)
            if (attrVal) {
                for(let i in this.attrList[attr]){
                    this.attrList[attr][i](eventTarget,attrVal,sourceElement)
                }
            }
        }
        eventTarget = eventTarget.parentElement;
        if (!eventTarget) {
            return
        }

    } while (true)

}

attrListener.prototype.add = function (attr,callback) {
    if(!this.attrList.hasOwnProperty(attr)){
        this.attrList[attr] = []
    }

    if(!this.attrList[attr].includes(callback)){
        this.attrList[attr].push(callback)
    }
}

attrListener.prototype.remove = function (attr,callback) {
    if(!attr && !callback){
        this.attrList = {}
    }
    if(attr && !callback && this.attrList.hasOwnProperty(attr)){
        delete this.attrList[attr]
    }
}

export default attrListener