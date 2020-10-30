(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reservation-confirm-reservation-confirm-reservation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.page.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.page.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showMenuPop($event)\">  \n        <ion-icon class=\"reservation__menu-icon\"  name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"reservation\">\n  <img class=\"reservation__img-top\" src=\"/assets/img/Puntos_Flotantes_arriba.png\">  \n  <img class=\"reservation__img-triangle\" src=\"/assets/img/Triangulo_Superior_Azul.png\">\n  <article class=\"reservation__container ion-text-center\">\n    <h2 class=\"reservation__user-title\">{{userName}}</h2>\n    <p class=\"reservation__middle-text\">Tu reserva en</p>\n    <figure >\n      <img class=\"reservation__image-service ion-text-center\" [src]=\"dataReservation.serviceLogo\" alt=\"Reservation Image\">\n    </figure>\n    <h3 class=\"reservation__middle-title\">{{dataReservation.merchantName}}</h3>\n    <p class=\"reservation____middle-text\">Para el servicio de</p>\n    <h3>{{dataReservation.serviceName}}</h3>\n    <p>Ha sido confirmado para en el horario</p>\n    <h3 class=\"reservation__middle-title\">{{dataReservation.date}}</h3>\n    <p class=\"reservation__hour\">{{dataReservation.hour}}</p>\n    <figure>\n      <img class=\"reservation__img-brand\" src=\"/assets/img/LogoBlanco.png\" alt=\"Logo Link\">\n    </figure>\n    <div class=\"reservation__buttons-container\">\n      <ion-buttons class=\"reservation__buttons-group\">\n        <ion-button class=\"reservation__button-send\" (click)=\"reserve()\">Continuar</ion-button>\n      </ion-buttons>\n    </div>\n  </article>  \n</ion-content>\n<img class=\"reservation__img-bottom\" src=\"/assets/img/Puntos_Flotantes_abajo.png\">");

/***/ }),

/***/ "./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation-routing.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ConfirmReservationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmReservationPageRoutingModule", function() { return ConfirmReservationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confirm_reservation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-reservation.page */ "./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.page.ts");




const routes = [
    {
        path: '',
        component: _confirm_reservation_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmReservationPage"]
    }
];
let ConfirmReservationPageRoutingModule = class ConfirmReservationPageRoutingModule {
};
ConfirmReservationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmReservationPageRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: ConfirmReservationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmReservationPageModule", function() { return ConfirmReservationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _confirm_reservation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-reservation-routing.module */ "./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation-routing.module.ts");
/* harmony import */ var _confirm_reservation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-reservation.page */ "./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.page.ts");







let ConfirmReservationPageModule = class ConfirmReservationPageModule {
};
ConfirmReservationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirm_reservation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmReservationPageRoutingModule"]
        ],
        declarations: [_confirm_reservation_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmReservationPage"]]
    })
], ConfirmReservationPageModule);



/***/ }),

