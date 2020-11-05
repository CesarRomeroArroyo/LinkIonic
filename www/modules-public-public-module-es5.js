function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-public-public-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/public/public.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/public/public.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPublicPublicPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>public</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/modules/public/public-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/public/public-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PublicPageRoutingModule */

  /***/
  function srcAppModulesPublicPublicRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicPageRoutingModule", function () {
      return PublicPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/modules/public/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | register-register-module */
        "register-register-module").then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/modules/public/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }];

    var PublicPageRoutingModule = function PublicPageRoutingModule() {
      _classCallCheck(this, PublicPageRoutingModule);
    };

    PublicPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PublicPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/public/public.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/public/public.module.ts ***!
    \*************************************************/

  /*! exports provided: PublicPageModule */

  /***/
  function srcAppModulesPublicPublicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicPageModule", function () {
      return PublicPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _public_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./public-routing.module */
    "./src/app/modules/public/public-routing.module.ts");
    /* harmony import */


    var _public_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./public.page */
    "./src/app/modules/public/public.page.ts");

    var PublicPageModule = function PublicPageModule() {
      _classCallCheck(this, PublicPageModule);
    };

    PublicPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _public_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicPageRoutingModule"]],
      declarations: [_public_page__WEBPACK_IMPORTED_MODULE_6__["PublicPage"]]
    })], PublicPageModule);
    /***/
  },

  /***/
  "./src/app/modules/public/public.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/modules/public/public.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPublicPublicPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGljL3B1YmxpYy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/public/public.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/public/public.page.ts ***!
    \***********************************************/

  /*! exports provided: PublicPage */

  /***/
  function srcAppModulesPublicPublicPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicPage", function () {
      return PublicPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PublicPage = /*#__PURE__*/function () {
      function PublicPage() {
        _classCallCheck(this, PublicPage);
      }

      _createClass(PublicPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PublicPage;
    }();

    PublicPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-public',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./public.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/public/public.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./public.page.scss */
      "./src/app/modules/public/public.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PublicPage);
    /***/
  }
}]);
//# sourceMappingURL=modules-public-public-module-es5.js.map