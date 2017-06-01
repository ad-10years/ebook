/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hightlight = __webpack_require__(6);

var _hightlight2 = _interopRequireDefault(_hightlight);

var _AttrListener = __webpack_require__(5);

var _AttrListener2 = _interopRequireDefault(_AttrListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//attr listneer
/**
 * Created by Dogfish on 2017/5/22.
 */
var mainAttrListener = new _AttrListener2.default();
function anchorJumping(element, attrVal) {
    //链接内部跳转
    var iframeView = document.getElementById("view");
    var anchorElement = iframeView.contentDocument.getElementById(attrVal);
    gotoView(anchorElement);
    menuSwitch(false);
}
function hrefJumping(element, attrVal) {
    //链接内部跳转
    $("[data-href]").removeClass("is-active");
    $("[data-href=\"" + attrVal + "\"]").addClass("is-active");
    document.getElementById("view").src = attrVal;
    menuSwitch(false);
}
function innerPageJumping(eventTarget, attrVal) {
    $(".page").removeClass("is-active");
    $("[data-page-target=" + attrVal + "]").addClass("is-active");

    $(".title-selector").removeClass("is-active");
    eventTarget.classList.add("is-active");
    menuSwitch(true);
}
function idEventDispatch(eventTarget, id) {
    switch (id) {
        case "#menu":
            menuSwitch();
            break;
        case "":
            break;
        default:
            break;
    }
}
//functional
function getChapterTemplate() {
    var template = "";
    var iframeView = document.getElementById("view");
    // polyfill of webpack ???
    var nodeList = iframeView.contentDocument.body.querySelectorAll("section[data-anchor-trigger]");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Array.prototype.slice.call(nodeList)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var section = _step.value;

            var sectionID = section.getAttribute("data-anchor-trigger");
            var sectionName = section.getAttribute("data-goto-title");
            template += "<li><button data-anchor=\"" + sectionID + "\" class=\" childChapter\">" + sectionName + "</button></li>";
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return template;
}
function menuSwitch(status) {
    var menu = $(".popMenu");
    var menuBUtton = $("#menu .hamburger--collapse");
    if (status === true) {
        menu.addClass("menu-active");
        menuBUtton.addClass("is-active");
    } else if (status === false) {
        menu.removeClass("menu-active");
        menuBUtton.removeClass("is-active");
    } else {
        menu.toggleClass("menu-active");
        menuBUtton.toggleClass("is-active");
    }
}
function iframeContentInitial() {

    var iDoc = document.getElementById("view");

    iDoc.contentDocument.body.addEventListener("click", function (event) {
        mainAttrListener.pushEvent(event.target);
    });
    iDoc.style.height = window.getComputedStyle(iDoc.contentDocument.body).height;
    ///hightlight.listen(iDoc.contentDocument.body)
    _hightlight2.default.listenEx({ scrollBody: iDoc.contentDocument.body, scrollTarget: document.getElementById("view-outer") });
    document.getElementById("chapter-insert").innerHTML = getChapterTemplate();
}
function gotoView($node) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;


    var targetTop = $node.offsetTop;
    var outer = document.getElementById("view-outer");
    $(outer).animate({ scrollTop: targetTop - offset }, 1000);
    // outer.scrollTop = targetTop - offset
}
//initial

(function main() {
    mainAttrListener.add("data-page", innerPageJumping);
    mainAttrListener.add("data-href", hrefJumping);
    mainAttrListener.add("data-anchor", anchorJumping);
    mainAttrListener.add("id", idEventDispatch);

    document.getElementById("view").onload = iframeContentInitial;
    document.addEventListener("click", function (event) {
        mainAttrListener.pushEvent(event.target);
    });
})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Dogfish on 2017/5/22.
 */
__webpack_require__(1);
__webpack_require__(0);

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(7);

function attrListener() {
    this.attrList = {};
} /**
   * Created by Dogfish on 2017/5/30.
   */
//从某个指定节点开始，一直往上爬取所有注册属性的回调函数，并且执行


attrListener.prototype.pushEvent = function (eventTarget) {
    var sourceElement = eventTarget;

    do {
        for (var attr in this.attrList) {
            if (!eventTarget.hasAttribute(attr)) {
                continue;
            }

            var attrVal = eventTarget.getAttribute(attr);
            if (attrVal) {
                for (var i in this.attrList[attr]) {
                    this.attrList[attr][i](eventTarget, attrVal, sourceElement);
                }
            }
        }
        eventTarget = eventTarget.parentElement;
        if (!eventTarget) {
            return;
        }
    } while (true);
};