/***/ "./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.page.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.page.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-height: 100%;\n  position: relative;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\n.reservation {\n  font-family: var(--ion-base-font);\n}\n\n.reservation__container {\n  position: relative;\n  z-index: 2;\n}\n\n.reservation__img-top {\n  position: absolute;\n  top: 0;\n}\n\n.reservation__img-bottom {\n  line-height: 50px;\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.reservation__img-triangle {\n  line-height: 50px;\n  color: white;\n  text-align: center;\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  width: 90px;\n}\n\n.reservation__menu-icon {\n  color: var(--ion-color-light);\n  font-size: 24px;\n}\n\n.reservation__image-service {\n  width: 170px;\n}\n\n.reservation__user-title {\n  position: relative;\n  font-size: 24px;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n\n.reservation__middle-text {\n  position: relative;\n  color: #1A1A38;\n}\n\n.reservation__middle-title {\n  color: #1A1A38;\n  font-weight: 500;\n}\n\n.reservation__hour {\n  font-weight: 400;\n  font-size: 18px;\n}\n\n.reservation__img-brand {\n  width: 120px;\n}\n\n.reservation__buttons-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.reservation__button-send {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  border-radius: 8px;\n  width: 300px;\n  height: 40px;\n  margin-bottom: 12px;\n  font-size: 18px;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyb2Fycm95by9SZXBvc2l0b3JpZXMvUGVyc29uYWxlcy9MaW5rSW9uaWMvc3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvcmVzZXJ2YXRpb24vY29uZmlybS1yZXNlcnZhdGlvbi9jb25maXJtLXJlc2VydmF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3Jlc2VydmF0aW9uL2NvbmZpcm0tcmVzZXJ2YXRpb24vY29uZmlybS1yZXNlcnZhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUVBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksaUNBQUE7QUNBSjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0RSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0FDRFI7O0FER0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDRFI7O0FER0k7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDRFI7O0FER0k7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUNEUjs7QURHSTtFQUNJLFlBQUE7QUNEUjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNEUjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0RSOztBREdJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDRFI7O0FER0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNEUjs7QURHSTtFQUNJLFlBQUE7QUNEUjs7QURNSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0pSOztBRE1JO0VBQ0ksb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ0pSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3Jlc2VydmF0aW9uL2NvbmZpcm0tcmVzZXJ2YXRpb24vY29uZmlybS1yZXNlcnZhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgICBcbn1cblxuLnJlc2VydmF0aW9uIHtcbiAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7ICAgIFxuICAgIFxuICAgIFxuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG4gICAgJl9faW1nLXRvcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAmX19pbWctYm90dG9tIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6NTBweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAgJl9faW1nLXRyaWFuZ2xlIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6NTBweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDowO1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICB9XG4gICAgJl9fbWVudS1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgJl9faW1hZ2Utc2VydmljZSB7XG4gICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICB9XG4gICAgJl9fdXNlci10aXRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAmX19taWRkbGUtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6ICMxQTFBMzg7XG4gICAgfVxuICAgICZfX21pZGRsZS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiAjMUExQTM4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAmX19ob3VyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAmX19pbWctYnJhbmQge1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgfVxuICAgICZfX2J1dHRvbnMtY29udGFpbmVyIHtcblxuICAgIH1cbiAgICAmX19idXR0b25zLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgJl9fYnV0dG9uLXNlbmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxufVxuXG4iLCI6aG9zdCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucmVzZXJ2YXRpb24ge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWJhc2UtZm9udCk7XG59XG4ucmVzZXJ2YXRpb25fX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi5yZXNlcnZhdGlvbl9faW1nLXRvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuLnJlc2VydmF0aW9uX19pbWctYm90dG9tIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucmVzZXJ2YXRpb25fX2ltZy10cmlhbmdsZSB7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAzO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogOTBweDtcbn1cbi5yZXNlcnZhdGlvbl9fbWVudS1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5yZXNlcnZhdGlvbl9faW1hZ2Utc2VydmljZSB7XG4gIHdpZHRoOiAxNzBweDtcbn1cbi5yZXNlcnZhdGlvbl9fdXNlci10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlc2VydmF0aW9uX19taWRkbGUtdGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMxQTFBMzg7XG59XG4ucmVzZXJ2YXRpb25fX21pZGRsZS10aXRsZSB7XG4gIGNvbG9yOiAjMUExQTM4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnJlc2VydmF0aW9uX19ob3VyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnJlc2VydmF0aW9uX19pbWctYnJhbmQge1xuICB3aWR0aDogMTIwcHg7XG59XG4ucmVzZXJ2YXRpb25fX2J1dHRvbnMtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJlc2VydmF0aW9uX19idXR0b24tc2VuZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.page.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.page.ts ***!
  \************************************************************************************************/
/*! exports provided: ConfirmReservationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmReservationPage", function() { return ConfirmReservationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/menu/menu.component */ "./src/app/modules/home/components/menu/menu.component.ts");
/* harmony import */ var src_app_core_services_context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/context.service */ "./src/app/core/services/context.service.ts");
/* harmony import */ var src_app_core_services_reservations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/reservations.service */ "./src/app/core/services/reservations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let ConfirmReservationPage = class ConfirmReservationPage {
    constructor(popoverCtrl, context, reservation, router) {
        this.popoverCtrl = popoverCtrl;
        this.context = context;
        this.reservation = reservation;
        this.router = router;
    }
    ngOnInit() {
        this.dataReservation = this.context.dateInfo;
        this.reservationDetails = {
            available_service_id: this.dataReservation.id.toString(),
            date: this.dataReservation.date,
            time: this.dataReservation.reserveHour
        };
        if (!this.dataReservation) {
            this.router.navigateByUrl('/home/new-reservation');
        }
        this.userName = JSON.parse(localStorage.getItem('TOKEN')).info;
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
    reserve() {
        this.reservation.saveReservation(this.reservationDetails).subscribe(response => {
        });
        this.router.navigateByUrl('/home/reservations');
    }
};
ConfirmReservationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_core_services_context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"] },
    { type: src_app_core_services_reservations_service__WEBPACK_IMPORTED_MODULE_5__["ReservationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ConfirmReservationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-reservation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirm-reservation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirm-reservation.page.scss */ "./src/app/modules/home/pages/reservation/confirm-reservation/confirm-reservation.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_core_services_context_service__WEBPACK_IMPORTED_MODULE_4__["ContextService"],
        src_app_core_services_reservations_service__WEBPACK_IMPORTED_MODULE_5__["ReservationsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ConfirmReservationPage);



/***/ })

}]);
//# sourceMappingURL=pages-reservation-confirm-reservation-confirm-reservation-module-es2015.js.map