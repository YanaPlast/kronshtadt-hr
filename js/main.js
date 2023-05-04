(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! @styles/main.scss */ "./styles/main.scss");

var _app = __webpack_require__(/*! @main/app */ "./scripts/main/app.js");

__webpack_require__(/*! @main/components/form-field */ "./scripts/main/components/form-field/index.js");

__webpack_require__(/*! @main/components/toggle-menu */ "./scripts/main/components/toggle-menu.js");

__webpack_require__(/*! @main/components/show-more */ "./scripts/main/components/show-more.js");

__webpack_require__(/*! @main/components/modal */ "./scripts/main/components/modal.js");

__webpack_require__(/*! @main/components/sliders/ */ "./scripts/main/components/sliders/index.js");

__webpack_require__(/*! @main/components/accordion */ "./scripts/main/components/accordion/index.js");

__webpack_require__(/*! @main/components/buttons-hover-tab */ "./scripts/main/components/buttons-hover-tab.js");

__webpack_require__(/*! @main/components/feedback-form */ "./scripts/main/components/feedback-form.js");

__webpack_require__(/*! @main/components/form-field/textarea-counter */ "./scripts/main/components/form-field/textarea-counter.js");

__webpack_require__(/*! @main/components/form-field/autoheight-textarea */ "./scripts/main/components/form-field/autoheight-textarea.js");

__webpack_require__(/*! @main/components/anonymous-form-submission */ "./scripts/main/components/anonymous-form-submission.js");

__webpack_require__(/*! @main/components/search/search-hints */ "./scripts/main/components/search/search-hints.js");

__webpack_require__(/*! @main/components/search/search-form-ajax */ "./scripts/main/components/search/search-form-ajax.js");

__webpack_require__(/*! @main/components/page-nav */ "./scripts/main/components/page-nav.js");

__webpack_require__(/*! @main/components/dropdown/dropdown-field */ "./scripts/main/components/dropdown/dropdown-field.js");

__webpack_require__(/*! @main/components/dropdown/dropdown-select */ "./scripts/main/components/dropdown/dropdown-select.js");

__webpack_require__(/*! @main/components/notification */ "./scripts/main/components/notification.js");

__webpack_require__(/*! @main/components/warning */ "./scripts/main/components/warning.js");

window.app = new _app.App();
window.app.run();

__webpack_require__(/*! fslightbox */ "../node_modules/fslightbox/index.js");

/***/ }),

/***/ "./partials/pagenav.handlebars":
/*!*************************************!*\
  !*** ./partials/pagenav.handlebars ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"prev") || (depth0 != null ? lookupProperty(depth0,"prev") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"prev","hash":{},"data":data,"loc":{"start":{"line":2,"column":13},"end":{"line":2,"column":23}}}) : helper)))
    + "\" class=\"pagination__nav button--white pagination__nav--prev hidden-lg\">\n        <span>Назад</span>\n    </a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"active") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":16,"column":15}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <span class=\"active button--white pagination__button pagination__button--page\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"num") : depth0), depth0))
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"separator") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":15,"column":19}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"button--grey pagination__button pagination__button--page pagination__button--dots\">...</span>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <a href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\" class=\"button--white pagination__button pagination__button--page "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"hiddenMd") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":106},"end":{"line":14,"column":145}}})) != null ? stack1 : "")
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"num") : depth0), depth0))
    + "</a>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " hidden-md";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"next") || (depth0 != null ? lookupProperty(depth0,"next") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"next","hash":{},"data":data,"loc":{"start":{"line":20,"column":13},"end":{"line":20,"column":23}}}) : helper)))
    + "\" class=\"pagination__nav button--white pagination__nav--next hidden-lg\">\n        <span>Вперед</span>\n    </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"prev") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":7}}})) != null ? stack1 : "")
    + "<div class=\"pagination__pages\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"next") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ "./partials/vacancy-item.handlebars":
/*!******************************************!*\
  !*** ./partials/vacancy-item.handlebars ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"vacancy__info color--red\">\n                    <img class=\"vacancy__info-icon\" src=\"./images/icons/flash.png\" alt=\"\">\n                    горящая вакансия\n                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"vacancy vacancy-list__vacancy\">\n    <div class=\"vacancy__wrapper\">\n        <div class=\"vacancy__top\">\n            <div class=\"vacancy__info\">\n                <svg class=\"vacancy__info-icon color--gray-20\">\n                    <use href=\"#calendar\"></use>\n                </svg>\n                <span class=\"vacancy__date color--gray-40\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"date") : stack1), depth0))
    + "</span>\n            </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"hot") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":16,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n\n        <p class=\"vacancy__title\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</p>\n        <div class=\"vacancy__conditions vacancy__conditions--clipped\">\n            "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0)) != null ? stack1 : "")
    + "\n        </div>\n        <div class=\"vacancy__bottom\">\n            <div class=\"vacancy__salary\">\n                <span class=\"vacancy__salary-sum\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"salary") : stack1), depth0))
    + "</span>\n                <span class=\"vacancy__salary-info\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"salaryInfo") : stack1), depth0))
    + "</span>\n            </div>\n            <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? lookupProperty(stack1,"moreLink") : stack1), depth0))
    + "\" class=\"button button--sm button--grey vacancy__button\">Подробнее</a>\n        </div>\n    </div>\n</div>\n\n";
},"useData":true});

/***/ }),

/***/ "./partials/warning.handlebars":
/*!*************************************!*\
  !*** ./partials/warning.handlebars ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "../node_modules/handlebars/runtime.js");
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"warning js-warning\">\n    <p class=\"warning__title\">Хотите перейти на сайт КТ?</p>\n    <div class=\"warning__actions\">\n        <a href=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":4,"column":17},"end":{"line":4,"column":26}}}) : helper)))
    + "\" target=\"_blank\" class=\"button button--sm button--red warning__button js-warning-link\">Да</a>\n        <button type=\"button\" class=\"button button--sm button--grey warning__button text-nowrap js-warning-close\">Нет, остаться тут</button>\n    </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ "./scripts/main/app.js":
/*!*****************************!*\
  !*** ./scripts/main/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _app = __webpack_require__(/*! @std/app */ "./scripts/std/app.ts");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_StdApp) {
  _inherits(App, _StdApp);

  var _super = _createSuper(App);

  function App() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, App);

    return _super.call(this, config);
  }

  _createClass(App, [{
    key: "run",
    value: function run() {}
  }]);

  return App;
}(_app.App);

exports.App = App;

/***/ }),

/***/ "./scripts/main/axios/index.js":
/*!*************************************!*\
  !*** ./scripts/main/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _instance = _interopRequireDefault(__webpack_require__(/*! ./instance */ "./scripts/main/axios/instance.js"));

var _rewriteUrl = _interopRequireDefault(__webpack_require__(/*! ./middleware/rewrite-url */ "./scripts/main/axios/middleware/rewrite-url.js"));

var _handleError = _interopRequireDefault(__webpack_require__(/*! ./middleware/handle-error */ "./scripts/main/axios/middleware/handle-error.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var axios = (0, _instance["default"])();
axios.interceptors.request.use(_rewriteUrl["default"], _handleError["default"]);
var _default = axios;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/axios/instance.js":
/*!****************************************!*\
  !*** ./scripts/main/axios/instance.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createInstance;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "../node_modules/axios/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createInstance() {
  return _axios["default"].create({
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Requested-With": "XMLHttpRequest"
    }
  });
}

module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/axios/middleware/handle-error.js":
/*!*******************************************************!*\
  !*** ./scripts/main/axios/middleware/handle-error.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleError;

function handleError(error) {
  return Promise.reject(error);
}

module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/axios/middleware/rewrite-url.js":
/*!******************************************************!*\
  !*** ./scripts/main/axios/middleware/rewrite-url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.concat */ "../node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url */ "../node_modules/core-js/modules/web.url.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rewriteUrl;

function rewriteUrl(config) {
  var port = {"APP_ENV":"local","NODE_ENV":"production","DEV_SERVER_PORT":"9966","DEV_SERVER_PORT_HOST":"9966","MOCKER_PORT":"9966","MOCKER_HOST":"","MOCKER_PROTOCOL":"","CONTAINER_PREFIX":"app","COMPOSE_PROJECT_NAME":"","USER_ID":"1000","APP_ROOT":"/var/www/html"}.MOCKER_PORT;
  var host = {"APP_ENV":"local","NODE_ENV":"production","DEV_SERVER_PORT":"9966","DEV_SERVER_PORT_HOST":"9966","MOCKER_PORT":"9966","MOCKER_HOST":"","MOCKER_PROTOCOL":"","CONTAINER_PREFIX":"app","COMPOSE_PROJECT_NAME":"","USER_ID":"1000","APP_ROOT":"/var/www/html"}.MOCKER_HOST;

  if (!port && !host) {
    return config;
  }

  try {
    host = new URL(config.url).host;
  } catch (_unused) {
    if (!host) {
      host = window.location.hostname;
    }
  }

  var url;

  try {
    url = new URL(config.url).pathname;
  } catch (_unused2) {
    url = config.url;
  }

  var protocol = {"APP_ENV":"local","NODE_ENV":"production","DEV_SERVER_PORT":"9966","DEV_SERVER_PORT_HOST":"9966","MOCKER_PORT":"9966","MOCKER_HOST":"","MOCKER_PROTOCOL":"","CONTAINER_PREFIX":"app","COMPOSE_PROJECT_NAME":"","USER_ID":"1000","APP_ROOT":"/var/www/html"}.MOCKER_PROTOCOL;

  if (!protocol) {
    try {
      protocol = new URL(config.url).protocol;
    } catch (_unused3) {
      protocol = window.location.protocol;
    }
  }

  if (port !== "80" && port !== "443") {
    url = "".concat(protocol, "//").concat(host, ":").concat(port).concat(url);
  } else {
    url = "".concat(protocol, "//").concat(host).concat(url);
  }

  config.url = url;
  return config;
}

module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/accordion/accordion.js":
/*!********************************************************!*\
  !*** ./scripts/main/components/accordion/accordion.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;

var _animation = __webpack_require__(/*! @main/consts/animation */ "./scripts/main/consts/animation.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент аккордеона.
 */
var Accordion = /*#__PURE__*/function () {
  /**
   * Создает компонент аккордеона.
   *
   * @param {HTMLElement} el Контейтер аккордеона.
   */
  function Accordion(el) {
    _classCallCheck(this, Accordion);

    this.timeout = void 0;
    this.el = el;
    this.findElements();
    this.bindEventListeners();
    this.updateRender();
  }
  /**
   * Поиск хедера и тела аккордеона, определение начального состояния.
   *
   * @returns {void}
   */


  _createClass(Accordion, [{
    key: "findElements",
    value: function findElements() {
      this.header = this.el.querySelector(".js-accordion-header");
      this.body = this.el.querySelector(".js-accordion-body");
      this.active = this.el.classList.contains("accordion--active");
    }
    /**
     * Вешает колбэк на хэдер.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.header.addEventListener("click", this.onClickHeader.bind(this)); // при загрузке страницы проверяем, все ли аккордеоны без класса accordion--active свернуты,
      // а с классом accordion--active развернуты

      window.addEventListener("load", this.updateRender());
    }
    /**
     * Обработка нажатия на хэдер.
     *
     * @returns {void}
     */

  }, {
    key: "onClickHeader",
    value: function onClickHeader() {
      this.active = !this.active;
      this.updateRender();
    }
    /**
     * В зависимости от состояния active открывает/закрывает тело аккордеона.
     *
     * @returns {void}
     */

  }, {
    key: "updateRender",
    value: function updateRender() {
      var _this = this;

      if (this.active) {
        var _this$body;

        this.body.style.height = "".concat((_this$body = this.body) === null || _this$body === void 0 ? void 0 : _this$body.scrollHeight, "px");
        this.timeout = setTimeout(function () {
          if (_this.body) {
            _this.body.style.overflow = "visible";
            _this.body.style.height = "auto";
          }
        }, _animation.ACCORDION_ANIMATION_DURATION);
        this.el.classList.add("accordion--active");
      } else {
        this.timeout && clearTimeout(this.timeout);

        if (this.body.style.height === "auto") {
          var _this$body2;

          this.body.style.height = "".concat((_this$body2 = this.body) === null || _this$body2 === void 0 ? void 0 : _this$body2.offsetHeight, "px");
        }

        setTimeout(function () {
          _this.hideBody();
        }, 0);
        this.el.classList.remove("accordion--active");
      }
    }
    /**
     * Скрывает тело аккордеона.
     *
     * @returns {void}
     */

  }, {
    key: "hideBody",
    value: function hideBody() {
      this.body.style.overflow = "hidden";
      this.body.style.height = "0px";
    }
  }]);

  return Accordion;
}();

exports.Accordion = Accordion;
document.querySelectorAll(".js-accordion").forEach(function (el) {
  return new Accordion(el);
});

/***/ }),

/***/ "./scripts/main/components/accordion/index.js":
/*!****************************************************!*\
  !*** ./scripts/main/components/accordion/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./accordion */ "./scripts/main/components/accordion/accordion.js");

__webpack_require__(/*! ./nav-accordion */ "./scripts/main/components/accordion/nav-accordion.js");

/***/ }),

/***/ "./scripts/main/components/accordion/nav-accordion.js":
/*!************************************************************!*\
  !*** ./scripts/main/components/accordion/nav-accordion.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

var _accordion = __webpack_require__(/*! @main/components/accordion/accordion */ "./scripts/main/components/accordion/accordion.js");

var _media = __webpack_require__(/*! @main/consts/media */ "./scripts/main/consts/media.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Компонент аккордеона на планшете и мобилке.
 */
var TabletAccordion = /*#__PURE__*/function (_Accordion) {
  _inherits(TabletAccordion, _Accordion);

  var _super = _createSuper(TabletAccordion);

  /**
   * Создает компонент аккордеона.
   *
   * @param {HTMLElement} el Контейнер аккордеона.
   */
  function TabletAccordion(el) {
    var _this;

    _classCallCheck(this, TabletAccordion);

    _this = _super.call(this, el);
    new ResizeObserver(_this.onResizeWindow.bind(_assertThisInitialized(_this))).observe(document.body);
    return _this;
  }
  /**
   * Перерисовка тела аккордеона.
   *
   * @returns {void}
   */


  _createClass(TabletAccordion, [{
    key: "updateRender",
    value: function updateRender() {
      if (window.innerWidth < _media.md) {
        _get(_getPrototypeOf(TabletAccordion.prototype), "updateRender", this).call(this);
      }
    }
    /**
     * Обработка нажатия на хэдер.
     *
     * @returns {void}
     */

  }, {
    key: "onClickHeader",
    value: function onClickHeader() {
      if (window.innerWidth < _media.md) {
        _get(_getPrototypeOf(TabletAccordion.prototype), "onClickHeader", this).call(this);
      }
    }
    /**
     * Обработка изменение размера вьюпорта.
     *
     * @returns {void}
     */

  }, {
    key: "onResizeWindow",
    value: function onResizeWindow() {
      if (window.innerWidth >= _media.md) {
        this.body.style.overflow = null;
        this.body.style.height = null;
      } else if (!this.active) {
        this.hideBody();
      }
    }
  }]);

  return TabletAccordion;
}(_accordion.Accordion);

document.querySelectorAll(".js-accordion-tablet").forEach(function (el) {
  return new TabletAccordion(el);
});

/***/ }),

/***/ "./scripts/main/components/anonymous-form-submission.js":
/*!**************************************************************!*\
  !*** ./scripts/main/components/anonymous-form-submission.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Компонент анонимной отправки формы.
 */
