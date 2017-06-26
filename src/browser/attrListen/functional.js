/**
 * Created by Dogfish on 2017/6/4.
 */
import template from "../template";
import nodeTracker from "../../components/DOMtracker"
import iframeFnc from "../iframe/functional"

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
    anchorJumping({element,attrVal}) {
        //链接内部跳转
        let iframeView = document.getElementById("view")
        let anchorElement = iframeView.contentDocument.getElementById(attrVal)
        gotoView(anchorElement)
        menuSwitch(false)
    },
    hrefJumping({element,attrVal}) {
        //链接内部跳转
        $("[data-href]").removeClass("is-active")
        $(`[data-href="${attrVal}"]`).addClass("is-active")

        document.getElementById("view").src = attrVal
        menuSwitch(false)



    },
    innerPageJumping({eventTarget,attrVal}) {
        $(".page").removeClass("is-active")
        $("[data-page-target="+ attrVal+"]").addClass("is-active")

        $(".title-selector").removeClass("is-active")
        eventTarget.classList.add("is-active")
        menuSwitch(true)

        //特殊页面的处理，例如跳转章节页面后，滚动到指定的激活位置
        switch (attrVal){
            case "chapter-list":
                let node = nodeTracker.getNodeByAttr("class",document.querySelector("[data-append=all-chapter] button.is-active"),"chapter-wrapper")
                if(node){
                    document.querySelector('[data-page-target=chapter-list]').scrollTop = node.offsetTop + 100
                }
                break
            default:
                break
        }
    },
    loadHrefTitle({eventTarget,attrVal}){
        let content = template.query(attrVal,"link")
        document.getElementById("chapter-child-title").innerText = content.current.name
        document.getElementById("chapter-title").innerText = content.parent.name
    },
    idEventDispatch({eventTarget,attrVal}) {
        switch (attrVal){
            case "#menu":
                menuSwitch()
                if($(".popMenu").hasClass("menu-active")){
                    document.body.querySelector('[data-page=chapter-content]').click()
                }
                break;
            case "":
                break
            default:
                break
        }
    },
    activeClass({eventTarget,attrVal,key}){
        let view =  $("#view").contents()
        let tagKey = attrVal
        //自己所属的标记
        let removeSelector = eventTarget.getAttribute("tag-remove")
        if(removeSelector){
            $(removeSelector).removeClass(tagKey)
            view.find(removeSelector).removeClass(tagKey)
        }

        let addSelector = eventTarget.getAttribute("tag-add")
        if(addSelector){
            $(addSelector).addClass(tagKey)
            view.find(addSelector).addClass(tagKey)
        }

        iframeFnc.refitStyle();
    },
    activePage({eventTarget,attrVal,key}){

    }
}