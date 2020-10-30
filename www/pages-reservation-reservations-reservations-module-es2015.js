(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reservation-reservations-reservations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/reservation/reservations/reservations.page.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/reservation/reservations/reservations.page.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showMenuPop($event)\">  \n        <ion-icon class=\"reservation__menu-icon\"  name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"reservation\">\n  <img class=\"reservation__img-top\" src=\"/assets/img/Puntos_Flotantes_arriba.png\">\n  \n  <img class=\"reservation__img-triangle\" src=\"/assets/img/Triangulo_Superior_Azul.png\">\n  <h2 class=\"reservation__title\">Tus reservas</h2>\n  <figure class=\"reservation__figure\">\n    <img src=\"/assets/img/Reapertura_Gimnasios_1.png\" class=\"reservation__img-cover\" alt=\"reservation Cover\">\n  </figure>\n  \n  <div class=\"item\" [routerLink]=\"['/home/new-reservation']\">\n    <ion-button class=\"reservation__button\">\n      Adicionar\n    </ion-button>\n  </div>\n  <!--  -->\n\n  <div class=\"actives\">\n    <h1 class=\"actives__title\">Reservas Activas</h1>\n    <div class=\"actives__cards \" >\n      \n    <div class=\"actives__card\"*ngFor=\"let item of reservations\" >\n      {{item.name}}\n      {{item.time}}\n    </div>\n    </div>\n  </div>\n  <div class=\"next\">\n    <h1 class=\"next__title\">Próximas Reservas</h1>\n    <div class=\"next__cards\">\n    <div class=\"next__card\"*ngFor=\"let item of products\" >\n      <img [src]=\"item.image\" width=\"100%\" height=\"100%\">\n    </div>\n    </div>\n  </div>\n  <div class=\"last\">\n    <h1 class=\"last__title\">Últimas 5 Reservas Tomadas</h1>\n    <div class=\"last__cards\">\n    <div class=\"last__card\"*ngFor=\"let item of last\" >\n      <img [src]=\"item.image\" width=\"100%\" height=\"100%\">\n    </div>\n    </div>\n  </div>\n  \n  <figure class=\"reservation__back-container ion-text-center\">\n    <img [routerLink]=\"['/home/dashboard']\" class=\"reservation__icon-back\" src=\"/assets/icon/Raster.png\" alt=\"\">\n  </figure>\n\n\n</ion-content>\n<img class=\"reservation__img-bottom\" src=\"/assets/img/Puntos_Flotantes_abajo.png\">\n");

/***/ }),

/***/ "./src/app/modules/home/pages/reservation/reservations/reservations-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/reservations/reservations-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ReservationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsPageRoutingModule", function() { return ReservationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reservations_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservations.page */ "./src/app/modules/home/pages/reservation/reservations/reservations.page.ts");




const routes = [
    {
        path: '',
        component: _reservations_page__WEBPACK_IMPORTED_MODULE_3__["ReservationsPage"]
    }
];
let ReservationsPageRoutingModule = class ReservationsPageRoutingModule {
};
ReservationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReservationsPageRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/pages/reservation/reservations/reservations.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/reservations/reservations.module.ts ***!
  \************************************************************************************/
/*! exports provided: ReservationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsPageModule", function() { return ReservationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _reservations_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservations-routing.module */ "./src/app/modules/home/pages/reservation/reservations/reservations-routing.module.ts");
/* harmony import */ var _reservations_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reservations.page */ "./src/app/modules/home/pages/reservation/reservations/reservations.page.ts");







let ReservationsPageModule = class ReservationsPageModule {
};
ReservationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reservations_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReservationsPageRoutingModule"]
        ],
        declarations: [_reservations_page__WEBPACK_IMPORTED_MODULE_6__["ReservationsPage"]]
    })
], ReservationsPageModule);



/***/ }),

