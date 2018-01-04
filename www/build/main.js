webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, events, formBuilder, modalCtrl) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.events = events;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.submitted = false;
        this.global = {};
        this.global = __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Global */];
        this.loginForm = this.formBuilder.group({
            login_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
    }
    LoginPage.prototype.onForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.onRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        this.user.login(this.loginForm.value.login_name, this.loginForm.value.password);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/login/login.html"*/'<ion-content class="login">\n    <ion-grid class="slide_header">\n\n        <logo></logo>\n        <ion-row>\n            <div id="login-box">\n                <form [formGroup]="loginForm" (ngSubmit)="doLogin()">\n                    <ion-list>\n                        <ion-item>\n                            <ion-label ion-text color="primary" floating>\n                                {{\'LoginPage._login_name_\' | translate}}\n                            </ion-label>\n                            <ion-input formControlName="login_name" autofocus required type="text" [placeholder]="\'LoginPage._login_name_\' | translate" name="login_name"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label ion-text color="primary" floating>\n                                {{\'LoginPage._password_\' | translate}}\n                            </ion-label>\n                            <ion-input required formControlName="password" type="password" [placeholder]="\'LoginPage._password_\' | translate" name="password"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                    <button ion-button block type="submit" [disabled]="!loginForm.valid">\n                        {{\'LoginPage._log_in\' | translate}}\n                    </button>\n                </form>\n            </div>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-col text-center class="inline-links">\n                <a class="display-inline" (click)="onForgotPassword()">\n                    {{\'LoginPage._Forgot_Password\' | translate}}\n                </a>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 1094:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfflinePage = /** @class */ (function () {
    function OfflinePage(network, navCtrl) {
        this.network = network;
        this.navCtrl = navCtrl;
    }
    OfflinePage.prototype.ionViewDidLoad = function () {
    };
    OfflinePage.prototype.checkForInternet = function (refresher) {
        if (this.network.type === 'none') {
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__welcome_welcome__["a" /* WelcomePage */]);
        }
        if (refresher) {
            refresher.complete();
        }
    };
    OfflinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-offline',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/offline/offline.html"*/'<ion-content>\n        <ion-refresher (ionRefresh)="checkForInternet($event)">\n                <ion-refresher-content pullingIcon="arrow-round-down" pullingText="Pull to refresh" refreshingSpinner="crescent" refreshingText="checking connectivity...">\n                </ion-refresher-content>\n            </ion-refresher>\n  <ion-grid class="slide_header">\n      <ion-row>\n          <ion-col text-center class="content">\n              <ion-icon name="ios-wifi-outline" ion-text color="primary"></ion-icon>\n              <p padding-horizontal>Kindly connect to Internet to experience wonder of the App</p>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/offline/offline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
    ], OfflinePage);
    return OfflinePage;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_badge__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_globalization__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_case_status_case_status__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_communication_communication__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_help_help__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_logout_logout__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_pickup_pickup__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_forgot_password_forgot_password__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tutorial_tutorial__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_welcome_welcome__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ngx_translate_core__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
var MyApp = /** @class */ (function () {
    function MyApp(events, menu, platform, _statusBar, storage, splashScreen, user, loadingCtrl, alertCtrl, modalCtrl, toast, _network, _diagnostic, _keyboard, _badge, angularFireDatabase, _oneSignal, translate, globalization) {
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
        this._diagnostic = _diagnostic;
        this._keyboard = _keyboard;
        this._badge = _badge;
        this.angularFireDatabase = angularFireDatabase;
        this._oneSignal = _oneSignal;
        this.translate = translate;
        this.globalization = globalization;
        this.inBackgroud = false;
        this.loggedIn = false;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_23__pages_welcome_welcome__["a" /* WelcomePage */];
        this.lastOfflineMessageShown = 0;
        this.latitude = 0.0;
        this.longitude = 0.0;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            // { title: 'About', translate_key: 'Common._About', name: 'AboutPage', component: AboutPage, icon: 'information-circle' },
            { title: 'Help', translate_key: 'Common._Help_', name: 'HelpPage', component: __WEBPACK_IMPORTED_MODULE_16__pages_help_help__["a" /* HelpPage */], icon: 'help-circle' },
        ];
        this.loggedInPages = [
            { title: 'Home', translate_key: 'HomeScreen._Home_', name: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Dashboard', translate_key: 'HomeScreen._Dashboard_', name: 'DashboardPage', component: __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: '' },
            { title: 'Pickup', translate_key: 'HomeScreen._PickUp_', name: 'PickupPage', component: __WEBPACK_IMPORTED_MODULE_20__pages_pickup_pickup__["a" /* PickupPage */], icon: '' },
            { title: 'Case Status', translate_key: 'HomeScreen._CaseStatus_', name: 'CaseStatusPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_case_status_case_status__["a" /* CaseStatusPage */], icon: '' },
            { title: 'Communication', translate_key: 'HomeScreen._Communication_', name: 'CommunicationPage', component: __WEBPACK_IMPORTED_MODULE_14__pages_communication_communication__["a" /* CommunicationPage */], icon: '' },
        ];
        this.accountPages = [
            { title: 'Account', translate_key: 'Common._Account_', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */], icon: 'user' },
            { title: 'Logout', translate_key: 'Common._LogOut_', name: 'LogoutPage', component: __WEBPACK_IMPORTED_MODULE_19__pages_logout_logout__["a" /* LogoutPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', translate_key: 'LoginPage._log_in', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Forgot Password', translate_key: 'LoginPage._Forgot_Password', name: 'ForgotPasswordPage', component: __WEBPACK_IMPORTED_MODULE_21__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */], icon: 'key' },
        ];
        //mubass
        this.error_translate = 'Error occurred! Try again';
        this.offline_translate = 'You seems to be offline';
        this.online_translate = 'Hola, you are online now';
        this.welcome_translate = 'Welcome';
        this.ok_translate = 'Ok';
        this.loading_translate = 'loading';
        this.cancel_translate = 'Cancel';
        this.alert_translate = 'Alert';
        this.logout_message_translate = 'Are you sure, you want to logout?';
        this.translate.setDefaultLang('en');
        platform.ready().then(function () {
            _this._statusBar.overlaysWebView(false); // let status bar overlay webview
            _this._statusBar.backgroundColorByHexString(__WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].color.primary);
            splashScreen.hide();
            _this.enableMenu(false);
            _this.listenToGobalEvents();
            _this.listenToLoginEvents();
            _this._keyboard.hideKeyboardAccessoryBar(false);
            _this._keyboard.disableScroll(false);
            setTimeout(function () {
                _this.initPreLoginPlugins();
                // this.connectSocket();
            }, 500);
        });
    }
    MyApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        //not opening if same page
        if (page.name === __WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].getActiveComponentName(this.nav.getActive())) {
            return true;
        }
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
            //checking if logging out and need to ask for confirmation
            if (page.name === 'LogoutPage') {
                var logoutConfirmation = this.alertCtrl.create({
                    title: this.alert_translate,
                    message: this.logout_message_translate,
                    buttons: [{
                            text: this.cancel_translate,
                            role: 'cancel'
                        }, {
                            text: this.ok_translate,
                            handler: function () {
                                _this.nav.push(page.name, params);
                            }
                        }]
                });
                logoutConfirmation.present();
            }
            else {
                // Set the root of the nav with params if it's a tab index
                this.nav.push(page.name, params);
            }
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
        }
    };
    MyApp.prototype.openTutorial = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_22__pages_tutorial_tutorial__["a" /* TutorialPage */]);
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
        if (__WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].getActiveComponentName(this.nav.getActive()) === page.name) {
            return 'primary';
        }
        return;
    };
    /**
     * checking post login if user is Authorized to access this page
     * @param page
     */
    MyApp.prototype.isAuthorized = function (page) {
        if (this.user && this.user._user) {
            //for LoginTypeID 3
            if (this.user._user.LoginTypeID === __WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].LoginType.Group) {
                //for dashboard
                return ['DashboardPage', 'PickupPage'].indexOf(page.name) === -1;
            }
            return true;
        }
        return false;
    };
    MyApp.prototype.doTranslate = function () {
        var _this = this;
        //error
        this.translate.get('Common._ErrorOccurred_').subscribe(function (translated) {
            _this.error_translate = translated;
        });
        //offline
        this.translate.get('Common._Offline_').subscribe(function (translated) {
            _this.offline_translate = translated;
        });
        //online
        this.translate.get('Common._Online_').subscribe(function (translated) {
            _this.online_translate = translated;
        });
        //welcome
        this.translate.get('Common._Welcome_').subscribe(function (translated) {
            _this.welcome_translate = translated;
        });
        //ok
        this.translate.get('Common._OK_').subscribe(function (translated) {
            _this.ok_translate = translated;
        });
        //cancel
        this.translate.get('Common._Cancel_').subscribe(function (translated) {
            _this.cancel_translate = translated;
        });
        //alert
        this.translate.get('Common._Alert_').subscribe(function (translated) {
            _this.alert_translate = translated;
        });
        //logout message
        this.translate.get('Logout._LogoutMessage_').subscribe(function (translated) {
            _this.logout_message_translate = translated;
        });
        //loading
        this.translate.get('Common._Loading_').subscribe(function (translated) {
            _this.loading_translate = translated;
        });
    };
    MyApp.prototype.listenToGobalEvents = function () {
        var _this = this;
        this.doTranslate();
        this.events.subscribe('loading:create', function (content) {
            content = content || _this.loading_translate;
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
            if (title.trim() === '' || subTitle.trim() === '') {
                return;
            }
            buttons = buttons || [_this.ok_translate]; //OK
            var alert = _this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                buttons: buttons
            });
            alert.present();
        });
        this.events.subscribe('toast:create', function (message, cssClass) {
            cssClass = cssClass || null;
            if (message.trim() === '') {
                return;
            }
            var toast = _this.toast.create({
                message: message,
                duration: 5000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                cssClass: cssClass
            });
            toast.present();
        });
        this.events.subscribe('toast:error', function (error) {
            if (error === null) {
                return;
            }
            if (typeof error === 'string') {
                _this.events.publish('toast:create', error, 'danger');
            }
            else if ([404].indexOf(error.status) > -1) {
                _this.events.publish('toast:create', error.status + ': ' + error.statusText, 'danger');
            }
            else if (error._body) {
                var body = error._body ? error._body : JSON.parse(error._body);
                _this.events.publish('alert:basic', body.title, body.message);
            }
            else {
                _this.events.publish('toast:create', _this.error_translate, 'danger');
            }
        });
        this.events.subscribe('push:send', function (id, message) {
        });
        //Network events
        this.events.subscribe('network:offline', function () {
            var time = new Date().getTime();
            console.log(time, _this.lastOfflineMessageShown);
            if ((time - _this.lastOfflineMessageShown) < 1000) {
                return;
            }
            _this.lastOfflineMessageShown = time;
            //sending to offline page only if not in offline 
            var currentPage = __WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].getActiveComponentName(_this.nav.getActive());
            if (currentPage !== 'OfflinePage') {
                _this.events.publish('toast:create', _this.offline_translate + '!');
                //this.nav.setRoot(OfflinePage);
            }
        });
        this.events.unsubscribe('network:online');
        this.events.subscribe('network:online', function () {
            //sending to home page only in offline page
            //var currentPage = Global.getActiveComponentName(this.nav.getActive());
            //if (currentPage === 'OfflinePage') {
            _this.events.publish('toast:create', _this.online_translate);
            //this.nav.setRoot(WelcomePage, true);
            //}
        });
    };
    MyApp.prototype.initPreLoginPlugins = function () {
        var _this = this;
        //working on network
        this.doNetworking();
        //On app Resume & Pause
        this.platform.resume.subscribe(function () {
            _this.inBackgroud = false;
            _this.events.publish('platform:onResumed');
        });
        this.platform.pause.subscribe(function () {
            _this.inBackgroud = true;
            _this.events.publish('platform:onPause');
        });
        //working on OS Version
        this.doVersionCheck();
        //do globalization
        this.doGlobalization();
    };
    MyApp.prototype.initPostLoginPlugins = function () {
        //init FCM
        if (__WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].Push.FCM) {
        }
        //init OneSignal
        if (__WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].Push.OneSignal) {
            this.initOneSignal();
        }
        //Badge
        this.initBadge();
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
    MyApp.prototype.doVersionCheck = function () {
        this.user.doVersionCheck();
    };
    MyApp.prototype.doGlobalization = function () {
        if (this.platform.is('cordova')) {
            this.globalization.getPreferredLanguage().then(function (language) {
                console.log(language);
            });
        }
        else {
        }
    };
    MyApp.prototype.openNotificationPage = function (payload) {
        //do we need to open page
        if (payload.additionalData && payload.additionalData.page) {
            var page = null;
            switch (payload.additionalData.page) {
                case 'ChatPage':
                    page = __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */];
                    break;
                default:
                    page = __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */];
                    break;
            }
            if (page) {
                this.nav.push(page, payload.additionalData.params);
            }
        }
    };
    MyApp.prototype.processNotification = function (notification, directOpenPage) {
        var _this = this;
        var payload = 'payload' in notification ? notification.payload : notification.notification.payload;
        console.log(payload, directOpenPage);
        //showing notification  alert if not chatting else giving control to Caht module to handle it
        var currentPage = __WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].getActiveComponentName(this.nav.getActive());
        if (currentPage === 'ChatPage') {
            this.events.publish('notification:chat', payload);
        }
        else if (directOpenPage && payload.additionalData && payload.additionalData.page) {
            this.openNotificationPage(payload);
        }
        else {
            var closeText = 'x';
            if (payload.additionalData && payload.additionalData.page) {
                if (payload.additionalData.page === 'ChatPage') {
                    closeText = 'open';
                }
            }
            var notificationToast = this.toast.create({
                message: payload.body,
                duration: 5000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: closeText,
                cssClass: ''
            });
            notificationToast.onDidDismiss(function (data, role) {
                if (role === 'close') {
                    _this.openNotificationPage(payload);
                }
            });
            notificationToast.present();
        }
    };
    MyApp.prototype.initOneSignal = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return;
        }
        this._oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].OneSignal.key, __WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].OneSignal.android);
        this._oneSignal.inFocusDisplaying(this._oneSignal.OSInFocusDisplayOption.None);
        this._oneSignal.getIds().then(function (id) {
            //registering user
            _this._oneSignal.setSubscription(true);
            //updating user ID
            _this.events.subscribe('user:ready', function (response) {
                _this.user.registerPushID(id.userId);
            });
            //setting tags for this user
            _this.user.getUser().then(function (user) {
                _this._oneSignal.sendTags({
                    user_id: user.id,
                    name: user.Customer
                });
            });
        });
        this._oneSignal.handleNotificationReceived().subscribe(function (notification) {
            // do something when notification is received
            _this.processNotification(notification, false);
        });
        this._oneSignal.handleNotificationOpened().subscribe(function (notification) {
            // do something when a notification is opened
            _this.processNotification(notification, true);
        });
        this._oneSignal.endInit();
    };
    MyApp.prototype.initBadge = function () {
        var _this = this;
        this.user.getUser().then(function (user) {
            _this.angularFireDatabase.object('Badge/' + user.id + '/Total').snapshotChanges().subscribe(function (snapshot) {
                var total = snapshot.payload.val();
                console.log('total:' + total);
                if (total) {
                    _this._badge.set(total);
                }
                else {
                    _this._badge.clear();
                }
            });
        });
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function (user) {
            _this.loggedIn = true;
            _this.enableMenu(true);
            if (__WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].Push.OneSignal) {
                _this._oneSignal.setSubscription(true);
            }
            _this.translate.use(user.MyLanguage);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */]);
            setTimeout(function () {
                var full_name = user ? user.Customer : '';
                _this.events.publish('toast:create', _this.welcome_translate + ' ' + full_name);
                _this.initPostLoginPlugins();
                _this.events.publish('user:changed');
                _this.events.publish('user:postLogin', true);
            });
        });
        this.events.subscribe('user:logout', function (logoutMessage) {
            _this.loggedIn = false;
            _this.enableMenu(false);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */]);
            setTimeout(function () {
                _this.events.publish('toast:create', logoutMessage);
                _this.events.publish('user:changed');
                _this.events.publish('user:postLogout', true);
            });
            _this._badge.clear();
        });
        this.events.subscribe('user:unautharized', function () {
            _this.events.publish('user:logout', 'You are unauthorized user');
            if (__WEBPACK_IMPORTED_MODULE_25__global__["a" /* Global */].Push.OneSignal) {
                _this._oneSignal.setSubscription(false);
            }
        });
        //checking if user already logged in
        this.user.hasLoggedIn().then(function (user) {
            if (user) {
                _this.events.publish('user:login', user);
            }
        });
    };
    //remove in next version
    MyApp.prototype.connectSocket = function () {
        // this.socket = io("https://illusion-chat-server.herokuapp.com/");
        // this.socket.on('connect', () => {
        //     console.log('Connected');
        // });
        // this.socket.on('disconnect', () => {
        //     console.log('Disconnected');
        // });
        // //listening to events
        // this.socket.on('updateCount', (response) => {
        //     this.events.publish('socket:updateCount', response);
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/app/app.html"*/'<ion-split-pane when="(min-width: 1025px)">\n\n    <!-- logged out menu -->\n    <ion-menu id="loggedOutMenu" [content]="content">\n\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>\n                    {{\'Common._Menu_\' | translate}}\n                </ion-title>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content class="outer-content">\n\n            <ion-list>\n                <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n                    <!-- <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n                    {{p.translate_key | translate}}\n                </button>\n            </ion-list>\n\n            <ion-list>\n                <ion-list-header>\n                    <!-- {{\'Common._AboutApp_\' | translate}} -->\n                </ion-list-header>\n                <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n                    <!-- <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n                    {{p.translate_key | translate}}\n                </button>\n            </ion-list>\n        </ion-content>\n\n    </ion-menu>\n\n    <!-- logged in menu -->\n    <ion-menu id="loggedInMenu" [content]="content">\n\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>\n                    {{\'Common._Menu_\' | translate}}\n                </ion-title>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content class="outer-content">\n\n            <ion-list>\n                <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)" [hidden]="!isAuthorized(p)">\n                    <!-- <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n                    {{p.translate_key | translate}}\n                </button>\n            </ion-list>\n\n            <!-- <ion-list>\n                <ion-list-header>\n                    Account\n                </ion-list-header>\n                <button ion-item menuClose *ngFor="let p of accountPages" (click)="openPage(p)">\n                    <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon>\n                    {{p.translate_key | translate}}\n                </button>\n            </ion-list> -->\n\n            <ion-list>\n                <!-- <ion-list-header>\n                    {{\'Common._AboutApp_\' | translate}}\n                </ion-list-header> -->\n                <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n                    <!-- <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n                    {{p.translate_key | translate}}\n                </button>\n                <button ion-item menuClose *ngFor="let p of accountPages" (click)="openPage(p)">\n                    <!-- <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n                    {{p.translate_key | translate}}\n                </button>\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n    <!-- main navigation -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_24__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_badge__["a" /* Badge */],
            __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_27__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_globalization__["a" /* Globalization */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseTransactionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseTransactionProvider = /** @class */ (function () {
    function FirebaseTransactionProvider() {
    }
    FirebaseTransactionProvider.prototype.doTransaction = function (transations) {
        return new Promise(function (resolve, reject) {
            if (!__WEBPACK_IMPORTED_MODULE_1_underscore__["isEmpty"](transations)) {
                var processed = 0;
                console.log(transations);
                transations.forEach(function (object) {
                    var value = null;
                    if (object.Value !== null) {
                        value = object.Value;
                    }
                    if (object.ValueStr !== null) {
                        value = object.ValueStr;
                    }
                    if (value !== null) {
                        var path = object.Path;
                        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref(path).set(value).then(function (result) {
                            processed++;
                            if (processed === transations.length) {
                                resolve(true);
                            }
                        });
                    }
                    else {
                        processed++;
                        if (processed === transations.length) {
                            resolve(true);
                        }
                    }
                });
            }
            else {
                reject('Empty');
            }
        });
    };
    FirebaseTransactionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FirebaseTransactionProvider);
    return FirebaseTransactionProvider;
}());

//# sourceMappingURL=firebase-transaction.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial_tutorial__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, user, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.events = events;
        this.sendToHomeFlag = false;
        this.sendToHomeFlag = this.navParams.data === true;
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //checking if logged already
        this.user.hasLoggedIn().then(function (user) {
            if (user) {
                if (_this.sendToHomeFlag) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }
            }
            else {
                //checking if Tutorial required
                if (__WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Global */].tutorial) {
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
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/welcome/welcome.html"*/'<ion-content>\n    <div class="flex-center">\n        <img src="assets/img/logo-menu.png" class="menu-logo"/>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_empty__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reach_us_reach_us__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__center_spinner_center_spinner__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__refresh_refresh__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logo_logo__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__or_or__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_bar_progress_bar__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__call_fab_call_fab__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_bubble_chat_bubble__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_img_viewer__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__empty_empty__["a" /* EmptyComponent */],
                __WEBPACK_IMPORTED_MODULE_4__reach_us_reach_us__["a" /* ReachUsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__center_spinner_center_spinner__["a" /* CenterSpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__refresh_refresh__["a" /* RefreshComponent */],
                __WEBPACK_IMPORTED_MODULE_8__logo_logo__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__or_or__["a" /* OrComponent */],
                __WEBPACK_IMPORTED_MODULE_10__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__call_fab_call_fab__["a" /* CallFabComponent */],
                __WEBPACK_IMPORTED_MODULE_12__chat_bubble_chat_bubble__["a" /* ChatBubbleComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_13_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__empty_empty__["a" /* EmptyComponent */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__reach_us_reach_us__["a" /* ReachUsComponent */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__center_spinner_center_spinner__["a" /* CenterSpinnerComponent */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__header_header__["a" /* HeaderComponent */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__refresh_refresh__["a" /* RefreshComponent */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__logo_logo__["a" /* LogoComponent */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__or_or__["a" /* OrComponent */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_10__progress_bar_progress_bar__["a" /* ProgressBarComponent */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_11__call_fab_call_fab__["a" /* CallFabComponent */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_12__chat_bubble_chat_bubble__["a" /* ChatBubbleComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__empty_empty__["a" /* EmptyComponent */],
                __WEBPACK_IMPORTED_MODULE_4__reach_us_reach_us__["a" /* ReachUsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__center_spinner_center_spinner__["a" /* CenterSpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__refresh_refresh__["a" /* RefreshComponent */],
                __WEBPACK_IMPORTED_MODULE_8__logo_logo__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__or_or__["a" /* OrComponent */],
                __WEBPACK_IMPORTED_MODULE_10__progress_bar_progress_bar__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__call_fab_call_fab__["a" /* CallFabComponent */],
                __WEBPACK_IMPORTED_MODULE_12__chat_bubble_chat_bubble__["a" /* ChatBubbleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["b" /* TranslateModule */],
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonProvider = /** @class */ (function () {
    function CommonProvider(file, platform, events) {
        this.file = file;
        this.platform = platform;
        this.events = events;
        this.isIOS = false;
        this.isAndroid = false;
        this.isCordova = false;
        this.isIOS = this.platform.is('ios');
        this.isAndroid = this.platform.is('android');
        this.isCordova = this.platform.is('cordova');
    }
    CommonProvider.prototype.getDataDirectory = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isCordova) {
                if (_this.isAndroid) {
                    //creating folder
                    _this.file.createDir(_this.file.externalRootDirectory, __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Global */].APP_NAME, false).then(function (entry) {
                        resolve(_this.file.externalRootDirectory + __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Global */].APP_NAME + '/');
                    }).catch(function (error) {
                        if (error.code === 12) {
                            resolve(_this.file.externalRootDirectory + __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Global */].APP_NAME + '/');
                        }
                        else {
                            reject(error);
                        }
                    });
                }
                else {
                    resolve(_this.file.dataDirectory);
                }
            }
            else {
                resolve(_this.file.dataDirectory);
            }
        });
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_transaction_firebase_transaction__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__case_status_modal_case_status_modal__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CaseStatusPage = /** @class */ (function () {
    function CaseStatusPage(navCtrl, offliceList, events, connection, modalCtrl, _firebaseTransaction, _network, _storage, alertCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.offliceList = offliceList;
        this.events = events;
        this.connection = connection;
        this.modalCtrl = modalCtrl;
        this._firebaseTransaction = _firebaseTransaction;
        this._network = _network;
        this._storage = _storage;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.title = 'loading';
        this.status = {
            'All': { label: 'All', color: 'danger' },
            'In Process': { label: 'In Process', color: 'danger' },
            'Job Delivered': { label: 'Ready To Deliver', color: 'danger' },
            'Job Dispatched': { label: 'Dispatched', color: 'secondary' }
        };
        this.selectedOffice = {};
        this.selectedCustomerBranchID = null;
        this.global = null;
        this.selectedTab = 'All';
        this.page = 0;
        this.items = [];
        this.itemImpressions = [];
        this.itemsSearchCopy = [];
        this.offlineItems = {};
        this.searchText = '';
        this.showSearchBar = true;
        this.loginType = 0;
        this.hasInternet = true;
        this.case_status = 'Case Status';
        this.not_availble_in_offline_translate = 'Not available in Offline';
        this.global = __WEBPACK_IMPORTED_MODULE_9__app_global__["a" /* Global */];
        this.loginType = this.connection.user.LoginTypeID;
        this.hasInternet = this._network.type !== 'none';
        this.events.subscribe('network:online', function () {
            _this.hasInternet = true;
        });
        this.events.subscribe('network:offline', function () {
            _this.hasInternet = false;
        });
    }
    CaseStatusPage.prototype.doTranslate = function () {
        var _this = this;
        //loading
        this.translate.get('Common._Loading_').subscribe(function (translated) {
            if (_this.title === 'loading') {
                _this.title = translated;
            }
        });
        //case staus
        this.translate.get('CaseStatus._CaseStatus').subscribe(function (translated) {
            _this.case_status = translated;
        });
        //all
        this.translate.get('CaseStatus._All_').subscribe(function (translated) {
            _this.status['All'].label = translated;
        });
        //In Process
        this.translate.get('CaseStatus._InProcess_').subscribe(function (translated) {
            _this.status['In Process'].label = translated;
        });
        //Job Delivered
        this.translate.get('CaseStatus._ReadyToDeliver_').subscribe(function (translated) {
            _this.status['Job Delivered'].label = translated;
        });
        //Job Dispatched
        this.translate.get('CaseStatus._Dispatched').subscribe(function (translated) {
            _this.status['Job Dispatched'].label = translated;
        });
        //Not Available in Offline
        this.translate.get('ChatScreen._NotAvailableOffline_').subscribe(function (translated) {
            _this.not_availble_in_offline_translate = translated;
        });
    };
    CaseStatusPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.doTranslate();
        if (__WEBPACK_IMPORTED_MODULE_8_underscore__["isEmpty"](this.selectedOffice)) {
            this.offliceList.getOffice('CaseStatus').then(function (selectedOffice) {
                _this.selectedOffice = selectedOffice;
                if (_this.selectedOffice) {
                    _this.selectedCustomerBranchID = _this.selectedOffice.CustomerBranchID;
                    _this.setTitle();
                    _this.initOffline();
                }
                _this.initData().then(function (response) { }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function (error) {
                console.log(error);
                if (error !== null) {
                    _this.events.publish('toast:error', error);
                }
                _this.navCtrl.popToRoot();
            });
        }
    };
    CaseStatusPage.prototype.initData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.hasInternet) {
                setTimeout(function () {
                    _this.connection.doPost('CaseSearch/CaseSearchBy', {
                        JobEntryNo: null,
                        ReferenceEntryNo: null,
                        Patient: null,
                        BranchID: _this.selectedCustomerBranchID,
                        DoctorID: 0,
                        Status: "",
                        DisablePaging: false,
                        PageNumber: _this.page,
                        RowsPerPage: 500,
                        SortDetails: null,
                        DateRange: null,
                    }, _this.items.length === 0).then(function (response) {
                        var data = response.Data;
                        for (var i = 0; i < data.length; i++) {
                            _this.pushItem(data[i], true);
                        }
                        _this.saveOfflineData();
                        _this.page = -1; //make it ++ in paging
                        //now doing firebase transaction
                        _this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(function (status) {
                            resolve(data.length);
                        }).catch(function (error) {
                            resolve(data.length);
                        });
                    }).catch(function (error) {
                        _this.page = -1;
                        reject(error);
                    });
                });
            }
            else {
                reject(false);
            }
        });
    };
    CaseStatusPage.prototype.segmentChanged = function (event) {
        this.selectedTab = event.value;
        this.setTitle();
        this.scrollToTop();
    };
    CaseStatusPage.prototype.setTitle = function () {
        this.title = this.case_status + ': ' + this.status[this.selectedTab].label;
    };
    CaseStatusPage.prototype.scrollToTop = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.resize) {
                _this.content.resize();
            }
            if (_this.content.scrollToTop) {
                _this.content.scrollToTop();
            }
        });
    };
    CaseStatusPage.prototype.getStatusColor = function (status) {
        return this.status[status].color;
    };
    CaseStatusPage.prototype.getStatusLabel = function (status) {
        return this.status[status].label;
    };
    CaseStatusPage.prototype.doInfinite = function (paginator) {
        if (this.hasInternet) {
            this.initData().then(function (response) {
                paginator.complete();
            }).catch(function (error) {
                paginator.enable(false);
            });
        }
        else {
            paginator.enable(false);
            this.events.subscribe('network:online', function () {
                if (paginator) {
                    paginator.enable(true);
                }
            });
        }
    };
    CaseStatusPage.prototype.onCancel = function (event) {
        this.items = this.itemsSearchCopy;
    };
    CaseStatusPage.prototype.isHidden = function (status) {
        if (this.selectedTab === 'All') {
            return false;
        }
        return status !== this.selectedTab;
    };
    CaseStatusPage.prototype.openCase = function (item, index) {
        this.setIsNew(item, index);
        //only for Dispatched
        if (item.Status === 'Job Dispatched') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__case_status_modal_case_status_modal__["a" /* CaseStatusModalPage */], item);
            modal.onDidDismiss(function (data) {
            });
            modal.present();
        }
    };
    CaseStatusPage.prototype.getItems = function (searchText) {
        var fields = ['Doctor', 'ImpressionNo', 'ReferenceEntryNo', 'Patient'];
        // Reset items back to all of the items
        this.items = this.itemsSearchCopy;
        // if the value is an empty string don't filter the items
        if (searchText && searchText.trim() != '') {
            //lowercase 
            searchText = searchText.toLowerCase();
            this.items = this.items.filter(function (item) {
                for (var i = 0; i < fields.length; i++) {
                    if (item[fields[i]].toLowerCase().indexOf(searchText) > -1) {
                        return true;
                    }
                }
                return false;
            });
        }
    };
    CaseStatusPage.prototype.headerButtonClicked = function (event) {
        if (event.icon === 'search') {
            this.showSearchBar = !this.showSearchBar;
            this.scrollToTop();
            this.selectedTab = 'All';
        }
    };
    CaseStatusPage.prototype.pushItem = function (item, addToOffline) {
        if (addToOffline === void 0) { addToOffline = true; }
        //converting impressDate to timeinmili
        item['ImpressionDateInMili'] = new Date(item.ImpressionDateTime).getTime();
        var impressionNo = item.ImpressionNo;
        var index = this.itemImpressions.indexOf(impressionNo);
        if (index === -1) {
            index = this.items.push(item);
            //making copy for search
            this.itemsSearchCopy.push(item);
            //adding impression
            this.itemImpressions.push(impressionNo);
        }
        else {
            this.items[index] = item;
            //making copy for search
            this.itemsSearchCopy[index] = item;
        }
        //adding to Offline
        if (addToOffline) {
            this.addToOffline(item);
        }
        return index;
    };
    CaseStatusPage.prototype.initOffline = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._storage.get('OfflineCaseStatus').then(function (caseStatus) {
                if (__WEBPACK_IMPORTED_MODULE_8_underscore__["isEmpty"](caseStatus)) {
                    caseStatus = {};
                }
                //checking if this office is set
                if (!(_this.selectedCustomerBranchID in caseStatus)) {
                    caseStatus[_this.selectedCustomerBranchID] = {};
                }
                _this.offlineItems = caseStatus[_this.selectedCustomerBranchID];
                //init List
                for (var key in _this.offlineItems) {
                    _this.pushItem(_this.offlineItems[key], false);
                }
                //saveOffline
                _this.saveOfflineData().then(function (status) {
                    resolve(status);
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    CaseStatusPage.prototype.addToOffline = function (item) {
        this.offlineItems[item.ImpressionNo] = item;
    };
    CaseStatusPage.prototype.saveOfflineData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._storage.get('OfflineCaseStatus').then(function (caseStatus) {
                if (__WEBPACK_IMPORTED_MODULE_8_underscore__["isEmpty"](caseStatus)) {
                    caseStatus = {};
                }
                //checking if this office is set
                if (!(_this.selectedCustomerBranchID in caseStatus)) {
                    caseStatus[_this.selectedCustomerBranchID] = {};
                }
                caseStatus[_this.selectedCustomerBranchID] = _this.offlineItems;
                _this._storage.set('OfflineCaseStatus', caseStatus).then(function (status) {
                    resolve(status);
                }).catch(function (error) {
                    reject(error);
                });
            });
        });
    };
    CaseStatusPage.prototype.setIsNew = function (item, index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (item.IsNew) {
                item.IsNew = 0;
                _this.items[index].IsNew = 0;
                _this.offlineItems[item.ImpressionNo].IsNew = 0;
                _this.saveOfflineData().then(function (status) {
                    resolve(status);
                }).catch(function (error) {
                    reject(error);
                });
            }
            else {
                resolve(true);
            }
        });
    };
    CaseStatusPage.prototype.openChat = function (item, index, event) {
        var _this = this;
        //stopping propogaton
        event.preventDefault();
        event.stopPropagation();
        if (item.TicketNo && item.TicketNo !== '') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], item.TicketNo);
        }
        else {
            //checking if offline
            if (this.hasInternet) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Alert',
                    message: item.PopupMessage,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                            }
                        },
                        {
                            text: 'Ok',
                            handler: function () {
                                _this.connection.doPost('Communication/InitiateChat', {
                                    ImpNo: item.ImpressionNo
                                }, true).then(function (response) {
                                    var data = response.Data[0];
                                    item.TicketNo = data.TicketNo;
                                    _this.items[index].TicketNo = data.TicketNo;
                                    _this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(function (status) {
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], data.TicketNo);
                                    }).catch(function (error) {
                                        console.log(error);
                                        if (error === 'Empty') {
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], data.TicketNo);
                                        }
                                    });
                                }).catch(function (error) {
                                    console.log(error);
                                });
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                this.events.publish('toast:error', this.not_availble_in_offline_translate);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], CaseStatusPage.prototype, "content", void 0);
    CaseStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-case-status',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/case-status/case-status.html"*/'<ion-header no-border>\n    <header [title]="title" [buttons]="[{icon:\'search\'}]" (buttonClicked)="headerButtonClicked($event)"></header>\n    <div [hidden]="selectedOffice === {}" class="office">{{selectedOffice.CustomerName}}</div>\n    <ion-searchbar [placeholder]="\'Common._Search_\' | translate" [hidden]="showSearchBar" [(ngModel)]="searchText" (ionInput)="getItems(searchText)"\n        showCancelButton="true" (ionCancel)="onCancel()">\n    </ion-searchbar>\n    <ion-segment padding mode="ios" [(ngModel)]="selectedTab" color="casestatus" (ionChange)="segmentChanged($event)">\n        <ion-segment-button value="In Process">\n            {{\'CaseStatus._InProcess_\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="Job Delivered">\n            {{\'CaseStatus._RTD_\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="Job Dispatched">\n            {{\'CaseStatus._Dispatched\' | translate}}\n        </ion-segment-button>\n        <ion-segment-button value="All">\n            {{\'CaseStatus._All_\' | translate}}\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n<ion-content>\n    <center-spinner [hidden]="items"></center-spinner>\n    <ion-list class="cases">\n        <ion-item *ngFor="let item of items | orderBy:\'ImpressionDateInMili\':true;let i = index" [hidden]="isHidden(item.Status)"\n            (click)="openCase(item, i)" text-wrap>\n            <h2>\n                {{item.Patient}}\n                <ion-badge *ngIf="item.IsNew === 1 && item.Status === \'Job Dispatched\' && [global.LoginType.Doctor, global.LoginType.Parent].indexOf(loginType) > -1"\n                    color="primary">\n                    {{\'CaseStatus._NEW_\' | translate}}\n                </ion-badge>\n            </h2>\n\n            <p>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>\n                            {{\'CaseStatus._Doctor_\' | translate}}\n                        </ion-col>\n                        <ion-col ion-note>{{item.Doctor}}</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            {{\'CaseStatus._ImpressionNo_\' | translate}}\n                        </ion-col>\n                        <ion-col ion-note>{{item.ImpressionNo}}</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            {{\'CaseStatus._ReferenceEntryNo\' | translate}}\n                        </ion-col>\n                        <ion-col ion-note>{{item.ReferenceEntryNo}}</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            {{\'CaseStatus._Status_\' | translate}}\n                        </ion-col>\n                        <ion-col ion-note [ngClass]="getStatusColor(item.Status)">{{item.Substatus}}</ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="item.Status == \'In Process\' && item.ProgressDetail">\n                        <ion-col>\n                            {{\'CaseStatus._ProgressDetail_\' | translate}}\n                        </ion-col>\n                        <ion-col ion-note [ngClass]="getStatusColor(item.Status)">{{item.ProgressDetail}}</ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="global && [global.LoginType.Doctor, global.LoginType.Parent].indexOf(loginType) > -1">\n                        <ion-col>&nbsp;</ion-col>\n                        <ion-col text-right>\n                            <button ion-button color="dashboard" icon-left small (click)="openChat(item, i, $event)">\n                                <ion-icon name="ios-chatbubbles"></ion-icon>\n                                {{\'CaseStatus._ClickToCommunicate_\' | translate}}\n                            </button>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </p>\n            <ion-icon [hidden]="item.Status !== \'Job Dispatched\'" name="ios-arrow-forward" item-end></ion-icon>\n\n        </ion-item>\n    </ion-list>\n\n    <ion-item-divider text-center color="light" *ngIf="page === -1">\n        {{\'Common._NothingToShow_\' | translate}}\n    </ion-item-divider>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="hasInternet">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-fab right bottom>\n        <call-fab type="CaseStatus"></call-fab>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/case-status/case-status.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__["a" /* OfficeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase_transaction_firebase_transaction__["a" /* FirebaseTransactionProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], CaseStatusPage);
    return CaseStatusPage;
}());