attrListener.prototype.add = function (attr, callback) {
    if (!this.attrList.hasOwnProperty(attr)) {
        this.attrList[attr] = [];
    }

    if (!this.attrList[attr].includes(callback)) {
        this.attrList[attr].push(callback);
    }
};

attrListener.prototype.remove = function (attr, callback) {
    if (!attr && !callback) {
        this.attrList = {};
    }
    if (attr && !callback && this.attrList.hasOwnProperty(attr)) {
        delete this.attrList[attr];
    }
};

exports.default = attrListener;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Dogfish on 2017/5/28.
 */

var hg = {
    listenEx: function listenEx(_ref) {
        var _ref$scrollBody = _ref.scrollBody,
            scrollBody = _ref$scrollBody === undefined ? document.body : _ref$scrollBody,
            _ref$scrollTarget = _ref.scrollTarget,
            scrollTarget = _ref$scrollTarget === undefined ? scrollBody : _ref$scrollTarget,
            removeCallback = _ref.removeCallback,
            activeCallback = _ref.activeCallback,
            _ref$triggerAttr = _ref.triggerAttr,
            triggerAttr = _ref$triggerAttr === undefined ? "data-anchor" : _ref$triggerAttr,
            _ref$sectionAttr = _ref.sectionAttr,
            sectionAttr = _ref$sectionAttr === undefined ? "data-anchor-trigger" : _ref$sectionAttr,
            _ref$activeClass = _ref.activeClass,
            activeClass = _ref$activeClass === undefined ? "is-active" : _ref$activeClass;


        var lastedSectionID = void 0;
        scrollTarget.onscroll = function () {
            var currentScroll = scrollTarget.scrollTop;
            //定位偏移
            var locatedOffset = 150;
            var currentSection = void 0;
            //评估
            var queryResult = scrollBody.querySelectorAll("[" + sectionAttr + "]");
            for (var i in queryResult) {
                var $el = queryResult[i];
                if (!($el.offsetTop - locatedOffset < currentScroll)) {
                    break;
                }
                //检测到任意符合当前屏幕位置的，设定其成为当前选中，没有则是最后一个元素作为选中
                currentSection = $el;
            }
            if (!currentSection) {
                return;
            }
            //
            var sectionID = currentSection.getAttribute(sectionAttr);
            //性能优化缓存
            if (sectionID === lastedSectionID) {
                //console.log("cache here:", sectionID)
                return;
            }
            //
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = document.getElementsByTagName("iframe")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var iframe = _step.value;
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = iframe.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + triggerAttr + "]")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var $activedEl = _step4.value;


                            if (typeof removeCallback() === "function") {
                                removeCallback($activedEl);
                            } else {
                                $activedEl.classList.remove(activeClass);
                            }
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }

                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = iframe.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var $triggerEl = _step5.value;


                            if (typeof activeCallback === "function") {

                                activeCallback($triggerEl);
                            } else {
                                $triggerEl.classList.add(activeClass);
                            }
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                _iterator5.return();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = document.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _$activedEl = _step2.value;


                    if (typeof removeCallback === "function") {
                        removeCallback(_$activedEl);
                    } else {
                        _$activedEl.classList.remove(activeClass);
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = document.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _$triggerEl = _step3.value;


                    if (typeof activeCallback === "function") {
                        activeCallback(_$triggerEl);
                    } else {
                        _$triggerEl.classList.add(activeClass);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            lastedSectionID = sectionID;
        };
    },

    listen: function listen(target, removeCallback, addCallback, triggerAttr, sectionAttr, activeClass) {
        if (!target) {
            target = document.body;
        }
        if (!sectionAttr) {
            sectionAttr = "data-anchor-trigger";
        }
        if (!triggerAttr) {
            triggerAttr = "data-anchor";
        }
        if (!activeClass) {
            activeClass = "is-active";
        }
        var lastedSectionID = void 0;
        target.onscroll = function () {
            var currentScroll = target.scrollTop;
            var screenHeight = 200;
            var currentSection = void 0;
            //评估
            var queryResult = target.querySelectorAll("[" + sectionAttr + "]");
            for (var i in queryResult) {
                var $el = queryResult[i];

                if (!($el.offsetTop - screenHeight < currentScroll)) {
                    break;
                }
                currentSection = $el;
            }
            if (!currentSection) {
                return;
            }
            var sectionID = currentSection.getAttribute(sectionAttr);
            if (sectionID === lastedSectionID) {
                console.log("cache here:", sectionID);
                return;
            }
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = document.getElementsByTagName("iframe")[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var iframe = _step6.value;
                    var _iteratorNormalCompletion9 = true;
                    var _didIteratorError9 = false;
                    var _iteratorError9 = undefined;

                    try {
                        for (var _iterator9 = iframe.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]")[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                            var $activedEl = _step9.value;


                            if (typeof removeCallback === "function") {
                                removeCallback($activedEl);
                            } else {
                                $activedEl.classList.remove(activeClass);
                            }
                        }
                    } catch (err) {
                        _didIteratorError9 = true;
                        _iteratorError9 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion9 && _iterator9.return) {
                                _iterator9.return();
                            }
                        } finally {
                            if (_didIteratorError9) {
                                throw _iteratorError9;
                            }
                        }
                    }

                    var _iteratorNormalCompletion10 = true;
                    var _didIteratorError10 = false;
                    var _iteratorError10 = undefined;

                    try {
                        for (var _iterator10 = iframe.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]")[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                            var $triggerEl = _step10.value;


                            if (typeof addCallback === "function") {

                                addCallback($triggerEl);
                            } else {
                                $triggerEl.classList.add(activeClass);
                            }
                        }
                    } catch (err) {
                        _didIteratorError10 = true;
                        _iteratorError10 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion10 && _iterator10.return) {
                                _iterator10.return();
                            }
                        } finally {
                            if (_didIteratorError10) {
                                throw _iteratorError10;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }

            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = document.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]")[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var _$activedEl2 = _step7.value;


                    if (typeof removeCallback === "function") {
                        removeCallback(_$activedEl2);
                    } else {
                        _$activedEl2.classList.remove(activeClass);
                    }
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }

            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = document.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]")[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var _$triggerEl2 = _step8.value;


                    if (typeof addCallback === "function") {
                        addCallback(_$triggerEl2);
                    } else {
                        _$triggerEl2.classList.add(activeClass);
                    }
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            lastedSectionID = sectionID;
        };
    },
    goto: function goto($node, $screen, offset) {

        var targetTop = $node.offsetTop;
        var html = $screen.querySelector("html");
        var body = $screen.body;

        console.log("html.scrollTop: ", html.scrollTop);
        console.log("body.scrollTop: ", body.scrollTop);

        if (html.scrollTop) {
            html.scrollTop = targetTop - offset;
        }
        if (body.scrollTop) {
            body.scrollTop = targetTop - offset;
        }
    }
};

