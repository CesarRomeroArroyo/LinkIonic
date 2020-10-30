(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/modules/home/home.page.ts");




const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard.module */ "./src/app/modules/home/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardPageModule)
    },
    {
        path: 'validate-reservation',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-reservation-validate-reservation-validate-reservation-module */ "pages-reservation-validate-reservation-validate-reservation-module").then(__webpack_require__.bind(null, /*! ./pages/reservation/validate-reservation/validate-reservation.module */ "./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.module.ts")).then(m => m.ValidateReservationPageModule)
    },
    {
        path: 'reservation-again',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-reservation-reservation-again-reservation-again-module */ "pages-reservation-reservation-again-reservation-again-module").then(__webpack_require__.bind(null, /*! ./pages/reservation/reservation-again/reservation-again.module */ "./src/app/modules/home/pages/reservation/reservation-again/reservation-again.module.ts")).then(m => m.ReservationAgainPageModule)
    },
    {
        path: 'confirm-reservation',
        loadChildren: () => Promise.all(/*! import() | pages-reservation-confirm-reservation-confirm-reservation-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-reservation-confirm-reservation-confirm-reservation-module")]).then(__webpack_require__.bind(null, /*! ./pages/reservation/confirm-reservation/confirm-reservation.module */ "./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.module.ts")).then(m => m.ConfirmReservationPageModule)
    },
    {
        path: 'new-reservation',
        loadChildren: () => Promise.all(/*! import() | pages-reservation-new-reservation-new-reservation-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-reservation-new-reservation-new-reservation-module")]).then(__webpack_require__.bind(null, /*! ./pages/reservation/new-reservation/new-reservation.module */ "./src/app/modules/home/pages/reservation/new-reservation/new-reservation.module.ts")).then(m => m.NewReservationPageModule)
    },
    {
        path: 'reservations',
        loadChildren: () => Promise.all(/*! import() | pages-reservation-reservations-reservations-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-reservation-reservations-reservations-module")]).then(__webpack_require__.bind(null, /*! ./pages/reservation/reservations/reservations.module */ "./src/app/modules/home/pages/reservation/reservations/reservations.module.ts")).then(m => m.ReservationsPageModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/modules/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/modules/home/home.page.scss":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/home/home.page.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/home/home.page.ts ***!
  \*******************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/modules/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module-es2015.js.map