/**
 * Created by Dogfish on 2017/6/6.
 */

require("./style.less");
import autoBuffer from "../autoBuffer"

const proptyList = ["parallax-speed","parallax-zIndex"]


function parallax() {
    // this.elementList =[{element:$element,params:{speed,z-index...ect}}]
    this.elementList = undefined;
    this.listenTarget = document.body
    this.buffer = new autoBuffer({interval:17,callback:this.onScroll},this)
}

parallax.prototype.update = function ($document = document) {
    let nodeList = $document.querySelectorAll(".parallax-scroll");
    this.elementList = [];

    for(let element of Array.prototype.slice.call(nodeList)){

        let paramsList = {};
        for(let propName of proptyList){
            paramsList[propName] = element.getAttribute(propName)
        }

        this.elementList.push({element,params:paramsList})
    }

}

parallax.prototype.initial = function ($document = document ,$scrollTarget = document.body) {
    let that = this
    this.listenTarget = $scrollTarget
    this.lastScrollTop = 0;
    this.update($document)
    $scrollTarget.removeEventListener("scroll",onScroll)
    $scrollTarget.addEventListener("scroll",onScroll)
    that.buffer.startBuffer()

    function onScroll() {
        that.buffer.updateBuffer({scrollTop:this.scrollTop})
    }

}

parallax.prototype.onScroll = function ({scrollTop}) {

    let movedDistance = scrollTop - this.lastScrollTop

    for(let preset of this.elementList){
        preset.element.style.top = (Number((preset.element.style.top).slice(0,-2)) + Number(preset.params["parallax-speed"]) * movedDistance).toFixed(2) + "px"
        console.log(Number(preset.params["parallax-speed"]) * movedDistance)
    }

    this.lastScrollTop = scrollTop
}


export default parallax