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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shell/shell.service */ "./src/app/shell/shell.service.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_3__["Shell"].childRoutes([{ path: 'about', component: _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_2__["extract"])('About') } }])
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-color white-text text-center py-4\" style=\"background-color:orange\">\r\n  <h3>\r\n    <strong>Who we are ?</strong>\r\n  </h3>\r\n</div>\r\n&nbsp;\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"card-columns\">\r\n    <div class=\"card\" style=\"width:250px\">\r\n      <img class=\"card-img-top\" src=\"assets/img_avatar1.png\" alt=\"Card image\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Vaibhav</h4>\r\n        <p class=\"card-text\">Vaibhav is an engineer</p>\r\n        <a href=\"https://in.linkedin.com/in/vaibhav-subedar-72b110108\" class=\"btn btn-primary\">See Profile</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\" style=\"width:250px\">\r\n      <img class=\"card-img-top\" src=\"assets/img_avatar3.png\" alt=\"Card image\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">Vikas</h4>\r\n        <p class=\"card-text\">Vikas is an engineer</p>\r\n        <a href=\"https://in.linkedin.com/in/vikasvshastry\" class=\"btn btn-primary\">See Profile</a>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.version = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].version;
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]],
            declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]]
        })
    ], AboutModule);
    return AboutModule;
}());



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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var log = new _app_core__WEBPACK_IMPORTED_MODULE_7__["Logger"]('App');
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, translateService, i18nService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.translateService = translateService;
        this.i18nService = i18nService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Setup logger
        if (_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
            _app_core__WEBPACK_IMPORTED_MODULE_7__["Logger"].enableProductionMode();
        }
        log.debug('init');
        // Setup translations
        this.i18nService.init(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].defaultLanguage, _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].supportedLanguages);
        var onNavigationEnd = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }));
        // Change page title on navigation or language change, based on route data
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.translateService.onLangChange, onNavigationEnd)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            var title = event['title'];
            if (title) {
                _this.titleService.setTitle(_this.translateService.instant(title));
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _app_core__WEBPACK_IMPORTED_MODULE_7__["I18nService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shell/shell.module */ "./src/app/shell/shell.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.module */ "./src/app/contact/contact.module.ts");
/* harmony import */ var _price_price_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./price/price.module */ "./src/app/price/price.module.ts");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
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
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('./ngsw-worker.js', { enabled: _env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _app_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _shell_shell_module__WEBPACK_IMPORTED_MODULE_11__["ShellModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_12__["AboutModule"],
                _price_price_module__WEBPACK_IMPORTED_MODULE_14__["PriceModule"],
                _service_service_module__WEBPACK_IMPORTED_MODULE_15__["ServiceModule"],
                _contact_contact_module__WEBPACK_IMPORTED_MODULE_13__["ContactModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_16__["LoginModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"] // must be imported as the last module as it contains the fallback route
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContactRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRoutingModule", function() { return ContactRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shell/shell.service */ "./src/app/shell/shell.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__["Shell"].childRoutes([
        { path: '', redirectTo: '/contact', pathMatch: 'full' },
        { path: 'contact', component: _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"], data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_2__["extract"])('Contact') } }
    ])
];
var ContactRoutingModule = /** @class */ (function () {
    function ContactRoutingModule() {
    }
    ContactRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], ContactRoutingModule);
    return ContactRoutingModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-color white-text text-center py-4\" style=\"background-color:orange\">\r\n  <h3>\r\n    <strong>How can we help ?</strong>\r\n  </h3>\r\n</div>\r\n&nbsp;\r\n\r\n<form name=\"form\" (ngSubmit)=\"f.form.valid && Submit()\" #f=\"ngForm\" novalidate>\r\n  <div class=\"container\" style=\"background-color:#92a8d1\">\r\n    <div class=\"span12\">\r\n\r\n      <div class=\"form-row \">\r\n        <div class=\"form-group col-md-12\">\r\n          <label for=\"name\"><b>Name</b></label>\r\n          <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\r\n          <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"name.errors.required\">Name is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-row \">\r\n        <div class=\"form-group col-md-12\">\r\n          <label for=\"email\"><b>E-mail</b></label>\r\n          <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required />\r\n          <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"email.errors.required\">E-mail is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-row \">\r\n        <div class=\"form-group col-md-12\">\r\n          <label for=\"message\"><b>What's on your mind ?</b></label>\r\n          <textarea type=\"text\" class=\"form-control\" name=\"message\" [(ngModel)]=\"model.message\" #message=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && message.invalid }\" required>\r\n       </textarea>\r\n          <div *ngIf=\"f.submitted && message.invalid\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"message.errors.required\">Message is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style=\"text-align:center;\">\r\n  <button type=\"submit\" class=\"btn btn-primary\">\r\n    Send message\r\n  </button>\r\n      </div>\r\n   </div>\r\n  </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.model = {};
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.Submit = function () {
        alert('Your message has been sent.');
        console.log('form values are', this.model);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/contact/contact-routing.module.ts");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _app_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
            declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]],
            providers: []
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/core/authentication/authentication.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/authentication/authentication.guard.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]('AuthenticationGuard');
var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        log.debug('Not authenticated, redirecting and adding redirect url...');
        this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
        return false;
    };
    AuthenticationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/core/authentication/authentication.service.mock.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.mock.ts ***!
  \********************************************************************/
/*! exports provided: MockAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockAuthenticationService", function() { return MockAuthenticationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var MockAuthenticationService = /** @class */ (function () {
    function MockAuthenticationService() {
        this.credentials = {
            username: 'test',
            token: '123'
        };
    }
    MockAuthenticationService.prototype.login = function (context) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
            username: context.username,
            token: '123456'
        });
    };
    MockAuthenticationService.prototype.logout = function () {
        this.credentials = null;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    };
    MockAuthenticationService.prototype.isAuthenticated = function () {
        return !!this.credentials;
    };
    return MockAuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/authentication/authentication.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var credentialsKey = 'credentials';
/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        var savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
        }
    }
    /**
     * Authenticates the user.
     * @param context The login parameters.
     * @return The user credentials.
     */
    AuthenticationService.prototype.login = function (context) {
        // Replace by proper authentication call
        var data = {
            username: context.username,
            token: '123456'
        };
        this.setCredentials(data, context.remember);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
    };
    /**
     * Logs out the user and clear credentials.
     * @return True if the user was logged out successfully.
     */
    AuthenticationService.prototype.logout = function () {
        // Customize credentials invalidation here
        this.setCredentials();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    AuthenticationService.prototype.isAuthenticated = function () {
        return !!this.credentials;
    };
    Object.defineProperty(AuthenticationService.prototype, "credentials", {
        /**
         * Gets the user credentials.
         * @return The user credentials or null if the user is not authenticated.
         */
        get: function () {
            return this._credentials;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    AuthenticationService.prototype.setCredentials = function (credentials, remember) {
        this._credentials = credentials || null;
        if (credentials) {
            var storage = remember ? localStorage : sessionStorage;
            storage.setItem(credentialsKey, JSON.stringify(credentials));
        }
        else {
            sessionStorage.removeItem(credentialsKey);
            localStorage.removeItem(credentialsKey);
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route-reusable-strategy */ "./src/app/core/route-reusable-strategy.ts");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/authentication.guard */ "./src/app/core/authentication/authentication.guard.ts");
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i18n.service */ "./src/app/core/i18n.service.ts");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony import */ var _http_http_cache_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http/http-cache.service */ "./src/app/core/http/http-cache.service.ts");
/* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http/api-prefix.interceptor */ "./src/app/core/http/api-prefix.interceptor.ts");
/* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http/error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony import */ var _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./http/cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};














