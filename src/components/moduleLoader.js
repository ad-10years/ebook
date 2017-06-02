/**
 * Created by Dogfish on 2017/6/2.
 */
// [{link,callback,type,name}]
// type : js css img

function moduleLoader(linkList,onloadCallback) {
    this.count  = 0;
    this.total = 0;
    if(typeof onloadCallback==="function"){this.onload = onloadCallback}
    this.loadList(linkList)
}

moduleLoader.prototype.loadList = function (linkList) {
    let that = this
    if(typeof linkList!== "object"){return}

    for(let i in linkList){
        if(linkList[i].hasOwnProperty("link") && linkList[i].hasOwnProperty("type")){
            let type = linkList[i]["type"];
            let link = linkList[i]["link"];
            let name = linkList[i]["name"];
            let callback = linkList[i]["callback"]
            let append
            //附加执行
            switch (type){
                case "js":
                    append = document.createElement('script');
                    append.src= linkList[i]["link"];
                    break
                case "css":
                    //todo css onload event dont work! try to fix
                    this.total --
                    //
                    append = document.createElement('link');
                    append.setAttribute("rel","stylesheet")
                    append.setAttribute("link",link)
                    break
                case "img":
                    // untest functional
                    append = document.createElement('img');
                    append.src= linkList[i]["link"];

                    break
            }
            //设定回调
            this.total ++
            append.onload = _onloadWarpper(name,type,link,this.onload,callback);

            document.body.appendChild(append);
        }
    }

    function _onloadWarpper(name,type,link,onloadCallback,userCallback) {
        return function () {

            that.count ++

            onloadCallback(that.count,that.total,name,type,link);
            if(typeof userCallback === "function"){

                userCallback(that.count,that.total,name,type,link);
            }

            if(that.count === that.total){
                that.complete()
            }


        }
    }
}

moduleLoader.prototype.complete = function () {

}


moduleLoader.prototype.onload = function (count,total,name,type,link) {}

export default moduleLoader

