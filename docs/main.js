(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contacts_contact_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts/contact/contacts.component */ "./src/app/contacts/contact/contacts.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _film_film_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./film/film.module */ "./src/app/film/film.module.ts");
/* harmony import */ var _requestForFilms_request_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requestForFilms/request.module */ "./src/app/requestForFilms/request.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var route = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'auth', loadChildren: function () { return _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"]; } },
    { path: 'films', loadChildren: function () { return _film_film_module__WEBPACK_IMPORTED_MODULE_5__["FilmModule"]; } },
    { path: 'request', loadChildren: function () { return _requestForFilms_request_module__WEBPACK_IMPORTED_MODULE_6__["RequestModule"]; } },
    { path: 'contact', component: _contacts_contact_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _film_film_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./film/film.module */ "./src/app/film/film.module.ts");
/* harmony import */ var _requestForFilms_request_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./requestForFilms/request.module */ "./src/app/requestForFilms/request.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _contacts_contact_contacts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contacts/contact/contacts.component */ "./src/app/contacts/contact/contacts.component.ts");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptors/token.interceptor */ "./src/app/interceptors/token.interceptor.ts");
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interceptors/error.interceptor */ "./src/app/interceptors/error.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _contacts_contact_contacts_component__WEBPACK_IMPORTED_MODULE_13__["ContactsComponent"]
            ],
            imports: [
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _film_film_module__WEBPACK_IMPORTED_MODULE_7__["FilmModule"],
                _requestForFilms_request_module__WEBPACK_IMPORTED_MODULE_8__["RequestModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var authRoutes = [
    { path: 'login', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'register', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(authRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/app/auth/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _index__WEBPACK_IMPORTED_MODULE_1__["authComponents"].slice(),
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"]
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var appKey = "kid_B1GOKdwHX";
var registerUrl = "https://baas.kinvey.com/user/" + appKey;
var loginUrl = "https://baas.kinvey.com/user/" + appKey + "/login";
var logoutUrl = "https://baas.kinvey.com/user/" + appKey + "/_logout";
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (model) {
        return this.http.post(loginUrl, JSON.stringify(model));
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(registerUrl, JSON.stringify(model));
    };
    AuthService.prototype.logout = function () {
        return this.http.post(logoutUrl, {});
    };
    AuthService.prototype.getUsername = function () {
        return localStorage.getItem('username');
    };
    AuthService.prototype.checkIfLoggedIn = function () {
        return localStorage.getItem('authtoken') !== null;
    };
    AuthService.prototype.checkIfAdmin = function () {
        return localStorage.getItem('roles') !== null;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/guards/admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/auth/guards/admin.guard.ts ***!
  \********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AdminGuard.prototype.check = function () {
        if (this.authService.checkIfAdmin()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/auth/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.check();
    };
    AuthGuard.prototype.check = function () {
        if (this.authService.checkIfLoggedIn()) {
            return true;
        }
        this.router.navigate(['/auth/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/index.ts":
/*!*******************************!*\
  !*** ./src/app/auth/index.ts ***!
  \*******************************/
/*! exports provided: authComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authComponents", function() { return authComponents; });
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");


var authComponents = [
    _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"],
    _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"]
];


/***/ }),

/***/ "./src/app/auth/models/login.model.ts":
/*!********************************************!*\
  !*** ./src/app/auth/models/login.model.ts ***!
  \********************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/auth/models/register.model.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/models/register.model.ts ***!
  \***********************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
var RegisterModel = /** @class */ (function () {
    function RegisterModel(username, password, firstName, lastName, email) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return RegisterModel;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\r\n    margin-top:50px;\r\n    margin-left: 30%;\r\n}\r\n\r\n.panel-body {\r\n    padding-top:30px;\r\n}\r\n\r\n#btn {\r\n    margin-top:10px;\r\n}"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"row\">\r\n  <h1>Login</h1>\r\n  <div class=\"panel-body\">\r\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n      <div class=\"form-group\">\r\n        <label for=\"firstname\" class=\"col-md-3 control-label\">Username</label>\r\n        <div class=\"col-md-9\">\r\n          <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\"\r\n          [(ngModel)]=\"model.username\" #username=\"ngModel\" required>\r\n          <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">\r\n            Username is required.\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"firstname\" class=\"col-md-3 control-label\">Password</label>\r\n        <div class=\"col-md-9\">\r\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\r\n          [(ngModel)]=\"model.password\" #password=\"ngModel\" required>\r\n          <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">\r\n            Password is required.\r\n        </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"btn\" class=\"col-sm-12 controls\">\r\n        <button type=\"submit\" [disabled]=\"loginForm.form.invalid\"  class=\"btn btn-success\">Login</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/login.model */ "./src/app/auth/models/login.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = new _models_login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]('', '');
    }
    SigninComponent.prototype.login = function () {
        this.authService.login(this.model).subscribe();
    };
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\r\n    margin-top:50px;\r\n    margin-left: 30%;\r\n}\r\n\r\n.panel-body {\r\n    padding-top:30px;\r\n}\r\n\r\n#btn {\r\n    margin-top:10px;\r\n}"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"row\">\r\n  <h1>Register</h1>\r\n  <div class=\"panel-body\">\r\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"register()\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n      <div class=\"form-group\">\r\n        <label for=\"username\" class=\"col-md-3 control-label\">Username</label>\r\n        <div class=\"col-md-9\">\r\n          <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"model.username\" #username=\"ngModel\"\r\n            pattern=\"^[A-Za-z\\d]{4,16}$\" required>\r\n          <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">\r\n              Username must contain only letters and digits and must be between 4 and 16 symbols.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\" class=\"col-md-3 control-label\">Password</label>\r\n        <div class=\"col-md-9\">\r\n          <input type=\"password\" class=\"form-control\" name=\"passwd\" placeholder=\"Password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n            pattern=\"^[A-Za-z\\d]{4,16}$\" required>\r\n          <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\r\n            Password must contain only letters and digits and must be between 4 and 16 symbols.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"confirmPassword\" class=\"col-md-3 control-label\">Confirm Password</label>\r\n        <div class=\"col-md-9\">\r\n          <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" placeholder=\"Password\" [(ngModel)]=\"model.confirmPassword\"\r\n            #confirmPassword=\"ngModel\" required>\r\n          <div [hidden]=\"password.value === confirmPassword.value || confirmPassword.pristine\" class=\"alert alert-danger\">\r\n              Password no match.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"email\" class=\"col-md-3 control-label\">Email Address</label>\r\n        <div class=\"col-md-9\">\r\n          <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\r\n            email required>\r\n          <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n              Email address is invalid.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"firstName\" class=\"col-md-6 control-label\">First Name</label>\r\n        <div class=\"col-md-9\">\r\n          <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\"\r\n            pattern=\"^[A-Z][A-Za-z]+$\" required>\r\n          <div [hidden]=\"firstName.valid|| firstName.pristine\" class=\"alert alert-danger\">\r\n            First name must contain only letters and start with a capital letter.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"lastName\" class=\"col-md-6 control-label\">Last Name</label>\r\n        <div class=\"col-md-9\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" pattern=\"^[A-Z][A-Za-z]+$\" name=\"lastName\" [(ngModel)]=\"model.lastName\"\r\n            #lastName=\"ngModel\" required>\r\n          <div [hidden]=\"lastName.valid || lastName.pristine\" class=\"alert alert-danger\">\r\n            Last name must contain only letters and start with a capital letter.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"btn\" class=\"col-md-offset-3 col-md-9\">\r\n        <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"registerForm.form.invalid\" >Register</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <br> <br>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_register_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/register.model */ "./src/app/auth/models/register.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = new _models_register_model__WEBPACK_IMPORTED_MODULE_1__["RegisterModel"]('', '', '', '', '');
    }
    SignupComponent.prototype.register = function () {
        delete this.model['confirmPassword'];
        this.authService.register(this.model).subscribe();
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var contactUrl = "https://api.emailjs.com/api/v1.0/email/send";
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.post = function (model) {
        var form = {
            service_id: "gmail",
            template_id: "template_ivtT1ISk",
            user_id: "user_GuwBPJ7ATUPSP7gSS97JS",
            template_params: {
                email: model.email,
                message: model.message
            },
        };
        return this.http.post(contactUrl, form);
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/contacts/contact/contacts.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contacts/contact/contacts.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\r\n    margin-top:50px;\r\n    margin-left: 30%;\r\n    color: black;\r\n}\r\n\r\n#btn {\r\n    margin-top:10px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\ninput, textarea {\r\n    display: block;\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid rgb(121, 36, 47);\r\n    border-right:  1px solid rgb(121, 36, 47);\r\n    border-left:  1px solid rgb(121, 36, 47);\r\n    border-top:  1px solid rgb(121, 36, 47);\r\n    text-align: center;\r\n    transition: 0.1s all ease-in-out;\r\n    color: black;\r\n}\r\n\r\n#contact {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    -webkit-box-shadow: -11px 0 11px 0 #888888, 11px 2px 11px 0 #888888;\r\n    background: gainsboro;\r\n}\r\n\r\n#cont {\r\n    width: 143%;\r\n    height: 200px;\r\n    margin: 0 auto;\r\n    display: inline-block;\r\n    margin-left: -43%\r\n}\r\n"

/***/ }),

/***/ "./src/app/contacts/contact/contacts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contacts/contact/contacts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\">\r\n    <section id=\"mainsection\">\r\n        <div id=\"row\">\r\n            <img id=\"cont\" src=\"../../assets/contacts.jpg\" alt=\"logo\">\r\n            <h1>Контакт с нас</h1>\r\n            <form #contactForm=\"ngForm\" (ngSubmit)=\"contact()\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n              <div class=\"form-group\">\r\n                <strong for=\"email\" class=\"col-md-10 control-label\">Ваш имейл адрес:</strong>\r\n                <div class=\"col-md-15\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"bindingModel.email\" \r\n                  #email=\"ngModel\" email required>\r\n                  <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                    Email address is invalid.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <strong for=\"message\" class=\"col-md-6 control-label\">Съобщение:</strong>\r\n                <div class=\"col-md-15\">\r\n                  <textarea class=\"form-control\" type=\"text\" id=\"exampleTextarea\" rows=\"8\" name=\"message\" \r\n                  [(ngModel)]=\"bindingModel.message\" #message=\"ngModel\" required>\r\n                  </textarea>\r\n                  <div [hidden]=\"message.valid || message.pristine\" class=\"alert alert-danger\">\r\n                    Message is required.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"btn\" class=\"col-md-offset-3 col-md-9\">\r\n                <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"contactForm.form.invalid\" >изпрати</button>\r\n              </div>\r\n              <br> \r\n            </form>\r\n          </div>\r\n    </section>\r\n</div>"

/***/ }),

/***/ "./src/app/contacts/contact/contacts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contacts/contact/contacts.component.ts ***!
  \********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_contact_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/contact.model */ "./src/app/contacts/model/contact.model.ts");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact.service */ "./src/app/contacts/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(contactService) {
        this.contactService = contactService;
        this.bindingModel = new _model_contact_model__WEBPACK_IMPORTED_MODULE_1__["ContactModel"]('', '');
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.prototype.contact = function () {
        this.contactService.post(this.bindingModel).subscribe();
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contact/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contact/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/model/contact.model.ts":
/*!*************************************************!*\
  !*** ./src/app/contacts/model/contact.model.ts ***!
  \*************************************************/
/*! exports provided: ContactModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModel", function() { return ContactModel; });
var ContactModel = /** @class */ (function () {
    function ContactModel(email, message) {
        this.email = email;
        this.message = message;
    }
    return ContactModel;
}());



/***/ }),