//# sourceMappingURL=case-status.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CommunicationPage = /** @class */ (function () {
    function CommunicationPage(navCtrl, offliceList, events, connection, platform, _network, _storage, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.offliceList = offliceList;
        this.events = events;
        this.connection = connection;
        this.platform = platform;
        this._network = _network;
        this._storage = _storage;
        this.translate = translate;
        this.title = 'loading';
        this.titles = { 'Today': '', 'Pending': '', 'All': '' };
        this.status = {
            'Resolved': { label: 'Resolved', color: 'secondary' },
            'Pending': { label: 'Pending', color: 'danger' },
        };
        this.selectedOffice = {};
        this.selectedCustomerBranchID = null;
        this.queries_text = '';
        this.selectedTab = 'All';
        this.page = 0;
        this.items = [];
        this.itemsTicketNo = [];
        this.itemsSearchCopy = [];
        this.offlineItems = {};
        this.searchText = '';
        this.showSearchBar = true;
        this.openingChat = false;
        this.newChatEventRefs = {};
        this.newQueryEventRefs = {};
        this.hasInternet = true;
        this.hasInternet = this._network.type !== 'none';
        this.events.subscribe('network:online', function () {
            _this.hasInternet = true;
        });
        this.events.subscribe('network:offline', function () {
            _this.hasInternet = false;
        });
    }
    CommunicationPage.prototype.doTranslate = function () {
        var _this = this;
        //Queries
        this.translate.get('CommunicationPage._Queries_').subscribe(function (translated) {
            _this.queries_text = translated;
        });
        //loading
        this.translate.get('Common._Loading_').subscribe(function (translated) {
            if (_this.title === 'loading') {
                _this.title = translated;
            }
        });
        //today
        this.translate.get('CommunicationPage._Today_').subscribe(function (translated) {
            _this.titles.Today = translated;
        });
        //Pending
        this.translate.get('CommunicationPage._Pending_').subscribe(function (translated) {
            _this.titles.Pending = translated;
            _this.status.Pending.label = translated;
        });
        //All
        this.translate.get('CommunicationPage._All_').subscribe(function (translated) {
            _this.titles.All = translated;
        });
        //Resolved
        this.translate.get('CommunicationPage._Resolved').subscribe(function (translated) {
            _this.status.Resolved.label = translated;
        });
    };
    CommunicationPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.doTranslate();
        if (__WEBPACK_IMPORTED_MODULE_6_underscore__["isEmpty"](this.selectedOffice)) {
            this.offliceList.getOffice('Communication').then(function (selectedOffice) {
                _this.selectedOffice = selectedOffice;
                if (_this.selectedOffice) {
                    _this.selectedCustomerBranchID = _this.selectedOffice.CustomerBranchID;
                    _this.setTitle();
                    _this.initOffline();
                }
                _this.initData().then(function (response) { }).catch(function (error) {
                });
                _this.listenToFirebaseQueryEvent();
            }).catch(function (error) {
                console.log(error);
                if (error !== null) {
                    _this.events.publish('toast:error', error);
                }
                _this.navCtrl.popToRoot();
            });
        }
        else {
            this.listenToFirebaseQueryEvent();
            this.items.forEach(function (item) {
                _this.listenToFirebaseChatEvent(item);
            });
        }
    };
    CommunicationPage.prototype.initOffline = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._storage.get('OfflineQuery').then(function (queries) {
                if (__WEBPACK_IMPORTED_MODULE_6_underscore__["isEmpty"](queries)) {
                    queries = {};
                }
                //checking if this office is set
                if (!(_this.selectedCustomerBranchID in queries)) {
                    queries[_this.selectedCustomerBranchID] = {};
                }
                console.log(queries[_this.selectedCustomerBranchID]);
                _this.offlineItems = queries[_this.selectedCustomerBranchID];
                //init List
                for (var key in _this.offlineItems) {
                    _this.pushItem(_this.offlineItems[key], false);
                }
                //saveOffline
                _this.saveOfflineData().then(function (status) {
                    resolve(status);
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    CommunicationPage.prototype.pushItem = function (item, addToOffline) {
        if (addToOffline === void 0) { addToOffline = true; }
        item['ResponseDateTimeInMili'] = new Date(item.ResponseDateTime).getTime();
        var ticketNo = item.TicketNo;
        var index = this.getIndexOfTicket(ticketNo);
        if (index === -1) {
            index = this.items.push(item);
            //making copy for search
            this.itemsSearchCopy.push(item);
            //adding ticketno
            this.itemsTicketNo.push(ticketNo);
            //listening to count event
            this.listenToFirebaseChatEvent(item);
        }
        else {
            this.items[index] = item;
            //making copy for search
            this.itemsSearchCopy[index] = item;
        }
        //adding to Offline
        if (addToOffline) {
            this.addToOffline(item);
        }
        return index;
    };
    CommunicationPage.prototype.addToOffline = function (item) {
        this.offlineItems[item.TicketNo] = item;
    };
    CommunicationPage.prototype.saveOfflineData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._storage.get('OfflineQuery').then(function (queries) {
                if (__WEBPACK_IMPORTED_MODULE_6_underscore__["isEmpty"](queries)) {
                    queries = {};
                }
                //checking if this office is set
                if (!(_this.selectedCustomerBranchID in queries)) {
                    queries[_this.selectedCustomerBranchID] = {};
                }
                queries[_this.selectedCustomerBranchID] = _this.offlineItems;
                _this._storage.set('OfflineQuery', queries).then(function (status) {
                    console.log('saved');
                    resolve(status);
                }).catch(function (error) {
                    reject(error);
                });
            });
        });
    };
    CommunicationPage.prototype.initData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.doPost('Communication/GetAllQueries', {
                BranchID: _this.selectedOffice.CustomerBranchID,
                DoctorID: 0,
                DisablePaging: false,
                PageNumber: _this.page,
                RowsPerPage: 100,
            }, _this.items.length === 0).then(function (response) {
                for (var i = 0; i < response.length; i++) {
                    //converting date to miliseconds
                    _this.pushItem(response[i]);
                }
                _this.page++;
                //checking if already searched
                // this.getItems();
                _this.saveOfflineData().then(function (status) {
                    resolve(status);
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                setTimeout(function () {
                    _this.page = -1;
                    reject(error);
                });
            });
        });
    };
    CommunicationPage.prototype.segmentChanged = function (event) {
        this.selectedTab = event.value;
        this.setTitle();
        this.scrollToTop();
    };
    CommunicationPage.prototype.scrollToTop = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.resize) {
                _this.content.resize();
            }
            if (_this.content.scrollToTop) {
                _this.content.scrollToTop();
            }
        });
    };
    CommunicationPage.prototype.setTitle = function () {
        this.title = this.queries_text + ': ' + this.titles[this.selectedTab];
    };
    CommunicationPage.prototype.getStatusColor = function (status) {
        return this.status[status].color;
    };
    CommunicationPage.prototype.getStatusLabel = function (status) {
        return this.status[status].label;
    };
    CommunicationPage.prototype.doInfinite = function (paginator) {
        var _this = this;
        this.initData().then(function () {
            paginator.complete();
            _this.content.resize();
        }).catch(function (error) {
            paginator.enable(false);
            _this.content.resize();
        });
    };
    CommunicationPage.prototype.onCancel = function (event) {
        this.items = this.itemsSearchCopy;
    };
    CommunicationPage.prototype.isHidden = function (item) {
        // ALL
        if (this.selectedTab === 'All') {
            return false;
        }
        else if (this.selectedTab === 'Today' && item.IsTodayQuery) {
            return false;
        }
        return item.QueryStatus !== this.selectedTab;
    };
    CommunicationPage.prototype.openChat = function (item, index) {
        var _this = this;
        this.setUnReadCount(item, index).then(function (status) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], item.TicketNo);
        }).catch(function (error) {
            console.log(error);
        });
    };
    CommunicationPage.prototype.setUnReadCount = function (item, index) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (item.UnreadCount) {
                if (_this.items && typeof _this.items[index] !== 'undefined') {
                    _this.items[index].UnreadCount = 0;
                }
                item.UnreadCount = 0;
                _this.offlineItems[item.TicketNo].UnreadCount = 0;
                _this.saveOfflineData().then(function (status) {
                    console.log('unread saved');
                    resolve(status);
                }).catch(function (error) {
                    reject(error);
                });
            }
            else {
                resolve(true);
            }
        });
    };
    CommunicationPage.prototype.getItems = function () {
        var _this = this;
        var fields = ['Doctor', 'ImpressionNo', 'ReferenceEntryNo', 'Patient'];
        // Reset items back to all of the items
        this.items = this.itemsSearchCopy;
        // if the value is an empty string don't filter the items
        if (this.searchText && this.searchText.trim() != '') {
            //lowercase 
            this.searchText = this.searchText.toLowerCase();
            this.items = this.items.filter(function (item) {
                for (var i = 0; i < fields.length; i++) {
                    if (item[fields[i]].toLowerCase().indexOf(_this.searchText) > -1) {
                        return true;
                    }
                }
                return false;
            });
        }
    };
    CommunicationPage.prototype.headerButtonClicked = function (event) {
        if (event.icon === 'search') {
            this.showSearchBar = !this.showSearchBar;
            this.scrollToTop();
            this.selectedTab = 'All';
        }
    };
    CommunicationPage.prototype.listenToFirebaseChatEvent = function (item) {
        var _this = this;
        var ticketNo = item.TicketNo;
        var path = 'NewChatEvent/' + ticketNo + '/' + this.connection.user.id;
        if (!(path in this.newChatEventRefs)) {
            var itemRef_1 = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref(path);
            this.newChatEventRefs[path] = itemRef_1;
            //removing existing as we just got it from server
            itemRef_1.remove();
            //now listening to new
            itemRef_1.on('child_added', function (snapshot) {
                var count = snapshot.val();
                var time = new Date().getTime();
                console.log(ticketNo);
                //count
                item.UnreadCount = count;
                item.ResponseDateTime = new Date().getTime();
                item.ResponseDateTimeInMili = new Date().getTime();
                setTimeout(function () {
                    //setting value
                    var index = _this.getIndexOfTicket(ticketNo);
                    if (_this.items[index].TicketNo === ticketNo) {
                        _this.items[index] = item;
                        _this.itemsSearchCopy[index] = item;
                        _this.offlineItems[item.TicketNo] = item;
                        _this.saveOfflineData();
                    }
                    else {
                        console.log('else');
                    }
                });
                itemRef_1.remove();
            });
        }
    };
    CommunicationPage.prototype.listenToFirebaseQueryEvent = function () {
        var _this = this;
        var path = 'NewQueryEvent/' + this.selectedOffice.CustomerBranchID + '/' + this.connection.user.id;
        //checking if not already listening
        if (!(path in this.newQueryEventRefs)) {
            var queryRef_1 = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref(path);
            this.newQueryEventRefs[path] = queryRef_1;
            queryRef_1.on('child_added', function (snapshot) {
                var item = snapshot.val();
                if (typeof item.QueryStatus === 'undefined') {
                    item.QueryStatus = 'Pending';
                }
                //checking if already exist
                if (_this.getIndexOfTicket(item.TicketNo) === -1) {
                    item.ResponseDateTimeInMili = new Date().getTime();
                    _this.items.unshift(item);
                    _this.itemsTicketNo.unshift(item.TicketNo);
                    _this.itemsSearchCopy.unshift(item);
                    _this.offlineItems[item.TicketNo] = item;
                    //saving for next time use
                    _this.saveOfflineData();
                    //listening to new chat on it
                    _this.listenToFirebaseChatEvent(item);
                }
                queryRef_1.remove();
            });
        }
    };
    CommunicationPage.prototype.ionViewWillLeave = function () {
        for (var key in this.newChatEventRefs) {
            this.newChatEventRefs[key].off('child_added');
            delete this.newChatEventRefs[key];
        }
        for (var key in this.newQueryEventRefs) {
            this.newQueryEventRefs[key].off('child_added');
            delete this.newQueryEventRefs[key];
        }
    };
    CommunicationPage.prototype.getIndexOfTicket = function (ticketNo) {
        var index = -1;
        if (ticketNo) {
            index = this.itemsTicketNo.indexOf(ticketNo);
            if (index === -1) {
                return index;
            }
            //verifying if its indeed right index
            if (this.items && this.items[index].TicketNo !== ticketNo) {
                //looping to find
                var index_1 = 0;
                this.items.forEach(function (item) {
                    if (item.TicketNo === ticketNo) {
                        return index_1;
                    }
                    index_1++;
                });
                //since not found
                index_1 = -1;
            }
        }
        return index;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], CommunicationPage.prototype, "content", void 0);
    CommunicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-communication',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/communication/communication.html"*/'<ion-header no-border>\n  <header [title]="title" [buttons]="[{icon:\'search\'}]" (buttonClicked)="headerButtonClicked($event)"></header>\n  <div [hidden]="selectedOffice === {}" class="office">\n    {{selectedOffice.CustomerName}}\n    <!-- <ion-spinner color="light"></ion-spinner> -->\n  </div>\n  <ion-searchbar [placeholder]="\'Common._Search_\' | translate" [hidden]="showSearchBar" [(ngModel)]="searchText" (ionInput)="getItems()" showCancelButton="true" (ionCancel)="onCancel()">\n  </ion-searchbar>\n  <ion-segment padding mode="ios" [(ngModel)]="selectedTab" color="communication" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="Today">\n      {{\'CommunicationPage._Today_\' | translate}}\n    </ion-segment-button>\n    <ion-segment-button value="Pending">\n      {{\'CommunicationPage._Pending_\' | translate}}\n    </ion-segment-button>\n    <ion-segment-button value="All">\n      {{\'CommunicationPage._All_\' | translate}}\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content padding>\n  <center-spinner [hidden]="items"></center-spinner>\n  <ion-list class="communications-list">\n    <ion-item *ngFor="let item of items | orderBy:\'ResponseDateTimeInMili\':true;trackBy:item?.TicketNo; let i=index;" detail-push\n      [hidden]="isHidden(item)" (click)="item.UnreadCount=0;openChat(item, i)">\n      <h2>\n        {{item.Patient}}\n        <ion-badge *ngIf="item.UnreadCount" color="primary">{{item.UnreadCount}} </ion-badge>\n      </h2>\n      <p>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              {{\'CommunicationPage._Doctor_\' | translate}}\n            </ion-col>\n            <ion-col ion-note>{{item.Doctor}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              {{\'CommunicationPage._ImpressionNo_\' | translate}}\n            </ion-col>\n            <ion-col ion-note>{{item.ImpressionNo}}</ion-col>\n          </ion-row>\n          <!-- <ion-row>\n            <ion-col>\n              TicketNo\n            </ion-col>\n            <ion-col ion-note>{{item.TicketNo}}</ion-col>\n          </ion-row> -->\n          <ion-row>\n            <ion-col>\n              {{\'CommunicationPage._ReferenceEntryNo\' | translate}}\n            </ion-col>\n            <ion-col ion-note>{{item.ReferenceEntryNo}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              {{\'CommunicationPage._Satus_\' | translate}}\n            </ion-col>\n            <ion-col ion-note [ngClass]="getStatusColor(item.QueryStatus)">{{getStatusLabel(item.QueryStatus)}}</ion-col>\n          </ion-row>\n        </ion-grid>\n      </p>\n      <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-item-divider text-center color="light" *ngIf="page === -1">\n      {{\'Common._NothingToShow_\' | translate}}\n  </ion-item-divider>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="hasInternet">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/communication/communication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__["a" /* OfficeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], CommunicationPage);
    return CommunicationPage;
}());

