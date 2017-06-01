/**
 * Created by Dogfish on 2017/6/2.
 */
// [{link,callback,type}]
// type : js css img
function moduleLoader() {

}

moduleLoader.prototype.add = function (linkList) {
    for(let i in linkList){
        if(linkList[i].hasOwnProperty("link") && linkList[i].hasOwnProperty("type")){
            let type = linkList[i]["type"];
            let link = linkList[i]["link"];
            let append
            switch (type){
                case "js":
                    append = document.createElement('script');
                    append.src= linkList[i]["link"];

                    break
                case "css":
                    append = document.createElement('link');
                    append.setAttribute("rel","stylesheet")
                    append.setAttribute("link",link)
                    break
                case "img":
                    append = document.createElement('img');
                    append.src= linkList[i]["link"];

                    break
            }
            document.body.appendChild(append);
            if(linkList[i].hasOwnProperty("callback")){
                append.onload = linkList[i]["callback"]
            }
        }
    }
}
