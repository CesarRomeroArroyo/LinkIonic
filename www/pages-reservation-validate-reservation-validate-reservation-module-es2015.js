(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reservation-validate-reservation-validate-reservation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.page.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.page.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showMenuPop($event)\">  \n        <ion-icon class=\"reservation__menu-icon\"  name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"reservation\">\n  <img class=\"reservation__img-top\" src=\"/assets/img/Puntos_Flotantes_arriba.png\">  \n  <img class=\"reservation__img-triangle\" src=\"/assets/img/Triangulo_Superior_Azul.png\">\n  <article class=\"reservation__container ion-text-center\">\n    <h2 class=\"reservation__user-title\">John</h2>\n    <p class=\"reservation__middle-text\">Tu reserva en</p>\n    <figure >\n      <img class=\"reservation__image-service ion-text-center\" src=\"/assets/img/8050031263.png\" alt=\"Reservation Image\">\n    </figure>\n    <h3 class=\"reservation__middle-title\">Parroquia La María</h3>\n    <p class=\"reservation____middle-text\">Para el servicio de</p>\n    <h3>Eucaristía</h3>\n    <p>Ha sido confirmado para en el horario</p>\n    <h3 class=\"reservation__middle-title\">Sáb. 3 de Octubre</h3>\n    <p class=\"reservation__hour\">16:00 - 17:00</p>\n    <figure>\n      <img class=\"reservation__img-brand\" src=\"/assets/img/LogoBlanco.png\" alt=\"Logo Link\">\n    </figure>\n    <div class=\"reservation__buttons-container\">\n      <ion-buttons class=\"reservation__buttons-group\">\n        <ion-button class=\"reservation__button-send\">Liberar</ion-button>\n        <ion-button class=\"reservation__button-send\">Validar reserva</ion-button>\n      </ion-buttons>\n    </div>\n  </article>  \n</ion-content>\n<img class=\"reservation__img-bottom\" src=\"/assets/img/Puntos_Flotantes_abajo.png\">");

/***/ }),

/***/ "./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: ValidateReservationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateReservationPageRoutingModule", function() { return ValidateReservationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _validate_reservation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate-reservation.page */ "./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.page.ts");




const routes = [
    {
        path: '',
        component: _validate_reservation_page__WEBPACK_IMPORTED_MODULE_3__["ValidateReservationPage"]
    }
];
let ValidateReservationPageRoutingModule = class ValidateReservationPageRoutingModule {
};
ValidateReservationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ValidateReservationPageRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ValidateReservationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateReservationPageModule", function() { return ValidateReservationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _validate_reservation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validate-reservation-routing.module */ "./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation-routing.module.ts");
/* harmony import */ var _validate_reservation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate-reservation.page */ "./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.page.ts");







let ValidateReservationPageModule = class ValidateReservationPageModule {
};
ValidateReservationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _validate_reservation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ValidateReservationPageRoutingModule"]
        ],
        declarations: [_validate_reservation_page__WEBPACK_IMPORTED_MODULE_6__["ValidateReservationPage"]]
    })
], ValidateReservationPageModule);



/***/ }),