var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(parentModule + " has already been loaded. Import Core module in the AppModule only.");
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [
                _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
                _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_7__["AuthenticationGuard"],
                _i18n_service__WEBPACK_IMPORTED_MODULE_8__["I18nService"],
                _http_http_cache_service__WEBPACK_IMPORTED_MODULE_10__["HttpCacheService"],
                _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_11__["ApiPrefixInterceptor"],
                _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlerInterceptor"],
                _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_13__["CacheInterceptor"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                    useClass: _http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
                },
                {
                    provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                    useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__["RouteReusableStrategy"]
                }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/http/api-prefix.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/http/api-prefix.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: ApiPrefixInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return ApiPrefixInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Prefixes all requests with `environment.serverUrl`.
 */
var ApiPrefixInterceptor = /** @class */ (function () {
    function ApiPrefixInterceptor() {
    }
    ApiPrefixInterceptor.prototype.intercept = function (request, next) {
        if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({ url: _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + request.url });
        }
        return next.handle(request);
    };
    ApiPrefixInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ApiPrefixInterceptor);
    return ApiPrefixInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http/cache.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/core/http/cache.interceptor.ts ***!
  \************************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-cache.service */ "./src/app/core/http/http-cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Caches HTTP requests.
 * Use ExtendedHttpClient fluent API to configure caching for each request.
 */
var CacheInterceptor = /** @class */ (function () {
    function CacheInterceptor(httpCacheService) {
        this.httpCacheService = httpCacheService;
        this.forceUpdate = false;
    }
    CacheInterceptor_1 = CacheInterceptor;
    /**
     * Configures interceptor options
     * @param options If update option is enabled, forces request to be made and updates cache entry.
     * @return The configured instance.
     */
    CacheInterceptor.prototype.configure = function (options) {
        var instance = new CacheInterceptor_1(this.httpCacheService);
        if (options && options.update) {
            instance.forceUpdate = true;
        }
        return instance;
    };
    CacheInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (request.method !== 'GET') {
            return next.handle(request);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            var cachedData = _this.forceUpdate ? null : _this.httpCacheService.getCacheData(request.urlWithParams);
            if (cachedData !== null) {
                // Create new response to avoid side-effects
                subscriber.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](cachedData));
                subscriber.complete();
            }
            else {
                next.handle(request).subscribe(function (event) {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                        _this.httpCacheService.setCacheData(request.urlWithParams, event);
                    }
                    subscriber.next(event);
                }, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
            }
        });
    };
    var CacheInterceptor_1;
    CacheInterceptor = CacheInterceptor_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"]])
    ], CacheInterceptor);
    return CacheInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http/error-handler.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/http/error-handler.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var log = new _logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]('ErrorHandlerInterceptor');
/**
 * Adds a default error handler to all requests.
 */
var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor() {
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return _this.errorHandler(error); }));
    };
    // Customize the default error handler here if needed
    ErrorHandlerInterceptor.prototype.errorHandler = function (response) {
        if (!_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            // Do something with the error
            log.error('Request error', response);
        }
        throw response;
    };
    ErrorHandlerInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorHandlerInterceptor);
    return ErrorHandlerInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http/http-cache.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/http/http-cache.service.ts ***!
  \*************************************************/
/*! exports provided: HttpCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return HttpCacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]('HttpCacheService');
var cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
var HttpCacheService = /** @class */ (function () {
    function HttpCacheService() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     * @param url The request URL.
     * @param data The received data.
     * @param lastUpdated The cache last update, current date is used if not specified.
     */
    HttpCacheService.prototype.setCacheData = function (url, data, lastUpdated) {
        this.cachedData[url] = {
            lastUpdated: lastUpdated || new Date(),
            data: data
        };
        log.debug("Cache set for key: \"" + url + "\"");
        this.saveCacheData();
    };
    /**
     * Gets the cached data for the specified request.
     * @param url The request URL.
     * @return The cached data or null if no cached data exists for this request.
     */
    HttpCacheService.prototype.getCacheData = function (url) {
        var cacheEntry = this.cachedData[url];
        if (cacheEntry) {
            log.debug("Cache hit for key: \"" + url + "\"");
            return cacheEntry.data;
        }
        return null;
    };
    /**
     * Gets the cached entry for the specified request.
     * @param url The request URL.
     * @return The cache entry or null if no cache entry exists for this request.
     */
    HttpCacheService.prototype.getHttpCacheEntry = function (url) {
        return this.cachedData[url] || null;
    };
    /**
     * Clears the cached entry (if exists) for the specified request.
     * @param url The request URL.
     */
    HttpCacheService.prototype.clearCache = function (url) {
        delete this.cachedData[url];
        log.debug("Cache cleared for key: \"" + url + "\"");
        this.saveCacheData();
    };
    /**
     * Cleans cache entries older than the specified date.
     * @param expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    HttpCacheService.prototype.cleanCache = function (expirationDate) {
        var _this = this;
        if (expirationDate) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_1__["each"])(this.cachedData, function (value, key) {
                if (expirationDate >= value.lastUpdated) {
                    delete _this.cachedData[key];
                }
            });
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    };
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     * @param persistence How the cache should be persisted, it can be either local or session storage, or if no value is
     *   provided it will be only in-memory (default).
     */
    HttpCacheService.prototype.setPersistence = function (persistence) {
        this.cleanCache();
        this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
        this.loadCacheData();
    };
    HttpCacheService.prototype.saveCacheData = function () {
        if (this.storage) {
            this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
        }
    };
    HttpCacheService.prototype.loadCacheData = function () {
        var data = this.storage ? this.storage[cachePersistenceKey] : null;
        this.cachedData = data ? JSON.parse(data) : {};
    };
    HttpCacheService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HttpCacheService);
    return HttpCacheService;
}());



/***/ }),

/***/ "./src/app/core/http/http.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HTTP_DYNAMIC_INTERCEPTORS, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return HTTP_DYNAMIC_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
/* harmony import */ var _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-prefix.interceptor */ "./src/app/core/http/api-prefix.interceptor.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// From @angular/common/http/src/interceptor: allows to chain interceptors
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (request) {
        return this.interceptor.intercept(request, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 *
 * For static interceptors that should always be enabled (like ApiPrefixInterceptor), use the standard
 * HTTP_INTERCEPTORS token.
 */
var HTTP_DYNAMIC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(httpHandler, injector, interceptors) {
        if (interceptors === void 0) { interceptors = []; }
        var _this = _super.call(this, httpHandler) || this;
        _this.httpHandler = httpHandler;
        _this.injector = injector;
        _this.interceptors = interceptors;
        if (!_this.interceptors) {
            // Configure default interceptors that can be disabled here
            _this.interceptors = [_this.injector.get(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]), _this.injector.get(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"])];
        }
        return _this;
    }
    HttpService_1 = HttpService;
    HttpService.prototype.cache = function (forceUpdate) {
        var cacheInterceptor = this.injector.get(_cache_interceptor__WEBPACK_IMPORTED_MODULE_3__["CacheInterceptor"]).configure({ update: forceUpdate });
        return this.addInterceptor(cacheInterceptor);
    };
    HttpService.prototype.skipErrorHandler = function () {
        return this.removeInterceptor(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"]);
    };
    HttpService.prototype.disableApiPrefix = function () {
        return this.removeInterceptor(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]);
    };
    // Override the original method to wire interceptors when triggering the request.
    HttpService.prototype.request = function (method, url, options) {
        var handler = this.interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.httpHandler);
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](handler).request(method, url, options);
    };
    HttpService.prototype.removeInterceptor = function (interceptorType) {
        return new HttpService_1(this.httpHandler, this.injector, this.interceptors.filter(function (i) { return !(i instanceof interceptorType); }));
    };
    HttpService.prototype.addInterceptor = function (interceptor) {
        return new HttpService_1(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
    };
    var HttpService_1;
    HttpService = HttpService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(HTTP_DYNAMIC_INTERCEPTORS)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], Array])
    ], HttpService);
    return HttpService;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));



/***/ }),

/***/ "./src/app/core/i18n.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/i18n.service.ts ***!
  \**************************************/
/*! exports provided: extract, I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return extract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/logger.service.ts");
/* harmony import */ var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations/en-US.json */ "./src/translations/en-US.json");
var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/en-US.json */ "./src/translations/en-US.json", 1);
/* harmony import */ var _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../translations/fr-FR.json */ "./src/translations/fr-FR.json");
var _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/fr-FR.json */ "./src/translations/fr-FR.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var log = new _logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]('I18nService');
var languageKey = 'language';
/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param s The string to extract for translation.
 * @return The same string.
 */