var AnonymousFormSubmission = /*#__PURE__*/function () {
  /**
    * Создает компонент анонимной отправки формы.
    *
    * @param {HTMLElement} form - DOM элемент формы.
    */
  function AnonymousFormSubmission(form) {
    _classCallCheck(this, AnonymousFormSubmission);

    this.form = form;
    this.switcher = this.form.querySelector(".js-anonymous-sending");
    this.anonymousFormField = this.form.querySelectorAll(".js-form-field-anon");
    this.bindEventlisteners();
  }
  /**
    * Отслеживание событий.
    *
    * @returns {void}
    */


  _createClass(AnonymousFormSubmission, [{
    key: "bindEventlisteners",
    value: function bindEventlisteners() {
      this.switcher.addEventListener("change", this.toggleAnonymousForm.bind(this));
    }
    /**
      * По переключению свитчера, менять анонимность формы.
      *
      * @returns {void}
      */

  }, {
    key: "toggleAnonymousForm",
    value: function toggleAnonymousForm() {
      var _this = this;

      this.anonymousFormField.forEach(function (field) {
        var input = field.querySelector("input");

        if (_this.switcher.checked === true) {
          field.classList.add("disabled");
          field.classList.remove("filled");

          if (field.classList.contains("error")) {
            field.classList.remove("error");
          }

          input.value = "";
          input.setAttribute("disabled", "disabled");

          if (input.type === "tel") {
            input.type = "";
          }

          if (input.type === "email") {
            input.type = "";
          }
        } else {
          field.classList.remove("disabled");
          input.removeAttribute("disabled");

          if (input.dataset.type === "tel") {
            input.type = "tel";
          }

          if (input.dataset.type === "email") {
            input.type = "email";
          }
        }
      });
    }
  }]);

  return AnonymousFormSubmission;
}();

document.querySelectorAll(".js-anonymous-form-submission").forEach(function (form) {
  return new AnonymousFormSubmission(form);
});

/***/ }),

/***/ "./scripts/main/components/autocomplete.js":
/*!*************************************************!*\
  !*** ./scripts/main/components/autocomplete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url */ "../node_modules/core-js/modules/web.url.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Autocomplete = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _autocompleter = _interopRequireDefault(__webpack_require__(/*! autocompleter */ "../node_modules/autocompleter/autocomplete.js"));

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _consts = __webpack_require__(/*! @main/consts */ "./scripts/main/consts/index.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _modal = __webpack_require__(/*! @main/components/modal */ "./scripts/main/components/modal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Autocomplete = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   * @param {function} onValueSelectCustom функция при выборе значения.
   */
  function Autocomplete(el, onValueSelectCustom) {
    var _this = this;

    _classCallCheck(this, Autocomplete);

    this.getData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(text, update) {
        var params, response, _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {
                  text: text.toLowerCase()
                };
                _context.prev = 1;
                _context.next = 4;
                return (0, _axios["default"])({
                  url: _this.url,
                  params: params,
                  method: "get"
                });

              case 4:
                response = _context.sent;
                // в response массив объектов подсказок
                _this.abortByEnter = false;
                update(response.data);
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);

                if (!_this.abortByEnter) {
                  if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                    _this.showError(_context.t0.response.data.message);
                  } else {
                    _this.showError(_messages.ERROR_DEFAULT);
                  }
                }

                _this.abortByEnter = false;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = el;
    this.onValueSelectCustom = onValueSelectCustom;
    this.inputNode = this.el.querySelector(".js-autocomplete-field");
    this.errorNode = this.el.querySelector(".js-autocomplete-error");
    this.autocompleteInput = this.el.querySelector(".js-autocomplete-input");
    this.url = this.autocompleteInput.dataset.url;
    this.realInput = this.el.querySelector(".js-autocomplete-real-value");
    this.resultsContainer = this.el.querySelector(".js-autocomplete-results");
    this.modalError = document.querySelector(".js-modal[data-modal-name=\"failed-modal\"]");
    this.clearBtn = this.el.querySelector(".js-clear-btn");
    this.abortByEnter = false;
    this.initialResultContainer = this.el.closest(".js-search-results-list");
    this.bindEventListeners();
    this.initAutocomplete();
  }
  /**
   * По enter в поле и прерывании запроса не выводить ошибку.
   *
   * @returns {void}
   */


  _createClass(Autocomplete, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      window.addEventListener("beforeunload", function () {
        _this2.abortByEnter = true;
      });
      window.addEventListener("load", function () {
        _this2.toggleCrossVisibility();
      });
      this.el.addEventListener("input", this.onInput.bind(this));
      this.clearBtn.addEventListener("click", this.clearInput.bind(this));
    }
    /**
     * Инициализация поля с подсказками.
     *
     * @returns {void}
     */

  }, {
    key: "initAutocomplete",
    value: function initAutocomplete() {
      var _this3 = this;

      (0, _autocompleter["default"])({
        onSelect: function onSelect(item) {
          _this3.onValueSelect(item);
        },
        input: this.autocompleteInput,
        minLength: 3,
        emptyMsg: "Поиск не дал результатов",
        render: function render(item, currentValue) {
          var reg = new RegExp(currentValue, "gi");

          var replacer = function replacer(text) {
            return "<span class=\"autocomplete__highlight\">".concat(text, "</span>");
          };

          var highlightedText = item.label.replace(reg, replacer);
          var button = document.createElement("a");
          button.classList.add("autocomplete__item");
          button.setAttribute("data-id", item.id);
          button.setAttribute("href", item.url);
          button.innerHTML = highlightedText;
          return button;
        },
        className: "autocomplete__select",
        fetch: function fetch(text, update) {
          _this3.getData(text, update);
        },
        debounceWaitMs: _consts.DEBOUNCE_WAIT_MS,
        preventSubmit: false,
        disableAutoSelect: true,
        customize: function customize(input, inputRect, container) {
          _this3.resultsContainer.appendChild(container);

          container.style.position = "static";
        }
      });
    }
    /**
     * При выборе значения из списка найденного
     *
     * @returns {void}
     */

  }, {
    key: "onValueSelect",
    value: function onValueSelect(item) {
      this.realInput.value = item.id || item.label;
      this.autocompleteInput.value = item.label;

      if (this.onValueSelectCustom) {
        this.onValueSelectCustom(item);
      }

      window.location.href = item.url;
    }
    /**
     * Получение результатов поиска.(подсказок)
     *
     * @returns {void}
     */

  }, {
    key: "onInput",

    /**
     * Появление и скрытие иконки крестика для очистки поля
     * Если при пустом результате поиска из поля удалены все символы - переход на исходную страницу
     *
     * @returns {void}
     */
    value: function onInput() {
      this.toggleCrossVisibility();

      if (this.initialResultContainer && this.initialResultContainer.querySelector(".js-empty-search").classList.contains("empty") && this.autocompleteInput.value.length < 1) {
        this.goByChangedUrl();
      }
    }
    /**
     * Переключение класса видимости иконки удаления введенного в поиск значения
     *
     * @returns {void}
     */

  }, {
    key: "toggleCrossVisibility",
    value: function toggleCrossVisibility() {
      if (this.autocompleteInput.value.length >= 3) {
        this.clearBtn.classList.remove("hidden");
      } else {
        this.clearBtn.classList.add("hidden");
      }
    }
  }, {
    key: "clearInput",
    value: function clearInput() {
      var inputField = this.autocompleteInput.closest(".js-form-field");

      if (inputField.classList.contains("filled")) {
        inputField.classList.remove("filled");
      }

      this.realInput.value = "";
      this.autocompleteInput.value = "";
      this.clearBtn.classList.add("hidden"); // если в результате поиска ничего не нашлось, то нажатие на крестик возвращает на страницу списка вакансий

      if (this.initialResultContainer && this.initialResultContainer.querySelector(".js-empty-search").classList.contains("empty")) {
        this.goByChangedUrl();
      }
    }
    /**
     * Удаление из url параметров запроса и переход по полученному url
     *
     * @returns {void}
     */

  }, {
    key: "goByChangedUrl",
    value: function goByChangedUrl() {
      var url = new URL(window.location.href);
      window.location.href = url.origin + url.pathname;
    }
  }, {
    key: "showError",
    value: function showError(message) {
      if (this.modalError) {
        this.modalError.querySelector(".js-fail-modal-title").innerHTML = "Ошибка поиска";
        this.modalError.querySelector(".js-fail-modal-text").innerHTML = message;

        _modal.Modal.open(this.modalError);
      } else if (this.inputNode && this.errorNode) {
        this.inputNode.classList.add("error");
        this.errorNode.innerHTML = message;
      } else {
        alert(message);
      }
    }
  }]);

  return Autocomplete;
}();

exports.Autocomplete = Autocomplete;

/***/ }),

/***/ "./scripts/main/components/buttons-hover-tab.js":
/*!******************************************************!*\
  !*** ./scripts/main/components/buttons-hover-tab.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonHoverTab = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * кнопки должны получать стили характерные для :focus
 * только при их выделении с помощью клавиши tab.
 * Чтобы при клике мышью стили фокуса не добавлялись - добавляем класс .clicked
 *
 */
var ButtonHoverTab = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLButtonElement} button элемент кнопки.
   *
   */
  function ButtonHoverTab(btn) {
    _classCallCheck(this, ButtonHoverTab);

    this.btn = btn;
    this.bindEventListeners();
  }

  _createClass(ButtonHoverTab, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.btn.addEventListener("mousedown", function () {
        if (!_this.btn.classList.contains("clicked")) {
          _this.btn.classList.add("clicked");
        }
      });
      this.btn.addEventListener("blur", function () {
        if (_this.btn.classList.contains("clicked")) {
          _this.btn.classList.remove("clicked");
        }
      });
    }
  }]);

  return ButtonHoverTab;
}();

exports.ButtonHoverTab = ButtonHoverTab;
document.querySelectorAll("button").forEach(function (el) {
  return new ButtonHoverTab(el);
});

/***/ }),

/***/ "./scripts/main/components/dropdown/dropdown-field.js":
/*!************************************************************!*\
  !*** ./scripts/main/components/dropdown/dropdown-field.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _consts = __webpack_require__(/*! @main/consts */ "./scripts/main/consts/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DropdownField = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function DropdownField(el) {
    _classCallCheck(this, DropdownField);

    this.el = el;
    this.btn = this.el.querySelector(".js-dropdown-field-btn");
    this.text = this.el.querySelector(".js-dropdown-field-text");
    this.textDefault = this.text.dataset.text;
    this.clearBtn = this.el.querySelector(".js-dropdown-field-clear");
    this.filter = this.el.closest(".js-filter-params");
    this.dropdown = this.el.querySelector(".js-dropdown-block");
    this.form = this.el.closest(".js-feedback-form");
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(DropdownField, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.btn.addEventListener("click", function (e) {
        if (e.target.classList.contains(".js-dropdown-field-clear") || e.target.closest(".js-dropdown-field-clear")) {
          _this.clear(true);
        } else {
          _this.toggleDropdown();
        }
      });
      this.clearBtn.addEventListener("click", function () {
        _this.clear(true);
      });
      document.addEventListener("mouseup", function (e) {
        if (!e.target.classList.contains(".js-dropdown-field") && !e.target.closest(".js-dropdown-field") && !e.target.closest(".air-datepicker")) {
          _this.close();
        }
      });
      this.el.addEventListener("closeDropdownField", function () {
        _this.close();
      });
      this.el.addEventListener("clearDropdownField", function () {
        _this.clear(false);
      });
    }
    /**
     * Переключение выпадающего списка.
     *
     * @returns {void}
     */

  }, {
    key: "toggleDropdown",
    value: function toggleDropdown() {
      var isOpen = this.el.classList.contains("open");

      if (isOpen) {
        this.close();
      } else {
        document.querySelectorAll(".js-dropdown-field").forEach(function (item) {
          return item.dispatchEvent(new Event("closeDropdownField"));
        });
        this.checkPosition();
        this.el.classList.add("open");
      }
    }
    /**
     * Закрыть выпадающее поле, проверить заполненность и добавить класс заполненности
     *
     * @returns {void}
     */

  }, {
    key: "close",
    value: function close() {
      this.el.classList.remove("open");

      if (this.isSelected()) {
        this.el.classList.add("selected");
      }

      this.checkFilterIsCLear();
    }
    /**
     * Проверить заполненность поля
     *
     * @returns {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {}
    /**
     * Очистить значение
     *
     * @param {boolean} submitForm Флаг отправить данные формы или нет.
     * @returns {void}
     */

  }, {
    key: "clear",
    value: function clear(submitForm) {
      this.text.innerHTML = this.textDefault;
      this.el.classList.remove("selected");
      this.el.classList.remove("open");

      if (submitForm) {
        this.checkFilterIsCLear();
      }
    }
  }, {
    key: "checkFilterIsCLear",
    value: function checkFilterIsCLear() {
      if (this.filter) {
        this.filter.dispatchEvent(new Event("checkFilterIsCLear"));
      }
    }
    /**
     * Проверить позицию выпадающего элемента и переместить его направо, если не влазит в экран.
     *
     * @returns {void}
     */

  }, {
    key: "checkPosition",
    value: function checkPosition() {
      var rectMenu = this.dropdown.getBoundingClientRect();
      var rectEl = this.el.getBoundingClientRect();
      var leftMinPosition = rectEl.x - rectMenu.width;
      var rightMaxPosition = rectEl.x + rectMenu.width;

      if (leftMinPosition < 0 && rightMaxPosition > window.innerWidth) {
        this.dropdown.classList.remove("right");
        this.dropdown.style.left = -1 * rectEl.x + _consts.CONTAINER_PADDING + "px";
      } else if (rightMaxPosition > window.innerWidth) {
        this.dropdown.classList.add("right");
        this.dropdown.removeAttribute("style");
      } else {
        this.dropdown.classList.remove("right");
        this.dropdown.removeAttribute("style");
      }
    }
  }]);

  return DropdownField;
}();

exports["default"] = DropdownField;
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/dropdown/dropdown-select.js":
/*!*************************************************************!*\
  !*** ./scripts/main/components/dropdown/dropdown-select.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropdownField = _interopRequireDefault(__webpack_require__(/*! @main/components/dropdown/dropdown-field */ "./scripts/main/components/dropdown/dropdown-field.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DropdownSelect = /*#__PURE__*/function (_DropdownField) {
  _inherits(DropdownSelect, _DropdownField);

  var _super = _createSuper(DropdownSelect);

  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function DropdownSelect(el) {
    var _this;

    _classCallCheck(this, DropdownSelect);

    _this = _super.call(this, el);
    _this.buttons = Array.from(_this.el.querySelectorAll(".js-dropdown-select-button"));
    _this.radio = Array.from(_this.el.querySelectorAll(".js-radio"));

    _this.bindEventListeners();

    return _this;
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(DropdownSelect, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(DropdownSelect.prototype), "bindEventListeners", this).call(this);

      this.buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          _this2.selectOption(button);
        });
      });
    }
    /**
     * Выбор опции селектбокса.
     *
     * @param {HTMLElement} button Текущая опция селекбокса.
     * @returns {void}
     */

  }, {
    key: "selectOption",
    value: function selectOption(button) {
      var text = button.dataset.text || button.innerText;
      this.el.classList.remove("open");
      this.el.classList.add("selected");
      this.text.innerText = text;
      document.querySelector("#" + button.getAttribute("for")).checked = true;
      this.form.dispatchEvent(new Event("submitAjax"));
      this.checkFilterIsCLear();
    }
    /**
     * Проверить заполненность поля
     *
     * @returns {boolean}
     */

  }, {
    key: "isSelected",
    value: function isSelected() {
      return this.radio.filter(function (radio) {
        return radio.checked;
      }).length > 0;
    }
    /**
     * Очистить значение
     *
     * @param {boolean} submitForm Флаг отправить данные формы или нет.
     * @returns {void}
     */

  }, {
    key: "clear",
    value: function clear(submitForm) {
      _get(_getPrototypeOf(DropdownSelect.prototype), "clear", this).call(this, submitForm);

      this.radio.forEach(function (radio) {
        radio.checked = false;
        radio.removeAttribute("checked");
      });

      if (submitForm) {
        this.form.dispatchEvent(new Event("submitAjax"));
      }
    }
  }]);

  return DropdownSelect;
}(_dropdownField["default"]);

