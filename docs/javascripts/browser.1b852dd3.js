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

    var iframeView = document.getElementById("view");
    document.getElementById("chapter-insert").innerHTML = getChapterTemplate();
    document.getElementById("view").contentDocument.body.addEventListener("click", function (event) {
        mainAttrListener.pushEvent(event.target);
    });
    _hightlight2.default.listen(iframeView.contentDocument.body);
}
function gotoView($node) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;


    var targetTop = $node.offsetTop;
    var body = document.getElementById("view").contentDocument.body;
    var outer = document.getElementById("view-outer");

    console.log("body.scrollTop: ", body.scrollTop);
    console.log("outer.scrollTop: ", outer.scrollTop);

    if (body.scrollTop) {
        body.scrollTop = targetTop - offset;
    }

    if (outer.scrollTop) {
        outer.scrollTop = targetTop - offset;
    }
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
                        for (var _iterator4 = iframe.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var $activedEl = _step4.value;


                            if (typeof removeCallback === "function") {
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


                            if (typeof addCallback === "function") {

                                addCallback($triggerEl);
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


                    if (typeof addCallback === "function") {
                        addCallback(_$triggerEl);
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