exports.default = hg;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Dogfish on 2017/5/30.
 */
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
            Object.defineProperty(Array.prototype, 'includes', {
                        value: function value(searchElement, fromIndex) {

                                    // 1. Let O be ? ToObject(this value).
                                    if (this == null) {
                                                throw new TypeError('"this" is null or not defined');
                                    }

                                    var o = Object(this);

                                    // 2. Let len be ? ToLength(? Get(O, "length")).
                                    var len = o.length >>> 0;

                                    // 3. If len is 0, return false.
                                    if (len === 0) {
                                                return false;
                                    }

                                    // 4. Let n be ? ToInteger(fromIndex).
                                    //    (If fromIndex is undefined, this step produces the value 0.)
                                    var n = fromIndex | 0;

                                    // 5. If n ≥ 0, then
                                    //  a. Let k be n.
                                    // 6. Else n < 0,
                                    //  a. Let k be len + n.
                                    //  b. If k < 0, let k be 0.
                                    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                                    function sameValueZero(x, y) {
                                                return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
                                    }

                                    // 7. Repeat, while k < len
                                    while (k < len) {
                                                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                                                // b. If SameValueZero(searchElement, elementK) is true, return true.
                                                // c. Increase k by 1.
                                                if (sameValueZero(o[k], searchElement)) {
                                                            return true;
                                                }
                                                k++;
                                    }

                                    // 8. Return false
                                    return false;
                        }
            });
}

/***/ })
/******/ ]);