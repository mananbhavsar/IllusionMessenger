webpackJsonp([11],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_reach_us_reach_us__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_reach_us_reach_us__["a" /* ReachUsComponent */]
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReachUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_contact_us_contact_us__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReachUsComponent = (function () {
    function ReachUsComponent(nav, viewConrtoller, _emailComposer, _callNumber, modalCtrl, user) {
        var _this = this;
        this.nav = nav;
        this.viewConrtoller = viewConrtoller;
        this._emailComposer = _emailComposer;
        this._callNumber = _callNumber;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this._address = false;
        this.global = {};
        this.hideContactUsLink = true;
        this.viewConrtoller.willEnter.subscribe(function () {
            //checking if page is Contact us or Enquiry Add
            var activeComponentName = _this.nav.getActive().data.component ? _this.nav.getActive().data.component.name : _this.nav.getActive().component.name;
            if (['ContactUsPage', 'EnquiryAddPage'].indexOf(activeComponentName) === -1) {
                _this.hideContactUsLink = false;
            }
        });
        this.global = __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */];
    }
    Object.defineProperty(ReachUsComponent.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: true,
        configurable: true
    });
    ReachUsComponent.prototype.onContactUs = function () {
        var modal = this.modalCtrl.create(this.user.isLoggedIn() ? null : __WEBPACK_IMPORTED_MODULE_2__pages_contact_us_contact_us__["a" /* ContactUsPage */]);
        modal.present();
    };
    ReachUsComponent.prototype.callNumber = function (number) {
        this._callNumber.callNumber(number, true);
    };
    ReachUsComponent.prototype.openEmail = function (email) {
        var _this = this;
        this._emailComposer.isAvailable().then(function (available) {
            if (available) {
                _this._emailComposer.open({
                    to: email,
                    subject: __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */].APP_NAME + ' App Support',
                    body: '',
                    isHtml: true
                });
            }
        });
    };
    return ReachUsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ReachUsComponent.prototype, "address", null);
ReachUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'reach-us',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/components/reach-us/reach-us.html"*/'<ion-row class="footer">\n    <ion-col>\n        <p><span (click)="callNumber(global.support.landline)">Landline: {{global.support.landline}}</span> <br/> <span (click)="callNumber(global.support.mobile)">Mobile:{{global.support.mobile}}</span></p>\n        <p (click)="openEmail(global.support.email)">Email: {{global.support.email}}</p>\n        <p [hidden]="hideContactUsLink">Having trouble? <a href="#" ion-text color="primary" (click)=onContactUs()>Contact Us</a></p>\n        <p [hidden]="!_address" text-wrap>{{global.support.address}}</p>\n    </ion-col>\n</ion-row>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/components/reach-us/reach-us.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
], ReachUsComponent);

//# sourceMappingURL=reach-us.js.map

/***/ })

});
//# sourceMappingURL=11.js.map