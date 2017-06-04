/**
 * Created by Dogfish on 2017/6/4.
 */
import iframe from "../template"

export default {
    nextLink:(element)=>{
        let activedButton = document.querySelector('[data-page-target="chapter-list"] button.is-active')

        let linkStatus = iframe.query(activedButton.innerHTML)
        if(linkStatus && linkStatus.next){
            element.classList.remove("hidden")
            element.setAttribute("data-href",linkStatus.next.link)
            element.innerHTML = "下一篇：" + linkStatus.next.name
        }else{
            element.classList.add("hidden")
        }
    },
    prevLink:(element)=>{
        let activedButton = document.querySelector('[data-page-target="chapter-list"] button.is-active')

        let linkStatus = iframe.query(activedButton.innerHTML)

        if(linkStatus && linkStatus.prev){
            element.classList.remove("hidden")
            element.setAttribute("data-href",linkStatus.prev.link)
            element.innerHTML = "上一篇：" + linkStatus.prev.name
        }else{
            element.classList.add("hidden")
        }
    }

}