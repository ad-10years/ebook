/**
 * Created by Dogfish on 2017/5/22.
 */

import DOMtracker from "../components/DOMtracker"
import hightlight from  "../components/hightlight"
import attrListener from "../components/AttrListener"

let iframeView = document.getElementById("view")
let mainAttrListener = new attrListener()

iframeView.onload=function () {
    document.getElementById("chapter-insert").innerHTML = getChapterTemplate()
    hightlight.listen(iframeView.contentDocument.body)

    iframeView.contentDocument.body.addEventListener("click",function (event) {
        //链接页面跳转检测
        mainAttrListener.pushEvent(event.target)
    })
}

mainAttrListener.add("data-page",innerPageJumping)
mainAttrListener.add("data-href",hrefJumping )
mainAttrListener.add("data-anchor",anchorJumping)

function anchorJumping(eventTarget,attrVal) {
    //链接内部跳转
    let anchorElement = iframeView.contentDocument.getElementById(attrVal)
    hightlight.goto(anchorElement,iframeView.contentDocument.body,150)
    menuSwitch(false)
}

function hrefJumping(eventTarget,attrVal) {
    //链接内部跳转
    iframeView.src = attrVal
    $("[data-href]").removeClass("is-active")
    eventTarget.classList.add("is-active")
    menuSwitch(false)
}

function innerPageJumping(eventTarget,attrVal) {
    $(".page").removeClass("is-active")
    $("[data-page-target="+ attrVal+"]").addClass("is-active")

    $(".title-selector").removeClass("is-active")
    eventTarget.classList.add("is-active")
    menuSwitch(true)
}

mainAttrListener.add("id",function (eventTarget,id,sourceElement) {
    switch (id){
        case "#menu":
            menuSwitch()
            break;
        case "":
            break
        default:
            break
    }
})

document.addEventListener("click",function (event) {
    mainAttrListener.pushEvent(event.target)
})


function getChapterTemplate() {
    let template = ""
    // polyfill of webpack ???
    let nodeList = iframeView.contentDocument.body.querySelectorAll("section[data-anchor-trigger]")
    for(let section of Array.prototype.slice.call(nodeList)){
        let sectionID = section.getAttribute("data-anchor-trigger")
        let sectionName = section.getAttribute("data-goto-title")
        template +=`<li><button data-anchor="${sectionID}" class=" childChapter">${sectionName}</button></li>`
    }
    return template
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
