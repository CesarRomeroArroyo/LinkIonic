function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/dashboard/dashboard.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/dashboard/dashboard.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomePagesDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showMenuPop($event)\">  \n        <ion-icon class=\"dashboard__menu-icon\"  name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"dashboard\">\n  <img class=\"dashboard__img-top\" src=\"/assets/img/Puntos_Flotantes_arriba.png\">\n  \n  <img class=\"dashboard__img-triangle\" src=\"/assets/img/Triangulo_Superior_Azul.png\">\n  <h2 class=\"dashboard__title\">Bienvenido {{userName}}!</h2>\n  <figure class=\"dashboard__figure\">\n    <img src=\"/assets/img/Reapertura_Gimnasios_1.png\" class=\"dashboard__img-cover\" alt=\"Dashboard Cover\">\n  </figure>\n  <div class=\"dashboard__location-container ion-text-center\">\n    <div class=\"dashboard__location-text ion-text-center\">Bogotá D.C / Colombia</div>\n    <ion-buttons class=\"dashboard__location-button-container\" slot=\"end\">\n      <ion-button (click)=\"showLocationPop()\">\n        <ion-icon end class=\"dashboard__location-button\" name=\"location-outline\"></ion-icon>    \n      </ion-button>\n    </ion-buttons>    \n  </div>\n  <div class=\"dashboard__site-container\">    \n    <ion-input class=\"ion-text-center dashboard__site\" placeholder=\"¿Buscas algun sitio o categoría?\">\n      <ion-icon class=\"dashboard__site-icon\" name=\"search-outline\"></ion-icon></ion-input>\n  </div>\n  <ion-slides>\n    <ion-slide class=\"dashboard__sections-container\">\n      <ion-avatar class=\"dashboard__sections\">\n        <ion-icon class=\"dashboard__sections-icon\" name=\"cash-outline\"></ion-icon>\n        <span class=\"dashboard__sections-text\">Compras</span>\n      </ion-avatar>\n      <ion-avatar class=\"dashboard__sections\" [routerLink]=\"['/home/reservations']\">\n        <ion-icon class=\"dashboard__sections-icon\" name=\"cash-outline\"></ion-icon>\n        <span class=\"dashboard__sections-text\">Reservas</span>\n      </ion-avatar>\n      <ion-avatar class=\"dashboard__sections\">\n        <ion-icon class=\"dashboard__sections-icon\" name=\"cash-outline\"></ion-icon>\n        <span class=\"dashboard__sections-text\">Recompensas</span>\n      </ion-avatar>\n      <ion-avatar class=\"dashboard__sections\">\n        <ion-icon class=\"dashboard__sections-icon\" name=\"cash-outline\"></ion-icon>\n        <span class=\"dashboard__sections-text\">Parqueadero</span>\n      </ion-avatar>\n    </ion-slide>\n  </ion-slides>\n\n  <h2 class=\"dashboard__action-title\">Tus ultimas acciones</h2>\n\n  <ion-slides [options]=\"slideOps\">\n    <ion-slide class=\"dashboard__action-history-slide\">\n      <div class=\"dashboard__action-history\">\n        <figure class=\"dashboard__action-history-container\">\n          <img src=\"/assets/icon/8050031263.png\">\n        </figure>\n        <ion-icon class=\"dashboard__action-history-badge\" name=\"calendar-outline\"></ion-icon>\n      </div>\n    </ion-slide>\n    <ion-slide class=\"dashboard__action-history-slide\">\n      <div class=\"dashboard__action-history\">\n        <figure class=\"dashboard__action-history-container\">\n          <img src=\"/assets/icon/8050031263.png\">\n        </figure>\n        <ion-icon class=\"dashboard__action-history-badge\" name=\"trophy\"></ion-icon>        \n      </div>\n    </ion-slide>\n    <ion-slide class=\"dashboard__action-history-slide\">\n      <div class=\"dashboard__action-history\">\n        <figure class=\"dashboard__action-history-container\">\n          <img src=\"/assets/icon/tianshi.jpeg\">\n        </figure>\n        <ion-icon class=\"dashboard__action-history-badge\" name=\"cash-outline\"></ion-icon>        \n      </div>\n    </ion-slide>\n    <ion-slide class=\"dashboard__action-history-slide\">\n      <div class=\"dashboard__action-history\">\n        <figure class=\"dashboard__action-history-container\">\n          <img src=\"/assets/icon/8903219032.png\">\n        </figure>\n        <ion-icon class=\"dashboard__action-history-badge\" name=\"cash-outline\"></ion-icon>        \n      </div>\n    </ion-slide>    \n  </ion-slides>\n\n</ion-content>\n<img class=\"dashboard__img-bottom\" src=\"/assets/img/Puntos_Flotantes_abajo.png\">\n";
    /***/
  },

  /***/
  "./src/app/modules/home/pages/dashboard/dashboard-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/home/pages/dashboard/dashboard-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppModulesHomePagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/modules/home/pages/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/home/pages/dashboard/dashboard.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/home/pages/dashboard/dashboard.module.ts ***!
    \******************************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppModulesHomePagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/modules/home/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/modules/home/pages/dashboard/dashboard.page.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/modules/home/pages/dashboard/dashboard.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/modules/home/pages/dashboard/dashboard.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesHomePagesDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  min-height: 100%;\n  position: relative;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\n.dashboard {\n  font-family: var(--ion-base-font);\n  position: relative;\n}\n\n.dashboard__container {\n  position: relative;\n  z-index: 4;\n}\n\n.dashboard__img-top {\n  position: absolute;\n  top: 0;\n  z-index: 3;\n}\n\n.dashboard__img-bottom {\n  line-height: 50px;\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.dashboard__img-triangle {\n  top: 0;\n  right: 0;\n  position: fixed;\n  z-index: 5;\n  width: 90px;\n}\n\n.dashboard__menu-icon {\n  color: var(--ion-color-light);\n  font-size: 24px;\n}\n\n.dashboard__figure {\n  margin: 20px 0;\n  position: relative;\n  z-index: 4;\n}\n\n.dashboard__img-cover {\n  /*  */\n}\n\n.dashboard__title {\n  position: relative;\n  color: var(--ion-color-primary);\n  margin: 0;\n  left: 40px;\n  z-index: 4;\n}\n\n.dashboard__location-container {\n  height: 40px;\n  margin: 0 35px;\n  border-bottom: 1px solid var(--ion-base-font-color);\n  position: relative;\n}\n\n.dashboard__location-text {\n  font-size: 18px;\n  font-weight: 500;\n  padding-top: 6px;\n  color: var(--ion-base-font-color);\n}\n\n.dashboard__location-button-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.dashboard__location-button {\n  color: var(--ion-color-primary);\n  font-size: var(--ion-32px);\n}\n\n.dashboard__site-container {\n  margin: 20px 40px;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.dashboard__site-icon {\n  margin-top: 2px;\n  font-size: 22px;\n  color: var(--ion-base-font-color);\n  padding-left: 10px;\n}\n\n.dashboard__site {\n  background: #E5FCFC;\n  border-radius: 16px;\n  color: var(--ion-base-font-color);\n  text-align: left !important;\n  font-family: var(--ion-base-font);\n  font-weight: 600;\n}\n\n.dashboard__sections-container {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.dashboard__sections {\n  width: 70px;\n  height: auto;\n}\n\n.dashboard__sections-icon {\n  background: var(--ion-color-primary);\n  padding: 10px;\n  border-radius: 50%;\n  color: var(--ion-color-light);\n}\n\n.dashboard__sections-text {\n  font-size: 11px;\n}\n\n.dashboard__action-title {\n  position: relative;\n  z-index: 4;\n  font-size: var(--ion-16px);\n  margin-left: 40px;\n}\n\n.dashboard__action-history-slide {\n  padding-bottom: 15px;\n}\n\n.dashboard__action-history {\n  height: auto;\n  position: relative;\n  margin-right: 60px;\n}\n\n.dashboard__action-history-container {\n  margin: 10px 0 !important;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--ion-base-font-color);\n}\n\n.dashboard__action-history-badge {\n  position: absolute;\n  bottom: 0px;\n  right: -10px;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary);\n  border-radius: 50%;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyb2Fycm95by9SZXBvc2l0b3JpZXMvUGVyc29uYWxlcy9MaW5rSW9uaWMvc3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBRUEsa0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDUjs7QURDSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNDUjs7QURDSTtFQUNJLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ1I7O0FEQ0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUNDUjs7QURDSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDUjs7QURDSTtFQUNJLEtBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNDUjs7QURDSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbURBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQ0NSOztBRENJO0VBQ0ksK0JBQUE7RUFDQSwwQkFBQTtBQ0NSOztBRENJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUNDUjs7QURDSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNDUjs7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ1I7O0FEQ0k7RUFDRyxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQ1A7O0FEQ0k7RUFDSSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDQVI7O0FER0k7RUFDSSxvQkFBQTtBQ0RSOztBREdJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURHSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ0RSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICAgIFxufVxuXG4uZGFzaGJvYXJkIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogNDtcbiAgICB9XG4gICAgJl9faW1nLXRvcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgIH1cbiAgICAmX19pbWctYm90dG9tIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6NTBweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAgJl9faW1nLXRyaWFuZ2xlIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICB9XG4gICAgJl9fbWVudS1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgJl9fZmlndXJlIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogNDtcbiAgICB9XG4gICAgJl9faW1nLWNvdmVyIHtcbiAgICAgICAgLyogICovXG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgIHotaW5kZXg6IDQ7XG4gICAgfVxuICAgICZfX2xvY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luOiAwIDM1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAmX19sb2NhdGlvbi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgfVxuICAgICZfX2xvY2F0aW9uLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgICZfX2xvY2F0aW9uLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLTMycHgpO1xuICAgIH1cbiAgICAmX19zaXRlLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMjBweCA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgICZfX3NpdGUtaWNvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgJl9fc2l0ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFNUZDRkM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgICZfX3NlY3Rpb25zLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5XG4gICAgfVxuICAgICZfX3NlY3Rpb25zIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgJl9fc2VjdGlvbnMtaWNvbiB7XG4gICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICAmX19zZWN0aW9ucy10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cblxuICAgICZfX2FjdGlvbi10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogNDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tMTZweCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgICZfX2FjdGlvbi1oaXN0b3J5LXNsaWRlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgICZfX2FjdGlvbi1oaXN0b3J5IHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcbiAgICB9XG4gICAgJl9fYWN0aW9uLWhpc3RvcnktY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgfVxuICAgICZfX2FjdGlvbi1oaXN0b3J5LWJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcblxuICAgIH1cbn1cblxuIiwiOmhvc3Qge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRhc2hib2FyZCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tYmFzZS1mb250KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRhc2hib2FyZF9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA0O1xufVxuLmRhc2hib2FyZF9faW1nLXRvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAzO1xufVxuLmRhc2hib2FyZF9faW1nLWJvdHRvbSB7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRhc2hib2FyZF9faW1nLXRyaWFuZ2xlIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1O1xuICB3aWR0aDogOTBweDtcbn1cbi5kYXNoYm9hcmRfX21lbnUtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uZGFzaGJvYXJkX19maWd1cmUge1xuICBtYXJnaW46IDIwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA0O1xufVxuLmRhc2hib2FyZF9faW1nLWNvdmVyIHtcbiAgLyogICovXG59XG4uZGFzaGJvYXJkX190aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwO1xuICBsZWZ0OiA0MHB4O1xuICB6LWluZGV4OiA0O1xufVxuLmRhc2hib2FyZF9fbG9jYXRpb24tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDAgMzVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGFzaGJvYXJkX19sb2NhdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG59XG4uZGFzaGJvYXJkX19sb2NhdGlvbi1idXR0b24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRhc2hib2FyZF9fbG9jYXRpb24tYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tMzJweCk7XG59XG4uZGFzaGJvYXJkX19zaXRlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uZGFzaGJvYXJkX19zaXRlLWljb24ge1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uZGFzaGJvYXJkX19zaXRlIHtcbiAgYmFja2dyb3VuZDogI0U1RkNGQztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tYmFzZS1mb250KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kYXNoYm9hcmRfX3NlY3Rpb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmRhc2hib2FyZF9fc2VjdGlvbnMge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmRhc2hib2FyZF9fc2VjdGlvbnMtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi5kYXNoYm9hcmRfX3NlY3Rpb25zLXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG59XG4uZGFzaGJvYXJkX19hY3Rpb24tdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDQ7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLTE2cHgpO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5kYXNoYm9hcmRfX2FjdGlvbi1oaXN0b3J5LXNsaWRlIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uZGFzaGJvYXJkX19hY3Rpb24taGlzdG9yeSB7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG4uZGFzaGJvYXJkX19hY3Rpb24taGlzdG9yeS1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbn1cbi5kYXNoYm9hcmRfX2FjdGlvbi1oaXN0b3J5LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IC0xMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/home/pages/dashboard/dashboard.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/home/pages/dashboard/dashboard.page.ts ***!
    \****************************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppModulesHomePagesDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/menu/menu.component */
    "./src/app/modules/home/components/menu/menu.component.ts");
    /* harmony import */


    var _components_location_form_location_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/location-form/location-form.component */
    "./src/app/modules/home/components/location-form/location-form.component.ts");

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(popoverCtrl) {
        _classCallCheck(this, DashboardPage);

        this.popoverCtrl = popoverCtrl;
        this.slideOps = {
          initialSlide: 1,
          slidesPerView: 4,
          centeredSlides: true,
          speed: 400
        };
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userName = JSON.parse(localStorage.getItem('TOKEN')).info;
        }
      }, {
        key: "showMenuPop",
        value: function showMenuPop(eventPop) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var popoverMenu;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverCtrl.create({
                      component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
                      event: eventPop,
                      mode: 'ios'
                    });

                  case 2:
                    popoverMenu = _context.sent;
                    _context.next = 5;
                    return popoverMenu.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showLocationPop",
        value: function showLocationPop() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var popoverLocation;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverCtrl.create({
                      component: _components_location_form_location_form_component__WEBPACK_IMPORTED_MODULE_4__["LocationFormComponent"]
                    });

                  case 2:
                    popoverLocation = _context2.sent;
                    _context2.next = 5;
                    return popoverLocation.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/dashboard/dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/modules/home/pages/dashboard/dashboard.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map