exports["default"] = DropdownSelect;
document.querySelectorAll(".js-dropdown-select").forEach(function (elem) {
  return new DropdownSelect(elem);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/feedback-form.js":
/*!**************************************************!*\
  !*** ./scripts/main/components/feedback-form.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

var _form = __webpack_require__(/*! @main/components/form */ "./scripts/main/components/form.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 Компонент формы обратной связи.
 */
var ContactUs = /*#__PURE__*/function () {
  /**
   * Создается компонент обратной связи.
   *
   * @param {HTMLElement} el элемент формы.
   */
  function ContactUs(el) {
    _classCallCheck(this, ContactUs);

    this.el = el;
    this.form = new _form.Form(this.el);
    this.modal = this.el.closest(".js-modal");
    this.btnSubmit = this.el.querySelector(".js-feedback-submit");
    this.citizenship = this.el.querySelector(".js-citizenship");
    this.checkbox = this.el.querySelector(".js-citizenship-checkbox");
    this.successModal = document.querySelector(".js-modal[data-modal-name='success-modal']");
    this.bindEventListeners();
  }
  /**
   * Привязка обработчиков событий.
   *
   * @returns {void}
   */


  _createClass(ContactUs, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("submit", function (e) {
        _this.checkCitizenship(e);
      });

      if (this.checkbox) {
        this.checkbox.addEventListener("change", function () {
          return _this.toggleCheckboxError();
        });
      }
    }
    /**
     * Проверяем наличие в форме чекбокса с подтверждением гражданства
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     */

  }, {
    key: "checkCitizenship",
    value: function checkCitizenship(e) {
      if (!this.checkbox) {
        this.sendForm(e);
      } else {
        if (this.checkbox.checked) {
          this.sendForm(e);
        } else {
          this.citizenship.classList.add("error");
        }
      }
    }
    /**
     * Отправка формы.
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     * @returns {void}
     *
     */

  }, {
    key: "sendForm",
    value: function sendForm(e) {
      if (this.el.closest(".js-modal")) {
        this.form.submitFormWithModal(e, this.modal);
      } else {
        this.form.submitFormWithModal(e, this.successModal);
      }
    }
    /**
     * Добавление и удаление класса ошибки при переключении чекбокса
     *
     * @returns {void}
     *
     */

  }, {
    key: "toggleCheckboxError",
    value: function toggleCheckboxError() {
      if (this.checkbox.checked) {
        this.form.hideFieldError(this.citizenship);
        this.btnSubmit.removeAttribute("disabled");
      } else {
        this.citizenship.classList.add("error");
        this.btnSubmit.setAttribute("disabled", "disabled");
      }
    }
  }]);

  return ContactUs;
}();

document.querySelectorAll(".js-feedback-form").forEach(function (el) {
  return new ContactUs(el);
});

/***/ }),

/***/ "./scripts/main/components/form-field/autoheight-textarea.js":
/*!*******************************************************************!*\
  !*** ./scripts/main/components/form-field/autoheight-textarea.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoheightTextarea = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Textarea с автоувеличением высоты.
 */
var AutoheightTextarea = /*#__PURE__*/function () {
  /**
   * Создает компонент.
   *
   * @param {HTMLElement} el Элемент textarea.
   */
  function AutoheightTextarea(el) {
    _classCallCheck(this, AutoheightTextarea);

    this.el = el;
    this.bindEventListeners();
  }
  /**
   * Привязка обработчика события ввода.
   *
   * @returns {void}
   */


  _createClass(AutoheightTextarea, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("input", function () {
        _this.el.style.height = 0;
        _this.el.style.overflowY = "hidden";
        _this.el.style.height = _this.el.scrollHeight + "px";
      });
    }
  }]);

  return AutoheightTextarea;
}();

exports.AutoheightTextarea = AutoheightTextarea;
document.querySelectorAll(".js-autoheight-textarea").forEach(function (el) {
  return new AutoheightTextarea(el);
});

/***/ }),

/***/ "./scripts/main/components/form-field/datepicker.js":
/*!**********************************************************!*\
  !*** ./scripts/main/components/form-field/datepicker.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties */ "../node_modules/core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "../node_modules/core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "../node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Datepicker = void 0;

var _airDatepicker = _interopRequireDefault(__webpack_require__(/*! air-datepicker */ "../node_modules/air-datepicker/index.es.js"));

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _media = __webpack_require__(/*! @main/consts/media */ "./scripts/main/consts/media.js");

var _consts = __webpack_require__(/*! @main/consts */ "./scripts/main/consts/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** 
 * Компонент выбора даты.
 */
var Datepicker = /*#__PURE__*/function (_Input) {
  _inherits(Datepicker, _Input);

  var _super = _createSuper(Datepicker);

  /**
   * @type {AirDatepicker<HTMLInputElement>} инстанс AirDatepicker
   * @private
   */

  /**
   * Создает компонент выбора даты.
   *
   * @param {object} props - Параметры компонента.
   * @param {HTMLElement} props.container - Родительский элемент.
   * @param {HTMLInputElement} props.input - Элемент ввода.
   * @param {object | undefined} props.options - Конфиг для инициализации AirDatepicker.
   */
  function Datepicker(_ref) {
    var _this;

    var container = _ref.container,
        input = _ref.input,
        options = _ref.options;

    _classCallCheck(this, Datepicker);

    _this = _super.call(this, {
      container: container,
      input: input
    });
    _this.datepicker = void 0;
    _this.datepicker = Datepicker.initAirDatepicker(input, options);
    return _this;
  }
  /**
   * Инициализирует календарь.
   *
   * @param {HTMLInputElement} input - Элемент ввода.
   * @param {object | undefined} options - Конфиг для инициализации AirDatepicker.
   */


  _createClass(Datepicker, null, [{
    key: "initAirDatepicker",
    value: function initAirDatepicker(input, options) {
      var _input$getAttribute;

      var container = input.closest(".js-calendar-container");

      if (window.innerWidth < _media.lg) {
        if (!options) {
          options = {};
        }

        options.position = function (_ref2) {
          var $datepicker = _ref2.$datepicker,
              $target = _ref2.$target;
          var dpWidth = $datepicker.clientWidth;
          var rectTarget = $target.getBoundingClientRect();
          var rectContainer = container.getBoundingClientRect();
          var rightMaxPosition = rectTarget.x + dpWidth;

          if (rightMaxPosition > window.innerWidth) {
            $datepicker.classList.add("-bottom-right-");
            $datepicker.classList.remove("-bottom-left-");
            $datepicker.style.left = -1 * rectTarget.x + _consts.CONTAINER_PADDING + "px";
          } else {
            $datepicker.style.left = "0";
            $datepicker.classList.add("-bottom-left-");
            $datepicker.classList.remove("-bottom-right-");
          }

          var top = rectTarget.y - rectContainer.y + rectTarget.height;
          $datepicker.classList.add("-from-bottom-");
          $datepicker.style.top = "".concat(top, "px");
        };
      }

      var picker = new _airDatepicker["default"](input, _objectSpread({
        dateFormat: "dd.MM.yyyy",
        autoClose: true,
        prevHtml: "<svg \n                            class=\"air-datepicker-nav__action air-datepicker-nav__action--prev\" />\n            ",
        nextHtml: "<svg \n                            class=\"air-datepicker-nav__action air-datepicker-nav__action--next\" />\n            ",
        minDate: (_input$getAttribute = input.getAttribute("data-min-date")) !== null && _input$getAttribute !== void 0 ? _input$getAttribute : undefined,
        maxDate: new Date(),
        container: container,
        onSelect: function onSelect() {
          var event = new Event("blur");
          input.dispatchEvent(event);
          var pickerParent = input.closest(".js-form-field");

          if (!pickerParent.classList.contains("filled")) {
            pickerParent.classList.add("filled");
          }
        }
      }, options));
      return picker;
    }
  }]);

  return Datepicker;
}(_input.Input);

exports.Datepicker = Datepicker;

/***/ }),

/***/ "./scripts/main/components/form-field/file-input.js":
/*!**********************************************************!*\
  !*** ./scripts/main/components/form-field/file-input.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "../node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileInput = void 0;

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _fileSizeFormat = __webpack_require__(/*! @main/utils/file-size-format */ "./scripts/main/utils/file-size-format.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Компонент выбора файла. */
var FileInput = /*#__PURE__*/function (_Input) {
  _inherits(FileInput, _Input);

  var _super = _createSuper(FileInput);

  /**
   * Создает компонент выбора файла.
   *
   * @param {object} props Параметры компонента.
   * @param {HTMLElement} props.container Родительский элемент.
   * @param {HTMLInputElement} props.input Элемент ввода.
   */
  function FileInput(props) {
    var _this;

    _classCallCheck(this, FileInput);

    _this = _super.call(this, props);

    _this.findElements();

    return _this;
  }
  /**
   * Ищет элементы.
   *
   * @returns {void}
   */


  _createClass(FileInput, [{
    key: "findElements",
    value: function findElements() {
      this.fileNameCaptionNode = this.el.querySelector(".js-form-field-file-caption");
    }
    /**
     * Инициализация евентов.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      _get(_getPrototypeOf(FileInput.prototype), "bindEventListeners", this).call(this);

      this.input.addEventListener("change", this.onChange.bind(this));
    }
    /**
     * Коллбек, который обрабатывает выбор файла.
     *
     * @returns {void}
     */

  }, {
    key: "onChange",
    value: function onChange() {
      var _this$input$files = _slicedToArray(this.input.files, 1),
          file = _this$input$files[0];

      this.fileNameCaptionNode.innerText = file ? "".concat(file.name, ", ").concat((0, _fileSizeFormat.getFormattedFileSize)(file.size)) : "";
    }
    /**
     * Получить значение файла.
     *
     * @returns {File} Файл.
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.input.files[0];
    }
  }]);

  return FileInput;
}(_input.Input);

exports.FileInput = FileInput;

/***/ }),

/***/ "./scripts/main/components/form-field/index.js":
/*!*****************************************************!*\
  !*** ./scripts/main/components/form-field/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFormFields = void 0;

var _datepicker = __webpack_require__(/*! @main/components/form-field/datepicker */ "./scripts/main/components/form-field/datepicker.js");

var _fileInput = __webpack_require__(/*! @main/components/form-field/file-input */ "./scripts/main/components/form-field/file-input.js");

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _phoneInput = __webpack_require__(/*! @main/components/form-field/phone-input */ "./scripts/main/components/form-field/phone-input.js");

var _select = __webpack_require__(/*! @main/components/form-field/select */ "./scripts/main/components/form-field/select.js");

var _passwordInput = __webpack_require__(/*! @main/components/form-field/password-input */ "./scripts/main/components/form-field/password-input.js");

var _numberInput = __webpack_require__(/*! @main/components/form-field/number-input */ "./scripts/main/components/form-field/number-input.js");

var _dateInputMask = __webpack_require__(/*! @main/utils/date-input-mask */ "./scripts/main/utils/date-input-mask.js");

/**
 * Инициализируются компоненты ввода.
 *
 * @param {Element} element HTML элемент для поиска.
 * @returns {void}
 */
var initFormFields = function initFormFields(element) {
  element.querySelectorAll(".js-form-field").forEach(function (el) {
    var input = el.querySelector(".js-form-field-input");

    switch (input.type) {
      case "file":
        return new _fileInput.FileInput({
          container: el,
          input: input
        });

      case "select-multiple":
      case "select-one":
        return new _select.Select({
          container: el,
          input: input
        });

      case "date":
        // to prevent appearance of default popup-calendar  in Firefox
        input.addEventListener("click", function (e) {
          e.preventDefault();
        });
        return new _datepicker.Datepicker({
          container: el,
          input: input
        });

      case "tel":
        return new _phoneInput.PhoneInput({
          container: el,
          input: input
        });

      case "password":
        return new _passwordInput.PasswordInput({
          container: el,
          input: input
        });

      default:
        if (input.classList.contains("js-form-field-input-number")) {
          return new _numberInput.NumberInput({
            container: el,
            input: input
          });
        } else if (input.classList.contains("js-form-field-input-date")) {
          (0, _dateInputMask.dateInputMask)(input);
          return new _datepicker.Datepicker({
            container: el,
            input: input
          });
        } else {
          return new _input.Input({
            container: el,
            input: input
          });
        }

    }
  });
};

exports.initFormFields = initFormFields;
initFormFields(document);

/***/ }),

/***/ "./scripts/main/components/form-field/input.js":
/*!*****************************************************!*\
  !*** ./scripts/main/components/form-field/input.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "../node_modules/core-js/modules/es.string.match.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Базовый класс поля ввода. */
var Input = /*#__PURE__*/function () {
  /**
   * Создает компонент ввода текста.
   *
   * @param {object} props Параметры компонента.
   * @param {HTMLElement} props.container Родительский элемент.
   * @param {HTMLInputElement} props.input Элемент ввода.
   */
  function Input(_ref) {
    var container = _ref.container,
        input = _ref.input;

    _classCallCheck(this, Input);

    this.el = container;
    this.input = input;
    this.updateIsFilledStatus();
    this.bindEventListeners();
  }
  /**
   * Вешает коллбеки событий на элементы компонента.
   *
   * @returns {void}
   */


  _createClass(Input, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.input.addEventListener("input", this.onInput.bind(this));
      this.input.addEventListener("beforeinput", this.onBeforeInput.bind(this));
    }
    /**
     * Получает введенное значение.
     *
     * @returns {string} Введеное значение.
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.input.value;
    }
    /**
     * Проверяет наличие лейбла.
     *
     * @returns {HTMLElement} Лейбл поля ввода.
     */

  }, {
    key: "hasLabel",
    value: function hasLabel() {
      return this.el.querySelector(".form-field__label");
    }
    /**
     * Обновляет состояние ввода, которое говорит, введено ли значение в поле, или нет.
     *
     * @returns {void}
     */

  }, {
    key: "updateIsFilledStatus",
    value: function updateIsFilledStatus() {
      if (this.getValue() && this.hasLabel()) {
        this.el.classList.add("filled");
      } else {
        this.el.classList.remove("filled");
      }
    }
    /**
     * Колбэк обработки события 'input'.
     *
     * @returns {void}
     */

  }, {
    key: "onInput",
    value: function onInput() {
      this.updateIsFilledStatus();

      if (this.input.maxLength > 0 && this.input.maxLength < this.input.value.length) {
        this.input.value = this.input.value.slice(0, this.input.maxLength);
      }
    }
    /**
     * Колбэк обработки события перед вводом - удаление символов, не удовлетворяющих паттерну.
     *
     * @param {Event} event Событие, происходящее при вводе в инпуте.
     * @returns {void}
     */

  }, {
    key: "onBeforeInput",
    value: function onBeforeInput(event) {
      if (this.input.pattern && event.data) {
        var pattern = new RegExp(this.input.pattern);

        if (!pattern.test(event.data)) {
          event.preventDefault();
        }
      }
    }
    /**
     * Удаляет лишние символы из строки по паттерну.
     *
     * @param {string} str Строка для форматирования.
     * @returns {string} Результат.
     */

  }, {
    key: "replaceBadCharacters",
    value: function replaceBadCharacters(str) {
      var last = "";
      var match = str.match(this.input.pattern);

      if (match || str === "") {
        last = match ? match[0] : "";
      }

      return last;
    }
  }]);

  return Input;
}();

exports.Input = Input;

/***/ }),

