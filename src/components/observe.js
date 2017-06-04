    function observe() {
        this.eventList = {}
    }
    observe.prototype.on = function (event, fn, {zIndex = 0, id = ""} = {}) {
        if (!this.eventList.hasOwnProperty(event)) {
            this.eventList[event] = [];
        }

        if (typeof  fn !== "function") {
            return
        }

        if (!this.eventList[event].includes(fn)) {
            this.eventList[event].push({fn, zIndex, id})
        }
    }
    observe.prototype.remove = function (event, {fn, id, zIndex} = {}) {

        let removeLog = []

        if (!fn && !id && !zIndex) {
            if (this.eventList.hasOwnProperty(event)) this.eventList[event] = []
            return
        }

        for (let i in this.eventList[event]) {

            if (this.eventList[event][i].fn === fn) {
                removeLog.push(i)
                continue
            }
            if (this.eventList[event][i].id === id) {
                removeLog.push(i)
                continue
            }

            if (this.eventList[event][i].zIndex === zIndex) {
                removeLog.push(i)
                continue
            }
        }

        for (let i in removeLog) {
            this.eventList[event].splice(removeLog[i], 1)
        }

    }
    observe.prototype.emit = function (event, arg) {
        if (!this.eventList.hasOwnProperty(event)) {
            return
        }
        let next = () => {
        }
        this.eventList[event].forEach(function (act) {
            act.fn(arg, next)
        })
    }
    observe.prototype.emitByStep = function (event, arg, {blackList = [], whiteList = []} = {}) {

        if (!this.eventList.hasOwnProperty(event)) {
            return
        }
        let that = this;
        let currentIndex = -1
        let sortedArr = [];

        sortedArr = quickSort(this.eventList[event], "zIndex");

        nextStep();
        function nextStep(arg) {
            currentIndex++
            if (sortedArr.length <= currentIndex) {
                return
            }

            if (!whiteList.includes(sortedArr[currentIndex].id) && whiteList.length !== 0) {
                nextStep();
                return
            }

            if (blackList.includes(sortedArr[currentIndex].id)) {
                nextStep();
                return
            }

            sortedArr[currentIndex].fn(arg, nextStep)
        }

        function quickSort(arr, attr) {

            var len = arr.length;
            if (len <= 1)
                return arr.slice(0);
            var left = [];
            var right = [];
            var mid = [arr[0]];
            for (var i = 1; i < len; i++) {
                if (arr[i][attr] < mid[0][attr])
                    left.push(arr[i]);
                else
                    right.push(arr[i]);
            }

            return quickSort(left).concat(mid.concat(quickSort(right)));
        };
    }
	
	export default observe