/***/ "./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.page.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.page.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-height: 100%;\n  position: relative;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\n.reservation {\n  font-family: var(--ion-base-font);\n}\n\n.reservation__container {\n  position: relative;\n  z-index: 2;\n}\n\n.reservation__img-top {\n  position: absolute;\n  top: 0;\n}\n\n.reservation__img-bottom {\n  line-height: 50px;\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.reservation__img-triangle {\n  line-height: 50px;\n  color: white;\n  text-align: center;\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  width: 90px;\n}\n\n.reservation__menu-icon {\n  color: var(--ion-color-light);\n  font-size: 24px;\n}\n\n.reservation__image-service {\n  width: 170px;\n}\n\n.reservation__user-title {\n  position: relative;\n  font-size: 24px;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n\n.reservation__middle-text {\n  position: relative;\n  color: #1A1A38;\n}\n\n.reservation__middle-title {\n  color: #1A1A38;\n  font-weight: 500;\n}\n\n.reservation__hour {\n  font-weight: 400;\n  font-size: 18px;\n}\n\n.reservation__img-brand {\n  width: 120px;\n}\n\n.reservation__buttons-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.reservation__button-send {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  border-radius: 8px;\n  width: 300px;\n  height: 40px;\n  margin-bottom: 12px;\n  font-size: 18px;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyb2Fycm95by9SZXBvc2l0b3JpZXMvUGVyc29uYWxlcy9MaW5rSW9uaWMvc3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvcmVzZXJ2YXRpb24vdmFsaWRhdGUtcmVzZXJ2YXRpb24vdmFsaWRhdGUtcmVzZXJ2YXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvcmVzZXJ2YXRpb24vdmFsaWRhdGUtcmVzZXJ2YXRpb24vdmFsaWRhdGUtcmVzZXJ2YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFFQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNJLGlDQUFBO0FDQUo7O0FER0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNEUjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtBQ0RSOztBREdJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBQ0RSOztBREdJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0RSOztBREdJO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FDRFI7O0FER0k7RUFDSSxZQUFBO0FDRFI7O0FER0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDRFI7O0FER0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNEUjs7QURHSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREdJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDRFI7O0FER0k7RUFDSSxZQUFBO0FDRFI7O0FETUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNKUjs7QURNSTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9yZXNlcnZhdGlvbi92YWxpZGF0ZS1yZXNlcnZhdGlvbi92YWxpZGF0ZS1yZXNlcnZhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgICBcbn1cblxuLnJlc2VydmF0aW9uIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7ICAgIFxuICAgIFxuICAgIFxuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgJl9faW1nLXRvcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAmX19pbWctYm90dG9tIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6NTBweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAgJl9faW1nLXRyaWFuZ2xlIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6NTBweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDowO1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICB9XG4gICAgJl9fbWVudS1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgJl9faW1hZ2Utc2VydmljZSB7XG4gICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICB9XG4gICAgJl9fdXNlci10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAmX19taWRkbGUtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6ICMxQTFBMzg7XG4gICAgfVxuICAgICZfX21pZGRsZS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjMUExQTM4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAmX19ob3VyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAmX19pbWctYnJhbmQge1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgfVxuICAgICZfX2J1dHRvbnMtY29udGFpbmVyIHtcblxuICAgIH1cbiAgICAmX19idXR0b25zLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgJl9fYnV0dG9uLXNlbmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxufVxuXG4iLCI6aG9zdCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucmVzZXJ2YXRpb24ge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG59XG4ucmVzZXJ2YXRpb25fX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi5yZXNlcnZhdGlvbl9faW1nLXRvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuLnJlc2VydmF0aW9uX19pbWctYm90dG9tIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucmVzZXJ2YXRpb25fX2ltZy10cmlhbmdsZSB7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAzO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogOTBweDtcbn1cbi5yZXNlcnZhdGlvbl9fbWVudS1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5yZXNlcnZhdGlvbl9faW1hZ2Utc2VydmljZSB7XG4gIHdpZHRoOiAxNzBweDtcbn1cbi5yZXNlcnZhdGlvbl9fdXNlci10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlc2VydmF0aW9uX19taWRkbGUtdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMxQTFBMzg7XG59XG4ucmVzZXJ2YXRpb25fX21pZGRsZS10aXRsZSB7XG4gIGNvbG9yOiAjMUExQTM4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnJlc2VydmF0aW9uX19ob3VyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnJlc2VydmF0aW9uX19pbWctYnJhbmQge1xuICB3aWR0aDogMTIwcHg7XG59XG4ucmVzZXJ2YXRpb25fX2J1dHRvbnMtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJlc2VydmF0aW9uX19idXR0b24tc2VuZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.page.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.page.ts ***!
  \**************************************************************************************************/
/*! exports provided: ValidateReservationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateReservationPage", function() { return ValidateReservationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../components/menu/menu.component */ "./src/app/modules/home/components/menu/menu.component.ts");




let ValidateReservationPage = class ValidateReservationPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() {
    }
    showMenuPop(eventPop) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popoverMenu = yield this.popoverCtrl.create({
                component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
                event: eventPop,
                mode: 'ios'
            });
            yield popoverMenu.present();
        });
    }
};
ValidateReservationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
ValidateReservationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-validate-reservation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./validate-reservation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./validate-reservation.page.scss */ "./src/app/modules/home/pages/reservation/validate-reservation/validate-reservation.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], ValidateReservationPage);



/***/ })

}]);
//# sourceMappingURL=pages-reservation-validate-reservation-validate-reservation-module-es2015.js.map