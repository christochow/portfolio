function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"text-align: center\">\n  <img width=\"70%\" src=\"assets/singcon.jpg\">\n  <h1>About me!</h1>\n  <hr>\n  <!-- // Work Experience -->\n  <h2>Work/Programming Experience</h2>\n  <section  class=\"work\">\n    <div>\n      <!-- Job Details: copy this whole block to add more jobs -->\n      <h3>Software Development Intern</h3>\n      <p>Excite Club</p>\n      <p>May 2018 – August 2018 (4 months)</p>\n      <ul>\n        <li>Developed and performed initial roll-out of the company's Android apps (customer-side and merchant-side app)</li>\n        <p></p>\n        <li>Improved both apps’ usability by revamping both apps’ user interface</li>\n        <p></p>\n        <li>Developed new functionalities for both android apps (redeeming reward program, Stripe Login verification etc.) </li>\n      </ul>\n      <!-- end of Job Details block. -->\n    </div>\n  </section>\n  <section  class=\"work\">\n    <div>\n      <!-- Job Details: copy this whole block to add more jobs -->\n      <h3>Lab Programmer</h3>\n      <p>DUNCAN Lab, University Of Toronto</p>\n      <p>May 2018 – August 2018 (4 months)</p>\n      <ul>\n        <li>Improved Research efficiency through developing python scripts/java programs</li>\n        <p id=\"empty\">.</p>\n        <li>Supported Graduate Student with their research by providing technical support</li>\n      </ul>\n      <!-- end of Job Details block. -->\n    </div>\n  </section>\n  <!-- // Education -->\n  <h2>Education</h2>\n  <section id=Education>\n\n    <!-- School details: copy this whole block to add more schools. -->\n    <h3>University Of Toronto, 2021(Expected)</h3>\n    <p>Honour Bachelor of Science</p>\n\n    <!-- Add as many paragraphs as you need. -->\n    <p>Specialist: Computer Science</p>\n    <p>Major: Statistics</p>\n    <p>Minor: Economics</p>\n    <p>CGPA: 3.71</p>\n    <!-- End of school details. -->\n  </section>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <div *ngIf=\"isWeb\" class=\"cover\" [style.left]=\"xPos\" [style.top]=\"yPos\" ></div>\n  <ul id=Header>\n    <li><a routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Home</a></li>\n    <li><a routerLink=\"/projects\" routerLinkActive=\"active\">Side projects</a></li>\n    <li><a routerLink=\"/about\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">About</a></li>\n  </ul>\n  <h1 *ngIf=\"!nav.visible && isType\"><strong>Typing test</strong></h1>\n</header>\n<router-outlet></router-outlet>\n<footer *ngIf=\"!nav.visible\">\n  <h2>Let's Keep in Touch!!</h2>\n  <div>\n    <p><a href=\"mailto:lok.chow@mail.utoronto.ca\">lok.chow@mail.utoronto.ca</a></p>\n    <a href=\"https://www.linkedin.com/in/lok-man-christopher-chow/\" target=\"_blank\">LinkedIn</a>\n  </div>\n\n  <p>Copyright 2018 by Christopher Chow</p>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <div style=\"text-align:center;position: absolute;margin-top: 45%;width: 100%;\">\n    <h1 style=\"display: inline-block\">\n      {{ title }}!\n    </h1>\n  </div>\n  <img width=\"100%\" alt=\"Angular Logo\" src=\"assets/toronto.jpg\">\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <h1>Side Projects</h1>\n<div class=\"box\">\n  <section>\n    <h3>Type speed checker</h3>\n    <br/>\n    <span>A checker for you to challenge your type speed!</span>\n    <br/>\n    <a routerLink=\"/projects/type\">Link to checker</a>\n  </section>\n  <section>\n    <h3>Game Split</h3>\n    <br/>\n    <span>A Cross-Platform Flutter App to help store Mahjong/Poker Game records</span>\n    <br/>\n    <a href=\"https://play.google.com/store/apps/details?id=com.chris.game_split\" target=\"_blank\">Android version link</a>\n    <br/>\n    <a href=\"https://apps.apple.com/us/app/id1462996986\" target=\"_blank\">iOS version link</a>\n  </section>\n  <section>\n    <h3>SJT Connects</h3>\n    <br/>\n    <span>A Cross-Platform React Native App For the St. James Town Community Centre</span>\n    <br/>\n    <a href=\"https://play.google.com/store/apps/details?id=com.st_james\" target=\"_blank\">Android version link</a>\n  </section>\n  <section>\n    <h3>Excite Coupons</h3>\n    <br/>\n    <span>An Android App that allows you to get coupons from local merchants and earn rewards</span>\n    <br/>\n    <a href=\"https://play.google.com/store/apps/details?id=com.playtron.customerapp\" target=\"_blank\">Link to app</a>\n  </section>\n  <section>\n    <h3>Todo List Website</h3>\n    <br/>\n    <a href=\"https://christochow.github.io/DragAndDropTodo/\" target=\"_blank\">Link to website</a>\n  </section>\n  <section>\n    <h3>Watch Together</h3>\n    <br>\n    <span>A react website to allow users to watch youtube videos together</span>\n    <br/>\n    <a href=\"https://christochow.github.io/DragAndDropTodo/\" target=\"_blank\">Link to website</a>\n  </section>\n  <section>\n    <h3>My Github repository</h3>\n    <a href=\"https://github.com/christochow\" target=\"_blank\">Link to github</a>\n  </section>\n</div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/project/type-tester/type-tester.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/type-tester/type-tester.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectTypeTesterTypeTesterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main class=\"main\">\n  <article class=\"intro\">\n    <p>This is a typing test. Your goal is to duplicate the provided text, EXACTLY, in the field below. The timer starts when you start typing, and only stops when you match this text exactly. Good Luck!</p>\n  </article>\n  <div id=\"leaderboard\">\n    <h3>Leaderboard</h3>\n    <div *ngIf=\"dbService.results.length > 0\">\n      <ol class=\"leader-list\">\n        <li *ngFor=\"let result of dbService.results\">\n          {{result.result}} words per minute\n        </li>\n      </ol>\n    </div>\n  </div>\n  <div class=\"test-area\">\n    <div id=\"origin-text\">\n      <p>{{content}}</p>\n    </div>\n    <div *ngIf=\"finished\"><h4>Typing speed: {{endTime}} words per minute</h4></div>\n    <div class=\"test-wrapper\" [style.borderColor]=\"wrapperColor\">\n      <textarea\n        id=\"test-area\"  [ngModel]=\"input\" (ngModelChange)=\"onChange($event)\"\n        name=\"textarea\" rows=\"6\" placeholder=\"The clock starts when you start typing.\"></textarea>\n    </div>\n    <div class=\"meta\">\n      <div id=\"clock\">\n        <div class=\"timer\">{{timeString}}</div>\n      </div>\n      <button id=\"reset\" (click)=\"restart()\">Start over</button>\n    </div>\n  </div>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/about/about.component.css":
  /*!*******************************************!*\
    !*** ./src/app/about/about.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./project/project.component */
    "./src/app/project/project.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'projects',
      component: _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\n#Header {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  padding-left: 5px;\n  overflow: hidden;\n  background-color: #333;\n}\n#Header li {\n  float: left;\n}\n#Header li a {\n  float: left;\n  display: block;\n  color: grey;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n#Header li a.active {\n  color: white;\n}\n.cover {\n  position: absolute;\n  top: 1px;\n  width: 50px;\n  height: 50px;\n  color: transparent;\n  border: 2px solid red;\n  border-radius: 50%;\n  pointer-events: none;\n}\nbody {\n  margin: 0;\n  background: white;\n}\na:link {\n  color: black;\n}\na:visted{\n  color: grey;\n}\n.cover {\n  position: absolute;\n  top: 1px;\n  width: 50px;\n  height: 50px;\n  color: transparent;\n  border: 2px solid red;\n  border-radius: 50%;\n  pointer-events: none;\n}\naudio{\n  width: 500px;\n}\n#Header {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n/* Change the link color to #111 (black) on hover */\n#Header li a:hover {\n  background-color: #111;\n}\nfooter{\n  text-align: center;\n  height: 10px;\n  margin-bottom: 50px;\n}\nfooter p{\n  padding-bottom: 10px;\n}\nheader{\n//animation: rotate_reverse 30s infinite linear;\n  height: 100%;\n  background-size: auto;\n  margin: 0;\n  padding: 0;\n  font-style: italic;\n  font-family: cursive;\n  color: white;\n  background-color: #008080;\n  text-align: center;\n}\n@-webkit-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes rotate_reverse {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(-360deg);\n  }\n}\n@keyframes rotate_reverse {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(-360deg);\n  }\n}\n#image{\n  -webkit-animation: rotate 30s infinite linear;\n          animation: rotate 30s infinite linear;\n  padding: 120px;\n  padding-top: 50px;\n}\n#empty{\n  color: white;\n}\nimg {\n  margin: 0;\n  padding: 0;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFHQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUdBLG1EQUFtRDtBQUNuRDtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0FBQ0EsK0NBQStDO0VBQzdDLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7QUFQQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQUNBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGO0FBUEE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7QUFDQTtFQUNFLDZDQUFxQztVQUFyQyxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4jSGVhZGVyIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG4jSGVhZGVyIGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNIZWFkZXIgbGkgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IGdyZXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNIZWFkZXIgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuYTpsaW5rIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuYTp2aXN0ZWR7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uY292ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuXG5hdWRpb3tcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4jSGVhZGVyIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cblxuLyogQ2hhbmdlIHRoZSBsaW5rIGNvbG9yIHRvICMxMTEgKGJsYWNrKSBvbiBob3ZlciAqL1xuI0hlYWRlciBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbn1cblxuZm9vdGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbmZvb3RlciBwe1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuaGVhZGVye1xuLy9hbmltYXRpb246IHJvdGF0ZV9yZXZlcnNlIDMwcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODA4MDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQGtleWZyYW1lcyByb3RhdGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGVfcmV2ZXJzZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufVxuI2ltYWdle1xuICBhbmltYXRpb246IHJvdGF0ZSAzMHMgaW5maW5pdGUgbGluZWFyO1xuICBwYWRkaW5nOiAxMjBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG4jZW1wdHl7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_navbar_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/navbar-service.service */
    "./src/app/services/navbar-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(nav, router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.nav = nav;
        this.router = router;
        this.xPos = 0 + 'px';
        this.yPos = 0 + 'px';
        this.xOffset = window.pageXOffset;
        this.yOffset = window.pageYOffset;
        this.router.events.subscribe(function (e) {
          if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            if (e.url.includes('projects')) {
              nav.setInvisible();
              _this.isType = e.url.includes('type');
            } else {
              nav.setVisible();
            }
          }
        });
        this.isType = false;
        this.isWeb = !function () {
          var check = false; // tslint:disable-next-line:only-arrow-functions

          (function (a) {
            // tslint:disable-next-line:max-line-length
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
              check = true;
            }
          })(window.navigator.userAgent || window.navigator.vendor);

          return check;
        }();
      }

      _createClass(AppComponent, [{
        key: "onMouseMove",
        value: function onMouseMove(e) {
          this.xPos = e.clientX - 25 + this.xOffset + 'px';
          this.yPos = e.clientY - 25 + this.yOffset + 'px';
        }
      }, {
        key: "onPageScroll",
        value: function onPageScroll(e) {
          if (this.yOffset < window.pageYOffset) {
            this.yPos = Number(this.yPos.substring(0, this.yPos.length - 2)) + window.pageYOffset - this.yOffset + 'px';
          } else {
            this.yPos = Number(this.yPos.substring(0, this.yPos.length - 2)) + window.pageYOffset - this.yOffset + 'px';
          }

          if (this.xOffset < window.pageXOffset) {
            this.xPos = Number(this.xPos.substring(0, this.xPos.length - 2)) + window.pageXOffset - this.xOffset + 'px';
          } else {
            this.xPos = Number(this.xPos.substring(0, this.xPos.length - 2)) + window.pageXOffset - this.xOffset + 'px';
          }

          this.xOffset = window.pageXOffset;
          this.yOffset = window.pageYOffset;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_navbar_service_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousemove', ['$event'])], AppComponent.prototype, "onMouseMove", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])], AppComponent.prototype, "onPageScroll", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.module */
    "./src/app/home/home.module.ts");
    /* harmony import */


    var _project_project_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./project/project.module */
    "./src/app/project/project.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase), _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"], _project_project_module__WEBPACK_IMPORTED_MODULE_6__["ProjectModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.title = 'Welcome to my website';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/project/project-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/project/project-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProjectRoutingModule */

  /***/
  function srcAppProjectProjectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function () {
      return ProjectRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project.component */
    "./src/app/project/project.component.ts");
    /* harmony import */


    var _type_tester_type_tester_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./type-tester/type-tester.component */
    "./src/app/project/type-tester/type-tester.component.ts");

    var routes = [{
      path: 'projects',
      component: _project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
    }, {
      path: 'projects/type',
      component: _type_tester_type_tester_component__WEBPACK_IMPORTED_MODULE_4__["TypeTesterComponent"]
    }];

    var ProjectRoutingModule = function ProjectRoutingModule() {
      _classCallCheck(this, ProjectRoutingModule);
    };

    ProjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProjectRoutingModule);
    /***/
  },

  /***/
  "./src/app/project/project.component.css":
  /*!***********************************************!*\
    !*** ./src/app/project/project.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectProjectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section {\n  margin: 20px;\n  text-align: center;\n  width: 500px;\n  height: 200px;\n  border-radius: 2px;\n  overflow: auto;\n  box-shadow: 0 19px 20px rgba(0, 0, 0, 0.01), 0 15px 12px rgba(0, 0, 0, 0.12);\n}\n\n.h3 {\n  text-decoration: underline;\n}\n\na{\n  color: black;\n}\n\n.box {\n  align-items: center;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICBtYXJnaW46IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDE5cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDEpLCAwIDE1cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uaDMge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYXtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYm94IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/project/project.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/project/project.component.ts ***!
    \**********************************************/

  /*! exports provided: ProjectComponent */

  /***/
  function srcAppProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
      return ProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectComponent =
    /*#__PURE__*/
    function () {
      function ProjectComponent() {
        _classCallCheck(this, ProjectComponent);
      }

      _createClass(ProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectComponent;
    }();

    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./project.component.css */
      "./src/app/project/project.component.css")).default]
    })], ProjectComponent);
    /***/
  },

  /***/
  "./src/app/project/project.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/project/project.module.ts ***!
    \*******************************************/

  /*! exports provided: ProjectModule */

  /***/
  function srcAppProjectProjectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectModule", function () {
      return ProjectModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./project.component */
    "./src/app/project/project.component.ts");
    /* harmony import */


    var _type_tester_type_tester_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./type-tester/type-tester.component */
    "./src/app/project/type-tester/type-tester.component.ts");
    /* harmony import */


    var _project_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./project-routing.module */
    "./src/app/project/project-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ProjectModule = function ProjectModule() {
      _classCallCheck(this, ProjectModule);
    };

    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"], _type_tester_type_tester_component__WEBPACK_IMPORTED_MODULE_4__["TypeTesterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _project_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
    })], ProjectModule);
    /***/
  },

  /***/
  "./src/app/project/type-tester/firebase-service.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/project/type-tester/firebase-service.service.ts ***!
    \*****************************************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppProjectTypeTesterFirebaseServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");

    var FirebaseService =
    /*#__PURE__*/
    function () {
      function FirebaseService(db) {
        _classCallCheck(this, FirebaseService);

        this.db = db;
        this.results = [];
        this.getResults();
      }

      _createClass(FirebaseService, [{
        key: "getResults",
        value: function getResults() {
          var _this2 = this;

          this.db.list('results', function (ref) {
            return ref.orderByChild('result').limitToLast(5);
          }).valueChanges().subscribe(function (r) {
            if (r !== undefined) {
              _this2.results = r.reverse();
            }
          });
        }
      }, {
        key: "addResult",
        value: function addResult(result) {
          this.db.list('results').push(result);
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }];
    };

    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FirebaseService);
    /***/
  },

  /***/
  "./src/app/project/type-tester/type-tester.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/project/type-tester/type-tester.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectTypeTesterTypeTesterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".masthead {\n  width: 100%;\n  padding: 1em 0em;\n  padding-top: 0em;\n  background-color: #0D1B2E;\n  color: white;\n}\n\n.masthead h1 {\n  text-align: center;\n}\n\n.intro {\n  padding: 2em 2em;\n  color: #ffffff;\n  background: #429890;\n}\n\n.intro p,\n.test-area {\n  margin: 0 auto;\n  max-width: 550px;\n}\n\n.test-area {\n  margin-bottom: 4em;\n  padding: 0 2em;\n}\n\n.test-wrapper {\n  border: 10px solid grey;\n  border-radius: 10px;\n  color: white;\n}\n\n#origin-text {\n  margin: 1em 0;\n  padding: 1em 1em 0;\n  background-color: #ededed;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n\n#origin-text p {\n  margin: 0;\n  padding-bottom: 1em;\n}\n\n.test-wrapper {\n  display: flex;\n}\n\n.test-wrapper textarea {\n  flex: 1;\n}\n\n.meta {\n  margin-top: 1em;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.timer {\n  font-size: 3em;\n  font-weight: bold;\n}\n\n#reset {\n  padding: .5em 1em;\n  font-size: 1.2em;\n  font-weight: bold;\n  color: #E95D0F;\n  background: white ;\n  border: 10px solid #E95D0F;\n}\n\n#reset:hover {\n  color: white;\n  background-color: #E95D0F;\n}\n\n#leaderboard {\n  text-align: center;\n}\n\n#clock{\n  padding-left: 20px;\n  margin: 10px;\n  position: relative;\n  text-align: left;\n  display: inline-block;\n}\n\n.leader-list {\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC90eXBlLXRlc3Rlci90eXBlLXRlc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUdBOztFQUVFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3R5cGUtdGVzdGVyL3R5cGUtdGVzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFzdGhlYWQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtIDBlbTtcbiAgcGFkZGluZy10b3A6IDBlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBEMUIyRTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFzdGhlYWQgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnRybyB7XG4gIHBhZGRpbmc6IDJlbSAyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjNDI5ODkwO1xufVxuXG5cbi5pbnRybyBwLFxuLnRlc3QtYXJlYSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDU1MHB4O1xufVxuXG4udGVzdC1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogNGVtO1xuICBwYWRkaW5nOiAwIDJlbTtcbn1cblxuLnRlc3Qtd3JhcHBlciB7XG4gIGJvcmRlcjogMTBweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNvcmlnaW4tdGV4dCB7XG4gIG1hcmdpbjogMWVtIDA7XG4gIHBhZGRpbmc6IDFlbSAxZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuI29yaWdpbi10ZXh0IHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG5cbi50ZXN0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGVzdC13cmFwcGVyIHRleHRhcmVhIHtcbiAgZmxleDogMTtcbn1cblxuLm1ldGEge1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udGltZXIge1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNyZXNldCB7XG4gIHBhZGRpbmc6IC41ZW0gMWVtO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNFOTVEMEY7XG4gIGJhY2tncm91bmQ6IHdoaXRlIDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICNFOTVEMEY7XG59XG5cbiNyZXNldDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5NUQwRjtcbn1cblxuI2xlYWRlcmJvYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY2xvY2t7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmxlYWRlci1saXN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/project/type-tester/type-tester.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/project/type-tester/type-tester.component.ts ***!
    \**************************************************************/

  /*! exports provided: TypeTesterComponent */

  /***/
  function srcAppProjectTypeTesterTypeTesterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TypeTesterComponent", function () {
      return TypeTesterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _firebase_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./firebase-service.service */
    "./src/app/project/type-tester/firebase-service.service.ts");

    var TypeTesterComponent =
    /*#__PURE__*/
    function () {
      function TypeTesterComponent(dbService) {
        _classCallCheck(this, TypeTesterComponent);

        this.dbService = dbService;
        this.wrapperColor = 'grey';
        this.started = false;
        this.finished = false;
        this.timeString = '00:00:00';
        this.time = 0;
        this.input = '';
        this.content = 'Noon. London: my flat. Ugh. The last thing on earth I feel physically, emotionally or mentaly equipped to do is' + ' drive to Una and Geoffrey Alconbury\'s New Year\'s Dat Turket Curry Buffet in Graftoon Underwood. Geoffery and Una Alconbury ' + 'are my parents\' best friends and, as Uncle Geoffrey never tires of reminding me, have known me since I was running the lawn with ' + 'no clothes on. My mother rang up at 8.30 in the morning last August Bank Holidat and forced me to promise to go. ' + 'She approached it via a cunningly circuitous route.';
      }

      _createClass(TypeTesterComponent, [{
        key: "onChange",
        value: function onChange(val) {
          if (!this.started && val !== '') {
            this.startTimer();
          }

          this.input = val;
          this.checkInput();
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this3 = this;

          this.interval = setInterval(function () {
            _this3.time += 10;
            var minute = Math.floor(_this3.time / (1000 * 60));
            minute = _this3.addZero(minute);
            var seconds = Math.floor((_this3.time - minute * 60 * 1000) / 1000);
            seconds = _this3.addZero(seconds);
            var milSec = Math.floor((_this3.time - seconds * 1000 - minute * 60 * 1000) / 10);
            milSec = _this3.addZero(milSec);
            _this3.timeString = minute + ':' + seconds + ':' + milSec;
          }, 10);
          this.started = true;
        }
      }, {
        key: "endTimer",
        value: function endTimer() {
          clearInterval(this.interval);
        }
      }, {
        key: "restart",
        value: function restart() {
          this.timeString = '00:00:00';
          this.endTimer();
          this.resetInput();
          this.started = false;
          this.finished = false;
          this.wrapperColor = 'grey';
          this.endTime = '';
        }
      }, {
        key: "checkInput",
        value: function checkInput() {
          if (this.input === this.content) {
            this.wrapperColor = '#429890';
            this.calcTime();
            this.endTimer();
            this.finished = true;
          } else {
            this.wrapperColor = '#E95D0F';
          }
        }
      }, {
        key: "resetInput",
        value: function resetInput() {
          this.input = '';
        }
      }, {
        key: "addZero",
        value: function addZero(s) {
          if (s < 10) {
            return '0' + s;
          }

          return s;
        }
      }, {
        key: "calcTime",
        value: function calcTime() {
          if (this.time > 0) {
            var endTimeInt = parseInt((this.content.split(' ').length / (this.time / 1000 / 60)).toFixed(2), 10);
            this.endTime = endTimeInt.toString();
            this.dbService.addResult({
              result: endTimeInt
            });
          }
        }
      }]);

      return TypeTesterComponent;
    }();

    TypeTesterComponent.ctorParameters = function () {
      return [{
        type: _firebase_service_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
      }];
    };

    TypeTesterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-type-tester',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./type-tester.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/project/type-tester/type-tester.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./type-tester.component.css */
      "./src/app/project/type-tester/type-tester.component.css")).default]
    })], TypeTesterComponent);
    /***/
  },

  /***/
  "./src/app/services/navbar-service.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/navbar-service.service.ts ***!
    \****************************************************/

  /*! exports provided: NavbarService */

  /***/
  function srcAppServicesNavbarServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarService", function () {
      return NavbarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarService =
    /*#__PURE__*/
    function () {
      function NavbarService() {
        _classCallCheck(this, NavbarService);

        this.visible = true;
      }

      _createClass(NavbarService, [{
        key: "setVisible",
        value: function setVisible() {
          this.visible = true;
        }
      }, {
        key: "setInvisible",
        value: function setInvisible() {
          this.visible = false;
        }
      }]);

      return NavbarService;
    }();

    NavbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NavbarService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyDIEQof-vNL3escwlobXqbrdxnKr3ZIwIc',
        authDomain: 'resume-website-f5cff.firebaseapp.com',
        databaseURL: 'https://resume-website-f5cff.firebaseio.com',
        projectId: 'resume-website-f5cff',
        storageBucket: 'resume-website-f5cff.appspot.com',
        messagingSenderId: '6896146877'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/3nine/Desktop/Angular/portfolio/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map