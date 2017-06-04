/**
 * Created by Dogfish on 2017/6/4.
 */
function menuSwitch(status) {
    let menu = $(".popMenu");
    let menuButton =  $(".hamburger--collapse")
    if(status === true){
        menu.addClass("menu-active")
        menuButton.addClass("is-active")
    }else if(status === false){
        menu.removeClass("menu-active")
        menuButton.removeClass("is-active")
    }else{
        menu.toggleClass("menu-active")
        menuButton.toggleClass("is-active")
    }
}

function gotoView($node,offset=150) {

    let targetTop = $node.offsetTop;
    let outer = document.getElementById("view-outer")
    $(outer).animate({scrollTop:targetTop - offset},1000)
    // outer.scrollTop = targetTop - offset
}

export default {
    anchorJumping(element,attrVal) {
        //链接内部跳转
        let iframeView = document.getElementById("view")
        let anchorElement = iframeView.contentDocument.getElementById(attrVal)
        gotoView(anchorElement)
        menuSwitch(false)
    },
    hrefJumping(element,attrVal) {
        //链接内部跳转
        $("[data-href]").removeClass("is-active")
        $(`[data-href="${attrVal}"]`).addClass("is-active")
        document.getElementById("view").src = attrVal
        menuSwitch(false)
    },
    innerPageJumping(eventTarget,attrVal) {
        $(".page").removeClass("is-active")
        $("[data-page-target="+ attrVal+"]").addClass("is-active")

        $(".title-selector").removeClass("is-active")
        eventTarget.classList.add("is-active")
        menuSwitch(true)
    },
    idEventDispatch(eventTarget,id) {
        switch (id){
            case "#menu":
                menuSwitch()
                break;
            case "":
                break
            default:
                break
        }
    },
}