/***/ "./scripts/main/components/form-field/number-input.js":
/*!************************************************************!*\
  !*** ./scripts/main/components/form-field/number-input.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInput = void 0;

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _numberFormat = __webpack_require__(/*! @main/utils/numberFormat */ "./scripts/main/utils/numberFormat.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Класс для поля ввода числа. */
var NumberInput = /*#__PURE__*/function (_Input) {
  _inherits(NumberInput, _Input);

  var _super = _createSuper(NumberInput);

  /**
   * Конструктор класса.
   *
   * @param {object} props Параметры компонента.
   * @param {HTMLElement} props.container Родительский элемент.
   * @param {HTMLInputElement} props.input Элемент ввода.
   */
  function NumberInput(props) {
    _classCallCheck(this, NumberInput);

    return _super.call(this, props);
  }
  /**
   * Прослушиваем события в инпуте с телефоном.
   *
   * @returns {void}
   */


  _createClass(NumberInput, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      _get(_getPrototypeOf(NumberInput.prototype), "bindEventListeners", this).call(this);

      this.el.addEventListener("paste", this.onPaste.bind(this));
    }
    /**
     * Применение маски к числу при вводе.
     *
     * @param {Event} e Событие, происходящее при вводе в инпуте.
     * @returns {void}
     */

  }, {
    key: "onInput",
    value: function onInput(e) {
      _get(_getPrototypeOf(NumberInput.prototype), "onInput", this).call(this);

      var input = e.target;
      this.replaceBadCharacters(input);
    }
    /**
     * Удалить все, что не число и не точка, запятую заменить на точку.
     *
     * @param {HTMLInputElement} input Поле ввода.
     * @returns {void}
     */

  }, {
    key: "replaceBadCharacters",
    value: function replaceBadCharacters(input) {
      input.value = (0, _numberFormat.replaceBadInNumber)(input.value);
    }
    /**
     * Применение маски к числу при вставке скопированного номера.
     *
     * @param {Event} e Событие, происходящее при вставке скопированного номера.
     * @returns {void}
     */

  }, {
    key: "onPaste",
    value: function onPaste(e) {
      var input = e.target;
      this.replaceBadCharacters(input);
    }
  }]);

  return NumberInput;
}(_input.Input);

exports.NumberInput = NumberInput;

/***/ }),

/***/ "./scripts/main/components/form-field/password-input.js":
/*!**************************************************************!*\
  !*** ./scripts/main/components/form-field/password-input.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordInput = void 0;

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Класс поля пароля. */
var PasswordInput = /*#__PURE__*/function (_Input) {
  _inherits(PasswordInput, _Input);

  var _super = _createSuper(PasswordInput);

  /**
   * Конструктор класса.
   *
   * @param {object} props Параметры компонента.
   * @param {HTMLElement} props.container Родительский элемент.
   * @param {HTMLInputElement} props.input Элемент ввода.
   */
  function PasswordInput(props) {
    _classCallCheck(this, PasswordInput);

    return _super.call(this, props);
  }
  /**
   * Прослушиваем события в инпуте с телефоном.
   *
   * @returns {void}
   */


  _createClass(PasswordInput, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      _get(_getPrototypeOf(PasswordInput.prototype), "bindEventListeners", this).call(this);

      this.el.addEventListener("input", this.onInput.bind(this));
    }
    /**
     * Действия при вводе пароля.
     *
     * @param {Event} e Событие, происходящее при вводе в инпуте.
     * @returns {void}
     */

  }, {
    key: "onInput",
    value: function onInput(e) {
      _get(_getPrototypeOf(PasswordInput.prototype), "onInput", this).call(this);

      var input = e.target;
      this.toggleDisabledSubmitButton(input);
    }
    /**
     * Менять disabled у кнопки отправки формы, в зависимости от того, пустые поля или нет.
     *
     * @param {HTMLInputElement} input Поле пароля.
     * @returns {void}
     */

  }, {
    key: "toggleDisabledSubmitButton",
    value: function toggleDisabledSubmitButton(input) {
      var passwordGroup = input.closest(".js-password-group");

      if (!passwordGroup) {
        return;
      }

      var inputs = passwordGroup.querySelectorAll("input");
      var btnSubmit = passwordGroup.closest(".js-form-wrapper").querySelector("button[type='submit']");

      if (inputs[0].value && inputs[1].value) {
        btnSubmit.removeAttribute("disabled");
      } else {
        btnSubmit.setAttribute("disabled", "disabled");
      }
    }
  }]);

  return PasswordInput;
}(_input.Input);

exports.PasswordInput = PasswordInput;

/***/ }),

/***/ "./scripts/main/components/form-field/phone-input.js":
/*!***********************************************************!*\
  !*** ./scripts/main/components/form-field/phone-input.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.reflect.get */ "../node_modules/core-js/modules/es.reflect.get.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneInput = void 0;

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _regex = __webpack_require__(/*! @main/consts/regex */ "./scripts/main/consts/regex.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Класс маски для телефона. */
var PhoneInput = /*#__PURE__*/function (_Input) {
  _inherits(PhoneInput, _Input);

  var _super = _createSuper(PhoneInput);

  /**
   * Конструктор класса.
   *
   * @param {object} props Параметры компонента.
   * @param {HTMLElement} props.container Родительский элемент.
   * @param {HTMLInputElement} props.input Элемент ввода.
   */
  function PhoneInput(props) {
    _classCallCheck(this, PhoneInput);

    return _super.call(this, props);
  }
  /**
   * Фильтрует в строке числа.
   *
   * @returns {void}
   */


  _createClass(PhoneInput, [{
    key: "getInputNumberValues",
    value: function getInputNumberValues() {
      return this.input.value.replace(_regex.WITHOUT_DIGITS_REGEX, "");
    }
    /**
     * Прослушиваем события в инпуте с телефоном.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      _get(_getPrototypeOf(PhoneInput.prototype), "bindEventListeners", this).call(this);

      this.el.addEventListener("keydown", this.onKeyDown.bind(this));
      this.el.addEventListener("paste", this.onPaste.bind(this));
    }
    /**
     * Применение маски к телефону при вводе.
     *
     * @param {Event} e Событие, происходящее при вводе в инпуте.
     * @returns {void}
     */

  }, {
    key: "onInput",
    value: function onInput(e) {
      _get(_getPrototypeOf(PhoneInput.prototype), "onInput", this).call(this);

      var input = e.target;
      var inputNumbersValue = this.getInputNumberValues();
      var formattedInputValue = "";
      var selectionStart = input.selectionStart;

      if (!inputNumbersValue) {
        input.value = "";
        return;
      }

      if (input.value.length !== selectionStart) {
        if (e.data && _regex.WITHOUT_DIGITS_REGEX.test(e.data)) {
          input.value = inputNumbersValue;
        }

        return;
      }

      if (inputNumbersValue[0] === "9") {
        inputNumbersValue = "7" + inputNumbersValue;
      }

      formattedInputValue = "+7 ";

      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(".concat(inputNumbersValue.substring(1, 4));
      }

      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") ".concat(inputNumbersValue.substring(4, 7));
      }

      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-".concat(inputNumbersValue.substring(7, 9));
      }

      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-".concat(inputNumbersValue.substring(9, 11));
      }

      input.value = formattedInputValue;
    }
    /**
     * Применение маски к телефону при каждом нажатии на клавиатуре.
     *
     * @param {Event} e Событие, происходящее при каждом нажатии клавиши.
     * @returns {void}
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var input = e.target;

      if (e.keyCode === 8 && this.getInputNumberValues().length === 1) {
        input.value = "";
      }
    }
    /**
     * Применение маски к телефону при вставке скопированного номера.
     *
     * @param {Event} e Событие, происходящее при вставке скопированного номера.
     * @returns {void}
     */

  }, {
    key: "onPaste",
    value: function onPaste(e) {
      var pasted = e.clipboardData || window.clipboardData;
      var input = e.target;
      var inputNumbersValue = this.getInputNumberValues();

      if (pasted) {
        var pastedText = pasted.getData("Text");

        if (_regex.WITHOUT_DIGITS_REGEX.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    }
  }]);

  return PhoneInput;
}(_input.Input);

exports.PhoneInput = PhoneInput;

/***/ }),

/***/ "./scripts/main/components/form-field/select.js":
/*!******************************************************!*\
  !*** ./scripts/main/components/form-field/select.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct */ "../node_modules/core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _input = __webpack_require__(/*! @main/components/form-field/input */ "./scripts/main/components/form-field/input.js");

var _tomSelect = _interopRequireDefault(__webpack_require__(/*! tom-select */ "../node_modules/tom-select/dist/js/tom-select.complete.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Компонент селекта.
 */
var Select = /*#__PURE__*/function (_Input) {
  _inherits(Select, _Input);

  var _super = _createSuper(Select);

  /**
   * Инстанс компонента TomSelect.
   *
   * @type {TomSelect}
   * @private
   */

  /**
   * Создает компонент выбора файла.
   *
   * @param {object} props - Параметры компонента.
   * @param {HTMLElement} props.container - Родительский элемент.
   * @param {HTMLInputElement} props.input - Элемент ввода.
   */
  function Select(_ref) {
    var _this;

    var container = _ref.container,
        input = _ref.input;

    _classCallCheck(this, Select);

    _this = _super.call(this, {
      container: container,
      input: input
    });
    _this.tomSelect = void 0;
    _this.tomSelect = new _tomSelect["default"](_this.input, {
      hideSelected: false,
      controlClass: "form-field__input ts-control",
      dropdownClass: "ts-dropdown js-form-field-scroll",
      render: {
        no_results: function no_results() {
          return "<div class=\"option\">Ничего не найдено</div>";
        }
      },
      onType: function onType(str) {
        if (str) {
          _this.el.classList.add("filled");
        } else {
          _this.updateIsFilledStatus();
        }
      }
    });

    _this.input.classList.remove("form-field__select");

    return _this;
  }

  return Select;
}(_input.Input);

exports.Select = Select;

/***/ }),

/***/ "./scripts/main/components/form-field/textarea-counter.js":
/*!****************************************************************!*\
  !*** ./scripts/main/components/form-field/textarea-counter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextareaCounter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Класс поля ввода textarea со счётчиком введенных символов. */
var TextareaCounter = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {Element} el Элемент ввода.
   */
  function TextareaCounter(el) {
    _classCallCheck(this, TextareaCounter);

    this.el = el;
    this.counterElement = this.el.closest(".js-form-field").querySelector(".js-textarea-counter");
    this.bindEventListeners();
  }
  /**
   * Прослушиваем событие ввода в textarea.
   *
   * @returns {void}
   */


  _createClass(TextareaCounter, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.el.addEventListener("input", this.updateCounter.bind(this));
    }
    /**
     * Обновление счётчика введённых в поле символов.
     *
     * @returns {void}
     */

  }, {
    key: "updateCounter",
    value: function updateCounter() {
      var currentCount = this.el.value.length;
      this.counterElement.innerHTML = currentCount;
    }
  }]);

  return TextareaCounter;
}();

exports.TextareaCounter = TextareaCounter;
document.querySelectorAll(".js-form-field-with-counter").forEach(function (el) {
  return new TextareaCounter(el);
});

/***/ }),

/***/ "./scripts/main/components/form.js":
/*!*****************************************!*\
  !*** ./scripts/main/components/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "../node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "../node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "../node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _regex = __webpack_require__(/*! @main/consts/regex */ "./scripts/main/consts/regex.js");

var _fileFormats = __webpack_require__(/*! @main/consts/file-formats */ "./scripts/main/consts/file-formats.js");

var _fileSize = __webpack_require__(/*! @main/consts/file-size */ "./scripts/main/consts/file-size.js");

