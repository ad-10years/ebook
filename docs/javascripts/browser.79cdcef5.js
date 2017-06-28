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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _observe = __webpack_require__(22);

var _observe2 = _interopRequireDefault(_observe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var observe = new _observe2.default(); /**
                                        * Created by Dogfish on 2017/6/3.
                                        */
exports.default = observe;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Dogfish on 2017/6/2.
 *
 */
var CHAPTER = 0;
var CHILD_CHAPTER = 1;

var bookListData = [{
    name: "-", type: CHAPTER,
    link: ""
}, {
    name: "开始", type: CHILD_CHAPTER,
    link: "./contents/起/封面.html"
}, {
    name: "目录", type: CHILD_CHAPTER,
    link: "./contents/contents.html"
}, {
    name: "起·舞弄清影", type: CHAPTER,
    link: ""
}, {
    name: "起·舞弄清影-导语", type: CHILD_CHAPTER,
    link: "./contents/起/导语.html"
}, {
    name: "十年一觉广告梦", type: CHILD_CHAPTER,
    link: "./contents/起/十年一觉广告梦.html"
},

//承·恩雨露流

{
    name: "承·恩雨露流", type: CHAPTER,
    link: ""
}, {
    name: "承·恩雨露流-导语", type: CHILD_CHAPTER,
    link: "./contents/承/导语.html"
}, {
    name: "沈伟：一桥筑梦初心显", type: CHILD_CHAPTER,
    link: "./contents/承/沈伟采访.html"
}, {
    name: "周燕：喜欢才会坚持", type: CHILD_CHAPTER,
    link: "./contents/承/周燕采访.html"
}, {
    name: "钟旭：多去涉猎知识", type: CHILD_CHAPTER,
    link: "./contents/承/钟旭采访.html"
},

//转·眼光阴暑渐除

{
    name: "转·眼光阴暑渐消", type: CHAPTER,
    link: ""
}, {
    name: "转·眼光阴暑渐消-导语", type: CHILD_CHAPTER,
    link: "./contents/转/导语.html"
}, {
    name: "采访：陈汉", type: CHILD_CHAPTER,
    link: "./contents/转/陈汉.html"
}, {
    name: "采访：胡倩苑", type: CHILD_CHAPTER,
    link: "./contents/转/胡倩苑.html"
}, {
    name: "采访：黄汇东", type: CHILD_CHAPTER,
    link: "./contents/转/黄汇东.html"
}, {
    name: "采访：虞晨", type: CHILD_CHAPTER,
    link: "./contents/转/虞晨.html"
}, {
    name: "采访：陈国濠", type: CHILD_CHAPTER,
    link: "./contents/转/陈国濠.html"
},
//合·睦此生乐百年
{
    name: "合·睦此生乐百年", type: CHAPTER,
    link: ""
}, {
    name: "合睦此生乐百年-导语", type: CHILD_CHAPTER,
    link: "./contents/合/导语.html"
}, {
    name: "历届优秀作品·平面类", type: CHILD_CHAPTER,
    link: "./contents/合/历届优秀作品·平面类.html"
}, {
    name: "历届优秀作品·策划类", type: CHILD_CHAPTER,
    link: "./contents/合/历届优秀作品·策划类.html"
}, {
    name: "历届优秀作品·视频类", type: CHILD_CHAPTER,
    link: "./contents/合/历届优秀作品·视频类.html"
}, {
    name: "广告我爱你！", type: CHILD_CHAPTER,
    link: "./contents/合/广告我爱你.html"
}];
var buttonTemplate = "<li><button data-href=\"%LINK%\">%NAME%</button></li>";
var wrapperTemplate = "<div class=\"chapter-wrapper\">\n                        <div class=\"col s12 mainText\">\n                            <h1>%TITLE%</h1>\n                        </div>\n                        <div class=\"col s12 links\">\n                            <ul class=\"section links-inner\">\n                                %BUTTONS_TEMPLATE%\n                            </ul>\n                        </div>\n                    </div>";

exports.default = {
    get: function get() {
        //总分类记录器
        var currentLink = void 0,
            sortedList = {};
        //分类排序，创建结构
        for (var i in bookListData) {
            var chapter = bookListData[i];

            if (chapter.type === CHAPTER) {
                currentLink = chapter.name;
                if (!sortedList.hasOwnProperty(currentLink)) {
                    sortedList[currentLink] = {};
                    sortedList[currentLink].name = chapter.name;
                    sortedList[currentLink].link = chapter.link;
                    sortedList[currentLink].contents = [];
                }
            }

            if (currentLink && chapter.type === CHILD_CHAPTER && sortedList.hasOwnProperty(currentLink)) {
                sortedList[currentLink].contents.push(chapter);
            }
        }

        //根据结构创建模板
        var outputTemplate = "";
        for (var _i in sortedList) {
            //  大分类目录
            var currentChildButtonsTemplate = "";
            var _chapter = sortedList[_i];

            for (var j in _chapter.contents) {
                var childChapter = _chapter.contents[j];
                // 子目录
                currentChildButtonsTemplate += getButtonTemplate(childChapter.link, childChapter.name);
            }
            outputTemplate += getWrapperTemplate(_chapter.name, currentChildButtonsTemplate);
        }

        return outputTemplate;

        function getButtonTemplate(link, name) {
            return buttonTemplate.replace(/%LINK%/g, link).replace(/%NAME%/g, name);
        }

        function getWrapperTemplate(title, buttons) {
            return wrapperTemplate.replace(/%TITLE%/g, title).replace(/%BUTTONS_TEMPLATE%/g, buttons);
        }
    },
    query: function query(key) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "name";

        var next = void 0,
            prev = void 0,
            parent = void 0;
        for (var i = 0; i < bookListData.length; i++) {
            var chapter = bookListData[i];
            if (chapter.type === CHAPTER) {
                parent = chapter;
            }
            if (chapter[type] === key) {

                if (bookListData.length > 1 && i !== bookListData.length - 1) {
                    for (var j = i + 1; j < bookListData.length; j++) {
                        var _chapter2 = bookListData[j];
                        if (_chapter2.type === CHILD_CHAPTER) {
                            next = _chapter2;
                            break;
                        }
                    }
                }

                if (bookListData.length > 1 && i !== 0) {
                    for (var _j = i - 1; _j > 0; _j--) {
                        var _chapter3 = bookListData[_j];
                        if (_chapter3.type === CHILD_CHAPTER) {
                            prev = _chapter3;
                            break;
                        }
                    }
                }
                return { current: chapter, next: next, prev: prev, parent: parent };
            }
        }
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _template = __webpack_require__(1);

var _template2 = _interopRequireDefault(_template);

var _DOMtracker = __webpack_require__(17);

var _DOMtracker2 = _interopRequireDefault(_DOMtracker);

var _functional = __webpack_require__(4);

var _functional2 = _interopRequireDefault(_functional);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function menuSwitch(status) {
    var menu = $(".popMenu");
    var menuButton = $(".hamburger--collapse");
    if (status === true) {
        menu.addClass("menu-active");
        menuButton.addClass("is-active");
    } else if (status === false) {
        menu.removeClass("menu-active");
        menuButton.removeClass("is-active");
    } else {
        menu.toggleClass("menu-active");
        menuButton.toggleClass("is-active");
    }
} /**
   * Created by Dogfish on 2017/6/4.
   */


function gotoView($node) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;


    var targetTop = $node.offsetTop;
    var outer = document.getElementById("view-outer");
    $(outer).animate({ scrollTop: targetTop - offset }, 1000);
    // outer.scrollTop = targetTop - offset
}

exports.default = {
    anchorJumping: function anchorJumping(_ref) {
        var element = _ref.element,
            attrVal = _ref.attrVal;

        //链接内部跳转
        var iframeView = document.getElementById("view");
        var anchorElement = iframeView.contentDocument.getElementById(attrVal);
        gotoView(anchorElement);
        menuSwitch(false);
    },
    hrefJumping: function hrefJumping(_ref2) {
        var element = _ref2.element,
            attrVal = _ref2.attrVal;

        //链接内部跳转
        $("[data-href]").removeClass("is-active");
        $("[data-href=\"" + attrVal + "\"]").addClass("is-active");

        document.getElementById("view").src = attrVal;
        menuSwitch(false);
    },
    innerPageJumping: function innerPageJumping(_ref3) {
        var eventTarget = _ref3.eventTarget,
            attrVal = _ref3.attrVal;

        $(".page").removeClass("is-active");
        $("[data-page-target=" + attrVal + "]").addClass("is-active");

        $(".title-selector").removeClass("is-active");
        eventTarget.classList.add("is-active");
        menuSwitch(true);

        //特殊页面的处理，例如跳转章节页面后，滚动到指定的激活位置
        switch (attrVal) {
            case "chapter-list":
                var node = _DOMtracker2.default.getNodeByAttr("class", document.querySelector("[data-append=all-chapter] button.is-active"), "chapter-wrapper");
                if (node) {
                    document.querySelector('[data-page-target=chapter-list]').scrollTop = node.offsetTop + 100;
                }
                break;
            default:
                break;
        }
    },
    loadHrefTitle: function loadHrefTitle(_ref4) {
        var eventTarget = _ref4.eventTarget,
            attrVal = _ref4.attrVal;

        var content = _template2.default.query(attrVal, "link");
        document.getElementById("chapter-child-title").innerText = content.current.name;
        document.getElementById("chapter-title").innerText = content.parent.name;
    },
    idEventDispatch: function idEventDispatch(_ref5) {
        var eventTarget = _ref5.eventTarget,
            attrVal = _ref5.attrVal;

        switch (attrVal) {
            case "#menu":
                menuSwitch();
                if ($(".popMenu").hasClass("menu-active")) {
                    document.body.querySelector('[data-page=chapter-content]').click();
                }
                break;
            case "":
                break;
            default:
                break;
        }
    },
    activeClass: function activeClass(_ref6) {
        var eventTarget = _ref6.eventTarget,
            attrVal = _ref6.attrVal,
            key = _ref6.key;

        var view = $("#view").contents();
        var tagKey = attrVal;
        //自己所属的标记
        var removeSelector = eventTarget.getAttribute("tag-remove");
        if (removeSelector) {
            $(removeSelector).removeClass(tagKey);
            view.find(removeSelector).removeClass(tagKey);
        }

        var addSelector = eventTarget.getAttribute("tag-add");
        if (addSelector) {
            $(addSelector).addClass(tagKey);
            view.find(addSelector).addClass(tagKey);
        }

        _functional2.default.refitStyle();
    },
    activePage: function activePage(_ref7) {
        var eventTarget = _ref7.eventTarget,
            attrVal = _ref7.attrVal,
            key = _ref7.key;
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AttrListener = __webpack_require__(15);

var _AttrListener2 = _interopRequireDefault(_AttrListener);

var _observe = __webpack_require__(0);

var _observe2 = _interopRequireDefault(_observe);

var _functional = __webpack_require__(2);

var _functional2 = _interopRequireDefault(_functional);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainAttrListener = new _AttrListener2.default();
/*
mainAttrListener.add("data-page",callback.innerPageJumping)
mainAttrListener.add("data-href",callback.hrefJumping )
mainAttrListener.add("data-anchor",callback.anchorJumping)
mainAttrListener.add("id",callback.idEventDispatch)
*/

/**
 * Created by Dogfish on 2017/6/3.
 */
mainAttrListener.add("data-page", function (eventTarget, attrVal) {
  _observe2.default.emit("data-page", { eventTarget: eventTarget, attrVal: attrVal, key: "data-page" });
});
mainAttrListener.add("data-href", function (eventTarget, attrVal) {
  _observe2.default.emit("data-href", { eventTarget: eventTarget, attrVal: attrVal, key: "data-href" });
});
mainAttrListener.add("data-anchor", function (eventTarget, attrVal) {
  _observe2.default.emit("data-anchor", { eventTarget: eventTarget, attrVal: attrVal, key: "data-anchor" });
});
mainAttrListener.add("id", function (eventTarget, attrVal) {
  _observe2.default.emit("data-id", { eventTarget: eventTarget, attrVal: attrVal, key: "id" });
});

//根据 class-active 设置 active 状态名，根据class-tag取消/设置同类
mainAttrListener.add("tag-key", function (eventTarget, attrVal) {
  _functional2.default.activeClass({ eventTarget: eventTarget, attrVal: attrVal, key: "tag-key" });
});

exports.default = mainAttrListener;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hightlight = __webpack_require__(19);

var _hightlight2 = _interopRequireDefault(_hightlight);

var _listener = __webpack_require__(3);

var _listener2 = _interopRequireDefault(_listener);

var _parallaxScroll = __webpack_require__(13);

var _parallaxScroll2 = _interopRequireDefault(_parallaxScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var view = document.getElementById("view"); /**
                                             * Created by Dogfish on 2017/6/25.
                                             */

exports.default = {
    clickListen: function clickListen() {
        var viewDocBody = view.contentDocument.body;
        if (viewDocBody) {
            //点击监听
            viewDocBody.addEventListener("click", function (event) {
                _listener2.default.pushEvent(event.target);
            });
        }
    },
    scrollListen: function scrollListen() {
        var viewDocBody = view.contentDocument.body;
        if (viewDocBody) {
            //点击监听
            _hightlight2.default.listenEx({ scrollBody: viewDocBody, scrollTarget: document.getElementById("view-outer") });
        }
    },
    parallaxListen: function parallaxListen() {
        var viewDocBody = view.contentDocument.body;
        _parallaxScroll2.default.initial(viewDocBody, document.getElementById("view-outer"));
    },
    imgLoadListen: function imgLoadListen() {
        var viewDocBody = view.contentDocument.body;
        viewDocBody.querySelectorAll("img");

        var nodeList = viewDocBody.querySelectorAll("img");
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Array.prototype.slice.call(nodeList)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var img = _step.value;

                img.onload = function () {
                    view.style.height = window.getComputedStyle(viewDocBody).height;
                };
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
    },
    chapterGenerator: function chapterGenerator() {
        var viewDocBody = view.contentDocument.body;
        var template = "";
        // polyfill of webpack ???
        var nodeList = viewDocBody.querySelectorAll("section[data-anchor-trigger]");
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = Array.prototype.slice.call(nodeList)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var section = _step2.value;

                var sectionID = section.getAttribute("data-anchor-trigger");
                var sectionName = section.getAttribute("data-goto-title");
                template += "<li><button data-anchor=\"" + sectionID + "\" class=\" childChapter\">" + sectionName + "</button></li>";
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

        document.getElementById("chapter-insert").innerHTML = template;
    },
    refitStyle: function refitStyle() {
        var viewDocBody = view.contentDocument.body;
        view.style.height = window.getComputedStyle(viewDocBody).height;
    }
};

/***/ }),
/* 5 */
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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _observe = __webpack_require__(0);

var _observe2 = _interopRequireDefault(_observe);

var _moduleLoaderStep = __webpack_require__(21);

var _moduleLoaderStep2 = _interopRequireDefault(_moduleLoaderStep);

var _iframe = __webpack_require__(12);

var _iframe2 = _interopRequireDefault(_iframe);

var _template = __webpack_require__(1);

var _template2 = _interopRequireDefault(_template);

var _listener = __webpack_require__(3);

var _listener2 = _interopRequireDefault(_listener);

var _attrLoader = __webpack_require__(9);

var _attrLoader2 = _interopRequireDefault(_attrLoader);

var _functional = __webpack_require__(2);

var _functional2 = _interopRequireDefault(_functional);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function loadingStart() {
    (0, _moduleLoaderStep2.default)([[{ name: "jquery", link: "https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js", type: "js" }]], moduleOnload, main);
    function moduleOnload(count, total, name, type, link) {
        _observe2.default.emit("module-load", { count: count, total: total, name: name, type: type, link: link });
        console.log(count + "/" + total + " loaded[" + name + "] type:" + type + " link:" + link);
    }
    function main() {

        _observe2.default.on("initial", initial);

        _observe2.default.on("iframe-load", function () {
            _attrLoader2.default.exec();
        });

        _observe2.default.on("data-href", _functional2.default.hrefJumping);
        _observe2.default.on("data-href", _functional2.default.loadHrefTitle);

        _observe2.default.on("data-page", _functional2.default.innerPageJumping);
        _observe2.default.on("data-anchor", _functional2.default.anchorJumping);
        _observe2.default.on("data-id", _functional2.default.idEventDispatch);
        _observe2.default.on("class-active", _functional2.default.activeClass);

        _observe2.default.emit("initial");
    }

    function initial() {

        document.querySelector("[data-append=all-chapter]").innerHTML = _template2.default.get();
        document.querySelector("[data-append=all-chapter] button").classList.add("is-active");
        _iframe2.default.initial();
        document.getElementById("view").addEventListener("load", _iframe2.default.initial);
        document.addEventListener("click", function (event) {
            _listener2.default.pushEvent(event.target);
        });
    }
})(); /**
       * Created by Dogfish on 2017/5/22.
       */

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AttrLoader = __webpack_require__(16);

var _AttrLoader2 = _interopRequireDefault(_AttrLoader);

var _functional = __webpack_require__(10);

var _functional2 = _interopRequireDefault(_functional);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Dogfish on 2017/6/4.
 */
var mainLoader = new _AttrLoader2.default();

mainLoader.add({ attr: "article-nav", val: "next", callback: _functional2.default.nextLink });
mainLoader.add({ attr: "article-nav", val: "prev", callback: _functional2.default.prevLink });

//是否动态加载img的src路径
//mainLoader.add({attr:"src",callback:callback.dynamicSrc})
//mainLoader.add({attr:"img-link",callback:callback.dynamicImglink})

exports.default = mainLoader;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _template = __webpack_require__(1);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pathCollection = ["../../assets/image/", "../assets/image/"]; /**
                                                                   * Created by Dogfish on 2017/6/4.
                                                                   */

var remotePath = "http://oocd4kz4f.bkt.clouddn.com/";
var c = "@$%%$@";

exports.default = {
    nextLink: function nextLink(element) {
        var activedButton = document.querySelector('[data-page-target="chapter-list"] button.is-active');

        var linkStatus = _template2.default.query(activedButton.innerHTML);
        if (linkStatus && linkStatus.next) {
            element.classList.remove("hidden");
            element.setAttribute("data-href", linkStatus.next.link);
            element.innerHTML = "下一篇 -" + linkStatus.next.name;
        } else {
            element.classList.add("hidden");
        }
    },
    prevLink: function prevLink(element) {
        var activedButton = document.querySelector('[data-page-target="chapter-list"] button.is-active');

        var linkStatus = _template2.default.query(activedButton.innerHTML);

        if (linkStatus && linkStatus.prev) {
            element.classList.remove("hidden");
            element.setAttribute("data-href", linkStatus.prev.link);
            element.innerHTML = "上一篇 - " + linkStatus.prev.name;
        } else {
            element.classList.add("hidden");
        }
    },
    dynamicSrc: function dynamicSrc(element) {
        if (element.tagName.toLowerCase() !== "img") {
            return;
        }
        var elSrc = element.getAttribute("src");
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = pathCollection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var imgBasePath = _step.value;

                var regex = new RegExp(imgBasePath);
                if (!regex.test(elSrc)) {
                    continue;
                }
                var src = elSrc.replace(imgBasePath, c).replace(/\//g, "-").replace(c, remotePath);
                element.setAttribute("src", src);
                break;
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
    },
    dynamicImglink: function dynamicImglink(element) {
        var elSrc = element.getAttribute("img-link");
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = pathCollection[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var imgBasePath = _step2.value;

                var regex = new RegExp(imgBasePath);
                if (!regex.test(elSrc)) {
                    continue;
                }
                var src = elSrc.replace(imgBasePath, c).replace(/\//g, "-").replace(c, remotePath);
                element.setAttribute("img-link", src);
                break;
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
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Dogfish on 2017/5/22.
 */
__webpack_require__(7);
__webpack_require__(6);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _functional = __webpack_require__(4);

var _functional2 = _interopRequireDefault(_functional);

var _observe = __webpack_require__(0);

var _observe2 = _interopRequireDefault(_observe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Dogfish on 2017/6/4.
 */
exports.default = {
    initial: function initial() {

        _functional2.default.clickListen();
        _functional2.default.scrollListen();
        _functional2.default.parallaxListen();
        _functional2.default.chapterGenerator();
        _functional2.default.imgLoadListen();
        _functional2.default.refitStyle();

        document.getElementById("view-outer").scrollTop = 0;
        _observe2.default.emit("iframe-load");
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parallaxScroll = __webpack_require__(23);

var _parallaxScroll2 = _interopRequireDefault(_parallaxScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newParallaxScroll = new _parallaxScroll2.default(); /**
                                                         * Created by Dogfish on 2017/6/6.
                                                         */
exports.default = newParallaxScroll;

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(5);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(5);

function attrLoader() {
    this.attrList = {};
} /**
   * Created by Dogfish on 2017/6/4.
   */
//从某个指定节点开始，一直往上爬取所有注册属性的回调函数，并且执行


attrLoader.prototype.exec = function () {
    for (var attr in this.attrList) {
        for (var i in this.attrList[attr]) {
            var valCallback = this.attrList[attr][i];
            if (typeof valCallback.callback !== "function") {
                continue;
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Array.prototype.slice.call(document.getElementsByTagName("iframe"))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var iframe = _step.value;

                    var _queryString = valCallback.val ? "[" + attr + "='" + valCallback.val + "']" : "[" + attr + "]";
                    var _nodeList = iframe.contentDocument.querySelectorAll(_queryString);
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = Array.prototype.slice.call(_nodeList)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var element = _step3.value;

                            valCallback.callback(element, valCallback.val);
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

            var queryString = valCallback.val ? "[" + attr + "='" + valCallback.val + "']" : "[" + attr + "]";
            var nodeList = document.querySelectorAll(queryString);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Array.prototype.slice.call(nodeList)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _element = _step2.value;

                    valCallback.callback(_element, valCallback.val);
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
        }
    }
};

attrLoader.prototype.add = function (_ref) {
    var attr = _ref.attr,
        val = _ref.val,
        callback = _ref.callback;

    if (!this.attrList.hasOwnProperty(attr)) {
        this.attrList[attr] = [];
    }

    if (!this.attrList[attr].includes(callback)) {
        this.attrList[attr].push({ val: val, callback: callback });
    }
};

attrLoader.prototype.remove = function (attr, callback) {
    if (!attr && !callback) {
        this.attrList = {};
    }
    if (attr && !callback && this.attrList.hasOwnProperty(attr)) {
        delete this.attrList[attr];
    }
};

exports.default = attrLoader;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Dogfish on 2017/4/23.
 */
exports.default = {
    getNodeByAttr: function getNodeByAttr(attr, sourceElement, value) {
        if (typeof sourceElement === "string") {
            sourceElement = document.getElementById(sourceElement);
        }

        var attrVal = sourceElement.getAttribute(attr);
        if (attrVal && (typeof value === "undefined" || value === attrVal)) {
            return sourceElement;
        }

        do {
            sourceElement = sourceElement.parentElement;
            if (!sourceElement) {
                return;
            }
            attrVal = sourceElement.getAttribute(attr);
        } while (attrVal === null || !(typeof value === "undefined" || value === attrVal));

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by Dogfish on 2017/4/17.
                                                                                                                                                                                                                                                                               */

var _redo = __webpack_require__(24);

var _redo2 = _interopRequireDefault(_redo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compare = function compare(CHECK_DATA, ORIGINAL_DATA) {

    var result = true;

    compareFN(CHECK_DATA, ORIGINAL_DATA);
    compareFN(ORIGINAL_DATA, CHECK_DATA);
    function compareFN(CHECK_DATA, ORIGINAL_DATA) {

        for (var key in CHECK_DATA) {
            if (_typeof(CHECK_DATA[key]) === "object") {

                if (ORIGINAL_DATA.hasOwnProperty(key)) {
                    compareFN(CHECK_DATA[key], ORIGINAL_DATA[key]);
                } else {
                    result = false;
                    return;
                }
            } else {
                if (ORIGINAL_DATA.hasOwnProperty(key)) {

                    if (ORIGINAL_DATA[key] !== CHECK_DATA[key]) {
                        result = false;
                        return;
                    }
                } else {
                    result = false;
                    return;
                }
            }
        }
    }

    return result;
};

function autoBuffer(_ref, that) {
    var interval = _ref.interval,
        callback = _ref.callback;

    this.interval = interval ? interval : 40;
    this._callback = callback ? callback : function () {};
    this._needUpdate = false;
    this._store = {};
    this._retry = new _redo2.default();
    var _this = this;
    if (!that) {
        that = this;
    }
    this._autoBufferFN = function () {
        if (_this._needUpdate) {
            _this._callback.call(that, _this._store);
            _this._needUpdate = false;
        }
    };
}

autoBuffer.prototype.startBuffer = function () {
    this._retry.retryTime = this.interval;
    this._retry.start(this._autoBufferFN);
};

autoBuffer.prototype.updateBuffer = function (newData) {
    if (!compare(newData, this._store)) {
        this._needUpdate = true;
        this._store = newData;
    }
};

autoBuffer.prototype.stopBuffer = function () {
    this._needUpdate = false;
    this._retry.end();
};

exports.default = autoBuffer;

/***/ }),
/* 19 */
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
                for (var _iterator = Array.prototype.slice.call(document.getElementsByTagName("iframe"))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var iframe = _step.value;
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = Array.prototype.slice.call(iframe.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + triggerAttr + "]"))[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
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
                        for (var _iterator5 = Array.prototype.slice.call(iframe.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]"))[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
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
                for (var _iterator2 = Array.prototype.slice.call(document.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]"))[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
                for (var _iterator3 = Array.prototype.slice.call(document.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]"))[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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
                for (var _iterator6 = Array.prototype.slice.call(document.getElementsByTagName("iframe"))[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var iframe = _step6.value;
                    var _iteratorNormalCompletion9 = true;
                    var _didIteratorError9 = false;
                    var _iteratorError9 = undefined;

                    try {
                        for (var _iterator9 = Array.prototype.slice.call(iframe.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]"))[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
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
                        for (var _iterator10 = Array.prototype.slice.call(iframe.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]"))[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
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
                for (var _iterator7 = Array.prototype.slice.call(document.querySelectorAll("[" + triggerAttr + "]" + "[class~=" + activeClass + "]"))[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
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
                for (var _iterator8 = Array.prototype.slice.call(document.querySelectorAll("[" + triggerAttr + "=" + sectionID + "]"))[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Dogfish on 2017/6/2.
 */
// [{link,callback,type,name}]
// type : js css img

function moduleLoader(linkList, onloadCallback) {
    this.count = 0;
    this.total = 0;
    if (typeof onloadCallback === "function") {
        this.onload = onloadCallback;
    }
    this.loadList(linkList);
}

moduleLoader.prototype.loadList = function (linkList) {
    var that = this;
    if ((typeof linkList === "undefined" ? "undefined" : _typeof(linkList)) !== "object") {
        return;
    }

    for (var i in linkList) {
        if (linkList[i].hasOwnProperty("link") && linkList[i].hasOwnProperty("type")) {
            var type = linkList[i]["type"];
            var link = linkList[i]["link"];
            var name = linkList[i]["name"];
            var callback = linkList[i]["callback"];
            var append = void 0;
            //附加执行
            switch (type) {
                case "js":
                    append = document.createElement('script');
                    append.src = linkList[i]["link"];
                    break;
                case "css":
                    //todo css onload event dont work! try to fix
                    this.total--;
                    //
                    append = document.createElement('link');
                    append.setAttribute("rel", "stylesheet");
                    append.setAttribute("link", link);
                    break;
                case "img":
                    // untest functional
                    append = document.createElement('img');
                    append.src = linkList[i]["link"];

                    break;
            }
            //设定回调
            this.total++;
            append.onload = _onloadWarpper(name, type, link, this.onload, callback);

            document.body.appendChild(append);
        }
    }

    function _onloadWarpper(name, type, link, onloadCallback, userCallback) {
        return function () {

            that.count++;

            onloadCallback(that.count, that.total, name, type, link);
            if (typeof userCallback === "function") {

                userCallback(that.count, that.total, name, type, link);
            }

            if (that.count === that.total) {
                that.complete();
            }
        };
    }
};

moduleLoader.prototype.complete = function () {};

moduleLoader.prototype.onload = function (count, total, name, type, link) {};

exports.default = moduleLoader;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moduleLoader = __webpack_require__(20);

var _moduleLoader2 = _interopRequireDefault(_moduleLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function moduleLoaderStep(list, onload, complete) {
    var current = -1;
    nextCall();

    function nextCall() {
        current++;
        console.log("--section loaded--");

        if (list.length > current) {
            loadModule(list[current]);
        } else {
            complete();
            console.log("--section loaded end--");
        }
    }

    function loadModule(list) {
        var loader = new _moduleLoader2.default();
        loader.complete = nextCall;
        loader.onload = onload;
        loader.loadList(list);
    }
} /**
   * Created by Dogfish on 2017/6/2.
   */
exports.default = moduleLoaderStep;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function observe() {
    this.eventList = {};
}
observe.prototype.on = function (event, fn) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$zIndex = _ref.zIndex,
        zIndex = _ref$zIndex === undefined ? 0 : _ref$zIndex,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? "" : _ref$id;

    if (!this.eventList.hasOwnProperty(event)) {
        this.eventList[event] = [];
    }

    if (typeof fn !== "function") {
        return;
    }

    if (!this.eventList[event].includes(fn)) {
        this.eventList[event].push({ fn: fn, zIndex: zIndex, id: id });
    }
};
observe.prototype.remove = function (event) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        fn = _ref2.fn,
        id = _ref2.id,
        zIndex = _ref2.zIndex;

    var removeLog = [];

    if (!fn && !id && !zIndex) {
        if (this.eventList.hasOwnProperty(event)) this.eventList[event] = [];
        return;
    }

    for (var i in this.eventList[event]) {

        if (this.eventList[event][i].fn === fn) {
            removeLog.push(i);
            continue;
        }
        if (this.eventList[event][i].id === id) {
            removeLog.push(i);
            continue;
        }

        if (this.eventList[event][i].zIndex === zIndex) {
            removeLog.push(i);
            continue;
        }
    }

    for (var _i in removeLog) {
        this.eventList[event].splice(removeLog[_i], 1);
    }
};
observe.prototype.emit = function (event, arg) {
    if (!this.eventList.hasOwnProperty(event)) {
        return;
    }
    var next = function next() {};
    this.eventList[event].forEach(function (act) {
        act.fn(arg, next);
    });
};
observe.prototype.emitByStep = function (event, arg) {
    var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref3$blackList = _ref3.blackList,
        blackList = _ref3$blackList === undefined ? [] : _ref3$blackList,
        _ref3$whiteList = _ref3.whiteList,
        whiteList = _ref3$whiteList === undefined ? [] : _ref3$whiteList;

    if (!this.eventList.hasOwnProperty(event)) {
        return;
    }
    var that = this;
    var currentIndex = -1;
    var sortedArr = [];

    sortedArr = quickSort(this.eventList[event], "zIndex");

    nextStep();
    function nextStep(arg) {
        currentIndex++;
        if (sortedArr.length <= currentIndex) {
            return;
        }

        if (!whiteList.includes(sortedArr[currentIndex].id) && whiteList.length !== 0) {
            nextStep();
            return;
        }

        if (blackList.includes(sortedArr[currentIndex].id)) {
            nextStep();
            return;
        }

        sortedArr[currentIndex].fn(arg, nextStep);
    }

    function quickSort(arr, attr) {

        var len = arr.length;
        if (len <= 1) return arr.slice(0);
        var left = [];
        var right = [];
        var mid = [arr[0]];
        for (var i = 1; i < len; i++) {
            if (arr[i][attr] < mid[0][attr]) left.push(arr[i]);else right.push(arr[i]);
        }

        return quickSort(left).concat(mid.concat(quickSort(right)));
    };
};

exports.default = observe;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _autoBuffer = __webpack_require__(18);

var _autoBuffer2 = _interopRequireDefault(_autoBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proptyList = ["parallax-speed", "parallax-zIndex"]; /**
                                                         * Created by Dogfish on 2017/6/6.
                                                         */

function parallax() {
    // this.elementList =[{element:$element,params:{speed,z-index...ect}}]
    this.elementList = undefined;
    this.buffer = new _autoBuffer2.default({ interval: 17, callback: this.onScroll }, this);
}

parallax.prototype.update = function () {
    var $document = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

    var nodeList = $document.querySelectorAll(".parallax-scroll");
    this.elementList = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Array.prototype.slice.call(nodeList)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var element = _step.value;


            var paramsList = {};
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = proptyList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var propName = _step2.value;

                    paramsList[propName] = element.getAttribute(propName);
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

            this.elementList.push({ element: element, params: paramsList });
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
};

parallax.prototype.initial = function () {
    var $document = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var $scrollTarget = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

    var that = this;
    this.lastScrollTop = 0;
    this.update($document);
    $scrollTarget.removeEventListener("scroll", onScroll);
    $scrollTarget.addEventListener("scroll", onScroll);
    that.buffer.startBuffer();

    function onScroll() {
        that.buffer.updateBuffer({ scrollTop: this.scrollTop });
    }
};

parallax.prototype.onScroll = function (_ref) {
    var scrollTop = _ref.scrollTop;


    var movedDistance = scrollTop - this.lastScrollTop;

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = this.elementList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var preset = _step3.value;

            preset.element.style.top = (pxToNumber(preset.element.style.top) + Number(preset.params["parallax-speed"]) * movedDistance).toFixed(2) + "px";
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

    this.lastScrollTop = scrollTop;
};

function pxToNumber(pxValue) {
    var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return (/\d+px/.test(pxValue) ? Number(Number(pxValue.slice(0, -2)).toFixed(digits)) : 0
    );
}

exports.default = parallax;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
        return;
    }
    if (typeof replace !== "boolean") {
        replace = false;
    }
    if (!replace && this.callFunction === callFunction) {
        return;
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
    var runnerFN = function runnerFN() {
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
        return;
    }
    window.clearTimeout(this.timerID);
    this.callFunction = undefined;
    this.timerID = undefined;
    this.retryTimes = 0;

    this.enable = false;
};

exports.default = redo;

/***/ })
/******/ ]);