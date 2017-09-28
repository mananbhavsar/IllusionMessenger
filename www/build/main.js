webpackJsonp([9],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */]);
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd;
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return TutorialPage;
}());
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/tutorial/tutorial.html"*/'<ion-header no-border class="intro">\n    <ion-navbar no-border-bottom>\n        <ion-buttons end *ngIf="showSkip">\n            <button ion-button (click)="startApp()" ion-text color="white">Skip</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-slides pager="true" (ionWillChange)="onSlideChangeStart($event)">\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_1.png" class="slide-image"/>\n            </div>\n            <h2 class="slide-title">Welcome to Jobs App</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n            <button ion-button ion-text color="primary" (click)="startApp()">\n                Enrol now\n            </button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_2.png" class="slide-image"/>\n            </div>\n            <h2 class="slide-title">Simplify Sales Process</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n            <button ion-button ion-text color="primary" (click)="startApp()">\n                Enrol now\n            </button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_3.png" class="slide-image"/>\n            </div>\n            <h2 class="slide-title">Get control of sales</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n            <button ion-button ion-text color="primary" (click)="startApp()">\n                Enrol now\n            </button>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_4.png" class="slide-image"/>\n            </div>\n            <h2 class="slide-title">Improve client communication</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n            <button ion-button ion-text color="primary" (click)="startApp()">\n                Continue\n            </button>\n        </ion-slide>\n\n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/tutorial/tutorial.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _b || Object])
], TutorialPage);

var _a, _b;
//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial_tutorial__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, user, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.events = events;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //checking if logged already
        this.user.hasLoggedIn().then(function (user) {
            if (user) {
                _this.events.publish('user:login', user);
            }
            else {
                //checking if Tutorial required
                if (__WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */].tutorial) {
                    //if tutorial seen then sending to Login
                    _this.user.hasTutorialSeen().then(function (seen) {
                        if (seen) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        }
                        else {
                            _this.user.setTutorialSeen(true);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tutorial_tutorial__["a" /* TutorialPage */]);
                        }
                    });
                }
                else {
                    _this.user.setTutorialSeen(true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                }
            }
        });
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/welcome/welcome.html"*/'<ion-content>\n    <div class="flex-center">\n        <img src="assets/img/logo-menu.png" class="menu-logo"/>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		278,
		26
	],
	"../pages/account/account.module": [
		279,
		25
	],
	"../pages/contact-us/contact-us.module": [
		289,
		22
	],
	"../pages/forgot-password/forgot-password.module": [
		291,
		21
	],
	"../pages/help/help.module": [
		281,
		8
	],
	"../pages/home/home.module": [
		307,
		1
	],
	"../pages/login/login.module": [
		282,
		2
	],
	"../pages/logout/logout.module": [
		283,
		7
	],
	"../pages/offline/offline.module": [
		296,
		6
	],
	"../pages/register/register.module": [
		284,
		5
	],
	"../pages/search/search.module": [
		287,
		0
	],
	"../pages/tutorial/tutorial.module": [
		285,
		4
	],
	"../pages/welcome/welcome.module": [
		286,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_connection__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProvider = (function () {
    function UserProvider(events, storage, connection) {
        this.events = events;
        this.storage = storage;
        this.connection = connection;
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.HAS_LOGGED_IN = false;
    }
    UserProvider.prototype.login = function (email, password) {
        var _this = this;
        this.connection.doPost('JobSeekers/login', { email_address: email, password: password }).subscribe(function (response) {
            if (response.flash === 'success') {
                _this.setUser(response.JobSeeker).then(function () {
                    _this.HAS_LOGGED_IN = true;
                    _this.events.publish('user:login', response.JobSeeker);
                });
            }
            else {
                _this.events.publish('loading:close');
                _this.events.publish('alert:basic', 'Login Failed', response.message);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ;
    UserProvider.prototype.logout = function () {
        this.HAS_LOGGED_IN = false;
        this.storage.remove('User');
        this.events.publish('user:logout');
        this.connection.doPost('ClientsUsers/logout', {});
    };
    ;
    UserProvider.prototype.getUser = function () {
        return this.storage.get('User').then(function (user) {
            return user;
        });
    };
    ;
    UserProvider.prototype.setUser = function (User) {
        var _this = this;
        return this.storage.set('User', User).then(function (user) {
            _this.events.publish('user:changed');
            return user;
        });
    };
    ;
    // return a promise
    UserProvider.prototype.hasLoggedIn = function () {
        return this.storage.get('User').then(function (user) {
            return user;
        });
    };
    ;
    UserProvider.prototype.isLoggedIn = function () {
        return this.HAS_LOGGED_IN;
    };
    // return a promise
    UserProvider.prototype.hasTutorialSeen = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value === true;
        });
    };
    ;
    UserProvider.prototype.setTutorialSeen = function (seen) {
        return this.storage.set(this.HAS_SEEN_TUTORIAL, seen);
    };
    UserProvider.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserProvider.prototype.registerPushID = function (push_id) {
        this.connection.doPost('ClientsUsers/registerPush', { push_id: push_id });
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__connection_connection__["a" /* ConnectionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__connection_connection__["a" /* ConnectionProvider */]) === "function" && _c || Object])
], UserProvider);