function extract(s) {
    return s;
}
var I18nService = /** @class */ (function () {
    function I18nService(translateService) {
        this.translateService = translateService;
        // Embed languages to avoid extra HTTP requests
        translateService.setTranslation('en-US', _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4__);
        translateService.setTranslation('fr-FR', _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5__);
    }
    /**
     * Initializes i18n for the application.
     * Loads language from local storage if present, or sets default language.
     * @param defaultLanguage The default language to use.
     * @param supportedLanguages The list of supported languages.
     */
    I18nService.prototype.init = function (defaultLanguage, supportedLanguages) {
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = supportedLanguages;
        this.language = '';
        this.translateService.onLangChange.subscribe(function (event) {
            localStorage.setItem(languageKey, event.lang);
        });
    };
    Object.defineProperty(I18nService.prototype, "language", {
        /**
         * Gets the current language.
         * @return The current language code.
         */
        get: function () {
            return this.translateService.currentLang;
        },
        /**
         * Sets the current language.
         * Note: The current language is saved to the local storage.
         * If no parameter is specified, the language is loaded from local storage (if present).
         * @param language The IETF language code to set.
         */
        set: function (language) {
            language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
            var isSupportedLanguage = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(this.supportedLanguages, language);
            // If no exact match is found, search without the region
            if (language && !isSupportedLanguage) {
                language = language.split('-')[0];
                language = this.supportedLanguages.find(function (supportedLanguage) { return supportedLanguage.startsWith(language); }) || '';
                isSupportedLanguage = Boolean(language);
            }
            // Fallback if language is not supported
            if (!isSupportedLanguage) {
                language = this.defaultLanguage;
            }
            log.debug("Language set to " + language);
            this.translateService.use(language);
        },
        enumerable: true,
        configurable: true
    });
    I18nService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], I18nService);
    return I18nService;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, AuthenticationService, MockAuthenticationService, AuthenticationGuard, extract, I18nService, HTTP_DYNAMIC_INTERCEPTORS, HttpService, HttpCacheService, ApiPrefixInterceptor, CacheInterceptor, ErrorHandlerInterceptor, RouteReusableStrategy, LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _authentication_authentication_service_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/authentication.service.mock */ "./src/app/core/authentication/authentication.service.mock.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockAuthenticationService", function() { return _authentication_authentication_service_mock__WEBPACK_IMPORTED_MODULE_2__["MockAuthenticationService"]; });

/* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authentication.guard */ "./src/app/core/authentication/authentication.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]; });

/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n.service */ "./src/app/core/i18n.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_4__["extract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_4__["I18nService"]; });

/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return _http_http_service__WEBPACK_IMPORTED_MODULE_5__["HTTP_DYNAMIC_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]; });

/* harmony import */ var _http_http_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/http-cache.service */ "./src/app/core/http/http-cache.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return _http_http_cache_service__WEBPACK_IMPORTED_MODULE_6__["HttpCacheService"]; });

/* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http/api-prefix.interceptor */ "./src/app/core/http/api-prefix.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_7__["ApiPrefixInterceptor"]; });

/* harmony import */ var _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http/cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_8__["CacheInterceptor"]; });

/* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http/error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlerInterceptor"]; });

/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./route-reusable-strategy */ "./src/app/core/route-reusable-strategy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_10__["RouteReusableStrategy"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_11__["LogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_11__["Logger"]; });















/***/ }),

/***/ "./src/app/core/logger.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/logger.service.ts ***!
  \****************************************/
/*! exports provided: LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    Logger.enableProductionMode = function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    Logger.prototype.debug = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects);
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    Logger.prototype.info = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects);
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    Logger.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects);
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    Logger.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects);
    };
    Logger.prototype.log = function (func, level, objects) {
        var _this = this;
        if (level <= Logger.level) {
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
        }
    };
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    Logger.level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    Logger.outputs = [];
    return Logger;
}());



/***/ }),

/***/ "./src/app/core/route-reusable-strategy.ts":
/*!*************************************************!*\
  !*** ./src/app/core/route-reusable-strategy.ts ***!
  \*************************************************/