/***/ "./src/app/film/all-film/all-film.component.css":
/*!******************************************************!*\
  !*** ./src/app/film/all-film/all-film.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n    margin-top: 50px;\r\n}\r\n\r\n.title { \r\n    text-align: center;\r\n}\r\n\r\n.pagination {\r\n    padding-left: 30%;\r\n    background-color: #717070;\r\n}"

/***/ }),

/***/ "./src/app/film/all-film/all-film.component.html":
/*!*******************************************************!*\
  !*** ./src/app/film/all-film/all-film.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"films\">\r\n  <h3 class=\"title\">Всички филми</h3>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let f of films | async | paginate : {\r\n      id: 'all-film',\r\n      itemsPerPage: pageSize,\r\n      currentPage: currentPage\r\n    }\" class=\"col-md-3\">\r\n      <div class=\"card border-info mb-3\" style=\"max-width: 20rem;\">\r\n        <div class=\"card-body\">\r\n          <img class=\"card-img-top\" src=\"{{f.imageUrl}}\" alt=\"Card image\">\r\n        </div>\r\n        <div class=\"card-header\" style=\"text-align: center; height: 100px;\">{{f.title}}</div>\r\n        <br>\r\n        <p class=\"component\">\r\n          <a (click)=\"delete(f._id)\" *ngIf=\"authService.checkIfAdmin()\" class=\"btn btn-success\" style=\"margin-left: 60px;\">delete</a>\r\n          <a routerLink=\"/films/edit/{{f._id}}\" *ngIf=\"authService.checkIfAdmin()\" class=\"btn btn-warning\" style=\"margin: 5px;\">edit</a>\r\n        </p>\r\n        <a routerLink=\"/films/details/{{f._id}}\" class=\"btn btn-primary\">View Film</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"pagination\">\r\n    <pagination-controls \r\n      id=\"all-film\" \r\n      (pageChange)=\"pageChanged($event)\" \r\n      maxSize=\"9\"\r\n      directionLinks=\"true\" \r\n      autoHide=\"true\" \r\n      responsive=\"true\"\r\n      previousLabel=\"Previous\" \r\n      nextLabel=\"Next\" \r\n      screenReaderPaginationLabel=\"Pagination\" \r\n      screenReaderPageLabel=\"page\" \r\n      screenReaderCurrentLabel=\"You're on page\">\r\n    </pagination-controls>\r\n  </div>\r\n  <br> <br>\r\n</div>"

/***/ }),

