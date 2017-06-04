/**
 * Created by Dogfish on 2017/6/3.
 */
import attrListener from "../../components/AttrListener"
import callback from "./functional";

let mainAttrListener = new attrListener()

mainAttrListener.add("data-page",callback.innerPageJumping)
mainAttrListener.add("data-href",callback.hrefJumping )
mainAttrListener.add("data-anchor",callback.anchorJumping)
mainAttrListener.add("id",callback.idEventDispatch)

export default mainAttrListener