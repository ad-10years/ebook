/**
 * Created by Dogfish on 2017/5/28.
 */

let hg = {
    listenEx: function ({
                            scrollBody = document.body,
                            scrollTarget = scrollBody,
                            removeCallback, activeCallback,
                            triggerAttr = "data-anchor",
                            sectionAttr = "data-anchor-trigger",
                            activeClass = "is-active"
    }) {

        let lastedSectionID;
        scrollTarget.onscroll = function () {
            let currentScroll = scrollTarget.scrollTop
            //定位偏移
            let locatedOffset = 150
            let currentSection;
            //评估
            let queryResult = scrollBody.querySelectorAll("[" + sectionAttr + "]")
            for (let i in queryResult) {
                let $el = queryResult[i]
                if (!($el.offsetTop - locatedOffset < currentScroll)) {
                    break
                }
                //检测到任意符合当前屏幕位置的，设定其成为当前选中，没有则是最后一个元素作为选中
                currentSection = $el
            }
            if (!currentSection) {
                return
            }
            //
            let sectionID = currentSection.getAttribute(sectionAttr)
            //性能优化缓存
            if (sectionID === lastedSectionID) {
                //console.log("cache here:", sectionID)
                return
            }
            //
            for (let iframe of Array.prototype.slice.call(document.getElementsByTagName("iframe"))) {
                for (let $activedEl of Array.prototype.slice.call(iframe.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + triggerAttr + "]"))) {

                    if (typeof removeCallback() === "function") {
                        removeCallback($activedEl)
                    } else {
                        $activedEl.classList.remove(activeClass)
                    }
                }
                for (let $triggerEl of Array.prototype.slice.call(iframe.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]"))) {

                    if (typeof activeCallback === "function") {

                        activeCallback($triggerEl)
                    } else {
                        $triggerEl.classList.add(activeClass)
                    }
                }
            }

            for (let $activedEl of Array.prototype.slice.call(document.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]"))) {


                if (typeof removeCallback === "function") {
                    removeCallback($activedEl)
                } else {
                    $activedEl.classList.remove(activeClass)
                }
            }

            for (let $triggerEl of Array.prototype.slice.call(document.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]"))) {

                if (typeof activeCallback === "function") {
                    activeCallback($triggerEl)
                } else {
                    $triggerEl.classList.add(activeClass)
                }
            }
            lastedSectionID = sectionID;
        }
    },

    listen: function (target, removeCallback, addCallback, triggerAttr, sectionAttr, activeClass) {
        if (!target) {
            target = document.body
        }
        if (!sectionAttr) {
            sectionAttr = "data-anchor-trigger"
        }
        if (!triggerAttr) {
            triggerAttr = "data-anchor"
        }
        if (!activeClass) {
            activeClass = "is-active"
        }
        let lastedSectionID
        target.onscroll = function () {
            let currentScroll = target.scrollTop
            let screenHeight = 200
            let currentSection;
            //评估
            let queryResult = target.querySelectorAll("[" + sectionAttr + "]")
            for (let i in queryResult) {
                let $el = queryResult[i]

                if (!($el.offsetTop - screenHeight < currentScroll)) {
                    break
                }
                currentSection = $el
            }
            if (!currentSection) {
                return
            }
            let sectionID = currentSection.getAttribute(sectionAttr)
            if (sectionID === lastedSectionID) {
                console.log("cache here:", sectionID)
                return
            }
            for (let iframe of Array.prototype.slice.call(document.getElementsByTagName("iframe"))) {
                for (let $activedEl of Array.prototype.slice.call(iframe.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]"))) {

                    if (typeof removeCallback === "function") {
                        removeCallback($activedEl)
                    } else {
                        $activedEl.classList.remove(activeClass)
                    }
                }
                for (let $triggerEl of Array.prototype.slice.call(iframe.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]"))) {

                    if (typeof addCallback === "function") {

                        addCallback($triggerEl)
                    } else {
                        $triggerEl.classList.add(activeClass)
                    }
                }
            }

            for (let $activedEl of Array.prototype.slice.call(document.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]"))) {


                if (typeof removeCallback === "function") {
                    removeCallback($activedEl)
                } else {
                    $activedEl.classList.remove(activeClass)
                }
            }

            for (let $triggerEl of Array.prototype.slice.call(document.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]"))) {

                if (typeof addCallback === "function") {
                    addCallback($triggerEl)
                } else {
                    $triggerEl.classList.add(activeClass)
                }
            }
            lastedSectionID = sectionID;
        }
    },
    goto: function ($node, $screen, offset) {

        let targetTop = $node.offsetTop;
        let html = $screen.querySelector("html")
        let body = $screen.body

        console.log("html.scrollTop: ", html.scrollTop)
        console.log("body.scrollTop: ", body.scrollTop)

        if (html.scrollTop) {
            html.scrollTop = targetTop - offset
        }
        if (body.scrollTop) {
            body.scrollTop = targetTop - offset
        }

    }
}

export default hg