//# sourceMappingURL=communication.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connection_connection__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, connection, _storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connection = connection;
        this._storage = _storage;
        this.dashboardData = {};
    }
    DashboardPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._storage.get('OfflineDashboard').then(function (dashboard) {
            var loader = true;
            if (!__WEBPACK_IMPORTED_MODULE_3_underscore__["isEmpty"](dashboard)) {
                loader = false;
                _this.dashboardData = dashboard.data;
            }
            _this.initData(null, loader);
        });
    };
    DashboardPage.prototype.initData = function (refresher, loader) {
        var _this = this;
        if (loader === void 0) { loader = true; }
        this.connection.doPost('Dashboard/GetDashboardData', {}, loader).then(function (response) {
            _this.dashboardData = response;
            //adding to offline
            _this._storage.set('OfflineDashboard', {
                data: response,
                timestamp: new Date().getTime()
            });
            if (refresher) {
                refresher.complete();
            }
        }).catch(function (error) {
            if (refresher) {
                refresher.complete();
            }
        });
    };
    DashboardPage.prototype.roundUp = function (num, precision) {
        if (precision === void 0) { precision = 2; }
        if (isNaN(num)) {
            return num;
        }
        return Math.ceil(num * precision) / precision;
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/dashboard/dashboard.html"*/'<ion-header no-border>\n  <header [title]="\'HomeScreen._Dashboard_\' | translate"></header>\n</ion-header>\n<ion-content no-padding>\n  <ion-refresher (ionRefresh)="initData($event)">\n    <ion-refresher-content pullingIcon="arrow-round-down" pullingText="Pull to refresh" refreshingSpinner="crescent" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- Payment -->\n  <ion-list>\n    <ion-list-header class="list_header">\n      {{\'DashboardDetail._Payment_\' | translate}}\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'cash\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._OutstandingAmount_\' | translate}}\n      <ion-note item-right>\n        &#8377; {{roundUp(dashboardData.OutstandingAmount)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'cash\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._UnbilledAmount_\' | translate}}\n      <ion-note item-right>\n        &#8377; {{roundUp(dashboardData.UnbilledAmount)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'cash\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._LastBillAmount_\' | translate}}\n      <ion-note item-right>\n        &#8377; {{roundUp(dashboardData.LastMonthBillAmount)}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n  <!-- Case -->\n  <ion-list>\n    <ion-list-header class="list_header">\n      {{\'DashboardDetail._Case_\' | translate}}\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'document\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._InProcess_\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.InProgress)}}\n      </ion-note>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-icon name=\'jet\' item-left color="dashboardColor"></ion-icon>\n        IN TRANSIT\n      <ion-note item-right>\n       {{roundUp(dashboardData.InTransit)}}\n      </ion-note>\n    </ion-item> -->\n    <ion-item>\n      <ion-icon name=\'bus\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._Completed\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.JobDelivered)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'document\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._AllCases_\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.Allcases)}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n\n  <!-- QUERY -->\n  <ion-list>\n    <ion-list-header class="list_header">\n      {{\'DashboardDetail._Query\' | translate}}\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'md-help-circle\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._TodaysQuery_\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.TodayQueries)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'md-help-circle\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._PendingQuery_\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.PendingQueries)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'md-help-circle\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._ResolvedQuery_\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.ClosedQueries)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'md-help-circle\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._AllQuery_\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.AllQueries)}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n\n\n  <!-- REDO -->\n  <ion-list>\n    <ion-list-header class="list_header">\n      {{\'DashboardDetail._Redo\' | translate}}\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'ios-redo\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._Last12Month_\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.RedoP_12Months)}}%\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'ios-redo\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._Last6Month_\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.RedoP_6Months)}}%\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'ios-redo\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._Last2Month_\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.RedoP_3Months)}}%\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'ios-redo\' item-left color="dashboardColor"></ion-icon>\n      {{\'DashboardDetail._Last30Days_\' | translate}}\n      <ion-note item-right>\n        {{roundUp(dashboardData.RedoP_30Days)}}%\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timeSlots__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PickupPage = /** @class */ (function () {
    function PickupPage(navCtrl, offliceList, events, connection, network, translate) {
        this.navCtrl = navCtrl;
        this.offliceList = offliceList;
        this.events = events;
        this.connection = connection;
        this.network = network;
        this.translate = translate;
        this.title = 'loading';
        this.pick_up = 'Pickup';
        this.monday = 'Monday';
        this.tuesday = 'Tuesday';
        this.titles = ['Today', 'Tomorrow'];
        this.selectedOffice = {};
        this.selectedTab = '0';
        this.timeDifference = 45;
        this.disablePickupButton = true;
        this.serverDate = null;
        this.request_sent = 'Request Sent';
        this.pickup_request_alert = '';
        this.pickup_offline = '';
    }
    PickupPage.prototype.doTranslate = function () {
        var _this = this;
        //loading
        this.translate.get('Common._Loading_').subscribe(function (translated) {
            if (_this.title === 'loading') {
                _this.title = translated;
            }
        });
        //today
        this.translate.get('PickUP._Today_').subscribe(function (translated) {
            _this.titles[0] = translated;
        });
        //tomorrow
        this.translate.get('PickUP._Tomorrow_').subscribe(function (translated) {
            _this.titles[1] = translated;
        });
        //pickup
        this.translate.get('PickUP._Pickup_').subscribe(function (translated) {
            _this.pick_up = translated;
        });
        //monday
        this.translate.get('PickUP._Monday_').subscribe(function (translated) {
            _this.monday = translated;
        });
        //tuesday
        this.translate.get('PickUP._Tuesday_').subscribe(function (translated) {
            _this.tuesday = translated;
        });
        //request sent
        this.translate.get('PickUP._RequestSent_').subscribe(function (translated) {
            _this.request_sent = translated;
        });
        //request alert
        this.translate.get('PickUP.PickupRequestAlert').subscribe(function (translated) {
            _this.pickup_request_alert = translated;
        });
        //offline
        this.translate.get('PickUP._Offline_').subscribe(function (translated) {
            _this.pickup_offline = translated;
        });
    };
    PickupPage.prototype.ionViewCanEnter = function () {
        this.doTranslate();
        if (this.network.type === 'none') {
            this.events.publish('toast:error', this.pickup_offline);
        }
        return this.network.type !== 'none';
    };
    PickupPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.offliceList.getOffice('Pickup').then(function (selectedOffice) {
            _this.selectedOffice = selectedOffice;
            _this.setTitle();
            _this.initData();
        }).catch(function (error) {
            _this.events.publish('toast:error', error);
            _this.navCtrl.pop();
        });
    };
    PickupPage.prototype.initData = function () {
        var _this = this;
        //getting server time
        this.connection.doPost('Pickup/Get_ServerTime', {}, true).then(function (response) {
            _this.serverHour = __WEBPACK_IMPORTED_MODULE_5_moment__(response, 'MM/DD/YYYY hh:mm:ss A').format("k");
            _this.serverMinutes = __WEBPACK_IMPORTED_MODULE_5_moment__(response, 'MM/DD/YYYY hh:mm:ss A').format("m");
            _this.serverTime = parseInt(_this.serverHour) * 60 + parseInt(_this.serverMinutes);
            _this.serverDate = __WEBPACK_IMPORTED_MODULE_5_moment__(response, 'MM/DD/YYYY hh:mm:ss A');
            _this.timeSlot = __WEBPACK_IMPORTED_MODULE_7__timeSlots__["a" /* TimeSlots */];
            _this.resetTime();
        });
    };
    PickupPage.prototype.resetTime = function () {
        //clear selected Time
        this.time = null;
        //disable button
        this.disablePickupButton = true;
    };
    PickupPage.prototype.setTitle = function () {
        this.title = this.pick_up + ': ' + this.titles[parseInt(this.selectedTab)];
    };
    PickupPage.prototype.segmentChanged = function (event) {
        this.selectedTab = event.value;
        this.setTitle();
        this.resetTime();
    };
    PickupPage.prototype.isDisabled = function (time) {
        //checking if tab is not sunday
        if (this.isSunday()) {
            this.titles[0] = this.monday;
            this.titles[1] = this.tuesday;
            return false; // all available
        }
        if (this.isSaturday()) {
            this.titles[1] = this.monday;
        }
        if (this.selectedTab === '1') {
            return false;
        }
        else {
            /**
             * today checking if time already passed
             */
            var seletedTime = parseInt(time.time) * 60 - this.timeDifference;
            return seletedTime <= this.serverTime;
        }
    };
    PickupPage.prototype.isSunday = function () {
        return this.serverDate.day() === 0;
    };
    PickupPage.prototype.isSaturday = function () {
        return this.serverDate.day() === 6;
    };
    PickupPage.prototype.selectTime = function () {
        if (this.time) {
            this.disablePickupButton = false;
        }
        else {
            this.disablePickupButton = true;
        }
    };
    PickupPage.prototype.confirm = function () {
        var _this = this;
        var date = this.serverDate;
        //checking tab selected vs day
        if (this.selectedTab === '0') {
            if (this.isSunday()) {
                //making it plus 1
                date = date.add(1, 'day');
            }
        }
        else {
            if (this.isSunday() || this.isSaturday()) {
                //making it plus 2
                date = date.add(2, 'day');
            }
            else {
                date = date.add(1, 'day');
            }
        }
        var pickupDateTime = __WEBPACK_IMPORTED_MODULE_5_moment__().set({ date: date.get('date'), 'hour': this.time, 'minute': 0, 'second': 0, 'millisecond': 0 }).toISOString();
        console.log(pickupDateTime);
        this.connection.doPost('Pickup/Insert_PP_TPickUP', {
            PickupDateTime: pickupDateTime,
            CreatedByID: this.connection.user.CustomerPortalID,
        }).then(function () {
            _this.events.publish('alert:basic', _this.request_sent, _this.pickup_request_alert);
            //Increment count
            _this.increaseCount('PickUpCount');
            _this.increaseCount('Total');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
        }).catch(function (error) {
        });
        this.time = null;
        this.disablePickupButton = true;
    };
    /**
     * This will increase badge count if pick set
     */
    PickupPage.prototype.increaseCount = function (path) {
        var ref = __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('Badge/' + this.connection.user.id + '/' + path);
        ref.transaction(function (count) {
            count = count || 0;
            return count + 1;
        });
    };
    PickupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pickup',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/pickup/pickup.html"*/'<ion-header no-border>\n    <header [title]="title"></header>\n    <div [hidden]="selectedOffice === {}" class="office">{{selectedOffice.CustomerName}}</div>\n    <ion-segment padding mode="ios" [(ngModel)]="selectedTab" color="pickup" (ionChange)="segmentChanged($event)">\n        <ion-segment-button value="0">\n            {{titles[0]}}\n        </ion-segment-button>\n        <ion-segment-button value="1">\n            {{titles[1]}}\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n<ion-content padding>\n    <center-spinner [hidden]="timeSlot"></center-spinner>\n    <ng-container *ngIf="timeSlot">\n        <ion-list radio-group [(ngModel)]="time" (ngModelChange)="selectTime()">\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-6>\n                        <table style="width: 100%">\n                            <tr style="color:gray">\n                                <th class="th_position">\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col col-6>\n                                                <ion-icon name="sunny" text-right></ion-icon>\n                                            </ion-col>\n                                            <ion-col col-6>\n                                                {{\'PickUP._Morning_\' | translate}}\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </th>\n                            </tr>\n                            <tr *ngFor="let item of timeSlot.morningSlot" style=" color:#D5232F">\n                                <th class="th_position">\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col col-6>\n                                                <ion-radio [disabled]="isDisabled(item)" value={{item.time}}></ion-radio>\n                                            </ion-col>\n                                            <ion-col col-6>\n                                                <span *ngIf="item.active" class="time-color">{{item.displaytime}}</span>\n                                                <span *ngIf="!item.active">{{item.displaytime}}</span>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </th>\n                            </tr>\n                        </table>\n                    </ion-col>\n                    <ion-col col-6>\n                        <table style="width: 100%">\n                            <tr style=" color:gray">\n                                <th class="th_position">\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col col-6>\n                                                <ion-icon name="partly-sunny" text-right></ion-icon>\n                                            </ion-col>\n                                            <ion-col col-6>\n                                                {{\'PickUP._Evening_\' | translate}}\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </th>\n                            </tr>\n                            <tr *ngFor="let item of timeSlot.eveningSlot" style="color:#D5232F">\n                                <th class="th_position">\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col col-6>\n                                                <ion-radio [disabled]="isDisabled(item)" value="{{item.time}}"></ion-radio>\n                                            </ion-col>\n                                            <ion-col col-6>\n                                                <span *ngIf="item.active" class="time-color">{{item.displaytime}}</span>\n                                                <span *ngIf="!item.active">{{item.displaytime}}</span>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </th>\n                            </tr>\n                        </table>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-list>\n        <ion-grid>\n            <ion-row text-center>\n                <ion-col>\n                    <button ion-button full [disabled]="disablePickupButton" (click)="confirm()">\n                        {{\'PickUP._Confirm_\' | translate}}\n                    </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ng-container>\n    <ion-fab right bottom>\n        <call-fab type="PickUp"></call-fab>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/pickup/pickup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__["a" /* OfficeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], PickupPage);
    return PickupPage;
}());

