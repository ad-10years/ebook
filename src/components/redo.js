/**
 * Created by Dogfish on 2017/4/17.
 */
function redo() {
    this.callFunction = undefined;
    this.timerID = undefined;
    this.retryTime = 3000;
    this.enable = false;
    this.retryTimes = 0;
}
redo.prototype.start = function (callFunction, replace) {
    if (typeof callFunction !== "function") {
        return
    }
    if (typeof replace !== "boolean") {
        replace = false
    }
    if (!replace && this.callFunction === callFunction) {
        return
    }
    //清除原有的
    window.clearTimeout(this.timerID);
    this.callFunction = callFunction;
    this.timerID = undefined;
    this.enable = true;
    this.runner();
};
redo.prototype.runner = function () {
    var that = this;
    var runnerFN = function () {
        if (that.enable) {
            that.retryTimes++;
            that.callFunction();
            that.runner();
        }
    };
    that.timerID = window.setTimeout(runnerFN, that.retryTime);
};
redo.prototype.end = function (callFunction) {
    if (callFunction !== this.callFunction) {
        return
    }
    window.clearTimeout(this.timerID);
    this.callFunction = undefined;
    this.timerID = undefined;
    this.retryTimes = 0;

    this.enable = false
};

export default redo