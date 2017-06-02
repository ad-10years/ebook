/**
 * Created by Dogfish on 2017/6/2.
 */
import moduleLoader from "./moduleLoader"

function moduleLoaderStep(list,onload,complete) {
    let current = -1
    nextCall()

    function nextCall() {
        current ++
        console.log("--section loaded--")

        if(list.length > current){
            loadModule(list[current])
        }else{
            complete()
            console.log("--section loaded end--")
        }
    }

    function loadModule(list) {
        let loader = new moduleLoader()
        loader.complete = nextCall
        loader.onload = onload
        loader.loadList(list)
    }
}

export default moduleLoaderStep