//# sourceMappingURL=pickup.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
var Global = {
    APP_NAME: 'Illusion Dental',
    album: 'Illusion Dental',
    tutorial: false,
    color: { primary: 'D5232F' },
    AppVersion: '2.0.0',
    support: {
        landline: '+91-22-61366301',
        pick_up: '+91-22-61366301',
        case_status: '+91-22-61366366',
        mobile: '+91-8879522544',
        email: 'labtech@illusiondentallab.com',
        address: '402, Akruti Arcade J. P. Road,Opp. A. H. Wadia School, Near Andheri Sport Complex, Andheri (W), Mumbai- 400053.',
    },
    LoginType: {
        LabGuru: 0,
        Doctor: 1,
        Parent: 2,
        Group: 3,
    },
    OneSignal: {
        key: '4e6dcad0-792d-4897-b4cb-1a7a40540d14',
        android: '7402421237',
    },
    Push: {
        FCM: false,
        OneSignal: true,
    },
    Translate: {
        key: 'AIzaSyD8Kth_6jW-ayGIN92VGGYR4KTW02hXX-s',
    },
    Rate: {
        show: false,
        ios: '',
        android: ''
    },
    APP_URL: {
        android: 'https://play.google.com/store/apps/details?id=com.illusiondental.app',
        ios: 'https://itunes.apple.com/us/app/illusion-dental/id1307823684?mt=8'
    },
    // SERVER_URL: 'http://43.241.39.17/Labguru_Mobile_UAT/api/',
    SERVER_URL: 'https://mobileapi.illusiondentallab.com/api/',
    CDN: 'https://d3nwpy9993ruf3.cloudfront.net/',
    getActiveComponentName: function (component) {
        if (component) {
            var tag = component.pageRef().nativeElement.tagName;
            return this.toCamelCase(tag.replace('PAGE-', '')) + 'Page';
        }
        return null;
    },
    toCamelCase: function (str) {
        // Lower cases the string
        return this.toUpperCaseFirst(str.toLowerCase()
            .replace(/[-_]+/g, ' ')
            .replace(/[^\w\s]/g, '')
            .replace(/ (.)/g, function ($1) { return $1.toUpperCase(); })
            .replace(/ /g, ''));
    },
    toUpperCaseFirst: function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // <meta-data android:name="com.onesignal.BadgeCount" android:value="DISABLE" />
};
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connection_connection__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, events, formBuilder, connection) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.formBuilder = formBuilder;
        this.connection = connection;
        this.ForgotPassword = {};
        this.global = {};
        this.forgotPasswordForm = this.formBuilder.group({
            login_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
    }
    ForgotPasswordPage.prototype.doForgotPassword = function () {
        var _this = this;
        this.connection.doPost('Account/Validate_ForgotPassword', {
            UserCode: this.ForgotPassword.login_name,
        }, 'resetting password').then(function (response) {
            _this.events.publish('alert:basic', 'Password sent!', response);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }).catch(function (error) {
            _this.events.publish('toast:create', error);
        });
    };
    ForgotPasswordPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/forgot-password/forgot-password.html"*/'<ion-content class="login">\n    <ion-grid class="slide_header">\n\n        <logo></logo>\n        <ion-row>\n            <div id="login-box">\n                <div class="info-box">\n                    <h2 text-center>\n                        {{\'ForgotPasswordPage._Forgot_Password\' | translate}}\n                    </h2>\n                    <p text-center text-small>\n                        {{\'ForgotPasswordPage._InfoMessage_\' | translate}}\n                    </p>\n                </div>\n                <form (submit)="doForgotPassword()">\n                    <ion-list>\n                        <ion-item>\n                            <ion-label ion-text color="primary" floating>\n                                {{\'LoginPage._login_name_\' | translate}}\n                            </ion-label>\n                            <ion-input autofocus required [(ngModel)]="ForgotPassword.login_name" #login_name="ngModel" type="text" [placeholder]="\'LoginPage._login_name_\' | translate"\n                                name="login_name"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                    <button ion-button block type="submit" [disabled]="!ForgotPassword.login_name">\n                        {{\'ForgotPasswordPage._Continue_\' | translate}}\n                    </button>\n                    <button ion-button block type="button" (click)="goBack()">\n                        {{\'ForgotPasswordPage._Back\' | translate}}\n                    </button>\n                </form>\n            </div>\n        </ion-row>\n\n        <!-- <or></or>\n        <reach-us></reach-us> -->\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/forgot-password/forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_connection_connection__["a" /* ConnectionProvider */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(141);
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
var TutorialPage = /** @class */ (function () {
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
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/tutorial/tutorial.html"*/'<ion-header no-border class="intro">\n    <ion-navbar no-border-bottom>\n        <ion-buttons end *ngIf="showSkip">\n            <button ion-button (click)="startApp()" ion-text color="white">Skip</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-slides pager="true" (ionWillChange)="onSlideChangeStart($event)">\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_1.png" class="slide-image" />\n            </div>\n            <h2 class="slide-title">Some fancy text</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua</p>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_2.png" class="slide-image" />\n            </div>\n            <h2 class="slide-title">Some Fancy Text</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua</p>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_3.png" class="slide-image" />\n            </div>\n            <h2 class="slide-title">Some Fancy Text</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua</p>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_4.png" class="slide-image" />\n            </div>\n            <h2 class="slide-title">Some Fancy Text</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua</p>\n            <button ion-button ion-text color="primary" (click)="startApp()">\n                Let\'s Start\n            </button>\n        </ion-slide>\n\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/tutorial/tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogoutPage = /** @class */ (function () {
    function LogoutPage(navCtrl, navParams, user, network, translate, events, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.network = network;
        this.translate = translate;
        this.events = events;
        this.storage = storage;
        this.timeout = null;
        this.offline_message_translate = 'Not available in Offline';
        this.loggedOut = false;
    }
    LogoutPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.translate.get('ChatScreen._NotAvailableOffline_').subscribe(function (translated) {
            _this.offline_message_translate = translated;
        });
        this.listenToLogout();
        this.timeout = setTimeout(function () {
            if (!_this.loggedOut) {
                _this.storage.get('User').then(function (user) {
                    _this.events.publish('user:ready', user);
                }).catch(function (error) {
                });
            }
        }, 10000);
    };
    LogoutPage.prototype.ionViewWillLeave = function () {
        this.clearTimeout();
    };
    LogoutPage.prototype.clearTimeout = function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    };
    LogoutPage.prototype.listenToLogout = function () {
        var _this = this;
        if (this.network.type === 'none') {
            this.loggedOut = true;
            this.clearTimeout();
            this.events.publish('toast:error', this.offline_message_translate);
            this.navCtrl.pop();
        }
        else {
            this.user.logout().then(function (response) {
                _this.loggedOut = true;
                _this.clearTimeout();
                console.log(response);
            }).catch(function (error) {
                _this.clearTimeout();
                _this.navCtrl.setRoot('LoginPage');
            });
        }
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-logout',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/logout/logout.html"*/'<ion-content>\n    <div class="flex-center">\n        <img src="assets/img/logo-menu.png" class="menu-logo" />\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 263:
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
webpackEmptyAsyncContext.id = 263;

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_unique_device_id__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ConnectionProvider = /** @class */ (function () {
    function ConnectionProvider(http, storage, events, network, platform, device, uniqueDeviceID, translate) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.network = network;
        this.platform = platform;
        this.device = device;
        this.uniqueDeviceID = uniqueDeviceID;
        this.translate = translate;
        this.user = {};
        this.push_id = null;
        this.loading_translate = 'loading';
        this.please_check_internet_connection = 'Please check your network connection';
        this.events.subscribe('user:changed', function (user) {
            _this.storage.get('User').then(function (user) {
                _this.user = user;
                _this.events.publish('user:ready', user);
            });
        });
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        //device id
        platform.ready().then(function () {
            _this.uniqueDeviceID.get()
                .then(function (uuid) {
                _this.uuid = uuid;
            })
                .catch(function (error) { return console.log(error); });
            _this.doTranslate();
        });
    }
    ConnectionProvider.prototype.doTranslate = function () {
        var _this = this;
        //loading
        this.translate.get('Common._Loading_').subscribe(function (translated) {
            _this.loading_translate = translated;
        });
        //please check 
        this.translate.get('Common._CheckInternetConnection_').subscribe(function (translated) {
            _this.please_check_internet_connection = translated;
        });
    };
    /**
     *
     * @param url relative URL to connect
     * @param params paramst to send
     * @param loader loader message to show or false if no loading
     */
    ConnectionProvider.prototype.doPost = function (url, params, loader) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (loader === void 0) { loader = true; }
        return new Promise(function (resolve, reject) {
            //checking if Network availble
            if (_this.network.type === 'none') {
                reject(_this.please_check_internet_connection);
                return;
            }
            //if need to show loader
            if (loader) {
                if (loader === true) {
                    loader = _this.loading_translate;
                }
                _this.events.publish('loading:create', loader);
            }
            //creating request
            var urlSearchParams = _this.getURLSearchParams(params);
            _this.http.post(__WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Global */].SERVER_URL + url, urlSearchParams).timeout(60000).map(function (response) { return response.json(); }).subscribe(function (data) {
                if (loader) {
                    _this.events.publish('loading:close');
                }
                //Checking for Error Code
                switch (parseInt(data.ErrorCode)) {
                    case 0:
                        if (data.objData.trim() === '') {
                            data.objData = data.objData.trim();
                        }
                        else {
                            data.objData = JSON.parse(data.objData);
                        }
                        resolve(data.objData);
                        break;
                    case 2:
                        _this.events.publish("user:unautharized");
                        reject(data.DisplayMessage);
                        break;
                    default:
                        reject(data.DisplayMessage);
                        break;
                }
            }, function (error) {
                if (loader) {
                    _this.events.publish('loading:close');
                }
                //checking for timeout
                if (typeof error === 'object' && ('name' in error) && error.name === 'TimeoutError') {
                    error = error.message;
                }
                console.log(error);
                _this.events.publish('toast:error', error);
                reject(error);
            });
        });
    };
    ConnectionProvider.prototype.getURLSearchParams = function (params) {
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* URLSearchParams */]();
        for (var key in params) {
            urlSearchParams.append(key, params[key]);
        }
        //device specific info
        urlSearchParams.append('UniqueID', this.uuid);
        urlSearchParams.append('Device', this.device.platform);
        urlSearchParams.append('OSVersion', this.device.version);
        urlSearchParams.append('Manufacturer', this.device.manufacturer);
        urlSearchParams.append('AppVersion', __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Global */].AppVersion);
        //adding user info
        if (this.user) {
            urlSearchParams = this.addUserInfo(urlSearchParams);
        }
        return urlSearchParams;
    };
    ConnectionProvider.prototype.doGet = function (url, data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Global */].SERVER_URL + url).map(function (response) { return response.json(); });
    };
    ConnectionProvider.prototype.addUserInfo = function (urlSearchParams) {
        urlSearchParams.append('UserCode', this.user.UserCode);
        urlSearchParams.append('CustomerID', this.user.CustomerID);
        urlSearchParams.append('SecureToken', this.user.SecureToken);
        urlSearchParams.append('OrganizationUnitID', this.user.LoginOUID);
        urlSearchParams.append('LoginTypeID', this.user.LoginTypeID);
        urlSearchParams.append('LoginUserID', this.user.CustomerPortalID);
        urlSearchParams.append('PushID', this.push_id);
        return urlSearchParams;
    };
    ConnectionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], ConnectionProvider);
    return ConnectionProvider;
}());

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		307
	],
	"../pages/account/account.module": [
		503
	],
	"../pages/account/change-password/change-password.module": [
		508
	],
	"../pages/account/edit-profile/edit-profile.module": [
		513
	],
	"../pages/account/notification-preferences/notification-preferences.module": [
		512
	],
	"../pages/case-status/case-status-modal/case-status-modal.module": [
		509
	],
	"../pages/case-status/case-status.module": [
		517
	],
	"../pages/chat/chat-read-modal/chat-read-modal.module": [
		514
	],
	"../pages/chat/chat.module": [
		526
	],
	"../pages/chat/saved-media/saved-media.module": [
		525
	],
	"../pages/communication/communication.module": [
		617
	],
	"../pages/contact-us/contact-us.module": [
		616
	],
	"../pages/dashboard/dashboard.module": [
		618
	],
	"../pages/forgot-password/forgot-password.module": [
		619
	],
	"../pages/help/help.module": [
		621
	],
	"../pages/home/home.module": [
		623
	],
	"../pages/login/login.module": [
		624
	],
	"../pages/logout/logout.module": [
		1119,
		0
	],
	"../pages/office-list/office-list.module": [
		625
	],
	"../pages/offline/offline.module": [
		626
	],
	"../pages/pickup/pickup.module": [
		627
	],
	"../pages/register/register.module": [
		628
	],
	"../pages/search/search.module": [
		629
	],
	"../pages/tutorial/tutorial.module": [
		630
	],
	"../pages/welcome/welcome.module": [
		631
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 306;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firebase_transaction_firebase_transaction__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__office_service_office_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_underscore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_badge__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UserProvider = /** @class */ (function () {
    function UserProvider(events, storage, connection, _firebaseTransaction, platform, alertCtrl, officeList, badge, angularFireDatabase, translate) {
        var _this = this;
        this.events = events;
        this.storage = storage;
        this.connection = connection;
        this._firebaseTransaction = _firebaseTransaction;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.officeList = officeList;
        this.badge = badge;
        this.angularFireDatabase = angularFireDatabase;
        this.translate = translate;
        this._user = {};
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.HAS_LOGGED_IN = false;
        this.global = {};
        this.bye_bye_translate = 'Good bye see you soon';
        this.logging_you_in_translate = 'Logging you in';
        this.login_failed_translate = 'Login Failed';
        this.global = __WEBPACK_IMPORTED_MODULE_8__app_global__["a" /* Global */];
        this.events.subscribe('user:changed', function (user) {
            _this.storage.get('User').then(function (user) {
                _this._user = user;
            });
        });
        setTimeout(function () {
            _this.doTranslate();
        });
    }
    UserProvider.prototype.doTranslate = function () {
        var _this = this;
        //bye bye
        this.translate.get('Common._ByeBye_').subscribe(function (translated) {
            _this.bye_bye_translate = translated;
        });
        //Logging you in
        this.translate.get('LoginPage._LoggingYouIn_').subscribe(function (translated) {
            _this.logging_you_in_translate = translated;
        });
        //login failed
        this.translate.get('LoginPage._LoginFailed').subscribe(function (translated) {
            _this.login_failed_translate = translated;
        });
    };
    UserProvider.prototype.login = function (username, password) {
        var _this = this;
        this.connection.doPost('Account/login', { UserCode: username, Password: password }, this.logging_you_in_translate + '!').then(function (response) {
            _this._user = response;
            _this.setUser(_this._user).then(function () {
                _this.HAS_LOGGED_IN = true;
                _this.events.publish('user:login', _this._user);
            });
        }).catch(function (error) {
            _this.events.publish('alert:basic', _this.login_failed_translate + '!', error);
        });
    };
    ;
    UserProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var name = _this._user.Customer;
            _this.registerPushID('').then(function (response) {
                //removing from Storage
                _this.storage.remove('User').then(function (response) {
                    _this.HAS_LOGGED_IN = false;
                    _this._user = null;
                    //clear badge
                    _this.badge.clear();
                    _this.removeOfflineData();
                    _this.events.publish('user:logout', _this.bye_bye_translate);
                    resolve('Logged out');
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject(error);
            });
        });
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
        //setting
        User.id = User.CustomerPortalID + '-' + User.LoginTypeID;
        return this.storage.set('User', User).then(function (user) {
            _this._user = user;
            return _this._user;
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
        var _this = this;
        return new Promise(function (resolve, reject) {
            //checking if logged in
            if (!__WEBPACK_IMPORTED_MODULE_9_underscore__["isEmpty"](_this.connection.user)) {
                //setting in connection
                _this.connection.push_id = push_id;
                //sending to server
                _this.connection.doPost('Account/RegisterDevice', {
                    DeviceID: push_id,
                    IsLogin: push_id !== '',
                }, false).then(function (response) {
                    //now doing firebase transaction
                    _this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(function (status) {
                        resolve(response);
                    }).catch(function (error) {
                        if (error == 'Empty') {
                            resolve(response);
                        }
                        else {
                            reject(error);
                        }
                    });
                }).catch(function (error) {
                    reject(error);
                });
            }
            else {
                //waiting to logged in
                _this.events.subscribe('user:ready', function (user) {
                    if (user) {
                        _this.registerPushID(push_id).then(function (status) {
                            resolve(status);
                        }).catch(function (error) {
                            reject(error);
                        });
                    }
                    else {
                        reject('Already logged out');
                    }
                });
            }
        });
    };
    UserProvider.prototype.doVersionCheck = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return;
        }
        var OSName = 'ios';
        if (this.platform.is('android')) {
            OSName = 'android';
        }
        this.angularFireDatabase.object('Version/' + OSName).snapshotChanges().subscribe(function (snapshot) {
            var AppVersion = snapshot.payload.val();
            if (AppVersion && _this.global.AppVersion !== AppVersion) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Version Update Available',
                    message: 'There is a version update, please update your application',
                    buttons: [
                        {
                            text: 'NO',
                        },
                        {
                            text: 'YES',
                            handler: function () {
                                window.open(_this.global.APP_URL[OSName], '_system');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    UserProvider.prototype.isMultipleOffice = function () {
        console.log(this._user);
    };
    UserProvider.prototype.removeOfflineData = function () {
        var _this = this;
        //Removing Offline Data
        this.storage.remove('OfflineDashboard');
        this.storage.remove('OfflineHome');
        this.storage.remove('OfflineOfficeList');
        this.storage.remove('OfflineCaseStatus');
        this.storage.remove('OfflineQuery');
        this.storage.get('OfflineTickets').then(function (tickets) {
            if (__WEBPACK_IMPORTED_MODULE_9_underscore__["isEmpty"](tickets)) {
                tickets = {};
            }
            for (var ticket in tickets) {
                _this.storage.remove('OfflineMessages-' + ticket);
            }
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__firebase_transaction_firebase_transaction__["a" /* FirebaseTransactionProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__office_service_office_service__["a" /* OfficeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_badge__["a" /* Badge */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(navCtrl, events, formBuilder, connection, viewCtrl) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.formBuilder = formBuilder;
        this.connection = connection;
        this.viewCtrl = viewCtrl;
        this.contact = {};
        this.global = {};
        this.contactForm = this.formBuilder.group({
            full_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            mobile_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            email_address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
    }
    ContactUsPage.prototype.saveContactUs = function () {
        var _this = this;
        this.connection.doPost('Contacts/save', this.contact, 'sending details!').then(function (response) {
            _this.events.publish('loading:close');
            _this.dismiss(response);
        });
    };
    ContactUsPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/contact-us/contact-us.html"*/'<ion-header>\n  <ion-toolbar ion-text color="primary">\n    <ion-title>\n      Contact Us\n    </ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n          {{\'ChatScreen._Close_\' | translate}}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="login">\n  <ion-grid class="slide_header">\n\n    <ion-row>\n      <div id="login-box">\n        <form [formGroup]="contactForm" (ngSubmit)="saveContactUs()">\n          <ion-list>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Full Name</ion-label>\n              <ion-input formControlName="full_name" required [(ngModel)]="contact.full_name" name="full_name" type="text" placeholder="Full Name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Mobile Number</ion-label>\n              <ion-input formControlName="mobile_number" required [(ngModel)]="contact.mobile_number" name="mobile_number" type="tel" placeholder="Mobile Number"\n                name="mobile_number"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Email Address</ion-label>\n              <ion-input formControlName="email_address" [(ngModel)]="contact.email_address" name="email_address" type="email" placeholder="Email Address"\n                name="email_address"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Message</ion-label>\n              <ion-input formControlName="message" required [(ngModel)]="contact.message" name="message" type="text" placeholder="Message"\n                name="message"></ion-input>\n            </ion-item>\n          </ion-list>\n          <button ion-button color="button" type="submit" color="button" [disabled]="!contactForm.valid" ion-button block>Send</button>\n        </form>\n      </div>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/contact-us/contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OfficeListPage = /** @class */ (function () {
    function OfficeListPage(navCtrl, navParams, viewCtrl, storage, platform, _network) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.platform = platform;
        this._network = _network;
        this.officeList = {};
        this.officeListCopy = {};
        this.searchText = "";
        this.modelFlagName = "";
        this.path = '';
        this.backDeregisterFunction = null;
        this.modelFlagName = this.navParams.data.modelFlagName;
    }
    OfficeListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.backDeregisterFunction = this.platform.registerBackButtonAction(function () {
            _this.dismiss(null);
        });
        this.storage.get('User').then(function (User) {
            if (User) {
                _this.path = 'OfficeList/' + User.id;
                //checking if online
                if (_this._network.type === 'none') {
                    _this.storage.get('OfflineOfficeList').then(function (officeList) {
                        _this.officeList = officeList;
                        _this.officeListCopy = _this.officeList;
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(_this.path).on('value', function (snapshot) {
                        _this.officeList = snapshot.val();
                        _this.officeListCopy = _this.officeList;
                        _this.storage.set('OfflineOfficeList', _this.officeList);
                    });
                }
            }
        });
    };
    OfficeListPage.prototype.dismiss = function (selectedOffice) {
        this.viewCtrl.dismiss(selectedOffice);
    };
    OfficeListPage.prototype.selectOffice = function (office) {
        this.dismiss(this.officeList[office]);
    };
    OfficeListPage.prototype.ionViewWillLeave = function () {
        if (this.backDeregisterFunction) {
            this.backDeregisterFunction();
        }
        this.backDeregisterFunction = null;
    };
    OfficeListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-office-list',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/office-list/office-list.html"*/'<ion-header>\n  <ion-toolbar ion-text color="primary">\n    <ion-title>\n      {{\'OfficeList._SelectOffice_\' | translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n          {{\'ChatScreen._Close_\' | translate}}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar [(ngModel)]="searchText" [showCancelButton]="shouldShowCancel">\n  </ion-searchbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item class="list_wrap" *ngFor="let CustomerBranchID of officeList | keys | objectFilter:\'CustomerName\':searchText:officeList" (click)="selectOffice(CustomerBranchID)">\n      {{officeList[CustomerBranchID].CustomerName}}\n      <ion-badge item-end color="secondary" *ngIf="modelFlagName === \'CaseStatus\' && officeList[CustomerBranchID].CaseSearch_BranchCount">{{officeList[CustomerBranchID].CaseSearch_BranchCount}}</ion-badge>\n      <ion-badge item-end color="secondary" *ngIf="modelFlagName === \'Communication\' && officeList[CustomerBranchID].Communication_BranchCount">{{officeList[CustomerBranchID].Communication_BranchCount}}</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/office-list/office-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
    ], OfficeListPage);
    return OfficeListPage;
}());

//# sourceMappingURL=office-list.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_change_password__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_profile_edit_profile__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notification_preferences_notification_preferences__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, _user, modalCtrl, connection, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this._user = _user;
        this.modalCtrl = modalCtrl;
        this.connection = connection;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.user = null;
        this.client = null;
        this.global = null;
        this.data = {};
        this.global = __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Global */];
    }
    AccountPage.prototype.openEditProfile = function () {
        var editProfilePageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__edit_profile_edit_profile__["a" /* EditProfilePage */]);
        editProfilePageModal.onDidDismiss(function (data) {
        });
        editProfilePageModal.present();
    };
    AccountPage.prototype.openChangePassword = function () {
        var changePasswordPagePageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__change_password_change_password__["a" /* ChangePasswordPage */]);
        changePasswordPagePageModal.onDidDismiss(function (data) {
        });
        changePasswordPagePageModal.present();
    };
    AccountPage.prototype.openNotifications = function () {
        var notificationPreferencesPageModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__notification_preferences_notification_preferences__["a" /* NotificationPreferencesPage */]);
        notificationPreferencesPageModal.onDidDismiss(function (data) {
        });
        notificationPreferencesPageModal.present();
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/account/account.html"*/'<ion-header no-border>\n    <header title="My Account"></header>\n</ion-header>\n<ion-content>\n    <div class="settings">\n        <ion-list inset>\n            <ion-item (click)="openEditProfile()">\n                <h2>Edit Profile</h2>\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n            <ion-item (click)="openChangePassword()">\n                <h2>Change Password</h2>\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n            <ion-item (click)="openNotifications()">\n                <h2>Notification Preferences</h2>\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__password_validation__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, viewController, user, connection, events, formBuilder, network) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.user = user;
        this.connection = connection;
        this.events = events;
        this.formBuilder = formBuilder;
        this.network = network;
        this.submitted = false;
        this.global = {};
        this.global = __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Global */];
        this.changePasswordForm = this.formBuilder.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            new_password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required],
            confirm_password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        }, {
            validator: __WEBPACK_IMPORTED_MODULE_7__password_validation__["a" /* PasswordValidation */].MatchPassword
        });
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        //checking if offline
        if (this.network.type === 'none') {
            this.dismiss('Not available in Offline');
        }
        else {
            //getting profile data from server
            this.getData();
        }
    };
    ChangePasswordPage.prototype.getData = function () {
        var _this = this;
        this.connection.doPost('MobileApp/GetUserProfile').then(function (response) {
        }).catch(function (error) {
            _this.dismiss(error);
        });
    };
    ChangePasswordPage.prototype.update = function () {
        var _this = this;
        //prevent dublicate submit
        if (this.submitted) {
            return false;
        }
        this.submitted = true;
        //updating
        this.connection.doPost('MobileApp/UserProfile_ChangePassword', {
            Password: this.changePasswordForm.get('new_password').value,
            OldPassword: this.changePasswordForm.get('password').value,
        }, 'changing').then(function (response) {
            if (response.Status) {
                _this.events.publish('toast:create', response.Message);
                _this.dismiss(response);
            }
            else {
                _this.submitted = false;
                _this.events.publish('toast:error', response.Message);
            }
        }).catch(function (error) {
            _this.submitted = false;
        });
    };
    ChangePasswordPage.prototype.dismiss = function (data) {
        this.viewController.dismiss(data);
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/account/change-password/change-password.html"*/'<ion-header>\n  <ion-toolbar ion-text color="primary">\n    <ion-title>Change Password</ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n        {{\'Common._Close\' | translate}}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding="">\n  <form [formGroup]="changePasswordForm" (ngSubmit)="update()">\n    <ion-list>\n      <ion-item>\n        <ion-label ion-text color="primary" floating>\n          Current Password\n        </ion-label>\n        <ion-input formControlName="password" autofocus required type="password" placeholder="Current Password" name="password"></ion-input>\n      </ion-item>\n      <div class="error-message-block" *ngIf="changePasswordForm.controls.password.errors && (changePasswordForm.controls.password.dirty || changePasswordForm.controls.password.touched)">\n        <span *ngIf="changePasswordForm.controls.password.errors.required">Password is required</span>\n      </div>\n      <ion-item>\n        <ion-label ion-text color="primary" floating>\n          New Password\n        </ion-label>\n        <ion-input required formControlName="new_password" type="password" placeholder="New Password" name="new_password"></ion-input>\n      </ion-item>\n      <div class="error-message-block" *ngIf="changePasswordForm.controls.new_password.errors && (changePasswordForm.controls.new_password.dirty || changePasswordForm.controls.new_password.touched)">\n        <span *ngIf="changePasswordForm.controls.new_password.errors.required">New Password is required</span>\n      </div>\n      <ion-item>\n        <ion-label ion-text color="primary" floating>\n          Confirm Password\n        </ion-label>\n        <ion-input required formControlName="confirm_password" type="password" placeholder="Confirm Password" name="confirm_password"></ion-input>\n      </ion-item>\n      <div class="error-message-block" *ngIf="changePasswordForm.controls.confirm_password.errors && (changePasswordForm.controls.confirm_password.dirty || changePasswordForm.controls.confirm_password.touched)">\n        <span *ngIf="changePasswordForm.controls.confirm_password.errors.required">Confirm Password is required</span>\n        <span *ngIf="changePasswordForm.controls.confirm_password.errors?.MatchPassword">Confirm Password should be same as New Password</span>\n      </div>\n    </ion-list>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col>\n          <button ion-button block type="submit" [disabled]="!changePasswordForm.valid">\n            Change Password\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/account/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */]) === "function" && _h || Object])
    ], ChangePasswordPage);
    return ChangePasswordPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__(22);
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
    function EditProfilePage(navCtrl, navParams, viewController, user, connection, events, formBuilder, network, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.user = user;
        this.connection = connection;
        this.events = events;
        this.formBuilder = formBuilder;
        this.network = network;
        this.storage = storage;
        this.submitted = false;
        this.global = {};
        this.global = __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Global */];
        this.editProfileForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(/^[A-Za-z\s]+$/)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            mobile_number: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(10), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(/^\d{10}$/)]]
        });
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        //checking if offline
        if (this.network.type === 'none') {
            this.dismiss('Not available in Offline');
        }
        else {
            //getting profile data from server
            this.getData();
        }
    };
    EditProfilePage.prototype.getData = function () {
        var _this = this;
        this.connection.doPost('MobileApp/GetUserProfile').then(function (response) {
            _this.editProfileForm.setValue({
                name: response[0].Displayname,
                email: response[0].EmailID,
                mobile_number: response[0].MobileNo,
            });
        }).catch(function (error) {
            _this.dismiss(error);
        });
    };
    EditProfilePage.prototype.update = function () {
        var _this = this;
        //prevent dublicate submit
        if (this.submitted) {
            return false;
        }
        this.submitted = true;
        //updating
        this.connection.doPost('MobileApp/UserProfile_EditInfo', {
            DisplayName: this.editProfileForm.get('name').value,
            EmailID: this.editProfileForm.get('email').value,
            MobileNo: this.editProfileForm.get('mobile_number').value,
        }, 'updating').then(function (response) {
            if (response.Status) {
                _this.events.publish('toast:create', response.Message);
                //set in User data
                _this.storage.get('User').then(function (user) {
                    if (user) {
                        user.DisplayName = _this.editProfileForm.get('name').value;
                        user.EmailID = _this.editProfileForm.get('email').value;
                        user.MobileNo = _this.editProfileForm.get('mobile_number').value;
                        _this.storage.set('User', user).then(function (user) {
                            _this.dismiss(user);
                            //publish user:updated event to all
                            _this.events.publish('user:changed', user);
                        });
                    }
                    else {
                        _this.dismiss(null);
                    }
                });
            }
            else {
                _this.submitted = false;
                _this.events.publish('toast:error', response.Message);
            }
        }).catch(function (error) {
            _this.submitted = false;
        });
    };
    EditProfilePage.prototype.dismiss = function (data) {
        this.viewController.dismiss(data);
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/account/edit-profile/edit-profile.html"*/'<ion-header>\n  <ion-toolbar ion-text color="primary">\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n        {{\'Common._Close\' | translate}}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding="">\n  <form [formGroup]="editProfileForm" (ngSubmit)="update()">\n    <ion-list>\n      <ion-item>\n        <ion-label ion-text color="primary" floating>\n          Name\n        </ion-label>\n        <ion-input formControlName="name" autofocus required type="text" placeholder="Name" name="name"></ion-input>\n      </ion-item>\n      <div class="error-message-block" *ngIf="editProfileForm.controls.name.errors && (editProfileForm.controls.name.dirty || editProfileForm.controls.name.touched)">\n        <span *ngIf="editProfileForm.controls.name.errors.required">Name is required</span>\n      </div>\n      <ion-item>\n        <ion-label ion-text color="primary" floating>\n          Email\n        </ion-label>\n        <ion-input required formControlName="email" type="email" placeholder="Email" name="email"></ion-input>\n      </ion-item>\n      <div class="error-message-block" *ngIf="editProfileForm.controls.email.errors && (editProfileForm.controls.email.dirty || editProfileForm.controls.email.touched)">\n        <span *ngIf="editProfileForm.controls.email.errors.required">Email is required</span>\n        <span *ngIf="editProfileForm.controls.email.errors.pattern">Invalid email</span>\n      </div>\n      <ion-item>\n        <ion-label ion-text color="primary" floating>\n          Mobile Number\n        </ion-label>\n        <ion-input required minLength="10" maxLength="10" formControlName="mobile_number" type="tel" placeholder="Mobile Number" name="mobile_number"></ion-input>\n      </ion-item>\n      <div class="error-message-block" *ngIf="editProfileForm.controls.mobile_number.errors && (editProfileForm.controls.mobile_number.dirty || editProfileForm.controls.mobile_number.touched)">\n        <span *ngIf="editProfileForm.controls.mobile_number.errors.required">Mobile Number is required</span>\n        <span *ngIf="editProfileForm.controls.mobile_number.errors.minlength">Mobile Number should be of 10 digits</span>\n        <span *ngIf="editProfileForm.controls.mobile_number.errors.maxlength">Mobile Number should be of 10 digits max</span>\n        <span *ngIf="editProfileForm.controls.mobile_number.errors.pattern">Invalid mobile number</span>\n      </div>\n    </ion-list>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col>\n          <button ion-button block type="submit" [disabled]="!editProfileForm.valid">\n            Update\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/account/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _j || Object])
    ], EditProfilePage);
    return EditProfilePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationPreferencesPage = /** @class */ (function () {
    function NotificationPreferencesPage(navCtrl, navParams, viewController, user, connection, events, network) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewController = viewController;
        this.user = user;
        this.connection = connection;
        this.events = events;
        this.network = network;
        this.data = {};
        this.submitted = false;
        this.global = {};
        this.global = __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */];
    }
    NotificationPreferencesPage.prototype.ionViewDidLoad = function () {
        //checking if offline
        if (this.network.type === 'none') {
            this.dismiss('Not available in Offline');
        }
        else {
            //getting profile data from server
            this.getData();
        }
    };
    NotificationPreferencesPage.prototype.getData = function () {
        var _this = this;
        this.connection.doPost('MobileApp/GetUserProfile').then(function (response) {
            _this.data = response[0];
        }).catch(function (error) {
            _this.dismiss(error);
        });
    };
    NotificationPreferencesPage.prototype.update = function () {
        var _this = this;
        //prevent dublicate submit
        if (this.submitted) {
            return false;
        }
        this.submitted = true;
        //updating
        this.connection.doPost('MobileApp/UserProfile_AlertPreference', {
            Alert_Pickup: this.data.Alert_Pickup,
            Alert_Dispatch: this.data.Alert_Dispatch,
            Alert_Communication: this.data.Alert_Communication,
        }, 'updating').then(function (response) {
            if (response.Status) {
                _this.events.publish('toast:create', response.Message);
                _this.dismiss(response);
            }
            else {
                _this.submitted = false;
                _this.events.publish('toast:error', response.Message);
            }
        }).catch(function (error) {
            _this.submitted = false;
        });
    };
    NotificationPreferencesPage.prototype.dismiss = function (data) {
        this.viewController.dismiss(data);
    };
    NotificationPreferencesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification-preferences',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/account/notification-preferences/notification-preferences.html"*/'<ion-header>\n  <ion-toolbar ion-text color="primary">\n    <ion-title>Notification Preference</ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n        {{\'Common._Close\' | translate}}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding="">\n  <ion-list *ngIf="data">\n    <ion-item>\n      <ion-label>Pickup</ion-label>\n      <ion-toggle mode="ios" color="secondary" [(ngModel)]="data.Alert_Pickup"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dispatch</ion-label>\n      <ion-toggle mode="ios" color="secondary" [(ngModel)]="data.Alert_Dispatch"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Communication</ion-label>\n      <ion-toggle mode="ios" color="secondary" [(ngModel)]="data.Alert_Communication"></ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-grid padding>\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="update()">\n          Update\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/account/notification-preferences/notification-preferences.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]) === "function" && _g || Object])
    ], NotificationPreferencesPage);
    return NotificationPreferencesPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=notification-preferences.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStatusModalPageModule", function() { return CaseStatusModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__case_status_modal__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CaseStatusModalPageModule = /** @class */ (function () {
    function CaseStatusModalPageModule() {
    }
    CaseStatusModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__case_status_modal__["a" /* CaseStatusModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__case_status_modal__["a" /* CaseStatusModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], CaseStatusModalPageModule);
    return CaseStatusModalPageModule;
}());

//# sourceMappingURL=case-status-modal.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseStatusModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CaseStatusModalPage = /** @class */ (function () {
    function CaseStatusModalPage(navCtrl, navParams, viewCtrl, _callNumber, _inAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._callNumber = _callNumber;
        this._inAppBrowser = _inAppBrowser;
        this.title = 'loading';
        this.item = {};
        this.item = this.navParams.data;
        this.title = this.item.Patient;
    }
    CaseStatusModalPage.prototype.ionViewDidEnter = function () {
        this.doTranslate();
    };
    CaseStatusModalPage.prototype.doTranslate = function () {
    };
    CaseStatusModalPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss();
    };
    CaseStatusModalPage.prototype.callNumber = function (number) {
        this._callNumber.callNumber(number, true);
    };
    CaseStatusModalPage.prototype.openURL = function (url) {
        if (url.trim() !== '') {
            var browser = this._inAppBrowser.create(url);
        }
    };
    CaseStatusModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-case-status-modal',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/case-status/case-status-modal/case-status-modal.html"*/'<ion-header>\n  <ion-toolbar ion-text color="casestatus">\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n        {{\'Common._Close\' | translate}}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <ion-icon name="ios-medical" item-start></ion-icon>\n        {{\'CaseStatus.Dispatch._Patient\' | translate}}\n        <ion-note item-end>{{item.Patient}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-calendar" item-start></ion-icon>\n        {{\'CaseStatus.Dispatch._DispatchDate\' | translate}}\n        <ion-note item-end>{{item.formatedDispatchDate}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-bus" item-start></ion-icon>\n        {{\'CaseStatus.Dispatch._DeliveryMode\' | translate}}\n        <ion-note item-end>{{item.JobDeliveryMode}}</ion-note>\n      </ion-item>\n      <ion-item-group *ngIf="item.JobDeliveryMode === \'Delivery Person\'">\n        <ion-item-divider *ngIf="item.JobDeliveryMode === \'Delivery Person\'" color="light">\n          {{item.JobDeliveryMode}} {{\'CaseStatus.Dispatch._Details\' | translate}}\n        </ion-item-divider>\n        <ion-item>\n          <ion-icon name="ios-person" item-start></ion-icon>\n          {{\'CaseStatus.Dispatch._PersonName\' | translate}} \n          <ion-note item-end>{{item.DeliveryBoyEmployee}}</ion-note>\n        </ion-item>\n        <ion-item (click)="callNumber(item.MobileNo)">\n          <ion-icon name="ios-call" item-start></ion-icon>\n          {{\'CaseStatus.Dispatch._MobileNumber\' | translate}} \n          <ion-note item-end>{{item.MobileNo}}</ion-note>\n        </ion-item>\n      </ion-item-group>\n      <ion-item-group *ngIf="item.JobDeliveryMode == \'Courier\'">\n        <ion-item-divider *ngIf="item.JobDeliveryMode == \'Courier\'" color="light">\n          {{item.JobDeliveryMode}} {{\'CaseStatus.Dispatch._Details\' | translate}}\n        </ion-item-divider>\n        <ion-item>\n          <ion-icon name="ios-document" item-start></ion-icon>\n          {{\'CaseStatus.Dispatch._Courier\' | translate}} \n          <ion-note item-end>{{item.Courier}}</ion-note>\n        </ion-item>\n        <ion-item (click)="openURL(item.TrackingURL)">\n          <ion-icon name="logo-steam" item-start></ion-icon>\n          {{\'CaseStatus.Dispatch._TrackingNo\' | translate}} \n          <ion-note item-end>{{item.TrackingNo}}</ion-note>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/case-status/case-status-modal/case-status-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], CaseStatusModalPage);
    return CaseStatusModalPage;
}());

//# sourceMappingURL=case-status-modal.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPreferencesPageModule", function() { return NotificationPreferencesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_preferences__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationPreferencesPageModule = /** @class */ (function () {
    function NotificationPreferencesPageModule() {
    }
    NotificationPreferencesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification_preferences__["a" /* NotificationPreferencesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification_preferences__["a" /* NotificationPreferencesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], NotificationPreferencesPageModule);
    return NotificationPreferencesPageModule;
}());

//# sourceMappingURL=notification-preferences.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
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
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatReadModalPageModule", function() { return ChatReadModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_read_modal__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ChatReadModalPageModule = /** @class */ (function () {
    function ChatReadModalPageModule() {
    }
    ChatReadModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_read_modal__["a" /* ChatReadModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_read_modal__["a" /* ChatReadModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__["OrderModule"],
            ],
        })
    ], ChatReadModalPageModule);
    return ChatReadModalPageModule;
}());

//# sourceMappingURL=chat-read-modal.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatReadModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatReadModalPage = /** @class */ (function () {
    function ChatReadModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.message = {};
        this.chatUsers = {};
        this.userID = null;
        this.ticket = null;
        this.loginTypeID = null;
        this.reads = [];
        this.message = this.navParams.data.message;
        this.chatUsers = this.navParams.data.chatUsers;
        this.ticket = this.navParams.data.ticket;
        this.userID = this.navParams.data.userID;
        this.loginTypeID = this.navParams.data.loginTypeID;
        //listen for read event
        this.messageReadRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('Communications/' + this.ticket + '/' + 'Chat/Read');
    }
    ChatReadModalPage.prototype.ionViewDidLoad = function () {
        this.messageReadRef.on('child_changed', function (snapshot) {
            console.log(snapshot.val());
        });
        this.makeList();
    };
    ChatReadModalPage.prototype.makeList = function () {
        this.reads = [];
        if (this.message.Read) {
            for (var userId in this.message.Read) {
                //not adding for self
                console.log(this.chatUsers);
                if (userId !== this.message.UserID && userId !== this.userID) {
                    //escaping if no name present
                    if (userId in this.chatUsers) {
                        this.reads.push({
                            name: this.chatUsers[userId].Name,
                            time: this.message.Read[userId],
                        });
                    }
                }
            }
        }
    };
    ChatReadModalPage.prototype.ionViewWillLeave = function () {
        //off read event
        this.messageReadRef.off('child_changed');
    };
    ChatReadModalPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss();
    };
    ChatReadModalPage.prototype.getTime = function (time) {
        if (time) {
            var momentTime = null;
            momentTime = __WEBPACK_IMPORTED_MODULE_3_moment__(time).utc().local();
            //checking if its dd-mm-yyy format
            if (!momentTime.isValid() && __WEBPACK_IMPORTED_MODULE_3_moment__(time, 'DD-MM-YYYY hh:mm:ss').isValid()) {
                momentTime = __WEBPACK_IMPORTED_MODULE_3_moment__(time, 'DD-MM-YYYY hh:mm:ss').utc().local();
            }
            if (momentTime.isValid()) {
                var today = __WEBPACK_IMPORTED_MODULE_3_moment__().startOf('day');
                if (momentTime.isSame(today, 'd')) {
                    return momentTime.format('hh:mm a');
                }
                else if (momentTime.isBetween(__WEBPACK_IMPORTED_MODULE_3_moment__().subtract(7, 'days').startOf('day'), today)) {
                    return momentTime.format('ddd D, hh:mm a');
                }
                else if (momentTime.isBetween(__WEBPACK_IMPORTED_MODULE_3_moment__().startOf('month'), today)) {
                    return momentTime.format('ddd D, hh:mm a');
                }
                else {
                    return momentTime.format('ddd, D MMM hh:mm a');
                }
            }
            else {
            }
        }
        return time;
    };
    ChatReadModalPage.prototype.inRead = function (userId) {
        //checking if its logged in user
        if (userId === this.message.UserID) {
            return true;
        }
        return (userId in this.message.Read);
    };
    ChatReadModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat-read-modal',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/chat/chat-read-modal/chat-read-modal.html"*/'<ion-header>\n  <ion-toolbar ion-text color="primary">\n    <ion-title>\n        {{\'ChatScreen._MessageInfo_\' | translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n          {{\'ChatScreen._Close_\' | translate}}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class="chat">\n    <chat-bubble [id]="\'message-\'+message.key" class="message-wrapper" [message]="message" [userID]="userID" [ticket]="ticket"\n      [users]="chatUsers" [LoginTypeID]="loginTypeID"></chat-bubble>\n  </div>\n  <ion-list>\n    <ion-list-header>\n      <h2 class="read">\n          {{\'ChatScreen._ReadBy_\' | translate}}\n      </h2>\n    </ion-list-header>\n    <ion-item *ngFor="let read of reads | orderBy:\'time\':true">\n      <h2>{{read.name}}</h2>\n      <ion-note item-end>\n        {{getTime(read.time)}}\n      </ion-note>\n    </ion-item>\n    <ion-item class="more">\n      <ion-icon name="ios-more-outline"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      <h2 class="unread">\n          {{\'ChatScreen._UnreadBy\' | translate}}\n      </h2>\n    </ion-list-header>\n    <ion-item *ngFor="let userId of chatUsers | keys" [hidden]="inRead(userId)">\n      <h2>{{chatUsers[userId].Name}}</h2>\n    </ion-item>\n    <ion-item class="more">\n      <ion-icon name="ios-more-outline"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/chat/chat-read-modal/chat-read-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], ChatReadModalPage);
    return ChatReadModalPage;
}());

//# sourceMappingURL=chat-read-modal.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStatusPageModule", function() { return CaseStatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__case_status__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CaseStatusPageModule = /** @class */ (function () {
    function CaseStatusPageModule() {
    }
    CaseStatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__case_status__["a" /* CaseStatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__case_status__["a" /* CaseStatusPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__["OrderModule"],
            ]
        })
    ], CaseStatusPageModule);
    return CaseStatusPageModule;
}());

//# sourceMappingURL=case-status.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedMediaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_video_editor__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_streaming_media__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mime_types__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mime_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mime_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_uuid__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SavedMediaPage = /** @class */ (function () {
    function SavedMediaPage(navCtrl, navParams, _file, _videoEditor, _actionSheetCtrl, _events, _photoLibrary, _viewController, streamingMedia, _elementRef, _imageViewerController, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._file = _file;
        this._videoEditor = _videoEditor;
        this._actionSheetCtrl = _actionSheetCtrl;
        this._events = _events;
        this._photoLibrary = _photoLibrary;
        this._viewController = _viewController;
        this.streamingMedia = streamingMedia;
        this._elementRef = _elementRef;
        this._imageViewerController = _imageViewerController;
        this.translate = translate;
        this.files = [];
        this.filesInitiated = false;
        this.path = '';
        this.folder = '';
        this.selectedTab = null;
        this.save_to_gallery_tranlate = 'Video';
        this.delete_translate = 'Delete';
        this.deleted_translate = 'Deleted';
        this.saved_translate = 'Saved';
        this.failed_to_delete_translate = 'Failed to delete!';
        this.failed_to_save_transalate = 'Failed to save';
        this.cancel_translate = 'Cancel';
        this.permission_not_granted_translate = 'Permissions weren\'t granted to save';
        this.path = this.navParams.data.path;
        this.folder = this.navParams.data.folder;
        this.selectedTab = 'image';
    }
    SavedMediaPage.prototype.ionViewDidLoad = function () {
    };
    SavedMediaPage.prototype.segmentChanged = function (event) {
    };
    SavedMediaPage.prototype.doTranslate = function () {
        var _this = this;
        //save_to_gallery_tranlate
        this.translate.get('ChatScreen._SaveToGallery').subscribe(function (translated) {
            _this.save_to_gallery_tranlate = translated;
        });
        //cancel
        this.translate.get('Common._Cancel_').subscribe(function (translated) {
            _this.cancel_translate = translated;
        });
        //delete
        this.translate.get('ChatScreen._Delete_').subscribe(function (translated) {
            _this.delete_translate = translated;
        });
        //saved
        this.translate.get('ChatScreen._Saved_').subscribe(function (translated) {
            _this.saved_translate = translated;
        });
        //failed to save
        this.translate.get('ChatScreen._FailedToSave_').subscribe(function (translated) {
            _this.failed_to_save_transalate = translated;
        });
        //deleted
        this.translate.get('ChatScreen._Deleted_').subscribe(function (translated) {
            _this.deleted_translate = translated;
        });
        //failed to delete
        this.translate.get('ChatScreen._FailedToDelete_').subscribe(function (translated) {
            _this.failed_to_delete_translate = translated;
        });
        //failed to delete
        this.translate.get('ChatScreen._PermissionNotGranted_').subscribe(function (translated) {
            _this.permission_not_granted_translate = translated;
        });
    };
    SavedMediaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.doTranslate();
        this._file.listDir(this.path, this.folder).then(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isFile) {
                    var dir_1 = entry.nativeURL;
                    dir_1 = dir_1.substring(0, dir_1.lastIndexOf('/') + 1);
                    entry.getMetadata(function (metadata) {
                        var type = _this.getFileType(entry.name);
                        var index = _this.files.push({
                            dir: dir_1,
                            name: entry.name,
                            type: type,
                            nativeURL: entry.nativeURL,
                            time: metadata.modificationTime.getTime(),
                            thumbnail: '',
                            uuid: __WEBPACK_IMPORTED_MODULE_8_angular2_uuid__["UUID"].UUID(),
                        });
                        _this.setThumbnail(index - 1);
                    });
                }
            });
            _this.filesInitiated = true;
        }).catch(function (error) {
            _this.filesInitiated = true;
        });
    };
    SavedMediaPage.prototype.getFileType = function (name) {
        var mimeType = __WEBPACK_IMPORTED_MODULE_6_mime_types__["lookup"](name);
        return mimeType.substring(0, mimeType.lastIndexOf('/'));
    };
    SavedMediaPage.prototype.openFile = function (file, index) {
        switch (file.type) {
            case 'image':
                this.openImage(file);
                break;
            case 'audio':
                this.openAudio(file);
                break;
            case 'video':
                this.openVideo(file);
                break;
        }
    };
    SavedMediaPage.prototype.openImage = function (file) {
        var element = this._elementRef.nativeElement.querySelector('#message-file-' + file.uuid);
        var image = this._imageViewerController.create(element);
        image.present();
    };
    SavedMediaPage.prototype.openAudio = function (file) {
        var options = {
            successCallback: function () { console.log('Audio played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            shouldAutoClose: true,
            bgImage: 'https://s3-ap-southeast-1.amazonaws.com/eiosys/images/equilizer.gif',
        };
        this.streamingMedia.playAudio(file.nativeURL, options);
    };
    SavedMediaPage.prototype.openVideo = function (file) {
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            shouldAutoClose: true,
        };
        this.streamingMedia.playVideo(file.nativeURL, options);
    };
    SavedMediaPage.prototype.takeAction = function (file, index) {
        var _this = this;
        var actionSheet = this._actionSheetCtrl.create({
            title: file.name,
            buttons: [
                {
                    text: this.delete_translate,
                    role: 'destructive',
                    handler: function () {
                        //deleting file
                        _this._file.removeFile(file.dir, file.name).then(function (status) {
                            _this._events.publish('toast:create', _this.deleted_translate);
                            _this.files.splice(index, 1);
                            _this._events.publish('message:file:deleted', file.name);
                        }).catch(function (error) {
                            _this._events.publish('toast:create', _this.failed_to_delete_translate);
                        });
                    }
                }, {
                    text: this.save_to_gallery_tranlate,
                    handler: function () {
                        //saving file
                        _this.saveToLibrary(file);
                    }
                }, {
                    text: this.cancel_translate,
                    role: 'cancel',
                }
            ]
        });
        actionSheet.present();
    };
    SavedMediaPage.prototype.dismiss = function (data) {
        this._viewController.dismiss();
    };
    SavedMediaPage.prototype.isHidden = function (file) {
        return this.selectedTab.toLowerCase() !== file.type;
    };
    SavedMediaPage.prototype.setThumbnail = function (index) {
        var _this = this;
        var file = this.files[index];
        var thumbnail = '';
        switch (file.type) {
            case 'image':
                this.files[index].thumbnail = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* normalizeURL */])(file.nativeURL);
                break;
            case 'audio':
                this.files[index].thumbnail = 'assets/img/audio-wave.png';
                break;
            case 'video':
                this.files[index].thumbnail = 'assets/img/video.png';
                var options = {
                    fileUri: file.nativeURL,
                    outputFileName: file.name,
                    width: 160,
                    height: 160,
                    quality: 50,
                    maintainAspectRatio: true,
                };
                this._videoEditor.createThumbnail(options).then(function (url) {
                    _this.files[index].thumbnail = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* normalizeURL */])(url);
                }).catch(function (error) {
                });
        }
    };
    SavedMediaPage.prototype.saveToLibrary = function (file) {
        var _this = this;
        this._photoLibrary.requestAuthorization().then(function () {
            switch (file.type) {
                case 'image':
                    _this._photoLibrary.saveImage(file.nativeURL, __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Global */].album).then(function (status) {
                        _this._events.publish('toast:create', _this.saved_translate);
                    }).catch(function (error) {
                        console.log(error);
                        if (error === 'Retrieved asset is nil') {
                            _this._events.publish('toast:create', _this.saved_translate);
                        }
                        else {
                            _this._events.publish('toast:error', _this.failed_to_save_transalate);
                        }
                    });
                    break;
                case 'video':
                case 'audio':
                    _this._photoLibrary.saveVideo(file.nativeURL, __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Global */].album).then(function (status) {
                        _this._events.publish('toast:create', _this.saved_translate);
                    }).catch(function (error) {
                        console.log(error);
                        if (error === 'Retrieved asset is nil') {
                            _this._events.publish('toast:create', _this.saved_translate);
                        }
                        else {
                            _this._events.publish('toast:error', _this.failed_to_save_transalate);
                        }
                    });
                    break;
            }
        }).catch(function (error) {
            console.log(error);
            _this._events.publish('toast:error', _this.permission_not_granted_translate);
        });
    };
    SavedMediaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-saved-media',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/chat/saved-media/saved-media.html"*/'<ion-header no-border>\n  <ion-toolbar ion-text color="primary">\n    <ion-title>\n        {{\'ChatScreen._SavedMedia_\' | translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n          {{\'ChatScreen._Close_\' | translate}}\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment padding mode="ios" [(ngModel)]="selectedTab" color="primary" (ionChange)="segmentChanged($event)">\n      <ion-segment-button value="image">\n          {{\'ChatScreen._Images_\' | translate}}\n      </ion-segment-button>\n      <ion-segment-button value="video">\n          {{\'ChatScreen._Videos_\' | translate}}\n      </ion-segment-button>\n      <ion-segment-button value="audio">\n          {{\'ChatScreen._Audios_\' | translate}}\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <center-spinner [hidden]="filesInitiated"></center-spinner>\n  <div class="medias" padding>\n    <div class="media" *ngFor="let file of files;let i = index" [hidden]="isHidden(file)" (click)="openFile(file, i)"\n      (press)="takeAction(file, i)">\n      <img [src]="file.thumbnail" [id]="\'message-file-\' + file.uuid"/>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/chat/saved-media/saved-media.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_video_editor__["a" /* VideoEditor */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__["a" /* PhotoLibrary */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], SavedMediaPage);
    return SavedMediaPage;
}());

