/**
 * Created by Dogfish on 2017/6/4.
 */
import iframe from "../template"
let pathCollection = ["../../assets/image/","../assets/image/"]
let remotePath = "http://oocd4kz4f.bkt.clouddn.com/";
let c = "@$%%$@"

export default {
    nextLink:(element)=>{
        let activedButton = document.querySelector('[data-page-target="chapter-list"] button.is-active')

        let linkStatus = iframe.query(activedButton.innerHTML)
        if(linkStatus && linkStatus.next){
            element.classList.remove("hidden")
            element.setAttribute("data-href",linkStatus.next.link)
            element.innerHTML = "下一篇 -" + linkStatus.next.name
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
            element.innerHTML = "上一篇 - " + linkStatus.prev.name
        }else{
            element.classList.add("hidden")
        }
    },
    dynamicSrc(element){
        if(element.tagName.toLowerCase() !== "img"){return}
        let elSrc = element.getAttribute("src")
        for(let imgBasePath of pathCollection){
            let regex = new RegExp(imgBasePath)
            if(!regex.test(elSrc)){continue}
            let src = elSrc.replace(imgBasePath,c).replace(/\//g,"-").replace(c,remotePath)
            element.setAttribute("src",src)
            break
        }
    },
    dynamicImglink(element){
        let elSrc = element.getAttribute("img-link")
        for(let imgBasePath of pathCollection){
            let regex = new RegExp(imgBasePath)
            if(!regex.test(elSrc)){continue}
            let src = elSrc.replace(imgBasePath,c).replace(/\//g,"-").replace(c,remotePath)
            element.setAttribute("img-link",src)
            break
        }
    }
}