webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n  <app-splash></app-splash>\n  <app-mobile-logo></app-mobile-logo>\n  <app-menu></app-menu>\n  <router-outlet></router-outlet>\n  <!-- <app-footer-logo></app-footer-logo> -->\n\n<!-- </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu {\n  position: relative;\n  text-align: center;\n  top: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());

// console.log(cookieValue);


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splash_splash_component__ = __webpack_require__("../../../../../src/app/splash/splash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__philosophy_philosophy_component__ = __webpack_require__("../../../../../src/app/philosophy/philosophy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__team_team_component__ = __webpack_require__("../../../../../src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selected_transactions_selected_transactions_component__ = __webpack_require__("../../../../../src/app/selected-transactions/selected-transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__footer_logo_footer_logo_component__ = __webpack_require__("../../../../../src/app/footer-logo/footer-logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mobile_logo_mobile_logo_component__ = __webpack_require__("../../../../../src/app/mobile-logo/mobile-logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__splash_splash_component__["a" /* SplashComponent */],
                __WEBPACK_IMPORTED_MODULE_5__philosophy_philosophy_component__["a" /* PhilosophyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__selected_transactions_selected_transactions_component__["a" /* SelectedTransactionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__footer_logo_footer_logo_component__["a" /* FooterLogoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__mobile_logo_mobile_logo_component__["a" /* MobileLogoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'philosophy', component: __WEBPACK_IMPORTED_MODULE_5__philosophy_philosophy_component__["a" /* PhilosophyComponent */] },
                    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_6__team_team_component__["a" /* TeamComponent */] },
                    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */] },
                    { path: 'selected-transactions', component: __WEBPACK_IMPORTED_MODULE_8__selected_transactions_selected_transactions_component__["a" /* SelectedTransactionsComponent */] },
                    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_11__overview_overview_component__["a" /* OverviewComponent */] },
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14_ngx_cookie_service__["a" /* CookieService */], { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_10__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor=\"let contact of contact_info\" class=\"contact-info\">\n  <p><b>{{contact.name}}</b></p>\n  <p>{{contact.phone}}</p>\n  <p>{{contact.email}}</p>\n</div> -->\n\n\n\n<div class=\"contact-container\">\n\n  <div class=\"info-container\">\n    <div *ngFor=\"let contact of contact_info\" class=\"company-info\">\n      <h1><b>{{contact.company_name}}</b></h1>\n      <p>{{contact.addr_1}}</p>\n      <p>{{contact.addr_2}}</p>\n    </div>\n\n    <div *ngFor=\"let contact of contact_info\" class=\"contact-info\">\n      <p>{{contact.name}}</p>\n      <p>{{contact.phone}}</p>\n      <p>{{contact.email}}</p>\n    </div>\n  </div>\n\n  <app-footer-logo></app-footer-logo>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n.contact-container {\n  width: 100vw;\n  height: calc(100vh - 160px);\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  -webkit-animation: fadein 2s;\n          animation: fadein 2s; }\n.contact-container .info-container {\n    position: relative;\n    margin-top: 165px;\n    width: 50%;\n    position: relative;\n    left: 125px;\n    top: 35px;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n      .contact-container .info-container {\n        margin-top: 0;\n        width: 90%;\n        top: 100px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%); } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n      .contact-container .info-container {\n        margin-top: 0;\n        width: 90%;\n        top: 100px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%); } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n      .contact-container .info-container {\n        margin-top: 0;\n        width: 90%;\n        top: 100px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%); } }\n.contact-container .info-container .contact-info {\n      line-height: 2; }\n.contact-container .info-container .company-info {\n      margin-bottom: 25px;\n      line-height: 2; }\n.contact-container .info-container .company-info h1 {\n        margin-bottom: 15px;\n        font-size: 13px; }\n.contact-container .info-container .company-info p {\n        line-height: 1.75; }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.contact_info = [
            {
                'company_name': 'Puzzle Equity Solutions',
                'addr_1': '51 West 52nd Street',
                'addr_2': 'New York, NY 10019',
                'name': 'Jacob Savitt',
                'phone': '917 916 0445',
                'email': 'jacob@puzzlenyc.com'
            }
        ];
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer-logo/footer-logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-logo-container\">\n  <div class=\"footer-logo\">\n    <img src=\"../assets/splash2.png\" alt=\"\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer-logo/footer-logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-logo-container {\n  position: absolute;\n  left: 50%;\n  bottom: 12px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n  .footer-logo-container .footer-logo {\n    width: 150px; }\n  .footer-logo-container .footer-logo img {\n      width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer-logo/footer-logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterLogoComponent = /** @class */ (function () {
    function FooterLogoComponent() {
    }
    FooterLogoComponent.prototype.ngOnInit = function () {
    };
    FooterLogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer-logo',
            template: __webpack_require__("../../../../../src/app/footer-logo/footer-logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer-logo/footer-logo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterLogoComponent);
    return FooterLogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <div class=\"menu-container\">\n    <ul>\n      <li *ngFor=\"let menu of menuItems\" [routerLinkActive]=\"['class2']\" ><img src=\"../assets/puzzle.png\" alt=\"\"><p><a [routerLinkActive]=\"['class1']\" [routerLink]=\"['/' + menu.url]\"><b>{{menu.title}}</b></a></p></li>\n      <!-- <li><b><a href=\"http://www.google.com\" target=\"_blank\">blog</a></b></li> -->\n    </ul>\n  </div>\n</div>\n\n\n<div class=\"mobile-menu\">\n\n  <div (click) =\"initSlide()\" class=\"burger\">\n    <svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 348.33 149.26\">\n      <rect [ngClass]=\"{'open':openMenu}\" class=\"top\" width=\"348.33\" height=\"28.7\"/>\n      <rect [ngClass]=\"{'open':openMenu}\" class=\"middle\" y=\"60.28\" width=\"348.33\" height=\"28.7\"/>\n      <rect [ngClass]=\"{'open':openMenu}\" class=\"bottom\" y=\"120.56\" width=\"348.33\" height=\"28.7\"/>\n    </svg>\n  </div>\n</div>\n\n<div [ngClass]=\"{'init-menu':openMenu}\" class=\"mobile-menu-container\">\n  <ul>\n    <li *ngFor=\"let menu of menuItems\"><p><a (click)=\"initSlide()\" [routerLink]=\"['/' + menu.url]\"><b>{{menu.title}}</b></a></p></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n.menu {\n  position: fixed;\n  padding-top: 30px;\n  text-align: left;\n  background-color: white;\n  width: 100vw;\n  z-index: 2;\n  top: 0;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .menu {\n      display: none; } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    .menu {\n      display: none; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    .menu {\n      display: none; } }\n.menu .menu-container {\n    background-color: white; }\n.menu a {\n    text-decoration: none;\n    color: black;\n    font-family: 'courier new';\n    font-size: 13px; }\n.menu p {\n    text-align: center; }\n.menu ul, .menu li {\n    display: inline-block; }\n.menu ul {\n    margin-left: 125px; }\n.menu li {\n    margin-right: 50px;\n    padding-bottom: 20px; }\n.menu img {\n    margin-bottom: 15px;\n    visibility: hidden;\n    left: 50%;\n    position: relative;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    width: 60px; }\n.class1 {\n  background-color: #FFF000; }\n.class2 img {\n  visibility: visible; }\n.mobile-menu {\n  display: none;\n  position: fixed;\n  height: 50px;\n  z-index: 26;\n  width: 100vw;\n  background-color: white;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .mobile-menu {\n      display: block; } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    .mobile-menu {\n      display: block; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    .mobile-menu {\n      display: block; } }\n.mobile-menu .burger {\n    width: 40px;\n    left: 15px;\n    position: relative;\n    top: 15px; }\n.mobile-menu-container {\n  display: none;\n  width: 100vw;\n  position: fixed;\n  height: 100vh;\n  background-color: white;\n  z-index: 25;\n  -webkit-transform: translateY(100vh);\n          transform: translateY(100vh);\n  -webkit-transition: all .4s ease-in;\n  transition: all .4s ease-in;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .mobile-menu-container {\n      display: block; } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    .mobile-menu-container {\n      display: block; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    .mobile-menu-container {\n      display: block; } }\n.mobile-menu-container ul {\n    width: 250px;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    text-align: center; }\n.mobile-menu-container ul li {\n      margin-bottom: 15px; }\n.mobile-menu-container ul p a {\n      text-decoration: none;\n      color: black;\n      font-family: 'courier new';\n      font-size: 15px; }\n.init-menu {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n.top, .middle, .bottom {\n  -webkit-transition: all 0.35s linear;\n  transition: all 0.35s linear; }\n.top.open {\n  -webkit-transform: translateY(60px);\n          transform: translateY(60px); }\n.bottom.open {\n  -webkit-transform: translateY(-60px);\n          transform: translateY(-60px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.openMenu = false;
        this.menuItems = [
            {
                "title": 'overview',
                "url": 'overview'
            },
            {
                "title": 'philosophy',
                "url": 'philosophy'
            },
            {
                "title": 'team',
                "url": 'team'
            },
            {
                "title": 'contact',
                "url": 'contact'
            },
            {
                "title": 'selected transactions',
                "url": 'selected-transactions'
            },
        ];
    }
    MenuComponent.prototype.initSlide = function () {
        this.openMenu = !this.openMenu;
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mobile-logo/mobile-logo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mobile-logo-container\">\n\n  <div class=\"mobile-logo\">\n    <img src=\"../assets/puzzle.png\" alt=\"\">\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/mobile-logo/mobile-logo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n.mobile-logo-container {\n  position: fixed;\n  display: none;\n  width: 40px;\n  right: 10px;\n  top: 5px;\n  z-index: 27;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n.mobile-logo-container .mobile-logo {\n    width: 100%; }\n.mobile-logo-container .mobile-logo img {\n      width: 100%; }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .mobile-logo-container {\n      display: block; } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    .mobile-logo-container {\n      display: block; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    .mobile-logo-container {\n      display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mobile-logo/mobile-logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MobileLogoComponent = /** @class */ (function () {
    function MobileLogoComponent() {
    }
    MobileLogoComponent.prototype.ngOnInit = function () {
    };
    MobileLogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mobile-logo',
            template: __webpack_require__("../../../../../src/app/mobile-logo/mobile-logo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mobile-logo/mobile-logo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MobileLogoComponent);
    return MobileLogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overview\">\n  <!-- <iframe src=\"https://player.vimeo.com/video/254731396?autoplay=1&loop=1&title=0&byline=0&portrait=0\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->\n  <!-- <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/75YPgBdeLr4?rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe> -->\n  <div class=\"mobile-background\" style=\"background-image:url(../assets/trial.jpg); background-repeat:no-repeat; background-size: cover; background-position: 0 0;\">\n    <!-- <img src=\"../assets/trial.png\" alt=\"\"> -->\n  </div>\n  <video class=\"home-video\" src=\"../assets/puzzle_video.mp4\" loop muted autoplay poster=\"../assets/puzzle_video.mp4\"></video>\n  <div class=\"scroll-down\">\n    <p>scroll down</p>\n  </div>\n\n  <div class=\"overlay-photo\">\n    <img src=\"../assets/overlay.png\" alt=\"\">\n  </div>\n  <div class=\"something-else\" style=\"background-image:url(../assets/back.png); background-repeat:no-repeat; background-size: cover; background-position: 0 0;\">\n    <div class=\"content\">\n      <p><b>{{page_title}}</b></p><br>\n      <p>{{paragraph_part1}}</p><br>\n      <p>{{paragraph_part2}}</p><br>\n      <p>{{paragraph_part3}}</p>\n    </div>\n    <app-footer-logo></app-footer-logo>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n.home-video {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%);\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .home-video {\n      display: none; } }\n.overview {\n  height: 100vh;\n  z-index: 1;\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  -webkit-animation: fadein 2s;\n          animation: fadein 2s; }\n.overview iframe {\n    position: fixed;\n    width: 100vw;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    height: 50vh;\n    display: none; }\n.overview p {\n    line-height: 1.5; }\n.scroll-down {\n  bottom: 0px;\n  left: 0px;\n  -webkit-transform: none;\n          transform: none;\n  background-color: white;\n  width: 100vw;\n  text-align: center;\n  height: 50px;\n  position: fixed; }\n.scroll-down p {\n    line-height: 50px; }\n.mobile-background {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  display: none;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .mobile-background {\n      display: block; } }\n.something-else {\n  z-index: 2;\n  position: relative;\n  top: 100vh;\n  width: 100vw;\n  height: calc(100vh - 150px);\n  background-color: white;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .something-else {\n      height: calc(100vh - 49px); } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    .something-else {\n      height: calc(100vh - 49px); } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    .something-else {\n      height: calc(100vh - 49px); } }\n.content {\n  position: relative;\n  width: 50%;\n  top: 25px;\n  left: 125px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .content {\n      margin-top: 0;\n      width: 90%;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    .content {\n      margin-top: 0;\n      width: 90%;\n      top: 100px;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    .content {\n      margin-top: 0;\n      width: 90%;\n      top: 100px;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); } }\n.overlay-photo {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -24%);\n          transform: translate(-50%, -24%);\n  opacity: .5;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .overlay-photo {\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    .overlay-photo {\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    .overlay-photo {\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); } }\n.overlay-photo img {\n    display: block;\n    width: 200px; }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
        this.page_title = "About Us";
        this.paragraph_part1 = "Based in Lower Manhattan, Puzzle Equity Solutions is a full-service commercial real estate firm providing advisory and brokerage services to real estate investors and developers.";
        this.paragraph_part2 = "Puzzle specializes as an investment-sales broker with a particular focus on creative deal-making in the middle market, including non-traditional deal structures such as joint ventures and 99-year land leases.";
        this.paragraph_part3 = "We work closely with property owners and prospective buyers to develop the most complete range of investment options.";
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/overview/overview.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/philosophy/philosophy.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"philosophy_text\">\n  <p>{{philosophy_text_part1}}</p>\n  <p>{{philosophy_text_part2}}</p>\n</div> -->\n\n<!-- <div class=\"philosophy_keypoints\">\n  <img src=\"../assets/af1.jpg\" alt=\"\">\n  <img src=\"../assets/af1.jpg\" alt=\"\">\n  <img src=\"../assets/af1.jpg\" alt=\"\">\n</div> -->\n\n\n\n\n<div class=\"philosophy_container\" style=\"background-image:url(../assets/back.png); background-repeat:no-repeat; background-size: cover; background-position: 0 0;\">\n  <div class=\"philosophy_text\">\n    <!-- <p><b>{{philosophy_title}}</b></p><br> -->\n    <p>{{philosophy_text_part1}}</p><br>\n    <p>{{philosophy_text_part2}}</p>\n  </div>\n\n  <div class=\"philosophy-image\">\n    <!-- <img src=\"../assets/placeholder-philosophy.gif\" alt=\"\"> -->\n\n  </div>\n  <app-footer-logo></app-footer-logo>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/philosophy/philosophy.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n.philosophy_container {\n  width: 100vw;\n  height: calc(100vh - 160px);\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  -webkit-animation: fadein 2s;\n          animation: fadein 2s;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .philosophy_container {\n      width: 100vw; } }\n.philosophy_container .philosophy_text {\n    margin-top: 165px;\n    width: 50%;\n    position: relative;\n    left: 125px;\n    top: 35px;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n      .philosophy_container .philosophy_text {\n        margin-top: 0;\n        width: 90%;\n        top: 100px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%); } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n      .philosophy_container .philosophy_text {\n        margin-top: 0;\n        width: 90%;\n        top: 100px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%); } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n      .philosophy_container .philosophy_text {\n        margin-top: 0;\n        width: 90%;\n        top: 100px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%); } }\n.philosophy_container .philosophy_text p {\n      line-height: 1.5; }\n.philosophy_container .philosophy-image img {\n    width: 85%;\n    position: relative;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/philosophy/philosophy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhilosophyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhilosophyComponent = /** @class */ (function () {
    function PhilosophyComponent() {
        this.philosophy_title = "Philosophy";
        this.philosophy_text_part1 = "At first blush, 1000-piece puzzle may seem to create an impossible challenge: how can all the intricate pieces fit together?   Discipline and creativity supply the answer.  It is prudent to first identify all the edge pieces and create a border. Working from the outside in, it becomes easier to solve the puzzle piece-by-piece until the last piece fits seamlessly into the rest. Once the puzzle is complete, the individual pieces each contribute to a much greater sum.";
        this.philosophy_text_part2 = "Real estate investment is often a puzzle that must be solved. Puzzle Equity Solutions works with sellers backwards-- identifying their goals first and subsequently offering an array of solutions tailored to reach them.";
    }
    PhilosophyComponent.prototype.ngOnInit = function () {
    };
    PhilosophyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-philosophy',
            template: __webpack_require__("../../../../../src/app/philosophy/philosophy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/philosophy/philosophy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhilosophyComponent);
    return PhilosophyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/selected-transactions/selected-transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"selected-transactions-container\">\n  <table>\n    <tr *ngFor=\"let transaction of selected_transactions\">\n      <td><img src={{transaction.property_image}} alt=\"\"></td>\n      <td><p class=\"margin\"><b>{{transaction.address}}</b></p><p class=\"margin-tall\">{{transaction.date}}</p><p>{{transaction.summary}}</p></td>\n    </tr>\n      <app-footer-logo></app-footer-logo>\n  </table>\n</div>\n\n\n<div class=\"mobile-selected-transaction-container\">\n  <div *ngFor=\"let transaction of selected_transactions\" class=\"selected-transactions\">\n    <img src={{transaction.property_image}} alt=\"\">\n    <p><b>{{transaction.address}}</b></p>\n    <p class=\"margin-tall-mobile\">{{transaction.date}}</p>\n    <p class=\"margin-tall-mobile\">{{transaction.summary}}</p>\n  </div>\n  <app-footer-logo></app-footer-logo>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/selected-transactions/selected-transactions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n.selected-transaction-container {\n  width: 100vw;\n  height: calc(100vh - 160px);\n  margin-top: 160px; }\ntable {\n  margin-top: 160px;\n  width: 75%;\n  left: 125px;\n  top: 35px;\n  position: relative;\n  border-collapse: collapse;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  -webkit-animation: fadein 2s;\n          animation: fadein 2s; }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    table {\n      display: none; } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    table {\n      display: none; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    table {\n      display: none; } }\ntable img {\n    width: 250px;\n    position: relative;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n      table img {\n        width: 100px; } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n      table img {\n        width: 100px; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n      table img {\n        width: 100px; } }\ntable td {\n    vertical-align: top;\n    padding-bottom: 60px;\n    padding-right: 40px; }\ntable td p {\n      line-height: 1.5; }\n.margin {\n  margin-bottom: 5px; }\n.margin-tall {\n  margin-bottom: 20px; }\n.margin-tall-mobile {\n  margin-bottom: 20px; }\n.mobile-selected-transaction-container {\n  display: none;\n  position: relative;\n  width: 95%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  top: 100px;\n  padding-bottom: 150px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .mobile-selected-transaction-container {\n      display: block; } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    .mobile-selected-transaction-container {\n      width: 65%;\n      display: block; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    .mobile-selected-transaction-container {\n      width: 65%;\n      display: block; } }\n.mobile-selected-transaction-container .selected-transactions img {\n    width: 100%;\n    margin-bottom: 10px; }\n.mobile-selected-transaction-container .selected-transactions p {\n    line-height: 1.5; }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selected-transactions/selected-transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedTransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectedTransactionsComponent = /** @class */ (function () {
    function SelectedTransactionsComponent() {
        this.selected_transactions = [
            {
                'property_image': '../assets/apt3.jpg',
                'address': '846 Flushing Ave',
                'date': 'December 2017',
                'summary': 'Jacob transacted 846 Flushing Avenue, an RGA Development Site featuring 17,000 buildable square-feet in Bushiwck. The property owner entered into a 99-year land-lease with an option-to-buy after 5 years, enabling the property owner to achieve the highest possible selling price while in the interim receiving income comparable to the income he were to receive had he reinvested his sales proceeds in a 1031.'
            },
            {
                'property_image': '../assets/apt2.jpg',
                'address': '37-27 107th St',
                'date': 'December 2017',
                'summary': 'Jacob transacted 37-27 107th Street, a 33-unit, 25,000 square foot elevator building in Corona, Queens. Jacob brought the buyer and subsequently negotiated the deal on behalf of the seller.'
            },
            {
                'property_image': '../assets/apt1.jpg',
                'address': '130 Graham Avenue',
                'date': 'December 2017',
                'summary': 'Jacob was heavily involved in the sale of 130 Graham Avenue, a 12,000 square foot building to be delivered vacant in East Williamsburg. Jacob found the buyer and subsequently arranged owner-financing for the seller, allowing him to sell the asset at the highest possible price.'
            },
        ];
    }
    SelectedTransactionsComponent.prototype.ngOnInit = function () {
    };
    SelectedTransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-selected-transactions',
            template: __webpack_require__("../../../../../src/app/selected-transactions/selected-transactions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/selected-transactions/selected-transactions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectedTransactionsComponent);
    return SelectedTransactionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/splash/splash.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'remove-splash': splashActive}\" (click)=\"movetheText()\" class=\"container\">\n  <div class=\"splash-image\">\n    <img src=\"../assets/puzzle-piece.png\" alt=\"\">\n    <div class=\"splash-text\">\n      <img [ngClass]=\"{'move-text': moveText}\" src=\"../assets/splash.png\" alt=\"\">\n    </div>\n    <div class=\"click-text\">\n      <p>click</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/splash/splash.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  width: 100vw;\n  height: 100vh;\n  background-color: white;\n  position: fixed;\n  top: 0px;\n  -webkit-transition: all .4s ease-in;\n  transition: all .4s ease-in;\n  z-index: 999999; }\n\n.click-text {\n  position: fixed;\n  bottom: 20px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n.splash-image {\n  width: 100vw;\n  height: 100vh; }\n\n.splash-image img {\n    width: 275px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -webkit-transition: all .4s ease-in;\n    transition: all .4s ease-in; }\n\n.splash-image .splash-text {\n    -webkit-transition: all .4s ease-in;\n    transition: all .4s ease-in; }\n\n.splash-image .splash-text img {\n      -webkit-transform: translate(-50%, 20%);\n              transform: translate(-50%, 20%); }\n\n.remove-splash {\n  -webkit-transform: translateY(-115vh);\n          transform: translateY(-115vh); }\n\n.move-text {\n  -webkit-transform: translate(-50%, -48%) !important;\n          transform: translate(-50%, -48%) !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/splash/splash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplashComponent = /** @class */ (function () {
    function SplashComponent(cookieService) {
        this.cookieService = cookieService;
        this.splashActive = false;
        this.moveText = false;
    }
    SplashComponent.prototype.ngOnInit = function () {
        if (this.cookieService.get('five') === 'true') {
            this.splashActive = true;
            this.moveText = true;
        }
        else {
            this.splashActive = false;
            this.moveText = false;
        }
    };
    //
    // removeSplash(){
    //   // this.cookieService.set( 'somethingElse2', true );
    //   // this.splashActive = this.cookieService.get('somethingElse2');
    //   // console.log(this.splashActive);
    //   // this.splashActive = this.cookieService.get('Test');
    //   // console.log(this.cookieService.get('Test'));
    // }
    SplashComponent.prototype.movetheText = function () {
        var _this = this;
        this.cookieService.set('five', 'true');
        this.moveText = true;
        setTimeout(function () {
            _this.splashActive = true;
        }, 1000);
    };
    SplashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-splash',
            template: __webpack_require__("../../../../../src/app/splash/splash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/splash/splash.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]])
    ], SplashComponent);
    return SplashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"team-container\">\n  <div class=\"member-container\">\n    <h1 class=\"team-page-title\">Leadership</h1>\n    <div *ngFor=\"let member of team_members\" class=\"team-member\">\n      <h1>{{member.name}}</h1>\n      <p><b>{{member.position}}</b></p><br>\n      <p>{{member.summary}}</p><br>\n      <p>{{member.summary_part2}}</p>\n    </div>\n  </div>\n\n</div> -->\n\n\n<!-- <div *ngFor=\"let transaction of selected_transactions\" class=\"selected-transactions\">\n  <img src={{transaction.property_image}} alt=\"\">\n  <p><b>{{transaction.address}}</b></p>\n  <p>{{transaction.date}}</p>\n  <p>{{transaction.summary}}</p>\n</div> -->\n\n\n\n\n<div class=\"selected-transactions-container\">\n  <table>\n    <tr *ngFor=\"let member of team_members\">\n      <td><img src=\"{{member.photo}}\" alt=\"\"></td>\n      <td><p class=\"margin\"><b>{{member.name}}</b></p><p class=\"margin-tall\">{{member.position}}</p><p>{{member.summary}}</p><br><p>{{member.summary_part2}}</p></td>\n    </tr>\n      <app-footer-logo></app-footer-logo>\n  </table>\n</div>\n\n\n<div class=\"mobile-selected-transaction-container\">\n  <div *ngFor=\"let member of team_members\" class=\"selected-transactions\">\n    <img src={{member.photo}} alt=\"\">\n    <p><b>{{member.name}}</b></p>\n    <p class=\"margin-tall-mobile\">{{member.position}}</p>\n    <p class=\"margin-tall-mobile\">{{member.summary}}</p>\n    <p class=\"margin-tall-mobile\">{{member.summary_part2}}</p>\n  </div>\n  <app-footer-logo></app-footer-logo>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/team/team.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n.selected-transaction-container {\n  width: 100vw;\n  height: calc(100vh - 160px);\n  margin-top: 160px;\n  padding-bottom: 150px; }\ntable {\n  margin-top: 160px;\n  width: 75%;\n  left: 125px;\n  top: 35px;\n  position: relative;\n  border-collapse: collapse;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  -webkit-animation: fadein 2s;\n          animation: fadein 2s; }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    table {\n      display: none; } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    table {\n      display: none; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    table {\n      display: none; } }\ntable img {\n    width: 215px;\n    position: relative;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n      table img {\n        width: 100px; } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n      table img {\n        width: 100px; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n      table img {\n        width: 100px; } }\ntable td {\n    vertical-align: top;\n    padding-bottom: 60px;\n    padding-right: 40px; }\ntable td p {\n      line-height: 1.5; }\n.margin {\n  margin-bottom: 5px; }\n.margin-tall {\n  margin-bottom: 20px; }\n.margin-tall-mobile {\n  margin-bottom: 20px; }\n.mobile-selected-transaction-container {\n  display: none;\n  position: relative;\n  width: 95%;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  top: 100px;\n  padding-bottom: 150px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .mobile-selected-transaction-container {\n      display: block; } }\n@media only screen and (min-width: 768px) and (max-width: 1022px) and (orientation: portrait) {\n    .mobile-selected-transaction-container {\n      display: block; } }\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n    .mobile-selected-transaction-container {\n      display: block; } }\n.mobile-selected-transaction-container .selected-transactions img {\n    width: 50%;\n    margin-bottom: 10px;\n    position: relative;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n.mobile-selected-transaction-container .selected-transactions p {\n    line-height: 1.5; }\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
        this.team_members = [
            {
                'name': 'Jacob Savitt',
                'position': 'Principal',
                'photo': '../assets/jacob_savitt.jpg',
                'summary': 'Founder of Puzzle Equity Solutions, Jacob Savitt recognized the strong market demand for non-traditional deal structures in the NYC middle-market.   While obtaining a degree in Real Estate Finance at the Gallatin School of New York University, Jacob worked over 40 hours a week at Brooklyn-based NSRE — transacting close to $25 million within his first 12 months in the business. Working intensively with creative deal structures such as land-leases, option structures, and owner-financing, Jacob quickly recognized the strong market demand for non-traditional deal structures in the middle-market.  Jacob designed Puzzle to be a leader in creating unique solutions for New York real estate investors.',
                'summary_part2': 'Jacob oversees all day-to-day operations including deal-sourcing, feasibility analysis, marketing, branding, negotiating, and management.'
            },
            {
                'name': 'William Savitt',
                'position': 'Principal',
                'photo': '../assets/william_savitt.jpg',
                'summary': "William Savitt is a partner with of Wachtell, Lipton, Rosen & Katz, a leading New York law firm.   While removed from day-to-day operations, William plays an advisory role, leveraging his experience in creative deal-making to offer novel solutions to real estate sellers.",
                'summary_part2': ""
            }
        ];
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team',
            template: __webpack_require__("../../../../../src/app/team/team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map