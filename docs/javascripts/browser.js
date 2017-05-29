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


var _DOMtracker = __webpack_require__(5);

var _DOMtracker2 = _interopRequireDefault(_DOMtracker);

var _hightlight = __webpack_require__(6);

var _hightlight2 = _interopRequireDefault(_hightlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Dogfish on 2017/5/22.
 */

var iframeView = document.getElementById("view");
var $iframe = $("#view").contents();

document.addEventListener("click", function (event) {
    var id = _DOMtracker2.default.getValByAttr("id", event.target);
    var elNode = void 0;
    if (id) {
        switch (id) {
            case "menu":
                menuSwitch();
                break;
            case "":
                break;
            default:
                break;

        }
    }

    elNode = _DOMtracker2.default.getNodeByAttr("data-goto-target", event.target);
    //链接内部跳转
    if (elNode) {
        //iframeView.contentDocument.getElementById(elNode.getAttribute("data-goto-target")).scrollIntoView()
        //iframeView.contentDocument.body.scrollTop -=150
        var targetEl = iframeView.contentDocument.getElementById(elNode.getAttribute("data-goto-target"));
        _hightlight2.default.goto(targetEl, iframeView.contentDocument.body, 150);
        //let elID = elNode.getAttribute("data-goto-target")
        //console.log("set height to ",$iframe)
        //$iframe.find("body").animate({scrollTop:$iframe.find("#" + elID).scrollTop() - 300},800);
        menuSwitch(false);
    }

    //链接页面跳转检测
    linkTo(event.target);

    //内部page切换检测
    elNode = _DOMtracker2.default.getNodeByAttr("data-page", event.target);
    if (elNode) {
        var dataPage = elNode.getAttribute("data-page");
        $(".page").removeClass("is-active");
        $("[data-page-target=" + dataPage + "]").addClass("is-active");

        $(".title-selector").removeClass("is-active");
        elNode.classList.add("is-active");
    }
});
iframeView.onload = function () {
    _hightlight2.default.listen(iframeView.contentDocument.body);
    chapterGenerate();
    iframeView.contentDocument.body.addEventListener("click", function (event) {
        //链接页面跳转检测
        linkTo(event.target);
    });
};
function chapterGenerate() {
    var insertPoint = document.querySelector("#chapter-insert");
    var template = "";

    var nodeList = iframeView.contentDocument.body.querySelectorAll("section[data-goto-trigger]");
    // add this line.
    nodeList = Array.prototype.slice.call(nodeList);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = nodeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var section = _step.value;

            var sectionID = section.getAttribute("data-goto-trigger");
            var sectionName = section.getAttribute("data-goto-title");
            template += "<li><button data-goto-target=\"" + sectionID + "\" class=\" childChapter\">" + sectionName + "</button></li>";
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

    insertPoint.innerHTML = template;
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
function linkTo(checkPoint) {
    var elNode = _DOMtracker2.default.getNodeByAttr("data-link", checkPoint);
    if (elNode) {
        iframeView.src = elNode.getAttribute("data-link");
        menuSwitch(false);
    }
}

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
/**
 * Created by Dogfish on 2017/4/23.
 */
exports.default = {
    getNodeByAttr: function getNodeByAttr(attr, sourceElement) {
        if (typeof sourceElement === "string") {
            sourceElement = document.getElementById(sourceElement);
        }

        var attrVal = sourceElement.getAttribute(attr);
        if (attrVal) {
            return sourceElement;
        }

        do {
            sourceElement = sourceElement.parentElement;
            if (!sourceElement) {
                return;
            }
            attrVal = sourceElement.getAttribute(attr);
        } while (attrVal === null);

        return sourceElement;
    },
    //返回最近的属性值
    getValByAttr: function getValByAttr(attr, sourceElement) {
        if (typeof sourceElement === "string") {
            sourceElement = document.getElementById(sourceElement);
        }
        var attrVal = sourceElement.getAttribute(attr);
        if (attrVal) {
            return attrVal;
        }
        do {
            sourceElement = sourceElement.parentElement;
            if (!sourceElement) {
                return attrVal;
            }
            attrVal = sourceElement.getAttribute(attr);
        } while (attrVal === null);

        return attrVal;
    }
};

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
            sectionAttr = "data-goto-trigger";
        }
        if (!triggerAttr) {
            triggerAttr = "data-goto-target";
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
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = target.querySelectorAll("[" + sectionAttr + "]")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var $el = _step.value;

                    if (!($el.offsetTop - screenHeight < currentScroll)) {
                        break;
                    }
                    currentSection = $el;
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

            if (!currentSection) {
                return;
            }
            var sectionID = currentSection.getAttribute(sectionAttr);
            if (sectionID === lastedSectionID) {
                console.log("cache here:", sectionID);
                return;
            }
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = document.getElementsByTagName("iframe")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var iframe = _step2.value;
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = iframe.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var $activedEl = _step5.value;


                            if (typeof removeCallback === "function") {
                                removeCallback($activedEl);
                            } else {
                                $activedEl.classList.remove(activeClass);
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

                    var _iteratorNormalCompletion6 = true;
                    var _didIteratorError6 = false;
                    var _iteratorError6 = undefined;

                    try {
                        for (var _iterator6 = iframe.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]")[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                            var $triggerEl = _step6.value;


                            if (typeof addCallback === "function") {

                                addCallback($triggerEl);
                            } else {
                                $triggerEl.classList.add(activeClass);
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
                for (var _iterator3 = document.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _$activedEl = _step3.value;


                    if (typeof removeCallback === "function") {
                        removeCallback(_$activedEl);
                    } else {
                        _$activedEl.classList.remove(activeClass);
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

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = document.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _$triggerEl = _step4.value;


                    if (typeof addCallback === "function") {
                        addCallback(_$triggerEl);
                    } else {
                        _$triggerEl.classList.add(activeClass);
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

            lastedSectionID = sectionID;
        };
    },
    goto: function goto($node, $screen, offset) {
        var targetTop = $node.offsetTop;
        $screen.scrollTop = targetTop - offset;
    }
};

exports.default = hg;

/***/ })
/******/ ]);