var _modal = __webpack_require__(/*! @main/components/modal */ "./scripts/main/components/modal.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Компонент для работы с формой (отправка, валидация). */
var Form = /*#__PURE__*/function () {
  /**
   * @type {{Boolean}} результат валидации инпута.
   * @private
   */

  /**
   * Создает компонент формы.
   *
   * @param {HTMLFormElement} form Элемент формы.
   */
  function Form(form) {
    var _this = this;

    _classCallCheck(this, Form);

    this.result = void 0;

    this.submitFormWithModal = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, modal) {
        var modalResult, _e$response$data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (_this.isValid) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return Form.fetchForm(_this.el, _this.url);

              case 6:
                modalResult = _this.successModal;

                _this.clearForm();

                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                modalResult = _this.errorModal;

                if (_context.t0.response) {
                  if ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message) {
                    _this.errorModalText.innerHTML = _context.t0.response.data.message;
                  } else {
                    _this.errorModalText.innerHTML = _messages.ERROR_DEFAULT;
                  }
                } else {
                  _this.errorModalText.innerHTML = _messages.ERROR_DEFAULT;
                }

              case 14:
                _modal.Modal.close(modal);

                _modal.Modal.open(modalResult);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    this.el = form;
    this.url = this.el.dataset.url;
    this.findElements();
    this.bindEventListeners();
  }
  /**
   * Поиск элементов компонента.
   *
   * @returns {void}
   */


  _createClass(Form, [{
    key: "findElements",
    value: function findElements() {
      this.fields = _toConsumableArray(this.el.querySelectorAll(".js-form-field")).map(function (field) {
        return {
          node: field,
          input: field.querySelector(".js-form-field-input"),
          fileField: field.querySelector(".js-form-field-file-caption")
        };
      });
      this.errorModal = document.querySelector(".js-modal[data-modal-name='failed-modal']");
      this.errorModalText = this.errorModal.querySelector(".js-fail-modal-text");
      this.successModal = document.querySelector(".js-modal[data-modal-name='success-modal']");
    }
    /**
     * Скрывает сообщение об ошибке.
     *
     * @param {HTMLDivElement} field Контейнер поля вода.
     * @returns {void}
     */

  }, {
    key: "hideFieldError",
    value: function hideFieldError(field) {
      field.classList.remove("error");
    }
    /**
     * Привязка обработчиков событий.
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      this.el.addEventListener("submit", function (e) {
        return e.preventDefault();
      });
      this.bindInputListeners();
    }
    /**
     * Привязка обработчиков событий ввода в поля.
     *
     * @returns {void}
     */

  }, {
    key: "bindInputListeners",
    value: function bindInputListeners() {
      var _this2 = this;

      this.fields.forEach(function (field) {
        field.input.addEventListener("input", function () {
          return _this2.hideFieldError(field.node);
        });
        field.input.addEventListener("blur", function () {
          return _this2.checkInput(field);
        });
        field.input.addEventListener("paste", function () {
          return _this2.hideFieldError(field.node);
        });
      });
    }
    /**
     * Обрабатывает submit формы и показывает нужный modal.
     *
     * @param {Event} e Событие, происходящее при отправке формы.
     * @param {HTMLElement} modal Модальное окно.
     * @returns {void}
     */

  }, {
    key: "clearForm",

    /**
     * Очистить поля формы.
     *
     * @returns {void}
     */
    value: function clearForm() {
      this.fields.forEach(function (field) {
        field.input.value = "";
        field.node.classList.remove("filled");

        if (field.fileField) {
          field.fileField.innerHTML = "";
        }

        if (field.input.classList.contains("tomselected")) {
          field.input.tomselect.clear();
        }
      });
    }
    /**
     * Определяет валидность ввода в форме.
     *
     * @returns {boolean} Флаг валидности введенной формы.
     */

  }, {
    key: "checkInput",

    /**
     * Определяет валидность ввода в форме.
     *
     * @param {object} field Объект поля ввода.
     * @returns {void}
     */
    value: function checkInput(field) {
      // если поле пустое - не показываем ошибку при blur-e даже если оно required
      if (!field.input.value) {
        field.node.classList.remove("error");
      } else {
        if (!this.validateField(field.input)) {
          field.node.classList.add("error");
        } else {
          field.node.classList.remove("error");
        }
      }
    }
    /**
     * Проверка заполнения обязательного поля ввода.
     *
     * @param {HTMLInputElement} input Инпут компонента формы.
     * @returns {boolean} Флаг заполнения поля.
     */

  }, {
    key: "isFilled",
    value: function isFilled(input) {
      if (input.required && !input.value) {
        return false;
      }

      return true;
    }
    /**
     * Проверка валидации поля ввода.
     *
     * @param {HTMLInputElement} input Инпут компонента формы.
     * @returns {boolean} Флаг валидности заполнения поля.
     */

  }, {
    key: "validateField",
    value: function validateField(input) {
      // Сначала проверяем обязательность поля, в нем наличие паттерна и соответствие ему введенного значения.
      // В случае отсутствия паттерна у обязательного поля - заполнено ли оно.
      // Если поле необязательно - this.result = true
      // после чего производим другие валидации и приводим к флагу this.result
      if (input.required) {
        if (input.pattern) {
          this.result = Form.isValidPattern(input) && Form.isValidLength(input);
        } else {
          // возвращает true в случае, если input не пустой и далее переходит к проверкам по типу input-а
          this.result = !!input.value;
        }
      } else if (!input.required) {
        this.result = true;
      }

      switch (input.type) {
        case "file":
          this.result = this.result && Form.isValidFile(input);
          break;

        case "tel":
          this.result = this.result && Form.isValidPhone(input);
          break;

        case "email":
          this.result = this.result && Form.isValidMail(input);
          break;

        case "number":
          this.result = this.result && Form.isValidNumber(input);
          break;

        case "password":
          this.result = this.result && Form.isValidPasswords(input) && Form.isValidPasswordByLetter(input) && Form.isValidPasswordByCapital(input);
          break;

        case "hidden":
          this.result = true;
          break;

        case "text":
          if (input.classList.contains("js-form-field-input-date")) {
            this.result = this.result && Form.isValidDate(input);
          } else {
            this.result = true;
          }

          break;

        default:
          this.result = true;
          break;
      }

      return this.result;
    }
    /**
     * Отправка формы.
     *
     * @param {HTMLFormElement} formNode DOM узел формы.
     * @param {string} url Url отправки формы.
     * @param {number} id Идентификатор.
     * @returns {object} Ответ сервера в формате, согласному std.
     */

  }, {
    key: "isValid",
    get: function get() {
      var _this3 = this;

      var isValid = true;
      this.fields.forEach(function (field) {
        if (field.node.classList.contains("error")) {
          field.node.classList.remove("error");
        }

        if (!_this3.validateField(field.input)) {
          isValid = false;
          field.node.classList.add("error");
        }
      });
      return isValid;
    }
  }], [{
    key: "fetchForm",
    value: function () {
      var _fetchForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(formNode, url) {
        var id,
            data,
            _yield$axios$post,
            response,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : undefined;
                data = new FormData(formNode);
                _context2.next = 4;
                return _axios["default"].post(url, data, {
                  params: {
                    id: id
                  }
                });

              case 4:
                _yield$axios$post = _context2.sent;
                response = _yield$axios$post.data;
                return _context2.abrupt("return", response);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fetchForm(_x3, _x4) {
        return _fetchForm.apply(this, arguments);
      }

      return fetchForm;
    }()
    /**
     * Проверка валидности элемента по его паттерну.
     *
     * @param {HTMLInputElement} input Инпут с паттерном.
     * @returns {boolean} Валидность элемента по паттерну.
     */

  }, {
    key: "isValidPattern",
    value: function isValidPattern(input) {
      var regex = new RegExp(input.pattern);
      return regex.test(input.value);
    }
    /**
     * Проверка валидности номера телефона.
     *
     * @param {HTMLInputElement} phoneInput Инпут телефона.
     * @returns {boolean} Ввод телефона валидный.
     */

  }, {
    key: "isValidPhone",
    value: function isValidPhone(phoneInput) {
      return phoneInput.value.length === Form.MAX_PHONE_LENGTH;
    }
    /**
     * Проверка валидности электронной почты.
     *
     * @param {HTMLInputElement} mailInput Инпут почты.
     * @returns {boolean} Валидность ввода почты.
     */

  }, {
    key: "isValidMail",
    value: function isValidMail(mailInput) {
      return _regex.EMAIL_REGEX.test(mailInput.value);
    }
    /**
     * Проверка валидности поля с числом.
     *
     * @param {HTMLInputElement} numberInput Инпут с номером.
     * @returns {boolean} Валидность ввода почты.
     */

  }, {
    key: "isValidNumber",
    value: function isValidNumber(numberInput) {
      if (numberInput.min && numberInput.max) {
        var min = +numberInput.min;
        var max = +numberInput.max;
        if (+numberInput.value < min || +numberInput.value > max) return;
      }

      return _regex.NUMBER_REGEX.test(numberInput.value);
    }
    /**
     * Проверка валидности выбора файлов.
     *
     * @param {HTMLInputElement} fileInput Инпут файла.
     * @returns {boolean} Валидность выбора файла.
     */

  }, {
    key: "isValidFile",
    value: function isValidFile(fileInput) {
      var errors = [];
      var result = true;

      if (!fileInput.files.length) {
        // поле с файлом - необязательное, если оно пустое - возвращаем true
        result = true;
      } else {
        // если файл прикреплен, проверяем его формат и размер
        var file = fileInput.files[0];

        if (file.size > _fileSize.MAX_FILE_SIZE) {
          errors.push("Размер файла должен быть не более 10Мб.");
          result = false;
        }

        if (_fileFormats.VALID_FILE_TYPES.indexOf(file.type) === -1) {
          errors.push("Поддерживаемые форматы для загрузки: doc, docx, xls, xlsx, pdf, png, jpg.");
          result = false;
        }
      }

      if (errors.length > 0) {
        var errorMessage = errors.join("<br>");
        var inputErrorElement = fileInput.closest(".js-form-field").querySelector(".js-form-field-caption");
        inputErrorElement.innerHTML = errorMessage;
      }

      return result;
    }
    /**
     * Проверка валидности длины строки.
     *
     * @param {HTMLInputElement} input Инпут.
     * @returns {boolean} Валидность длины строки.
     */

  }, {
    key: "isValidLength",
    value: function isValidLength(input) {
      if (input.maxLength && input.maxLength > 0) {
        if (input.value.length > input.maxLength) {
          return false;
        }
      }

      if (input.minLength && input.minLength > 0) {
        if (input.value.length < input.minLength) {
          return false;
        }
      }

      return true;
    }
    /**
     * Проверка введенного пароля на наличие хотя бы одной буквы.
     *
     * @param {HTMLInputElement} passwordInput Инпут пароля.
     * @returns {boolean} Валидность введенного пароля по наличию буквы.
     */

  }, {
    key: "isValidPasswordByLetter",
    value: function isValidPasswordByLetter(passwordInput) {
      if (!passwordInput.classList.contains("js-current-password")) {
        var password = passwordInput.value;
        var errorField = passwordInput.closest(".js-form-field").querySelector(".js-validation-error");

        if (_regex.PASSWORD_REGEX.test(password)) {
          errorField.innerHTML = "";
        } else {
          errorField.innerHTML = "Пароль должен содержать не менее 8 знаков и иметь заглавную букву";
        }

        return _regex.PASSWORD_REGEX.test(password);
      } else {
        return true;
      }
    }
    /**
     * Проверка наличия в пароле заглавных символов
     *
     * @param {HTMLInputElement} passwordInput Инпут пароля.
     * @returns {boolean} Валидность введенного пароля по наличию заглавных символов
     */

  }, {
    key: "isValidPasswordByCapital",
    value: function isValidPasswordByCapital(passwordInput) {
      if (!passwordInput.classList.contains("js-current-password")) {
        var errorField = passwordInput.closest(".js-form-field").querySelector(".js-validation-error");
        var password = passwordInput.value;

        if (!(password === password.toLowerCase())) {
          errorField.innerHTML = "";
        } else {
          errorField.innerHTML = "Пароль должен содержать не менее 8 знаков и иметь заглавную букву";
        }

        return !(password === password.toLowerCase());
      } else {
        return true;
      }
    }
    /**
     * Проверка введенных паролей на идентичность.
     *
     * @param {HTMLInputElement} passwordInput Инпут пароля.
     * @returns {boolean} Валидность введенных паролей.
     */

  }, {
    key: "isValidPasswords",
    value: function isValidPasswords(passwordInput) {
      var passwordGroup = passwordInput.closest(".js-password-group");

      if (!passwordGroup) {
        return !!passwordInput.value;
      } else {
        var inputs = passwordGroup.querySelectorAll("input"); // сравниваем значения инпутов только если оба сравниваемых поля заполнены

        if (inputs[0].value && inputs[1].value) {
          var passwordGroupError = passwordInput.closest(".js-password-group").querySelector(".js-caption-error");

          if (!(inputs[0].value === inputs[1].value) && passwordGroupError) {
            passwordGroupError.innerHTML = "";
            passwordGroupError.innerHTML = "Пароли не совпадают";
          } else {
            passwordGroupError.innerHTML = "";
          }

          return inputs[0].value === inputs[1].value;
        } else {
          return true;
        }
      }
    }
    /**
     * Проверка валидности поля с датой. Вывод ошибок.
     *
     * @param {HTMLInputElement} numberInput Инпут с датой.
     * @returns {boolean} Валидность ввода даты.
     */

  }, {
    key: "isValidDate",
    value: function isValidDate(dateInput) {
      var parentNode = dateInput.closest(".js-form-field");
      var errorField = parentNode.querySelector(".js-form-field-caption");

      if (dateInput.value.length < 10) {
        parentNode.classList.add("with-error");
        errorField.innerHTML = "Введите дату в формате ДД.ММ.ГГГГ";
        return false;
      } else {
        var userDate = dateInput.value;
        var userModifiedDate = userDate.replace(/(\d+).(\d+).(\d+)/, "$3/$2/$1");
        var userFormattedDate = new Date(userModifiedDate);
        var currentDate = new Date();

        if (userFormattedDate > currentDate) {
          parentNode.classList.add("with-error");
          errorField.innerHTML = "Введите дату меньше текущей";
          return false;
        } else {
          parentNode.classList.remove("with-error");
          errorField.innerHTML = "";
          return true;
        }
      }
    }
  }]);

  return Form;
}();

exports.Form = Form;
Form.MAX_PHONE_LENGTH = 18;

/***/ }),

/***/ "./scripts/main/components/list-items.js":
/*!***********************************************!*\
  !*** ./scripts/main/components/list-items.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vacancyItem = _interopRequireDefault(__webpack_require__(/*! @partials/vacancy-item.handlebars */ "./partials/vacancy-item.handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Класс для выведения списка вакансий в результатах поиска. */
var ListItems = /*#__PURE__*/function () {
  /**
   * Создает компонент.
   *
   * @param {Element} list - DOM элемент списка.
   */
  function ListItems(list, items) {
    _classCallCheck(this, ListItems);

    this.list = list;
    this.items = items;
    this.col = list.querySelector(".js-result-col");
  }
  /**
   * Очистка списка.
   *
   * @returns {void}
   */


  _createClass(ListItems, [{
    key: "clear",
    value: function clear() {
      this.col.innerHTML = "";
    }
    /**
     * Вывод карточек вакансий в колонку.
     *
     * @returns {void}
     */

  }, {
    key: "spreadItems",
    value: function spreadItems() {
      var _this = this;

      this.items.forEach(function (item) {
        _this.col.insertAdjacentHTML("beforeend", (0, _vacancyItem["default"])({
          item: item
        }));
      });
    }
  }]);

  return ListItems;
}();

exports["default"] = ListItems;
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/modal.js":
/*!******************************************!*\
  !*** ./scripts/main/components/modal.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _delay = __webpack_require__(/*! @main/consts/delay */ "./scripts/main/consts/delay.js");

var _getBtnFromTarget = __webpack_require__(/*! @main/utils/get-btn-from-target */ "./scripts/main/utils/get-btn-from-target.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Компонент модала. */
var Modal = /*#__PURE__*/function () {
  /**
   * Создаёт компонент модала.
   *
   * @param {HTMLElement} el Родительский элемент модала (элемент заднего фона).
   */
  function Modal(el) {
    _classCallCheck(this, Modal);

    this.el = el;
    this.name = this.el.dataset.modalName;
    this.bindEventListeners();

    if (this.el.classList.contains("js-modal-opened")) {
      Modal.open(this.el);
    }
  }
  /**
   * Вешает колбеки закрытия модала.
   *
   * @returns {void}
   */


  _createClass(Modal, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("click", function (e) {
        if (!e.target.closest(".js-modal-dialog") && !(0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-expanded-text") && !e.target.classList.contains("js-expanded-link") && !e.target.classList.contains("air-datepicker-cell") && !e.target.closest(".air-datepicker")) {
          Modal.close(_this.el);
        }
      });
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("js-modal-close")) {
          var curModal = e.target.closest(".js-modal");

          if (curModal) {
            Modal.close(curModal);
          } else {
            Modal.close(_this.el);
          }
        } else {
          var btn = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-modal-open");

          if (btn && btn.dataset.modal === _this.name) {
            e.preventDefault();
            Modal.open(_this.el);
          }
        }
      });
    }
    /**
     * Закрывает модал.
     *
     * @param {HTMLElement} modal Главный элемент модала.
     * @returns {void}
     */

  }], [{
    key: "close",
    value: function close(modal) {
      modal.classList.remove("visible");
      document.body.classList.remove("prevent-scroll");
    }
    /**
     * Открывает модал.
     *
     * @param {Element} modal Главный элемент модала.
     * @returns {void}
     */

  }, {
    key: "open",
    value: function open(modal) {
      modal.classList.add("visible");
      document.body.classList.add("prevent-scroll");
      var input = modal.querySelector("input");

      if (input) {
        input.focus();
      }

      if (modal.classList.contains("js-modal-autoclose")) {
        Modal.autoclose(modal);
      }
    }
    /**
     * Закрыть модал по таймауту.
     *
     * @param {Element} modal Главный элемент модала.
     * @returns {void}
     */

  }, {
    key: "autoclose",
    value: function autoclose(modal) {
      setTimeout(function () {
        Modal.close(modal);
      }, _delay.NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE);
    }
  }]);

  return Modal;
}();

exports.Modal = Modal;
document.querySelectorAll(".js-modal").forEach(function (el) {
  return new Modal(el);
});

/***/ }),

/***/ "./scripts/main/components/notification.js":
/*!*************************************************!*\
  !*** ./scripts/main/components/notification.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = void 0;

var _delay = __webpack_require__(/*! @main/consts/delay */ "./scripts/main/consts/delay.js");

var _cookie = __webpack_require__(/*! @main/utils/cookie */ "./scripts/main/utils/cookie.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Всплывающее уведомление.
 */
var Notification = /*#__PURE__*/function () {
  /**
   * Создает компонент.
   *
   * @param {HTMLElement} el Элемент-уведомление.
   */
  function Notification(el) {
    _classCallCheck(this, Notification);

    this.el = el;
    this.type = this.el.dataset.type;
    this.cookieName = this.el.dataset.cookie;
    this.btnCookie = this.el.querySelector(".js-button-cookies");
    this.timer = null;
    this.bindEventListeners();
    this.autoShow();
    this.showByCookie();
  }
  /**
   * Показать плашку с уведомлением. Закрыть по таймауту, если нужно.
   *
   * @returns {void}
   */


  _createClass(Notification, [{
    key: "show",
    value: function show() {
      var _this = this;

      this.el.classList.add("visible");

      if (this.el.classList.contains("js-auto-close")) {
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          _this.close();
        }, _delay.NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE);
      }
    }
    /**
     * Показать плашку с уведомлением автоматически при загрузке страницы
     *
     * @returns {void}
     */

  }, {
    key: "autoShow",
    value: function autoShow() {
      if (this.el.classList.contains("js-auto-notification")) {
        this.show();
      }
    }
    /**
     * Показать плашку с уведомлением в зависимости от куки.
     *
     * @returns {void}
     */

  }, {
    key: "showByCookie",
    value: function showByCookie() {
      if (this.el.classList.contains("js-cookies-notification")) {
        if ((0, _cookie.getCookie)(this.cookieName) !== "accept") {
          this.show();
        }
      }
    }
    /**
     * Закрыть плашку с уведомлением.
     *
     * @returns {void}
     */

  }, {
    key: "close",
    value: function close() {
      this.el.classList.remove("visible");
    }
    /**
     * Обрабатываем клик. Закрываем плашку только если кликнули на ОК
     *
     * @returns {void}
     */

  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      if (this.btnCookie) {
        this.btnCookie.addEventListener("click", function () {
          (0, _cookie.setCookie)(_this2.cookieName, "accept");

          _this2.close();
        });
      }
    }
  }]);

  return Notification;
}();