/***/ "./src/app/modules/home/pages/reservation/reservations/reservations.page.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/reservations/reservations.page.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-height: 100%;\n  position: relative;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\n.reservation {\n  font-family: var(--ion-base-font);\n  position: relative;\n}\n\n.reservation__container {\n  position: relative;\n  z-index: 4;\n}\n\n.reservation__img-top {\n  position: absolute;\n  top: 0;\n  z-index: 3;\n}\n\n.reservation__img-bottom {\n  line-height: 50px;\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.reservation__img-triangle {\n  top: 0;\n  right: 0;\n  position: fixed;\n  z-index: 5;\n  width: 90px;\n}\n\n.reservation__menu-icon {\n  color: var(--ion-color-light);\n  font-size: 24px;\n}\n\n.reservation__figure {\n  margin: 20px 0;\n  position: relative;\n  z-index: 4;\n}\n\n.reservation__img-cover {\n  /*  */\n}\n\n.reservation__title {\n  position: relative;\n  color: var(--ion-color-primary);\n  margin: 0;\n  left: 40px;\n  z-index: 4;\n}\n\n.reservation__location-container {\n  height: 40px;\n  margin: 0 35px;\n  border-bottom: 1px solid var(--ion-base-font-color);\n  position: relative;\n}\n\n.reservation__location-text {\n  font-size: 18px;\n  font-weight: 500;\n  padding-top: 6px;\n  color: var(--ion-base-font-color);\n}\n\n.reservation__location-button-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n.reservation__location-button {\n  color: var(--ion-color-primary);\n  font-size: var(--ion-32px);\n}\n\n.reservation__site-container {\n  margin: 20px 40px;\n  display: flex;\n  justify-content: flex-start;\n}\n\n.reservation__site-icon {\n  margin-top: 2px;\n  font-size: 22px;\n  color: var(--ion-base-font-color);\n  padding-left: 10px;\n}\n\n.reservation__site {\n  background: #E5FCFC;\n  border-radius: 16px;\n  color: var(--ion-base-font-color);\n  text-align: left !important;\n  font-family: var(--ion-base-font);\n  font-weight: 600;\n}\n\n.reservation__sections-container {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.reservation__sections {\n  width: 70px;\n  height: auto;\n}\n\n.reservation__sections-icon {\n  background: var(--ion-color-primary);\n  padding: 10px;\n  border-radius: 50%;\n  color: var(--ion-color-light);\n}\n\n.reservation__sections-text {\n  font-size: 11px;\n}\n\n.reservation__action-title {\n  position: relative;\n  z-index: 4;\n  font-size: var(--ion-16px);\n  margin-left: 40px;\n}\n\n.reservation__action-history-slide {\n  padding-bottom: 15px;\n}\n\n.reservation__action-history {\n  height: auto;\n  position: relative;\n  margin-right: 60px;\n}\n\n.reservation__action-history-container {\n  margin: 10px 0 !important;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--ion-base-font-color);\n}\n\n.reservation__action-history-badge {\n  position: absolute;\n  bottom: 0px;\n  right: -10px;\n  color: var(--ion-color-light);\n  background: var(--ion-color-primary);\n  border-radius: 50%;\n  padding: 5px;\n}\n\n.reservation__button {\n  width: 60%;\n  margin-left: 20%;\n  height: 33px;\n  background: var(--ion-color-primary);\n}\n\n.reservation__back-container {\n  position: relative;\n  z-index: 2;\n}\n\n.reservation__icon-back {\n  width: 40px;\n}\n\n.actives {\n  width: 80%;\n  margin-left: 10%;\n}\n\n.actives__cards {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.actives__card {\n  margin-left: 3px;\n  flex: 0 0 auto;\n  width: 75px;\n  height: 65px;\n  border: 0.5px solid var(--ion-btn-dark);\n}\n\n.actives__title {\n  font-family: var(--ion-base-font);\n  font-size: var(--ion-16px);\n  position: relative;\n  z-index: 2;\n}\n\n.next {\n  width: 80%;\n  margin-left: 10%;\n}\n\n.next__cards {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.next__card {\n  margin-left: 3px;\n  flex: 0 0 auto;\n  width: 65px;\n  height: 65px;\n  border: 0.5px solid var(--ion-btn-dark);\n}\n\n.next__title {\n  font-family: var(--ion-base-font);\n  font-size: var(--ion-16px);\n  position: relative;\n  z-index: 2;\n}\n\n.last {\n  width: 80%;\n  margin-left: 10%;\n}\n\n.last__cards {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.last__card {\n  margin-left: 3px;\n  flex: 0 0 auto;\n  width: 65px;\n  height: 65px;\n  border: 0.5px solid var(--ion-btn-dark);\n}\n\n.last__title {\n  font-family: var(--ion-base-font);\n  font-size: var(--ion-16px);\n  position: relative;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyb2Fycm95by9SZXBvc2l0b3JpZXMvUGVyc29uYWxlcy9MaW5rSW9uaWMvc3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9yZXNlcnZhdGlvbi9yZXNlcnZhdGlvbnMvcmVzZXJ2YXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBRUEsa0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNDUjs7QURDSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNDUjs7QURDSTtFQUNJLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ1I7O0FEQ0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUNDUjs7QURDSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDUjs7QURDSTtFQUNJLEtBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNDUjs7QURDSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbURBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQ0NSOztBRENJO0VBQ0ksK0JBQUE7RUFDQSwwQkFBQTtBQ0NSOztBRENJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUNDUjs7QURDSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7QUNDUjs7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ1I7O0FEQ0k7RUFDRyxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FDQ1A7O0FEQ0k7RUFDSSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDQVI7O0FER0k7RUFDSSxvQkFBQTtBQ0RSOztBREdJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURHSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ0RSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNEUjs7QURHSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ0RSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDRFI7O0FER0k7RUFDSSxXQUFBO0FDRFI7O0FES0E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURHSTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNESjs7QURHSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUNEUjs7QURHSTtFQUNJLGlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNEUjs7QURNQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRElFO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZGOztBRElFO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBQ0ZOOztBRElFO0VBQ0ksaUNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZOOztBREtBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FER0U7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDREY7O0FER0U7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FDRE47O0FER0U7RUFDSSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvcmVzZXJ2YXRpb24vcmVzZXJ2YXRpb25zL3Jlc2VydmF0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgICBcbn1cblxuLnJlc2VydmF0aW9uIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogNDtcbiAgICB9XG4gICAgJl9faW1nLXRvcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgIH1cbiAgICAmX19pbWctYm90dG9tIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6NTBweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAgJl9faW1nLXRyaWFuZ2xlIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICB9XG4gICAgJl9fbWVudS1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgJl9fZmlndXJlIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogNDtcbiAgICB9XG4gICAgJl9faW1nLWNvdmVyIHtcbiAgICAgICAgLyogICovXG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgIHotaW5kZXg6IDQ7XG4gICAgfVxuICAgICZfX2xvY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luOiAwIDM1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAmX19sb2NhdGlvbi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgfVxuICAgICZfX2xvY2F0aW9uLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgICZfX2xvY2F0aW9uLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taW9uLTMycHgpO1xuICAgIH1cbiAgICAmX19zaXRlLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMjBweCA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgfVxuICAgICZfX3NpdGUtaWNvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgJl9fc2l0ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFNUZDRkM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgICZfX3NlY3Rpb25zLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5XG4gICAgfVxuICAgICZfX3NlY3Rpb25zIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgJl9fc2VjdGlvbnMtaWNvbiB7XG4gICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICAmX19zZWN0aW9ucy10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cblxuICAgICZfX2FjdGlvbi10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogNDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tMTZweCk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgICZfX2FjdGlvbi1oaXN0b3J5LXNsaWRlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgICZfX2FjdGlvbi1oaXN0b3J5IHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcbiAgICB9XG4gICAgJl9fYWN0aW9uLWhpc3RvcnktY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgfVxuICAgICZfX2FjdGlvbi1oaXN0b3J5LWJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICAgICAgaGVpZ2h0OiAzM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgICZfX2JhY2stY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICAmX19pY29uLWJhY2sge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICB9XG59XG5cbi5hY3RpdmVze1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICAmX19jYXJkc3tcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgICZfX2NhcmR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgIGZsZXg6MCAwIGF1dG87XG4gICAgICAgIHdpZHRoOiA3NXB4O1xuICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgIGJvcmRlcjowLjVweCBzb2xpZCB2YXIoLS1pb24tYnRuLWRhcmspO1xuICAgIH1cbiAgICAmX190aXRsZXtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1iYXNlLWZvbnQpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWlvbi0xNnB4KTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICBcbn1cblxuLm5leHR7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICZfX2NhcmRze1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB9XG4gICZfX2NhcmR7XG4gICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgZmxleDowIDAgYXV0bztcbiAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgYm9yZGVyOjAuNXB4IHNvbGlkIHZhcigtLWlvbi1idG4tZGFyayk7XG4gIH1cbiAgJl9fdGl0bGV7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi0xNnB4KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gIH1cbn1cbi5sYXN0e1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlOyAgXG4gICZfX2NhcmRze1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICB9XG4gICZfX2NhcmR7XG4gICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgZmxleDowIDAgYXV0bztcbiAgICAgIHdpZHRoOiA2NXB4O1xuICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgYm9yZGVyOjAuNXB4IHNvbGlkIHZhcigtLWlvbi1idG4tZGFyayk7XG4gIH1cbiAgJl9fdGl0bGV7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWlvbi0xNnB4KTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gIH1cbn1cblxuXG4iLCI6aG9zdCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucmVzZXJ2YXRpb24ge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yZXNlcnZhdGlvbl9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA0O1xufVxuLnJlc2VydmF0aW9uX19pbWctdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDM7XG59XG4ucmVzZXJ2YXRpb25fX2ltZy1ib3R0b20ge1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZXNlcnZhdGlvbl9faW1nLXRyaWFuZ2xlIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1O1xuICB3aWR0aDogOTBweDtcbn1cbi5yZXNlcnZhdGlvbl9fbWVudS1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5yZXNlcnZhdGlvbl9fZmlndXJlIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNDtcbn1cbi5yZXNlcnZhdGlvbl9faW1nLWNvdmVyIHtcbiAgLyogICovXG59XG4ucmVzZXJ2YXRpb25fX3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IDA7XG4gIGxlZnQ6IDQwcHg7XG4gIHotaW5kZXg6IDQ7XG59XG4ucmVzZXJ2YXRpb25fX2xvY2F0aW9uLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDM1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJlc2VydmF0aW9uX19sb2NhdGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG59XG4ucmVzZXJ2YXRpb25fX2xvY2F0aW9uLWJ1dHRvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ucmVzZXJ2YXRpb25fX2xvY2F0aW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLTMycHgpO1xufVxuLnJlc2VydmF0aW9uX19zaXRlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ucmVzZXJ2YXRpb25fX3NpdGUtaWNvbiB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5yZXNlcnZhdGlvbl9fc2l0ZSB7XG4gIGJhY2tncm91bmQ6ICNFNUZDRkM7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucmVzZXJ2YXRpb25fX3NlY3Rpb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLnJlc2VydmF0aW9uX19zZWN0aW9ucyB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucmVzZXJ2YXRpb25fX3NlY3Rpb25zLWljb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ucmVzZXJ2YXRpb25fX3NlY3Rpb25zLXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG59XG4ucmVzZXJ2YXRpb25fX2FjdGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNDtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLnJlc2VydmF0aW9uX19hY3Rpb24taGlzdG9yeS1zbGlkZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnJlc2VydmF0aW9uX19hY3Rpb24taGlzdG9yeSB7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG4ucmVzZXJ2YXRpb25fX2FjdGlvbi1oaXN0b3J5LWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xufVxuLnJlc2VydmF0aW9uX19hY3Rpb24taGlzdG9yeS1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucmVzZXJ2YXRpb25fX2J1dHRvbiB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIGhlaWdodDogMzNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnJlc2VydmF0aW9uX19iYWNrLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi5yZXNlcnZhdGlvbl9faWNvbi1iYWNrIHtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5hY3RpdmVzIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5hY3RpdmVzX19jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLmFjdGl2ZXNfX2NhcmQge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1pb24tYnRuLWRhcmspO1xufVxuLmFjdGl2ZXNfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1iYXNlLWZvbnQpO1xuICBmb250LXNpemU6IHZhcigtLWlvbi0xNnB4KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubmV4dCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ubmV4dF9fY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi5uZXh0X19jYXJkIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taW9uLWJ0bi1kYXJrKTtcbn1cbi5uZXh0X190aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tYmFzZS1mb250KTtcbiAgZm9udC1zaXplOiB2YXIoLS1pb24tMTZweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cblxuLmxhc3Qge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLmxhc3RfX2NhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4ubGFzdF9fY2FyZCB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWlvbi1idG4tZGFyayk7XG59XG4ubGFzdF9fdGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taW9uLTE2cHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/home/pages/reservation/reservations/reservations.page.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/reservations/reservations.page.ts ***!
  \**********************************************************************************/