/***/ "./src/app/film/all-film/all-film.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/film/all-film/all-film.component.ts ***!
  \*****************************************************/
/*! exports provided: AllFilmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllFilmComponent", function() { return AllFilmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _film_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../film.service */ "./src/app/film/film.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllFilmComponent = /** @class */ (function () {
    function AllFilmComponent(filmService, authService) {
        this.filmService = filmService;
        this.authService = authService;
        this.pageSize = 8;
        this.currentPage = 1;
    }
    AllFilmComponent.prototype.ngOnInit = function () {
        this.films = this.filmService.getAllFilm();
    };
    AllFilmComponent.prototype.pageChanged = function (page) {
        this.currentPage = page;
    };
    AllFilmComponent.prototype.delete = function (_id) {
        this.filmService.deleteFilm(_id).subscribe();
    };
    AllFilmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-film',
            template: __webpack_require__(/*! ./all-film.component.html */ "./src/app/film/all-film/all-film.component.html"),
            styles: [__webpack_require__(/*! ./all-film.component.css */ "./src/app/film/all-film/all-film.component.css")]
        }),
        __metadata("design:paramtypes", [_film_service__WEBPACK_IMPORTED_MODULE_1__["FilmService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AllFilmComponent);
    return AllFilmComponent;
}());



/***/ }),

/***/ "./src/app/film/create-film/create-film.component.css":
/*!************************************************************!*\
  !*** ./src/app/film/create-film/create-film.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row { \r\n    text-align: center;\r\n    margin-top: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/film/create-film/create-film.component.html":
/*!*************************************************************!*\
  !*** ./src/app/film/create-film/create-film.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row space-top\">\r\n  <div class=\"col-md-12\">\r\n    <h1 class=\"row\">Create New Film</h1>\r\n  </div>\r\n</div>\r\n<form (ngSubmit)=\"create()\" #filmForm=\"ngForm\">\r\n  <div class=\"row space-top\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label\" for=\"new-title\">Title</label>\r\n        <input class=\"form-control\" id=\"new-title\" type=\"text\" required #title=\"ngModel\"\r\n        name=\"title\" [(ngModel)]=\"bindingModel.title\">\r\n        <div [hidden]=\"title.valid|| title.pristine\" class=\"alert alert-danger\">\r\n            Title is required.\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label\" for=\"new-imageUrl\">Image Url</label>\r\n        <input class=\"form-control\" id=\"new-imageUrl\" type=\"text\" required #imageUrl=\"ngModel\" \r\n        name=\"imageUrl\" [(ngModel)]=\"bindingModel.imageUrl\">\r\n        <div [hidden]=\"imageUrl.valid|| imageUrl.pristine\" class=\"alert alert-danger\">\r\n            Image url is requred.\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group has-success\">\r\n        <label class=\"form-control-label\" for=\"new-filmUrl\">Film Url</label>\r\n        <input class=\"form-control is-valid\" id=\"new-filmUrl\" type=\"text\" required #filmUrl=\"ngModel\" \r\n        name=\"filmUrl\" [(ngModel)]=\"bindingModel.filmUrl\">\r\n        <div [hidden]=\"filmUrl.valid|| filmUrl.pristine\" class=\"alert alert-danger\">\r\n            Film url is requred.\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group has-danger\">\r\n        <label class=\"form-control-label\" for=\"new-year\">Year</label>\r\n        <input class=\"form-control is-invalid\" id=\"new-year\" type=\"number\" required #year=\"ngModel\" \r\n        name=\"year\" [(ngModel)]=\"bindingModel.year\" [min]=\"1950\" [max]=\"2050\">\r\n        <div [hidden]=\"year.valid|| year.pristine\" class=\"alert alert-danger\">\r\n          Year must be between 1950 and 2050.\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label\" for=\"new-genre\">Genre</label>\r\n        <select class=\"form-control\" id=\"new-genre\" type=\"text\" required #genre=\"ngModel\" \r\n        name=\"genre\" [(ngModel)]=\"bindingModel.genre\">\r\n          <option></option>\r\n          <option value=\"action\">action</option>\r\n          <option value=\"comedy\">comedy</option>\r\n          <option value=\"animation\">animation</option>\r\n          <option value=\"drama\">drama</option>\r\n        </select>\r\n        <div [hidden]=\"genre.valid|| genre.pristine\" class=\"alert alert-danger\">\r\n          Genre is requred.\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"form-control-label\" for=\"new-description\">Description</label>\r\n        <textarea class=\"form-control\" id=\"new-description\" rows=\"3\" style=\"margin-top: 0px; margin-bottom: 0px; height: 95px;\" type=\"text\"\r\n          required #description=\"ngModel\" name=\"description\" [(ngModel)]=\"bindingModel.description\"></textarea>\r\n        <div [hidden]=\"description.valid|| description.pristine\" class=\"alert alert-danger\">\r\n          Description is requred.\r\n        </div>\r\n      </div>\r\n      <input type=\"submit\"  class=\"btn btn-primary\" [disabled]=\"filmForm.form.invalid\" value=\"Create\" />\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/film/create-film/create-film.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/film/create-film/create-film.component.ts ***!
  \***********************************************************/
