/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/assets/src/js/main/ajax.js":
/*!******************************************!*\
  !*** ./admin/assets/src/js/main/ajax.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sendDataAjax = function ($this, data) {
  jQuery($this).css('background-image', 'url(' + plugin_dir_url + '/assets/img/loading.svg)');
  jQuery($this).addClass('loading');
  jQuery($this).attr('disabled', 'disabled');
  const el = $this;
  jQuery.ajax({
    url: ajaxurl,
    type: 'POST',
    data,
    beforeSend() {},
    success(response) {
      setTimeout(() => {
        jQuery(el).css('background-image', 'none');
        jQuery(el).removeClass('loading');
        jQuery(el).removeAttr('disabled');
      }, 10);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendDataAjax);

/***/ }),

/***/ "./admin/assets/src/js/main/filters.js":
/*!*********************************************!*\
  !*** ./admin/assets/src/js/main/filters.js ***!
  \*********************************************/
/***/ (() => {

jQuery(function () {
  jQuery('.filter-by-post-types').on('change', function () {
    const post_type = jQuery('.filter-by-post-types').val();
    jQuery('.pages-list').find('.page-type').slideUp('slow');
    jQuery('.pages-list').find('.page-type[data-page-type="' + post_type + '"]').slideDown('slow');
    /**
     * Reset everything.
     */
    jQuery('.pages-list').find('.page-pagination').slideUp();
    jQuery('.pages-list').find('.page-pagination:first-child').slideDown();
    jQuery('.pages-list').find('.pagination li').removeClass('active');
    jQuery('.pages-list').find('.pagination li:first-child').addClass('active');
    /**
     * -----
     */
  });
});

/***/ }),

/***/ "./admin/assets/src/js/main/pagination.js":
/*!************************************************!*\
  !*** ./admin/assets/src/js/main/pagination.js ***!
  \************************************************/
/***/ (() => {

jQuery(function () {
  jQuery('.pagination li').on('click', function () {
    const page = jQuery(this).data('pagination-page');
    if (jQuery('.tab').length) {
      var main_el = jQuery('.tab .pages-list');
    } else {
      var main_el = jQuery('.pages-list');
    }
    main_el.find('.page-pagination').slideUp('slow');
    main_el.find('.pagination li').removeClass('active');
    jQuery(this).toggleClass('active');
    main_el.find('.page-pagination[data-pagination-page="' + page + '"]').slideDown('slow');
  });
});

/***/ }),

/***/ "./admin/assets/src/js/main/submit-pages.js":
/*!**************************************************!*\
  !*** ./admin/assets/src/js/main/submit-pages.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax.js */ "./admin/assets/src/js/main/ajax.js");

/**
 * This is to send plugin or page options data to the database.
 */
