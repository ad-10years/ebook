/**
 * Created by Dogfish on 2017/6/4.
 */
import attrLoader from "../../components/AttrLoader";
import callback from "./functional";

let mainLoader = new attrLoader();

mainLoader.add({attr:"article-nav",val:"next",callback:callback.nextLink})
mainLoader.add({attr:"article-nav",val:"prev",callback:callback.prevLink})

export default mainLoader