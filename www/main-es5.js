function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
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


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/location-form/location-form.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/location-form/location-form.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeComponentsLocationFormLocationFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"location ion-text-center ion-padding\">\n  <h2 class=\"location__title\">Selecciona tu ubicación</h2>\n  <p class=\"location__text\">Por favor, indicanos en donde te encuentras</p>\n  <ion-icon class=\"location__icon-location\" name=\"location\"></ion-icon>\n  <ion-input class=\"location__country\" placeholder=\"País\"></ion-input>\n  <ion-input class=\"location__city\" placeholder=\"Ciudad\"></ion-input>\n  <ion-icon class=\"location__icon-back\" (click)=\"close()\" name=\"return-down-back-outline\"></ion-icon>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/menu/menu.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/menu/menu.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeComponentsMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"menu\">\n  <ion-list>\n    <ion-item class=\"icon-info\"><ion-icon class=\"menu__icon\" name=\"person\"></ion-icon><div class=\"menu-text\">Mi perfil</div> </ion-item>\n    <ion-item class=\"icon-info\"><ion-icon class=\"menu__icon\" name=\"person-circle-outline\"></ion-icon><div class=\"menu-text\">Soporte</div></ion-item>\n    <ion-item class=\"icon-info\"><ion-icon class=\"menu__icon\" name=\"lock-closed-outline\"></ion-icon><div class=\"menu-text\">Cambiar contraseña</div></ion-item>\n    <ion-item (click)=\"logout()\" class=\"icon-last\"><ion-icon class=\"menu__icon\" name=\"power-outline\"></ion-icon><div class=\"menu-text\">Cerrar sesión</div></ion-item>\n  </ion-list>\n</ion-content>";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/guards/auth.guard */
    "./src/app/core/guards/auth.guard.ts");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-public-public-module */
        "modules-public-public-module").then(__webpack_require__.bind(null,
        /*! ./modules/public/public.module */
        "./src/app/modules/public/public.module.ts")).then(function (m) {
          return m.PublicPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-home-home-module */
        "modules-home-home-module").then(__webpack_require__.bind(null,
        /*! ./modules/home/home.module */
        "./src/app/modules/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      },
      canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _capacitor_core__WEBP, SplashScreen, StatusBar;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"], SplashScreen = _capacitor_core__WEBP.SplashScreen, StatusBar = _capacitor_core__WEBP.StatusBar;
                    _context.prev = 1;
                    _context.next = 4;
                    return SplashScreen.hide();

                  case 4:
                    _context.next = 6;
                    return StatusBar.setStyle({
                      style: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["StatusBarStyle"].Light
                    });

                  case 6:
                    if (this.platform.is('android')) {
                      StatusBar.setBackgroundColor({
                        color: '#CDCDCD'
                      });
                    }

                    _context.next = 12;
                    break;

                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](1);
                    console.log('This is a normal Browser', _context.t0);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 9]]);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], AppComponent);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _modules_home_components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./modules/home/components/components.module */
    "./src/app/modules/home/components/components.module.ts");
    /* harmony import */


    var _core_interceptors_httpconfig_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./core/interceptors/httpconfig.service */
    "./src/app/core/interceptors/httpconfig.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _modules_home_components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["IonicStorageModule"].forRoot()],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptors_httpconfig_service__WEBPACK_IMPORTED_MODULE_12__["HttpconfigService"],
        multi: true
      }, {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
      }, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/guards/auth.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/guards/auth.guard.ts ***!
    \*******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppCoreGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var tokenUser;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    tokenUser = JSON.parse(localStorage.getItem('TOKEN'));

                    if (!(tokenUser === null || tokenUser === void 0 ? void 0 : tokenUser.authToken)) {
                      _context2.next = 5;
                      break;
                    }

                    return _context2.abrupt("return", true);

                  case 5:
                    this.router.navigateByUrl('/login');

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/core/interceptors/httpconfig.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/interceptors/httpconfig.service.ts ***!
    \*********************************************************/

  /*! exports provided: HttpconfigService */

  /***/
  function srcAppCoreInterceptorsHttpconfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpconfigService", function () {
      return HttpconfigService;
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
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var HttpconfigService = /*#__PURE__*/function () {
      function HttpconfigService(router) {
        var _this = this;

        _classCallCheck(this, HttpconfigService);

        this.router = router;
        this.pendingRequests = 0;
        this.filteredUrlPatterns = [];
        this.pendingRequestsStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            _this.pendingRequestsStatus.next(true);
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            _this.pendingRequestsStatus.next(false);
          }
        });
      }

      _createClass(HttpconfigService, [{
        key: "shouldBypass",
        value: function shouldBypass(url) {
          return this.filteredUrlPatterns.some(function (e) {
            return e.test(url);
          });
        }
      }, {
        key: "intercept",
        value: function intercept(req, next) {
          var _this2 = this;

          var shouldBypass = this.shouldBypass(req.url);
          var tokenUser = JSON.parse(localStorage.getItem('TOKEN'));

          if (tokenUser === null || tokenUser === void 0 ? void 0 : tokenUser.authToken) {
            req = req.clone({
              headers: req.headers.set('Authorization', tokenUser.authToken)
            });
          }

          if (!req.headers.has('Content-Type')) {
            req = req.clone({
              headers: req.headers.set('Content-Type', 'application/json')
            });
          }

          req = req.clone({
            headers: req.headers.set('Accept', 'application/json')
          });

          if (!shouldBypass) {
            this.pendingRequests++;

            if (1 === this.pendingRequests) {
              this.pendingRequestsStatus.next(true);
            }
          }

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return event;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            if (!shouldBypass) {
              _this2.pendingRequests--;

              if (0 === _this2.pendingRequests) {
                _this2.pendingRequestsStatus.next(false);
              }
            }
          }));
        }
      }]);

      return HttpconfigService;
    }();

    HttpconfigService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HttpconfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], HttpconfigService);
    /***/
  },

  /***/
  "./src/app/modules/home/components/components.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/home/components/components.module.ts ***!
    \**************************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppModulesHomeComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/modules/home/components/menu/menu.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _location_form_location_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./location-form/location-form.component */
    "./src/app/modules/home/components/location-form/location-form.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _location_form_location_form_component__WEBPACK_IMPORTED_MODULE_5__["LocationFormComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _location_form_location_form_component__WEBPACK_IMPORTED_MODULE_5__["LocationFormComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/modules/home/components/location-form/location-form.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/home/components/location-form/location-form.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesHomeComponentsLocationFormLocationFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".location {\n  font-family: var(--ion-base-font);\n}\n.location__title {\n  font-size: 18px;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n.location__text {\n  color: var(--ion-base-font-color);\n}\n.location__icon-location {\n  padding: 5px;\n  color: var(--ion-color-primary);\n  font-size: 35px;\n  margin-bottom: 15px;\n}\n.location__country {\n  border-bottom: 1px solid var(--ion-base-font-color);\n  margin-bottom: 15px;\n}\n.location__city {\n  border-bottom: 1px solid var(--ion-base-font-color);\n}\n.location__icon-back {\n  margin-top: 24px;\n  padding: 7px;\n  border: 1px solid var(--ion-base-font-color);\n  font-size: 24px;\n  border-radius: 50%;\n  color: var(--ion-base-font-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyb2Fycm95by9SZXBvc2l0b3JpZXMvUGVyc29uYWxlcy9MaW5rSW9uaWMvc3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9sb2NhdGlvbi1mb3JtL2xvY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2xvY2F0aW9uLWZvcm0vbG9jYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FDQ0o7QURDSTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDQ1I7QURDSTtFQUNJLGlDQUFBO0FDQ1I7QURDSTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQ0k7RUFDSSxtREFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDSTtFQUNJLG1EQUFBO0FDQ1I7QURDSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2xvY2F0aW9uLWZvcm0vbG9jYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1iYXNlLWZvbnQpO1xuICAgIFxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAmX190ZXh0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xuICAgIH1cbiAgICAmX19pY29uLWxvY2F0aW9uIHtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgICZfX2NvdW50cnkge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgICZfX2NpdHkge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgfVxuICAgICZfX2ljb24tYmFjayB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgfVxufVxuIiwiLmxvY2F0aW9uIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1iYXNlLWZvbnQpO1xufVxuLmxvY2F0aW9uX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5sb2NhdGlvbl9fdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbn1cbi5sb2NhdGlvbl9faWNvbi1sb2NhdGlvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmxvY2F0aW9uX19jb3VudHJ5IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmxvY2F0aW9uX19jaXR5IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xufVxuLmxvY2F0aW9uX19pY29uLWJhY2sge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/home/components/location-form/location-form.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/home/components/location-form/location-form.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: LocationFormComponent */

  /***/
  function srcAppModulesHomeComponentsLocationFormLocationFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationFormComponent", function () {
      return LocationFormComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var LocationFormComponent = /*#__PURE__*/function () {
      function LocationFormComponent(viewCtrl) {
        _classCallCheck(this, LocationFormComponent);

        this.viewCtrl = viewCtrl;
      }

      _createClass(LocationFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.viewCtrl.dismiss();
        }
      }]);

      return LocationFormComponent;
    }();

    LocationFormComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    LocationFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-location-form',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./location-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/location-form/location-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./location-form.component.scss */
      "./src/app/modules/home/components/location-form/location-form.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], LocationFormComponent);
    /***/
  },

  /***/
  "./src/app/modules/home/components/menu/menu.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/modules/home/components/menu/menu.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesHomeComponentsMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu {\n  border: 1.5px solid var(--ion-color-primary);\n  font-family: var(--ion-base-font);\n  --padding-top: var(--ion-10px) !important;\n  --padding-bottom: var(--ion-10px) !important;\n}\n.menu__icon {\n  padding: 5px;\n  margin-right: 10px;\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  border-radius: 50%;\n  font-size: 18px;\n}\n.icon-last {\n  --border-style: none;\n}\n.menu-text {\n  width: 150px;\n  font-size: 16px;\n  color: var(--ion-base-font-color);\n}\n.icon-info {\n  --padding-bottom: var(--ion-16px) !important;\n  font-size: 14px;\n}\nion-item {\n  --inner-padding-bottom: 8px;\n  margin-right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyb2Fycm95by9SZXBvc2l0b3JpZXMvUGVyc29uYWxlcy9MaW5rSW9uaWMvc3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0FDQ0o7QURBSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNFUjtBREVBO0VBQ0ksb0JBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ0NKO0FERUE7RUFDSSw0Q0FBQTtFQUNBLGVBQUE7QUNDSjtBREVBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tYmFzZS1mb250KTsgICAgXG4gICAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLTEwcHgpICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLTEwcHgpICFpbXBvcnRhbnQ7XG4gICAgJl9faWNvbiB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyAgICAgICAgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgICAgXG4gICAgfVxufVxuXG4uaWNvbi1sYXN0e1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lOyAgICAgICBcbn1cblxuLm1lbnUtdGV4dCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG59XG5cbi5pY29uLWluZm8ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi0xNnB4KSAhaW1wb3J0YW50OyBcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIC5pdGVtLW5hdGl2ZSB7XG5cbiAgICB9XG59IiwiLm1lbnUge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1iYXNlLWZvbnQpO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tMTBweCkgIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLTEwcHgpICFpbXBvcnRhbnQ7XG59XG4ubWVudV9faWNvbiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmljb24tbGFzdCB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4ubWVudS10ZXh0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbn1cblxuLmljb24taW5mbyB7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi0xNnB4KSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/home/components/menu/menu.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/home/components/menu/menu.component.ts ***!
    \****************************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppModulesHomeComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(router, popoverCtrl) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
        this.popoverCtrl = popoverCtrl;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('TOKEN');
          this.popoverCtrl.dismiss();
          this.router.navigateByUrl('/login');
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/menu/menu.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menu.component.scss */
      "./src/app/modules/home/components/menu/menu.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], MenuComponent);
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      url_api: 'https://zorexz6z4b.execute-api.us-east-1.amazonaws.com/dev'
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
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
    /*! /Users/cesarromeroarroyo/Repositories/Personales/LinkIonic/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map