//# sourceMappingURL=saved-media.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedMediaPageModule", function() { return SavedMediaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saved_media__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SavedMediaPageModule = /** @class */ (function () {
    function SavedMediaPageModule() {
    }
    SavedMediaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__saved_media__["a" /* SavedMediaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__saved_media__["a" /* SavedMediaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__["OrderModule"],
            ],
        })
    ], SavedMediaPageModule);
    return SavedMediaPageModule;
}());

//# sourceMappingURL=saved-media.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_elastic__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_elastic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_elastic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_long_press__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_long_press___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ionic_long_press__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_elastic__["ElasticModule"],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_order_pipe__["OrderModule"],
                __WEBPACK_IMPORTED_MODULE_9_ionic_long_press__["LongPressModule"],
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContactUsPageModule = /** @class */ (function () {
    function ContactUsPageModule() {
    }
    ContactUsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__contact_us__["a" /* ContactUsPage */]
            ]
        })
    ], ContactUsPageModule);
    return ContactUsPageModule;
}());

//# sourceMappingURL=contact-us.module.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationPageModule", function() { return CommunicationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communication__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CommunicationPageModule = /** @class */ (function () {
    function CommunicationPageModule() {
    }
    CommunicationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__communication__["a" /* CommunicationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__communication__["a" /* CommunicationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_order_pipe__["OrderModule"],
            ],
        })
    ], CommunicationPageModule);
    return CommunicationPageModule;
}());

//# sourceMappingURL=communication.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connection_connection__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, events, formBuilder, connection) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.formBuilder = formBuilder;
        this.connection = connection;
        this.register = {};
        this.global = {};
        this.registerForm = this.formBuilder.group({
            full_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            contact_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            email_address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            confirm_password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
    }
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        this.connection.doPost('JobSeekers/register', this.register).then(function (response) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/register/register.html"*/'<ion-content class="login">\n  <ion-grid class="slide_header">\n\n    <ion-row>\n      <img class="logo" src="assets/img/logo.png">\n    </ion-row>\n    <ion-row>\n      <div id="login-box">\n        <form [formGroup]="registerForm" (ngSubmit)="doRegister()">\n          <ion-list>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Full Name</ion-label>\n              <ion-input formControlName="full_name" required [(ngModel)]="register.full_name" name="full_name" type="text" placeholder="Full Name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Mobile Number</ion-label>\n              <ion-input formControlName="contact_number" required [(ngModel)]="register.contact_number" name="contact_number" type="tel"\n                placeholder="Mobile Number" name="contact_number"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Email Address</ion-label>\n              <ion-input formControlName="email_address" [(ngModel)]="register.email_address" name="email_address" type="email" placeholder="Email Address"\n                name="email_address"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Password</ion-label>\n              <ion-input formControlName="password" required [(ngModel)]="register.password" name="password" type="password" placeholder="Password"\n                name="password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Confirm Password</ion-label>\n              <ion-input formControlName="confirm_password" required [(ngModel)]="register.confirm_password" name="confirm_password" type="password"\n                placeholder="Confirm Password" name="confirm_password"></ion-input>\n            </ion-item>\n          </ion-list>\n          <button type="submit" [disabled]="!registerForm.valid" ion-button block>Register</button>\n        </form>\n      </div>\n    </ion-row>\n\n    <img src="assets/img/or.png" />\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__providers_connection_connection__["a" /* ConnectionProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(22);
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
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = {};
        this.global = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Global */];
    }
    HelpPage.prototype.ionViewDidLoad = function () {
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/help/help.html"*/'<ion-header no-border>\n    <header [title]="\'Common._Help_\' | translate"></header>\n</ion-header>\n<ion-content padding>\n    <p>\n        App version: {{global.AppVersion}}\n    </p>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeListPageModule", function() { return OfficeListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__office_list__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OfficeListPageModule = /** @class */ (function () {
    function OfficeListPageModule() {
    }
    OfficeListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__office_list__["a" /* OfficeListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__office_list__["a" /* OfficeListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */],
            ],
        })
    ], OfficeListPageModule);
    return OfficeListPageModule;
}());

//# sourceMappingURL=office-list.module.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflinePageModule", function() { return OfflinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offline__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OfflinePageModule = /** @class */ (function () {
    function OfflinePageModule() {
    }
    OfflinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offline__["a" /* OfflinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offline__["a" /* OfflinePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            ],
        })
    ], OfflinePageModule);
    return OfflinePageModule;
}());

//# sourceMappingURL=offline.module.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupPageModule", function() { return PickupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickup__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PickupPageModule = /** @class */ (function () {
    function PickupPageModule() {
    }
    PickupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pickup__["a" /* PickupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pickup__["a" /* PickupPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_moment__["MomentModule"],
            ]
        })
    ], PickupPageModule);
    return PickupPageModule;
}());

//# sourceMappingURL=pickup.module.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(620);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
            ],
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(680);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(1110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(1112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_email_composer__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_badge__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_transfer__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_media_capture__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_media__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_vibration__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_video_capture_plus__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_streaming_media__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_video_editor__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_unique_device_id__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_photo_library__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_globalization__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_onesignal__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__app_component__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_about_about_module__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_account_account_module__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_case_status_case_status_module__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_case_status_case_status_modal_case_status_modal_module__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_account_change_password_change_password_module__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_chat_chat_module__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_chat_chat_read_modal_chat_read_modal_module__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_communication_communication_module__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_contact_us_contact_us_module__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_dashboard_dashboard_module__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_account_edit_profile_edit_profile_module__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_forgot_password_forgot_password_module__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_help_help_module__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_home_home_module__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_login_login_module__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_account_notification_preferences_notification_preferences_module__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_office_list_office_list_module__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_offline_offline_module__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_pickup_pickup_module__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_register_register_module__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_chat_saved_media_saved_media_module__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_search_search_module__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_tutorial_tutorial_module__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_welcome_welcome_module__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_office_service_office_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_firebase_transaction_firebase_transaction__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_common_common__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_angular2_moment__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_62_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_ng_elastic__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_ng_elastic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_63_ng_elastic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ngx_order_pipe__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ngx_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_64_ngx_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_ionic_long_press__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_ionic_long_press___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_65_ionic_long_press__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66_angularfire2__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68_angularfire2_auth__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69_ionic_img_viewer__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































































var firebaseConfig = {
    apiKey: "AIzaSyAeAsx1UOrRVQ9m9zlwvmHiTsCuvLtO-J4",
    authDomain: "illusion-dental-5d48c.firebaseapp.com",
    databaseURL: "https://illusion-dental-5d48c.firebaseio.com",
    projectId: "illusion-dental-5d48c",
    storageBucket: "illusion-dental-5d48c.appspot.com",
    messagingSenderId: "7402421237",
};
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_32__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_32__app_component__["a" /* MyApp */], {
                    mode: 'md',
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/case-status/case-status-modal/case-status-modal.module#CaseStatusModalPageModule', name: 'CaseStatusModalPage', segment: 'case-status-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/notification-preferences/notification-preferences.module#NotificationPreferencesPageModule', name: 'NotificationPreferencesPage', segment: 'notification-preferences', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat-read-modal/chat-read-modal.module#ChatReadModalPageModule', name: 'ChatReadModalPage', segment: 'chat-read-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/case-status/case-status.module#CaseStatusPageModule', name: 'CaseStatusPage', segment: 'case-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/saved-media/saved-media.module#SavedMediaPageModule', name: 'SavedMediaPage', segment: 'saved-media', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/communication/communication.module#CommunicationPageModule', name: 'CommunicationPage', segment: 'communication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/office-list/office-list.module#OfficeListPageModule', name: 'OfficeListPage', segment: 'office-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offline/offline.module#OfflinePageModule', name: 'OfflinePage', segment: 'offline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pickup/pickup.module#PickupPageModule', name: 'PickupPage', segment: 'pickup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_30__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__dental_illusion_db',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_66_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_67_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_68_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_69_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_33__pages_about_about_module__["AboutPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_account_account_module__["AccountPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_case_status_case_status_module__["CaseStatusPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_case_status_case_status_modal_case_status_modal_module__["CaseStatusModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_account_change_password_change_password_module__["ChangePasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_chat_chat_module__["ChatPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_chat_chat_read_modal_chat_read_modal_module__["ChatReadModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_communication_communication_module__["CommunicationPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_contact_us_contact_us_module__["ContactUsPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_account_edit_profile_edit_profile_module__["EditProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_forgot_password_forgot_password_module__["ForgotPasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_help_help_module__["HelpPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_48__pages_account_notification_preferences_notification_preferences_module__["NotificationPreferencesPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_office_list_office_list_module__["OfficeListPageModule"],
                __WEBPACK_IMPORTED_MODULE_50__pages_offline_offline_module__["OfflinePageModule"],
                __WEBPACK_IMPORTED_MODULE_51__pages_pickup_pickup_module__["PickupPageModule"],
                __WEBPACK_IMPORTED_MODULE_52__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_chat_saved_media_saved_media_module__["SavedMediaPageModule"],
                __WEBPACK_IMPORTED_MODULE_54__pages_search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_55__pages_tutorial_tutorial_module__["TutorialPageModule"],
                __WEBPACK_IMPORTED_MODULE_56__pages_welcome_welcome_module__["WelcomePageModule"],
                __WEBPACK_IMPORTED_MODULE_62_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_63_ng_elastic__["ElasticModule"],
                __WEBPACK_IMPORTED_MODULE_64_ngx_order_pipe__["OrderModule"],
                __WEBPACK_IMPORTED_MODULE_65_ionic_long_press__["LongPressModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_32__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_57__providers_connection_connection__["a" /* ConnectionProvider */],
                __WEBPACK_IMPORTED_MODULE_58__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_office_service_office_service__["a" /* OfficeServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_67_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_60__providers_firebase_transaction_firebase_transaction__["a" /* FirebaseTransactionProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_badge__["a" /* Badge */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_media_capture__["a" /* MediaCapture */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_video_capture_plus__["a" /* VideoCapturePlus */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_video_editor__["a" /* VideoEditor */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_globalization__["a" /* Globalization */],
                __WEBPACK_IMPORTED_MODULE_61__providers_common_common__["a" /* CommonProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_onesignal__["a" /* OneSignal */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/about/about.html"*/'<ion-header no-border>\n    <header [title]="\'Common._AboutApp_\' | translate"></header>\n</ion-header>\n<ion-content padding>\n    <h2>Mission statement</h2>\n    <p>\n        Our mission at Illusion Dental Laboratory is to provide only the highest quality dental restorations delivered in a timely\n        fashion with attentive customer service. We strive to provide the perfect blend of technical expertise, personal\n        service and dependable results. We strongly believe in relationships based on communication and feedback.We take\n        pride in using only the best restorative systems be it Bruxzir, Lava, Zirconia, Tilite, PFM, All-Ceramic, Implants\n        or Temporaries.\n    </p>\n    <h2>Expert Techs</h2>\n    <p>\n        As a customer, you have the peace of mind of knowing that your technicians are provided every means necessary to fabricate\n        superior restorations.We provide various kits to suit your dental Laboratory needs.From ﬁt to ﬁnish, we endeavor\n        to produce only the ﬁnest quality products. They’re guaranteed to raise a smile!\n    </p>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 309,
	"./af.js": 309,
	"./ar": 310,
	"./ar-dz": 311,
	"./ar-dz.js": 311,
	"./ar-kw": 312,
	"./ar-kw.js": 312,
	"./ar-ly": 313,
	"./ar-ly.js": 313,
	"./ar-ma": 314,
	"./ar-ma.js": 314,
	"./ar-sa": 315,
	"./ar-sa.js": 315,
	"./ar-tn": 316,
	"./ar-tn.js": 316,
	"./ar.js": 310,
	"./az": 317,
	"./az.js": 317,
	"./be": 318,
	"./be.js": 318,
	"./bg": 319,
	"./bg.js": 319,
	"./bm": 320,
	"./bm.js": 320,
	"./bn": 321,
	"./bn.js": 321,
	"./bo": 322,
	"./bo.js": 322,
	"./br": 323,
	"./br.js": 323,
	"./bs": 324,
	"./bs.js": 324,
	"./ca": 325,
	"./ca.js": 325,
	"./cs": 326,
	"./cs.js": 326,
	"./cv": 327,
	"./cv.js": 327,
	"./cy": 328,
	"./cy.js": 328,
	"./da": 329,
	"./da.js": 329,
	"./de": 330,
	"./de-at": 331,
	"./de-at.js": 331,
	"./de-ch": 332,
	"./de-ch.js": 332,
	"./de.js": 330,
	"./dv": 333,
	"./dv.js": 333,
	"./el": 334,
	"./el.js": 334,
	"./en-au": 335,
	"./en-au.js": 335,
	"./en-ca": 336,
	"./en-ca.js": 336,
	"./en-gb": 176,
	"./en-gb.js": 176,
	"./en-ie": 337,
	"./en-ie.js": 337,
	"./en-nz": 338,
	"./en-nz.js": 338,
	"./eo": 339,
	"./eo.js": 339,
	"./es": 340,
	"./es-do": 341,
	"./es-do.js": 341,
	"./es-us": 342,
	"./es-us.js": 342,
	"./es.js": 340,
	"./et": 343,
	"./et.js": 343,
	"./eu": 344,
	"./eu.js": 344,
	"./fa": 345,
	"./fa.js": 345,
	"./fi": 346,
	"./fi.js": 346,
	"./fo": 347,
	"./fo.js": 347,
	"./fr": 177,
	"./fr-ca": 348,
	"./fr-ca.js": 348,
	"./fr-ch": 349,
	"./fr-ch.js": 349,
	"./fr.js": 177,
	"./fy": 350,
	"./fy.js": 350,
	"./gd": 351,
	"./gd.js": 351,
	"./gl": 352,
	"./gl.js": 352,
	"./gom-latn": 353,
	"./gom-latn.js": 353,
	"./gu": 354,
	"./gu.js": 354,
	"./he": 355,
	"./he.js": 355,
	"./hi": 356,
	"./hi.js": 356,
	"./hr": 357,
	"./hr.js": 357,
	"./hu": 358,
	"./hu.js": 358,
	"./hy-am": 359,
	"./hy-am.js": 359,
	"./id": 360,
	"./id.js": 360,
	"./is": 361,
	"./is.js": 361,
	"./it": 362,
	"./it.js": 362,
	"./ja": 363,
	"./ja.js": 363,
	"./jv": 364,
	"./jv.js": 364,
	"./ka": 365,
	"./ka.js": 365,
	"./kk": 366,
	"./kk.js": 366,
	"./km": 367,
	"./km.js": 367,
	"./kn": 368,
	"./kn.js": 368,
	"./ko": 369,
	"./ko.js": 369,
	"./ky": 370,
	"./ky.js": 370,
	"./lb": 371,
	"./lb.js": 371,
	"./lo": 372,
	"./lo.js": 372,
	"./lt": 373,
	"./lt.js": 373,
	"./lv": 374,
	"./lv.js": 374,
	"./me": 375,
	"./me.js": 375,
	"./mi": 376,
	"./mi.js": 376,
	"./mk": 377,
	"./mk.js": 377,
	"./ml": 378,
	"./ml.js": 378,
	"./mr": 379,
	"./mr.js": 379,
	"./ms": 380,
	"./ms-my": 381,
	"./ms-my.js": 381,
	"./ms.js": 380,
	"./my": 382,
	"./my.js": 382,
	"./nb": 383,
	"./nb.js": 383,
	"./ne": 384,
	"./ne.js": 384,
	"./nl": 385,
	"./nl-be": 386,
	"./nl-be.js": 386,
	"./nl.js": 385,
	"./nn": 387,
	"./nn.js": 387,
	"./pa-in": 388,
	"./pa-in.js": 388,
	"./pl": 389,
	"./pl.js": 389,
	"./pt": 390,
	"./pt-br": 391,
	"./pt-br.js": 391,
	"./pt.js": 390,
	"./ro": 392,
	"./ro.js": 392,
	"./ru": 393,
	"./ru.js": 393,
	"./sd": 394,
	"./sd.js": 394,
	"./se": 395,
	"./se.js": 395,
	"./si": 396,
	"./si.js": 396,
	"./sk": 397,
	"./sk.js": 397,
	"./sl": 398,
	"./sl.js": 398,
	"./sq": 399,
	"./sq.js": 399,
	"./sr": 400,
	"./sr-cyrl": 401,
	"./sr-cyrl.js": 401,
	"./sr.js": 400,
	"./ss": 402,
	"./ss.js": 402,
	"./sv": 403,
	"./sv.js": 403,
	"./sw": 404,
	"./sw.js": 404,
	"./ta": 405,
	"./ta.js": 405,
	"./te": 406,
	"./te.js": 406,
	"./tet": 407,
	"./tet.js": 407,
	"./th": 408,
	"./th.js": 408,
	"./tl-ph": 409,
	"./tl-ph.js": 409,
	"./tlh": 410,
	"./tlh.js": 410,
	"./tr": 411,
	"./tr.js": 411,
	"./tzl": 412,
	"./tzl.js": 412,
	"./tzm": 413,
	"./tzm-latn": 414,
	"./tzm-latn.js": 414,
	"./tzm.js": 413,
	"./uk": 415,
	"./uk.js": 415,
	"./ur": 416,
	"./ur.js": 416,
	"./uz": 417,
	"./uz-latn": 418,
	"./uz-latn.js": 418,
	"./uz.js": 417,
	"./vi": 419,
	"./vi.js": 419,
	"./x-pseudo": 420,
	"./x-pseudo.js": 420,
	"./yo": 421,
	"./yo.js": 421,
	"./zh-cn": 422,
	"./zh-cn.js": 422,
	"./zh-hk": 423,
	"./zh-hk.js": 423,
	"./zh-tw": 424,
	"./zh-tw.js": 424
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 702;

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_search_search__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
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
var EmptyComponent = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], EmptyComponent.prototype, "text", null);
    EmptyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'empty',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/empty/empty.html"*/'<div text-center class="width-full">\n    <ion-row>\n        <ion-col>{{_text}}</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button ion-button color="primary" (click)="openSearch()">Search</button>\n        </ion-col>\n    </ion-row>\n</div>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/empty/empty.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */]])
    ], EmptyComponent);
    return EmptyComponent;
}());

//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReachUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_contact_us_contact_us__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReachUsComponent = /** @class */ (function () {
    function ReachUsComponent(nav, viewConrtoller, _emailComposer, _callNumber, modalCtrl, user, events) {
        var _this = this;
        this.nav = nav;
        this.viewConrtoller = viewConrtoller;
        this._emailComposer = _emailComposer;
        this._callNumber = _callNumber;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.events = events;
        this._address = false;
        this.global = {};
        this.hideContactUsLink = true;
        this.viewConrtoller.willEnter.subscribe(function () {
            //checking if page is Contact us or Enquiry Add
            var activeComponentName = __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Global */].getActiveComponentName(_this.nav.getActive());
            if (['ContactUsPage', 'EnquiryAddPage'].indexOf(activeComponentName) === -1) {
                _this.hideContactUsLink = true;
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
        var _this = this;
        var modal = this.modalCtrl.create(this.user.isLoggedIn() ? null : __WEBPACK_IMPORTED_MODULE_2__pages_contact_us_contact_us__["a" /* ContactUsPage */]);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.events.publish('alert:basic', data.title, data.message);
            }
        });
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ReachUsComponent.prototype, "address", null);
    ReachUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'reach-us',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/reach-us/reach-us.html"*/'<ion-row class="footer">\n    <ion-col>\n        <p><span (click)="callNumber(global.support.landline)">Landline: {{global.support.landline}}</span> <br/> <span (click)="callNumber(global.support.mobile)">Mobile:{{global.support.mobile}}</span></p>\n        <p (click)="openEmail(global.support.email)" hidden="true">Email: {{global.support.email}}</p>\n        <!-- <p [hidden]="hideContactUsLink">Having trouble? <a href="#" ion-text color="primary" (click)=onContactUs()>Contact Us</a></p> -->\n        <p [hidden]="!_address" text-wrap>{{global.support.address}}</p>\n    </ion-col>\n</ion-row>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/reach-us/reach-us.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */]])
    ], ReachUsComponent);
    return ReachUsComponent;
}());

//# sourceMappingURL=reach-us.js.map

/***/ }),

/***/ 812:
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
var CenterSpinnerComponent = /** @class */ (function () {
    function CenterSpinnerComponent() {
    }
    CenterSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'center-spinner',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/center-spinner/center-spinner.html"*/'<div class="center-loader">\n    <ion-spinner name="dots"></ion-spinner>\n</div>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/center-spinner/center-spinner.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], CenterSpinnerComponent);
    return CenterSpinnerComponent;
}());

