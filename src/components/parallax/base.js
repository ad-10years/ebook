/**
 * Created by Dogfish on 2017/6/11.
 */
/**
 * Created by Dogfish on 2017/6/6.
 */

import autoBuffer from "../autoBuffer"

const proptyList = ["parallax-speed","parallax-zIndex"]


function parallax() {
    // this.elementList =[{element:$element,params:{speed,z-index...ect}}]
    this.elementList = undefined;
    this.buffer = new autoBuffer({interval:17,callback:this.onScroll},this)
}

parallax.prototype.update = function (nodeList) {
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
        preset.element.style.top = (pxToNumber(preset.element.style.top) + Number(preset.params["parallax-speed"]) * movedDistance).toFixed(2) + "px";


    }

    this.lastScrollTop = scrollTop
}

function pxToNumber(pxValue,digits =2) {
    return /\d+px/.test(pxValue) ? Number(Number(pxValue.slice(0,-2)).toFixed(digits)) :0
}

export default parallax