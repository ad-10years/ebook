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
        let iDoc = document.getElementById("view")
        //点击监听
        document.getElementById("view").contentDocument.body.addEventListener("click", (event)=>{pushAttrEvent.pushEvent(event.target)});
        //滚动监听
        hightlight.listenEx({scrollBody:iDoc.contentDocument.body,scrollTarget:document.getElementById("view-outer")})
        //生成滚动小节并且监听
        let template = ""
        // polyfill of webpack ???
        let nodeList = iDoc.contentDocument.body.querySelectorAll("section[data-anchor-trigger]")
        for(let section of Array.prototype.slice.call(nodeList)){
            let sectionID = section.getAttribute("data-anchor-trigger")
            let sectionName = section.getAttribute("data-goto-title")
            template +=`<li><button data-anchor="${sectionID}" class=" childChapter">${sectionName}</button></li>`
        }
        document.getElementById("chapter-insert").innerHTML = template
        //高度样式重新计算，重置滚动窗口
        document.getElementById("view-outer").scrollTop = 0;
        iDoc.style.height = window.getComputedStyle(iDoc.contentDocument.body).height
        //iframe初始化完成！
        parallax.initial(document.getElementById("view").contentDocument.body,document.getElementById("view-outer"))
        observe.emit("iframe-load")
    },
}