//# sourceMappingURL=center-spinner.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_search_search__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navCtrl, events, _statusBar) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this._statusBar = _statusBar;
        this.buttons = null;
        this.buttonClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cartCounter = null;
        this.prevPageColor = null;
        this.colorHex = {
            primary: '#D5232F',
            secondary: '#32db64',
            danger: '#f53d3d',
            light: '#f4f4f4',
            dark: '#222',
            dashboard: '#4ECDC4',
            pickup: '#2574A9',
            casestatus: '#87D37C',
            communication: '#00B16A',
        };
        this.ionViewDidEnter();
        this.navCtrl.viewDidEnter.subscribe(function (page) {
            setTimeout(function () {
                var currentPageColor = _this.getColor(page.name);
                if (true) {
                    _this.prevPageColor = currentPageColor;
                    //setting header color
                    _this._statusBar.backgroundColorByHexString(_this.colorHex[_this.prevPageColor]);
                }
            });
        });
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
    HeaderComponent.prototype.getColor = function (name) {
        if (name === void 0) { name = null; }
        if (true) {
            name = __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Global */].getActiveComponentName(this.navCtrl.getActive());
        }
        switch (name) {
            case 'DashboardPage':
                return 'dashboard';
            case 'PickupPage':
            case 'PickupTodayPage':
            case 'PickupTomorrowPage':
                return 'pickup';
            case 'CaseStatusPage':
                return 'casestatus';
            case 'CommunicationPage':
                return 'communication';
            default:
                return 'primary';
        }
    };
    HeaderComponent.prototype.sendButtonClicked = function (button, event) {
        this.buttonClicked.emit(button);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "buttons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "buttonClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], HeaderComponent.prototype, "title", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/header/header.html"*/'<ion-navbar [color]="getColor()">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{_title}}</ion-title>\n    <ion-buttons end *ngIf="buttons">\n        <button ion-button (click)="sendButtonClicked(button, $event)" clear icon-only color="light" *ngFor="let button of buttons">\n            <ion-icon [name]="button.icon"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-navbar>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshComponent; });
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
 * Generated class for the RefreshComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RefreshComponent = /** @class */ (function () {
    function RefreshComponent() {
        console.log('Hello RefreshComponent Component');
        this.text = 'Hello World';
    }
    RefreshComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'refresh',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/refresh/refresh.html"*/'<!-- Generated template for the RefreshComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/refresh/refresh.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RefreshComponent);
    return RefreshComponent;
}());

//# sourceMappingURL=refresh.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
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
 * Generated class for the LogoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'logo',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/logo/logo.html"*/'<img class="logo" src="assets/img/logo.jpg">'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/logo/logo.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());

//# sourceMappingURL=logo.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the OrComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var OrComponent = /** @class */ (function () {
    function OrComponent() {
    }
    OrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'or',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/or/or.html"*/'<img src="assets/img/or.png">'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/or/or.html"*/
        })
    ], OrComponent);
    return OrComponent;
}());

//# sourceMappingURL=or.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
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

var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('progress'),
        __metadata("design:type", Object)
    ], ProgressBarComponent.prototype, "progress", void 0);
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}%\n  </div>\n</div>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallFabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_call_number__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallFabComponent = /** @class */ (function () {
    function CallFabComponent(callNumber) {
        this.callNumber = callNumber;
    }
    CallFabComponent.prototype.call = function () {
        var number = null;
        switch (this.type) {
            case 'PickUp':
                number = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Global */].support.pick_up;
                break;
            case 'CaseStatus':
                number = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Global */].support.case_status;
                break;
            default:
                number = __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Global */].support.landline;
                break;
        }
        if (number) {
            this.callNumber.callNumber(number, true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CallFabComponent.prototype, "type", void 0);
    CallFabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'call-fab',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/call-fab/call-fab.html"*/'<button ion-fab mini color="button" (click)="call()" ><ion-icon name="call"></ion-icon></button>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/call-fab/call-fab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_call_number__["a" /* CallNumber */]])
    ], CallFabComponent);
    return CallFabComponent;
}());

//# sourceMappingURL=call-fab.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBubbleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_streaming_media__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_common_common__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment_locale_fr__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment_locale_fr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment_locale_fr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_moment_locale_en_gb__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_moment_locale_en_gb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_moment_locale_en_gb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var ChatBubbleComponent = /** @class */ (function () {
    function ChatBubbleComponent(angularFireDB, file, transfer, platform, events, navCtlr, streamingMedia, _imageViewerController, _elementRef, common, network, translate) {
        this.angularFireDB = angularFireDB;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.events = events;
        this.navCtlr = navCtlr;
        this.streamingMedia = streamingMedia;
        this._imageViewerController = _imageViewerController;
        this._elementRef = _elementRef;
        this.common = common;
        this.network = network;
        this.translate = translate;
        this.element = null;
        this.users = {};
        this.LoginTypeID = 0;
        this.myLanguage = 'en';
        this.global = __WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */];
        this.basePath = '';
        this.messagePath = '';
        this.statusRef = null;
        this.dataDirectory = null;
        this.downloadDirectory = null;
        this.isCordova = false;
        this.not_available_offline_translate = 'Not available in Offline';
        this.global = __WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */];
        this.isCordova = this.platform.is('cordova');
        //listening to page change event to pause audio
        this.navCtlr.viewWillLeave.subscribe(function (event) {
        });
        this.events.subscribe('platform:onPause', function (event) {
        });
    }
    ChatBubbleComponent.prototype.doTranslate = function () {
        var _this = this;
        this.translate.get('ChatScreen._NotAvailableOffline_').subscribe(function (translated) {
            _this.not_available_offline_translate = translated;
        });
    };
    ChatBubbleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doTranslate();
        this.basePath = 'Communications/' + this.ticket + '/';
        this.messagePath = this.basePath + 'Chat/' + this.message.key;
        this.doReading();
        this.common.getDataDirectory().then(function (path) {
            _this.dataDirectory = path;
            _this.downloadDirectory = _this.dataDirectory + _this.ticket + '/';
            _this.createIfNotExist();
            _this.processFile();
        }).catch(function (error) {
            console.log(error);
        });
        // this.processBadgeCount();
    };
    ChatBubbleComponent.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('platform:onPause');
        this.events.unsubscribe('message:file:deleted');
    };
    ChatBubbleComponent.prototype.doReading = function () {
        var _this = this;
        //only if active page is chat
        if (__WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].getActiveComponentName(this.navCtlr.getActive()) === 'ChatPage') {
            //adding myself to read list
            if (this.message.Read && this.userID in this.message.Read) {
                if (this.message.Status !== 2) {
                    this.updateStatus();
                }
            }
            else {
                //now making it read by me
                this.angularFireDB.object(this.messagePath + '/Read/' + this.userID).set(__WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP).then(function (result) {
                    if (_this.message.Status !== 2) {
                        _this.updateStatus();
                    }
                });
            }
        }
    };
    /**
     * update status of message if sent by other user LoginTypeID
     * 1: if
     * 2: if read by all
     */
    ChatBubbleComponent.prototype.updateStatus = function () {
        /**
         * if sent by
         * 1. Dentist
         *  1.1 even if single GroupUser reads, make it 2
         * 2. Group User
         *  2.1 If any single dentist read, make it 1
         *  2.2 read by all dentist & group users, make it 2
         */
        if (!('UserID' in this.message)) {
            this.message['UserID'] = 0;
        }
        if (!('LoginTypeID' in this.message)) {
            this.message['LoginTypeID'] = 0;
        }
        if (this.message.UserID !== this.userID) {
            var status_1 = -1;
            //sent by 
            if ([__WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].LoginType.Doctor, __WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].LoginType.Parent].indexOf(this.message.LoginTypeID) > -1 && this.LoginTypeID === __WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].LoginType.Group) {
                status_1 = 2;
            }
            else if ([__WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].LoginType.LabGuru, __WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].LoginType.Group].indexOf(this.message.LoginTypeID) > -1) {
                //checking if read by all
                if (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](this.message.Read) === __WEBPACK_IMPORTED_MODULE_4_underscore__["size"](this.users)) {
                    status_1 = 2;
                }
                else if ([__WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].LoginType.Doctor, __WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].LoginType.Parent].indexOf(this.message.LoginTypeID) === -1 && this.message.Status === 0) {
                    status_1 = 1;
                }
            }
            if (status_1 > 0) {
                this.angularFireDB.object(this.messagePath + '/Status').set(status_1);
            }
        }
    };
    ChatBubbleComponent.prototype.openFile = function () {
        var _this = this;
        if (this.network.type === 'none') {
            this.events.publish('toast:error', this.not_available_offline_translate);
            return;
        }
        if (this.message.URL) {
            if (this.isCordova) {
                var file = this.message.nativeURL || this.message.URL;
                //if already downloading
                if (this.message.downloading) {
                    return;
                }
                var wasDownloaded_1 = this.message.downloaded;
                this.check(file).then(function (entry) {
                    if (wasDownloaded_1) {
                        switch (_this.message.MessageType) {
                            case 'Image':
                                _this.openImage();
                                break;
                            case 'Audio':
                                _this.openAudio();
                                break;
                            case 'Video':
                                _this.openVideo();
                                break;
                        }
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    };
    ChatBubbleComponent.prototype.openImage = function () {
        this.element = this._elementRef.nativeElement.querySelector('#message-image-' + this.message.key);
        var image = this._imageViewerController.create(this.element);
        image.present();
    };
    ChatBubbleComponent.prototype.openAudio = function () {
        var options = {
            successCallback: function () { console.log('Audio played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            shouldAutoClose: true,
            bgImage: 'https://s3-ap-southeast-1.amazonaws.com/eiosys/images/equilizer.gif',
        };
        this.streamingMedia.playAudio(this.message.nativeURL, options);
    };
    ChatBubbleComponent.prototype.openVideo = function () {
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            shouldAutoClose: true,
        };
        this.streamingMedia.playVideo(this.message.nativeURL, options);
    };
    ChatBubbleComponent.prototype.check = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isFileDownloaded(file).then(function (status) {
                console.log(status);
                resolve(status);
            }).catch(function (error) {
                _this.message.downloading = true;
                _this.downloadFile(file).then(function (entry) {
                    _this.message.nativeURL = _this.getNativeURL(file);
                    _this.message.downloading = false;
                    _this.message.downloaded = true;
                    _this.subscribeToFileDelete(file);
                    setTimeout(function () {
                        console.log(entry);
                        resolve(entry);
                    });
                }).catch(function (error) {
                    _this.message.downloading = false;
                    _this.events.publish('toast:error', error);
                    reject(error);
                });
            });
        });
    };
    ChatBubbleComponent.prototype.processFile = function () {
        var _this = this;
        //downloading file
        if (this.message.URL) {
            if (this.isCordova) {
                var file_1 = this.message.URL;
                this.isFileDownloaded(file_1).then(function (status) {
                    if (status) {
                        _this.message['downloaded'] = true;
                        _this.message['downloading'] = false;
                        _this.message.nativeURL = _this.getNativeURL(file_1);
                        _this.subscribeToFileDelete(file_1);
                    }
                }).catch(function (error) {
                    //checking if sent by me and sent within last 500ms. We will try to download this
                    if (_this.message.UserID === _this.userID && (__WEBPACK_IMPORTED_MODULE_11_moment__().utc().valueOf() - _this.message.CreateAt) <= 10000) {
                        _this.openFile();
                    }
                    else {
                        _this.message['downloaded'] = false;
                        _this.message['downloading'] = false;
                    }
                });
            }
            else {
                this.message['downloaded'] = false;
            }
        }
        else {
            this.message['downloaded'] = true;
        }
    };
    ChatBubbleComponent.prototype.isFileDownloaded = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fileName = _this.getFileName(file);
            //checking if file downloaded
            _this.file.checkFile(_this.downloadDirectory, fileName).then(function (status) {
                resolve(status);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ChatBubbleComponent.prototype.downloadMessage = function () {
        var _this = this;
        var file = this.message.URL;
        if (this.isCordova) {
            this.message.downloading = true;
            this.downloadFile(file).then(function (entry) {
                _this.message.downloaded = true;
                _this.message.nativeURL = _this.getNativeURL(entry.nativeURL);
                _this.message.downloading = false;
                _this.subscribeToFileDelete(file);
                _this.makeTrackForAudio();
            }).catch(function (error) {
                _this.message.downloading = false;
                _this.message.downloaded = false;
                _this.message['error'] = error;
            });
        }
    };
    ChatBubbleComponent.prototype.downloadFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fileName = _this.getFileName(file);
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(file, _this.downloadDirectory + fileName).then(function (entry) {
                resolve(entry);
            }, function (error) {
                console.log(error);
                _this.message['failed'] = error;
                _this.message.downloaded = false;
                _this.message.downloading = false;
            }).catch(function (error) {
                console.log(error);
                _this.message['failed'] = error;
                _this.message.downloaded = false;
                _this.message.downloading = false;
            });
        });
    };
    ChatBubbleComponent.prototype.getFileName = function (file) {
        if (file.indexOf('?') === -1) {
            file += '?';
        }
        file = file.substring(0, file.lastIndexOf('?'));
        return file.substring(file.lastIndexOf('/') + 1);
    };
    ChatBubbleComponent.prototype.getNativeURL = function (file) {
        if (file) {
            //checking if still http
            if (file.indexOf('https') === 0) {
                var fileName = this.getFileName(file);
                return Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* normalizeURL */])(this.downloadDirectory + fileName);
            }
            return Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* normalizeURL */])(file);
        }
        return file;
    };
    ChatBubbleComponent.prototype.createIfNotExist = function () {
        var _this = this;
        this.file.checkDir(this.dataDirectory, this.ticket).then(function (status) {
        }).catch(function (error) {
            if (error.code === 1) {
                _this.file.createDir(_this.dataDirectory, _this.ticket, false).catch(function (error) { });
            }
        });
    };
    ChatBubbleComponent.prototype.getTime = function (time) {
        if (time) {
            var momentTime = null;
            momentTime = __WEBPACK_IMPORTED_MODULE_11_moment__(time).utc().local();
            momentTime.locale(this.myLanguage);
            //checking if its dd-mm-yyy format
            if (!momentTime.isValid() && __WEBPACK_IMPORTED_MODULE_11_moment__(time, 'DD-MM-YYYY hh:mm:ss').isValid()) {
                momentTime = __WEBPACK_IMPORTED_MODULE_11_moment__(time, 'DD-MM-YYYY hh:mm:ss').utc().local();
            }
            if (momentTime.isValid()) {
                var today = __WEBPACK_IMPORTED_MODULE_11_moment__().startOf('day');
                if (momentTime.isSame(today, 'd')) {
                    return momentTime.format('hh:mm a');
                }
                else if (momentTime.isBetween(__WEBPACK_IMPORTED_MODULE_11_moment__().subtract(7, 'days').startOf('day'), today)) {
                    return momentTime.format('ddd D, hh:mm a');
                }
                else if (momentTime.isBetween(__WEBPACK_IMPORTED_MODULE_11_moment__().startOf('month'), today)) {
                    return momentTime.format('ddd D, hh:mm a');
                }
                else {
                    return momentTime.format('ddd, D MMM hh:mm a');
                }
            }
            else {
            }
        }
        return time;
    };
    ChatBubbleComponent.prototype.showRead = function (message) {
        if (this.LoginTypeID === __WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].LoginType.Group) {
        }
    };
    /**
     * This will reduce badge count if message is newly sent & read first time
     */
    ChatBubbleComponent.prototype.processBadgeCount = function () {
        if (this.message.BadgeCount) {
            //checking if not already reduced
            if (this.userID in this.message.BadgeCount && this.message.BadgeCount[this.userID]) {
                //making it false first
                this.message.BadgeCount[this.userID] = false;
                this.angularFireDB.object(this.messagePath + '/BadgeCount/' + this.userID).set(false);
                //not reducing badge count from communication & total
                this.reduceCount('CommunicationCount');
                this.reduceCount('Total');
            }
        }
    };
    ChatBubbleComponent.prototype.reduceCount = function (path) {
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('Badge/' + this.userID + '/' + path);
        ref.transaction(function (count) {
            count = count || 0;
            if (count === 0) {
                return count;
            }
            return count - 1;
        });
    };
    ChatBubbleComponent.prototype.makeTrackForAudio = function () {
        this.message.audioTrack = {
            src: this.message.nativeURL
        };
    };
    ChatBubbleComponent.prototype.onTrackFinished = function (track) {
        var _this = this;
        console.log('Track finished', track);
        //re-adding this track
        // this.message.audioTrack = {
        //   src: null,
        // };
        setTimeout(function () {
            _this.makeTrackForAudio();
        });
    };
    ChatBubbleComponent.prototype.onHold = function (event) {
        //showing popover for read, translate
        console.log('on hold');
    };
    ChatBubbleComponent.prototype.subscribeToFileDelete = function (file) {
        var _this = this;
        var fileName = file.substring(file.lastIndexOf('/') + 1);
        this.events.unsubscribe('message:file:deleted');
        this.events.subscribe('message:file:deleted', function (deletedFileName) {
            if (fileName === deletedFileName) {
                _this.message.nativeURL = null;
                _this.processFile();
            }
        });
    };
    ChatBubbleComponent.prototype.isHidden = function () {
        //checking if sent by LabGuru & logged in user type is group then show tick
        if (this.message.LoginTypeID === __WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].LoginType.LabGuru && this.LoginTypeID === __WEBPACK_IMPORTED_MODULE_14__app_global__["a" /* Global */].LoginType.Group) {
            return false;
        }
        return this.message.UserID !== this.userID;
    };
    ChatBubbleComponent.prototype.getTextMessage = function () {
        //checking if MyLang exist in message
        if (!('Translation' in this.message)) {
            this.message['Translation'] = {};
        }
        if (!(this.myLanguage in this.message.Translation)) {
            this.message.Translation[this.myLanguage] = this.message.Message;
        }
        return this.message.Translation[this.myLanguage];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatBubbleComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChatBubbleComponent.prototype, "userID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChatBubbleComponent.prototype, "ticket", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChatBubbleComponent.prototype, "users", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ChatBubbleComponent.prototype, "LoginTypeID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChatBubbleComponent.prototype, "myLanguage", void 0);
    ChatBubbleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat-bubble',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/chat-bubble/chat-bubble.html"*/'<div class="message" [ngClass]="message.UserID === userID ? \'message-mine\' : \'message-other\'">\n  <div class="message-header" *ngIf="LoginTypeID === global.LoginType.Group && message.UserID !== userID">\n    <div class="message-user">{{message.From}}</div>\n  </div>\n  <div class="message-body" (click)="openFile()">\n    <div class="download" *ngIf="message.downloaded === false" [ngClass]="{\'message-other\': LoginTypeID === global.LoginType.Group && message.UserID !== userID }">\n      <ion-icon name="md-download" *ngIf="!message.downloading"></ion-icon>\n      <ion-spinner name="crescent" *ngIf="message.downloading"></ion-spinner>\n    </div>\n    <ng-container [ngSwitch]="message.MessageType">\n      <div *ngSwitchCase="\'Text\'" class="text" [innerHTML]="getTextMessage()"></div>\n      <div *ngSwitchCase="\'Image\'" class="picture" [ngClass]="message.downloaded ? \'done\' : \'image-center-small\'">\n        <img *ngIf="message.downloaded" [id]="\'message-image-\'+message.key" [src]="message.nativeURL" width="160" height="160" />\n        <img *ngIf="message.downloaded === false" src="assets/img/camera.png" />\n      </div>\n      <div *ngSwitchCase="\'Audio\'" class="audio image-center-small" [ngClass]="{\'done\':message.downloaded}">\n        <img src="assets/img/audio.png" />\n      </div>\n      <div *ngSwitchCase="\'Video\'" class="video image-center-small" [ngClass]="{\'done\':message.downloaded}" (click)="openVideo()">\n        <img src="assets/img/video.png" />\n      </div>\n    </ng-container>\n  </div>\n  <div class="message-footer">\n    <div class="message-timestamp">{{ getTime(message.CreateAt)}}</div>\n    <div class="message-status" [ngClass]="\'status-\' + message.Status" [hidden]="isHidden()">\n      <ng-container [ngSwitch]="message.Status">\n        <ion-icon *ngSwitchCase="0" name="md-checkmark"></ion-icon>\n        <ion-icon *ngSwitchCase="1" [name]="[global.LoginType.Doctor, global.LoginType.Parent].indexOf(message.LoginTypeID) > -1 ? \'md-done-all\' : \'md-checkmark\'"></ion-icon>\n        <ion-icon *ngSwitchCase="2" name="md-done-all"></ion-icon>\n      </ng-container>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/components/chat-bubble/chat-bubble.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_9__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */]])
    ], ChatBubbleComponent);
    return ChatBubbleComponent;
}());

//# sourceMappingURL=chat-bubble.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (abstractControl) {
        var newPassword = abstractControl.get('new_password').value;
        var confirmPassword = abstractControl.get('confirm_password').value;
        if (newPassword !== confirmPassword) {
            abstractControl.get('confirm_password').setErrors({ MatchPassword: true });
        }
        else {
            return true;
        }
    };
    return PasswordValidation;
}());

//# sourceMappingURL=password-validation.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'keys',
        })
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=keys.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        console.log(items);
        if (!items)
            return [];
        if (!value || value.length == 0)
            return items;
        return items.filter(function (item) {
            console.log(item, value);
            return item[field].toLowerCase().indexOf(value.toLowerCase()) !== -1;
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the ObjectFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ObjectFilterPipe = /** @class */ (function () {
    function ObjectFilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ObjectFilterPipe.prototype.transform = function (keys, field, value, objects) {
        if (!keys)
            return [];
        if (!value || value.length == 0)
            return keys;
        value = value.trim();
        if (__WEBPACK_IMPORTED_MODULE_1_underscore__["_"].isEmpty(objects))
            return keys;
        var resultKeys = [];
        for (var key in objects) {
            var item = objects[key];
            if (item[field].toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                resultKeys.push(key);
            }
        }
        return resultKeys;
    };
    ObjectFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'objectFilter',
        })
    ], ObjectFilterPipe);
    return ObjectFilterPipe;
}());

//# sourceMappingURL=object-filter.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSlots; });
var TimeSlots = {
    morningSlot: [{
            displaytime: "9 AM",
            time: 9,
            active: true
        }, {
            displaytime: "10 AM",
            time: 10,
            active: true
        }, {
            displaytime: "11 AM",
            time: 11,
            active: true
        }, {
            displaytime: "12 PM",
            time: 12,
            active: true
        }, {
            displaytime: "1 PM",
            time: 13,
            active: true
        }],
    eveningSlot: [{
            displaytime: "5 PM",
            time: 17,
            active: true
        }, {
            displaytime: "6 PM",
            time: 18,
            active: true
        }, {
            displaytime: "7 PM",
            time: 19,
            active: true
        }, {
            displaytime: "8 PM",
            time: 20,
            active: true
        }, {
            displaytime: "9 PM",
            time: 21,
            active: true
        }]
};
//# sourceMappingURL=timeSlots.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__long_press_long_press__ = __webpack_require__(839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = /** @class */ (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__["a" /* KeyboardAttachDirective */],
                __WEBPACK_IMPORTED_MODULE_2__long_press_long_press__["a" /* LongPressDirective */],
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__["a" /* KeyboardAttachDirective */],
                __WEBPACK_IMPORTED_MODULE_2__long_press_long_press__["a" /* LongPressDirective */],
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(135);
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
 * @name KeyboardAttachDirective
 * @description
 * The `keyboardAttach` directive will cause an element to float above the
 * keyboard when the keyboard shows. Currently only supports the `ion-footer` element.
 *
 * ### Notes
 * - This directive requires [Ionic Native](https://github.com/driftyco/ionic-native)
 * and the [Ionic Keyboard Plugin](https://github.com/driftyco/ionic-plugin-keyboard).
 * - Currently only tested to work on iOS.
 * - If there is an input in your footer, you will need to set
 *   `Keyboard.disableScroll(true)`.
 *
 * @usage
 *
 * ```html
 * <ion-content #content>
 * </ion-content>
 *
 * <ion-footer [keyboardAttach]="content">
 *   <ion-toolbar>
 *     <ion-item>
 *       <ion-input></ion-input>
 *     </ion-item>
 *   </ion-toolbar>
 * </ion-footer>
 * ```
 */
var KeyboardAttachDirective = /** @class */ (function () {
    function KeyboardAttachDirective(elementRef, platform, keyboard) {
        var _this = this;
        this.elementRef = elementRef;
        this.platform = platform;
        this.keyboard = keyboard;
        this.attachTime = 0;
        if (this.platform.is('cordova') && this.platform.is('ios')) {
            this.onShowSubscription = this.keyboard.onKeyboardShow().subscribe(function (e) { return _this.onShow(e); });
            this.onHideSubscription = this.keyboard.onKeyboardHide().subscribe(function () { return _this.onHide(); });
        }
    }
    KeyboardAttachDirective.prototype.ngOnDestroy = function () {
        if (this.onShowSubscription) {
            this.onShowSubscription.unsubscribe();
        }
        if (this.onHideSubscription) {
            this.onHideSubscription.unsubscribe();
        }
    };
    KeyboardAttachDirective.prototype.onShow = function (e) {
        var keyboardHeight = e.keyboardHeight || (e.detail && e.detail.keyboardHeight);
        if (this.attachTime > 1) {
            if (keyboardHeight == 313 ||
                keyboardHeight == 258 ||
                keyboardHeight == 216 ||
                keyboardHeight == 253 ||
                keyboardHeight == 226 ||
                keyboardHeight == 271 ||
                keyboardHeight == 216 ||
                keyboardHeight == 264) {
                this.setElementPosition(0);
            }
            else {
                if (this.attachTime > 2) {
                    this.setElementPosition(0);
                }
                else {
                    this.setElementPosition(keyboardHeight);
                }
            }
        }
        else {
            this.setElementPosition(keyboardHeight);
        }
        this.attachTime++;
        // setTimeout(() => {
        //   window.scrollTo(0, 0);
        //   this.content.scrollToBottom(0);
        //   this.keyboard.disableScroll(true);
        // });
    };
    ;
    KeyboardAttachDirective.prototype.onHide = function () {
        this.setElementPosition(0);
        this.attachTime = 0;
    };
    ;
    KeyboardAttachDirective.prototype.setElementPosition = function (pixels) {
        this.elementRef.nativeElement.style.paddingBottom = pixels + 'px';
        this.content.getScrollElement().style.marginBottom = (pixels + 44) + 'px';
        //this.content.scrollToBottom()
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('keyboardAttach'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], KeyboardAttachDirective.prototype, "content", void 0);
    KeyboardAttachDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[keyboardAttach]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */]])
    ], KeyboardAttachDirective);
    return KeyboardAttachDirective;
}());

//# sourceMappingURL=keyboard-attach.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongPressDirective; });
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
 * Generated class for the LongPressDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var LongPressDirective = /** @class */ (function () {
    function LongPressDirective() {
        console.log('Hello LongPressDirective Directive');
    }
    LongPressDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[long-press]' // Attribute selector
        }),
        __metadata("design:paramtypes", [])
    ], LongPressDirective);
    return LongPressDirective;
}());