/*! exports provided: RouteReusableStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return RouteReusableStrategy; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
var RouteReusableStrategy = /** @class */ (function (_super) {
    __extends(RouteReusableStrategy, _super);
    function RouteReusableStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteReusableStrategy.prototype.shouldDetach = function (route) {
        return false;
    };
    RouteReusableStrategy.prototype.store = function (route, detachedTree) { };
    RouteReusableStrategy.prototype.shouldAttach = function (route) {
        return false;
    };
    RouteReusableStrategy.prototype.retrieve = function (route) {
        return null;
    };
    RouteReusableStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig || future.data.reuse;
    };
    return RouteReusableStrategy;
}(_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteReuseStrategy"]));



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shell/shell.service */ "./src/app/shell/shell.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__["Shell"].childRoutes([
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_2__["extract"])('Home') } }
    ])
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-light justify-content-center\">\r\n  <ul>\r\n    <li><a href=\"#\" class=\"navbar-brand\"><font color=\"gray\"><b>Home</b></font></a></li>\r\n    <li class=\"parent\">\r\n      <a href=\"#\" class=\"navbar-brand\"><font color=\"gray\"><b>Services</b></font></a>    \r\n      <ul class=\"child\">       \r\n        <li><a href=\"/service\" class=\"navbar-brand\"><font color=\"gray\"><b>Web Development</b></font></a></li>       \r\n        <li><a href=\"/service\" class=\"navbar-brand\"><font color=\"gray\"><b>Mobile App Development</b></font></a></li>\r\n      </ul>\r\n    </li>\r\n    <li><a class=\"navbar-brand\" href=\"/price\"><font color=\"gray\"><b>Pricing</b></font></a></li>\r\n    <li><a class=\"navbar-brand\" href=\"/about\"><font color=\"gray\"><b>About</b></font></a></li>\r\n    <li><a class=\"navbar-brand\" href=\"/contact\"><font color=\"gray\"><b>Contact</b></font></a></li>\r\n  </ul>\r\n</nav>\r\n<div class=\"space_lg\">&nbsp;</div>\r\n\r\n<ngb-carousel>\r\n  <ng-template ngbSlide>\r\n    <img class=\"imagesize\" src=\"assets/999.jpg\" alt=\"first slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h2><b>Web Designing</b></h2>\r\n      <p>We design a static single/multi page websites.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img class=\"imagesize\" src=\"assets/bbb.jpg\" alt=\"second slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h2><b>Web Development</b></h2>\r\n      <p>We focus on a Full stack web development.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img class=\"imagesize\" src=\"assets/321.jpg\" alt=\"third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3><b>Android application development</b></h3>\r\n      <p>We do Mobile application design and development.</p>\r\n    </div>\r\n  </ng-template>\r\n</ngb-carousel>\r\n&nbsp;\r\n\r\n<h4 class=\"text-center\">Services</h4>\r\n&nbsp;\r\n<div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\" style=\"background-color:orange\">\r\n        <h5 class=\"card-title\">Web Development</h5>\r\n        <p class=\"card-text\">We develop and design static and dynamic Websites</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">More details</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\" style=\"background-color:cadetblue\">\r\n        <h5 class=\"card-title\">Mobile Development</h5>\r\n        <p class=\"card-text\">We develop Android applications.</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">More details</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"parallax\"></div>\r\n\r\n<div style=\"height:250px;background-color:gray;\">\r\n  <div class=\"card-columns\">\r\n\r\n    <div class=\"card text-white bg-warning mb-3\" style=\"max-width: 18rem;\">\r\n      <div class=\"card-header\"><h5>What we do</h5></div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Software Development</h5>\r\n        <p class=\"card-text\">We are a Software Development Company Specializing in Web Designing, Web Development & Android App Development.</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card text-white bg-info mb-3\" style=\"max-width: 18rem;\">\r\n      <div class=\"card-header\"><h5>Services</h5></div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\"> Web Development</h5>\r\n        <h5 class=\"card-title\">Android App Development</h5>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card text-white bg-success mb-3\" style=\"max-width: 18rem;\">\r\n      <div class=\"card-header\"><h5>Contact Info</h5></div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">to be added</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagesize {\n  width: 100%;\n  height: 450px;\n  z-index: 0; }\n\n.space_lg {\n  height: 60px; }\n\n.parallax {\n  /* The image used */\n  background-image: url('ddd.jpg');\n  /* Set a specific height */\n  min-height: 300px;\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n/* Main Navigation */\n\nnav {\n  background: #444;\n  width: 100%; }\n\nnav ul {\n  padding: 0;\n  margin: 0; }\n\nnav ul li {\n  position: relative;\n  display: inline-block;\n  list-style-type: none;\n  margin: 0;\n  padding: 10px 0; }\n\nnav ul li a {\n  text-decoration: none;\n  padding: 12px; }\n\n/* Sub Menu */\n\nnav ul li.parent ul.child {\n  display: none;\n  /* Hide Sub Menu */ }\n\nnav ul li.parent:hover ul.child {\n  display: block;\n  /* Show Sub Menu on Hover */\n  position: absolute;\n  top: 40px; }\n\nnav ul li.parent ul.child li {\n  width: 9em;\n  padding: 0; }\n\nnav ul li.parent ul.child li a {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHN1YmVkXFxEZXNrdG9wXFxzdGFydGVyLWtpdC1tYXN0ZXJcXHN0YXJ0ZXIta2l0LW1hc3Rlci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxjQUFhO0VBRWIsV0FBVSxFQUNYOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUdEO0VBQ0Usb0JBQW9CO0VBQ3BCLGlDQUF1QztFQUN2QywyQkFBMkI7RUFDM0Isa0JBQWlCO0VBQ2pCLDBDQUEwQztFQUMxQyw2QkFBNEI7RUFDNUIsNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qix1QkFBc0IsRUFDdkI7O0FBRUQscUJBQXFCOztBQUNyQjtFQUNFLGlCQUFnQjtFQUNoQixZQUFXLEVBRVo7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsVUFBUyxFQUNWOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixzQkFBcUI7RUFDckIsVUFBUztFQUNULGdCQUFlLEVBQ2hCOztBQUdEO0VBQ0Usc0JBQXFCO0VBQ3JCLGNBQWEsRUFDZDs7QUFHRCxjQUFjOztBQUNkO0VBQ0UsY0FBYTtFQUFFLG1CQUFtQixFQUNuQzs7QUFFRDtFQUNFLGVBQWM7RUFBRSw0QkFBNEI7RUFDNUMsbUJBQWtCO0VBQ2xCLFVBQVMsRUFFVjs7QUFFRDtFQUNFLFdBQVU7RUFDVixXQUFVLEVBQ1g7O0FBTUQ7RUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VzaXplIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIFxyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5zcGFjZV9sZyB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4vL0ZpeGVkIGltYWdlXHJcbi5wYXJhbGxheCB7XHJcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvZGRkLmpwZ1wiKTtcclxuICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi8qIE1haW4gTmF2aWdhdGlvbiAqL1xyXG5uYXYge1xyXG4gIGJhY2tncm91bmQ6ICM0NDQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiBcclxufVxyXG5cclxubmF2IHVsIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5cclxubmF2IHVsIGxpIGEgeyAgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcblxyXG4vKiBTdWIgTWVudSAqL1xyXG5uYXYgdWwgbGkucGFyZW50IHVsLmNoaWxkIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRlIFN1YiBNZW51ICovXHJcbn1cclxuXHJcbm5hdiB1bCBsaS5wYXJlbnQ6aG92ZXIgdWwuY2hpbGQge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBTaG93IFN1YiBNZW51IG9uIEhvdmVyICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICBcclxufVxyXG5cclxubmF2IHVsIGxpLnBhcmVudCB1bC5jaGlsZCBsaSB7XHJcbiAgd2lkdGg6IDllbTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vL25hdiB1bCBsaS5wYXJlbnQgdWwuY2hpbGQgbGk6aG92ZXIge1xyXG4vLyAgYmFja2dyb3VuZDogIzAwOEZCQTtcclxuLy99XHJcblxyXG5uYXYgdWwgbGkucGFyZW50IHVsLmNoaWxkIGxpIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote.service */ "./src/app/home/quote.service.ts");
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
    //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    function HomeComponent(quoteService) {
        this.quoteService = quoteService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.quoteService
            .getRandomQuote({ category: 'dev' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this.isLoading = false;
        }))
            .subscribe(function (quote) {
            _this.quote = quote;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_quote_service__WEBPACK_IMPORTED_MODULE_2__["QuoteService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote.service */ "./src/app/home/quote.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _app_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
            providers: [_quote_service__WEBPACK_IMPORTED_MODULE_7__["QuoteService"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/quote.service.ts":
/*!***************************************!*\
  !*** ./src/app/home/quote.service.ts ***!
  \***************************************/
/*! exports provided: QuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return QuoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = {
    quote: function (c) { return "/jokes/random?category=" + c.category; }
};
var QuoteService = /** @class */ (function () {
    function QuoteService(httpClient) {
        this.httpClient = httpClient;
    }
    QuoteService.prototype.getRandomQuote = function (context) {
        return this.httpClient
            .cache()
            .get(routes.quote(context))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) { return body.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('Error, could not load joke :-('); }));
    };
    QuoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuoteService);
    return QuoteService;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_2__["extract"])('Login') } }];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container bg-light\">\n  <div class=\"login-box\">\n    \n    <div class=\"container\">\n      <div class=\"card col-md-6 mt-3 mx-auto\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title text-center\">\n            <i class=\"far fa-3x fa-user-circle text-muted\"></i>\n          </h4>\n          <form (ngSubmit)=\"login()\" [formGroup]=\"loginForm\" novalidate>\n            <div class=\"alert alert-danger\" [hidden]=\"!error || isLoading\" translate>\n              Username or password incorrect.\n            </div>\n            <div class=\"form-group\">\n              <label class=\"d-block\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"username\" autocomplete=\"username\"\n                       [placeholder]=\"'Username' | translate\"/>\n                <span hidden translate>Username</span>\n                <small [hidden]=\"loginForm.controls.username.valid || loginForm.controls.username.untouched\"\n                       class=\"text-danger\" translate>\n                  Username is required\n                </small>\n              </label>\n              <label class=\"d-block\">\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\" autocomplete=\"current-password\"\n                       [placeholder]=\"'Password' | translate\" required/>\n                <span hidden translate>Password</span>\n                <small [hidden]=\"loginForm.controls.password.valid || loginForm.controls.password.untouched\"\n                       class=\"text-danger\" translate>\n                  Password is required\n                </small>\n              </label>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"remember\"/>\n                  <span translate>Remember me</span>\n                </label>\n              </div>\n            </div>\n            <button class=\"btn btn-primary w-100\" type=\"submit\" [disabled]=\"loginForm.invalid || isLoading\">\n              <i class=\"fas fa-cog fa-spin\" [hidden]=\"!isLoading\"></i>\n              <span translate>Login</span>\n            </button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Application global variables.\n */\n.login-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n.login-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%; }\n.ng-invalid.ng-touched:not(form) {\n  border-left: 4px solid #dc3545; }\n@media (max-width: 575.98px) {\n  .container {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxzdWJlZFxcRGVza3RvcFxcc3RhcnRlci1raXQtbWFzdGVyXFxzdGFydGVyLWtpdC1tYXN0ZXIvc3JjXFx0aGVtZVxcdGhlbWUtdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2xvZ2luL0M6XFxVc2Vyc1xcc3ViZWRcXERlc2t0b3BcXHN0YXJ0ZXIta2l0LW1hc3Rlclxcc3RhcnRlci1raXQtbWFzdGVyL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL0M6XFxVc2Vyc1xcc3ViZWRcXERlc2t0b3BcXHN0YXJ0ZXIta2l0LW1hc3Rlclxcc3RhcnRlci1raXQtbWFzdGVyL25vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FDQ0g7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFVBQVM7RUFDVCxRQUFPO0VBQ1AsU0FBUSxFQUNUO0FBRUQ7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsWUFBVztFQUNYLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsK0JEWVcsRUNYWjtBQ21ERztFRGhERjtJQUNFLFlBQVcsRUFDWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXBwbGljYXRpb24gZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4vLyBTZXQgRm9udCBBd2Vzb21lIGZvbnQgcGF0aFxuJGZhLWZvbnQtcGF0aDogXCJ+QGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtd2ViZm9udHMvd2ViZm9udHNcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCb290c3RyYXAgdmFyaWFibGVzXG4vL1xuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHZhcmlhYmxlcyBoZXJlIHRvIHN1aXRlIHlvdXIgdGhlbWUuXG4vLyBDb3B5IHZhcmlhYmxlcyB5b3Ugd2FudCB0byBjdXN0b21pemUgZnJvbSBub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbiR3aGl0ZTogI2ZmZjtcbiRncmF5LTEwMDogI2Y4ZjlmYTtcbiRncmF5LTIwMDogI2U5ZWNlZjtcbiRncmF5LTMwMDogI2RlZTJlNjtcbiRncmF5LTQwMDogI2NlZDRkYTtcbiRncmF5LTUwMDogI2FkYjViZDtcbiRncmF5LTYwMDogIzg2OGU5NjtcbiRncmF5LTcwMDogIzQ5NTA1NztcbiRncmF5LTgwMDogIzM0M2E0MDtcbiRncmF5LTkwMDogIzIxMjUyOTtcbiRibGFjazogIzAwMDtcblxuJGJsdWU6ICMwMDczZGQ7XG4kaW5kaWdvOiAjNjYxMGYyO1xuJHB1cnBsZTogIzZmNDJjMTtcbiRwaW5rOiAjZTgzZThjO1xuJHJlZDogI2RjMzU0NTtcbiRvcmFuZ2U6ICNmZDdlMTQ7XG4keWVsbG93OiAjZmZjMTA3O1xuJGdyZWVuOiAjMjhhNzQ1O1xuJHRlYWw6ICMyMGM5OTc7XG4kY3lhbjogIzE3YTJiODtcblxuJHRoZW1lLWNvbG9yczogKFxuICBwcmltYXJ5OiAkYmx1ZSxcbiAgc2Vjb25kYXJ5OiAkZ3JheS02MDAsXG4gIHN1Y2Nlc3M6ICRncmVlbixcbiAgaW5mbzogJGN5YW4sXG4gIHdhcm5pbmc6ICR5ZWxsb3csXG4gIGRhbmdlcjogJHJlZCxcbiAgbGlnaHQ6ICRncmF5LTEwMCxcbiAgZGFyazogJGdyYXktODAwXG4pO1xuXG4vLyBVc2UgQm9vdHN0cmFwIGRlZmF1bHRzIGZvciBvdGhlciB2YXJpYWJsZXMsIGltcG9ydGVkIGhlcmUgc28gd2UgY2FuIGFjY2VzcyBhbGwgYXBwIHZhcmlhYmxlcyBpbiBvbmUgcGxhY2Ugd2hlbiB1c2VkXG4vLyBpbiBjb21wb25lbnRzLlxuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9fZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL192YXJpYWJsZXNcIjtcbiIsIkBpbXBvcnQgXCJzcmMvdGhlbWUvdGhlbWUtdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL21peGlucy9fYnJlYWtwb2ludHNcIjtcblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9naW4tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdChmb3JtKSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdGhlbWUtY29sb3IoXCJkYW5nZXJcIik7XG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4cykge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var log = new _app_core__WEBPACK_IMPORTED_MODULE_5__["Logger"]('Login');
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, formBuilder, i18nService, authenticationService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.i18nService = i18nService;
        this.authenticationService = authenticationService;
        this.version = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version;
        this.isLoading = false;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.authenticationService
            .login(this.loginForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            _this.loginForm.markAsPristine();
            _this.isLoading = false;
        }))
            .subscribe(function (credentials) {
            log.debug(credentials.username + " successfully logged in");
            _this.route.queryParams.subscribe(function (params) {
                return _this.router.navigate([params.redirect || '/'], { replaceUrl: true });
            });
        }, function (error) {
            log.debug("Login error: " + error);
            _this.error = error;
        });
    };
    LoginComponent.prototype.setLanguage = function (language) {
        this.i18nService.language = language;
    };
    Object.defineProperty(LoginComponent.prototype, "currentLanguage", {
        get: function () {
            return this.i18nService.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "languages", {
        get: function () {
            return this.i18nService.supportedLanguages;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remember: true
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_core__WEBPACK_IMPORTED_MODULE_5__["I18nService"],
            _app_core__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"]],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/price/price-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/price/price-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PriceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceRoutingModule", function() { return PriceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _price_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shell/shell.service */ "./src/app/shell/shell.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__["Shell"].childRoutes([
        { path: '', redirectTo: '/price', pathMatch: 'full' },
        { path: 'price', component: _price_component__WEBPACK_IMPORTED_MODULE_3__["PriceComponent"], data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_2__["extract"])('Price') } }
    ])
];
var PriceRoutingModule = /** @class */ (function () {
    function PriceRoutingModule() {
    }
    PriceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], PriceRoutingModule);
    return PriceRoutingModule;
}());