/*! exports provided: CreateFilmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilmComponent", function() { return CreateFilmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_create_film_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/create-film.models */ "./src/app/film/models/create-film.models.ts");
/* harmony import */ var _film_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../film.service */ "./src/app/film/film.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateFilmComponent = /** @class */ (function () {
    function CreateFilmComponent(filmService) {
        this.filmService = filmService;
        this.bindingModel = new _models_create_film_models__WEBPACK_IMPORTED_MODULE_1__["CreateFilmModel"]('', '', '', 0, '', '');
    }
    CreateFilmComponent.prototype.ngOnInit = function () {
    };
    CreateFilmComponent.prototype.create = function () {
        this.filmService.createFilm(this.bindingModel).subscribe();
    };
    CreateFilmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-film',
            template: __webpack_require__(/*! ./create-film.component.html */ "./src/app/film/create-film/create-film.component.html"),
            styles: [__webpack_require__(/*! ./create-film.component.css */ "./src/app/film/create-film/create-film.component.css")]
        }),
        __metadata("design:paramtypes", [_film_service__WEBPACK_IMPORTED_MODULE_2__["FilmService"]])
    ], CreateFilmComponent);
    return CreateFilmComponent;
}());



/***/ }),

/***/ "./src/app/film/edit-film/edit-film.component.css":
/*!********************************************************!*\
  !*** ./src/app/film/edit-film/edit-film.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row { \r\n    text-align: center;\r\n    margin-top: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/film/edit-film/edit-film.component.html":
/*!*********************************************************!*\
  !*** ./src/app/film/edit-film/edit-film.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{model | json}}\r\n<div *ngIf=\"bindingModel\">\r\n  <div class=\"row space-top\">\r\n    <div class=\"col-md-12\">\r\n      <h1 class=\"row\">Edit Film</h1>\r\n    </div>\r\n  </div>\r\n  <form (ngSubmit)=\"edit()\" #editForm=\"ngForm\">\r\n    <div class=\"row space-top\">\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\" for=\"new-title\">Title</label>\r\n          <input class=\"form-control\" id=\"new-title\" type=\"text\" required #title=\"ngModel\"\r\n          name=\"title\" [(ngModel)]=\"bindingModel.title\">\r\n          <div [hidden]=\"title.valid|| title.pristine\" class=\"alert alert-danger\">\r\n              Title is required.\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\" for=\"new-imageUrl\">Image Url</label>\r\n          <input class=\"form-control\" id=\"new-imageUrl\" type=\"text\" required #imageUrl=\"ngModel\" \r\n          name=\"imageUrl\" [(ngModel)]=\"bindingModel.imageUrl\">\r\n          <div [hidden]=\"imageUrl.valid|| imageUrl.pristine\" class=\"alert alert-danger\">\r\n              Image url is requred.\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group has-success\">\r\n          <label class=\"form-control-label\" for=\"new-filmUrl\">Film Url</label>\r\n          <input class=\"form-control is-valid\" id=\"new-filmUrl\" type=\"text\" required #filmUrl=\"ngModel\" \r\n          name=\"filmUrl\" [(ngModel)]=\"bindingModel.filmUrl\">\r\n          <div [hidden]=\"filmUrl.valid|| filmUrl.pristine\" class=\"alert alert-danger\">\r\n              Film url is requred.\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group has-danger\">\r\n          <label class=\"form-control-label\" for=\"new-year\">Year</label>\r\n          <input class=\"form-control is-invalid\" id=\"new-year\" type=\"number\" required #year=\"ngModel\" \r\n          name=\"year\" [(ngModel)]=\"bindingModel.year\" [min]=\"1950\" [max]=\"2050\">\r\n          <div [hidden]=\"year.valid|| year.pristine\" class=\"alert alert-danger\">\r\n            Year must be between 1950 and 2050.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\" for=\"new-genre\">Genre</label>\r\n          <select class=\"form-control\" id=\"new-genre\" type=\"text\" required #genre=\"ngModel\" \r\n          name=\"genre\" [(ngModel)]=\"bindingModel.genre\">\r\n            <option></option>\r\n            <option value=\"action\">action</option>\r\n            <option value=\"comedy\">comedy</option>\r\n            <option value=\"animation\">animation</option>\r\n            <option value=\"drama\">drama</option>\r\n          </select>\r\n          <div [hidden]=\"genre.valid|| genre.pristine\" class=\"alert alert-danger\">\r\n            Genre is requred.\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"form-control-label\" for=\"new-description\">Description</label>\r\n          <textarea class=\"form-control\" id=\"new-description\" rows=\"3\" style=\"margin-top: 0px; margin-bottom: 0px; height: 95px;\" type=\"text\"\r\n            required #description=\"ngModel\" name=\"description\" [(ngModel)]=\"bindingModel.description\"></textarea>\r\n          <div [hidden]=\"description.valid|| description.pristine\" class=\"alert alert-danger\">\r\n            Description is requred.\r\n          </div>\r\n        </div>\r\n        <input type=\"submit\"  class=\"btn btn-primary\" [disabled]=\"editForm.form.invalid\" value=\"submit\" />\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/film/edit-film/edit-film.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/film/edit-film/edit-film.component.ts ***!
  \*******************************************************/
