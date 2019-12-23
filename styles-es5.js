(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "section{\n  padding-left: 20px;\n  margin: 20px;\n  margin-bottom: 50px;\n  position: relative;\n  text-align: left;\n  padding: 15px;\n  display: inline-block;\n  width: 500px;\n  height: 350px;\n  border-radius: 2px;\n  box-shadow: 0 19px 20px rgba(0,0,0,0.01), 0 15px 12px rgba(0,0,0,0.12);\n}\n\nmain{\n  color:black;\n  padding-left: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin: 0;\n  text-align: center;\n}\n\nbutton{\n  font-family: 'Times New Roman','Source Sans Pro', 'Helvetica', Arial, sans-serif;\n  line-height: 1.5;\n}\n\nbody{\n  margin: 0;\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0ZBQWdGO0VBQ2hGLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDE5cHggMjBweCByZ2JhKDAsMCwwLDAuMDEpLCAwIDE1cHggMTJweCByZ2JhKDAsMCwwLDAuMTIpO1xufVxuXG5tYWlue1xuICBjb2xvcjpibGFjaztcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b257XG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywnU291cmNlIFNhbnMgUHJvJywgJ0hlbHZldGljYScsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5ib2R5e1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4iXX0= */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/3nine/Desktop/Angular/portfolio/src/styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map