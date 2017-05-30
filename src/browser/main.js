/**
 * Created by Dogfish on 2017/5/22.
 */
import hightlight from  "../components/hightlight"
import attrListener from "../components/AttrListener"
//attr listneer
let mainAttrListener = new attrListener()
function anchorJumping(element,attrVal) {
    //链接内部跳转
    let iframeView = document.getElementById("view")
    let anchorElement = iframeView.contentDocument.getElementById(attrVal)
    hightlight.goto(anchorElement,iframeView.contentDocument.body,150)
    menuSwitch(false)
}
function hrefJumping(element,attrVal) {
    //链接内部跳转
    $("[data-href]").removeClass("is-active")
    $(`[data-href="${attrVal}"]`).addClass("is-active")
    document.getElementById("view").src = attrVal
    menuSwitch(false)
}
function innerPageJumping(eventTarget,attrVal) {
    $(".page").removeClass("is-active")
    $("[data-page-target="+ attrVal+"]").addClass("is-active")

    $(".title-selector").removeClass("is-active")
    eventTarget.classList.add("is-active")
    menuSwitch(true)
}
function idEventDispatch(eventTarget,id) {
    switch (id){
        case "#menu":
            menuSwitch()
            break;
        case "":
            break
        default:
            break
    }
}
//functional
function getChapterTemplate() {
    let template = ""
    let iframeView = document.getElementById("view")
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
function iframeContentInitial() {

    let iframeView = document.getElementById("view")
    document.getElementById("chapter-insert").innerHTML = getChapterTemplate()
    document.getElementById("view").contentDocument.body.addEventListener("click", (event)=>{mainAttrListener.pushEvent(event.target)})
    hightlight.listen(iframeView.contentDocument.body)
}
//initial

(function main() {
    mainAttrListener.add("data-page",innerPageJumping)
    mainAttrListener.add("data-href",hrefJumping )
    mainAttrListener.add("data-anchor",anchorJumping)
    mainAttrListener.add("id",idEventDispatch)

    document.getElementById("view").onload= iframeContentInitial
    document.addEventListener("click", (event)=>{mainAttrListener.pushEvent(event.target)})

})()