/*! exports provided: EditFilmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFilmComponent", function() { return EditFilmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _film_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../film.service */ "./src/app/film/film.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditFilmComponent = /** @class */ (function () {
    function EditFilmComponent(filmService, route) {
        this.filmService = filmService;
        this.route = route;
        this._id = this.route.snapshot.params['_id'];
    }
    EditFilmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmService.getFilmById(this._id).subscribe(function (data) {
            _this.bindingModel = data;
        });
    };
    EditFilmComponent.prototype.edit = function () {
        this.filmService.editFilm(this._id, this.bindingModel).subscribe();
    };
    EditFilmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-film',
            template: __webpack_require__(/*! ./edit-film.component.html */ "./src/app/film/edit-film/edit-film.component.html"),
            styles: [__webpack_require__(/*! ./edit-film.component.css */ "./src/app/film/edit-film/edit-film.component.css")]
        }),
        __metadata("design:paramtypes", [_film_service__WEBPACK_IMPORTED_MODULE_1__["FilmService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditFilmComponent);
    return EditFilmComponent;
}());



/***/ }),

/***/ "./src/app/film/film-details/film-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/film/film-details/film-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    width: 100%;\r\n    padding: 20px;\r\n    overflow: hidden;\r\n   \r\n}\r\n\r\n.content img {\r\n    width: 500px;\r\n    height: 800px;\r\n    margin-right: 15px;\r\n    float: left;\r\n}\r\n\r\n#videocontainer iframe {\r\n    width: 800px;\r\n    height: 500px;\r\n    margin-left: 15%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/film/film-details/film-details.component.html":
/*!***************************************************************!*\
  !*** ./src/app/film/film-details/film-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"film\" *ngIf=\"film | async as f\">\r\n  <div class=\"content\">\r\n    <img src=\"{{f.imageUrl}}\" alt=\"\" />\r\n    <h3>{{f.title}}</h3>\r\n    <h5>Годига: {{f.year}}</h5>\r\n    <br>\r\n    <p>\r\n     {{f.description}}\r\n    </p>\r\n    <br>\r\n    <span>Жанр: {{f.genre}}</span>\r\n  </div>\r\n  <div id=\"videocontainer\">\r\n      <iframe [src]=\"f.filmUrl | safe: 'resourceUrl'\" width=\"100%\" height=\"100%\" border=\"0\" frameborder=\"0\" scrolling=\"no\"\r\n      allowfullscreen=\"\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" oallowfullscreen=\"\" msallowfullscreen=\"\"></iframe>\r\n  </div>\r\n  <br> <br>\r\n</div>"

/***/ }),

/***/ "./src/app/film/film-details/film-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/film/film-details/film-details.component.ts ***!
  \*************************************************************/
/*! exports provided: FilmDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmDetailsComponent", function() { return FilmDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _film_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../film.service */ "./src/app/film/film.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilmDetailsComponent = /** @class */ (function () {
    function FilmDetailsComponent(route, filmService) {
        this.route = route;
        this.filmService = filmService;
        this._id = this.route.snapshot.params['_id'];
    }
    FilmDetailsComponent.prototype.ngOnInit = function () {
        this.film = this.filmService.getFilmById(this._id);
    };
    FilmDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-film-details',
            template: __webpack_require__(/*! ./film-details.component.html */ "./src/app/film/film-details/film-details.component.html"),
            styles: [__webpack_require__(/*! ./film-details.component.css */ "./src/app/film/film-details/film-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _film_service__WEBPACK_IMPORTED_MODULE_2__["FilmService"]])
    ], FilmDetailsComponent);
    return FilmDetailsComponent;
}());



/***/ }),

/***/ "./src/app/film/film-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/film/film-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FilmRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmRoutingModule", function() { return FilmRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/guards/auth.guard */ "./src/app/auth/guards/auth.guard.ts");
/* harmony import */ var _auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/guards/admin.guard */ "./src/app/auth/guards/admin.guard.ts");
/* harmony import */ var _all_film_all_film_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-film/all-film.component */ "./src/app/film/all-film/all-film.component.ts");
/* harmony import */ var _film_details_film_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./film-details/film-details.component */ "./src/app/film/film-details/film-details.component.ts");
/* harmony import */ var _create_film_create_film_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-film/create-film.component */ "./src/app/film/create-film/create-film.component.ts");
/* harmony import */ var _edit_film_edit_film_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-film/edit-film.component */ "./src/app/film/edit-film/edit-film.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var filmRoutes = [
    { path: '', component: _all_film_all_film_component__WEBPACK_IMPORTED_MODULE_4__["AllFilmComponent"], canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'details/:_id', component: _film_details_film_details_component__WEBPACK_IMPORTED_MODULE_5__["FilmDetailsComponent"], canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'create', component: _create_film_create_film_component__WEBPACK_IMPORTED_MODULE_6__["CreateFilmComponent"], canActivate: [_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] },
    { path: 'edit/:_id', component: _edit_film_edit_film_component__WEBPACK_IMPORTED_MODULE_7__["EditFilmComponent"], canActivate: [_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] }
];
var FilmRoutingModule = /** @class */ (function () {
    function FilmRoutingModule() {
    }
    FilmRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(filmRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], FilmRoutingModule);
    return FilmRoutingModule;
}());



/***/ }),

/***/ "./src/app/film/film.module.ts":
/*!*************************************!*\
  !*** ./src/app/film/film.module.ts ***!
  \*************************************/
/*! exports provided: FilmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmModule", function() { return FilmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/app/film/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _film_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./film.service */ "./src/app/film/film.service.ts");
/* harmony import */ var safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! safe-pipe */ "./node_modules/safe-pipe/index.js");
/* harmony import */ var safe_pipe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(safe_pipe__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _film_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./film-routing.module */ "./src/app/film/film-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FilmModule = /** @class */ (function () {
    function FilmModule() {
    }
    FilmModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _index__WEBPACK_IMPORTED_MODULE_1__["filmComponet"].slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _film_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilmRoutingModule"],
                safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipeModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"]
            ],
            providers: [
                _film_service__WEBPACK_IMPORTED_MODULE_3__["FilmService"]
            ]
        })
    ], FilmModule);
    return FilmModule;
}());



/***/ }),

/***/ "./src/app/film/film.service.ts":
/*!**************************************!*\
  !*** ./src/app/film/film.service.ts ***!
  \**************************************/