/***/ }),

/***/ "./src/app/price/price.component.html":
/*!********************************************!*\
  !*** ./src/app/price/price.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-color white-text text-center py-4\" style=\"background-color:orange\">\r\n  <h3>\r\n    <strong>What fits you ?</strong>\r\n  </h3>\r\n</div>\r\n\r\n<div class=\"card-group\">\r\n  <div class=\"card\">\r\n    <img class=\"card-img-top\" src=\"assets/static.jpg\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Static</h5>\r\n      <p class=\"card-text\">This is Static.</p>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <small class=\"text-muted\"><b>₹ 1000</b></small>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <img class=\"card-img-top\" src=\"assets/static.jpg\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Dynamic</h5>\r\n      <p class=\"card-text\">This is Dynamic.</p>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <small class=\"text-muted\"><b>₹ 2000</b></small>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <img class=\"card-img-top\" src=\"assets/static.jpg\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">App</h5>\r\n      <p class=\"card-text\">This is an app.</p>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n      <small class=\"text-muted\"><b>₹ 1000</b></small>\r\n    </div>\r\n  </div>\r\n</div>\r\n\n\r\n<div *ngIf=\"!show\">\r\n  <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"hideorshow()\"><b>Click here to pay!</b></button>\r\n  </div>\r\n\n<div *ngIf=\"show\" style=\"align-content:center\">\r\n  <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\r\n</div>\n"

/***/ }),

/***/ "./src/app/price/price.component.scss":
/*!********************************************!*\
  !*** ./src/app/price/price.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlL3ByaWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/price/price.component.ts":
/*!******************************************!*\
  !*** ./src/app/price/price.component.ts ***!
  \******************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PriceComponent = /** @class */ (function () {
    function PriceComponent() {
        //Hide or Show declarations
        this.show = false;
        this.click = 'Show';
    }
    PriceComponent.prototype.ngOnInit = function () {
        this.initConfig();
    };
    PriceComponent.prototype.initConfig = function () {
        this.payPalConfig = new ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalConfig"](ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalIntegrationType"].ClientSideREST, ngx_paypal__WEBPACK_IMPORTED_MODULE_2__["PayPalEnvironment"].Sandbox, {
            commit: true,
            client: {
                sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
            },
            button: {
                label: 'paypal',
                layout: 'vertical'
            },
            onAuthorize: function (data, actions) {
                console.log('Authorize');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined);
            },
            onPaymentComplete: function (data, actions) {
                console.log('OnPaymentComplete');
            },
            onCancel: function (data, actions) {
                console.log('OnCancel');
            },
            onError: function (err) {
                console.log('OnError');
            },
            onClick: function () {
                console.log('onClick');
            },
            validate: function (actions) {
                console.log(actions);
            },
            experience: {
                noShipping: true,
                brandName: 'Angular PayPal'
            },
            transactions: [
                {
                    amount: {
                        total: 30.11,
                        currency: 'USD',
                        details: {
                            subtotal: 30.00,
                            tax: 0.07,
                            shipping: 0.03,
                            handling_fee: 1.00,
                            shipping_discount: -1.00,
                            insurance: 0.01
                        }
                    },
                    custom: 'Custom value',
                    item_list: {
                        items: [
                            {
                                name: 'hat',
                                description: 'Brown hat.',
                                quantity: 5,
                                price: 3,
                                tax: 0.01,
                                sku: '1',
                                currency: 'USD'
                            },
                            {
                                name: 'handbag',
                                description: 'Black handbag.',
                                quantity: 1,
                                price: 15,
                                tax: 0.02,
                                sku: 'product34',
                                currency: 'USD'
                            }
                        ],
                        shipping_address: {
                            recipient_name: 'Brian Robinson',
                            line1: '4th Floor',
                            line2: 'Unit #34',
                            city: 'San Jose',
                            country_code: 'US',
                            postal_code: '95131',
                            phone: '011862212345678',
                            state: 'CA'
                        },
                    },
                }
            ],
            note_to_payer: 'Contact us if you have troubles processing payment'
        });
    };
    //Hide or show for pay here button
    PriceComponent.prototype.hideorshow = function () {
        this.show = !this.show;
        if (this.show)
            this.click = "show";
        else
            this.click = "hide";
    };
    PriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.scss */ "./src/app/price/price.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/price/price.module.ts":
