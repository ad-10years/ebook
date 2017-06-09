/**
 * Created by Dogfish on 2017/6/4.
 */
//从某个指定节点开始，一直往上爬取所有注册属性的回调函数，并且执行
import "./polyfill/array.includes"

function attrLoader() {
    this.attrList = {}
}

attrLoader.prototype.exec = function () {
    for(let attr in this.attrList){
        for(let i in this.attrList[attr]){
            let valCallback = this.attrList[attr][i];
            if(typeof valCallback.callback !== "function"){continue}

            for (let iframe of Array.prototype.slice.call(document.getElementsByTagName("iframe"))) {
                let queryString = valCallback.val? "["+attr+"='"+valCallback.val + "']" : "["+attr+"]";
                let nodeList = iframe.contentDocument.querySelectorAll(queryString)
                for(let element of Array.prototype.slice.call(nodeList)){
                    valCallback.callback(element,valCallback.val)
                }
            }

            let queryString = valCallback.val? "["+attr+"='"+valCallback.val + "']" : "["+attr+"]";
            let nodeList = document.querySelectorAll(queryString)
            for(let element of Array.prototype.slice.call(nodeList)){
                valCallback.callback(element,valCallback.val)
            }

        }
    }
}

attrLoader.prototype.add = function ({attr,val,callback}) {
    if(!this.attrList.hasOwnProperty(attr)){
        this.attrList[attr] = []
    }

    if(!this.attrList[attr].includes(callback)){
        this.attrList[attr].push({val,callback})
    }
}

attrLoader.prototype.remove = function (attr,callback) {
    if(!attr && !callback){
        this.attrList = {}
    }
    if(attr && !callback && this.attrList.hasOwnProperty(attr)){
        delete this.attrList[attr]
    }
}

export default attrLoader