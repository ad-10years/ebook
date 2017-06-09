/**
 * Created by Dogfish on 2017/6/4.
 */
import observe from "../observe"
import hightlight from  "../../components/hightlight"
import pushAttrEvent from "../attrListen/listener"

import parallax from "../parallax-scroll"

export default {
    initial() {
        //attr tracker
        let view = document.getElementById("view")
        let viewDoc = view.contentDocument
        let viewDocBody = viewDoc.body
        if(viewDocBody){
            //点击监听
            viewDocBody.addEventListener("click", (event)=>{pushAttrEvent.pushEvent(event.target)});
            //滚动监听
            hightlight.listenEx({scrollBody:viewDocBody,scrollTarget:document.getElementById("view-outer")})
            //生成滚动小节并且监听
            let template = ""
            // polyfill of webpack ???
            let nodeList = viewDocBody.querySelectorAll("section[data-anchor-trigger]")
            for(let section of Array.prototype.slice.call(nodeList)){
                let sectionID = section.getAttribute("data-anchor-trigger")
                let sectionName = section.getAttribute("data-goto-title")
                template +=`<li><button data-anchor="${sectionID}" class=" childChapter">${sectionName}</button></li>`
            }
            document.getElementById("chapter-insert").innerHTML = template

            parallax.initial(viewDocBody,document.getElementById("view-outer"))
        }

        //高度样式重新计算，重置滚动窗口
        document.getElementById("view-outer").scrollTop = 0;
        view.style.height = window.getComputedStyle(viewDocBody).height

        observe.emit("iframe-load")
    },
}