exports.Notification = Notification;
document.querySelectorAll(".js-notification").forEach(function (el) {
  return new Notification(el);
});

/***/ }),

/***/ "./scripts/main/components/page-nav.js":
/*!*********************************************!*\
  !*** ./scripts/main/components/page-nav.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageNav = void 0;

var _pagenav = _interopRequireDefault(__webpack_require__(/*! @partials/pagenav.handlebars */ "./partials/pagenav.handlebars"));

var _consts = __webpack_require__(/*! @main/consts */ "./scripts/main/consts/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PageNav = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLFormElement} el Элемент.
   * @param {settings} settings Параметры компонента.
   * @param {URLSearchParams} settings.urlParams Get-параметры запроса.
   * @param {string} settings.baseUrl Базовый урл.
   * @param {int} settings.pages Количество страниц.
   * @param {int} settings.page Текущая страница.
   *
   */
  function PageNav(el, settings) {
    _classCallCheck(this, PageNav);

    this.el = el;
    this.settings = settings;
    this.pageInput = document.querySelector(".js-filter-page");
    this.objResult = {
      prev: null,
      items: [],
      next: null
    };
    this.shiftStart = 0;
    this.shiftEnd = 0;
    this.printNav();
  }
  /**
   * Вывести пагинацию.
   *
   * @returns {void}
   */


  _createClass(PageNav, [{
    key: "printNav",
    value: function printNav() {
      this.settings.pages = Number(this.settings.pages);

      if (this.settings.pages > 1) {
        this.checkPage();
        this.makePrev();
        this.makeNext();
        this.makeOtherPages();
        this.el.innerHTML = (0, _pagenav["default"])(this.objResult);
        this.pageInput.value = this.settings.page;
      } else {
        this.el.innerHTML = "";
        this.pageInput.value = 1;
      }
    }
    /**
     * Проверить текущую страницу на доступность.
     *
     * @returns {void}
     */

  }, {
    key: "checkPage",
    value: function checkPage() {
      this.settings.page = Number(this.settings.page) || 0;

      if (this.settings.page < 1) {
        this.settings.page = 1;
      }

      if (this.settings.page > this.settings.pages) {
        this.settings.page = 1;
      }
    }
    /**
     * Задать урл кнопки предыдущая страница, если не первая странца текущая.
     *
     * @returns {void}
     */

  }, {
    key: "makePrev",
    value: function makePrev() {
      if (this.settings.page > 1) {
        this.objResult.prev = this.getLinkUrl(this.settings.page - 1);
      }
    }
    /**
     * Задать урл кнопки следующая страница, если не последняя страница текущая.
     *
     * @returns {void}
     */

  }, {
    key: "makeNext",
    value: function makeNext() {
      if (this.settings.page < this.settings.pages) {
        this.objResult.next = this.getLinkUrl(this.settings.page + 1);
      }
    }
    /**
     * Получить ссылку на страницу с параметрами.
     *
     * @param {int} pageNum Номер страницы.
     * @returns {string}
     */

  }, {
    key: "getLinkUrl",
    value: function getLinkUrl(pageNum) {
      this.settings.urlParams.set("page", pageNum);
      return this.settings.baseUrl + "?" + this.settings.urlParams.toString();
    }
    /**
     * Сформировать массив кнопок на остальные страницы.
     *
     * @returns {void}
     */

  }, {
    key: "makeOtherPages",
    value: function makeOtherPages() {
      this.calcCentralRange();
      this.objResult.items.push({
        url: this.getLinkUrl(1),
        active: 1 === this.settings.page,
        hiddenMd: this.settings.page > 2,
        separator: false,
        num: 1
      });

      if (this.shiftStart === 3) {
        this.objResult.items.push({
          url: this.getLinkUrl(2),
          active: 2 === this.settings.page,
          hiddenMd: this.settings.page > 3,
          separator: false,
          num: 2
        });
      } else if (this.shiftStart > 3) {
        this.objResult.items.push({
          url: "",
          active: false,
          hiddenMd: true,
          separator: true,
          num: ""
        });
      }

      for (var i = this.shiftStart; i <= this.shiftEnd; i++) {
        this.objResult.items.push({
          url: this.getLinkUrl(i),
          active: i === this.settings.page,
          separator: false,
          num: i
        });
      }

      var last_page = this.settings.pages - 1;

      if (this.shiftEnd === last_page - 1) {
        this.objResult.items.push({
          url: this.getLinkUrl(last_page),
          active: last_page === this.settings.page,
          hiddenMd: this.settings.page < last_page - 1,
          separator: false,
          num: last_page
        });
      } else if (this.shiftEnd < last_page) {
        this.objResult.items.push({
          url: "",
          active: false,
          hiddenMd: true,
          separator: true,
          num: ""
        });
      }

      this.objResult.items.push({
        url: this.getLinkUrl(this.settings.pages),
        active: this.settings.pages === this.settings.page,
        hiddenMd: this.settings.page < last_page,
        num: this.settings.pages,
        separator: false
      });
    }
    /**
     * Сколько показывать кнопок страниц до и после актуальной
     * Пример:
     * SPRED_PAGES = 2
     * Всего 9 страниц навигации и сейчас просматривают 5ю
     * 3 4 5 6 7
     * shiftStart = начало средней части (3 в этом примере)
     * shiftEnd = конец средней части (7 в этом примере)
     *
     *
     * @returns {void}
     *
     */

  }, {
    key: "calcCentralRange",
    value: function calcCentralRange() {
      this.shiftStart = Math.max(this.settings.page - _consts.SPRED_PAGES, 2);
      this.shiftEnd = Math.min(this.settings.page + _consts.SPRED_PAGES, this.settings.pages - 1);

      if (this.shiftEnd < _consts.SPRED_PAGES * 2) {
        this.shiftEnd = Math.min(_consts.SPRED_PAGES * 2, this.settings.pages - 1);
      }

      if (this.shiftEnd === this.settings.pages - 1 && this.shiftStart > 3) {
        this.shiftStart = Math.max(3, Math.min(this.settings.pages - _consts.SPRED_PAGES * 2 + 1, this.shiftStart));
      }
    }
  }]);

  return PageNav;
}();

exports.PageNav = PageNav;

/***/ }),

/***/ "./scripts/main/components/search/search-form-ajax.js":
/*!************************************************************!*\
  !*** ./scripts/main/components/search/search-form-ajax.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.url */ "../node_modules/core-js/modules/web.url.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _pageNav = __webpack_require__(/*! @main/components/page-nav */ "./scripts/main/components/page-nav.js");

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

var _listItems = _interopRequireDefault(__webpack_require__(/*! @main/components/list-items */ "./scripts/main/components/list-items.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Класс формы поиска вакансии. */
var SearchFormAjax = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLFormElement} el Элемент.
   */
  function SearchFormAjax(el) {
    var _this = this;

    _classCallCheck(this, SearchFormAjax);

    this.sendData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var frmData, urlParams, queryString, response, _e$response$data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.el.classList.contains("waiting")) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _this.el.classList.add("waiting");

              frmData = new FormData(_this.el);
              urlParams = new URLSearchParams(frmData);
              queryString = urlParams.toString();
              _context.prev = 6;
              _context.prev = 7;
              _context.next = 10;
              return _axios["default"].get(_this.url + "?" + queryString);

            case 10:
              response = _context.sent;
              window.history.pushState(null, null, window.location.pathname + "?" + queryString);

              _this.showResult(response.data, urlParams);

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](7);

              if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                _this.showError(_context.t0.response.data.message);
              } else {
                _this.showError(_messages.ERROR_DEFAULT);

                console.log(_context.t0);
              }

            case 18:
              _context.prev = 18;

              _this.el.classList.remove("waiting");

              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6,, 18, 21], [7, 15]]);
    }));
    this.el = el;
    this.url = this.el.dataset.url;
    this.results = document.querySelector(".js-search-results");
    this.list = this.results.querySelector(".js-search-results-list");
    this.listResult = this.results.querySelector(".js-result-col");
    this.navBlock = this.results.querySelector(".js-search-nav");
    this.nav = this.navBlock.querySelector(".js-search-results-nav");
    this.error = this.results.querySelector(".js-search-results-error");
    this.emptyResult = this.results.querySelector(".js-empty-search");
    this.bindEventListeners();
  }
  /**
   * Инициализация эвентов.
   *
   * @returns {void}
   */


  _createClass(SearchFormAjax, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this2 = this;

      this.el.addEventListener("submit", function (e) {
        e.preventDefault();

        _this2.sendData();
      });
    }
    /**
     * Отправка данных на сервер.
     *
     * @returns {void}
     */

  }, {
    key: "showResult",

    /**
     * Вывести список и пагинацию.
     *
     * @param {object} data Данные ответа сервера.
     * @param {URLSearchParams} urlParams Параметры запроса из данных формы.
     *
     * @returns {void}
     */
    value: function showResult(data, urlParams) {
      this.list.removeAttribute("style");
      this.list.classList.remove("empty-result-list");

      if (!data.items || !data.items.length) {
        this.listResult.innerHTML = "";
        this.navBlock.innerHTML = "";
        this.emptyResult.classList.add("empty");
        this.list.classList.add("empty-result-list");
        return;
      }

      this.results.classList.remove("empty");
      this.printList(data.items);
      var settings = {
        urlParams: urlParams,
        baseUrl: window.location.pathname,
        pages: data.pages,
        page: data.page
      };
      new _pageNav.PageNav(this.nav, settings);
    }
    /**
     * Вывести список.
     *
     * @param {Array} items Массив объектов-вакансий.
     * @returns {void}
     */

  }, {
    key: "printList",
    value: function printList(items) {
      var objItems = new _listItems["default"](this.list, items);
      objItems.clear();
      objItems.spreadItems();
    }
    /**
     * Вывести ошибку.
     *
     * @param {string} error Текст ошибки.
     * @returns {void}
     */

  }, {
    key: "showError",
    value: function showError(error) {
      this.error.innerHTML = error;
      this.navBlock.innerHTML = "";
      this.listResult.innerHTML = "";
      this.emptyResult.classList.add("empty");
    }
  }]);

  return SearchFormAjax;
}();

exports["default"] = SearchFormAjax;
document.querySelectorAll(".js-search-form-ajax").forEach(function (el) {
  return new SearchFormAjax(el);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/search/search-hints.js":
/*!********************************************************!*\
  !*** ./scripts/main/components/search/search-hints.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _autocomplete = __webpack_require__(/*! @main/components/autocomplete */ "./scripts/main/components/autocomplete.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SearchHints = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function SearchHints(el) {
    _classCallCheck(this, SearchHints);

    this.el = el;
    this.form = this.el.closest("form");
    this.input = this.el.querySelector(".js-autocomplete-input");
    this.action = this.form.dataset.action;
    this.initAutocomplete();
  }
  /**
   * Инициализация поля с подсказками.
   *
   * @returns {void}
   */


  _createClass(SearchHints, [{
    key: "initAutocomplete",
    value: function initAutocomplete() {
      new _autocomplete.Autocomplete(this.el, this.onValueSelect.bind(this));
    }
    /**
     * При выборе значения из списка найденного
     *
     * @returns {void}
     */

  }, {
    key: "onValueSelect",
    value: function onValueSelect() {}
  }]);

  return SearchHints;
}();

exports["default"] = SearchHints;
document.querySelectorAll(".js-filter-hints").forEach(function (elem) {
  return new SearchHints(elem);
});
module.exports = exports.default;

/***/ }),

/***/ "./scripts/main/components/show-more.js":
/*!**********************************************!*\
  !*** ./scripts/main/components/show-more.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "../node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");

var _axios = _interopRequireDefault(__webpack_require__(/*! @main/axios */ "./scripts/main/axios/index.js"));

var _messages = __webpack_require__(/*! @main/consts/messages */ "./scripts/main/consts/messages.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//import photoTemplate from "@partials/photo.handlebars";
var ShowMore = /*#__PURE__*/function () {
  /**
   * Создает компонент кнопки показать еще.
   *
   * @param {HTMLElement} el - DOM элемент.
   */
  function ShowMore(el) {
    var _this = this;

    _classCallCheck(this, ShowMore);

    this.sendData = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var params, response, _e$response$data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this.el.classList.contains("waiting")) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _this.el.classList.add("waiting");

              params = {
                page: _this.page + 1
              };
              _context.prev = 4;
              _context.prev = 5;
              _context.next = 8;
              return (0, _axios["default"])({
                url: _this.url,
                params: params,
                method: "get"
              });

            case 8:
              response = _context.sent;

              _this.showResult(response.data);

              _this.checkLastPage(response.data);

              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](5);

              if (_context.t0.response && ((_e$response$data = _context.t0.response.data) === null || _e$response$data === void 0 ? void 0 : _e$response$data.message)) {
                _this.showError(_context.t0.response.data.message);
              } else {
                _this.showError(_messages.ERROR_DEFAULT);

                console.log(_context.t0);
              }

            case 16:
              _context.prev = 16;

              _this.el.classList.remove("waiting");

              return _context.finish(16);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4,, 16, 19], [5, 13]]);
    }));
    this.el = el;
    this.type = el.dataset.type;
    this.url = el.dataset.url;
    this.scroll = el.dataset.scroll;
    this.page = Number(el.dataset.page);
    this.list = document.querySelector(".js-show-more-list[data-type='" + this.type + "']");
    this.error = document.querySelector(".js-show-more-error[data-type='" + this.type + "']");
    this.slider = document.querySelector(".js-fast-slider");
    this.bindEventlisteners();
    this.autoloadFirstPage();
  }
  /**
   * По клику на кнопку отправлять запрос.
   *
   * @returns {void}
   */


  _createClass(ShowMore, [{
    key: "bindEventlisteners",
    value: function bindEventlisteners() {
      var _this2 = this;

      this.el.addEventListener("click", function (e) {
        e.preventDefault();

        _this2.sendData();
      });
    }
    /**
     * Подгружаем первую страницу аяксом по классу js-show-more-autoload.
     *
     * @returns {void}
     */

  }, {
    key: "autoloadFirstPage",
    value: function autoloadFirstPage() {
      if (this.el.classList.contains("js-show-more-autoload")) {
        this.el.click();
      }
    }
    /**
     * Отправить запрос для получения следующей страницы
     *
     * @returns {void}
     */

  }, {
    key: "showResult",

    /**
     * Добавить новые элементы в список по шаблону в зависимости от типа
     *
     * @param {object} data - Данные с сервера.
     * @returns {void}
     */
    value: function showResult(data) {
      switch (this.type) {
        case "photo":
          this.showPhotoSets(data);
          break;
      }
    }
    /**
     * Добавить новые элементы в список съемок.
     *
     * @param {object} data - Данные с сервера.
     * @returns {void}
     */

    /**
     * Удалить кнопку если страниц больше нет
     *
     * @returns {void}
     */

  }, {
    key: "checkLastPage",
    value: function checkLastPage(data) {
      this.page++;

      if (Number(data.pages) <= this.page) {
        this.el.remove();
      }
    }
    /**
     * Вывести ошибку отправки запроса
     *
     * @returns {void}
     */

  }, {
    key: "showError",
    value: function showError(error) {
      if (this.error) {
        this.error.innerHTML = error;
      } else {
        alert(error);
      }
    }
  }]);

  return ShowMore;
}();

document.querySelectorAll(".js-show-more").forEach(function (el) {
  return new ShowMore(el);
});

/***/ }),

