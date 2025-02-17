/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************!*\
  !*** ./admin/assets/src/js/main/general-block-var.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

window.__ = wp.i18n.__; //translation functions
window.prwc_plugin_name = page_restrict_wc.plugin_name;
window.prwc_blockName = page_restrict_wc.block_name;
window.prwc_termNames = page_restrict_wc.products_available;
window.prwc_plugin_title = page_restrict_wc.plugin_title;
/**
 * Defines extend function.
 * It merges two objects.
 *
 * @param {Object} obj
 * @param {Object} src
 */
function extend(obj, src) {
  if (typeof obj === 'undefined') return src;
  if (typeof src === 'undefined') return obj;
  Object.keys(src).forEach(function (key) {
    obj[key] = src[key];
  });
  return obj;
}
window.editor_loc = 'core/block-editor';
if (wp.hasOwnProperty('blockEditor')) {
  editor_loc = 'core/block-editor';
} else {
  editor_loc = 'core/editor';
}
page_restrict_wc = extend(page_restrict_wc, {
  attributes: {},
  func: {
    CustomPanel: function CustomPanel(elements, options) {
      const PanelBody = wp.components.PanelBody;
      if (options.initialOpen) options.initialOpen;else options.initialOpen = false;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PanelBody, {
        title: options.title,
        icon: options.icon,
        initialOpen: options.initialOpen,
        className: 'custom-panel',
        children: elements
      });
    },
    getSectionBlocksSlim() {
      const blocks = wp.data.select(editor_loc).getBlocks().filter(function (x) {
        return x.name === prwc_blockName;
      }).map(function (obj, index) {
        return {
          value: index,
          label: obj.clientId
        };
      });
      return blocks;
    },
    /**
     * Returns all 'Restrict Section' blocks.
     *
     * @return {Object}
     */
    getSectionBlocks() {
      const blocks = wp.data.select(editor_loc).getBlocks().filter(function (x) {
        return x.name === prwc_blockName;
      }).map(function (obj, index) {
        return obj;
      });
      return blocks;
    },
    noAboveBlockNotice() {
      wp.data.dispatch('core/notices').createNotice('warning',
      // Can be one of: success, info, warning, error.
      __('You had the "Above block" or "Below block" setting checked but you dont have a usable block. Add a Section Block below or above in order to be able to check that setting', 'page_restrict_domain'),
      // Text string to display.
      {
        id: 'no-above-block',
        //assigning an ID prevents the notice from being added repeatedly
        isDismissible: true // Whether the user can dismiss the notice.
      });
    },
    disableAboveBlockCheck() {
      wp.data.subscribe(function () {
        if (wp.data.select(editor_loc).hasSelectedBlock() && wp.data.select(editor_loc).hasChangedContent()) {
          page_restrict_wc.func.noAboveBlockNotice();
          this.attributes.aboveBlockAttr = false;
          disabledInput = false;
        }
      });
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=general-block-var.js.map