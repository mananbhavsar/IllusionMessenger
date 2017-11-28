webpackJsonp([0],{

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(1109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, _user, connection, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this._user = _user;
        this.connection = connection;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.user = null;
        this.client = null;
        this.global = null;
        this.data = {};
        this.global = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Global */];
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._user.getUser().then(function (user) {
            _this.user = user;
        });
    };
    EditProfilePage.prototype.onUpdate = function () {
        var _this = this;
        //getting data for Setup
        this.connection.doPost('JobSeekers/profile/' + this.user.user.id, this.data, 'Updating').then(function (response) {
            _this.events.publish('loading:close');
            _this.viewCtrl.dismiss(response);
        });
    };
    EditProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(null);
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/edit-profile/edit-profile.html"*/'<ion-header>\n  <ion-toolbar ion-text color="primary">\n    <ion-title>\n      Edit Profile\n    </ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n        close\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="login">\n  <ion-grid class="slide_header">\n    <div id="login-box">\n      <ion-list *ngIf="data.JobSeeker">\n        <ion-item>\n          <ion-label color="primary" floating>Mobile Number</ion-label>{{data.JobSeeker.contact_number}}\n          <ion-input type="tel" placeholder="Mobile Number" [(ngModel)]="data.JobSeeker.contact_number"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary">Gender</ion-label>\n          <ion-select [(ngModel)]="data.JobSeeker.gender">\n            <ion-option value="Male">Male</ion-option>\n            <ion-option value="Female">Female</ion-option>\n            <ion-option value="Other">Other</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary">Salary Range</ion-label>\n          <ion-select [(ngModel)]="data.JobSeeker.salary_range_id">\n            <ion-option *ngFor="let id of data.salaryRange | keys" value="{{id}}">{{data.salaryRange[id]}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary">Experience</ion-label>\n          <ion-select [(ngModel)]="data.JobSeeker.experience_id">\n            <ion-option *ngFor="let id of data.experience | keys" value="{{id}}">{{data.experience[id]}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label color="primary">Preferred Work Location</ion-label>\n          <ion-select [(ngModel)]="data.JobSeeker.location_id">\n            <ion-option *ngFor="let id of data.locations | keys" value="{{id}}">{{data.locations[id]}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <button color="button" type="submit" (click)="onUpdate()" ion-button block>Update</button>\n      </ion-list>\n    </div>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=0.js.map