/*! exports provided: FilmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmService", function() { return FilmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var appKey = "kid_B1GOKdwHX";
var filmsUrl = "https://baas.kinvey.com/appdata/" + appKey + "/films";
var FilmService = /** @class */ (function () {
    function FilmService(http) {
        this.http = http;
    }
    FilmService.prototype.createFilm = function (body) {
        return this.http.post(filmsUrl, body);
    };
    FilmService.prototype.getAllFilm = function () {
        return this.http.get(filmsUrl);
    };
    FilmService.prototype.getFilmById = function (_id) {
        return this.http.get(filmsUrl + ("/" + _id));
    };
    FilmService.prototype.deleteFilm = function (_id) {
        return this.http.delete(filmsUrl + ("/" + _id));
    };
    FilmService.prototype.editFilm = function (_id, body) {
        return this.http.put(filmsUrl + ("/" + _id), body);
    };
    FilmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FilmService);
    return FilmService;
}());



/***/ }),

/***/ "./src/app/film/index.ts":
/*!*******************************!*\
  !*** ./src/app/film/index.ts ***!
  \*******************************/
/*! exports provided: filmComponet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filmComponet", function() { return filmComponet; });
/* harmony import */ var _all_film_all_film_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-film/all-film.component */ "./src/app/film/all-film/all-film.component.ts");
/* harmony import */ var _create_film_create_film_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-film/create-film.component */ "./src/app/film/create-film/create-film.component.ts");
/* harmony import */ var _film_details_film_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./film-details/film-details.component */ "./src/app/film/film-details/film-details.component.ts");
/* harmony import */ var _edit_film_edit_film_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-film/edit-film.component */ "./src/app/film/edit-film/edit-film.component.ts");




var filmComponet = [
    _all_film_all_film_component__WEBPACK_IMPORTED_MODULE_0__["AllFilmComponent"],
    _create_film_create_film_component__WEBPACK_IMPORTED_MODULE_1__["CreateFilmComponent"],
    _film_details_film_details_component__WEBPACK_IMPORTED_MODULE_2__["FilmDetailsComponent"],
    _edit_film_edit_film_component__WEBPACK_IMPORTED_MODULE_3__["EditFilmComponent"]
];


/***/ }),

/***/ "./src/app/film/models/create-film.models.ts":
/*!***************************************************!*\
  !*** ./src/app/film/models/create-film.models.ts ***!
  \***************************************************/
/*! exports provided: CreateFilmModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFilmModel", function() { return CreateFilmModel; });
var CreateFilmModel = /** @class */ (function () {
    function CreateFilmModel(title, imageUrl, filmUrl, year, genre, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.filmUrl = filmUrl;
        this.year = year;
        this.genre = genre;
        this.description = description;
    }
    return CreateFilmModel;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: rgba(255, 255, 255, 0.767);\r\n    color: black;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <span> Ако сте носител на авторско право и желаете премахването на филм от сайта свържете се с нас чрез формата за контакт . </span>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#addFilm {\r\n    background: red;\r\n    border: 4px solid red;\r\n    border-radius: 60px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\">Online Filmi</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\r\n    <ul class=\"navbar-nav \">\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link\" routerLink=\"/\">Начало\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link\" routerLink=\"/films\">Филми </a>\r\n      </li>\r\n      <li class=\"nav-item \" *ngIf=\"authService.checkIfLoggedIn()\" >\r\n        <a class=\"nav-link\" routerLink=\"/request/create\" *ngIf=\"!authService.checkIfAdmin()\">Предложи филм </a>\r\n      </li>\r\n      <li class=\"nav-item \" *ngIf=\"authService.checkIfAdmin()\">\r\n        <a class=\"nav-link\" routerLink=\"/request/list\">Предложени филми </a>\r\n      </li>\r\n      <li class=\"nav-item \">\r\n        <a class=\"nav-link\" routerLink=\"/contact\">Контакт </a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav ml-auto\">\r\n      <li class=\"nav-item \" *ngIf=\"authService.checkIfAdmin()\">\r\n          <a class=\"nav-link\" id=\"addFilm\" routerLink=\"/films/create\" >add film</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!authService.checkIfLoggedIn()\">\r\n        <a class=\"nav-link\" routerLink=\"/auth/login\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"!authService.checkIfLoggedIn()\">\r\n        <a class=\"nav-link\" routerLink=\"/auth/register\">Register</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.checkIfLoggedIn()\">\r\n        <strong class=\"nav-link\">Hello, {{authService.getUsername()}}</strong>\r\n      </li>\r\n      <li class=\"nav-item\"  *ngIf=\"authService.checkIfLoggedIn()\">\r\n        <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) {
            localStorage.clear();
            _this.toastr.success("Logout successful.", "Success!");
            _this.router.navigate(['/auth/login']);
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title { \r\n    text-align: center;\r\n    color: red;\r\n    margin-top: 80px;\r\n}\r\n\r\n.text {\r\n    margin-top: 130px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"row\">\r\n  <h3 class=\"title\">НАЙ-ДОБРИТЕ ФИЛМИ ОНЛАЙН</h3>\r\n  <br>\r\n  <p class=\"text\">\r\n    За да гледате Филми онлайн е нужна регистрация напълно безплатна. \r\n    За всеки филм онлайн можете да прочетете кратко описание, снимки към филма както и негов трейлър. \r\n    Сайта предлага всички удобства за да може гледането на филми онлайн да се превърне в истинско удоволствие.\r\n    Ако търсите къде да гледате своите любими екшъни, комедии, фентъзи, сериали и много други жанрове или \r\n    просто да убиете малко от свободното си време филми онлайн е точното място за вас. \r\n    Богатата колекция от филми онлайн съдържа по нещо за всеки фен на киното и филмите. \r\n    Желаем ви приятно гледане!\r\n  </p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(toastr) {
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            err.error.errors;
            switch (err.status) {
                case 401:
                    var message = err.error.description;
                    _this.toastr.error(message, "Warning!");
                    break;
                case 409:
                    var error = err.error.description;
                    _this.toastr.error(error, "Warning!");
                    break;
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/token.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var appKey = "kid_B1GOKdwHX";
var appSecret = "e677edfbd0344735b9e0f3731f1ae0ec";
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(toastr, router) {
        this.toastr = toastr;
        this.router = router;
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.url.endsWith('login') || req.url.endsWith(appKey)) {
            req = req.clone({
                setHeaders: {
                    'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
                    'Content-Type': 'application/json'
                }
            });
        }
        else {
            req = req.clone({
                setHeaders: {
                    'Authorization': "Kinvey " + localStorage.getItem('authtoken'),
                    'Content-Type': 'application/json'
                }
            });
        }
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && req.url.endsWith('login')) {
                _this.successfulLogin(event['body']);
                _this.toastr.success("Login successful.", "Success!");
            }
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && req.url.endsWith(appKey)) {
                _this.toastr.success("Register successful.", "Success!");
                _this.router.navigate(['/auth/login']);
            }
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && req.url.endsWith('films') && req.method.endsWith('POST')) {
                _this.toastr.success("Create film success.", "Success!");
                _this.router.navigate(['/films']);
            }
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && req.method.endsWith('DELETE')) {
                _this.toastr.success("Delete success.", "Success!");
                _this.router.navigate(['/']);
            }
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && req.method.endsWith('PUT')) {
                _this.toastr.success("Edit film success.", "Success!");
                _this.router.navigate(['/films']);
            }
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"] && req.url.endsWith('request') && req.method.endsWith('POST')) {
                _this.toastr.success("Success.", "Success!");
                _this.router.navigate(['/films']);
            }
            if (req.url === 'https://api.emailjs.com/api/v1.0/email/send') {
                _this.toastr.success("Send email successful.", "Success!");
                _this.router.navigate(['/']);
            }
        }));
    };
    TokenInterceptor.prototype.successfulLogin = function (data) {
        localStorage.setItem('authtoken', data._kmd.authtoken);
        localStorage.setItem('username', data.username);
        if (data._kmd.roles) {
            localStorage.setItem('roles', data._kmd.roles);
        }
        this.router.navigate(['/films']);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/requestForFilms/create-request/create-request.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/requestForFilms/create-request/create-request.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\r\n    margin-top:50px;\r\n    margin-left: 30%;\r\n    color: black;\r\n}\r\n\r\n#btn {\r\n    margin-top:10px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\ninput {\r\n    display: block;\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid rgb(121, 36, 47);\r\n    border-right:  1px solid rgb(121, 36, 47);\r\n    border-left:  1px solid rgb(121, 36, 47);\r\n    border-top:  1px solid rgb(121, 36, 47);\r\n    text-align: center;\r\n    transition: 0.1s all ease-in-out;\r\n    color: black;\r\n}\r\n\r\n#container {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n    -webkit-box-shadow: -11px 0 11px 0 #888888, 11px 2px 11px 0 #888888;\r\n    background: gainsboro;\r\n}\r\n\r\n#cont {\r\n    width: 143%;\r\n    height: 200px;\r\n    margin: 0 auto;\r\n    display: inline-block;\r\n    margin-left: -43%\r\n}\r\n"