/*!***************************************!*\
  !*** ./src/app/price/price.module.ts ***!
  \***************************************/
/*! exports provided: PriceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceModule", function() { return PriceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _price_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./price-routing.module */ "./src/app/price/price-routing.module.ts");
/* harmony import */ var _price_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./price.component */ "./src/app/price/price.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PriceModule = /** @class */ (function () {
    function PriceModule() {
    }
    PriceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _app_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _price_routing_module__WEBPACK_IMPORTED_MODULE_6__["PriceRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_paypal__WEBPACK_IMPORTED_MODULE_3__["NgxPayPalModule"]
            ],
            declarations: [_price_component__WEBPACK_IMPORTED_MODULE_7__["PriceComponent"]],
            providers: []
        })
    ], PriceModule);
    return PriceModule;
}());



/***/ }),

/***/ "./src/app/service/service-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/service/service-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ServiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRoutingModule", function() { return ServiceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shell/shell.service */ "./src/app/shell/shell.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__["Shell"].childRoutes([
        { path: '', redirectTo: '/service', pathMatch: 'full' },
        { path: 'service', component: _service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"], data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_2__["extract"])('Service') } }
    ])
];
var ServiceRoutingModule = /** @class */ (function () {
    function ServiceRoutingModule() {
    }
    ServiceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], ServiceRoutingModule);
    return ServiceRoutingModule;
}());



/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-color white-text text-center py-4\" style=\"background-color:orange\">\r\n  <h3>\r\n    <strong>What we do ?</strong>\r\n  </h3>\r\n</div>\r\n\r\n<img class=\"imagesize\" src=\"assets/web.jpg\">\r\n"

/***/ }),

/***/ "./src/app/service/service.component.scss":
/*!************************************************!*\
  !*** ./src/app/service/service.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagesize {\n  width: 50%;\n  z-index: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9DOlxcVXNlcnNcXHN1YmVkXFxEZXNrdG9wXFxzdGFydGVyLWtpdC1tYXN0ZXJcXHN0YXJ0ZXIta2l0LW1hc3Rlci9zcmNcXGFwcFxcc2VydmljZVxcc2VydmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVU7RUFDVixXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2VzaXplIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
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

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.scss */ "./src/app/service/service.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/service/service.module.ts":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _service_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-routing.module */ "./src/app/service/service-routing.module.ts");
/* harmony import */ var _service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _app_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _service_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiceRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
            declarations: [_service_component__WEBPACK_IMPORTED_MODULE_6__["ServiceComponent"]],
            providers: []
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]; });





/***/ }),