var _a, _b, _c;
//# sourceMappingURL=user.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnectionProvider = (function () {
    function ConnectionProvider(http, storage, events) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.events.subscribe('user:changed', function (user) {
            _this.storage.get('User').then(function (user) {
                _this.user = user;
            });
        });
        this.events.publish('user:changed');
    }
    ConnectionProvider.prototype.doPost = function (url, data) {
        //adding user info
        if (this.user) {
            data = Object.assign({}, data, {
                user_id: this.user.id,
            });
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */].SERVER_URL + url, JSON.stringify(data), headers).map(function (response) { return response.json(); });
    };
    return ConnectionProvider;
}());
ConnectionProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _c || Object])
], ConnectionProvider);

var _a, _b, _c;
//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
var Global = {
    APP_NAME: 'PromptJobs',
    tutorial: true,
    support: {
        landline: '+91-22-4054 9797',
        mobile: '+91-8693865830',
        email: 'hr@promptpersonnel.com',
        address: '612/613,Palm Spring Centre, Mind Space, New Link Road, Malad (w), Mumbai - 400064',
    },
    OneSignal: {
        key: 'cd693ab4-a4ab-4841-b2d3-db2ea758b216',
        android: '498489911417',
    },
    Rate: {
        show: false,
        ios: '',
        android: ''
    },
    SERVER_URL: 'http://192.168.5.65/prompt_personnel/mobile/',
    CDN: 'https://d3nwpy9993ruf3.cloudfront.net/',
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/account/account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/help/help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutPage = (function () {
    function LogoutPage(navCtrl, navParams, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        this.user.logout();
    };
    return LogoutPage;
}());
LogoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-logout',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/logout/logout.html"*/'<ion-content padding>\n    <center-spinner></center-spinner>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/logout/logout.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]) === "function" && _c || Object])
], LogoutPage);