/***/ }),

/***/ "./src/app/requestForFilms/create-request/create-request.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/requestForFilms/create-request/create-request.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n  <section id=\"mainsection\">\r\n      <div id=\"row\">\r\n          <strong>Тук можете да предложите филми, които да качим. :)</strong>\r\n          <br> <br>\r\n          <form #requestForm=\"ngForm\" (ngSubmit)=\"createRequest()\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\r\n            <div class=\"form-group\">\r\n              <strong for=\"title\" class=\"col-md-10 control-label\">Заглавие на филма:</strong>\r\n              <div class=\"col-md-15\">\r\n                <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"bindingModel.title\" \r\n                #title=\"ngModel\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <strong for=\"imageUrl\" class=\"col-md-6 control-label\">Url картинка на филма:</strong>\r\n              <div class=\"col-md-15\">\r\n                <input type=\"text\" class=\"form-control\" name=\"imageUrl\" [(ngModel)]=\"bindingModel.imageUrl\" \r\n                #imageUrl=\"ngModel\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <strong for=\"year\" class=\"col-md-10 control-label\">Година на филма:</strong>\r\n              <div class=\"col-md-15\">\r\n                <input type=\"text\" class=\"form-control\" name=\"year\" [(ngModel)]=\"bindingModel.year\" \r\n                #year=\"ngModel\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <strong for=\"genre\" class=\"col-md-6 control-label\">Жанр на филма:</strong>\r\n              <div class=\"col-md-15\">\r\n                <input type=\"text\" class=\"form-control\" name=\"genre\" [(ngModel)]=\"bindingModel.genre\" \r\n                #genre=\"ngModel\">\r\n              </div>\r\n            </div>\r\n            <div id=\"btn\" class=\"col-md-offset-3 col-md-9\">\r\n              <button type=\"submit\" class=\"btn btn-info\">изпрати</button>\r\n            </div>\r\n            <br> \r\n          </form>\r\n        </div>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/requestForFilms/create-request/create-request.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/requestForFilms/create-request/create-request.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRequestComponent", function() { return CreateRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_createRequest_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/createRequest.models */ "./src/app/requestForFilms/models/createRequest.models.ts");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "./src/app/requestForFilms/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateRequestComponent = /** @class */ (function () {
    function CreateRequestComponent(requestService) {
        this.requestService = requestService;
        this.bindingModel = new _models_createRequest_models__WEBPACK_IMPORTED_MODULE_1__["CreateRequestModel"]('', '', 0, '');
    }
    CreateRequestComponent.prototype.ngOnInit = function () {
    };
    CreateRequestComponent.prototype.createRequest = function () {
        this.requestService.createRequest(this.bindingModel).subscribe();
    };
    CreateRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-request',
            template: __webpack_require__(/*! ./create-request.component.html */ "./src/app/requestForFilms/create-request/create-request.component.html"),
            styles: [__webpack_require__(/*! ./create-request.component.css */ "./src/app/requestForFilms/create-request/create-request.component.css")]
        }),
        __metadata("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]])
    ], CreateRequestComponent);
    return CreateRequestComponent;
}());



/***/ }),

