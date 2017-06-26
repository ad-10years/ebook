/**
 * Created by Dogfish on 2017/6/4.
 */
import functional from "./functional"
import observe from "../observe"

export default {
    initial() {

        functional.clickListen();
        functional.scrollListen();
        functional.parallaxListen();
        functional.chapterGenerator();
        functional.imgLoadListen();
        functional.refitStyle();

        document.getElementById("view-outer").scrollTop = 0;
        observe.emit("iframe-load")
    },
}