/***/ "./src/app/shared/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isLoading\" class=\"text-xs-center\">\n  <i class=\"fas fa-cog fa-spin fa-3x\"></i> <span>{{message}}</span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa {\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9DOlxcVXNlcnNcXHN1YmVkXFxEZXNrdG9wXFxzdGFydGVyLWtpdC1tYXN0ZXJcXHN0YXJ0ZXIta2l0LW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFxsb2FkZXJcXGxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQixFQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
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

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.isLoading = false;
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoaderComponent.prototype, "isLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "message", void 0);
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]],
            exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shell/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/shell/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link text-uppercase\" href=\"https://www.instagram.com/\" routerLinkActive=\"active\">\r\n        <i class=\"fab fa-facebook-f\"></i>\r\n      </a>\r\n      <a class=\"nav-item nav-link text-uppercase\" href=\"https://www.instagram.com/\" routerLinkActive=\"active\">\r\n        <i class=\"fab fa-instagram\"></i>\r\n      </a>\r\n      <a class=\"nav-item nav-link text-uppercase\" href=\"https://twitter.com/\" routerLinkActive=\"active\">\r\n        <i class=\"fab fa-twitter\"></i>\r\n      </a>\r\n      <a class=\"nav-item nav-link text-uppercase\" href=\"https://www.linkedin.com/\" routerLinkActive=\"active\">\r\n        <i class=\"fab fa-linkedin-in\"></i>\r\n      </a>\r\n      <a class=\"nav-item nav-link text-uppercase\" href=\"https://www.youtube.com/\" routerLinkActive=\"active\">\r\n        <i class=\"fab fa-youtube\"></i>\r\n      </a>\r\n      <a class=\"nav-item nav-link text-uppercase\" href=\"https://plus.google.com/discover\" routerLinkActive=\"active\">\r\n        <i class=\"fab fa-google-plus-g\"></i>\r\n      </a>\r\n\r\n    </div>\r\n    <div class=\"navbar-nav\">\r\n      <div class=\"nav navbar-nav navbar-right\">\r\n     \r\n          <i class=\"fas fa-phone-volume\" style=\"color:lightgray;\">\r\n            <span style=\"color:lightgray;\"> +91 96114 75888</span>\r\n          </i>\r\n      \r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shell/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/shell/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Application global variables.\n */\n.navbar {\n  margin-bottom: 1rem; }\n.nav-link.dropdown-toggle {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvaGVhZGVyL0M6XFxVc2Vyc1xcc3ViZWRcXERlc2t0b3BcXHN0YXJ0ZXIta2l0LW1hc3Rlclxcc3RhcnRlci1raXQtbWFzdGVyL3NyY1xcdGhlbWVcXHRoZW1lLXZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9oZWFkZXIvQzpcXFVzZXJzXFxzdWJlZFxcRGVza3RvcFxcc3RhcnRlci1raXQtbWFzdGVyXFxzdGFydGVyLWtpdC1tYXN0ZXIvc3JjXFxhcHBcXHNoZWxsXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvaGVhZGVyL0M6XFxVc2Vyc1xcc3ViZWRcXERlc2t0b3BcXHN0YXJ0ZXIta2l0LW1hc3Rlclxcc3RhcnRlci1raXQtbWFzdGVyL25vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUNBSDtFQUNFLG9CQzJIVyxFRDFIWjtBQUVEO0VBQ0UsZ0JBQWUsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEFwcGxpY2F0aW9uIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cblxuLy8gU2V0IEZvbnQgQXdlc29tZSBmb250IHBhdGhcbiRmYS1mb250LXBhdGg6IFwifkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXdlYmZvbnRzL3dlYmZvbnRzXCI7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQm9vdHN0cmFwIHZhcmlhYmxlc1xuLy9cbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCB2YXJpYWJsZXMgaGVyZSB0byBzdWl0ZSB5b3VyIHRoZW1lLlxuLy8gQ29weSB2YXJpYWJsZXMgeW91IHdhbnQgdG8gY3VzdG9taXplIGZyb20gbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2Nzc1xuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4kd2hpdGU6ICNmZmY7XG4kZ3JheS0xMDA6ICNmOGY5ZmE7XG4kZ3JheS0yMDA6ICNlOWVjZWY7XG4kZ3JheS0zMDA6ICNkZWUyZTY7XG4kZ3JheS00MDA6ICNjZWQ0ZGE7XG4kZ3JheS01MDA6ICNhZGI1YmQ7XG4kZ3JheS02MDA6ICM4NjhlOTY7XG4kZ3JheS03MDA6ICM0OTUwNTc7XG4kZ3JheS04MDA6ICMzNDNhNDA7XG4kZ3JheS05MDA6ICMyMTI1Mjk7XG4kYmxhY2s6ICMwMDA7XG5cbiRibHVlOiAjMDA3M2RkO1xuJGluZGlnbzogIzY2MTBmMjtcbiRwdXJwbGU6ICM2ZjQyYzE7XG4kcGluazogI2U4M2U4YztcbiRyZWQ6ICNkYzM1NDU7XG4kb3JhbmdlOiAjZmQ3ZTE0O1xuJHllbGxvdzogI2ZmYzEwNztcbiRncmVlbjogIzI4YTc0NTtcbiR0ZWFsOiAjMjBjOTk3O1xuJGN5YW46ICMxN2EyYjg7XG5cbiR0aGVtZS1jb2xvcnM6IChcbiAgcHJpbWFyeTogJGJsdWUsXG4gIHNlY29uZGFyeTogJGdyYXktNjAwLFxuICBzdWNjZXNzOiAkZ3JlZW4sXG4gIGluZm86ICRjeWFuLFxuICB3YXJuaW5nOiAkeWVsbG93LFxuICBkYW5nZXI6ICRyZWQsXG4gIGxpZ2h0OiAkZ3JheS0xMDAsXG4gIGRhcms6ICRncmF5LTgwMFxuKTtcblxuLy8gVXNlIEJvb3RzdHJhcCBkZWZhdWx0cyBmb3Igb3RoZXIgdmFyaWFibGVzLCBpbXBvcnRlZCBoZXJlIHNvIHdlIGNhbiBhY2Nlc3MgYWxsIGFwcCB2YXJpYWJsZXMgaW4gb25lIHBsYWNlIHdoZW4gdXNlZFxuLy8gaW4gY29tcG9uZW50cy5cbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvX2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzXCI7XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3RoZW1lLXZhcmlhYmxlc1wiO1xuXG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlcjtcbn1cblxuLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgICBcIjQwMFwiOiAkZ3JheS00MDAsXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgICBcIjcwMFwiOiAkZ3JheS03MDAsXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgIFwiOTAwXCI6ICRncmF5LTkwMFxuICApLFxuICAkZ3JheXNcbik7XG5cbiRibHVlOiAgICAjMDA3YmZmICFkZWZhdWx0O1xuJGluZGlnbzogICM2NjEwZjIgIWRlZmF1bHQ7XG4kcHVycGxlOiAgIzZmNDJjMSAhZGVmYXVsdDtcbiRwaW5rOiAgICAjZTgzZThjICFkZWZhdWx0O1xuJHJlZDogICAgICNkYzM1NDUgIWRlZmF1bHQ7XG4kb3JhbmdlOiAgI2ZkN2UxNCAhZGVmYXVsdDtcbiR5ZWxsb3c6ICAjZmZjMTA3ICFkZWZhdWx0O1xuJGdyZWVuOiAgICMyOGE3NDUgIWRlZmF1bHQ7XG4kdGVhbDogICAgIzIwYzk5NyAhZGVmYXVsdDtcbiRjeWFuOiAgICAjMTdhMmI4ICFkZWZhdWx0O1xuXG4kY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcImJsdWVcIjogICAgICAgJGJsdWUsXG4gICAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXG4gICAgXCJwdXJwbGVcIjogICAgICRwdXJwbGUsXG4gICAgXCJwaW5rXCI6ICAgICAgICRwaW5rLFxuICAgIFwicmVkXCI6ICAgICAgICAkcmVkLFxuICAgIFwib3JhbmdlXCI6ICAgICAkb3JhbmdlLFxuICAgIFwieWVsbG93XCI6ICAgICAkeWVsbG93LFxuICAgIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXG4gICAgXCJ0ZWFsXCI6ICAgICAgICR0ZWFsLFxuICAgIFwiY3lhblwiOiAgICAgICAkY3lhbixcbiAgICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuICAgIFwiZ3JheVwiOiAgICAgICAkZ3JheS02MDAsXG4gICAgXCJncmF5LWRhcmtcIjogICRncmF5LTgwMFxuICApLFxuICAkY29sb3JzXG4pO1xuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkY3lhbiAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGRhcms6ICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcblxuJHRoZW1lLWNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogICAgICA4JSAhZGVmYXVsdDtcblxuLy8gVGhlIHlpcSBsaWdodG5lc3MgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdGhlIGxpZ2h0bmVzcyBvZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJkYXJrXCIgdG8gXCJsaWdodFwiLiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZCAyNTUuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTUwICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiR5aXEtdGV4dC1kYXJrOiAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4keWlxLXRleHQtbGlnaHQ6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJlZmVycy1yZWR1Y2VkLW1vdGlvbi1tZWRpYS1xdWVyeTogICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkLCBubyBsb25nZXIgYWZmZWN0cyBhbnkgY29tcGlsZWQgQ1NTXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgIDM6ICRzcGFjZXIsXG4gICAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICAgIDU6ICgkc3BhY2VyICogMylcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNpemVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAyNTogMjUlLFxuICAgIDUwOiA1MCUsXG4gICAgNzU6IDc1JSxcbiAgICAxMDA6IDEwMCUsXG4gICAgYXV0bzogYXV0b1xuICApLFxuICAkc2l6ZXNcbik7XG5cblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJGxpbmstY29sb3IsIDE1JSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG4vLyBEYXJrZW4gcGVyY2VudGFnZSBmb3IgbGlua3Mgd2l0aCBgLnRleHQtKmAgY2xhc3MgKGUuZy4gYC50ZXh0LXN1Y2Nlc3NgKVxuJGVtcGhhc2l6ZWQtbGluay1ob3Zlci1kYXJrZW4tcGVyY2VudGFnZTogMTUlICFkZWZhdWx0O1xuXG4vLyBQYXJhZ3JhcGhzXG4vL1xuLy8gU3R5bGUgcCBlbGVtZW50LlxuXG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206ICAgMXJlbSAhZGVmYXVsdDtcblxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZ3JpZC1icmVha3BvaW50czogbWFwLW1lcmdlKFxuICAoXG4gICAgeHM6IDAsXG4gICAgc206IDU3NnB4LFxuICAgIG1kOiA3NjhweCxcbiAgICBsZzogOTkycHgsXG4gICAgeGw6IDEyMDBweFxuICApLFxuICAkZ3JpZC1icmVha3BvaW50c1xuKTtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5AaW5jbHVkZSBfYXNzZXJ0LXN0YXJ0cy1hdC16ZXJvKCRncmlkLWJyZWFrcG9pbnRzKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRjb250YWluZXItbWF4LXdpZHRoczogbWFwLW1lcmdlKFxuICAoXG4gICAgc206IDU0MHB4LFxuICAgIG1kOiA3MjBweCxcbiAgICBsZzogOTYwcHgsXG4gICAgeGw6IDExNDBweFxuICApLFxuICAkY29udGFpbmVyLW1heC13aWR0aHNcbik7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRjb250YWluZXItbWF4LXdpZHRocywgXCIkY29udGFpbmVyLW1heC13aWR0aHNcIik7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcblxuJHJvdW5kZWQtcGlsbDogICAgICAgICAgICAgICAgNTByZW0gIWRlZmF1bHQ7XG5cbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG5cbiRjYXJldC13aWR0aDogICAgICAgICAgICAgICAgIC4zZW0gIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5IC4xNXMgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcblxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogam9pbihcbiAgKFxuICAgICgyMSA5KSxcbiAgICAoMTYgOSksXG4gICAgKDMgNCksXG4gICAgKDEgMSksXG4gICksXG4gICRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3Ncbik7XG5cbi8vIEZvbnRzXG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogLjg3NSkgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgNnJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXk0LXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICAgICAgICAgJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kbGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xuXG4kaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJG1hcmstcGFkZGluZzogICAgICAgICAgICAgICAgLjJlbSAhZGVmYXVsdDtcblxuJGR0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRrYmQtYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgLS4xcmVtIDAgcmdiYSgkYmxhY2ssIC4yNSkgIWRlZmF1bHQ7XG4kbmVzdGVkLWtiZC1mb250LXdlaWdodDogICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtYXJrLWJnOiAgICAgICAgICAgICAgICAgICAgICNmY2Y4ZTMgIWRlZmF1bHQ7XG5cbiRoci1tYXJnaW4teTogICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXNtOiAgICAgICAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJGdyYXktOTAwLCA3LjUlKSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xuXG4kdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAwIDAgMCAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICRsaW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICAgICRsaW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRidG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNjUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1iZzogICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMjUlKSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgICgkaW5wdXQtYnRuLWZvbnQtc2l6ZSAqICRpbnB1dC1idG4tbGluZS1oZWlnaHQpICsgKCRpbnB1dC1idG4tcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsYygjeyRpbnB1dC1oZWlnaHQtaW5uZXJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyLXNtOiAgICAgICAgICAgICAgICAgKCRpbnB1dC1idG4tZm9udC1zaXplLXNtICogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSkgKyAoJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gKiAyKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWhlaWdodC1pbm5lci1zbX0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXItbGc6ICAgICAgICAgICAgICAgICAoJGlucHV0LWJ0bi1mb250LXNpemUtbGcgKiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnKSArICgkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtaGVpZ2h0LWlubmVyLWxnfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9KSAhZGVmYXVsdDtcblxuJGlucHV0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6ICAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6ICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogICAgICAuMzEyNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZGlzYWJsZWQtYmc6ICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogIHJnYmEodGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpLCAuNSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBub25lICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6ICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDQnJTNlJTNjcGF0aCBzdHJva2U9JyN7JGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcn0nIGQ9J00wIDJoNCcvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM2UlM2NjaXJjbGUgcj0nMycgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgLyAyICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgY2FsYygjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZX0gLSAjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNH0pICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgIDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA1JyUzZSUzY3BhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiAgICAgICAgICAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3Igbm8tcmVwZWF0IHJpZ2h0ICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxuXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6ICRpbnB1dC1oZWlnaHQtaW5uZXIgKiAzIC8gNCArICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogICAgICBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICAgKCRpbnB1dC1oZWlnaHQtaW5uZXIgLyAyKSAoJGlucHV0LWhlaWdodC1pbm5lciAvIDIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAgICAgICAgICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAwICRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoIHJnYmEoJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yLCAuNSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICBpbnNldCAwIC4yNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcbiRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG4kZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nLTIgLTIgNyA3JyUzZSUzY3BhdGggc3Ryb2tlPSclMjNkOTUzNGYnIGQ9J00wIDBsMyAzbTAtM0wwIDMnLyUzZSUzY2NpcmNsZSByPScuNScvJTNlJTNjY2lyY2xlIGN4PSczJyByPScuNScvJTNlJTNjY2lyY2xlIGN5PSczJyByPScuNScvJTNlJTNjY2lyY2xlIGN4PSczJyBjeT0nMycgcj0nLjUnLyUzZSUzYy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tc3BhY2VyOiAgICAgICAgICAgICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBjYWxjKCN7JGRyb3Bkb3duLWJvcmRlci1yYWRpdXN9IC0gI3skZHJvcGRvd24tYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJGdyYXktOTAwLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuXG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuXG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXG4kbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cblxuLy8gSnVtYm90cm9uXG5cbiRqdW1ib3Ryb24tcGFkZGluZzogICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gQ2FyZHNcblxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIGNhbGMoI3skY2FyZC1ib3JkZXItcmFkaXVzfSAtICN7JGNhcmQtYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XG4kY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XG5cbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XG5cblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG4vLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gVG9hc3RzXG4kdG9hc3QtbWF4LXdpZHRoOiAzNTBweCAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXg6IC43NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1wYWRkaW5nLXk6IC4yNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1mb250LXNpemU6IC44NzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAxcHggIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4xKSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICRncmF5LTYwMCAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICA3NSUgIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjRlbSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNmVtICFkZWZhdWx0O1xuLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxuLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxuJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gS2VlcCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cbiRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XG4kbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGFsZXJ0LWJnLWxldmVsOiAgICAgICAgICAgICAgICAgICAgLTEwICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1sZXZlbDogICAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3ItbGV2ZWw6ICAgICAgICAgICAgICAgICA2ICFkZWZhdWx0O1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuNzUpICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcblxuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cblxuLy8gRmlndXJlc1xuXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxuXG5cbi8vIFNwaW5uZXJzXG5cbiRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aDogIC4yNWVtICFkZWZhdWx0O1xuXG4kc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xuXG5cbi8vIENsb3NlXG5cbiRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XG5cblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xuXG4ka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xuJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4kcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcblxuXG4vLyBVdGlsaXRpZXNcblxuJG92ZXJmbG93czogYXV0bywgaGlkZGVuICFkZWZhdWx0O1xuJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XG5cblxuLy8gUHJpbnRpbmdcblxuJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XG4kcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xuIl19 */"

