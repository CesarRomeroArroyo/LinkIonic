(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/public/register/register.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/public/register/register.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"showMenuPop($event)\">  \n        <ion-icon class=\"reservation__menu-icon\"  name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"reservation\">\n  <img class=\"reservation__img-top\" src=\"/assets/img/Puntos_Flotantes_arriba.png\">  \n  <img class=\"reservation__img-triangle\" src=\"/assets/img/Triangulo_Superior_Azul.png\">\n  <article class=\"reservation__container ion-text-center\">\n    <h2 class=\"reservation__user-title\">Registrate</h2>    \n  </article>\n  <div class=\"reservation__form-container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser(registerForm.value)\">\n      <ion-input formControlName=\"name\" class=\"reservation__form__input\" placeholder=\"Nombre\"></ion-input>\n      <ion-input formControlName=\"lastname\" class=\"reservation__form__input\" placeholder=\"Apellido\"></ion-input>\n      <ion-input formControlName=\"email\" class=\"reservation__form__input\" placeholder=\"Email\"></ion-input>\n      <ion-select class=\"reservation__form__input-select\" placeholder=\"Género\">\n        <ion-select-option value=\"f\">Masculino</ion-select-option>\n        <ion-select-option value=\"m\">Femenino</ion-select-option>\n      </ion-select>\n      <ion-input formControlName=\"mobilephone\" class=\"reservation__form__input\" placeholder=\"Número de celular\"></ion-input>\n      <ion-input type=\"password\" formControlName=\"password\" class=\"reservation__form__input\" placeholder=\"Contraseña\"></ion-input>\n      <ion-input type=\"password\" class=\"reservation__form__input\" placeholder=\"Repite contraseña\"></ion-input>\n      <div class=\"reservation__conditions\">\n        <p class=\"reservation__conditions__label\">Al crear una nueva cuenta en link aceptas el manejo de tus <u> DATOS PERSONALES\n           TERMINOS y CONDICIONES</u> publicados en nuestra pagina\n        </p>\n        <ion-toggle class=\"reservation__conditions__toggle\" ></ion-toggle>\n      </div>\n      <ion-buttons class=\"reservation__buttons-group\">\n        <ion-button [disabled]=\"registerForm.invalid\" type=\"submit\" expand=\"block\" class=\"reservation__button-send\">\n          Continuar</ion-button>\n      </ion-buttons>\n    </form>\n  </div>\n  <figure class=\"reservation__back-container ion-text-center\">\n    <img class=\"reservation__icon-back\" [routerLink]=\"['/login']\" src=\"/assets/icon/Raster.png\" alt=\"\">\n  </figure>\n</ion-content>\n<img class=\"reservation__img-bottom\" src=\"/assets/img/Puntos_Flotantes_abajo.png\">");

/***/ }),

