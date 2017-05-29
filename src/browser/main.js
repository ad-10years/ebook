/**
 * Created by Dogfish on 2017/5/22.
 */

import DOMtracker from "../components/DOMtracker"
import hightlight from  "../components/hightlight"


let iframeView = document.getElementById("view")

document.addEventListener("click",function (event) {
    let id = DOMtracker.getValByAttr("id",event.target)
    let elNode
    if(id){
        switch (id){
            case "menu":
                menuSwitch()
                break;
            case "":
                break
            default:
                break

        }
    }

   elNode = DOMtracker.getNodeByAttr("data-goto-target",event.target)
    //链接内部跳转
    if(elNode){
        let targetEl = iframeView.contentDocument.getElementById(elNode.getAttribute("data-goto-target"))
        hightlight.goto(targetEl,iframeView.contentDocument.body,150)
        menuSwitch(false)
    }
    //链接页面跳转检测
    linkTo(event.target)
    //内部page切换检测
    elNode = DOMtracker.getNodeByAttr("data-page",event.target)
    if(elNode){
        let dataPage = elNode.getAttribute("data-page");
        $(".page").removeClass("is-active")
        $("[data-page-target="+ dataPage+"]").addClass("is-active")

        $(".title-selector").removeClass("is-active")
        elNode.classList.add("is-active")
    }

})
iframeView.onload=function () {
    hightlight.listen(iframeView.contentDocument.body)
    chapterGenerate()
    iframeView.contentDocument.body.addEventListener("click",function (event) {
        //链接页面跳转检测
        linkTo(event.target)
    })
}
function chapterGenerate() {
    let insertPoint = document.querySelector("#chapter-insert");
    let template = ""

    var nodeList = iframeView.contentDocument.body.querySelectorAll("section[data-goto-trigger]")
    // add this line.
    nodeList = Array.prototype.slice.call(nodeList);
    for(let section of nodeList){
        let sectionID = section.getAttribute("data-goto-trigger")
        let sectionName = section.getAttribute("data-goto-title")
        template +=`<li><button data-goto-target="${sectionID}" class=" childChapter">${sectionName}</button></li>`
    }
    insertPoint.innerHTML = template

}
function menuSwitch(status) {
    let menu = $(".popMenu");
    let menuBUtton =  $("#menu .hamburger--collapse")
    if(status === true){
        menu.addClass("menu-active")
        menuBUtton.addClass("is-active")
    }else if(status === false){
        menu.removeClass("menu-active")
        menuBUtton.removeClass("is-active")
    }else{
        menu.toggleClass("menu-active")
        menuBUtton.toggleClass("is-active")
    }
}
function linkTo(checkPoint) {
    let elNode = DOMtracker.getNodeByAttr("data-link",checkPoint)
    if(elNode){
        iframeView.src = elNode.getAttribute("data-link")
        menuSwitch(false)
    }
}