/***/ "./scripts/main/components/sliders/corporate-life-slider.js":
/*!******************************************************************!*\
  !*** ./scripts/main/components/sliders/corporate-life-slider.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

var _swiper = _interopRequireDefault(__webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js"));

var _media = __webpack_require__(/*! @main/consts/media */ "./scripts/main/consts/media.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Класс слайдера с картинками на странице "Корпоративная жизнь". */
var CorporateLifeSlider = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function CorporateLifeSlider(el) {
    _classCallCheck(this, CorporateLifeSlider);

    this.el = el;
    this.initSlider();
  }
  /**
   * Инициализация слайдера.
   *
   * @returns {void}
   */


  _createClass(CorporateLifeSlider, [{
    key: "initSlider",
    value: function initSlider() {
      var _breakpoints;

      new _swiper["default"](this.el, {
        centeredSlides: true,
        loop: true,
        coverflowEffect: {
          slideShadows: true
        },
        spaceBetween: 8,
        breakpoints: (_breakpoints = {}, _defineProperty(_breakpoints, _media.sm, {
          slidesPerView: 1.1
        }), _defineProperty(_breakpoints, _media.md, {
          slidesPerView: 1.08,
          spaceBetween: 8
        }), _defineProperty(_breakpoints, _media.lg, {
          slidesPerView: 1.1,
          spaceBetween: 24
        }), _defineProperty(_breakpoints, _media.xl, {
          slidesPerView: 1.13,
          spaceBetween: 24
        }), _defineProperty(_breakpoints, _media.xxl, {
          slidesPerView: 1.4,
          spaceBetween: 24
        }), _breakpoints)
      });
    }
  }]);

  return CorporateLifeSlider;
}();

window.addEventListener("load", function () {
  document.querySelectorAll(".js-corporate-life-slider").forEach(function (slider) {
    return new CorporateLifeSlider(slider);
  });
}, false);

/***/ }),

/***/ "./scripts/main/components/sliders/history/history-tiny-slider.js":
/*!************************************************************************!*\
  !*** ./scripts/main/components/sliders/history/history-tiny-slider.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

var _tinySlider = __webpack_require__(/*! @main/components/sliders/history/tiny-slider */ "./scripts/main/components/sliders/history/tiny-slider.js");

var _media = __webpack_require__(/*! @main/consts/media */ "./scripts/main/consts/media.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener("DOMContentLoaded", function () {
  var _responsive;

  var sliders = [{
    params: {
      container: ".js-history-slider",
      mode: "gallery",
      speed: 100,
      items: 1,
      gutter: 40,
      controls: false,
      nav: true,
      navPosition: "top",
      mouseDrag: true,
      touch: true,
      navContainer: ".js-dots-nav-container",
      loop: false,
      controlsText: ["", ""],
      navAsThumbnails: true,
      preventScrollOnTouch: "force",
      preventActionWhenRunning: true,
      swipeAngle: 30,
      freezable: false
    },
    callbacks: {
      transitionEnd: function transitionEnd(slider) {
        slider.handleGoToSlideClick();
        slider.translateHistorySlider({
          container: ".js-history-dots",
          dots: ".js-history-dot"
        });
      }
    }
  }, {
    params: {
      loop: false,
      container: ".js-dots-nav-container",
      items: 3,
      controls: false,
      mouseDrag: true,
      nav: false,
      navAsThumbnails: false,
      arrowKeys: false,
      controlsText: ["", ""],
      touch: true,
      freezable: true,
      preventScrollOnTouch: "force",
      preventActionWhenRunning: true,
      swipeAngle: 30,
      responsive: (_responsive = {}, _defineProperty(_responsive, _media.md, {
        items: 8
      }), _defineProperty(_responsive, _media.lg, {
        items: 10
      }), _defineProperty(_responsive, _media.xl, {
        items: 12
      }), _responsive),
      onInit: function onInit(slider) {
        slider.translateHistorySlider({
          container: ".js-history-dots",
          dots: ".js-history-dot"
        });
      }
    },
    callbacks: {
      transitionEnd: function transitionEnd(slider) {
        slider.handleGoToSlideClick();
        slider.translateHistorySlider({
          container: ".js-history-dots",
          dots: ".js-history-dot"
        });
      }
    }
  }];
  sliders.forEach(function (el) {
    new _tinySlider.Slider(el);
  });
});

/***/ }),

/***/ "./scripts/main/components/sliders/history/tiny-slider.js":
/*!****************************************************************!*\
  !*** ./scripts/main/components/sliders/history/tiny-slider.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "../node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "../node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

var _tinySlider = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "../node_modules/tiny-slider/src/tiny-slider.js");

var _media = __webpack_require__(/*! @main/consts/media */ "./scripts/main/consts/media.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Класс для управления слайдерами
 */
var Slider = /*#__PURE__*/function () {
  /**
   * @param params
   * @param callbacks
   * @param methods
   */
  function Slider(_ref) {
    var _this = this;

    var _ref$params = _ref.params,
        params = _ref$params === void 0 ? {
      container: ".tiny-slider",
      preventScrollOnTouch: "auto"
    } : _ref$params,
        _ref$callbacks = _ref.callbacks,
        callbacks = _ref$callbacks === void 0 ? {} : _ref$callbacks,
        _ref$methods = _ref.methods,
        methods = _ref$methods === void 0 ? {} : _ref$methods;

    _classCallCheck(this, Slider);

    if (params) {
      Object.keys(params).forEach(function (key) {
        if (typeof params[key] === "function") {
          var fn = params[key];

          params[key] = function () {
            return fn.call(_this, _this);
          };
        }
      });
    }

    this.options = params;
    this.selector = this.options.container;
    this.callbacks = callbacks;
    this.methods = methods;
    this.tinySlider = undefined;
    this.mount();
  }
  /**
   * Инициализация слайдера с опциями
   */


  _createClass(Slider, [{
    key: "mount",
    value: function mount() {
      this.container = document.querySelector(this.selector);

      if (this.container) {
        this.tinySlider = (0, _tinySlider.tns)(this.options);
        this.bindSliderFunctions();
      }
    }
    /**
     * Возвращает информацию по текущему слайдеру.
     * Функция для сокращения существующей записи.
     *
     * @returns {TinySliderInfo}
     */

  }, {
    key: "getInfoAboutSlider",
    value: function getInfoAboutSlider() {
      return this.tinySlider.getInfo();
    }
    /**
     * Подключение функций для слайдера
     */

  }, {
    key: "bindSliderFunctions",
    value: function bindSliderFunctions() {
      var _this2 = this;

      var callbacks = this.callbacks;
      var methods = this.methods;

      if (callbacks) {
        Object.keys(callbacks).forEach(function (key) {
          if (typeof callbacks[key] === "function") {
            _this2.tinySlider.events.on(key, function () {
              return callbacks[key].call(_this2, _this2);
            });
          }
        });
      }

      if (methods) {
        Object.keys(methods).forEach(function (key) {
          if (typeof methods[key] === "function") {
            methods[key].call(_this2, _this2);
          }
        });
      }
    }
    /**
     * Переключение активного слайда при клике на слайд с указанным селектором.
     *
     * @param selector
     * @param slideIndex
     */

  }, {
    key: "handleGoToSlideClick",
    value: function handleGoToSlideClick() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".history-slide";
      var thumbs = this.container.querySelectorAll(selector);

      if (window.innerWidth < _media.lg) {
        thumbs.forEach(function (thumb) {
          thumb.addEventListener("touchmove", function () {
            var container = document.querySelector(".js-dots-nav-container");
            var activeDot = container.querySelector(".tns-nav-active");
            activeDot.scrollIntoView({
              block: "nearest",
              inline: "center",
              behavior: "smooth"
            });
          });
        });
      }
    }
    /**
     * Расчет размеров слайда с контентом в зависимости от положения активной точки с годом.
     * @param container
     * @param dots
     */

  }, {
    key: "translateHistorySlider",
    value: function translateHistorySlider() {
      var _this3 = this;

      var sectionContainer = document.querySelector(".js-history-section-container");
      var paddingSlider = parseInt(getComputedStyle(sectionContainer).paddingLeft) * 2;

      if (window.innerWidth < _media.md) {
        return;
      }

      var container = document.querySelector(".js-dots-nav-container");
      var activeDot = container.querySelector(".tns-nav-active");
      var positionActiveDot = activeDot.getBoundingClientRect().left;
      var sliderContainer = document.querySelector(".js-history-container");
      var activeSlideWrapper = activeDot.querySelector(".js-slide-wrapper");
      var activeSliderLine = activeDot.querySelector(".js-history-slide-line");
      var slideLines = document.querySelectorAll(".js-history-slide-line");
      var activeSlideContent = activeDot.querySelector(".js-slide-content");
      var slidesContent = document.querySelectorAll(".js-slide-content");
      var sliderContainerRect = sliderContainer.getBoundingClientRect();
      var sliderContainerWidth = parseInt(sliderContainerRect.width);
      var sliderContainerLeft = parseInt(sliderContainerRect.left);
      var sliderContainerWithoutPaddings = sliderContainerWidth - paddingSlider;
      activeSlideWrapper.style.width = Math.abs(window.innerWidth - positionActiveDot - paddingSlider - sliderContainerLeft) + "px";
      var activeSlideWrapperHeight = activeSlideWrapper.getBoundingClientRect().height;
      sliderContainer.style.paddingBottom = 0;
      sliderContainer.style.paddingBottom = activeSlideWrapperHeight + "px";
      slideLines.forEach(function (line) {
        return _this3.removeClass(line, "transitioned");
      });
      slidesContent.forEach(function (slide) {
        return _this3.removeClass(slide, "visible");
      });
      activeSliderLine.style.left = activeDot.clientWidth / 2 + "px";
      activeSliderLine.classList.add("transitioned");
      activeSlideContent.classList.add("visible");

      if (Math.abs(parseInt(activeSlideWrapper.style.width)) <= sliderContainerWithoutPaddings / 2) {
        activeSlideWrapper.style.left = "auto";
        activeSlideWrapper.style.right = "100%";
        activeSlideWrapper.classList.add("is-reverse");
        activeSlideWrapper.style.width = positionActiveDot - sliderContainerLeft + "px";
        var _activeSlideWrapperHeight = activeSlideWrapper.getBoundingClientRect().height;
        sliderContainer.style.paddingBottom = _activeSlideWrapperHeight + "px";
        activeSliderLine.style.left = "auto";
        activeSliderLine.style.right = -activeDot.clientWidth / 2 + "px";
      } else {
        activeSlideWrapper.style.left = "0";
        activeSlideWrapper.style.right = "auto";
        activeSlideWrapper.classList.remove("is-reverse");
      }

      if (positionActiveDot < 0) {
        activeSlideWrapper.style.paddingLeft = Math.abs(positionActiveDot) + "px";
        activeSlideWrapper.style.width = sliderContainer.clientWidth + Math.abs(positionActiveDot) + "px";
      } else if (positionActiveDot > sliderContainer.getBoundingClientRect().right) {
        activeSlideWrapper.style.paddingRight = positionActiveDot - sliderContainer.clientWidth + activeDot.clientWidth + "px";
        activeSlideWrapper.style.width = sliderContainer.clientWidth + "px";
      } else {
        activeSlideWrapper.style.paddingLeft = "0";
        activeSlideWrapper.style.paddingRight = "0";
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(item, className) {
      item.classList.remove(className);
    }
  }]);

  return Slider;
}();

exports.Slider = Slider;

/***/ }),

/***/ "./scripts/main/components/sliders/index.js":
/*!**************************************************!*\
  !*** ./scripts/main/components/sliders/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./vacancy-slider */ "./scripts/main/components/sliders/vacancy-slider.js");

__webpack_require__(/*! ./corporate-life-slider */ "./scripts/main/components/sliders/corporate-life-slider.js");

__webpack_require__(/*! ./history/history-tiny-slider */ "./scripts/main/components/sliders/history/history-tiny-slider.js");

/***/ }),

/***/ "./scripts/main/components/sliders/vacancy-slider.js":
/*!***********************************************************!*\
  !*** ./scripts/main/components/sliders/vacancy-slider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

var _swiper = _interopRequireWildcard(__webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js"));

var _media = __webpack_require__(/*! @main/consts/media */ "./scripts/main/consts/media.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_swiper["default"].use([_swiper.Navigation]);

_swiper["default"].use([_swiper.Pagination]);
/** Класс слайдера с вакансиями. */


var VacancySlider = /*#__PURE__*/function () {
  /**
   * Конструктор класса.
   *
   * @param {HTMLElement} el Элемент.
   */
  function VacancySlider(el) {
    _classCallCheck(this, VacancySlider);

    this.el = el;
    this.swiperElement = this.el.querySelector(".js-vacancy-slider-swiper");
    this.btnPrev = this.el.querySelector(".js-vacancy-slider-prev");
    this.btnNext = this.el.querySelector(".js-vacancy-slider-next");
    this.initSlider();
  }
  /**
   * Инициализация слайдера.
   *
   * @returns {void}
   */


  _createClass(VacancySlider, [{
    key: "initSlider",
    value: function initSlider() {
      var _breakpoints;

      new _swiper["default"](this.swiperElement, {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        navigation: {
          prevEl: this.btnPrev,
          nextEl: this.btnNext
        },
        breakpoints: (_breakpoints = {}, _defineProperty(_breakpoints, _media.sm0, {
          slidesPerView: 1.1
        }), _defineProperty(_breakpoints, _media.sm1, {
          slidesPerView: 2.1
        }), _defineProperty(_breakpoints, _media.lg, {
          slidesPerView: 2
        }), _breakpoints)
      });
    }
  }]);

  return VacancySlider;
}();

window.addEventListener("load", function () {
  document.querySelectorAll(".js-vacancy-slider").forEach(function (slider) {
    return new VacancySlider(slider);
  });
}, false);

/***/ }),

/***/ "./scripts/main/components/toggle-menu.js":
/*!************************************************!*\
  !*** ./scripts/main/components/toggle-menu.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

var _media = __webpack_require__(/*! @main/consts/media */ "./scripts/main/consts/media.js");

var _getBtnFromTarget = __webpack_require__(/*! @main/utils/get-btn-from-target */ "./scripts/main/utils/get-btn-from-target.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ToggleMenu = /*#__PURE__*/function () {
  /**
   * Создает компонент, который открывает/закрывает меню.
   *
   */
  function ToggleMenu() {
    _classCallCheck(this, ToggleMenu);

    this.bindEventListeners();
  }
  /**
   * Событие клика на документ
   *
   * @returns {void}
   */


  _createClass(ToggleMenu, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      document.addEventListener("click", function (e) {
        var btn = (0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-toggle-menu");

        if (btn) {
          e.preventDefault();

          if (document.body.classList.contains("menu-opened")) {
            _this.closeMenu();
          } else {
            _this.openMenu(btn);
          }
        } else if (!(0, _getBtnFromTarget.getBtnFromTarget)(e.target, "js-menu")) {
          _this.closeMenu();
        }
      });
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      if (window.innerWidth < _media.lg) {
        document.body.classList.remove("prevent-scroll");
      }

      document.body.classList.remove("menu-opened");
      document.querySelectorAll(".js-menu").forEach(function (menu) {
        return menu.classList.remove("opened");
      });
    }
  }, {
    key: "openMenu",
    value: function openMenu(btn) {
      var type = btn.dataset.type;
      var menus = document.querySelectorAll(".js-menu[data-type='" + type + "']");

      if (window.innerWidth < _media.lg) {
        document.body.classList.add("prevent-scroll");
      }

      document.body.classList.add("menu-opened");
      menus.forEach(function (menu) {
        return menu.classList.add("opened");
      });
    }
  }]);

  return ToggleMenu;
}();

new ToggleMenu();

/***/ }),

/***/ "./scripts/main/components/warning.js":
/*!********************************************!*\
  !*** ./scripts/main/components/warning.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "../node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Warning = void 0;

var _warning = _interopRequireDefault(__webpack_require__(/*! @partials/warning.handlebars */ "./partials/warning.handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Предупреждение о переходе по ссылке
 */