/*! exports provided: ReservationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsPage", function() { return ReservationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_core_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/reservations.service */ "./src/app/core/services/reservations.service.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/menu/menu.component */ "./src/app/modules/home/components/menu/menu.component.ts");





let ReservationsPage = class ReservationsPage {
    constructor(popoverCtrl, reservation) {
        this.popoverCtrl = popoverCtrl;
        this.reservation = reservation;
        this.slideOps = { initialSlide: 1, slidesPerView: 4, centeredSlides: true, speed: 400 };
        this.products = [
            {
                image: 'assets/images.png'
            },
        ];
        this.last = [
            {
                image: 'assets/images2.jpg'
            },
            {
                image: 'assets/images3.png'
            }
        ];
    }
    ngOnInit() {
        this.reservation.getAllReservations().subscribe(response => {
            this.reservations = response;
        });
    }
    showMenuPop(eventPop) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popoverMenu = yield this.popoverCtrl.create({
                component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                event: eventPop,
                mode: 'ios'
            });
            yield popoverMenu.present();
        });
    }
};
ReservationsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_core_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsService"] }
];
ReservationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reservations',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reservations.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/reservation/reservations/reservations.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reservations.page.scss */ "./src/app/modules/home/pages/reservation/reservations/reservations.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_core_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__["ReservationsService"]])
], ReservationsPage);



/***/ })

}]);
//# sourceMappingURL=pages-reservation-reservations-reservations-module-es2015.js.map