var _a, _b, _c;
//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_location_accuracy__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_email_composer__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_account_account__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contact_us_contact_us__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_help_help__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_logout_logout__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_offline_offline__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_register_register__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_search_search__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tutorial_tutorial__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_welcome_welcome__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_connection_connection__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_user_user__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_header_header__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_empty_empty__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_reach_us_reach_us__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_center_spinner_center_spinner__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_contact_us_contact_us__["a" /* ContactUsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_logout_logout__["a" /* LogoutPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_offline_offline__["a" /* OfflinePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_32__components_header_header__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_empty_empty__["a" /* EmptyComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_reach_us_reach_us__["a" /* ReachUsComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_center_spinner_center_spinner__["a" /* CenterSpinnerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/offline/offline.module#OfflinePageModule', name: 'OfflinePage', segment: 'offline', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__prompt_jobs_db',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_contact_us_contact_us__["a" /* ContactUsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_logout_logout__["a" /* LogoutPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_offline_offline__["a" /* OfflinePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_welcome_welcome__["a" /* WelcomePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_30__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_31__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_social_sharing__["a" /* SocialSharing */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_location_accuracy__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_us_contact_us__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_help_help__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_logout_logout__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_offline_offline__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tutorial_tutorial__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_user_user__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__global__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var MyApp = (function () {
    function MyApp(events, menu, platform, _statusBar, storage, splashScreen, user, loadingCtrl, alertCtrl, modalCtrl, toast, _network, _oneSignal, _diagnostic, _locationAccuracy, _geolocation, _keyboard) {
        var _this = this;
        this.events = events;
        this.menu = menu;
        this.platform = platform;
        this._statusBar = _statusBar;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.user = user;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this._network = _network;
        this._oneSignal = _oneSignal;
        this._diagnostic = _diagnostic;
        this._locationAccuracy = _locationAccuracy;
        this._geolocation = _geolocation;
        this._keyboard = _keyboard;
        this.loggedIn = false;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */];
        this.latitude = 0.0;
        this.longitude = 0.0;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'About', name: 'AboutPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
            { title: 'Contact', name: 'ContactUsPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_contact_us_contact_us__["a" /* ContactUsPage */], icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Logout', name: 'LogoutPage', component: __WEBPACK_IMPORTED_MODULE_17__pages_logout_logout__["a" /* LogoutPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Register', name: 'RegisterPage', component: __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */], icon: 'person-add' },
            { title: 'Help', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_14__pages_help_help__["a" /* HelpPage */], icon: 'help' },
        ];
        platform.ready().then(function () {
            _this._statusBar.overlaysWebView(false); // let status bar overlay webview
            //            this._statusBar.backgroundColorByHexString(Global.color.primary);
            _this._statusBar.styleDefault();
            splashScreen.hide();
            _this.enableMenu(true);
            _this.listenToGobalEvents();
            _this.listenToLoginEvents();
            _this._keyboard.hideKeyboardAccessoryBar(true);
            //this.initPreLoginPlugins();
        });
    }
    MyApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    MyApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.push(page.name, params);
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
        }
    };
    MyApp.prototype.openTutorial = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_20__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    MyApp.prototype.listenToGobalEvents = function () {
        var _this = this;
        this.events.subscribe('loading:create', function (content) {
            content = content || 'Please wait';
            _this.loading = _this.loadingCtrl.create({
                content: content + '...'
            });
            _this.loading.present();
        });
        this.events.subscribe('loading:close', function () {
            if (_this.loading) {
                _this.loading.dismiss();
            }
        });
        this.events.subscribe('alert:basic', function (title, subTitle, buttons) {
            buttons = buttons || ['OK'];
            var alert = _this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                buttons: buttons
            });
            alert.present();
        });
        this.events.subscribe('toast:create', function (message, cssClass) {
            cssClass = cssClass || null;
            var toast = _this.toast.create({
                message: message,
                duration: 3000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                cssClass: cssClass
            });
            toast.present();
        });
        this.events.subscribe('toast:error', function (error) {
            _this.events.publish('toast:create', 'Error occurred! Try again', 'danger');
        });
        this.events.subscribe('push:send', function (id, message) {
            //             this._oneSignal.postNotification(notificationObj: OneSignalNotification);
        });
        //Network events
        this.events.subscribe('network:offline', function () {
            //sending to offline page only if not in offline 
            var currentPage = _this.nav.getActive().component.name;
            if (currentPage !== 'OfflinePage') {
                _this.events.publish('toast:create', 'you are seems to be offline!');
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_offline_offline__["a" /* OfflinePage */]);
            }
        });
        this.events.subscribe('network:online', function () {
            //sending to home page only in offline page
            var currentPage = _this.nav.getActive().component.name;
            if (currentPage === 'OfflinePage') {
                _this.events.publish('toast:create', 'Hola, you are online');
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_21__pages_welcome_welcome__["a" /* WelcomePage */]);
            }
        });
    };
    MyApp.prototype.initPreLoginPlugins = function () {
        //working on network
        this.doNetworking();
    };
    MyApp.prototype.initPostLoginPlugins = function () {
        //Location
        this.initLocation();
        //OneSignal
        this.initOneSignal();
    };
    MyApp.prototype.doNetworking = function () {
        var _this = this;
        //checking if currently offline
        setTimeout(function () {
            if (_this._network.type === 'none') {
                _this.events.publish('network:offline');
            }
        }, 1000);
        //listening to events
        this._network.onDisconnect().subscribe(function () {
            _this.events.publish('network:offline');
        });
        this._network.onConnect().subscribe(function () {
            _this.events.publish('network:online');
        });
    };
    MyApp.prototype.initWatchLocation = function () {
        var _this = this;
        this.locationSubscription = this._geolocation.watchPosition()
            .subscribe(function (position) {
            if (position.coords != undefined) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
            }
            else { }
        });
    };
    MyApp.prototype.initLocation = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return;
        }
        //checking for Location availability
        this._diagnostic.isLocationEnabled().then(function (enabled) {
            if (enabled) {
                _this.initWatchLocation();
            }
            else {
                var alert = _this.alertCtrl.create({
                    title: 'Location not enabled',
                    message: 'Kindly switch on Location',
                    buttons: [{
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                _this.events.publish('toast:create', 'Location permission cancelled!');
                            }
                        },
                        {
                            text: 'Enable',
                            handler: function () {
                                _this._locationAccuracy.request(_this._locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () {
                                    _this.initWatchLocation();
                                }).catch(function () {
                                });
                            }
                        }
                    ]
                });
                alert.present();
            }
        });
    };
    MyApp.prototype.initOneSignal = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return;
        }
        this._oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_23__global__["a" /* Global */].OneSignal.key, __WEBPACK_IMPORTED_MODULE_23__global__["a" /* Global */].OneSignal.android);
        this._oneSignal.inFocusDisplaying(this._oneSignal.OSInFocusDisplayOption.None);
        this._oneSignal.getIds().then(function (id) {
            //updating user ID
            _this.user.registerPushID(id.userId);
            //setting tags for this user
            _this.user.getUser().then(function (user) {
                _this._oneSignal.sendTags({
                    user_id: user.id,
                    full_name: user.full_name
                });
            });
        });
        this._oneSignal.handleNotificationReceived().subscribe(function (notification) {
            // do something when notification is received
            _this.events.publish('notification:process', notification);
        });
        this._oneSignal.handleNotificationOpened().subscribe(function (notification) {
            // do something when a notification is opened
            _this.events.publish('notification:process', notification);
        });
        this._oneSignal.endInit();
        this.events.subscribe('notification:process', function (notification) {
            var payload = 'payload' in notification ? notification.payload : notification.notification.payload;
            var notificationAlert = _this.alertCtrl.create({
                title: payload.title,
                message: payload.body,
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () {
                            //do we need to open page
                            if ('extra' in payload) {
                                var page = null;
                                switch (page) {
                                    default:
                                        page = __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */];
                                        break;
                                }
                                if (page) {
                                    _this.nav.push(page, payload.extra.params);
                                }
                            }
                        }
                    },
                ]
            });
            notificationAlert.present();
        });
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function (user) {
            _this.loggedIn = true;
            _this.enableMenu(true);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */]);
            setTimeout(function () {
                var full_name = user ? user.full_name : '';
                _this.events.publish('loading:close');
                _this.events.publish('toast:create', 'Welcome ' + full_name);
                _this.initPostLoginPlugins();
                _this.events.publish('user:postLogin', true);
            });
        });
        this.events.subscribe('user:logout', function () {
            _this.loggedIn = false;
            _this.enableMenu(false);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */]);
            setTimeout(function () {
                _this.events.publish('loading:close');
                _this.events.publish('toast:create', 'Bye bye! See you soon');
                _this.events.publish('user:changed');
            });
            if (_this.locationSubscription) {
                _this.locationSubscription.unsubscribe();
                _this.locationSubscription = null;
            }
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/app/app.html"*/'<ion-split-pane>\n\n    <!-- logged out menu -->\n    <ion-menu id="loggedOutMenu" [content]="content">\n\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>Menu</ion-title>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content class="outer-content">\n\n            <ion-list>\n                <ion-list-header>\n                    Navigate\n                </ion-list-header>\n                <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n                        <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n                    {{p.title}}\n                </button>\n            </ion-list>\n\n            <ion-list>\n                <ion-list-header>\n                    Account\n                </ion-list-header>\n                <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n                        <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n                    {{p.title}}\n                </button>\n            </ion-list>\n\n            <ion-list>\n                <ion-list-header>\n                    Tutorial\n                </ion-list-header>\n                <button ion-item menuClose (click)="openTutorial()">\n                        <ion-icon item-start name="hammer"></ion-icon>\n                    Show Tutorial\n                </button>\n            </ion-list>\n        </ion-content>\n\n    </ion-menu>\n\n    <!-- logged in menu -->\n    <ion-menu id="loggedInMenu" [content]="content">\n\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>Menu</ion-title>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content class="outer-content">\n\n            <ion-list>\n                <ion-list-header>\n                    Navigate\n                </ion-list-header>\n                <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n                        <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n                    {{p.title}}\n                </button>\n            </ion-list>\n\n            <ion-list>\n                <ion-list-header>\n                    Account\n                </ion-list-header>\n                <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n                        <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n                    {{p.title}}\n                </button>\n            </ion-list>\n\n            <ion-list>\n                <ion-list-header>\n                    Tutorial\n                </ion-list-header>\n                <button ion-item menuClose (click)="openTutorial()">\n                        <ion-icon item-start name="albums"></ion-icon>\n                    Show Tutorial\n                </button>\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n    <!-- main navigation -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_22__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_22__providers_user_user__["a" /* UserProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_location_accuracy__["a" /* LocationAccuracy */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_location_accuracy__["a" /* LocationAccuracy */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__["a" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__["a" /* Keyboard */]) === "function" && _t || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPage = (function () {
    function ContactUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUsPage');
    };
    return ContactUsPage;
}());
ContactUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact-us',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/contact-us/contact-us.html"*/'<!--\n  Generated template for the ContactUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>contactUs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/contact-us/contact-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ContactUsPage);

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/forgot-password/forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>forgotPassword</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/forgot-password/forgot-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ForgotPasswordPage);

