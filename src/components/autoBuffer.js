/**
 * Created by Dogfish on 2017/4/17.
 */

import redo from "./redo"

const compare =  function (CHECK_DATA, ORIGINAL_DATA) {

    var result = true;

    compareFN(CHECK_DATA, ORIGINAL_DATA);
    compareFN(ORIGINAL_DATA, CHECK_DATA);
    function compareFN(CHECK_DATA, ORIGINAL_DATA) {

        for (var key in CHECK_DATA) {
            if (typeof CHECK_DATA[key] === "object") {

                if (ORIGINAL_DATA.hasOwnProperty(key)) {
                    compareFN(CHECK_DATA[key], ORIGINAL_DATA[key]);
                } else {
                    result = false;
                    return;
                }
            }
            else {
                if (ORIGINAL_DATA.hasOwnProperty(key)) {

                    if (ORIGINAL_DATA[key] !== CHECK_DATA[key]) {
                        result = false;
                        return;
                    }
                }
                else {
                    result = false;
                    return;
                }
            }
        }
    }

    return result;

}

function autoBuffer({interval,callback},that) {
    this.interval = interval?interval:40
    this._callback = callback?callback:()=>{}
    this._needUpdate = false
    this._store = {}
    this._retry = new redo();
    let _this = this
    if(!that){that = this}
    this._autoBufferFN = function(){
        if(_this._needUpdate){
            _this._callback.call(that,_this._store)
            _this._needUpdate = false
        }
    }
}

autoBuffer.prototype.startBuffer = function(){
    this._retry.retryTime = this.interval
    this._retry.start(this._autoBufferFN)
}

autoBuffer.prototype.updateBuffer = function(newData){
    if(!compare(newData,this._store)){
        this._needUpdate = true
        this._store = newData
    }
}

autoBuffer.prototype.stopBuffer = function(){
    this._needUpdate = false
    this._retry.end()
}

export default autoBuffer