var Warning = /*#__PURE__*/function () {
  /**
   * Создает компонент с предупреждением.
   *
   * @param {HTMLElement} el Элемент, при клике на который создаётся предупреждение.
   */
  function Warning(el) {
    _classCallCheck(this, Warning);

    this.el = el;
    this.container = this.el.closest(".js-kt-link-container");
    this.bindEventListeners();
  }
  /**
   * Привязка обработчиков клика
   *
   * @returns {void}
   */


  _createClass(Warning, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var _this = this;

      this.el.addEventListener("click", this.createWarning.bind(this));
      this.container.addEventListener("click", function (e) {
        if (e.target.classList.contains("js-warning-close") || e.target.classList.contains("js-warning-link")) {
          _this.removeWarning();
        }
      });
    }
    /**
     * Создаём плашку с предупреждением
     *
     * @param {Event} e Событие, происходящее при клике
     */

  }, {
    key: "createWarning",
    value: function createWarning(e) {
      e.preventDefault();
      var url = this.el.href;
      this.container.insertAdjacentHTML("beforeend", (0, _warning["default"])({
        url: url
      }));
    }
    /**
     * Удаляем плашку с предупреждением
     *
     * @returns {void}
     */

  }, {
    key: "removeWarning",
    value: function removeWarning() {
      var warning = this.container.querySelector(".js-warning");
      warning.parentNode.removeChild(warning);
    }
  }]);

  return Warning;
}();

exports.Warning = Warning;
document.querySelectorAll(".js-kt-link").forEach(function (el) {
  return new Warning(el);
});

/***/ }),

/***/ "./scripts/main/consts/animation.js":
/*!******************************************!*\
  !*** ./scripts/main/consts/animation.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACCORDION_ANIMATION_DURATION = void 0;
var ACCORDION_ANIMATION_DURATION = 350;
exports.ACCORDION_ANIMATION_DURATION = ACCORDION_ANIMATION_DURATION;

/***/ }),

/***/ "./scripts/main/consts/delay.js":
/*!**************************************!*\
  !*** ./scripts/main/consts/delay.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WINDOW_RESIZE_TIMEOUT = exports.NOTIFICATION_TIMEOUT_SHOW_INFO_MESSAGE = exports.NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE = void 0;

/**
 * @type {{Number}} Время, через которое будет скрыта плашка с уведомлением
 */
var NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE = 5000;
/**
 * @type {{Number}} Время, через которое будет автоматически показана плашка с уведомлением
 */

exports.NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE = NOTIFICATION_TIMEOUT_HIDE_INFO_MESSAGE;
var NOTIFICATION_TIMEOUT_SHOW_INFO_MESSAGE = 3000;
/**
 * @type {{Number}} Время таймаута на ресайз окна
 */

exports.NOTIFICATION_TIMEOUT_SHOW_INFO_MESSAGE = NOTIFICATION_TIMEOUT_SHOW_INFO_MESSAGE;
var WINDOW_RESIZE_TIMEOUT = 100;
exports.WINDOW_RESIZE_TIMEOUT = WINDOW_RESIZE_TIMEOUT;

/***/ }),

/***/ "./scripts/main/consts/file-formats.js":
/*!*********************************************!*\
  !*** ./scripts/main/consts/file-formats.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALID_FILE_TYPES = void 0;
var VALID_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel.sheet.macroEnabled.12", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"];
exports.VALID_FILE_TYPES = VALID_FILE_TYPES;

/***/ }),

/***/ "./scripts/main/consts/file-size.js":
/*!******************************************!*\
  !*** ./scripts/main/consts/file-size.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_FILE_SIZE = void 0;
var MAX_FILE_SIZE = 10485760;
exports.MAX_FILE_SIZE = MAX_FILE_SIZE;

/***/ }),

/***/ "./scripts/main/consts/index.js":
/*!**************************************!*\
  !*** ./scripts/main/consts/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEBOUNCE_WAIT_MS = exports.SPRED_PAGES = exports.CONTAINER_PADDING = exports.MAX_DATE_LENGHT = void 0;
var MAX_DATE_LENGHT = 10;
exports.MAX_DATE_LENGHT = MAX_DATE_LENGHT;
var CONTAINER_PADDING = 16;
/**
 * Сколько показывать кнопок страниц в постраничной навигации до и после актуальной
 * Пример:
 * SPRED_PAGES = 2
 * Всего 9 страниц навигации и сейчас просматривают 5ю
 * 1 ... 3 4 5 6 7 ... 9
 * */

exports.CONTAINER_PADDING = CONTAINER_PADDING;
var SPRED_PAGES = 2; //autocomplete

exports.SPRED_PAGES = SPRED_PAGES;
var DEBOUNCE_WAIT_MS = 200;
exports.DEBOUNCE_WAIT_MS = DEBOUNCE_WAIT_MS;

/***/ }),

/***/ "./scripts/main/consts/media.js":
/*!**************************************!*\
  !*** ./scripts/main/consts/media.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xxl = exports.xl = exports.lg = exports.md = exports.sm1 = exports.sm = exports.sm0 = void 0;
var sm0 = 320;
exports.sm0 = sm0;
var sm = 360;
exports.sm = sm;
var sm1 = 600;
exports.sm1 = sm1;
var md = 768;
exports.md = md;
var lg = 1080;
exports.lg = lg;
var xl = 1440;
exports.xl = xl;
var xxl = 1600;
exports.xxl = xxl;

/***/ }),

/***/ "./scripts/main/consts/messages.js":
/*!*****************************************!*\
  !*** ./scripts/main/consts/messages.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR_DEFAULT = void 0;
var ERROR_DEFAULT = "\n\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A\n";
exports.ERROR_DEFAULT = ERROR_DEFAULT;

/***/ }),

/***/ "./scripts/main/consts/regex.js":
/*!**************************************!*\
  !*** ./scripts/main/consts/regex.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PASSWORD_REGEX = exports.FORMAT_DATE_REGEX = exports.FORMAT_NUMBER_REGEX = exports.NUMBER_REGEX = exports.EMAIL_REGEX = exports.DIGITS_WITH_POINT_REGEX = exports.WITHOUT_DIGITS_REGEX = void 0;
var WITHOUT_DIGITS_REGEX = /\D/g;
exports.WITHOUT_DIGITS_REGEX = WITHOUT_DIGITS_REGEX;
var DIGITS_WITH_POINT_REGEX = /\d*\.?\d*/;
exports.DIGITS_WITH_POINT_REGEX = DIGITS_WITH_POINT_REGEX;
var EMAIL_REGEX = /^((([0-9A-Za-z]{1})|([0-9A-Za-z]{1}[\x2D\.0-9A-z]+[0-9A-Za-z]{1})|([0-9\u0410-\u044F]{1})|([0-9\u0410-\u044F]{1}[\x2D\.0-9\u0410-\u044F]+[0-9\u0410-\u044F]{1}))@([0-9A-Za-z]+\.){1,2}[\x2DA-Za-z]{2,})$/;
exports.EMAIL_REGEX = EMAIL_REGEX;
var NUMBER_REGEX = /^\d+$/;
exports.NUMBER_REGEX = NUMBER_REGEX;
var FORMAT_NUMBER_REGEX = /\B(?=(\d{3})+(?!\d))/g;
exports.FORMAT_NUMBER_REGEX = FORMAT_NUMBER_REGEX;
var FORMAT_DATE_REGEX = /[^0-9.]+/g;
exports.FORMAT_DATE_REGEX = FORMAT_DATE_REGEX;
var PASSWORD_REGEX = /[a-zA-Zа-яА-я]/;
exports.PASSWORD_REGEX = PASSWORD_REGEX;

/***/ }),

/***/ "./scripts/main/utils/cookie.js":
/*!**************************************!*\
  !*** ./scripts/main/utils/cookie.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "../node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = exports.getCookie = void 0;

var getCookie = function getCookie(name) {
  /* eslint-disable */
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
  /* eslint-enable */
};

exports.getCookie = getCookie;

var setCookie = function setCookie(name, value) {
  value = encodeURIComponent(value);
  document.cookie = name + "=" + value + ";path=/";
};

exports.setCookie = setCookie;

/***/ }),

/***/ "./scripts/main/utils/date-input-mask.js":
/*!***********************************************!*\
  !*** ./scripts/main/utils/date-input-mask.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateInputMask = void 0;

var _regex = __webpack_require__(/*! @main/consts/regex */ "./scripts/main/consts/regex.js");

/**
 * Маска ввода даты.
 *
 * @param {HTMLInputElement} input - Элемент ввода.
 */
var dateInputMask = function dateInputMask(input) {
  input.addEventListener("input", function () {
    var prefix = input.dataset.prefix || "";
    input.value = input.value.replace(prefix, "").replace(_regex.WITHOUT_DIGITS_REGEX, "");
    var len = input.value.length;

    if (len >= 2) {
      var day = input.value.slice(0, 2);
      var month = input.value.slice(2, 4);
      var year = input.value.slice(4, 8);

      if (Number(day) > 31) {
        day = 31;
      }

      if (Number(month) > 12) {
        month = 12;
      }

      input.value = day;

      if (month) {
        input.value = day + "." + month;
      }

      if (year) {
        input.value = day + "." + month + "." + year;
      }
    }

    input.value = prefix + input.value;
  });
};

exports.dateInputMask = dateInputMask;

/***/ }),

/***/ "./scripts/main/utils/file-size-format.js":
/*!************************************************!*\
  !*** ./scripts/main/utils/file-size-format.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormattedFileSize = exports.getSizeInMB = exports.getSizeInKB = void 0;

/**
 * Преобразует байты в килобайты.
 *
 * @param {number} bytes Размер файла в байтах.
 * @returns {number} Размер файла в килобайтах.
 */
var getSizeInKB = function getSizeInKB(bytes) {
  return Math.round(bytes * 100 / 1024) / 100;
};
/**
 * Преобразует байты в мегабайты.
 *
 * @param {number} bytes Размер файла в байтах.
 * @returns {number} Размер файла в мегабайтах.
 */


exports.getSizeInKB = getSizeInKB;

var getSizeInMB = function getSizeInMB(bytes) {
  return Math.round(getSizeInKB(bytes) * 100 / 1024) / 100;
};
/**
 * Преобразует байты в человекопонятный вид.
 *
 * @param {number} bytes Размер файла в байтах.
 * @returns {string} Размер файла в мегабайтах.
 */


exports.getSizeInMB = getSizeInMB;

var getFormattedFileSize = function getFormattedFileSize(bytes) {
  var sizeInKB = getSizeInKB(bytes);

  if (sizeInKB < 500) {
    return "".concat(sizeInKB, " \u041A\u0411");
  } else {
    return "".concat(getSizeInMB(bytes), " \u041C\u0411");
  }
};

exports.getFormattedFileSize = getFormattedFileSize;

/***/ }),

/***/ "./scripts/main/utils/get-btn-from-target.js":
/*!***************************************************!*\
  !*** ./scripts/main/utils/get-btn-from-target.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBtnFromTarget = void 0;

/**
 * Проверить таргет клика на нужный класс.
 *
 * @param {EventTarget} target Элемент, по которому кликнули.
 * @param {string} className Имя класса для проверки.
 *
 * @returns {HTMLElement || null} btn Вернуть кнопку или ничего, если цель не та.
 */
var getBtnFromTarget = function getBtnFromTarget(target, className) {
  var btn = null;

  if (target.classList.contains(className)) {
    btn = target;
  } else {
    btn = target.closest("." + className);
  }

  return btn;
};

exports.getBtnFromTarget = getBtnFromTarget;

/***/ }),

/***/ "./scripts/main/utils/numberFormat.js":
/*!********************************************!*\
  !*** ./scripts/main/utils/numberFormat.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.number.constructor */ "../node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.number.to-fixed */ "../node_modules/core-js/modules/es.number.to-fixed.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "../node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFixAfterPoint = exports.getRealNumber = exports.priceFormat = exports.numberFormat = exports.replaceBadInNumber = void 0;

var _regex = __webpack_require__(/*! @main/consts/regex */ "./scripts/main/consts/regex.js");

/**
 * Удаляет лишние символы из числа.
 *
 * @param {string} str Строка для форматирования.
 * @returns {string} Число.
 */
var replaceBadInNumber = function replaceBadInNumber(str) {
  var last = "";
  var match = str.replace(",", ".").replace(" ", "").match(_regex.DIGITS_WITH_POINT_REGEX);

  if (match || str === "") {
    last = match ? match[0] : "";
  }

  return last;
};
/**
 * Преобразует 10000 -> 10 000.
 *
 * @param {string} str Строка для форматирования.
 * @returns {string} 10000 -> 10 000.
 */


exports.replaceBadInNumber = replaceBadInNumber;

var numberFormat = function numberFormat(str) {
  return replaceBadInNumber(str).replace(_regex.FORMAT_NUMBER_REGEX, " ");
};
/**
 * Преобразует 10000 -> 10 000 ₽.
 *
 * @param {string} price Строка для форматирования.
 * @returns {string} 10000 -> 10 000 ₽.
 */


exports.numberFormat = numberFormat;

var priceFormat = function priceFormat(price) {
  var formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
  });
  return formatter.format(Number(price));
};
/**
 * Преобразует 10 000 -> 10000.
 *
 * @param {string} str Строка для форматирования.
 * @returns {number} 10 000 -> 10000.
 */


exports.priceFormat = priceFormat;

var getRealNumber = function getRealNumber(str) {
  return Number(replaceBadInNumber(str));
};
/**
 * Преобразует 24.7799999 -> 24.78 && 24.00 -> 24.
 *
 * @param {number} number Число для форматирования.
 * @returns {string} 24.7799999 -> 24.78.
 */


exports.getRealNumber = getRealNumber;

var toFixAfterPoint = function toFixAfterPoint(number) {
  return number.toFixed(2).replace(".00", "");
};

exports.toFixAfterPoint = toFixAfterPoint;

/***/ }),

/***/ "./scripts/std/app.ts":
/*!****************************!*\
  !*** ./scripts/std/app.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "../node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "../node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "../node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _urijs = _interopRequireDefault(__webpack_require__(/*! urijs */ "../node_modules/urijs/src/URI.js"));

var _guards = __webpack_require__(/*! @std/guards */ "./scripts/std/guards.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, App);

    this.config = {};
    this.loadConfig(config);
  }

  _createClass(App, [{
    key: "loadConfig",
    value: function loadConfig(config) {
      this.config = config;
    }
  }, {
    key: "getOption",
    value: function getOption(optionName, defaultValue) {
      var optionPath = optionName.split(".");
      var option = this.config;

      var _iterator = _createForOfIteratorHelper(optionPath),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;

          if ((0, _guards.isJsonMap)(option)) {
            option = option[key];
          } else if (defaultValue) {
            return defaultValue;
          } else {
            throw new Error("\u041E\u043F\u0446\u0438\u044F ".concat(optionName, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430."));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return option;
    }
    /**
     * @param {string} url
     * @param {string} lang
     * @return {string}
     */

  }, {
    key: "getUrl",
    value: function getUrl(url) {
      var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BX.message("LANGUAGE_ID");
      var uri = (0, _urijs["default"])(url);
      var segments = uri.segment();
      var languages = this.getOption("loc.languages");

      if (!languages || _typeof(languages) !== "object") {
        throw new Error("Не определены поддерживаемые сайтом языки.");
      }

      var languageCodes = Object.keys(languages);

      if (segments && ~languageCodes.indexOf(segments[0])) {
        segments.shift();
      }

      if (lang !== this.getOption("loc.default_language")) {
        segments.unshift(lang);
      }

      uri.segment(segments);
      return uri.toString();
    }
  }]);

  return App;
}();

exports.App = App;

/***/ }),

/***/ "./scripts/std/guards.ts":
/*!*******************************!*\
  !*** ./scripts/std/guards.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isJsonMap = isJsonMap;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isJsonMap(object) {
  return object && _typeof(object) === "object" && !Array.isArray(object);
}

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./main.js */"./main.js");


/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=main.js.map