//# sourceMappingURL=forgot-password.js.map

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

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OfflinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfflinePage = (function () {
    function OfflinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OfflinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfflinePage');
    };
    return OfflinePage;
}());
OfflinePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-offline',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/offline/offline.html"*/'<!--\n  Generated template for the OfflinePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>offline</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/offline/offline.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], OfflinePage);

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, connection, user, events) {
        this.navCtrl = navCtrl;
        this.connection = connection;
        this.user = user;
        this.events = events;
        this.global = __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Global */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //checking if logged in
        this.user.hasLoggedIn().then(function (user) {
            //yes
            if (user) {
                _this.initData(null, false);
            }
            else {
                //waiting for login
                _this.events.subscribe('user:postLogin', function (status) {
                    if (status) {
                        _this.initData(null, false);
                    }
                });
            }
        });
    };
    HomePage.prototype.initData = function (event, refresh) {
        var _this = this;
        this.connection.doPost('Dashboard/index', {}).subscribe(function (response) {
            _this.data = response;
            console.log(_this.data);
            _this.data = -1;
            _this.markRefresherComplete(event);
        }, function (error) {
            _this.data = -1;
            _this.markRefresherComplete(event);
        });
    };
    HomePage.prototype.markRefresherComplete = function (refresher) {
        if (refresher) {
            refresher.complete();
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/home/home.html"*/'<ion-header no-border>\n    <header title="Home"></header>\n</ion-header>\n<ion-content padding>\n    <ion-refresher (ionRefresh)="initData($event, true)">\n        <ion-refresher-content\n            pullingIcon="arrow-round-down"\n            pullingText="Pull to refresh"\n            refreshingSpinner="crescent"\n            refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <empty *ngIf="data === -1" title=""></empty>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__["a" /* ConnectionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__["a" /* ConnectionProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_search_search__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = (function () {
    function HeaderComponent(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.cartCounter = null;
        this.ionViewDidEnter();
    }
    HeaderComponent.prototype.ionViewDidEnter = function () {
    };
    Object.defineProperty(HeaderComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_search_search__["a" /* SearchPage */]);
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], HeaderComponent.prototype, "title", null);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'header',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/components/header/header.html"*/'<ion-navbar color="primary">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{_title}}</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="openSearch()">\n                <ion-icon name="ios-search"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-navbar>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/components/header/header.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_search_search__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmptyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EmptyComponent = (function () {
    function EmptyComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this._text = null;
    }
    Object.defineProperty(EmptyComponent.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    EmptyComponent.prototype.openSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_search_search__["a" /* SearchPage */]);
    };
    return EmptyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], EmptyComponent.prototype, "text", null);
EmptyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'empty',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/components/empty/empty.html"*/'<div text-center class="width-full">\n    <ion-row>\n        <ion-col>{{_text}}</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button ion-button color="primary" (click)="openSearch()">Search</button>\n        </ion-col>\n    </ion-row>\n</div>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/components/empty/empty.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]])
], EmptyComponent);

//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CenterSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CenterSpinnerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CenterSpinnerComponent = (function () {
    function CenterSpinnerComponent() {
    }
    return CenterSpinnerComponent;
}());
CenterSpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'center-spinner',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/components/center-spinner/center-spinner.html"*/'<div class="center-loader">\n    <ion-spinner name="dots"></ion-spinner>\n</div>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/components/center-spinner/center-spinner.html"*/,
    }),
    __metadata("design:paramtypes", [])
], CenterSpinnerComponent);

//# sourceMappingURL=center-spinner.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, user, events, modalCtrl) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.login = {};
        this.submitted = false;
        this.global = {};
        this.global = __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */];
    }
    LoginPage.prototype.onForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.onRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        this.events.publish('loading:create', 'Logging you in!');
        this.user.login(this.login.email_address, this.login.password);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/login/login.html"*/'<ion-content class="login">\n    <ion-grid class="slide_header">\n\n        <ion-row>\n            <img class="logo" src="assets/img/logo.png">\n        </ion-row>\n        <ion-row>\n            <div id="login-box">\n                <form>\n                    <ion-list>\n                        <ion-item>\n                            <ion-label ion-text color="primary" floating>Email Address</ion-label>\n                            <ion-input autofocus required [(ngModel)]="login.email_address" #email_address="ngModel" type="email" placeholder="Email Address" name="email_address"></ion-input>\n                        </ion-item> \n                        <ion-item>\n                            <ion-label ion-text color="primary" floating>Password</ion-label>\n                            <ion-input required [(ngModel)]="login.password" #password="ngModel" type="password" placeholder="Password" name="password"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                    <button ion-button block (click)="doLogin()">Log in</button>\n                </form>\n            </div>\n        </ion-row>\n\n        <ion-row>\n            <ion-col text-center>\n                <a class="display-inline" (click)="onForgotPassword()">Forgot Password?</a>\n                <span [hidden]="!global.showRegisterNow">&nbsp; | &nbsp; </span>\n                <a class="display-inline register-now" (click)="onRegister()" [hidden]="!global.showRegisterNow">Register Now</a>\n            </ion-col>\n        </ion-row>\n\n        <img src="assets/img/or.png">\n        <reach-us></reach-us>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/PromptPersonnel/PromptJobs/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map