/***/ "./src/app/requestForFilms/index.ts":
/*!******************************************!*\
  !*** ./src/app/requestForFilms/index.ts ***!
  \******************************************/
/*! exports provided: requestForFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestForFilms", function() { return requestForFilms; });
/* harmony import */ var _create_request_create_request_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-request/create-request.component */ "./src/app/requestForFilms/create-request/create-request.component.ts");
/* harmony import */ var _request_table_request_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-table/request-table.component */ "./src/app/requestForFilms/request-table/request-table.component.ts");


var requestForFilms = [
    _create_request_create_request_component__WEBPACK_IMPORTED_MODULE_0__["CreateRequestComponent"],
    _request_table_request_table_component__WEBPACK_IMPORTED_MODULE_1__["RequestTableComponent"]
];


/***/ }),

/***/ "./src/app/requestForFilms/models/createRequest.models.ts":
/*!****************************************************************!*\
  !*** ./src/app/requestForFilms/models/createRequest.models.ts ***!
  \****************************************************************/
/*! exports provided: CreateRequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRequestModel", function() { return CreateRequestModel; });
var CreateRequestModel = /** @class */ (function () {
    function CreateRequestModel(title, imageUrl, year, genre) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.year = year;
        this.genre = genre;
    }
    return CreateRequestModel;
}());



/***/ }),

/***/ "./src/app/requestForFilms/request-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/requestForFilms/request-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RequestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestRoutingModule", function() { return RequestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/guards/auth.guard */ "./src/app/auth/guards/auth.guard.ts");
/* harmony import */ var _auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/guards/admin.guard */ "./src/app/auth/guards/admin.guard.ts");
/* harmony import */ var _create_request_create_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-request/create-request.component */ "./src/app/requestForFilms/create-request/create-request.component.ts");
/* harmony import */ var _request_table_request_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-table/request-table.component */ "./src/app/requestForFilms/request-table/request-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var requestRoutes = [
    { path: 'create', component: _create_request_create_request_component__WEBPACK_IMPORTED_MODULE_4__["CreateRequestComponent"], canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'list', component: _request_table_request_table_component__WEBPACK_IMPORTED_MODULE_5__["RequestTableComponent"], canActivate: [_auth_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]] }
];
var RequestRoutingModule = /** @class */ (function () {
    function RequestRoutingModule() {
    }
    RequestRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(requestRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], RequestRoutingModule);
    return RequestRoutingModule;
}());



/***/ }),

/***/ "./src/app/requestForFilms/request-table/request-table.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/requestForFilms/request-table/request-table.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\r\n    margin-top:80px;\r\n    color: black;\r\n}\r\n\r\nimg {\r\n    width: 100px;\r\n    height: 100px;\r\n}"

/***/ }),

/***/ "./src/app/requestForFilms/request-table/request-table.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/requestForFilms/request-table/request-table.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"row\">\r\n  <table class=\"table table-info\">\r\n    <thead>\r\n      <tr class=\"table-danger\">\r\n        <th scope=\"col\">Image Url</th>\r\n        <th scope=\"col\">Title</th>\r\n        <th scope=\"col\">Year</th>\r\n        <th scope=\"col\">Genre</th>\r\n        <th scope=\"col\">Delete</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngFor=\"let t of table | async\">\r\n      <tr class=\"table-dark\">\r\n        <th scope=\"col\">\r\n            <img class=\"card-img-top\" src=\"{{t.imageUrl}}\" alt=\"Card image\">\r\n        </th>\r\n        <td>{{t.title}}</td>\r\n        <td>{{t.year}}</td>\r\n        <td>{{t.genere}}</td>\r\n        <td>\r\n          <a (click)=\"delete(t._id)\" class=\"btn btn-success\">delete</a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <br>\r\n</div>"

/***/ }),

/***/ "./src/app/requestForFilms/request-table/request-table.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/requestForFilms/request-table/request-table.component.ts ***!
  \**************************************************************************/
/*! exports provided: RequestTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestTableComponent", function() { return RequestTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ "./src/app/requestForFilms/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestTableComponent = /** @class */ (function () {
    function RequestTableComponent(requestService) {
        this.requestService = requestService;
    }
    RequestTableComponent.prototype.ngOnInit = function () {
        this.table = this.requestService.getAll();
    };
    RequestTableComponent.prototype.delete = function (_id) {
        this.requestService.deleteFilm(_id).subscribe();
    };
    RequestTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-table',
            template: __webpack_require__(/*! ./request-table.component.html */ "./src/app/requestForFilms/request-table/request-table.component.html"),
            styles: [__webpack_require__(/*! ./request-table.component.css */ "./src/app/requestForFilms/request-table/request-table.component.css")]
        }),
        __metadata("design:paramtypes", [_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], RequestTableComponent);
    return RequestTableComponent;
}());



/***/ }),

/***/ "./src/app/requestForFilms/request.module.ts":
/*!***************************************************!*\
  !*** ./src/app/requestForFilms/request.module.ts ***!
  \***************************************************/
/*! exports provided: RequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModule", function() { return RequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/app/requestForFilms/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request.service */ "./src/app/requestForFilms/request.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _request_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request-routing.module */ "./src/app/requestForFilms/request-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RequestModule = /** @class */ (function () {
    function RequestModule() {
    }
    RequestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _index__WEBPACK_IMPORTED_MODULE_1__["requestForFilms"].slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _request_routing_module__WEBPACK_IMPORTED_MODULE_5__["RequestRoutingModule"]
            ],
            providers: [
                _request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
            ]
        })
    ], RequestModule);
    return RequestModule;
}());



/***/ }),

/***/ "./src/app/requestForFilms/request.service.ts":
/*!****************************************************!*\
  !*** ./src/app/requestForFilms/request.service.ts ***!
  \****************************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var appKey = "kid_B1GOKdwHX";
var url = "https://baas.kinvey.com/appdata/" + appKey + "/request";
var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.createRequest = function (body) {
        return this.http.post(url, body);
    };
    RequestService.prototype.getAll = function () {
        return this.http.get(url);
    };
    RequestService.prototype.deleteFilm = function (_id) {
        return this.http.delete(url + ("/" + _id));
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\OnlineFilmi-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map