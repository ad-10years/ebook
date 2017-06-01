/**
 * Created by Dogfish on 2017/5/28.
 */

let hg= {
    listen:function (target,removeCallback,addCallback,triggerAttr,sectionAttr,activeClass) {
        if(!target){target = document.body}
        if(!sectionAttr){sectionAttr = "data-anchor-trigger"}
        if(!triggerAttr){triggerAttr = "data-anchor"}
        if(!activeClass){activeClass = "is-active"}
        let lastedSectionID
        target.onscroll  = function () {
            let currentScroll = target.scrollTop
            let screenHeight = 200
            let currentSection ;
            //评估
            let queryResult = target.querySelectorAll("["+sectionAttr + "]")
            for(let i in queryResult){
                let $el = queryResult[i]

                if(!($el.offsetTop - screenHeight < currentScroll)){
                    break
                }
                currentSection = $el
            }
            if(!currentSection){return}
            let sectionID = currentSection.getAttribute(sectionAttr)
            if(sectionID === lastedSectionID){
                console.log("cache here:",sectionID)
                return
            }
            for(let iframe of document.getElementsByTagName("iframe")){
                for(let $activedEl of iframe.querySelectorAll("["+triggerAttr+ "]" + "[class~=" + activeClass+ "]")){

                    if(typeof removeCallback === "function"){
                        removeCallback($activedEl)
                    }else{
                        $activedEl.classList.remove(activeClass)
                    }
                }
                for(let $triggerEl of iframe.querySelectorAll("["+triggerAttr+"=" + sectionID + "]")){

                    if(typeof addCallback === "function"){

                        addCallback($triggerEl)
                    }else{
                        $triggerEl.classList.add(activeClass)
                    }
                }
            }

            for(let $activedEl of document.querySelectorAll("["+triggerAttr+ "]" + "[class~=" + activeClass+ "]")){


                if(typeof removeCallback === "function"){
                    removeCallback($activedEl)
                }else{
                    $activedEl.classList.remove(activeClass)
                }
            }

            for(let $triggerEl of document.querySelectorAll("["+triggerAttr+"=" + sectionID + "]")){

                if(typeof addCallback === "function"){
                    addCallback($triggerEl)
                }else{
                    $triggerEl.classList.add(activeClass)
                }
            }
            lastedSectionID = sectionID;
        }
    },
    goto:function ($node,$screen,offset) {

        let targetTop = $node.offsetTop;
        let html = $screen.querySelector("html")
        let body = $screen.body

        console.log("html.scrollTop: ",html.scrollTop)
        console.log("body.scrollTop: ",body.scrollTop)

        if(html.scrollTop){
            html.scrollTop = targetTop - offset
        }
        if(body.scrollTop){
            body.scrollTop = targetTop - offset
        }

    }
}

export default hg