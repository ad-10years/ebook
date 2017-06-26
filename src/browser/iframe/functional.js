/**
 * Created by Dogfish on 2017/6/25.
 */

import hightlight from  "../../components/hightlight"
import pushAttrEvent from "../attrListen/listener"
import parallax from "../parallax-scroll"

let view = document.getElementById("view")


export default {
    clickListen(){
        let viewDocBody = view.contentDocument.body
        if(viewDocBody){
            //点击监听
            viewDocBody.addEventListener("click", (event)=>{pushAttrEvent.pushEvent(event.target)});
        }
    },
    scrollListen(){
        let viewDocBody = view.contentDocument.body
        if(viewDocBody){
            //点击监听
            hightlight.listenEx({scrollBody:viewDocBody,scrollTarget:document.getElementById("view-outer")})
        }
    },
    parallaxListen(){
        let viewDocBody = view.contentDocument.body
        parallax.initial(viewDocBody,document.getElementById("view-outer"))
    },
    imgLoadListen(){
        let viewDocBody = view.contentDocument.body;
        viewDocBody.querySelectorAll("img")

        let nodeList = viewDocBody.querySelectorAll("img")
        for(let img of Array.prototype.slice.call(nodeList)){
            img.onload = function () {
                view.style.height = window.getComputedStyle(viewDocBody).height
            }
        }
    },
    chapterGenerator(){
        let viewDocBody = view.contentDocument.body
        let template = ""
        // polyfill of webpack ???
        let nodeList = viewDocBody.querySelectorAll("section[data-anchor-trigger]")
        for(let section of Array.prototype.slice.call(nodeList)){
            let sectionID = section.getAttribute("data-anchor-trigger")
            let sectionName = section.getAttribute("data-goto-title")
            template +=`<li><button data-anchor="${sectionID}" class=" childChapter">${sectionName}</button></li>`
        }
        document.getElementById("chapter-insert").innerHTML = template
    },
    refitStyle(){
        let viewDocBody = view.contentDocument.body
        view.style.height = window.getComputedStyle(viewDocBody).height
    }
}