//# sourceMappingURL=long-press.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_office_list_office_list__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OfficeServiceProvider = /** @class */ (function () {
    function OfficeServiceProvider(storage, events, connection, modalCtrl, _network, translate) {
        var _this = this;
        this.storage = storage;
        this.events = events;
        this.connection = connection;
        this.modalCtrl = modalCtrl;
        this._network = _network;
        this.translate = translate;
        this.officeList = {};
        this.loadingOfficeList = true;
        this.isMultipleOffice = -1;
        this.pickupSelectedOffice = null;
        this.caseStatusSelectedOffice = null;
        this.communicationSelectedOffice = null;
        this.user = {};
        this.office_list_unavailable_translate = 'No Office/Branch is asigned to you. Kindly contact Admin';
        this.failed_to_load_translate = 'Failed to load Office list';
        this.loading_translate = 'loading';
        //setting user ID
        this.setUser().catch(function (error) { });
        //to fetch from server
        this.events.subscribe('officeList:get', function (officeList) {
            _this.setUser().then(function (status) {
                //getting Office List
                _this.loadOfficeList().then(function (status) {
                    _this.events.publish('officeList:loaded', true);
                }).catch(function (error) {
                    _this.events.publish('officeList:loaded', true);
                });
            }).catch(function (error) { });
        });
        //onLogin getting list of offices
        this.events.subscribe('user:ready', function (user) {
            if (user) {
                _this.events.publish('officeList:get');
            }
            else {
                _this.reset();
            }
        });
        //on Logout clearing office list
        this.events.subscribe('user:postLogout', function () {
            _this.reset();
        });
    }
    OfficeServiceProvider.prototype.doTranslate = function () {
        var _this = this;
        //unavailable
        this.translate.get('OfficeList._OfficeListUnavailable_').subscribe(function (translated) {
            _this.office_list_unavailable_translate = translated;
        });
        //failed to load
        this.translate.get('OfficeList._FailedToLoad_').subscribe(function (translated) {
            _this.failed_to_load_translate = translated;
        });
        //loading
        this.translate.get('Common._Loading_').subscribe(function (translated) {
            _this.loading_translate = translated;
        });
    };
    OfficeServiceProvider.prototype.reset = function () {
        this.officeList = {};
        this.loadingOfficeList = true;
        this.isMultipleOffice = -1;
    };
    OfficeServiceProvider.prototype.setUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('User').then(function (User) {
                _this.user = User;
                resolve(true);
            }).catch(function (error) {
                reject();
            });
        });
    };
    OfficeServiceProvider.prototype.loadOfficeList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.doTranslate();
            _this.loadingOfficeList = true;
            //checking if has internet
            if (_this._network.type === 'none') {
                _this.storage.get('OfflineOfficeList').then(function (officeList) {
                    _this.officeList = officeList;
                    _this.loadingOfficeList = false;
                    _this.setMultiOffice().then(function (status) {
                        resolve(status);
                    }).catch(function (status) {
                        reject(status);
                    });
                });
            }
            else {
                //loading from firebase
                __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('OfficeList/' + _this.user.id).on('value', function (snapshot) {
                    _this.officeList = snapshot.val();
                    _this.storage.set('OfflineOfficeList', _this.officeList);
                    _this.loadingOfficeList = false;
                    _this.setMultiOffice().then(function (status) {
                        resolve(status);
                    }).catch(function (status) {
                        reject(status);
                    });
                });
            }
        });
    };
    /**
     * returns true if more than one Office is assigned
     */
    OfficeServiceProvider.prototype.isMultiOffice = function () {
        return this.isMultipleOffice;
    };
    OfficeServiceProvider.prototype.setMultiOffice = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_6_underscore__["size"](_this.officeList) > 0) {
                _this.isMultipleOffice = __WEBPACK_IMPORTED_MODULE_6_underscore__["size"](_this.officeList) > 1;
                resolve(true);
            }
            else {
                _this.isMultipleOffice = -1;
                reject(false);
            }
        });
    };
    /**
     * returns selected Office or open Modal to selects on
     * @param type PageType
     * return this will return
     * -1 if no data found from server
     * office object, if selected
     * null, if nothing selected and closed
     */
    OfficeServiceProvider.prototype.getOffice = function (type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //deselecting office list for page
            _this.setSelectedOffice(type, null);
            _this.isOfficeListLoaded().then(function () {
                //checking for number of office
                var multiOfficeFlag = _this.isMultiOffice();
                if (multiOfficeFlag === true) {
                    //open Office List Modal
                    var officeListModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_office_list_office_list__["a" /* OfficeListPage */], {
                        modelFlagName: type
                    });
                    officeListModal.onDidDismiss(function (selectedOffice) {
                        if (selectedOffice === null) {
                            reject(null);
                        }
                        else {
                            _this.setSelectedOffice(type, selectedOffice);
                            resolve(selectedOffice);
                        }
                    });
                    officeListModal.present();
                }
                else if (multiOfficeFlag === false) {
                    var first = _this.officeList[Object.keys(_this.officeList)[0]];
                    resolve(first);
                }
                else {
                    reject(_this.office_list_unavailable_translate);
                }
            }).catch(function (message) {
                reject(message);
            });
        });
    };
    OfficeServiceProvider.prototype.isOfficeListLoaded = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //not loaded yet. Show loading and wait to load
            if (_this.loadingOfficeList) {
                //showing loading
                _this.events.publish('loading:create', _this.loading_translate);
                //setting timeout of 10 secs to reload
                setTimeout(function () {
                    if (_this.loadingOfficeList) {
                        _this.events.publish('loading:close');
                        //trying to load again
                        _this.loadOfficeList().then(function (status) {
                            resolve(status);
                        }).catch(function (error) {
                            reject('Failed to load. Try again');
                        });
                    }
                }, 5000);
                //subscribing to event
                _this.events.subscribe('officeList:loaded', function (status) {
                    //closing office list
                    _this.events.publish('loading:close');
                    //sending message
                    if (status) {
                        resolve(true);
                    }
                    else {
                        reject(_this.failed_to_load_translate);
                    }
                });
            }
            else {
                if (__WEBPACK_IMPORTED_MODULE_6_underscore__["isEmpty"](_this.officeList) || __WEBPACK_IMPORTED_MODULE_6_underscore__["size"](_this.officeList) === 0) {
                    //checking if it has offices or we will try to load again before moving back
                    _this.loadOfficeList().then(function (status) {
                        resolve(true);
                    }).catch(function (status) {
                        resolve(true);
                    });
                }
                else {
                    resolve(true);
                }
            }
        });
    };
    OfficeServiceProvider.prototype.setSelectedOffice = function (page, data) {
        switch (page) {
            case 'Pickup':
                this.pickupSelectedOffice = data;
                break;
            case 'CaseStatus':
                this.caseStatusSelectedOffice = data;
                break;
            case 'Communication':
                this.communicationSelectedOffice = data;
                break;
        }
    };
    OfficeServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], OfficeServiceProvider);
    return OfficeServiceProvider;
}());

//# sourceMappingURL=office-service.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_keys_keys__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__object_filter_object_filter__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_keys_keys__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_3__object_filter_object_filter__["a" /* ObjectFilterPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_keys_keys__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_3__object_filter_object_filter__["a" /* ObjectFilterPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mime_types__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mime_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mime_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_firebase_transaction_firebase_transaction__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common_common__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_media__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_vibration__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_video_capture_plus__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_video_editor__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_onesignal__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__logout_logout__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_home__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_chat_chat_read_modal_chat_read_modal__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_chat_saved_media_saved_media__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




























