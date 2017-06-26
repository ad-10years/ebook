/**
 * Created by Dogfish on 2017/5/22.
 */
import observe from "./observe"
import modLoaderStep from "../components/moduleLoaderStep"
import iframe from "./iframe/iframe"
import template from  "./template"
import pushAttrEvent from "./attrListen/listener"
import attrLoader from "./attrLoader/attrLoader"
import attrListenCallback from "./attrListen/functional"

(function loadingStart() {
    modLoaderStep([
            [{name:"jquery",link:"https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js",type:"js"}],
            //[{name:"materializeJs",link:"https://cdn.bootcss.com/materialize/0.98.2/js/materialize.min.js",type:"js"},]
        ], moduleOnload, main)
    function moduleOnload(count,total,name,type,link) {
        observe.emit("module-load",{count,total,name,type,link})
        console.log(count+"/"+total+" loaded[" + name + "] type:"+ type +" link:"+link)
    }
    function main() {

        observe.on("initial",initial)

        observe.on("iframe-load",()=>{attrLoader.exec()});

        observe.on("data-href",attrListenCallback.hrefJumping)
        observe.on("data-href",attrListenCallback.loadHrefTitle)

        observe.on("data-page",attrListenCallback.innerPageJumping)
        observe.on("data-anchor",attrListenCallback.anchorJumping)
        observe.on("data-id",attrListenCallback.idEventDispatch)
        observe.on("class-active",attrListenCallback.activeClass)

        observe.emit("initial")
    }

    function initial() {

            document.querySelector("[data-append=all-chapter]").innerHTML = template.get()
            document.querySelector("[data-append=all-chapter] button").classList.add("is-active")
            iframe.initial();
            document.getElementById("view").addEventListener("load", iframe.initial)
            document.addEventListener("click", (event)=>{pushAttrEvent.pushEvent(event.target)})

    }
})()



