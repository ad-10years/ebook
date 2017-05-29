/**
 * Created by Dogfish on 2017/4/23.
 */
export default {
    getNodeByAttr:(attr,sourceElement)=>{
        if (typeof sourceElement === "string") {
            sourceElement = document.getElementById(sourceElement)
        }

        let attrVal = sourceElement.getAttribute(attr)
        if (attrVal) {
            return sourceElement
        }

        do {
            sourceElement = sourceElement.parentElement;
            if (!sourceElement) {
                return
            }
            attrVal = sourceElement.getAttribute(attr);
        } while (attrVal === null)

        return sourceElement
    },
    //返回最近的属性值
    getValByAttr : (attr, sourceElement) => {
        if (typeof sourceElement === "string") {
            sourceElement = document.getElementById(sourceElement)
        }
        let attrVal = sourceElement.getAttribute(attr)
        if (attrVal) {
            return attrVal
        }
        do {
            sourceElement = sourceElement.parentElement;
            if (!sourceElement) {
                return attrVal
            }
            attrVal = sourceElement.getAttribute(attr);
        } while (attrVal === null)

        return attrVal
    },
}