/***/ "./src/app/core/services/accounts.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/accounts.service.ts ***!
  \***************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let AccountsService = class AccountsService {
    constructor(http) {
        this.http = http;
    }
    saveAccount(accountData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_api}/accounts`, accountData);
    }
};
AccountsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AccountsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AccountsService);



/***/ }),

/***/ "./src/app/modules/public/register/register-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/public/register/register-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/modules/public/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/modules/public/register/register.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/public/register/register.module.ts ***!
  \************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/modules/public/register/register-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/modules/public/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/modules/public/register/register.page.scss":
/*!************************************************************!*\
  !*** ./src/app/modules/public/register/register.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  min-height: 100%;\n  position: relative;\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nu {\n  color: var(--ion-color-primary);\n}\n\n.reservation {\n  font-family: var(--ion-base-font);\n}\n\n.reservation__container {\n  position: relative;\n  z-index: 2;\n}\n\n.reservation__img-top {\n  position: absolute;\n  top: 0;\n}\n\n.reservation__img-bottom {\n  line-height: 50px;\n  color: white;\n  text-align: center;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n\n.reservation__img-triangle {\n  line-height: 50px;\n  color: white;\n  text-align: center;\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  width: 90px;\n}\n\n.reservation__menu-icon {\n  color: var(--ion-color-light);\n  font-size: 24px;\n}\n\n.reservation__user-title {\n  position: relative;\n  font-size: 28px;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n\n.reservation__form-container {\n  margin: var(--ion-32px) 10%;\n  color: #9CA5AE;\n}\n\n.reservation__form__input {\n  border: 1px solid var(--ion-color-primary);\n  margin: 5px 0;\n}\n\n.reservation__form__input-select {\n  border: 1px solid var(--ion-color-primary);\n  margin: 5px 0;\n  --padding-start: 6px !important;\n  --placeholder-color: #5A6978;\n}\n\n.reservation__conditions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px 0;\n}\n\n.reservation__conditions__label {\n  font-size: 11px;\n}\n\n.reservation__conditions__toggle {\n  width: 120px;\n  height: 25px;\n  color: var(--ion-color-primary);\n}\n\n.reservation__buttons-group {\n  display: flex;\n  flex-direction: column;\n  margin-top: 28px;\n}\n\n.reservation__button-send {\n  width: 100%;\n  height: 50px;\n  border-radius: 7px;\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  margin-bottom: 12px;\n  font-size: 18px;\n  text-transform: capitalize !important;\n}\n\n.reservation__back-container {\n  position: relative;\n  z-index: 2;\n}\n\n.reservation__icon-back {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyb2Fycm95by9SZXBvc2l0b3JpZXMvUGVyc29uYWxlcy9MaW5rSW9uaWMvc3JjL2FwcC9tb2R1bGVzL3B1YmxpYy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBRUEsa0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSwrQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUNBQUE7QUNBRjs7QURFRTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0FOOztBREVFO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0FDQU47O0FERUU7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDQU47O0FERUU7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQU47O0FERUU7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUNBTjs7QURFRTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUNBTjs7QURFRTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdJO0VBQ0UsMENBQUE7RUFDQSxhQUFBO0FDRE47O0FER0k7RUFDRSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FDRE47O0FESUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNGSjs7QURHSTtFQUNFLGVBQUE7QUNETjs7QURHSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNETjs7QURRRTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDTk47O0FEUUU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FDTk47O0FEUUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNOSjs7QURRRTtFQUNJLFdBQUE7QUNOTiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGljL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAgICBcbn1cblxudSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5yZXNlcnZhdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tYmFzZS1mb250KTsgICAgXG4gIFxuICAmX19jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMjtcbiAgfVxuICAmX19pbWctdG9wIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgfVxuICAmX19pbWctYm90dG9tIHtcbiAgICAgIGxpbmUtaGVpZ2h0OjUwcHg7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICBib3R0b206MDtcbiAgICAgIGxlZnQ6MDtcbiAgICAgIHdpZHRoOjEwMCU7XG4gIH1cbiAgJl9faW1nLXRyaWFuZ2xlIHtcbiAgICAgIGxpbmUtaGVpZ2h0OjUwcHg7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6MDtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICB9XG4gICZfX21lbnUtaWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICAmX191c2VyLXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gICZfX2Zvcm0tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IHZhcigtLWlvbi0zMnB4KSAxMCU7XG4gICAgY29sb3I6ICM5Q0E1QUU7XG4gIH1cbiAgJl9fZm9ybSB7XG4gICAgJl9faW5wdXQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICB9XG4gICAgJl9faW5wdXQtc2VsZWN0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDZweCAhaW1wb3J0YW50O1xuICAgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVBNjk3ODtcbiAgICB9XG4gIH1cbiAgJl9fY29uZGl0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICAmX19sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxuICAgICZfX3RvZ2dsZSB7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuICBcbiAgJl9fYnV0dG9ucy1jb250YWluZXIge1xuICAgIFxuICB9XG4gICZfX2J1dHRvbnMtZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICB9XG4gICZfX2J1dHRvbi1zZW5kIHsgICAgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpOyAgICAgIFxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbiAgJl9fYmFjay1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gICZfX2ljb24tYmFjayB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgfVxuICBcbn1cblxuIiwiOmhvc3Qge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxudSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5yZXNlcnZhdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tYmFzZS1mb250KTtcbn1cbi5yZXNlcnZhdGlvbl9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLnJlc2VydmF0aW9uX19pbWctdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG59XG4ucmVzZXJ2YXRpb25fX2ltZy1ib3R0b20ge1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZXNlcnZhdGlvbl9faW1nLXRyaWFuZ2xlIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDM7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA5MHB4O1xufVxuLnJlc2VydmF0aW9uX19tZW51LWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLnJlc2VydmF0aW9uX191c2VyLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucmVzZXJ2YXRpb25fX2Zvcm0tY29udGFpbmVyIHtcbiAgbWFyZ2luOiB2YXIoLS1pb24tMzJweCkgMTAlO1xuICBjb2xvcjogIzlDQTVBRTtcbn1cbi5yZXNlcnZhdGlvbl9fZm9ybV9faW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4ucmVzZXJ2YXRpb25fX2Zvcm1fX2lucHV0LXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiA1cHggMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA2cHggIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzVBNjk3ODtcbn1cbi5yZXNlcnZhdGlvbl9fY29uZGl0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4ucmVzZXJ2YXRpb25fX2NvbmRpdGlvbnNfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnJlc2VydmF0aW9uX19jb25kaXRpb25zX190b2dnbGUge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5yZXNlcnZhdGlvbl9fYnV0dG9ucy1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG4ucmVzZXJ2YXRpb25fX2J1dHRvbi1zZW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG4ucmVzZXJ2YXRpb25fX2JhY2stY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLnJlc2VydmF0aW9uX19pY29uLWJhY2sge1xuICB3aWR0aDogNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/public/register/register.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/public/register/register.page.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../home/components/menu/menu.component */ "./src/app/modules/home/components/menu/menu.component.ts");
/* harmony import */ var _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/accounts.service */ "./src/app/core/services/accounts.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let RegisterPage = class RegisterPage {
    constructor(popoverCtrl, formBuilder, account, navCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.formBuilder = formBuilder;
        this.account = account;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.buildForm();
    }
    showMenuPop(eventPop) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popoverMenu = yield this.popoverCtrl.create({
                component: _home_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
                event: eventPop,
                mode: 'ios'
            });
            yield popoverMenu.present();
        });
    }
    registerUser(credentials) {
        this.account.saveAccount(credentials).subscribe((response) => {
            console.log(response);
            this.navCtrl.navigateForward('/login');
        });
    }
    buildForm() {
        this.registerForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            mobilephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/public/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/modules/public/register/register.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _core_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map