jQuery(function () {
  jQuery('.button-submit').on('click', function () {
    /**
     * Plugin options page.
     */
    if (jQuery('.plugin-options-wrapper').length) {
      const limit_to_virt_products = +jQuery("input[name='prwc_limit_to_virtual_products']").is(':checked');
      const limit_to_down_products = +jQuery("input[name='prwc_limit_to_downloadable_products']").is(':checked');
      const gen_log_page = +jQuery("select[name='prwc_general_login_page']").val();
      const redirect_gen_log = +jQuery("input[name='prwc_general_redirect_login']").is(':checked');
      const gen_not_bought_page = +jQuery("select[name='prwc_general_not_bought_page']").val();
      const redirect_gen_not_bought = +jQuery("input[name='prwc_general_redirect_not_bought']").is(':checked');
      const gen_not_bought_section = +jQuery("select[name='prwc_general_not_bought_section']").val();
      const gen_log_section = +jQuery("select[name='prwc_general_login_section']").val();
      let post_types_general = [];
      const delete_plugin_data_on_uninstall = +jQuery("input[name='prwc_delete_plugin_data_on_uninstall']").is(':checked');
      const prwc_my_account_rp_page_disable_endpoint = +jQuery("input[name='prwc_my_account_rp_page_disable_endpoint']").is(':checked');
      const prwc_my_account_rp_page_hide_time_table = +jQuery("input[name='prwc_my_account_rp_page_hide_time_table']").is(':checked');
      const prwc_my_account_rp_page_hide_view_table = +jQuery("input[name='prwc_my_account_rp_page_hide_view_table']").is(':checked');
      const prwc_my_account_rp_page_disable_plugin_designed_table = +jQuery("input[name='prwc_my_account_rp_page_disable_plugin_designed_table']").is(':checked');
      if (jQuery("select[name='prwc_general_post_types']").length) post_types_general = jQuery("select[name='prwc_general_post_types']").val() ? jQuery("select[name='prwc_general_post_types']").val().join() : [];else post_types_general = false;
      var data = {
        action: 'prwc_plugin_options',
        nonce: page_restrict_wc.nonce,
        option_page: 'prwc-settings-group',
        prwc_limit_to_virtual_products: limit_to_virt_products,
        prwc_delete_plugin_data_on_uninstall: delete_plugin_data_on_uninstall,
        prwc_limit_to_downloadable_products: limit_to_down_products,
        prwc_general_login_page: gen_log_page,
        prwc_general_redirect_login: redirect_gen_log,
        prwc_general_not_bought_page: gen_not_bought_page,
        prwc_general_redirect_not_bought: redirect_gen_not_bought,
        prwc_general_login_section: gen_log_section,
        prwc_general_not_bought_section: gen_not_bought_section,
        prwc_general_post_types: post_types_general,
        prwc_my_account_rp_page_disable_endpoint,
        prwc_my_account_rp_page_hide_time_table,
        prwc_my_account_rp_page_hide_view_table,
        prwc_my_account_rp_page_disable_plugin_designed_table
      };
      (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, data);
    }
    /**
     * Page restrict page.
     */
    if (jQuery('.pages-options-wrapper').length) {
      var data = {
        action: 'prwc_pages_options',
        nonce: page_restrict_wc.nonce,
        option_page: 'prwc-settings-group'
      };
      const pages = jQuery('.pages-all > .pages-list > .page-type > .page-pagination > .card');
      window.pages_lock_data = {};
      for (let i = 0; i < pages.length; i++) {
        let prwc_products = jQuery(pages[i]).find('.lock-by-product').val();
        if (Array.isArray(prwc_products)) {
          prwc_products = prwc_products.join(',');
        }
        const prwc_not_all_products_required = +jQuery(pages[i]).find('.not-all-products-required').is(':checked');
        const prwc_not_bought_page = jQuery(pages[i]).find('.redirect-not-bought-page').val();
        const prwc_redirect_not_bought = +jQuery(pages[i]).find('.redirect-prod-page').is(':checked');
        const prwc_not_logged_in_page = jQuery(pages[i]).find('.redirect-not-logged-in-page').val();
        const prwc_redirect_not_logged_in = +jQuery(pages[i]).find('.redirect-user-page').is(':checked');
        const prwc_timeout_days = jQuery(pages[i]).find('.timeout-days').val();
        const prwc_timeout_hours = jQuery(pages[i]).find('.timeout-hours').val();
        const prwc_timeout_minutes = jQuery(pages[i]).find('.timeout-minutes').val();
        const prwc_timeout_seconds = jQuery(pages[i]).find('.timeout-seconds').val();
        const prwc_timeout_views = jQuery(pages[i]).find('.timeout-views').val();
        pages_lock_data[jQuery(pages[i]).data('page-id')] = {
          prwc_products,
          prwc_not_all_products_required,
          prwc_not_bought_page,
          prwc_redirect_not_bought,
          prwc_not_logged_in_page,
          prwc_redirect_not_logged_in,
          prwc_timeout_days,
          prwc_timeout_hours,
          prwc_timeout_minutes,
          prwc_timeout_seconds,
          prwc_timeout_views
        };
      }
      data.pages_lock_data = pages_lock_data;
      (0,_ajax_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, data);
    }
  });
});

/***/ }),

/***/ "./admin/assets/src/js/main/tabs.js":
/*!******************************************!*\
  !*** ./admin/assets/src/js/main/tabs.js ***!
  \******************************************/
/***/ (() => {

jQuery(function () {
  jQuery('.tab-menu li').on('click', function () {
    const el_tab = jQuery('#prwc-plugin-main-wrapper .tab');
    for (let i = 0; i < el_tab.length; i++) {
      jQuery(el_tab[i]).find('.pages-list').find('.pagination li').removeClass('active');
      jQuery(el_tab[i]).find('.pages-list').find('.pagination li:first-child').addClass('active');
      /**
       * Reset everything.
       */
      jQuery(el_tab[i]).find('.pages-list').find('.page-pagination').slideUp();
      jQuery(el_tab[i]).find('.pages-list').find('.page-pagination:first-child').slideDown();
      jQuery(el_tab[i]).find('.pages-list').find('.pagination li').removeClass('active');
      jQuery(el_tab[i]).find('.pages-list').find('.pagination li:first-child').addClass('active');
      /**
       * -----
       */
    }
  });
});

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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************************!*\
  !*** ./admin/assets/src/js/admin.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_submit_pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/submit-pages.js */ "./admin/assets/src/js/main/submit-pages.js");
/* harmony import */ var _main_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/tabs.js */ "./admin/assets/src/js/main/tabs.js");
/* harmony import */ var _main_tabs_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_tabs_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/filters.js */ "./admin/assets/src/js/main/filters.js");
/* harmony import */ var _main_filters_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_filters_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_pagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/pagination.js */ "./admin/assets/src/js/main/pagination.js");
/* harmony import */ var _main_pagination_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_main_pagination_js__WEBPACK_IMPORTED_MODULE_3__);




jQuery(function () {
  jQuery(".redirect-prod-page, .redirect-user-page").on('change', function () {
    var parent = jQuery(this).parent();
    parent.find(".warning-private-page-redirect").show();
    if (!parent.find('.redirect-prod-page')[0].checked && !parent.find('.redirect-user-page')[0].checked) {
      parent.find(".warning-private-page-redirect").hide();
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=admin-script.js.map