var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, platform, connection, events, storage, camera, transfer, file, _media, actionSheetCtrl, _toastCtrl, vibration, keyboard, _network, _firebaseTransaction, videoCapturePlus, videoEditor, elementRef, modal, common, http, translate, _oneSignal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.connection = connection;
        this.events = events;
        this.storage = storage;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this._media = _media;
        this.actionSheetCtrl = actionSheetCtrl;
        this._toastCtrl = _toastCtrl;
        this.vibration = vibration;
        this.keyboard = keyboard;
        this._network = _network;
        this._firebaseTransaction = _firebaseTransaction;
        this.videoCapturePlus = videoCapturePlus;
        this.videoEditor = videoEditor;
        this.elementRef = elementRef;
        this.modal = modal;
        this.common = common;
        this.http = http;
        this.translate = translate;
        this._oneSignal = _oneSignal;
        this.global = __WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* Global */];
        this.data = {};
        this.ticket = null;
        this.title = 'loading';
        this.subTitle = null;
        this.isIOS = false;
        this.isCordova = false;
        this.keyboardHeight = 0;
        this.basePath = '';
        this.path = '';
        this.messages = [];
        this.offlineMessages = [];
        this.messagesKeys = []; //this will keep track of keys vs index in original array of messages
        this.messagesLoaded = false;
        this.message = '';
        this.messageLimit = 20;
        this.firstMessageKey = null;
        this.showNoMoreMessages = false;
        this.typingRefLoaded = false;
        this.userTyping = {}; //this will hold all users id:status. 
        this.userChatting = {}; // active chat users
        this.lastTypingTime = 0;
        this.user = {};
        this.userID = null;
        this.chatUsers = {};
        this.lastcalled = false;
        this.readyForPagination = false;
        this.sendClickKeepKeyboardOpened = false;
        //camera
        this.cameraOptions = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetHeight: 1024,
            targetWidth: 1024
        };
        this.galleryOptions = {
            quality: 80,
            correctOrientation: true,
            targetHeight: 1024,
            targetWidth: 1024,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.ALLMEDIA
        };
        this.progressPercent = 0;
        //recording
        this.aboutToRecord = false;
        this.recordingInProgress = false;
        this.recordTime = 0;
        this.dataDirectory = null;
        this.recordMediaFile = null;
        this.recordFile = null;
        this.recordFileName = 'record.wav';
        this.recordInterval = null;
        this.vibrateDuration = 300;
        this.keyboardOpen = false;
        this.hasInternet = true;
        this.lastReadingTime = 0;
        this.offlineMessageText = 'The message cannot be downloaded as there is\'nt any internet connection';
        this.myLanguage = null;
        this.chatLanguages = [];
        this.translating = false;
        this.doctor_translate = 'Doctor';
        this.impression_no_translate = 'Imp No.';
        this.camera_translate = 'Camera';
        this.photo_video_library_translate = 'Photo & Video Library';
        this.audio_tranlate = 'Audio';
        this.video_translate = 'Video';
        this.cancel_translate = 'Cancel';
        //init
        this.isIOS = this.platform.is('ios');
        this.isCordova = this.platform.is('cordova');
        this.global = __WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* Global */];
        this.common.getDataDirectory().then(function (path) {
            _this.dataDirectory = path;
        }).catch(function (error) {
            console.log(error);
        });
        //getting Ticket no
        this.ticket = this.navParams.data;
        console.log(this.ticket);
        this.basePath = 'Communications/' + this.ticket + '/';
        this.keyboard.onKeyboardShow().subscribe(function (data) {
            _this.scrollBottom('keyboard show').catch(function (error) { });
        });
        this.keyboard.onKeyboardHide().subscribe(function (data) {
            _this.contentResize();
            if (_this.sendClickKeepKeyboardOpened === false) {
                _this.closeKeyboard(null);
            }
            else {
                _this.sendClickKeepKeyboardOpened = false;
            }
            _this.scrollBottom('keyboard hide').catch(function (error) { });
        });
        this.hasInternet = this._network.type !== 'none';
        this.events.subscribe('network:online', function () {
            _this.hasInternet = true;
            _this.messagesLoaded = _this.messages.length > 0;
            _this.setFirebaseRef();
            _this.listenToFirebaseEvents(true);
            //make all unread count of this ticket to zero
            _this.clearBadgeCountIfAny();
        });
        this.events.subscribe('network:offline', function () {
            _this.hasInternet = false;
        });
        //making folder with this ticket number to save files
        this.doFoldering();
    }
    ChatPage_1 = ChatPage;
    ChatPage.prototype.setFirebaseRef = function () {
        //actual chat ref
        this.messagesRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref(this.basePath + 'Chat');
        //for typying object
        this.typingRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref(this.basePath + 'Typing');
        //for chatting: This will prevent notification from same chat
        this.chattingRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref(this.basePath + 'Chatting');
        //keyboard disable
        this.keyboard.disableScroll(true);
    };
    ChatPage.prototype.connectFireBase = function () {
        var _this = this;
        this.setFirebaseRef();
        //actual data/messages
        //getting first n message
        this.messagesRef.orderByKey().limitToLast(this.messageLimit).once('value', function (snapshot) {
            var numberOfMessages = 0;
            var ignoredStart = false;
            var messages = snapshot.val();
            for (var key in messages) {
                var message = messages[key];
                message['key'] = key;
                _this.pushItem(message, true);
            }
            //checking if no more messages ie. first message key is same at 0 index
            _this.checkForNoMoreMessages();
            setTimeout(function () {
                _this.messagesLoaded = true;
                setTimeout(function () {
                    _this.scrollBottom('first time message load').then(function (status) {
                        _this.readyForPagination = true;
                        _this.saveOfflineData();
                    }).catch(function (error) { });
                }, 100);
            });
            //for new message
            _this.newMessagesRef = _this.messagesRef.orderByKey();
            _this.listenToFirebaseEvents(ignoredStart);
        });
        //first message
        this.messagesRef.orderByKey().limitToFirst(1).once('value', function (snapshot) {
            var message = snapshot.val();
            if (message) {
                _this.firstMessageKey = Object.keys(message)[0];
                _this.checkForNoMoreMessages();
                //saving first message key
                _this.data.firstMessageKey = _this.firstMessageKey;
                _this.setOfflineTicketList(_this.data);
            }
        });
    };
    ChatPage.prototype.listenToFirebaseEvents = function (ignoredStart) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* Global */].getActiveComponentName(this.navCtrl.getActive()) !== 'ChatPage') {
            return;
        }
        //new Message
        if (this.messagesKeys.length > 0) {
            var lastMessageKey = this.messagesKeys[this.messagesKeys.length - 1];
            if (this.newMessagesRef) {
                this.newMessagesRef.off('child_added');
            }
            this.newMessagesRef = this.messagesRef.orderByKey().startAt(lastMessageKey);
        }
        else {
        }
        this.newMessagesRef.on('child_added', function (snapshot) {
            var message = snapshot.val();
            if (ignoredStart || _this.messagesKeys.length === 0) {
                if (_this.messages && message) {
                    message['key'] = snapshot.key;
                    if (_this.messagesKeys.indexOf(snapshot.key) === -1) {
                        _this.pushItem(message);
                        _this.saveOfflineData();
                    }
                    if (_this.firstMessageKey === null) {
                        _this.firstMessageKey = snapshot.key;
                        _this.checkForNoMoreMessages();
                        //saving first message key
                        _this.data.firstMessageKey = _this.firstMessageKey;
                        _this.setOfflineTicketList(_this.data);
                    }
                    setTimeout(function () {
                        setTimeout(function () {
                            _this.scrollBottom('new message').catch(function (error) { });
                        });
                    }, 250);
                }
                else {
                }
                ignoredStart = true;
            }
            else {
                ignoredStart = true;
            }
        });
        //listening to status change event
        this.messagesRef.orderByChild('Status').on('child_changed', function (snapshot) {
            var message = snapshot.val();
            var index = _this.messagesKeys.indexOf(snapshot.key);
            if (index > -1 && typeof _this.messages !== 'undefined' && typeof _this.messages[index] !== 'undefined') {
                _this.messages[index].Status = message.Status;
                _this.offlineMessages[index].Status = message.Status;
                _this.saveOfflineData();
            }
        });
        //listening to read change event
        this.messagesRef.orderByChild('Read').on('child_changed', function (snapshot) {
            var message = snapshot.val();
            var index = _this.messagesKeys.indexOf(snapshot.key);
            if (index > -1 && typeof _this.messages !== 'undefined' && typeof _this.messages[index] !== 'undefined') {
                _this.messages[index].Read = message.Read;
                _this.offlineMessages[index].Read = message.Read;
                _this.saveOfflineData();
            }
        });
        //event to listed others typing
        this.typingRef.on('value', function (snapshot) {
            _this.userTyping = snapshot.val();
            if (_this.typingRefLoaded) {
                console.log(_this.userTyping);
                setTimeout(function () {
                    _this.scrollBottom('typing ref init').catch(function (error) { });
                }, 100);
            }
            _this.typingRefLoaded = true;
        });
        this.chattingRef.on('value', function (snapshot) {
            _this.userChatting = snapshot.val();
        });
        this.setChatting(true);
    };
    ChatPage.prototype.paginate = function (paginator) {
        var _this = this;
        if (!this.messagesLoaded || !this.readyForPagination) {
            setTimeout(function () {
                paginator.complete();
            }, 500);
            return;
        }
        if (this.messages === null || this.messages.length === 0 || this.messages[0].key === this.firstMessageKey) {
            this.showNoMoreMessages = true;
            paginator.enable(false);
            this.goToElement('').then(function () {
            }).catch(function () { });
            return;
        }
        console.log('paginate');
        //paging prev 10 messages
        if (this.messagesRef) {
            if (this.messages && this.messages.length > 0 && typeof this.messages[0] !== 'undefined') {
                this.messagesRef.orderByKey().limitToLast(this.messageLimit).endAt(this.messages[0].key).once('value', function (snapshot) {
                    var messages = [];
                    var lastMessageKey = null;
                    if (_this.messagesKeys.length) {
                        lastMessageKey = _this.messagesKeys[_this.messagesKeys.length - 1];
                    }
                    snapshot = snapshot.val();
                    if (snapshot) {
                        //removing first
                        delete snapshot[_this.messages[0].key];
                        //adding key
                        for (var key in snapshot) {
                            var message = snapshot[key];
                            message['key'] = key;
                            messages.push(message);
                            lastMessageKey = key;
                        }
                        //checking
                        if (messages.length) {
                            //reverse to added from start
                            messages.reverse();
                            //adding to messages list
                            messages.forEach(function (message) {
                                if (_this.messagesKeys.indexOf(message.key) === -1) {
                                    _this.pushItem(message, false);
                                }
                            });
                            _this.saveOfflineData();
                        }
                        _this.contentResize();
                    }
                    if (lastMessageKey) {
                        _this.goToElement('message-' + lastMessageKey).then(function () {
                            paginator.complete();
                        }).catch(function () {
                            paginator.complete();
                        });
                    }
                });
            }
            else {
                paginator.enable(false);
                paginator.complete();
            }
        }
        else {
            paginator.enable(false);
            paginator.complete();
        }
    };
    ChatPage.prototype.initUser = function () {
        //setting current User
        this.user = this.connection.user;
        this.userID = this.user.id;
    };
    ChatPage.prototype.listenToEvents = function () {
        var _this = this;
        //listening to platforms events
        this.events.subscribe('platform:onPause', function () {
            console.log('pause');
            _this.doLeaving(false);
        });
        this.events.subscribe('platform:onResumed', function () {
            _this.setFirebaseRef();
            _this.listenToFirebaseEvents(true);
            //make all unread count of this ticket to zero
            _this.clearBadgeCountIfAny();
        });
        //notification subs
        this.events.subscribe('notification:chat', function (notification) {
            if (_this.lastcalled) {
                return;
            }
            _this.lastcalled = true;
            setTimeout(function () {
                this.lastcalled = false;
            }, 100);
            /**
             * checking if chatting with same ticketNo
             * if not then show in toast with button
             */
            if (_this.ticket !== notification.additionalData.params) {
                var chatToast = _this._toastCtrl.create({
                    message: 'New message from ' + notification.title,
                    duration: 5000,
                    position: 'top',
                    showCloseButton: true,
                    closeButtonText: 'open',
                    dismissOnPageChange: true,
                });
                chatToast.onDidDismiss(function (data, role) {
                    if (role === 'close') {
                        _this.navCtrl.push(ChatPage_1, notification.additionalData.params);
                    }
                });
                chatToast.present();
            }
        });
    };
    ChatPage.prototype.doTranslate = function () {
        var _this = this;
        //loading
        this.translate.get('Common._Loading_').subscribe(function (translated) {
            if (_this.title === 'loading') {
                _this.title = translated;
            }
        });
        //doctor
        this.translate.get('CommunicationPage._Doctor_').subscribe(function (translated) {
            _this.doctor_translate = translated;
        });
        //impression
        this.translate.get('ChatScreen._ImpressionNo_').subscribe(function (translated) {
            _this.impression_no_translate = translated;
        });
        //camera
        this.translate.get('ChatScreen._Camera_').subscribe(function (translated) {
            _this.camera_translate = translated;
        });
        //photo & video
        this.translate.get('ChatScreen._CameraAndVideo_').subscribe(function (translated) {
            _this.photo_video_library_translate = translated;
        });
        //video
        this.translate.get('ChatScreen._Videos_').subscribe(function (translated) {
            _this.video_translate = translated;
        });
        //audio
        this.translate.get('ChatScreen._Audios_').subscribe(function (translated) {
            _this.audio_tranlate = translated;
        });
        //cancel
        this.translate.get('Common._Cancel_').subscribe(function (translated) {
            _this.cancel_translate = translated;
        });
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.doTranslate();
        //checking if user logged in
        if (!__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.connection.user)) {
            this.initUser();
            //get Chat info before we load
            this.initData().then(function (status) {
                _this.listenToEvents();
            }).catch(function (error) {
                _this.navCtrl.pop();
            });
        }
        else {
            this.events.subscribe('user:ready', function (User) {
                if (!__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](User)) {
                    _this.ionViewDidEnter();
                }
                else {
                    _this.events.publish('toast:create', 'Kindly login to access Query');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_24__logout_logout__["a" /* LogoutPage */]);
                }
            });
        }
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        console.log('leaving');
        this.doLeaving(true);
    };
    ChatPage.prototype.initData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._network.type !== 'none') {
                _this.connection.doPost('Communication/GetQueryDetail', {
                    TicketRegisterNo: _this.ticket,
                }).then(function (response) {
                    _this.data = JSON.parse(response.Data);
                    console.log(_this.data);
                    _this.setOfflineTicketList(_this.data);
                    _this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(function (status) { }).catch(function (error) { });
                    _this.setTitle();
                    _this.setUsers().then(function (chatUsersList) {
                        _this.connectFireBase();
                        resolve(true);
                    }).catch(function (error) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_25__home_home__["a" /* HomePage */]);
                        reject(false);
                    });
                }).catch(function (error) {
                    reject(error);
                });
            }
            else {
                _this.storage.get('OfflineTickets').then(function (tickets) {
                    if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](tickets)) {
                        tickets = {};
                    }
                    if (!(_this.ticket in tickets) || __WEBPACK_IMPORTED_MODULE_2_underscore__["size"](tickets[_this.ticket]) === 0) {
                        _this.events.publish('toast:create', _this.offlineMessageText);
                        reject(false);
                        return;
                    }
                    _this.data = tickets[_this.ticket];
                    console.log(_this.data);
                    _this.setTitle();
                    _this.setUsers().then(function (chatUsersList) {
                        _this.initOffline();
                        resolve(true);
                    }).catch(function (error) {
                        reject(error);
                    });
                });
            }
        });
    };
    /**
     * sets title for Chat
     */
    ChatPage.prototype.setTitle = function () {
        this.title = this.data.Query[0].Patient;
        this.subTitle = this.doctor_translate + ': ' + this.data.Query[0].Doctor + ', ' + this.impression_no_translate + ': ' + this.data.Query[0].ImpNo;
    };
    /**
     * extrats users name, ids & push tokens
     */
    ChatPage.prototype.setUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.data && _this.data.User.length) {
                _this.data.User[0].Dentist.forEach(function (user) {
                    //for typing
                    _this.userTyping[user.LoginUserID] = user.UserName;
                    //actual user
                    _this.chatUsers[user.LoginUserID] = { Name: user.UserName, LoginTypeID: user.LoginTypeID };
                    //adding lang
                    _this.addLang(user);
                });
                _this.data.User[0].GroupUser.forEach(function (user) {
                    //for typing
                    _this.userTyping[user.LoginUserID] = user.UserName;
                    //actual user
                    _this.chatUsers[user.LoginUserID] = { Name: user.UserName, LoginTypeID: user.LoginTypeID };
                    //adding lang
                    _this.addLang(user);
                });
                resolve(_this.chatUsers);
            }
            else {
                reject('No User');
            }
        });
    };
    ChatPage.prototype.addLang = function (user) {
        //adding to group languages
        if (this.chatLanguages.indexOf(user.MyLanguage) === -1) {
            this.chatLanguages.push(user.MyLanguage);
        }
        //setting my own lang
        if (user.LoginUserID === this.userID) {
            this.myLanguage = user.MyLanguage;
        }
    };
    ChatPage.prototype.openUploadOptions = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: null,
            cssClass: 'text-left',
            buttons: [
                {
                    text: this.camera_translate,
                    icon: 'ios-camera-outline',
                    handler: function () {
                        _this.captureImage('camera');
                    }
                },
                {
                    text: this.photo_video_library_translate,
                    icon: 'ios-image-outline',
                    handler: function () {
                        _this.captureImage('gallery');
                    }
                },
                {
                    text: this.audio_tranlate,
                    icon: 'ios-mic-outline',
                    handler: function () {
                        _this.captureAudio(0);
                    }
                },
                {
                    text: this.video_translate,
                    icon: 'ios-videocam-outline',
                    // role: 'desructive',
                    handler: function () {
                        _this.captureVideo(60);
                    }
                },
                {
                    text: this.cancel_translate,
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ChatPage.prototype.sendTextMessage = function (event) {
        var _this = this;
        if (this.keyboardOpen) {
            event.preventDefault();
            this.sendClickKeepKeyboardOpened = true;
            this.messageInput.nativeElement.focus();
        }
        else {
            this.sendClickKeepKeyboardOpened = false;
        }
        if (this.translating) {
            return;
        }
        if (this.message.trim() === '') {
            return false;
        }
        if (this.message) {
            var textMessage = this.message.trim().replace(/(?:\r\n|\r|\n)/g, '<br/>');
            this.translating = true;
            this.sendToFirebase(textMessage).then(function (data) {
                _this.translating = false;
                _this.message = '';
            }).catch(function (error) {
                console.log(error);
                _this.translating = false;
                _this.message = '';
            });
        }
        else {
            this.message = '';
        }
    };
    ChatPage.prototype.sendToFirebase = function (message, type, url) {
        var _this = this;
        if (message === void 0) { message = ''; }
        if (type === void 0) { type = 'Text'; }
        if (url === void 0) { url = false; }
        return new Promise(function (resolve, reject) {
            var readObject = {};
            readObject[_this.userID] = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP;
            _this.translateMessage(message, type).then(function (translatedMessages) {
                console.log(translatedMessages);
                _this.messagesRef.push({
                    Message: message,
                    Translation: translatedMessages,
                    MessageLanguage: _this.myLanguage,
                    CreateAt: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP,
                    MessageType: type,
                    HasAttachment: type !== 'Text',
                    From: _this.user.Customer,
                    UserID: _this.userID,
                    LoginTypeID: _this.user.LoginTypeID,
                    Status: 0,
                    URL: url,
                    TicketNo: _this.ticket,
                    Read: readObject,
                }).then(function (messageFromFirebase) {
                    var data = {
                        Message: message,
                        MessageType: type,
                        URL: url,
                        key: messageFromFirebase.key,
                        Translation: translatedMessages,
                        MessageLanguage: _this.myLanguage,
                    };
                    //send to Server
                    _this.sendMessageToServer(data);
                    resolve(data);
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ChatPage.prototype.translateMessage = function (message, type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (type === 'Text') {
                var translation_1 = {};
                //adding mine which is original
                translation_1[_this.myLanguage] = message;
                //checking if all user knows only one lang, hence no need of translating
                if (_this.chatLanguages.length < 2) {
                    resolve(translation_1);
                }
                else {
                    //looping over each lang and getting translation
                    _this.chatLanguages.forEach(function (lang) {
                        //not translating my lang
                        if (lang !== _this.myLanguage) {
                            _this.http.post('https://translation.googleapis.com/language/translate/v2?key=' + __WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* Global */].Translate.key, {
                                q: message,
                                source: _this.myLanguage,
                                target: lang,
                            }).map(function (response) { return response.json(); }).subscribe(function (response) {
                                if (response.data) {
                                    translation_1[lang] = response.data.translations[0].translatedText;
                                }
                                else {
                                    translation_1[lang] = message;
                                }
                                if (__WEBPACK_IMPORTED_MODULE_2_underscore__["size"](translation_1) === _this.chatLanguages.length) {
                                    resolve(translation_1);
                                }
                            }, function (error) {
                                reject(error);
                            });
                        }
                    });
                }
            }
            else {
                resolve({});
            }
        });
    };
    ChatPage.prototype.onBlur = function (event) {
        console.log('blur:' + this.keyboardOpen);
        if (this.keyboardOpen) {
            event.target.focus();
        }
        else {
        }
    };
    ChatPage.prototype.keyup = function (event) {
        this.setTyping(true);
    };
    ChatPage.prototype.onFocus = function (event) {
        console.log('focus');
        this.keyboardOpen = true;
        this.setTyping(true);
    };
    ChatPage.prototype.closeKeyboard = function (event) {
        console.log('touchstart:' + this.keyboardOpen);
        if (this.keyboardOpen) {
            this.keyboardOpen = false;
            this.setTyping(false);
            this.keyboard.close();
        }
    };
    ChatPage.prototype.setTyping = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        return new Promise(function (resolve, reject) {
            if (_this.typingRef) {
                //setting value
                var currentTypingTime = __WEBPACK_IMPORTED_MODULE_5_moment__().utc().valueOf();
                if (flag) {
                    if ((currentTypingTime - _this.lastTypingTime) > 2500) {
                        _this.lastTypingTime = currentTypingTime;
                        _this.typingRef.child(_this.userID).set(__WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP).then(function (value) {
                            resolve();
                        });
                    }
                    else {
                        resolve();
                    }
                }
                else {
                    resolve();
                }
            }
            else {
                // reject('no ref');
            }
        });
    };
    ChatPage.prototype.setChatting = function (flag) {
        var _this = this;
        if (flag === void 0) { flag = true; }
        return new Promise(function (resolve, reject) {
            if (_this.chattingRef) {
                _this.chattingRef.child(_this.userID).set(flag).then(function (value) {
                    resolve();
                });
            }
            else {
                // reject('No ref');
            }
        });
    };
    ChatPage.prototype.scrollBottom = function (caller) {
        var _this = this;
        console.log('ScrollBottom: ' + caller);
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* Global */].getActiveComponentName(_this.navCtrl.getActive()) !== 'ChatPage') {
                reject(false);
                return;
            }
            if (typeof _this.content !== 'undefined') {
                var animate_1 = 300;
                _this.contentResize();
                if (_this.content && typeof _this.content.scrollToBottom === 'function' && _this.content._scroll) {
                    var wait = _this.content.isScrolling ? 150 : null;
                    setTimeout(function () {
                        _this.content.scrollToBottom(animate_1).then(function (value) {
                            resolve(value);
                        }).catch(function (error) {
                            reject(error);
                        });
                    });
                }
            }
            else {
                reject('no content');
            }
        });
    };
    ChatPage.prototype.contentResize = function () {
        if (typeof this.content !== 'undefined' && typeof this.content.resize === 'function') {
            this.content.resize();
        }
    };
    ChatPage.prototype.captureImage = function (type) {
        var _this = this;
        if (type === void 0) { type = 'camera'; }
        var options = this.cameraOptions;
        if (type === 'gallery') {
            options = this.galleryOptions;
        }
        this.camera.getPicture(options).then(function (url) {
            var mimeType = __WEBPACK_IMPORTED_MODULE_3_mime_types__["lookup"](url);
            //checking if video of image
            if (mimeType.indexOf('image') > -1) {
                url = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* normalizeURL */])(url);
                _this.uploadFile(url).then(function (data) {
                    if (data.indexOf('https') !== -1) {
                        //sending to Firebase
                        _this.sendToFirebase('', 'Image', data);
                    }
                }).catch(function (error) {
                    _this.events.publish('toast:error', error);
                });
            }
            else if (mimeType.indexOf('video') > -1) {
                _this.uploadVideo(url);
            }
        }).catch(function (error) {
            _this.events.publish('toast:error', error);
        });
    };
    ChatPage.prototype.captureAudio = function (duration) {
        if (duration === void 0) { duration = null; }
        if (duration) {
            this.vibration.vibrate(this.vibrateDuration);
        }
        //show recording mode
        this.aboutToRecord = true;
        this.recordingInProgress = false;
        this.recordTime = 0;
    };
    ChatPage.prototype.closeRecording = function () {
        this.aboutToRecord = false;
        this.recordingInProgress = false;
        this.recordTime = 0;
    };
    ChatPage.prototype.startRecording = function () {
        var _this = this;
        this.file.createFile(this.dataDirectory, this.recordFileName, true).then(function (fileEntry) {
            _this.recordMediaFile = _this._media.create(_this.dataDirectory.replace(/^file:\/\//, '') + _this.recordFileName);
            _this.vibration.vibrate(_this.vibrateDuration);
            _this.recordMediaFile.startRecord();
            _this.recordingInProgress = true;
            //interval 
            _this.recordInterval = setInterval(function () {
                _this.recordTime++;
            }, 1000);
        }).catch(function (error) {
        });
    };
    ChatPage.prototype.stopRecording = function () {
        var _this = this;
        this.vibration.vibrate(this.vibrateDuration);
        //stop from Media
        this.recordMediaFile.stopRecord();
        this.recordMediaFile.release();
        //make a copy
        var totalTime = this.recordTime;
        //clear Interval
        if (this.recordInterval) {
            clearInterval(this.recordInterval);
            this.recordInterval = null;
        }
        //clear all
        this.closeRecording();
        //process
        var file = (this.dataDirectory + this.recordFileName);
        this.file.checkFile(this.dataDirectory, this.recordFileName).then(function (status) {
            if (status) {
                _this.uploadFile(file).then(function (data) {
                    //deleting file
                    _this.file.removeFile(_this.dataDirectory, _this.recordFileName);
                    //sending to Firebase
                    _this.sendToFirebase('', 'Audio', data);
                }).catch(function (error) {
                    //deleting file
                    _this.file.removeFile(_this.dataDirectory, _this.recordFileName).catch(function (error) {
                    });
                    _this.events.publish('toast:error', error);
                });
            }
        }).catch(function (error) {
        });
    };
    ChatPage.prototype.getRecordTime = function () {
        var minutes = Math.floor(this.recordTime / 60);
        var seconds = '' + (this.recordTime - minutes * 60);
        if (seconds.length === 1) {
            seconds = '0' + seconds;
        }
        return minutes + ':' + seconds;
    };
    ChatPage.prototype.captureVideo = function (duration) {
        var _this = this;
        var options = {
            limit: 1,
            highquality: false,
            duration: duration,
        };
        this.videoCapturePlus.captureVideo(options).then(function (mediafile) {
            if (mediafile.length > 0) {
                var url = mediafile[0].fullPath;
                _this.uploadVideo(url);
            }
        }, function (error) {
            _this.events.publish('toast:error', error.message);
        }).catch(function (error) {
            console.log(error);
        });
    };
    ChatPage.prototype.uploadVideo = function (url) {
        var _this = this;
        url = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* normalizeURL */])(url);
        this.uploadFile(url).then(function (data) {
            if (data.indexOf('https') !== -1) {
                //sending to Firebase
                _this.sendToFirebase('', 'Video', data);
            }
        }).catch(function (error) {
            _this.events.publish('toast:error', error);
        });
    };
    ChatPage.prototype.uploadFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (file) {
                _this.progressPercent = 0;
                var fileTransfer = _this.transfer.create();
                var options = _this.setFileOptions(file);
                fileTransfer.upload(file, __WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* Global */].SERVER_URL + 'Communication/InsertChat_Attachement', options)
                    .then(function (data) {
                    _this.progressPercent = 0;
                    //getting URL from XML
                    console.log(data);
                    if (data.response.indexOf('http') === -1) {
                        reject(data);
                    }
                    else if (data.response.indexOf('>') > -1) {
                        resolve(data.response.substring(data.response.indexOf('>') + 1, data.response.lastIndexOf('<')));
                    }
                    else {
                        resolve(JSON.parse(data.response));
                    }
                }, function (err) {
                    console.log(err);
                    _this.progressPercent = 0;
                    reject(err);
                });
                fileTransfer.onProgress(function (progress) {
                    if (progress.lengthComputable) {
                        _this.progressPercent = parseFloat((progress.loaded * 100 / progress.total).toFixed(2));
                    }
                });
            }
            else {
                reject('Empty File');
            }
        });
    };
    ChatPage.prototype.setFileOptions = function (file) {
        //removing ? if any
        if (file.indexOf('?') === -1) {
            file += '?';
        }
        file = file.substring(0, file.lastIndexOf('?'));
        var fileName = file.substring(file.lastIndexOf('/') + 1);
        var fileExtension = file.substring(file.lastIndexOf('.') + 1);
        var options = {
            fileKey: 'file',
            fileName: fileName,
            mimeType: __WEBPACK_IMPORTED_MODULE_3_mime_types__["lookup"](fileExtension),
            chunkedMode: false,
            // headers: new Headers({
            //   // 'Content-Type': 'application/json',
            //   // Connection: "close",
            //   FileName: fileName,
            //   FileExtension: fileExtension,
            // }),
            params: {
                TicketNo: this.ticket,
                CustomerID: this.user.CustomerID,
                SecureToken: this.user.SecureToken,
                OrganizationUnitID: this.user.LoginOUID,
                LoginTypeID: this.user.LoginTypeID,
                LoginUserID: this.user.CustomerPortalID,
                FileName: fileName,
                FileExtension: fileExtension,
            },
        };
        return options;
    };
    ChatPage.prototype.sendPushNotification = function (message, users) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](message.Translation)) {
            message.Translation = { en: message.Message };
        }
        users.forEach(function (user) {
            var notificationObj = {
                include_player_ids: [
                    user.DeviceID
                ],
                data: {
                    badge: user.Badge,
                    page: 'ChatPage',
                    params: _this.ticket
                },
                headings: user.Title,
                priority: 10,
                contents: message.Translation,
                android_accent_color: 'FF' + __WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* Global */].color.primary,
                ios_badgeType: 'SetTo',
                ios_badgeCount: user.Badge,
            };
            //checking if Image then adding image notification
            if (message.MessageType === 'Image') {
                notificationObj.contents.en = '📷 Image';
                notificationObj.contents.fr = '📷 Image';
                notificationObj['ios_attachments'] = {
                    'attachment-1': message.URL,
                };
                notificationObj['big_picture'] = message.URL;
            }
            else if (message.MessageType === 'Video') {
                notificationObj.contents.en = '📹 Video Message';
                notificationObj.contents.fr = '📹 Video Message';
            }
            else if (message.MessageType === 'Audio') {
                notificationObj.contents.en = '🎤 Voice Message';
                notificationObj.contents.fr = '🎤 Voice Message';
            }
            _this._oneSignal.postNotification(notificationObj).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    ChatPage.prototype.sendMessageToServer = function (message) {
        var _this = this;
        // get live chat users
        var activeUserList = this.getLiveChatUsers();
        var fileName = null;
        var fileExtension = null;
        //if image or audio, sending its file name & extension
        if (message.URL) {
            fileExtension = message.URL.substring(message.URL.lastIndexOf('.') + 1);
            fileName = message.URL.substring(message.URL.lastIndexOf('/') + 1).replace('.' + fileExtension, '');
        }
        this.connection.doPost('Communication/InsertChat', {
            TicketNo: this.ticket,
            LiveUsersOnChat: activeUserList,
            Message: message.Message ? message.Message : '',
            MessageType: message.MessageType,
            URL: message.URL,
            FileName: fileName,
            FileExtension: fileExtension,
        }, false).then(function (response) {
            //send Push
            if (__WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* Global */].Push.OneSignal) {
                _this.sendPushNotification(message, response.Data);
            }
            //managing firebase count
            _this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(function (status) { }).catch(function (error) { });
        }).catch(function (error) {
        });
    };
    ChatPage.prototype.openFile = function (file) {
    };
    ChatPage.prototype.doLeaving = function (messageNull) {
        var _this = this;
        this.setChatting(false).then(function (response) {
            _this.chattingRef.off('value');
            _this.newMessagesRef.off('child_added');
        }).catch(function (error) {
        });
        this.setTyping(false).then(function (response) {
            _this.typingRef.off('value');
        }).catch(function (error) {
        });
        //no more status change read
        if (this.messagesRef) {
            this.messagesRef.orderByChild('Read').off('child_changed');
            this.messagesRef.orderByChild('Status').off('child_changed');
        }
        if (messageNull) {
            this.messages = [];
            this.messagesKeys = [];
            this.offlineMessages = [];
            this.events.unsubscribe('platform:onPause');
            this.events.unsubscribe('platform:onResumed');
            this.events.unsubscribe('notification:chat');
        }
        this.events.unsubscribe('user:ready');
        this.keyboard.disableScroll(false);
    };
    ChatPage.prototype.getLiveChatUsers = function () {
        var activeUserList = '';
        var currentChattingUsers = this.userChatting;
        if (!__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](currentChattingUsers)) {
            var filterUser = Object.keys(currentChattingUsers).filter(function (user) {
                return currentChattingUsers[user] !== false;
            });
            if (typeof filterUser !== 'undefined' && filterUser.length > 0) {
                activeUserList = filterUser.join();
            }
        }
        return activeUserList;
    };
    ChatPage.prototype.checkForNoMoreMessages = function () {
        var _this = this;
        if (this.messages && this.firstMessageKey && this.firstMessageKey === this.messages[0].key) {
            setTimeout(function () {
                _this.showNoMoreMessages = true;
                _this.contentResize();
            });
        }
    };
    ChatPage.prototype.clearBadgeCountIfAny = function () {
        var _this = this;
        if (this.messages.length) {
            this.connection.doPost('Communication/UpdateChatStatus', {
                TicketNo: this.ticket,
                UserCode: this.userID
            }, false).then(function (response) {
                _this._firebaseTransaction.doTransaction(response.FireBaseTransaction).then(function (status) { }).catch(function (error) { });
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    ChatPage.prototype.showDoctorTyping = function () {
        for (var typingUserId in this.userTyping) {
            //avoiding self
            if (typingUserId === this.userID) {
                continue;
            }
            //checking if in range
            if (this.isWithinRange(this.userTyping[typingUserId])) {
                return true;
            }
        }
        return false;
    };
    ChatPage.prototype.getName = function (userID) {
        if (!__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.chatUsers) && userID in this.chatUsers) {
            return this.chatUsers[userID].Name;
        }
        return '';
    };
    ChatPage.prototype.isWithinRange = function (time) {
        var momentTime = __WEBPACK_IMPORTED_MODULE_5_moment__(time).utc().local();
        if (momentTime.isValid()) {
            time = __WEBPACK_IMPORTED_MODULE_5_moment__().utc().valueOf() - momentTime.valueOf();
            return time <= 3000;
        }
        return false;
    };
    ChatPage.prototype.doFoldering = function () {
        var _this = this;
        this.file.checkDir(this.dataDirectory, this.ticket).then(function (exist) {
        }).catch(function (error) {
            if (error.code === 1) {
                _this.file.createDir(_this.dataDirectory, _this.ticket, false).then(function (entry) { }).catch(function (error) { });
            }
        });
    };
    ChatPage.prototype.initOffline = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('OfflineMessages-' + _this.ticket).then(function (messages) {
                if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](messages)) {
                    messages = {};
                }
                if (__WEBPACK_IMPORTED_MODULE_2_underscore__["size"](messages) === 0) {
                    _this.events.publish('toast:create', _this.offlineMessageText);
                    reject(false);
                    return;
                }
                //init List
                for (var key in messages) {
                    _this.pushItem(messages[key], false);
                }
                //for first message
                if (_this.messages.length) {
                    _this.firstMessageKey = _this.messagesKeys[0];
                    _this.checkForNoMoreMessages();
                }
                //saveOffline
                _this.saveOfflineData().then(function (status) {
                    resolve(status);
                }).catch(function (error) {
                    reject(error);
                });
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ChatPage.prototype.pushItem = function (item, pushFlag) {
        if (pushFlag === void 0) { pushFlag = true; }
        //converting time in milisec
        if (isNaN(item.CreateAt)) {
            var time = __WEBPACK_IMPORTED_MODULE_5_moment__(item.CreateAt);
            if (time.isValid()) {
                item.CreateAt = time.valueOf();
            }
        }
        var key = item.key;
        var index = this.messagesKeys.indexOf(key);
        if (index === -1) {
            if (pushFlag) {
                index = this.messages.push(item);
                //adding ticketno
                this.messagesKeys.push(key);
                //offline messages
                this.offlineMessages.push(item);
            }
            else {
                index = this.messages.unshift(item);
                //adding ticketno
                this.messagesKeys.unshift(key);
                //offline messages
                this.offlineMessages.unshift(item);
            }
        }
        return index;
    };
    ChatPage.prototype.saveOfflineData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.set('OfflineMessages-' + _this.ticket, _this.offlineMessages).then(function (status) {
                resolve(status);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ChatPage.prototype.setOfflineTicketList = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('OfflineTickets').then(function (tickets) {
                if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](tickets)) {
                    tickets = {};
                }
                tickets[_this.ticket] = data;
                _this.storage.set('OfflineTickets', tickets).then(function (status) {
                    resolve(status);
                }).catch(function (error) {
                    reject(error);
                });
            });
        });
    };
    ChatPage.prototype.openReading = function (event, message) {
        var time = new Date().getTime();
        if ((time - this.lastReadingTime) < 1000) {
            return;
        }
        if ([__WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* Global */].LoginType.Doctor, __WEBPACK_IMPORTED_MODULE_12__app_global__["a" /* Global */].LoginType.Parent].indexOf(this.user.LoginTypeID) > -1) {
            return;
        }
        this.lastReadingTime = time;
        var params = {
            message: message,
            chatUsers: this.chatUsers,
            ticket: this.ticket,
            userID: this.userID,
            loginTypeID: this.user.LoginTypeID,
        };
        var chatReadModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_26__pages_chat_chat_read_modal_chat_read_modal__["a" /* ChatReadModalPage */], params);
        chatReadModal.onDidDismiss(function (data) {
        });
        chatReadModal.present();
    };
    ChatPage.prototype.openSavedMedia = function (event) {
        var params = {
            path: this.dataDirectory,
            folder: this.ticket,
            loginTypeID: this.user.LoginTypeID,
        };
        var savedMediaModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_27__pages_chat_saved_media_saved_media__["a" /* SavedMediaPage */], params);
        savedMediaModal.onDidDismiss(function (data) {
        });
        savedMediaModal.present();
    };
    ChatPage.prototype.goToElement = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var element = document.getElementById(id);
                if (element) {
                    var yOffset = element.offsetTop;
                    _this.content.scrollTo(0, yOffset).then(function () {
                        resolve();
                    }).catch(function (error) {
                        reject();
                    });
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('messageInput'),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "messageInput", void 0);
    ChatPage = ChatPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/chat/chat.html"*/'<ion-header no-border (touchstart)="closeKeyboard($event)">\n  <header [title]="title" [buttons]="[{icon:\'archive\'}]" (buttonClicked)="openSavedMedia($event)"></header>\n  <ion-toolbar *ngIf="subTitle" class="sub-header">\n    <ion-title>{{subTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="chat" delegate-handle="chatScroll" (touchstart)="closeKeyboard($event)">\n  <div class="message-list">\n    <div id="noMore" class="no-more" *ngIf="showNoMoreMessages">\n      <span *ngIf="hasInternet || data.firstMessageKey === firstMessageKey">{{\'Common._NothingToShow_\' | translate}}</span>\n      <span *ngIf="hasInternet === false && data.firstMessageKey !== firstMessageKey">{{\'ChatScreen._OfflineOldMessage_\' | translate}}</span>\n    </div>\n    <ion-infinite-scroll *ngIf="messagesLoaded" [hidden]="showNoMoreMessages" (ionInfinite)="paginate($event)" position="top">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <chat-bubble [id]="\'message-\'+message.key" *ngFor="let message of messages | orderBy:\'CreateAt\'" class="message-wrapper"\n      [message]="message" [userID]="userID" [ticket]="ticket" [users]="chatUsers" [LoginTypeID]="user.LoginTypeID" [myLanguage]="myLanguage"\n      (press)="openReading($event, message, false)"></chat-bubble>\n  </div>\n  <div class="typing-container">\n    <ng-container *ngIf="user.LoginTypeID === global.LoginType.Group;else typing_doctor">\n      <div class="typing" *ngFor="let typingUserId of userTyping | keys" [hidden]="typingUserId === userID || !isWithinRange(userTyping[typingUserId])">{{\'ChatScreen._Typing_\' | translate:{name:getName(typingUserId)} }}</div>\n    </ng-container>\n    <ng-template #typing_doctor>\n      <div class="typing" *ngIf="showDoctorTyping()">{{\'ChatScreen._Typing_\' | translate:{name:global.APP_NAME} }}</div>\n    </ng-template>\n  </div>\n</ion-content>\n<ion-footer [keyboardAttach]="content" class="bar-stable footer-chat item-input-inset">\n  <ng-container *ngIf="hasInternet && messagesLoaded === false">\n    <ion-spinner name="dots"></ion-spinner>\n  </ng-container>\n  <ng-container *ngIf="hasInternet && messagesLoaded && aboutToRecord === false">\n    <button ion-button clear icon-only (click)="openUploadOptions()">\n      <ion-icon name="ios-add-outline"></ion-icon>\n    </button>\n\n    <label class="item-input-wrapper" [ngClass]="{\'send\': message.trim().length > 0}">\n      <!-- fz-elastic -->\n      <textarea autocomplete="on" [disabled]="translating" autocorrect="on" fz-elastic rows="1" #messageInput [(ngModel)]="message"\n        dir="auto" (keyup)="keyup($event)" (focus)="onFocus($event)" (blur)="onBlur($event)"></textarea>\n    </label>\n\n    <span *ngIf="message.trim().length > 0">\n      <button (click)="sendTextMessage($event)" [disabled]="translating" class="send-button" round ion-button small>\n        <ng-container *ngIf="translating;else show_send">\n          <ion-spinner name="dots"></ion-spinner>\n        </ng-container>\n        <ng-template #show_send>\n          {{\'ChatScreen._Send_\' | translate}}\n        </ng-template>\n      </button>\n    </span>\n    <span *ngIf="!message || message.trim().length === 0">\n      <button (click)="captureImage()" clear ion-button icon-only>\n        <ion-icon name="ios-camera-outline"></ion-icon>\n      </button>\n      <button class="buttons-seperator" ion-button clear icon-only>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n      <button (click)="captureAudio()" ion-button clear icon-only>\n        <ion-icon name="ios-mic-outline"></ion-icon>\n      </button>\n    </span>\n  </ng-container>\n  <ng-container *ngIf="hasInternet && aboutToRecord === true">\n    <ion-grid no-padding class="recording">\n      <ion-row no-padding align-items-center>\n        <ion-col text-start align-self-center no-padding>\n          <button ion-button clear icon-only [color]="recordingInProgress?\'primary\':\'dark\'">\n            <ion-icon name="ios-mic"></ion-icon>\n          </button>\n          <span class="timer">&nbsp;&nbsp;{{getRecordTime()}}</span>\n        </ion-col>\n        <ion-col text-end align-self-center no-padding>\n          <button ion-button small [hidden]="recordingInProgress" (click)="startRecording()" color="secondary">\n            {{\'ChatScreen._Record_\' | translate}}\n          </button>\n          <button ion-button small [hidden]="recordingInProgress" (click)="closeRecording()">\n            {{\'ChatScreen._Close_\' | translate}}\n          </button>\n          <button ion-button small [hidden]="!recordingInProgress" (click)="stopRecording()">\n            {{\'ChatScreen._Send_\' | translate}}\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n  <ng-container *ngIf="hasInternet === false">\n    <span text-center text-small>\n      {{\'ChatScreen._OfflineMessageSend_\' | translate}}\n    </span>\n  </ng-container>\n</ion-footer>\n\n<div class="file-uploader-progress" *ngIf="progressPercent > 0">\n  <div class="progress-outer">\n    <div class="progress-inner" [style.width]="progressPercent + \'%\'">\n      {{progressPercent}}%\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_9__providers_firebase_transaction_firebase_transaction__["a" /* FirebaseTransactionProvider */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_video_capture_plus__["a" /* VideoCapturePlus */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_video_editor__["a" /* VideoEditor */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_onesignal__["a" /* OneSignal */]])
    ], ChatPage);
    return ChatPage;
    var ChatPage_1;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_global__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__communication_communication__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pickup_pickup__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__case_status_case_status__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_chat__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_underscore__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, connection, user, events, angularFireDatabase, _storage, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.connection = connection;
        this.user = user;
        this.events = events;
        this.angularFireDatabase = angularFireDatabase;
        this._storage = _storage;
        this.translate = translate;
        this.global = {};
        this.data = {
            CaseSearchCount: 0,
            CommunicationCount: 0,
            PickUpCount: 0,
            Total: 0,
        };
        this.loginType = 0;
        this.isDentalLogin = false;
        this.isNormalLogin = false;
        this.Customer = null;
        this.global = __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */];
        //listening to Resume & Pause events
        this.events.subscribe('platform:onResumed', function () {
            _this.initData(null, false);
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //checking if logged in
        if (!__WEBPACK_IMPORTED_MODULE_12_underscore__["isEmpty"](this.connection.user)) {
            this.initData(null, false);
        }
        else {
            //waiting for login
            this.events.subscribe('user:ready', function (status) {
                if (status) {
                    _this.initData(null, false);
                }
            });
        }
    };
    HomePage.prototype.initData = function (event, refresh) {
        var _this = this;
        //getting it from offline
        this._storage.get('OfflineHome').then(function (home) {
            if (home) {
                _this.data = home;
            }
        });
        //user setting
        this.user.getUser().then(function (user) {
            _this.Customer = user.Customer;
            _this.loginType = user.LoginTypeID;
            if (_this.loginType === __WEBPACK_IMPORTED_MODULE_5__app_global__["a" /* Global */].LoginType.Group) {
                _this.isDentalLogin = true;
            }
            else {
                _this.isNormalLogin = true;
            }
            _this.connectToFireBase(user.id);
            _this.markRefresherComplete(event);
        });
        //old way remove in next version
        //getting Data
        // this.connection.doPost('Dashboard/GetNotificationCount', {}, false).then(response => {
        //     this.data = response;
        //     this.markRefresherComplete(event);
        // }).catch(error => {
        //     this.data = -1;
        //     this.markRefresherComplete(event);
        // });
    };
    HomePage.prototype.markRefresherComplete = function (refresher) {
        if (refresher) {
            refresher.complete();
        }
    };
    HomePage.prototype.connectToFireBase = function (user_id) {
        var _this = this;
        this.angularFireDatabase.object('Badge/' + user_id).snapshotChanges().subscribe(function (snapshot) {
            snapshot = snapshot.payload.val();
            if (snapshot) {
                _this.data = snapshot;
            }
            else {
                _this.data = {
                    PickUpCount: 0,
                    CaseSearchCount: 0,
                    CommunicationCount: 0,
                };
            }
            //setting data for next use
            _this._storage.set('OfflineHome', _this.data);
        });
    };
    HomePage.prototype.openDashboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage.prototype.openPickup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pickup_pickup__["a" /* PickupPage */]);
    };
    HomePage.prototype.openCaseSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__case_status_case_status__["a" /* CaseStatusPage */]);
    };
    HomePage.prototype.openCommunications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__communication_communication__["a" /* CommunicationPage */]);
    };
    HomePage.prototype.openOfficeList = function () {
    };
    HomePage.prototype.openChat = function (ticket) {
        if (ticket === void 0) { ticket = 'TR-25995-GJ'; }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__chat_chat__["a" /* ChatPage */], ticket);
    };
    HomePage.prototype.useLang = function (lang) {
        this.translate.use(lang);
        this.user.registerPushID('123456');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/home/home.html"*/'<ion-header no-border>\n    <header [title]="\'HomeScreen._Home_\' | translate"></header>\n    <!-- <div [hidden]="Customer === null" class="cutomer-name">{{Customer}}</div> -->\n</ion-header>\n<ion-content no-padding>\n    <ion-refresher (ionRefresh)="initData($event, true)">\n        <ion-refresher-content pullingIcon="arrow-round-down" pullingText="Pull to refresh" refreshingSpinner="crescent" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <center-spinner [hidden]="loginType"></center-spinner>\n    <ng-container *ngIf="loginType">\n        <div style="background:#4ECDC4" class="homescreenDivision" *ngIf="loginType !== 3">\n            <ion-grid style="height: inherit;">\n                <ion-row style="height: 100%; align-items: center;" (click)="openDashboard()">\n                    <ion-col col-4 style="text-align:center;">\n                        <img src="assets/img/test7.png" height="70" width="80" style="padding-top: 10px;" />\n                    </ion-col>\n                    <ion-col style="color:white">\n                        <h5 style="margin-bottom:0px;">{{\'HomeScreen._Dashboard_\' | translate}}</h5>\n                        <p style="margin-bottom:0px;margin-top:0px; font-size: smaller;">{{\'HomeScreen._DashboardSummary_\' | translate}}</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <div style="background:#2574A9" class="homescreenDivision" *ngIf="loginType !== 3">\n            <ion-grid style="height: inherit;">\n                <ion-row style="height: 100%; align-items: center;" (click)="openPickup()">\n                    <ion-col col-4 style="text-align:center;">\n                        <img src="assets/img/test4.png" height="80" width="80" style="padding-top: 10px;" />\n                    </ion-col>\n                    <ion-col style="color:white">\n                        <h5 style="margin-bottom:0px;"> {{\'HomeScreen._PickUp_\' | translate}}\n                            <sup *ngIf="data.PickUpCount !== 0">\n                                <ion-badge style="background:gray">{{data.PickUpCount}}</ion-badge>\n                            </sup>\n                        </h5>\n                        <p style="margin-bottom:0px;margin-top:0px; font-size: smaller;">{{\'HomeScreen._EasyPickup_\' | translate}}</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <div style="background:#87D37C" [ngClass]="{\'homescreenDivision\': isNormalLogin, \'homescreenDivision1\': isDentalLogin}" class="homescreenDivision">\n            <ion-grid style="height: inherit;">\n                <ion-row style="height: 100%; align-items: center;" (click)="openCaseSearch()">\n                    <ion-col col-4 style="text-align:center;">\n                        <img src="assets/img/test6.png" height="65" width="60" style="padding-top: 10px;" />\n                    </ion-col>\n                    <ion-col style="color:white">\n                        <h5 style="margin-bottom:0px;"> {{\'HomeScreen._CaseStatus_\' | translate}}\n                            <sup *ngIf="data.CaseSearchCount !== 0 && loginType !== 3">\n                                <ion-badge style="background:gray">{{data.CaseSearchCount}}</ion-badge>\n                            </sup>\n                        </h5>\n                        <p style="margin-bottom:0px;margin-top:0px; font-size: smaller;">{{\'HomeScreen._ViewCaseStatus\' | translate}}</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <div style="background:#00B16A" [ngClass]="{\'homescreenDivision\': isNormalLogin, \'homescreenDivision1\': isDentalLogin}">\n            <ion-grid style="height: inherit;">\n                <ion-row style="height: 100%; align-items: center;" (click)="openCommunications()">\n                    <ion-col col-4 style="text-align:center;">\n                        <img src="assets/img/test5.png" height="70" width="65" style="padding-top: 10px;" />\n                    </ion-col>\n                    <ion-col style="color:white">\n                        <h5 style="margin-bottom:0px;"> {{\'HomeScreen._Communication_\' | translate}}\n                            <sup *ngIf="data.CommunicationCount !== 0">\n                                <ion-badge style="background:gray">{{data.CommunicationCount}}</ion-badge>\n                            </sup>\n                        </h5>\n                        <p style="margin-bottom:0px;margin-top:0px; font-size: smaller;"> {{\'HomeScreen._ViewCommunication_\' | translate}}</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </ng-container>\n    <!-- <button ion-button full (click)="openChat(\'TR-27513-GJ\')">Open Chat</button> -->\n    <!-- <button ion-button full (click)="useLang(\'en\')">Use en</button> -->\n    <!-- <button ion-button full (click)="useLang(\'fr\')">Use fr</button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/illusion-dental/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[675]);
//# sourceMappingURL=main.js.map