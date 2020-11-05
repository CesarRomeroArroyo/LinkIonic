(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/public/login/login.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/public/login/login.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img class=\"login__img-cover\" src=\"/assets/img/13306.jpg\">\n\n<ion-content class=\"ion-padding ion-text-center\">  \n  <div class=\"login__img-floating-container\">\n    <img class=\"login__img-floating\" src=\"/assets/img/Puntos_Flotantes_arriba.png\">\n  </div>\n  <article class=\"login__welcome\">\n    <h2 class=\"login__title\">Bienvenido</h2>\n    <p class=\"login__text\">Disfruta tu tiempo y déjanos a nosotros las tareas rutinarias</p>\n  </article>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\">\n  <div class=\"login__form-container\">    \n    <ion-input formControlName=\"email\" class=\"login__form-email\" placeholder=\"Email\"></ion-input>\n    <ion-input type=\"password\" formControlName=\"password\" class=\"login__form-password\" placeholder=\"Contraseña\"></ion-input>\n  </div>\n  <div class=\"login__buttons-container\">\n    <ion-buttons class=\"login__buttons-group\">\n      <ion-button class=\"login__button-login\" [disabled]=\"loginForm.invalid\" type=\"submit\">Iniciar sesión</ion-button>    \n      <ion-button class=\"login__button-register\" [routerLink]=\"['/register']\">Registrarse</ion-button>\n    </ion-buttons>\n  </div>\n  </form>\n  <a class=\"login__recovery\" href=\"#\">Recuperar contraseña</a>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    Authentication(userData) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url_api}/auth`, userData, { observe: 'response' });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/modules/public/login/login-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/public/login/login-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/modules/public/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/modules/public/login/login.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/public/login/login.module.ts ***!
  \******************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/modules/public/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/modules/public/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/modules/public/login/login.page.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/public/login/login.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  font-family: var(--ion-base-font);\n}\n\n.login__img-floating-container {\n  position: relative;\n}\n\n.login__img-floating {\n  position: absolute;\n  top: 0;\n  top: -15px;\n  left: -15px;\n}\n\n.login__welcome {\n  margin-top: 40px;\n  position: relative;\n  z-index: 2;\n}\n\n.login__title {\n  color: var(--ion-color-primary);\n  font-size: var(--ion-32px);\n}\n\n.login__text {\n  color: var(--ion-base-font-color);\n  font-weight: 400;\n  margin-top: 30px;\n}\n\n.login__form-container {\n  margin: var(--ion-32px) 24px;\n}\n\n.login__form-email {\n  border-bottom: 1px solid var(--ion-base-font-color);\n  color: var(--ion-base-font-color);\n}\n\n.login__form-password {\n  border-bottom: 1px solid var(--ion-base-font-color);\n  color: var(--ion-base-font-color);\n}\n\n.login__buttons-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.login__button-login {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-light);\n  border-radius: 10px;\n  width: 250px;\n  height: 35px;\n  margin-bottom: 12px;\n}\n\n.login__button-register {\n  background: var(--ion-link-dark-color);\n  color: var(--ion-color-light);\n  border-radius: 10px;\n  width: 250px;\n  height: 35px;\n  margin-bottom: 20px;\n}\n\n.login__recovery {\n  color: var(--ion-link-dark-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhcnJvbWVyb2Fycm95by9SZXBvc2l0b3JpZXMvUGVyc29uYWxlcy9MaW5rSW9uaWMvc3JjL2FwcC9tb2R1bGVzL3B1YmxpYy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcHVibGljL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FDQ0o7O0FES0k7RUFDSSxrQkFBQTtBQ0ZSOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNGUjs7QURJSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDRlI7O0FESUk7RUFDSSwrQkFBQTtFQUNBLDBCQUFBO0FDRlI7O0FESUk7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURJSTtFQUNJLDRCQUFBO0FDRlI7O0FESUk7RUFDSSxtREFBQTtFQUNBLGlDQUFBO0FDRlI7O0FESUk7RUFDSSxtREFBQTtFQUNBLGlDQUFBO0FDRlI7O0FESUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNGUjs7QURJSTtFQUNJLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURJSTtFQUNJLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURJSTtFQUNJLGlDQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3B1YmxpYy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1iYXNlLWZvbnQpO1xufVxuLmxvZ2luIHtcbiAgICAmX19pbWctY292ZXIge1xuICAgICAgICBcbiAgICB9XG4gICAgJl9faW1nLWZsb2F0aW5nLWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgICAgIFxuICAgIH1cbiAgICAmX19pbWctZmxvYXRpbmcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgbGVmdDogLTE1cHg7XG4gICAgfVxuICAgICZfX3dlbGNvbWUge1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1pb24tMzJweCk7XG4gICAgfVxuICAgICZfX3RleHQge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuICAgICZfX2Zvcm0tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1pb24tMzJweCkgMjRweDtcbiAgICB9XG4gICAgJl9fZm9ybS1lbWFpbCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xuICAgIH1cbiAgICAmX19mb3JtLXBhc3N3b3JkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gICAgfVxuICAgICZfX2J1dHRvbnMtZ3JvdXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAmX19idXR0b24tbG9naW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG4gICAgJl9fYnV0dG9uLXJlZ2lzdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWxpbmstZGFyay1jb2xvcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgJl9fcmVjb3Zlcnkge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWxpbmstZGFyay1jb2xvcik7XG4gICAgfVxufSIsImlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1iYXNlLWZvbnQpO1xufVxuXG4ubG9naW5fX2ltZy1mbG9hdGluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9naW5fX2ltZy1mbG9hdGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAtMTVweDtcbn1cbi5sb2dpbl9fd2VsY29tZSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi5sb2dpbl9fdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IHZhcigtLWlvbi0zMnB4KTtcbn1cbi5sb2dpbl9fdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5sb2dpbl9fZm9ybS1jb250YWluZXIge1xuICBtYXJnaW46IHZhcigtLWlvbi0zMnB4KSAyNHB4O1xufVxuLmxvZ2luX19mb3JtLWVtYWlsIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1iYXNlLWZvbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG59XG4ubG9naW5fX2Zvcm0tcGFzc3dvcmQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWJhc2UtZm9udC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1pb24tYmFzZS1mb250LWNvbG9yKTtcbn1cbi5sb2dpbl9fYnV0dG9ucy1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubG9naW5fX2J1dHRvbi1sb2dpbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmxvZ2luX19idXR0b24tcmVnaXN0ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tbGluay1kYXJrLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxvZ2luX19yZWNvdmVyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tbGluay1kYXJrLWNvbG9yKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/public/login/login.page.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/public/login/login.page.ts ***!
  \****************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../home/components/menu/menu.component */ "./src/app/modules/home/components/menu/menu.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");







let LoginPage = class LoginPage {
    constructor(popoverCtrl, auth, formBuilder, navCtrl, storage) {
        this.popoverCtrl = popoverCtrl;
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.buildForm();
    }
    ngOnInit() { }
    buildForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    }
    loginUser(credentials) {
        this.auth.Authentication(credentials).subscribe((response) => {
            this.storage.set('IS_LOGGED_IN', true);
            localStorage.setItem('TOKEN', JSON.stringify(response.body));
            this.navCtrl.navigateForward('/home/dashboard');
        }, (error) => {
            console.log(error);
        });
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
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/public/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/modules/public/login/login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map