/***/ }),

/***/ "./src/app/shell/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shell/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
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
    function HeaderComponent(router, authenticationService, i18nService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.i18nService = i18nService;
        this.menuHidden = true;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuHidden = !this.menuHidden;
    };
    HeaderComponent.prototype.setLanguage = function (language) {
        this.i18nService.language = language;
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authenticationService.logout().subscribe(function () { return _this.router.navigate(['/login'], { replaceUrl: true }); });
    };
    Object.defineProperty(HeaderComponent.prototype, "currentLanguage", {
        get: function () {
            return this.i18nService.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "languages", {
        get: function () {
            return this.i18nService.supportedLanguages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "username", {
        get: function () {
            var credentials = this.authenticationService.credentials;
            return credentials ? credentials.username : null;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shell/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shell/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["I18nService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.component.html":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/shell/shell.component.scss":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
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

var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () { };
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.scss */ "./src/app/shell/shell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.module.ts":
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shell/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ShellModule = /** @class */ (function () {
    function ShellModule() {
    }
    ShellModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _shell_component__WEBPACK_IMPORTED_MODULE_5__["ShellComponent"]]
        })
    ], ShellModule);
    return ShellModule;
}());



/***/ }),

/***/ "./src/app/shell/shell.service.ts":
/*!****************************************!*\
  !*** ./src/app/shell/shell.service.ts ***!
  \****************************************/
/*! exports provided: Shell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shell", function() { return Shell; });
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shell.component */ "./src/app/shell/shell.component.ts");


/**
 * Provides helper methods to create routes.
 */
var Shell = /** @class */ (function () {
    function Shell() {
    }
    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return The new route using shell as the base.
     */
    Shell.childRoutes = function (routes) {
        return {
            path: '',
            component: _shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellComponent"],
            children: routes,
            canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_0__["AuthenticationGuard"]],
            // Reuse ShellComponent instance when navigating between child views
            data: { reuse: true }
        };
    };
    return Shell;
}());



/***/ }),

/***/ "./src/environments/.env.ts":
/*!**********************************!*\
  !*** ./src/environments/.env.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    'npm_package_version': '1.0.0'
});


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
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.env */ "./src/environments/.env.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// `.env.ts` is generated by the `npm run env` command

var environment = {
    production: false,
    version: _env__WEBPACK_IMPORTED_MODULE_0__["default"].npm_package_version + '-dev',
    serverUrl: '/api',
    defaultLanguage: 'en-US',
    supportedLanguages: ['en-US', 'fr-FR']
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */




if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/translations/en-US.json":
/*!*************************************!*\
  !*** ./src/translations/en-US.json ***!
  \*************************************/
/*! exports provided: APP_NAME, About, Hello world !, Home, Logged in as, Login, Logout, Password, Password is required, Username, Username is required, Username or password incorrect., Remember me, Version, default */
/***/ (function(module) {

module.exports = {"APP_NAME":"ngX-Rocket","About":"About","Hello world !":"Hello world !","Home":"Home","Logged in as":"Logged in as","Login":"Login","Logout":"Logout","Password":"Password","Password is required":"Password is required","Username":"Username","Username is required":"Username is required","Username or password incorrect.":"Username or password incorrect.","Remember me":"Remember me","Version":"Version"};

/***/ }),

/***/ "./src/translations/fr-FR.json":
/*!*************************************!*\
  !*** ./src/translations/fr-FR.json ***!
  \*************************************/
/*! exports provided: APP_NAME, About, Hello world !, Home, Logged in as, Login, Logout, Password, Password is required, Username, Username is required, Username or password incorrect., Remember me, Version, default */
/***/ (function(module) {

module.exports = {"APP_NAME":"ngX-Rocket","About":"A propos","Hello world !":"Bonjour le monde !","Home":"Accueil","Logged in as":"Connecté en tant que","Login":"Connexion","Logout":"Déconnexion","Password":"Mot de passe","Password is required":"Mot de passe requis","Username":"Identifiant","Username is required":"Identifiant requis","Username or password incorrect.":"Identifiant ou mot de passe incorrect.","Remember me":"Rester connecté","Version":"Version"};

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\subed\Desktop\starter-kit-master\starter-kit-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map