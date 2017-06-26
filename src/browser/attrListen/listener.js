/**
 * Created by Dogfish on 2017/6/3.
 */
import attrListener from "../../components/AttrListener"
import ob from "../observe"
import callback from "./functional"
let mainAttrListener = new attrListener()
/*
mainAttrListener.add("data-page",callback.innerPageJumping)
mainAttrListener.add("data-href",callback.hrefJumping )
mainAttrListener.add("data-anchor",callback.anchorJumping)
mainAttrListener.add("id",callback.idEventDispatch)
*/

mainAttrListener.add("data-page",(eventTarget,attrVal)=>{ob.emit("data-page",{eventTarget,attrVal,key:"data-page"})})
mainAttrListener.add("data-href",(eventTarget,attrVal)=>{ob.emit("data-href",{eventTarget,attrVal,key:"data-href"})})
mainAttrListener.add("data-anchor",(eventTarget,attrVal)=>{ob.emit("data-anchor",{eventTarget,attrVal,key:"data-anchor"})})
mainAttrListener.add("id",(eventTarget,attrVal)=>{ob.emit("data-id",{eventTarget,attrVal,key:"id"})})

//根据 class-active 设置 active 状态名，根据class-tag取消/设置同类
mainAttrListener.add("tag-key",(eventTarget,attrVal)=>{callback.activeClass({eventTarget,attrVal,key:"tag-key"})})

export default mainAttrListener