/**
 * Created by Dogfish on 2017/6/3.
 */
import attrListener from "../../components/AttrListener"
import ob from "../observe"

let mainAttrListener = new attrListener()
/*
mainAttrListener.add("data-page",callback.innerPageJumping)
mainAttrListener.add("data-href",callback.hrefJumping )
mainAttrListener.add("data-anchor",callback.anchorJumping)
mainAttrListener.add("id",callback.idEventDispatch)
*/

mainAttrListener.add("data-page",(eventTarget,attrVal)=>{ob.emit("data-page",{eventTarget,attrVal})})
mainAttrListener.add("data-href",(eventTarget,attrVal)=>{ob.emit("data-href",{eventTarget,attrVal})})
mainAttrListener.add("data-anchor",(eventTarget,attrVal)=>{ob.emit("data-anchor",{eventTarget,attrVal})})
mainAttrListener.add("id",(eventTarget,attrVal)=>{ob.emit("data-id",{eventTarget,attrVal})})

export default mainAttrListener