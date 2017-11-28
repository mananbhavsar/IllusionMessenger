webpackJsonp([2],{

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_location_accuracy__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_badge__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_fcm__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_case_status_case_status__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_communication_communication__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_help_help__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_logout_logout__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_offline_offline__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pickup_pickup__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_forgot_password_forgot_password__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_welcome_welcome__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_user_user__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__global__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__ = __webpack_require__(67);
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
    function MyApp(events, menu, platform, _statusBar, storage, splashScreen, user, loadingCtrl, alertCtrl, modalCtrl, toast, _network, _oneSignal, _diagnostic, _locationAccuracy, _geolocation, _keyboard, _badge, angularFireDatabase, _fcm) {
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
        this._badge = _badge;
        this.angularFireDatabase = angularFireDatabase;
        this._fcm = _fcm;
        this.loggedIn = false;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_26__pages_welcome_welcome__["a" /* WelcomePage */];
        this.latitude = 0.0;
        this.longitude = 0.0;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'About', name: 'AboutPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
            // { title: 'Contact', name: 'ContactUsPage', component: ContactUsPage, icon: 'mail' },
            { title: 'Help', name: 'HelpPage', component: __WEBPACK_IMPORTED_MODULE_18__pages_help_help__["a" /* HelpPage */], icon: 'help-circle' },
        ];
        this.loggedInPages = [
            { title: 'Home', name: 'HomePage', component: __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Dashboard', name: 'DashboardPage', component: __WEBPACK_IMPORTED_MODULE_17__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: '' },
            { title: 'Pickup', name: 'PickupPage', component: __WEBPACK_IMPORTED_MODULE_23__pages_pickup_pickup__["a" /* PickupPage */], icon: '' },
            { title: 'Case Status', name: 'CaseStatusPage', component: __WEBPACK_IMPORTED_MODULE_14__pages_case_status_case_status__["a" /* CaseStatusPage */], icon: '' },
            { title: 'Communication', name: 'CommunicationPage', component: __WEBPACK_IMPORTED_MODULE_16__pages_communication_communication__["a" /* CommunicationPage */], icon: '' },
        ];
        this.accountPages = [
            // { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'user' },
            { title: 'Logout', name: 'LogoutPage', component: __WEBPACK_IMPORTED_MODULE_21__pages_logout_logout__["a" /* LogoutPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Forgot Password', name: 'ForgotPasswordPage', component: __WEBPACK_IMPORTED_MODULE_24__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */], icon: 'key' },
        ];
        platform.ready().then(function () {
            _this._statusBar.overlaysWebView(false); // let status bar overlay webview
            _this._statusBar.backgroundColorByHexString(__WEBPACK_IMPORTED_MODULE_28__global__["a" /* Global */].color.primary);
            splashScreen.hide();
            _this.enableMenu(false);
            _this.listenToGobalEvents();
            _this.listenToLoginEvents();
            _this._keyboard.hideKeyboardAccessoryBar(false);
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
        this.nav.push(__WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__["a" /* TutorialPage */]);
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
        if (__WEBPACK_IMPORTED_MODULE_28__global__["a" /* Global */].getActiveComponentName(this.nav.getActive()) === page.name) {
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
            if (this.user._user.LoginTypeID === 3) {
                //for dashboard
                return ['DashboardPage', 'PickupPage'].indexOf(page.name) === -1;
            }
            return true;
        }
        return false;
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
                _this.events.publish('toast:create', 'Error occurred! Try again', 'danger');
            }
        });
        this.events.subscribe('push:send', function (id, message) {
            //             this._oneSignal.postNotification(notificationObj: OneSignalNotification);
        });
        //Network events
        this.events.subscribe('network:offline', function () {
            //sending to offline page only if not in offline 
            var currentPage = __WEBPACK_IMPORTED_MODULE_28__global__["a" /* Global */].getActiveComponentName(_this.nav.getActive());
            if (currentPage !== 'OfflinePage') {
                _this.events.publish('toast:create', 'you seems to be offline!');
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_22__pages_offline_offline__["a" /* OfflinePage */]);
            }
        });
        this.events.subscribe('network:online', function () {
            //sending to home page only in offline page
            var currentPage = __WEBPACK_IMPORTED_MODULE_28__global__["a" /* Global */].getActiveComponentName(_this.nav.getActive());
            if (currentPage === 'OfflinePage') {
                _this.events.publish('toast:create', 'Hola, you are online now');
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_26__pages_welcome_welcome__["a" /* WelcomePage */], true);
            }
        });
    };
    MyApp.prototype.initPreLoginPlugins = function () {
        var _this = this;
        //working on network
        this.doNetworking();
        //On app Resume & Pause
        this.platform.resume.subscribe(function () {
            _this.events.publish('platform:onResumed');
        });
        this.platform.pause.subscribe(function () {
            _this.events.publish('platform:onPause');
        });
        //working on OS Version
        this.doVersionCheck();
    };
    MyApp.prototype.initPostLoginPlugins = function () {
        //Location
        //this.initLocation();
        //OneSignal
        if (__WEBPACK_IMPORTED_MODULE_28__global__["a" /* Global */].Push.OneSignal) {
            this.initOneSignal();
        }
        //init FCM
        if (__WEBPACK_IMPORTED_MODULE_28__global__["a" /* Global */].Push.FCM) {
            this.initFCM();
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
                var alert_1 = _this.alertCtrl.create({
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
                alert_1.present();
            }
        });
    };
    MyApp.prototype.openNotificationPage = function (payload) {
        //do we need to open page
        if (payload.additionalData && payload.additionalData.page) {
            var page = null;
            switch (payload.additionalData.page) {
                case 'ChatPage':
                    page = __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */];
                    break;
                default:
                    page = __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */];
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
        var currentPage = __WEBPACK_IMPORTED_MODULE_28__global__["a" /* Global */].getActiveComponentName(this.nav.getActive());
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
            /*
            let notificationAlert = this.alertCtrl.create({
                title: payload.title,
                message: payload.body,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.openNotificationPage(payload);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }
                ]
            });
            notificationAlert.present();
            */
        }
    };
    MyApp.prototype.initOneSignal = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return;
        }
        this._oneSignal.startInit(__WEBPACK_IMPORTED_MODULE_28__global__["a" /* Global */].OneSignal.key, __WEBPACK_IMPORTED_MODULE_28__global__["a" /* Global */].OneSignal.android);
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
        this.events.subscribe('notification:process', function (notification, directOpenPage) {
        });
    };
    MyApp.prototype.initFCM = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return;
        }
        this.platform.ready().then(function () {
            _this._fcm.onNotification().subscribe(function (notification) {
                if (!('wasTapped' in notification)) {
                    notification.wasTapped = false;
                }
                console.log(notification);
                console.log((notification.wasTapped === false && notification.onlyData === 'false'), (notification.wasTapped === true && notification.onlyData === 'true'));
                /*
                 * showing message
                 * 1. wasTapped=true & onlyData=true => when message was clicked from notification
                 * 2. wasTapped=false & onlyData=false => when app was opened
                 */
                if ((notification.wasTapped === false && notification.onlyData === 'false')
                    || (notification.wasTapped === true && notification.onlyData === 'true')) {
                    var payload = {
                        payload: {
                            title: notification.title || notification.title,
                            body: notification.text || notification.text,
                            additionalData: {}
                        },
                    };
                    //adding additional data if any
                    if ('page' in notification) {
                        payload.payload.additionalData['page'] = notification.page;
                    }
                    if ('params' in notification) {
                        payload.payload.additionalData['params'] = notification.page;
                    }
                    _this.processNotification(payload, notification.wasTapped);
                }
            });
            _this._fcm.getToken().then(function (token) {
                _this.user.registerPushID(token);
            }).catch(function (error) {
            });
            _this._fcm.onTokenRefresh().subscribe(function (token) {
                _this.user.registerPushID(token);
            });
        });
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
            console.log(user);
            _this.loggedIn = true;
            _this.enableMenu(true);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */]);
            setTimeout(function () {
                var full_name = user ? user.Customer : '';
                _this.events.publish('toast:create', 'Welcome ' + full_name);
                _this.initPostLoginPlugins();
                _this.events.publish('user:changed');
                _this.events.publish('user:postLogin', true);
            });
        });
        this.events.subscribe('user:logout', function (logoutMessage) {
            _this.loggedIn = false;
            _this.enableMenu(false);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */]);
            setTimeout(function () {
                _this.events.publish('toast:create', logoutMessage);
                _this.events.publish('user:changed');
                _this.events.publish('user:postLogout', true);
            });
            if (_this.locationSubscription) {
                _this.locationSubscription.unsubscribe();
                _this.locationSubscription = null;
            }
            _this._badge.clear();
        });
        this.events.subscribe('user:unautharized', function () {
            _this.events.publish('user:logout', 'You are unauthorized user');
            //degistering device
            _this._oneSignal.setSubscription(false);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/app/app.html"*/'<ion-split-pane>\n\n    <!-- logged out menu -->\n    <ion-menu id="loggedOutMenu" [content]="content">\n\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>Menu</ion-title>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content class="outer-content">\n\n            <ion-list>\n                <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n                    <!-- <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n                    {{p.title}}\n                </button>\n            </ion-list>\n\n            <ion-list>\n                <ion-list-header>\n                    About App\n                </ion-list-header>\n                <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n                    <!-- <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n                    {{p.title}}\n                </button>\n            </ion-list>\n        </ion-content>\n\n    </ion-menu>\n\n    <!-- logged in menu -->\n    <ion-menu id="loggedInMenu" [content]="content">\n\n        <ion-header>\n            <ion-toolbar>\n                <ion-title>Menu</ion-title>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content class="outer-content">\n\n            <ion-list>\n                <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)" [hidden]="!isAuthorized(p)">\n                    <!-- <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n                    {{p.title}}\n                </button>\n            </ion-list>\n\n            <ion-list>\n                <ion-list-header>\n                    Account\n                </ion-list-header>\n                <button ion-item menuClose *ngFor="let p of accountPages" (click)="openPage(p)">\n                    <!-- <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n                    {{p.title}}\n                </button>\n            </ion-list>\n\n            <ion-list>\n                <ion-list-header>\n                    About App\n                </ion-list-header>\n                <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n                    <!-- <ion-icon [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n                    {{p.title}}\n                </button>\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n    <!-- main navigation -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_27__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_badge__["a" /* Badge */],
            __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseTransactionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
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
        var _loop_1 = function (path) {
            var count = transations[path];
            if (isNaN(count)) {
                count = 0;
            }
            else {
                count = parseInt(transations[path]);
            }
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref(path).transaction(function (countOnFirebase) {
                //null prevention
                countOnFirebase = countOnFirebase || 0;
                //checking if count negative to update
                if (countOnFirebase === 0 && count < 0) {
                    return countOnFirebase;
                }
                return countOnFirebase + count;
            });
        };
        for (var path in transations) {
            _loop_1(path);
        }
    };
    FirebaseTransactionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FirebaseTransactionProvider);
    return FirebaseTransactionProvider;
}());

//# sourceMappingURL=firebase-transaction.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mime_types__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mime_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mime_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_connection_connection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_global__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_onesignal__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_media_capture__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_media__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_vibration__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__logout_logout__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_home__ = __webpack_require__(97);
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
    function ChatPage(navCtrl, navParams, platform, connection, events, storage, camera, transfer, file, mediaCapture, _media, actionSheetCtrl, _oneSignal, _toastCtrl, vibration, keyboard, network) {
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
        this.mediaCapture = mediaCapture;
        this._media = _media;
        this.actionSheetCtrl = actionSheetCtrl;
        this._oneSignal = _oneSignal;
        this._toastCtrl = _toastCtrl;
        this.vibration = vibration;
        this.keyboard = keyboard;
        this.network = network;
        this.data = {};
        this.ticket = null;
        this.title = 'loading';
        this.subTitle = null;
        this.isIOS = false;
        this.isCordova = false;
        this.keyboardHeight = 0;
        this.basePath = '';
        this.messages = [];
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
        //other users Register Device ID
        this.otherUserRegisterDeviceIDs = [];
        this.chatUsers = {};
        this.badgeUsers = {};
        this.lastcalled = false;
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
            mediaType: this.camera.MediaType.PICTURE
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
        //init
        this.isIOS = this.platform.is('ios');
        this.isCordova = this.platform.is('cordova');
        this.dataDirectory = this.platform.is('android') ? this.file.externalDataDirectory : this.file.tempDirectory;
        //getting Ticket no
        this.ticket = this.navParams.data;
        this.basePath = 'Communications/' + this.ticket + '/';
        this.keyboard.onKeyboardShow().subscribe(function (data) {
            _this.scrollBottom('keyboard show');
        });
        this.keyboard.onKeyboardHide().subscribe(function (data) {
            console.log('keyboard closes');
            _this.contentResize();
            if (_this.sendClickKeepKeyboardOpened === false) {
                _this.closeKeyboard(null);
            }
            else {
                _this.sendClickKeepKeyboardOpened = false;
            }
            _this.scrollBottom('keyboard hide');
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
    };
    ChatPage.prototype.connectFireBase = function () {
        var _this = this;
        this.setFirebaseRef();
        //actual data/messages
        //getting first n message
        this.messagesRef.orderByKey().limitToLast(this.messageLimit).once('value', function (snapshot) {
            var lastKey = null;
            var numberOfMessages = 0;
            var ignoredStart = false;
            var messages = snapshot.val();
            for (var key in messages) {
                var message = messages[key];
                message['key'] = key;
                _this.messages.push(message);
                _this.messagesKeys.push(key);
                lastKey = key;
            }
            //checking if no more messages ie. first message key is same at 0 index
            _this.checkForNoMoreMessages();
            setTimeout(function () {
                _this.messagesLoaded = true;
                setTimeout(function () {
                    _this.scrollBottom('first time message load');
                }, 100);
            });
            //for new message
            _this.newMessagesRef = _this.messagesRef.orderByKey();
            if (lastKey) {
                _this.newMessagesRef = _this.newMessagesRef.startAt(lastKey);
            }
            _this.listenToFirebaseEvents(ignoredStart);
        });
        //first message
        this.messagesRef.orderByKey().limitToFirst(1).once('value', function (snapshot) {
            var message = snapshot.val();
            if (message) {
                _this.firstMessageKey = Object.keys(message)[0];
                _this.checkForNoMoreMessages();
            }
        });
    };
    ChatPage.prototype.listenToFirebaseEvents = function (ignoredStart) {
        var _this = this;
        //new Message
        this.newMessagesRef.on('child_added', function (snapshot) {
            if (ignoredStart) {
                var message = snapshot.val();
                if (_this.messages && message) {
                    message['key'] = snapshot.key;
                    _this.messages.push(message);
                    _this.messagesKeys.push(snapshot.key);
                    setTimeout(function () {
                        _this.scrollBottom('new message');
                    }, 200);
                }
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
            }
        });
        //event to listed others typing
        this.typingRef.on('value', function (snapshot) {
            _this.userTyping = snapshot.val();
            if (_this.typingRefLoaded) {
                console.log(_this.userTyping);
                setTimeout(function () {
                    _this.scrollBottom('typing ref init'); //1
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
        if (!this.messagesLoaded) {
            paginator.complete();
        }
        if (this.messages === null || this.messages[0].key === this.firstMessageKey) {
            paginator.enable(false);
            this.showNoMoreMessages = true;
        }
        console.log('paginate');
        //paging prev 10 messages
        if (this.messagesRef) {
            if (typeof this.messages[0] !== 'undefined') {
                this.messagesRef.orderByKey().limitToLast(this.messageLimit).endAt(this.messages[0].key).once('value', function (snapshot) {
                    var messages = [];
                    snapshot = snapshot.val();
                    if (snapshot) {
                        //removing first
                        delete snapshot[_this.messages[0].key];
                        //adding key
                        for (var key in snapshot) {
                            var message = snapshot[key];
                            message['key'] = key;
                            messages.push(message);
                        }
                        //checking
                        if (!__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](messages)) {
                            //reverse to added from start
                            messages.reverse();
                            //adding to messages list
                            messages.forEach(function (message) {
                                _this.messages.unshift(message);
                                _this.messagesKeys.unshift(message.key);
                            });
                        }
                        _this.contentResize();
                    }
                    paginator.complete();
                });
            }
            else {
                paginator.enable(false);
                paginator.complete();
            }
        }
        else {
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
    ChatPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //checking if user logged in
        if (!__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.connection.user)) {
            this.initUser();
            this.listenToEvents();
            //get Chat info before we load
            this.initData();
        }
        else {
            this.events.subscribe('user:ready', function (User) {
                if (!__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](User)) {
                    _this.ionViewDidEnter();
                }
                else {
                    _this.events.publish('toast:create', 'Kindly login to access Query');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_19__logout_logout__["a" /* LogoutPage */]);
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
        this.connection.doPost('Communication/GetQueryDetail', {
            TicketRegisterNo: this.ticket,
        }).then(function (response) {
            _this.data = response;
            _this.setTitle();
            _this.setUsers().then(function (chatUsersList) {
                _this.connectFireBase();
            }).catch(function (error) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_20__home_home__["a" /* HomePage */]);
            });
        }).catch(function (error) {
        });
    };
    /**
     * sets title for Chat
     */
    ChatPage.prototype.setTitle = function () {
        this.title = this.data.Query[0].Patient;
        this.subTitle = 'Doctor: ' + this.data.Query[0].Doctor + ', Imp No.: ' + this.data.Query[0].ImpNo;
    };
    /**
     * extrats users name, ids & push tokens
     */
    ChatPage.prototype.setUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](_this.data)) {
                _this.data.User[0].Dentist.forEach(function (user) {
                    //for typing
                    //this.userTyping[user.LoginUserID] = user.UserName;
                    //actual user
                    _this.chatUsers[user.LoginUserID] = { Name: user.UserName, LoginTypeID: user.LoginTypeID };
                    //badege user
                    _this.badgeUsers[user.LoginUserID] = true;
                    //adding push notification device ID
                    if (user.LoginUserID !== _this.userID && user.RegisteredDeviceID.length === 36) {
                        _this.otherUserRegisterDeviceIDs.push(user.RegisteredDeviceID);
                    }
                });
                _this.data.User[0].GroupUser.forEach(function (user) {
                    //for typing
                    _this.userTyping[user.LoginUserID] = user.UserName;
                    //actual user
                    _this.chatUsers[user.LoginUserID] = { Name: user.UserName, LoginTypeID: user.LoginTypeID };
                    //badege user
                    _this.badgeUsers[user.LoginUserID] = true;
                    //adding push notification device ID
                    if (user.LoginUserID !== _this.userID && user.RegisteredDeviceID.length === 36) {
                        _this.otherUserRegisterDeviceIDs.push(user.RegisteredDeviceID);
                    }
                });
                resolve(_this.chatUsers);
            }
            else {
                reject('No User');
            }
        });
    };
    ChatPage.prototype.openUploadOptions = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: null,
            cssClass: 'text-left',
            buttons: [
                {
                    text: 'Camera',
                    icon: 'ios-camera-outline',
                    handler: function () {
                        _this.captureImage('camera');
                    }
                },
                {
                    text: 'Photo & Gallery',
                    icon: 'ios-image-outline',
                    handler: function () {
                        _this.captureImage('gallery');
                    }
                },
                {
                    text: 'Audio',
                    icon: 'ios-mic-outline',
                    role: 'desructive',
                    handler: function () {
                        _this.captureAudio(0);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ChatPage.prototype.sendTextMessage = function (event) {
        if (this.keyboardOpen) {
            event.preventDefault();
            this.sendClickKeepKeyboardOpened = true;
            this.messageInput.nativeElement.focus();
        }
        else {
            this.sendClickKeepKeyboardOpened = false;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_underscore__["isEmpty"](this.message.trim())) {
            return false;
        }
        if (this.message) {
            var textMessage = this.message.trim().replace(/(?:\r\n|\r|\n)/g, '<br/>');
            this.sendToFirebase(textMessage);
        }
        this.message = '';
    };
    ChatPage.prototype.sendToFirebase = function (message, type, url) {
        var _this = this;
        if (message === void 0) { message = ''; }
        if (type === void 0) { type = 'Text'; }
        if (url === void 0) { url = false; }
        var readObject = {};
        readObject[this.userID] = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP;
        this.messagesRef.push({
            Message: message,
            CreateAt: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP,
            MessageType: type,
            HasAttachment: type !== 'Text',
            From: this.user.Customer,
            UserID: this.userID,
            LoginTypeID: this.user.LoginTypeID,
            Status: 0,
            URL: url,
            TicketNo: this.ticket,
            Read: readObject,
            BadgeCount: this.badgeUsers,
        }).then(function (messageFromFirebase) {
            var data = {
                Message: message,
                MessageType: type,
                URL: url,
                key: messageFromFirebase.key,
            };
            //send Push notification
            _this.sendPushNotification(data);
            //send to Server
            _this.sendMessageToServer(data);
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
                var currentTypingTime = __WEBPACK_IMPORTED_MODULE_5_moment__().valueOf();
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
            if (typeof _this.content !== 'undefined') {
                var animate_1 = 300;
                _this.contentResize();
                if (_this.content && typeof _this.content.scrollToBottom === 'function' && _this.content._scroll) {
                    var wait = _this.content.isScrolling ? 150 : 1;
                    setTimeout(function () {
                        _this.content.scrollToBottom(animate_1).then(function (value) {
                            resolve(value);
                        }).catch(function (error) {
                            reject(error);
                        });
                    }, wait);
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
            url = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* normalizeURL */])(url);
            _this.uploadFile(url).then(function (data) {
                if (data.indexOf('https') !== -1) {
                    //sending to Firebase
                    _this.sendToFirebase('', 'Image', data);
                }
            }).catch(function (error) {
                _this.events.publish('toast:error', error);
            });
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
    ChatPage.prototype.uploadFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (file) {
                _this.progressPercent = 0;
                var fileTransfer = _this.transfer.create();
                var options = _this.setFileOptions(file);
                fileTransfer.upload(file, __WEBPACK_IMPORTED_MODULE_8__app_global__["a" /* Global */].SERVER_URL + 'Communication/InsertChat_Attachement', options)
                    .then(function (data) {
                    _this.progressPercent = 0;
                    //getting URL from XML
                    if (data.response.indexOf('>') > -1) {
                        resolve(data.response.substring(data.response.indexOf('>') + 1, data.response.lastIndexOf('<')));
                    }
                    else {
                        resolve(JSON.parse(data.response));
                    }
                }, function (err) {
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
            headers: new Headers({
                'Content-Type': 'application/json',
                Connection: "close"
            }),
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
    ChatPage.prototype.sendPushNotification = function (message) {
        if (__WEBPACK_IMPORTED_MODULE_8__app_global__["a" /* Global */].Push.OneSignal) {
            var notificationObj = {
                include_player_ids: this.otherUserRegisterDeviceIDs,
                data: {
                    page: 'ChatPage', params: this.ticket
                },
                headings: {
                    en: this.user.Customer
                },
                contents: {
                    en: message.Message,
                },
                ios_badgeType: 'Increase',
                ios_badgeCount: 1,
            };
            //checking if Image then adding image notification
            if (message.MessageType === 'Image') {
                notificationObj.contents.en = '📷 Image';
                notificationObj['ios_attachments'] = {
                    'attachment-1': message.URL,
                };
                notificationObj['big_picture'] = message.URL;
            }
            else if (message.MessageType === 'Audio') {
                notificationObj.contents.en = '🎤 Voice Message';
            }
            this._oneSignal.postNotification(notificationObj).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    };
    ChatPage.prototype.sendMessageToServer = function (message) {
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
        this.messagesRef.orderByChild('Status').off('child_changed');
        if (messageNull) {
            this.messages = null;
        }
        this.events.unsubscribe('user:ready');
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
        if (this.messages && this.firstMessageKey && this.firstMessageKey === this.messages[0].key) {
            this.showNoMoreMessages = true;
        }
    };
    ChatPage.prototype.clearBadgeCountIfAny = function () {
        this.connection.doPost('Communication/UpdateChatStatus', {
            TicketNo: this.ticket,
            UserCode: this.userID
        }, false).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    ChatPage.prototype.isWithinRange = function (time) {
        var momentTime = __WEBPACK_IMPORTED_MODULE_5_moment__(time).utc().local();
        if (momentTime.isValid()) {
            time = __WEBPACK_IMPORTED_MODULE_5_moment__().valueOf() - momentTime.valueOf();
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
    ChatPage.prototype.ionViewCanEnter = function () {
        if (this.network.type === 'none') {
            this.events.publish('toast:error', 'Pickup not available Offline');
        }
        return this.network.type !== 'none';
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
            selector: 'page-chat',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/chat/chat.html"*/'<ion-header no-border (touchstart)="closeKeyboard($event)">\n  <header [title]="title"></header>\n  <ion-toolbar *ngIf="subTitle" class="sub-header">\n    <ion-title>{{subTitle}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="chat" delegate-handle="chatScroll" (touchstart)="closeKeyboard($event)">\n  <div class="message-list">\n    <div class="no-more" *ngIf="showNoMoreMessages">no more to show</div>\n    <ion-infinite-scroll *ngIf="messagesLoaded" [hidden]="showNoMoreMessages" (ionInfinite)="paginate($event)" position="top">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <chat-bubble *ngFor="let message of messages" class="message-wrapper" [message]="message" [userID]="userID" [ticket]="ticket"\n      [users]="chatUsers" [LoginTypeID]="user.LoginTypeID"></chat-bubble>\n  </div>\n  <div class="typing-container">\n    <div class="typing" *ngFor="let typingUserId of userTyping | keys" [hidden]="typingUserId === userID || !isWithinRange(userTyping[typingUserId])">{{chatUsers[typingUserId][\'Name\']}} typing</div>\n  </div>\n</ion-content>\n<ion-footer class="bar-stable footer-chat item-input-inset">\n  <ng-container *ngIf="messagesLoaded === false">\n    <ion-spinner name="dots"></ion-spinner>\n  </ng-container>\n  <ng-container *ngIf="messagesLoaded && aboutToRecord === false">\n    <button ion-button clear icon-only (click)="openUploadOptions()">\n      <ion-icon name="ios-add-outline"></ion-icon>\n    </button>\n\n    <label class="item-input-wrapper" [ngClass]="{\'send\': message.trim().length > 0}">\n      <!-- fz-elastic -->\n      <textarea autocomplete="on" autocorrect="on" fz-elastic rows="1" #messageInput [(ngModel)]="message" dir="auto" (keyup)="keyup($event)"\n        (focus)="onFocus($event)" (blur)="onBlur($event)"></textarea>\n    </label>\n\n    <span *ngIf="message.trim().length > 0">\n      <button (click)="sendTextMessage($event)" class="send-button" round ion-button small>\n        send\n      </button>\n    </span>\n    <span *ngIf="!message || message.trim().length === 0">\n      <button (click)="captureImage()" clear ion-button icon-only>\n        <ion-icon name="ios-camera-outline"></ion-icon>\n      </button>\n      <button class="buttons-seperator" ion-button clear icon-only>\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n      <button (click)="captureAudio()" ion-button clear icon-only>\n        <ion-icon name="ios-mic-outline"></ion-icon>\n      </button>\n    </span>\n  </ng-container>\n  <ng-container *ngIf="aboutToRecord === true">\n    <ion-grid no-padding class="recording">\n      <ion-row no-padding align-items-center>\n        <ion-col text-start align-self-center no-padding>\n          <button ion-button clear icon-only [color]="recordingInProgress?\'primary\':\'dark\'">\n            <ion-icon name="ios-mic"></ion-icon>\n          </button>\n          <span class="timer">&nbsp;&nbsp;{{getRecordTime()}}</span>\n        </ion-col>\n        <ion-col text-end align-self-center no-padding>\n          <button ion-button small [hidden]="recordingInProgress" (click)="startRecording()" color="secondary">\n            record\n          </button>\n          <button ion-button small [hidden]="recordingInProgress" (click)="closeRecording()">\n            close\n          </button>\n          <button ion-button small [hidden]="!recordingInProgress" (click)="stopRecording()">\n            send\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ng-container>\n</ion-footer>\n\n<div class="file-uploader-progress" *ngIf="progressPercent > 0">\n  <div class="progress-outer">\n    <div class="progress-inner" [style.width]="progressPercent + \'%\'">\n      {{progressPercent}}%\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_network__["a" /* Network */]])
    ], ChatPage);
    return ChatPage;
    var ChatPage_1;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial_tutorial__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(31);
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
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/welcome/welcome.html"*/'<ion-content>\n    <div class="flex-center">\n        <img src="assets/img/logo-menu.png" class="menu-logo"/>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/welcome/welcome.html"*/,
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

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_keys_keys__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(836);
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
                __WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__pipes_keys_keys__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-search',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__case_status_modal_case_status_modal__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
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
    function CaseStatusPage(navCtrl, offliceList, events, connection, modalCtrl) {
        this.navCtrl = navCtrl;
        this.offliceList = offliceList;
        this.events = events;
        this.connection = connection;
        this.modalCtrl = modalCtrl;
        this.title = 'loading';
        this.status = {
            'All': { label: 'All', color: 'danger' },
            'In Process': { label: 'In Process', color: 'danger' },
            'Job Delivered': { label: 'Reay To Deliver', color: 'danger' },
            'Job Dispatched': { label: 'Dispatched', color: 'secondary' }
        };
        this.selectedOffice = {};
        this.selectedTab = 'All';
        this.page = 0;
        this.items = [];
        this.itemsSearchCopy = [];
        this.searchText = '';
        this.showSearchBar = true;
        this.loginType = 0;
        this.wasModalShown = false;
        this.loginType = this.connection.user.LoginTypeID;
    }
    CaseStatusPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5_underscore__["isEmpty"](this.selectedOffice)) {
            this.offliceList.getOffice('CaseStatus').then(function (selectedOffice) {
                _this.selectedOffice = selectedOffice;
                _this.setTitle();
                _this.wasModalShown = _this.offliceList.isMultiOffice();
                _this.initData().then(function (response) { }).catch(function (error) {
                    console.log(error);
                });
            }).catch(function (error) {
                _this.events.publish('toast:error', error);
                _this.navCtrl.popToRoot();
            });
        }
    };
    CaseStatusPage.prototype.initData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.doPost('CaseSearch/CaseSearchBy', {
                JobEntryNo: null,
                ReferenceEntryNo: null,
                Patient: null,
                BranchID: _this.selectedOffice.CustomerBranchID,
                DoctorID: 0,
                Status: "",
                DisablePaging: false,
                PageNumber: _this.page,
                RowsPerPage: 100,
                SortDetails: null,
                DateRange: null,
            }).then(function (response) {
                for (var i = 0; i < response.length; i++) {
                    _this.items.push(response[i]);
                    //making copy for search
                    _this.itemsSearchCopy.push(response[i]);
                }
                _this.page++;
                resolve(response.length);
            }).catch(function (error) {
                _this.page = -1;
                reject(error);
            });
        });
    };
    CaseStatusPage.prototype.segmentChanged = function (event) {
        this.selectedTab = event.value;
        this.setTitle();
        this.scrollToTop();
    };
    CaseStatusPage.prototype.setTitle = function () {
        this.title = 'Case Status: ' + this.status[this.selectedTab].label;
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
        this.initData().then(function (response) {
            paginator.complete();
        }).catch(function (error) {
            paginator.enable(false);
        });
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
    CaseStatusPage.prototype.openCase = function (item) {
        item.IsNew = 0;
        //only for Dispatched
        if (item.Status === 'Job Dispatched') {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__case_status_modal_case_status_modal__["a" /* CaseStatusModalPage */], item);
            modal.onDidDismiss(function (data) {
                item.IsNew = 0;
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
    CaseStatusPage.prototype.ionViewvCanLeave = function () {
        if (this.wasModalShown) {
            //to prevent next close
            this.wasModalShown = false;
            //empty data to show
            this.items = [];
            this.page = 0;
            this.selectedTab = 'All';
            this.searchText = '';
            this.ionViewDidEnter();
            return false;
        }
        else {
            return true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], CaseStatusPage.prototype, "content", void 0);
    CaseStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-case-status',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/case-status/case-status.html"*/'<ion-header no-border>\n    <header [title]="title" [buttons]="[{icon:\'search\'}]" (buttonClicked)="headerButtonClicked($event)"></header>\n    <div [hidden]="selectedOffice === {}" class="office">{{selectedOffice.CustomerName}}</div>\n    <ion-searchbar [hidden]="showSearchBar" [(ngModel)]="searchText" (ionInput)="getItems(searchText)" showCancelButton="true"\n        (ionCancel)="onCancel()">\n    </ion-searchbar>\n    <ion-segment padding mode="ios" [(ngModel)]="selectedTab" color="casestatus" (ionChange)="segmentChanged($event)">\n        <ion-segment-button value="In Process">\n            In Process\n        </ion-segment-button>\n        <ion-segment-button value="Job Delivered">\n            RTD\n        </ion-segment-button>\n        <ion-segment-button value="Job Dispatched">\n            Dispatched\n        </ion-segment-button>\n        <ion-segment-button value="All">\n            All\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n<ion-content padding>\n    <center-spinner [hidden]="items"></center-spinner>\n    <ion-list class="cases">\n        <ion-item *ngFor="let item of items" [hidden]="isHidden(item.Status)" (click)="openCase(item)">\n            <h2>\n                {{item.Patient}}\n                <ion-badge *ngIf="item.IsNew === 1 && item.Status === \'Job Dispatched\' && loginType === 1" color="primary">new </ion-badge>\n            </h2>\n\n            <p>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col>Doctor</ion-col>\n                        <ion-col ion-note>{{item.Doctor}}</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>Impression No</ion-col>\n                        <ion-col ion-note>{{item.ImpressionNo}}</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>Reference Entry No</ion-col>\n                        <ion-col ion-note>{{item.ReferenceEntryNo}}</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>Status</ion-col>\n                        <ion-col ion-note [ngClass]="getStatusColor(item.Status)">{{getStatusLabel(item.Status)}}</ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="item.Status == \'In Process\' && item.ProgressDetail">\n                        <ion-col>Progress Detail</ion-col>\n                        <ion-col ion-note [ngClass]="getStatusColor(item.Status)">{{item.ProgressDetail}}</ion-col>\n                    </ion-row>\n                </ion-grid>\n            </p>\n            <ion-icon [hidden]="item.Status !== \'Job Dispatched\'" name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n    </ion-list>\n\n    <ion-item-divider text-center color="light" *ngIf="page === -1">\n        Nothing more to show\n    </ion-item-divider>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/case-status/case-status.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__["a" /* OfficeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
    ], CaseStatusPage);
    return CaseStatusPage;
}());

//# sourceMappingURL=case-status.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connection_connection__ = __webpack_require__(30);
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
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/dashboard/dashboard.html"*/'<ion-header no-border>\n  <header title="Dashboard"></header>\n</ion-header>\n<ion-content no-padding>\n  <ion-refresher (ionRefresh)="initData($event)">\n    <ion-refresher-content pullingIcon="arrow-round-down" pullingText="Pull to refresh" refreshingSpinner="crescent" refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!-- Payment -->\n  <ion-list>\n    <ion-list-header class="list_header">\n      PAYMENT\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'cash\' item-left color="dashboardColor"></ion-icon>\n      OUTSTANDING AMOUNT\n      <ion-note item-right>\n        &#8377; {{roundUp(dashboardData.OutstandingAmount)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'cash\' item-left color="dashboardColor"></ion-icon>\n      UNBILLED AMOUNT\n      <ion-note item-right>\n        &#8377; {{roundUp(dashboardData.UnbilledAmount)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'cash\' item-left color="dashboardColor"></ion-icon>\n      LAST BILL AMOUNT\n      <ion-note item-right>\n        &#8377; {{roundUp(dashboardData.LastMonthBillAmount)}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n  <!-- Case -->\n  <ion-list>\n    <ion-list-header class="list_header">\n      CASE\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'document\' item-left color="dashboardColor"></ion-icon>\n      IN PROCESS\n      <ion-note item-right>\n        {{roundUp(dashboardData.InProgress)}}\n      </ion-note>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-icon name=\'jet\' item-left color="dashboardColor"></ion-icon>\n        IN TRANSIT\n      <ion-note item-right>\n       {{roundUp(dashboardData.InTransit)}}\n      </ion-note>\n    </ion-item> -->\n    <ion-item>\n      <ion-icon name=\'bus\' item-left color="dashboardColor"></ion-icon>\n      COMPLETED\n      <ion-note item-right>\n        {{roundUp(dashboardData.JobDelivered)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'document\' item-left color="dashboardColor"></ion-icon>\n      ALL CASES\n      <ion-note item-right>\n        {{roundUp(dashboardData.Allcases)}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n\n  <!-- QUERY -->\n  <ion-list>\n    <ion-list-header class="list_header">\n      QUERY\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'md-help-circle\' item-left color="dashboardColor"></ion-icon>\n      TODAY\'S QUERIES\n      <ion-note item-right>\n        {{roundUp(dashboardData.TodayQueries)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'md-help-circle\' item-left color="dashboardColor"></ion-icon>\n      PENDING QUERIES\n      <ion-note item-right>\n        {{roundUp(dashboardData.PendingQueries)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'md-help-circle\' item-left color="dashboardColor"></ion-icon>\n      RESOLVED QUERIES\n      <ion-note item-right>\n        {{roundUp(dashboardData.ClosedQueries)}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'md-help-circle\' item-left color="dashboardColor"></ion-icon>\n      ALL QUERIES\n      <ion-note item-right>\n        {{roundUp(dashboardData.AllQueries)}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n\n\n  <!-- REDO -->\n  <ion-list>\n    <ion-list-header class="list_header">\n      REDO\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'ios-redo\' item-left color="dashboardColor"></ion-icon>\n      IN LAST 12 MONTHS\n      <ion-note item-right>\n        {{roundUp(dashboardData.RedoP_12Months)}}%\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'ios-redo\' item-left color="dashboardColor"></ion-icon>\n      IN LAST 6 MONTHS\n      <ion-note item-right>\n        {{roundUp(dashboardData.RedoP_6Months)}}%\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'ios-redo\' item-left color="dashboardColor"></ion-icon>\n      IN LAST 3 MONTHS\n      <ion-note item-right>\n        {{roundUp(dashboardData.RedoP_3Months)}}%\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'ios-redo\' item-left color="dashboardColor"></ion-icon>\n      IN LAST 30 DAYS\n      <ion-note item-right>\n        {{roundUp(dashboardData.RedoP_30Days)}}%\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/dashboard/dashboard.html"*/,
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

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
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
    function CommunicationPage(navCtrl, offliceList, events, connection, platform) {
        this.navCtrl = navCtrl;
        this.offliceList = offliceList;
        this.events = events;
        this.connection = connection;
        this.platform = platform;
        this.title = 'loading';
        this.titles = ['Today', 'Pending', 'All'];
        this.status = {
            'Resolved': { label: 'Resolved', color: 'secondary' },
            'Pending': { label: 'Pending', color: 'danger' },
        };
        this.selectedOffice = {};
        this.selectedTab = 'All';
        this.page = 0;
        this.items = [];
        this.itemsTicketNo = [];
        this.itemsSearchCopy = [];
        this.searchText = '';
        this.showSearchBar = true;
        this.wasModalShown = false;
        this.openingChat = false;
        this.newChatEventRefs = {};
        this.newQueryEventRefs = {};
    }
    CommunicationPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5_underscore__["isEmpty"](this.selectedOffice)) {
            this.offliceList.getOffice('Communication').then(function (selectedOffice) {
                _this.selectedOffice = selectedOffice;
                console.log(_this.selectedOffice);
                _this.setTitle();
                _this.wasModalShown = _this.offliceList.isMultiOffice();
                _this.initData().then(function (response) { }).catch(function (error) {
                });
            }).catch(function (error) {
                console.log(error);
                _this.events.publish('toast:error', error);
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
    CommunicationPage.prototype.initData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.doPost('Communication/GetAllQueries', {
                BranchID: _this.selectedOffice.CustomerBranchID,
                DoctorID: 0,
                DisablePaging: false,
                PageNumber: _this.page,
                RowsPerPage: 100,
            }).then(function (response) {
                for (var i = 0; i < response.length; i++) {
                    _this.items.push(response[i]);
                    _this.itemsTicketNo.push(response[i].TicketNo);
                    //making copy for search
                    _this.itemsSearchCopy.push(response[i]);
                    //listening to count event
                    _this.listenToFirebaseChatEvent(response[i]);
                }
                _this.page++;
                //checking if already searched
                // this.getItems();
                resolve();
            }).catch(function (error) {
                _this.page = -1;
                reject(error);
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
        this.title = 'Queries: ' + this.selectedTab;
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
        if (this.items && typeof this.items[index] !== 'undefined') {
            this.items[index].UnreadCount = 0;
        }
        item.UnreadCount = 0;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */], item.TicketNo);
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
        var ticketNo = item.TicketNo;
        var path = 'NewChatEvent/' + ticketNo + '/' + this.connection.user.id;
        if (!(path in this.newChatEventRefs)) {
            var itemRef_1 = __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref(path);
            this.newChatEventRefs[path] = itemRef_1;
            //removing existing as we just got it from server
            itemRef_1.remove();
            //now listening to new
            itemRef_1.on('child_added', function (snapshot) {
                var count = snapshot.val();
                item.UnreadCount += count;
                itemRef_1.remove();
            });
        }
    };
    CommunicationPage.prototype.listenToFirebaseQueryEvent = function () {
        var _this = this;
        var path = 'NewQueryEvent/' + this.selectedOffice.CustomerBranchID + '/' + this.connection.user.id;
        //checking if not already listening
        if (!(path in this.newQueryEventRefs)) {
            var queryRef_1 = __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref(path);
            this.newQueryEventRefs[path] = queryRef_1;
            queryRef_1.on('child_added', function (snapshot) {
                var item = snapshot.val();
                if (typeof item.QueryStatus === 'undefined') {
                    item.QueryStatus = 'Pending';
                }
                //checking if already exist
                if (_this.itemsTicketNo.indexOf(item.TicketNo) === -1) {
                    _this.items.unshift(item);
                    _this.itemsTicketNo.push(item.TicketNo);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], CommunicationPage.prototype, "content", void 0);
    CommunicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-communication',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/communication/communication.html"*/'<ion-header no-border>\n  <header [title]="title" [buttons]="[{icon:\'search\'}]" (buttonClicked)="headerButtonClicked($event)"></header>\n  <div [hidden]="selectedOffice === {}" class="office">{{selectedOffice.CustomerName}}</div>\n  <ion-searchbar [hidden]="showSearchBar" [(ngModel)]="searchText" (ionInput)="getItems()" showCancelButton="true" (ionCancel)="onCancel()">\n  </ion-searchbar>\n  <ion-segment padding mode="ios" [(ngModel)]="selectedTab" color="communication" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="Today">\n      Today\n    </ion-segment-button>\n    <ion-segment-button value="Pending">\n      Pending\n    </ion-segment-button>\n    <ion-segment-button value="All">\n      All\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content padding>\n  <center-spinner [hidden]="items"></center-spinner>\n  <ion-list class="communications-list">\n    <ion-item *ngFor="let item of items;trackBy:item?.TicketNo; let i=index;" detail-push [hidden]="isHidden(item)" (click)="item.UnreadCount=0;openChat(item, i)">\n      <h2>\n        {{item.Patient}}\n        <ion-badge *ngIf="item.UnreadCount" color="primary">{{item.UnreadCount}} </ion-badge>\n      </h2>\n      <p>\n        <ion-grid>\n          <ion-row>\n            <ion-col>Doctor</ion-col>\n            <ion-col ion-note>{{item.Doctor}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Impression No</ion-col>\n            <ion-col ion-note>{{item.ImpressionNo}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Reference Entry No</ion-col>\n            <ion-col ion-note>{{item.ReferenceEntryNo}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Status</ion-col>\n            <ion-col ion-note [ngClass]="getStatusColor(item.QueryStatus)">{{getStatusLabel(item.QueryStatus)}}</ion-col>\n          </ion-row>\n        </ion-grid>\n      </p>\n      <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-item-divider text-center color="light" *ngIf="page === -1">\n    Nothing more to show\n  </ion-item-divider>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/communication/communication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__["a" /* OfficeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */]])
    ], CommunicationPage);
    return CommunicationPage;
}());

//# sourceMappingURL=communication.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timeSlots__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(97);
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
    function PickupPage(navCtrl, offliceList, events, connection, network) {
        this.navCtrl = navCtrl;
        this.offliceList = offliceList;
        this.events = events;
        this.connection = connection;
        this.network = network;
        this.title = 'loading';
        this.titles = ['Today', 'Tomorrow'];
        this.selectedOffice = {};
        this.selectedTab = '0';
        this.timeDifference = 45;
        this.disablePickupButton = true;
        this.serverDate = null;
    }
    PickupPage.prototype.ionViewCanEnter = function () {
        if (this.network.type === 'none') {
            this.events.publish('toast:error', 'Pickup not available Offline');
        }
        return this.network.type !== 'none';
    };
    PickupPage.prototype.ionViewDidLoad = function () {
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
            _this.serverHour = __WEBPACK_IMPORTED_MODULE_4_moment__(response, 'MM/DD/YYYY hh:mm:ss A').format("k");
            _this.serverMinutes = __WEBPACK_IMPORTED_MODULE_4_moment__(response, 'MM/DD/YYYY hh:mm:ss A').format("m");
            _this.serverTime = parseInt(_this.serverHour) * 60 + parseInt(_this.serverMinutes);
            _this.serverDate = __WEBPACK_IMPORTED_MODULE_4_moment__(response, 'MM/DD/YYYY hh:mm:ss A');
            _this.timeSlot = __WEBPACK_IMPORTED_MODULE_6__timeSlots__["a" /* TimeSlots */];
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
        this.title = 'Pickup: ' + this.titles[parseInt(this.selectedTab)];
    };
    PickupPage.prototype.segmentChanged = function (event) {
        this.selectedTab = event.value;
        this.setTitle();
        this.resetTime();
    };
    PickupPage.prototype.isDisabled = function (time) {
        //checking if tab is not sunday
        if (this.serverDate.day() === 0) {
            this.titles[0] = 'Monday';
            this.titles[1] = 'Tuesday';
            return false; // all available
        }
        if (this.serverDate.day() === 6) {
            this.titles[1] = 'Monday';
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
        var pickupTime = __WEBPACK_IMPORTED_MODULE_4_moment__().utc().set({ 'hour': this.time, 'minute': 0, 'second': 0, 'millisecond': 0 }).toISOString();
        var day = this.selectedTab === '0' ? "TODAY" : "TOMORROW";
        var hour = this.time;
        this.connection.doPost('Pickup/Insert_PP_TPickUP', {
            PickUPDatetime: pickupTime,
            Day: day,
            Hours: hour,
            PickupTime: pickupTime,
            CreatedByID: this.connection.user.CustomerPortalID,
        }).then(function () {
            _this.events.publish('alert:basic', 'Request Sent!', 'Your request has been received. You will get confirmation once accepted along with pickup person contact detail.');
            //Increment count
            _this.increaseCount('PickUpCount');
            _this.increaseCount('Total');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
        }).catch(function (error) { });
        this.time = null;
        this.disablePickupButton = true;
    };
    /**
     * This will increase badge count if pick set
     */
    PickupPage.prototype.increaseCount = function (path) {
        var ref = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('Badge/' + this.connection.user.id + '/' + path);
        ref.transaction(function (count) {
            count = count || 0;
            return count + 1;
        });
    };
    PickupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pickup',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/pickup/pickup.html"*/'<ion-header no-border>\n    <header [title]="title"></header>\n    <div [hidden]="selectedOffice === {}" class="office">{{selectedOffice.CustomerName}}</div>\n    <ion-segment padding mode="ios" [(ngModel)]="selectedTab" color="pickup" (ionChange)="segmentChanged($event)">\n        <ion-segment-button value="0">\n            {{titles[0]}}\n        </ion-segment-button>\n        <ion-segment-button value="1">\n            {{titles[1]}}\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n<ion-content padding>\n    <center-spinner [hidden]="timeSlot"></center-spinner>\n    <ng-container *ngIf="timeSlot">\n        <ion-list radio-group [(ngModel)]="time" (ngModelChange)="selectTime()">\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-6>\n                        <table style="width: 100%">\n                            <tr style="color:gray">\n                                <th class="th_position">\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col col-6>\n                                                <ion-icon name="sunny" text-right></ion-icon>\n                                            </ion-col>\n                                            <ion-col col-6>\n                                                MORNING\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </th>\n                            </tr>\n                            <tr *ngFor="let item of timeSlot.morningSlot" style=" color:#D5232F">\n                                <th class="th_position">\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col col-6>\n                                                <ion-radio [disabled]="isDisabled(item)" value={{item.time}}></ion-radio>\n                                            </ion-col>\n                                            <ion-col col-6>\n                                                <span *ngIf="item.active" class="time-color">{{item.displaytime}}</span>\n                                                <span *ngIf="!item.active">{{item.displaytime}}</span>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </th>\n                            </tr>\n                        </table>\n                    </ion-col>\n                    <ion-col col-6>\n                        <table style="width: 100%">\n                            <tr style=" color:gray">\n                                <th class="th_position">\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col col-6>\n                                                <ion-icon name="partly-sunny" text-right></ion-icon>\n                                            </ion-col>\n                                            <ion-col col-6>\n                                                EVENING\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </th>\n                            </tr>\n                            <tr *ngFor="let item of timeSlot.eveningSlot" style="color:#D5232F">\n                                <th class="th_position">\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col col-6>\n                                                <ion-radio [disabled]="isDisabled(item)" value="{{item.time}}"></ion-radio>\n                                            </ion-col>\n                                            <ion-col col-6>\n                                                <span *ngIf="item.active" class="time-color">{{item.displaytime}}</span>\n                                                <span *ngIf="!item.active">{{item.displaytime}}</span>\n                                            </ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </th>\n                            </tr>\n                        </table>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-list>\n        <ion-grid>\n            <ion-row text-center>\n                <ion-col>\n                    <button ion-button full [disabled]="disablePickupButton" (click)="confirm()"> CONFIRM </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ng-container>\n    <ion-fab right bottom>\n        <call-fab></call-fab>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/pickup/pickup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_office_service_office_service__["a" /* OfficeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */]])
    ], PickupPage);
    return PickupPage;
}());

//# sourceMappingURL=pickup.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connection_connection__ = __webpack_require__(30);
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
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/forgot-password/forgot-password.html"*/'<ion-content class="login">\n    <ion-grid class="slide_header">\n\n        <logo></logo>\n        <ion-row>\n            <div id="login-box">\n                <div class="info-box">\n                    <h2 text-center>Forgot Password</h2>\n                    <p text-center text-small>\n                        Enter your Login Name, your password will be sent to registered Mobile Number associated with your Login Name\n                    </p>\n                </div>\n                <form (submit)="doForgotPassword()">\n                    <ion-list>\n                        <ion-item>\n                            <ion-label ion-text color="primary" floating>Login Name</ion-label>\n                            <ion-input autofocus required [(ngModel)]="ForgotPassword.login_name" #login_name="ngModel" type="text" placeholder="Login Name"\n                                name="login_name"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                    <button ion-button block type="submit" [disabled]="!ForgotPassword.login_name">Continue</button>\n                    <button ion-button block type="button" (click)="goBack()">Back</button>\n                </form>\n            </div>\n        </ion-row>\n\n        <or></or>\n        <reach-us></reach-us>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/forgot-password/forgot-password.html"*/,
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

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(136);
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
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/tutorial/tutorial.html"*/'<ion-header no-border class="intro">\n    <ion-navbar no-border-bottom>\n        <ion-buttons end *ngIf="showSkip">\n            <button ion-button (click)="startApp()" ion-text color="white">Skip</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-slides pager="true" (ionWillChange)="onSlideChangeStart($event)">\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_1.png" class="slide-image" />\n            </div>\n            <h2 class="slide-title">Some fancy text</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua</p>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_2.png" class="slide-image" />\n            </div>\n            <h2 class="slide-title">Some Fancy Text</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua</p>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_3.png" class="slide-image" />\n            </div>\n            <h2 class="slide-title">Some Fancy Text</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua</p>\n        </ion-slide>\n\n        <ion-slide>\n            <div class="slide_header">\n                <img src="assets/img/screen_4.png" class="slide-image" />\n            </div>\n            <h2 class="slide-title">Some Fancy Text</h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n                magna aliqua</p>\n            <button ion-button ion-text color="primary" (click)="startApp()">\n                Let\'s Start\n            </button>\n        </ion-slide>\n\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/tutorial/tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(46);
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
    function LogoutPage(navCtrl, navParams, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
    }
    LogoutPage.prototype.ionViewDidLoad = function () {
        this.user.logout().then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
    LogoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-logout',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/logout/logout.html"*/'<ion-content>\n    <div class="flex-center">\n        <img src="assets/img/logo-menu.png" class="menu-logo" />\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/logout/logout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], LogoutPage);
    return LogoutPage;
}());

//# sourceMappingURL=logout.js.map

/***/ }),

/***/ 256:
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
webpackEmptyAsyncContext.id = 256;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__empty_empty__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reach_us_reach_us__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__center_spinner_center_spinner__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__refresh_refresh__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logo_logo__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__or_or__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__progress_bar_progress_bar__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__call_fab_call_fab__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_bubble_chat_bubble__ = __webpack_require__(813);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_audio__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_image_loader__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__ = __webpack_require__(507);
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
                __WEBPACK_IMPORTED_MODULE_14_ionic_image_loader__["a" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_13_ionic_audio__["b" /* IonicAudioModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic_img_viewer__["a" /* IonicImageViewerModule */],
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
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__ = __webpack_require__(438);
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
    function ConnectionProvider(http, storage, events, network, platform, device) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.network = network;
        this.platform = platform;
        this.device = device;
        this.user = {};
        this.events.subscribe('user:changed', function (user) {
            _this.storage.get('User').then(function (user) {
                _this.user = user;
                _this.events.publish('user:ready', user);
            });
        });
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
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
                reject('Please check your network connection');
                return;
            }
            //if need to show loader
            if (loader) {
                if (loader === true) {
                    loader = 'loading';
                }
                _this.events.publish('loading:create', loader);
            }
            //creating request
            var urlSearchParams = _this.getURLSearchParams(params);
            _this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Global */].SERVER_URL + url, urlSearchParams).timeout(60000).map(function (response) { return response.json(); }).subscribe(function (data) {
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
                console.log(error);
                //checking for timeout
                if (typeof error === 'object' && ('name' in error) && error.name === 'TimeoutError') {
                    error = error.message;
                }
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
        urlSearchParams.append('Device', this.device.platform);
        urlSearchParams.append('OSVersion', this.device.version);
        urlSearchParams.append('Manufacturer', this.device.manufacturer);
        urlSearchParams.append('AppVersion', __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Global */].AppVersion);
        //adding user info
        if (this.user) {
            urlSearchParams = this.addUserInfo(urlSearchParams);
        }
        return urlSearchParams;
    };
    ConnectionProvider.prototype.doGet = function (url, data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Global */].SERVER_URL + url).map(function (response) { return response.json(); });
    };
    ConnectionProvider.prototype.addUserInfo = function (urlSearchParams) {
        urlSearchParams.append('UserCode', this.user.UserCode);
        urlSearchParams.append('CustomerID', this.user.CustomerID);
        urlSearchParams.append('SecureToken', this.user.SecureToken);
        urlSearchParams.append('OrganizationUnitID', this.user.LoginOUID);
        urlSearchParams.append('LoginTypeID', this.user.LoginTypeID);
        urlSearchParams.append('LoginUserID', this.user.CustomerPortalID);
        return urlSearchParams;
    };
    ConnectionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_device__["a" /* Device */]])
    ], ConnectionProvider);
    return ConnectionProvider;
}());

//# sourceMappingURL=connection.js.map

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		301
	],
	"../pages/account/account.module": [
		591
	],
	"../pages/case-status/case-status-modal/case-status-modal.module": [
		588
	],
	"../pages/case-status/case-status.module": [
		593
	],
	"../pages/chat/chat.module": [
		595
	],
	"../pages/communication/communication.module": [
		610
	],
	"../pages/contact-us/contact-us.module": [
		592
	],
	"../pages/dashboard/dashboard.module": [
		594
	],
	"../pages/edit-profile/edit-profile.module": [
		1107,
		0
	],
	"../pages/forgot-password/forgot-password.module": [
		614
	],
	"../pages/help/help.module": [
		611
	],
	"../pages/home/home.module": [
		613
	],
	"../pages/login/login.module": [
		616
	],
	"../pages/logout/logout.module": [
		1108,
		1
	],
	"../pages/office-list/office-list.module": [
		617
	],
	"../pages/offline/offline.module": [
		618
	],
	"../pages/pickup/pickup.module": [
		620
	],
	"../pages/register/register.module": [
		624
	],
	"../pages/search/search.module": [
		622
	],
	"../pages/tutorial/tutorial.module": [
		621
	],
	"../pages/welcome/welcome.module": [
		623
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
webpackAsyncContext.id = 300;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
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

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-about',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/about/about.html"*/'<ion-header no-border>\n    <header title="About Dental Illusion"></header>\n</ion-header>\n<ion-content padding>\n    <h2>Mission statement</h2>\n    <p>\n        Our mission at Illusion Dental Laboratory is to provide only the highest quality dental restorations delivered in a timely\n        fashion with attentive customer service. We strive to provide the perfect blend of technical expertise, personal\n        service and dependable results. We strongly believe in relationships based on communication and feedback.We take\n        pride in using only the best restorative systems be it Bruxzir, Lava, Zirconia, Tilite, PFM, All-Ceramic, Implants\n        or Temporaries.\n    </p>\n    <h2>Expert Techs</h2>\n    <p>\n        As a customer, you have the peace of mind of knowing that your technicians are provided every means necessary to fabricate\n        superior restorations.We provide various kits to suit your dental Laboratory needs.From ﬁt to ﬁnish, we endeavor\n        to produce only the ﬁnest quality products. They’re guaranteed to raise a smile!\n    </p>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
var Global = {
    APP_NAME: 'Illusion Dental',
    tutorial: true,
    color: { primary: 'D5232F' },
    AppVersion: '0.0.12',
    support: {
        landline: '+91-22-61366301',
        mobile: '+91-8879522544',
        email: 'labtech@illusiondentallab.com',
        address: '402, Akruti Arcade J. P. Road,Opp. A. H. Wadia School, Near Andheri Sport Complex, Andheri (W), Mumbai- 400053.',
    },
    OneSignal: {
        key: '4e6dcad0-792d-4897-b4cb-1a7a40540d14',
        android: '7402421237',
    },
    Push: {
        OneSignal: false,
        FCM: true,
    },
    Rate: {
        show: false,
        ios: '',
        android: ''
    },
    APP_URL: {
        android: 'https://play.google.com/store/apps/details?id=com.com.illusiondental.app',
        ios: 'https://itunes.apple.com/us/app/illusion-dental/id1307823684?mt=8'
    },
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

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_connection_connection__ = __webpack_require__(30);
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
            selector: 'page-contact-us',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/contact-us/contact-us.html"*/'<ion-header>\n  <ion-toolbar ion-text color="primary">\n    <ion-title>\n      Contact Us\n    </ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n        close\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="login">\n  <ion-grid class="slide_header">\n\n    <ion-row>\n      <div id="login-box">\n        <form [formGroup]="contactForm" (ngSubmit)="saveContactUs()">\n          <ion-list>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Full Name</ion-label>\n              <ion-input formControlName="full_name" required [(ngModel)]="contact.full_name" name="full_name" type="text" placeholder="Full Name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Mobile Number</ion-label>\n              <ion-input formControlName="mobile_number" required [(ngModel)]="contact.mobile_number" name="mobile_number" type="tel" placeholder="Mobile Number"\n                name="mobile_number"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Email Address</ion-label>\n              <ion-input formControlName="email_address" [(ngModel)]="contact.email_address" name="email_address" type="email" placeholder="Email Address"\n                name="email_address"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Message</ion-label>\n              <ion-input formControlName="message" required [(ngModel)]="contact.message" name="message" type="text" placeholder="Message"\n                name="message"></ion-input>\n            </ion-item>\n          </ion-list>\n          <button ion-button color="button" type="submit" color="button" [disabled]="!contactForm.valid" ion-button block>Send</button>\n        </form>\n      </div>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/contact-us/contact-us.html"*/,
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

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(67);
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
    function OfficeListPage(navCtrl, navParams, viewCtrl, storage, platform, angularFireDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.platform = platform;
        this.angularFireDatabase = angularFireDatabase;
        this.searchText = "";
        this.modelFlagName = "";
        this.path = '';
        this.modelFlagName = this.navParams.data.modelFlagName;
    }
    OfficeListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('User').then(function (User) {
            if (User) {
                _this.path = 'OfficeList/' + User.id;
                _this.officeList = _this.angularFireDatabase.list(_this.path).valueChanges();
                _this.officeListCopy = _this.officeList;
            }
        });
    };
    OfficeListPage.prototype.dismiss = function (selectedOffice) {
        this.viewCtrl.dismiss(selectedOffice);
    };
    OfficeListPage.prototype.selectOffice = function (office) {
        this.dismiss(office);
    };
    OfficeListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-office-list',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/office-list/office-list.html"*/'<ion-header>\n  <ion-toolbar ion-text color="primary">\n    <ion-title>\n      Select Office\n    </ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n        close\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar [(ngModel)]="searchText" [showCancelButton]="shouldShowCancel">\n  </ion-searchbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item class="list_wrap" *ngFor="let item of officeList | async | filter:\'CustomerName\':searchText" (click)="selectOffice(item)">\n      {{item.CustomerName}}\n      <ion-badge item-end color="secondary" *ngIf="modelFlagName === \'CaseStatus\' && item.CaseSearch_BranchCount">{{item.CaseSearch_BranchCount}}</ion-badge>\n      <ion-badge item-end color="secondary" *ngIf="modelFlagName === \'Communication\' && item.Communication_BranchCount">{{item.Communication_BranchCount}}</ion-badge>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/office-list/office-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], OfficeListPage);
    return OfficeListPage;
}());

//# sourceMappingURL=office-list.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connection_connection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__office_service_office_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_badge__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(67);
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
    function UserProvider(events, storage, connection, platform, alertCtrl, officeList, oneSignal, badge, angularFireDatabase, fcm) {
        var _this = this;
        this.events = events;
        this.storage = storage;
        this.connection = connection;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.officeList = officeList;
        this.oneSignal = oneSignal;
        this.badge = badge;
        this.angularFireDatabase = angularFireDatabase;
        this.fcm = fcm;
        this._user = {};
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.HAS_LOGGED_IN = false;
        this.global = {};
        this.global = __WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Global */];
        this.events.subscribe('user:changed', function (user) {
            _this.storage.get('User').then(function (user) {
                _this._user = user;
            });
        });
    }
    UserProvider.prototype.login = function (username, password) {
        var _this = this;
        this.connection.doPost('Account/login', { UserCode: username, Password: password }, 'Logging you in!').then(function (response) {
            _this._user = response;
            _this.setUser(_this._user).then(function () {
                _this.HAS_LOGGED_IN = true;
                _this.events.publish('user:login', _this._user);
            });
        }).catch(function (error) {
            _this.events.publish('alert:basic', 'Login Failed!', error);
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
                    //deregister push
                    if (__WEBPACK_IMPORTED_MODULE_6__app_global__["a" /* Global */].Push.OneSignal) {
                        //one signal deregister
                        _this.oneSignal.setSubscription(false);
                    }
                    //clear badge
                    _this.badge.clear();
                    //Removing Offline Data
                    _this.storage.remove('OfflineDashboard');
                    _this.events.publish('user:logout', 'Bye Bye ' + name + '. See you soon!');
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
            if (!__WEBPACK_IMPORTED_MODULE_7_underscore__["isEmpty"](_this.connection.user)) {
                _this.connection.doPost('Account/RegisterDevice', {
                    DeviceID: push_id,
                    IsLogin: push_id !== '',
                }, false).then(function (response) {
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            }
            else {
                //waiting to logged in
                _this.events.subscribe('user:ready', function (user) {
                    if (user) {
                        _this.registerPushID(push_id);
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
                    message: 'There is a version update please update your application',
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
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__office_service_office_service__["a" /* OfficeServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_badge__["a" /* Badge */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_fcm__["a" /* FCM */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStatusModalPageModule", function() { return CaseStatusModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__case_status_modal__ = __webpack_require__(589);
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
            ],
        })
    ], CaseStatusModalPageModule);
    return CaseStatusModalPageModule;
}());

//# sourceMappingURL=case-status-modal.module.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseStatusModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(590);
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
    CaseStatusModalPage.prototype.ionViewDidLoad = function () {
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
            selector: 'page-case-status-modal',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/case-status/case-status-modal/case-status-modal.html"*/'<ion-header>\n  <ion-toolbar ion-text color="casestatus">\n    <ion-title>{{title}}</ion-title>\n    <ion-buttons end>\n      <button color="light" ion-button outline (click)="dismiss(null)">\n        close\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        <ion-icon name="ios-medical" item-start></ion-icon>\n        Patient\n        <ion-note item-end>{{item.Patient}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-calendar" item-start></ion-icon>\n        Dispatch Date\n        <ion-note item-end>{{item.formatedDispatchDate}}</ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="ios-bus" item-start></ion-icon>\n        Delivery Mode\n        <ion-note item-end>{{item.JobDeliveryMode}}</ion-note>\n      </ion-item>\n      <ion-item-group *ngIf="item.JobDeliveryMode === \'Delivery Person\'">\n        <ion-item-divider *ngIf="item.JobDeliveryMode === \'Delivery Person\'" color="light">\n          {{item.JobDeliveryMode}} Details\n        </ion-item-divider>\n        <ion-item>\n          <ion-icon name="ios-person" item-start></ion-icon>\n          Person Name\n          <ion-note item-end>{{item.DeliveryBoyEmployee}}</ion-note>\n        </ion-item>\n        <ion-item (click)="callNumber(item.MobileNo)">\n          <ion-icon name="ios-call" item-start></ion-icon>\n          Mobile Number\n          <ion-note item-end>{{item.MobileNo}}</ion-note>\n        </ion-item>\n      </ion-item-group>\n      <ion-item-group *ngIf="item.JobDeliveryMode == \'Courier\'">\n        <ion-item-divider *ngIf="item.JobDeliveryMode == \'Courier\'" color="light">\n          {{item.JobDeliveryMode}} Details\n        </ion-item-divider>\n        <ion-item>\n          <ion-icon name="ios-document" item-start></ion-icon>\n          Courier\n          <ion-note item-end>{{item.Courier}}</ion-note>\n        </ion-item>\n        <ion-item (click)="openURL(item.TrackingURL)">\n          <ion-icon name="logo-steam" item-start></ion-icon>\n          Tracking No\n          <ion-note item-end>{{item.TrackingNo}}</ion-note>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/case-status/case-status-modal/case-status-modal.html"*/,
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

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(141);
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

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function() { return ContactUsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_us__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
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

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStatusPageModule", function() { return CaseStatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__case_status__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
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
            ]
        })
    ], CaseStatusPageModule);
    return CaseStatusPageModule;
}());

//# sourceMappingURL=case-status.module.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
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

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives_module__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_elastic__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_elastic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_elastic__);
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
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationPageModule", function() { return CommunicationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communication__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
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
            ],
        })
    ], CommunicationPageModule);
    return CommunicationPageModule;
}());

//# sourceMappingURL=communication.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
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

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(31);
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
            selector: 'page-help',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/help/help.html"*/'<ion-header no-border>\n    <header title="Help Dental Illusion"></header>\n</ion-header>\n<ion-content padding>\n    <p>\n        App version: {{global.AppVersion}}\n    </p>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
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

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
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

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_connection_connection__ = __webpack_require__(30);
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
            selector: 'page-register',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/register/register.html"*/'<ion-content class="login">\n  <ion-grid class="slide_header">\n\n    <ion-row>\n      <img class="logo" src="assets/img/logo.png">\n    </ion-row>\n    <ion-row>\n      <div id="login-box">\n        <form [formGroup]="registerForm" (ngSubmit)="doRegister()">\n          <ion-list>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Full Name</ion-label>\n              <ion-input formControlName="full_name" required [(ngModel)]="register.full_name" name="full_name" type="text" placeholder="Full Name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Mobile Number</ion-label>\n              <ion-input formControlName="contact_number" required [(ngModel)]="register.contact_number" name="contact_number" type="tel"\n                placeholder="Mobile Number" name="contact_number"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Email Address</ion-label>\n              <ion-input formControlName="email_address" [(ngModel)]="register.email_address" name="email_address" type="email" placeholder="Email Address"\n                name="email_address"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Password</ion-label>\n              <ion-input formControlName="password" required [(ngModel)]="register.password" name="password" type="password" placeholder="Password"\n                name="password"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label ion-text color="primary" floating>Confirm Password</ion-label>\n              <ion-input formControlName="confirm_password" required [(ngModel)]="register.confirm_password" name="confirm_password" type="password"\n                placeholder="Confirm Password" name="confirm_password"></ion-input>\n            </ion-item>\n          </ion-list>\n          <button type="submit" [disabled]="!registerForm.valid" ion-button block>Register</button>\n        </form>\n      </div>\n    </ion-row>\n\n    <img src="assets/img/or.png" />\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/register/register.html"*/,
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

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
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

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfficeListPageModule", function() { return OfficeListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__office_list__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(141);
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

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflinePageModule", function() { return OfflinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offline__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
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

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome__ = __webpack_require__(136);
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
            selector: 'page-offline',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/offline/offline.html"*/'<ion-content>\n        <ion-refresher (ionRefresh)="checkForInternet($event)">\n                <ion-refresher-content pullingIcon="arrow-round-down" pullingText="Pull to refresh" refreshingSpinner="crescent" refreshingText="checking connectivity...">\n                </ion-refresher-content>\n            </ion-refresher>\n  <ion-grid class="slide_header">\n      <ion-row>\n          <ion-col text-center class="content">\n              <ion-icon name="ios-wifi-outline" ion-text color="primary"></ion-icon>\n              <p padding-horizontal>Kindly connect to Internet to experience wonder of the App</p>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/offline/offline.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
    ], OfflinePage);
    return OfflinePage;
}());

//# sourceMappingURL=offline.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickupPageModule", function() { return PickupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickup__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_moment__ = __webpack_require__(109);
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

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(221);
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

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(171);
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

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(136);
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

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(615);
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

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(674);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_sqlite__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_location_accuracy__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_email_composer__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_badge__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_transfer__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_media_capture__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_media__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_vibration__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_opener__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_fcm__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ionic_image_loader__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_component__ = __webpack_require__(1102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_about_about_module__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_account_account_module__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_case_status_case_status_module__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_case_status_case_status_modal_case_status_modal_module__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_chat_chat_module__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_communication_communication_module__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_contact_us_contact_us_module__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_dashboard_dashboard_module__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_forgot_password_forgot_password_module__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_help_help_module__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_home_home_module__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_login_login_module__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_office_list_office_list_module__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_offline_offline_module__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_pickup_pickup_module__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_register_register_module__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_search_search_module__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_tutorial_tutorial_module__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_welcome_welcome_module__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_connection_connection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_user_user__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_office_service_office_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_firebase_transaction_firebase_transaction__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_angular2_moment__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_52_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ng_elastic__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_ng_elastic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53_ng_elastic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_angularfire2__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_angularfire2_auth__ = __webpack_require__(1104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_ionic_audio__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_ionic_img_viewer__ = __webpack_require__(507);
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */], {
                    mode: 'md',
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/case-status/case-status-modal/case-status-modal.module#CaseStatusModalPageModule', name: 'CaseStatusModalPage', segment: 'case-status-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/case-status/case-status.module#CaseStatusPageModule', name: 'CaseStatusPage', segment: 'case-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/communication/communication.module#CommunicationPageModule', name: 'CommunicationPage', segment: 'communication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/office-list/office-list.module#OfficeListPageModule', name: 'OfficeListPage', segment: 'office-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'LogoutPage', segment: 'logout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offline/offline.module#OfflinePageModule', name: 'OfflinePage', segment: 'offline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pickup/pickup.module#PickupPageModule', name: 'PickupPage', segment: 'pickup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__dental_illusion_db',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_27_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_54_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_55_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_56_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_57_ionic_audio__["b" /* IonicAudioModule */].forRoot(__WEBPACK_IMPORTED_MODULE_57_ionic_audio__["c" /* defaultAudioProviderFactory */]),
                __WEBPACK_IMPORTED_MODULE_58_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_29__pages_about_about_module__["AboutPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_account_account_module__["AccountPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_case_status_case_status_module__["CaseStatusPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_case_status_case_status_modal_case_status_modal_module__["CaseStatusModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_chat_chat_module__["ChatPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_communication_communication_module__["CommunicationPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_contact_us_contact_us_module__["ContactUsPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_forgot_password_forgot_password_module__["ForgotPasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_help_help_module__["HelpPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_office_list_office_list_module__["OfficeListPageModule"],
                __WEBPACK_IMPORTED_MODULE_42__pages_offline_offline_module__["OfflinePageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_pickup_pickup_module__["PickupPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_46__pages_tutorial_tutorial_module__["TutorialPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_welcome_welcome_module__["WelcomePageModule"],
                __WEBPACK_IMPORTED_MODULE_52_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_53_ng_elastic__["ElasticModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_48__providers_connection_connection__["a" /* ConnectionProvider */],
                __WEBPACK_IMPORTED_MODULE_49__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_office_service_office_service__["a" /* OfficeServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_51__providers_firebase_transaction_firebase_transaction__["a" /* FirebaseTransactionProvider */],
                __WEBPACK_IMPORTED_MODULE_55_angularfire2_database__["a" /* AngularFireDatabase */],
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
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_badge__["a" /* Badge */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_media_capture__["a" /* MediaCapture */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_51__providers_firebase_transaction_firebase_transaction__["a" /* FirebaseTransactionProvider */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 304,
	"./af.js": 304,
	"./ar": 305,
	"./ar-dz": 306,
	"./ar-dz.js": 306,
	"./ar-kw": 307,
	"./ar-kw.js": 307,
	"./ar-ly": 308,
	"./ar-ly.js": 308,
	"./ar-ma": 309,
	"./ar-ma.js": 309,
	"./ar-sa": 310,
	"./ar-sa.js": 310,
	"./ar-tn": 311,
	"./ar-tn.js": 311,
	"./ar.js": 305,
	"./az": 312,
	"./az.js": 312,
	"./be": 313,
	"./be.js": 313,
	"./bg": 314,
	"./bg.js": 314,
	"./bm": 315,
	"./bm.js": 315,
	"./bn": 316,
	"./bn.js": 316,
	"./bo": 317,
	"./bo.js": 317,
	"./br": 318,
	"./br.js": 318,
	"./bs": 319,
	"./bs.js": 319,
	"./ca": 320,
	"./ca.js": 320,
	"./cs": 321,
	"./cs.js": 321,
	"./cv": 322,
	"./cv.js": 322,
	"./cy": 323,
	"./cy.js": 323,
	"./da": 324,
	"./da.js": 324,
	"./de": 325,
	"./de-at": 326,
	"./de-at.js": 326,
	"./de-ch": 327,
	"./de-ch.js": 327,
	"./de.js": 325,
	"./dv": 328,
	"./dv.js": 328,
	"./el": 329,
	"./el.js": 329,
	"./en-au": 330,
	"./en-au.js": 330,
	"./en-ca": 331,
	"./en-ca.js": 331,
	"./en-gb": 332,
	"./en-gb.js": 332,
	"./en-ie": 333,
	"./en-ie.js": 333,
	"./en-nz": 334,
	"./en-nz.js": 334,
	"./eo": 335,
	"./eo.js": 335,
	"./es": 336,
	"./es-do": 337,
	"./es-do.js": 337,
	"./es-us": 338,
	"./es-us.js": 338,
	"./es.js": 336,
	"./et": 339,
	"./et.js": 339,
	"./eu": 340,
	"./eu.js": 340,
	"./fa": 341,
	"./fa.js": 341,
	"./fi": 342,
	"./fi.js": 342,
	"./fo": 343,
	"./fo.js": 343,
	"./fr": 344,
	"./fr-ca": 345,
	"./fr-ca.js": 345,
	"./fr-ch": 346,
	"./fr-ch.js": 346,
	"./fr.js": 344,
	"./fy": 347,
	"./fy.js": 347,
	"./gd": 348,
	"./gd.js": 348,
	"./gl": 349,
	"./gl.js": 349,
	"./gom-latn": 350,
	"./gom-latn.js": 350,
	"./gu": 351,
	"./gu.js": 351,
	"./he": 352,
	"./he.js": 352,
	"./hi": 353,
	"./hi.js": 353,
	"./hr": 354,
	"./hr.js": 354,
	"./hu": 355,
	"./hu.js": 355,
	"./hy-am": 356,
	"./hy-am.js": 356,
	"./id": 357,
	"./id.js": 357,
	"./is": 358,
	"./is.js": 358,
	"./it": 359,
	"./it.js": 359,
	"./ja": 360,
	"./ja.js": 360,
	"./jv": 361,
	"./jv.js": 361,
	"./ka": 362,
	"./ka.js": 362,
	"./kk": 363,
	"./kk.js": 363,
	"./km": 364,
	"./km.js": 364,
	"./kn": 365,
	"./kn.js": 365,
	"./ko": 366,
	"./ko.js": 366,
	"./ky": 367,
	"./ky.js": 367,
	"./lb": 368,
	"./lb.js": 368,
	"./lo": 369,
	"./lo.js": 369,
	"./lt": 370,
	"./lt.js": 370,
	"./lv": 371,
	"./lv.js": 371,
	"./me": 372,
	"./me.js": 372,
	"./mi": 373,
	"./mi.js": 373,
	"./mk": 374,
	"./mk.js": 374,
	"./ml": 375,
	"./ml.js": 375,
	"./mr": 376,
	"./mr.js": 376,
	"./ms": 377,
	"./ms-my": 378,
	"./ms-my.js": 378,
	"./ms.js": 377,
	"./my": 379,
	"./my.js": 379,
	"./nb": 380,
	"./nb.js": 380,
	"./ne": 381,
	"./ne.js": 381,
	"./nl": 382,
	"./nl-be": 383,
	"./nl-be.js": 383,
	"./nl.js": 382,
	"./nn": 384,
	"./nn.js": 384,
	"./pa-in": 385,
	"./pa-in.js": 385,
	"./pl": 386,
	"./pl.js": 386,
	"./pt": 387,
	"./pt-br": 388,
	"./pt-br.js": 388,
	"./pt.js": 387,
	"./ro": 389,
	"./ro.js": 389,
	"./ru": 390,
	"./ru.js": 390,
	"./sd": 391,
	"./sd.js": 391,
	"./se": 392,
	"./se.js": 392,
	"./si": 393,
	"./si.js": 393,
	"./sk": 394,
	"./sk.js": 394,
	"./sl": 395,
	"./sl.js": 395,
	"./sq": 396,
	"./sq.js": 396,
	"./sr": 397,
	"./sr-cyrl": 398,
	"./sr-cyrl.js": 398,
	"./sr.js": 397,
	"./ss": 399,
	"./ss.js": 399,
	"./sv": 400,
	"./sv.js": 400,
	"./sw": 401,
	"./sw.js": 401,
	"./ta": 402,
	"./ta.js": 402,
	"./te": 403,
	"./te.js": 403,
	"./tet": 404,
	"./tet.js": 404,
	"./th": 405,
	"./th.js": 405,
	"./tl-ph": 406,
	"./tl-ph.js": 406,
	"./tlh": 407,
	"./tlh.js": 407,
	"./tr": 408,
	"./tr.js": 408,
	"./tzl": 409,
	"./tzl.js": 409,
	"./tzm": 410,
	"./tzm-latn": 411,
	"./tzm-latn.js": 411,
	"./tzm.js": 410,
	"./uk": 412,
	"./uk.js": 412,
	"./ur": 413,
	"./ur.js": 413,
	"./uz": 414,
	"./uz-latn": 415,
	"./uz-latn.js": 415,
	"./uz.js": 414,
	"./vi": 416,
	"./vi.js": 416,
	"./x-pseudo": 417,
	"./x-pseudo.js": 417,
	"./yo": 418,
	"./yo.js": 418,
	"./zh-cn": 419,
	"./zh-cn.js": 419,
	"./zh-hk": 420,
	"./zh-hk.js": 420,
	"./zh-tw": 421,
	"./zh-tw.js": 421
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
webpackContext.id = 695;

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_search_search__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
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
            selector: 'empty',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/empty/empty.html"*/'<div text-center class="width-full">\n    <ion-row>\n        <ion-col>{{_text}}</ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <button ion-button color="primary" (click)="openSearch()">Search</button>\n        </ion-col>\n    </ion-row>\n</div>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/empty/empty.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* NavController */]])
    ], EmptyComponent);
    return EmptyComponent;
}());

//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReachUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_contact_us_contact_us__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(125);
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
            selector: 'reach-us',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/reach-us/reach-us.html"*/'<ion-row class="footer">\n    <ion-col>\n        <p><span (click)="callNumber(global.support.landline)">Landline: {{global.support.landline}}</span> <br/> <span (click)="callNumber(global.support.mobile)">Mobile:{{global.support.mobile}}</span></p>\n        <p (click)="openEmail(global.support.email)" hidden="true">Email: {{global.support.email}}</p>\n        <!-- <p [hidden]="hideContactUsLink">Having trouble? <a href="#" ion-text color="primary" (click)=onContactUs()>Contact Us</a></p> -->\n        <p [hidden]="!_address" text-wrap>{{global.support.address}}</p>\n    </ion-col>\n</ion-row>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/reach-us/reach-us.html"*/
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

/***/ 806:
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
            selector: 'center-spinner',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/center-spinner/center-spinner.html"*/'<div class="center-loader">\n    <ion-spinner name="dots"></ion-spinner>\n</div>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/center-spinner/center-spinner.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], CenterSpinnerComponent);
    return CenterSpinnerComponent;
}());

//# sourceMappingURL=center-spinner.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_search_search__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(31);
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
        this.navCtrl.viewWillEnter.subscribe(function (page) {
            var currentPageColor = _this.getColor(page.name);
            if (_this.prevPageColor !== currentPageColor) {
                _this.prevPageColor = currentPageColor;
                //setting header color
                //console.log(this.prevPageColor, this.colorHex[this.prevPageColor]);
                _this._statusBar.backgroundColorByHexString(_this.colorHex[_this.prevPageColor]);
            }
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
        if (name === null) {
            name = __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Global */].getActiveComponentName(this.navCtrl.getActive());
            //console.log(name);
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
            selector: 'header',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/header/header.html"*/'<ion-navbar [color]="getColor()">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{_title}}</ion-title>\n    <ion-buttons end *ngIf="buttons">\n        <button ion-button (click)="sendButtonClicked(button, $event)" clear icon-only color="light" *ngFor="let button of buttons">\n            <ion-icon [name]="button.icon"></ion-icon>\n        </button>\n    </ion-buttons>\n</ion-navbar>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 808:
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
            selector: 'refresh',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/refresh/refresh.html"*/'<!-- Generated template for the RefreshComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/refresh/refresh.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RefreshComponent);
    return RefreshComponent;
}());

//# sourceMappingURL=refresh.js.map

/***/ }),

/***/ 809:
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
            selector: 'logo',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/logo/logo.html"*/'<img class="logo" src="assets/img/logo.jpg">'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/logo/logo.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());

//# sourceMappingURL=logo.js.map

/***/ }),

/***/ 810:
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
            selector: 'or',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/or/or.html"*/'<img src="assets/img/or.png">'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/or/or.html"*/
        })
    ], OrComponent);
    return OrComponent;
}());

//# sourceMappingURL=or.js.map

/***/ }),

/***/ 811:
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
            selector: 'progress-bar',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/progress-bar/progress-bar.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{progress}}%\n  </div>\n</div>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/progress-bar/progress-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());

//# sourceMappingURL=progress-bar.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallFabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_call_number__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(31);
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
        this.callNumber.callNumber(__WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* Global */].support.landline, true);
    };
    CallFabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'call-fab',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/call-fab/call-fab.html"*/'<button ion-fab mini color="button" (click)="call()" ><ion-icon name="call"></ion-icon></button>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/call-fab/call-fab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_call_number__["a" /* CallNumber */]])
    ], CallFabComponent);
    return CallFabComponent;
}());

//# sourceMappingURL=call-fab.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBubbleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mime_types__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mime_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mime_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_audio__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_global__ = __webpack_require__(31);
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
    function ChatBubbleComponent(angularFireDB, file, transfer, platform, events, fileOpener, _audioProvider, navCtlr) {
        var _this = this;
        this.angularFireDB = angularFireDB;
        this.file = file;
        this.transfer = transfer;
        this.platform = platform;
        this.events = events;
        this.fileOpener = fileOpener;
        this._audioProvider = _audioProvider;
        this.navCtlr = navCtlr;
        this.users = {};
        this.LoginTypeID = 0;
        this.basePath = '';
        this.messagePath = '';
        this.statusRef = null;
        this.dataDirectory = null;
        this.downloadDirectory = null;
        this.dataDirectory = this.platform.is('android') ? this.file.externalDataDirectory : this.file.dataDirectory;
        //listening to page change event to pause audio
        this.navCtlr.viewWillLeave.subscribe(function (event) {
            _this.pauseSelectedTrack();
        });
        this.events.subscribe('platform:onPause', function (event) {
            _this.pauseSelectedTrack();
        });
    }
    ChatBubbleComponent.prototype.ngOnInit = function () {
        this.basePath = 'Communications/' + this.ticket + '/';
        this.messagePath = this.basePath + 'Chat/' + this.message.key;
        this.doReading();
        this.downloadDirectory = this.dataDirectory + this.ticket + '/';
        this.createIfNotExist();
        this.processFile();
        // this.processBadgeCount();
    };
    ChatBubbleComponent.prototype.doReading = function () {
        var _this = this;
        //only if active page is chat
        if (__WEBPACK_IMPORTED_MODULE_11__app_global__["a" /* Global */].getActiveComponentName(this.navCtlr.getActive()) === 'ChatPage') {
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
        if (this.message.UserID !== this.userID) {
            var status_1 = -1;
            //sent by 
            if (this.message.LoginTypeID === 1 && this.LoginTypeID === 3) {
                status_1 = 2;
            }
            else if (this.message.LoginTypeID === 3) {
                //checking if read by all
                if (__WEBPACK_IMPORTED_MODULE_4_underscore__["size"](this.message.Read) === __WEBPACK_IMPORTED_MODULE_4_underscore__["size"](this.users)) {
                    status_1 = 2;
                }
                else if (this.LoginTypeID === 1 && this.message.Status === 0) {
                    status_1 = 1;
                }
            }
            if (status_1 > 0) {
                this.angularFireDB.object(this.messagePath + '/Status').set(status_1);
            }
        }
    };
    ChatBubbleComponent.prototype.openImage = function (url) {
        //checking if file exist
        //this.check(url).then((entry: any) => {
        //  this.openFileInApp(entry.nativeURL);
        //});
    };
    ChatBubbleComponent.prototype.openAudio = function (message) {
    };
    ChatBubbleComponent.prototype.check = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isFileDownloaded(file).then(function (status) {
                resolve(status);
            }).catch(function (error) {
                _this.events.publish('loading:create', 'downloading');
                _this.downloadFile(file).then(function (entry) {
                    _this.events.publish('loading:close');
                    resolve(entry);
                }).catch(function (error) {
                    _this.events.publish('loading:close');
                    _this.events.publish('toast:error', error);
                    reject(error);
                });
            });
        });
    };
    ChatBubbleComponent.prototype.openFileInApp = function (file) {
        var _this = this;
        //opening
        this.fileOpener.open(this.getNativeURL(file), __WEBPACK_IMPORTED_MODULE_5_mime_types__["lookup"](file)).then(function (status) {
        }).catch(function (error) {
            _this.events.publish('toast:error', error);
        });
    };
    ChatBubbleComponent.prototype._processFile = function () {
        //downloading file
        if (this.message.URL) {
            //if cordova
            if (this.platform.is('cordovaaa')) {
            }
            else {
                this.message.downloaded = true;
                this.message.nativeURL = this.message.URL;
                this.makeTrackForAudio();
            }
        }
        else {
            this.message['downloaded'] = true;
        }
    };
    ChatBubbleComponent.prototype.processFile = function () {
        var _this = this;
        //downloading file
        if (this.message.URL) {
            //if cordova
            if (this.platform.is('cordova')) {
                var file_1 = this.message.URL;
                this.isFileDownloaded(file_1).then(function (status) {
                    if (status) {
                        _this.message['downloaded'] = true;
                        _this.message.nativeURL = _this.getNativeURL(file_1);
                        console.log(_this.message.nativeURL);
                        //download for thumbnail in case of image
                        //pending
                    }
                    _this.makeTrackForAudio();
                }).catch(function (error) {
                    _this.message['downloaded'] = false;
                    _this.downloadFile(file_1).then(function (entry) {
                        _this.message.downloaded = true;
                        _this.message.nativeURL = _this.getNativeURL(entry.nativeURL);
                        _this.makeTrackForAudio();
                    }).catch(function (error) {
                        _this.message.downloaded = false;
                        _this.message['error'] = error;
                    });
                });
            }
            else {
                this.message.downloaded = true;
                this.message.nativeURL = this.message.URL;
                this.makeTrackForAudio();
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
    ChatBubbleComponent.prototype.downloadFile = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var fileName = _this.getFileName(file);
            var fileTransfer = _this.transfer.create();
            fileTransfer.download(file, _this.downloadDirectory + fileName).then(function (entry) {
                resolve(entry);
            }, function (error) {
                _this.message['failed'] = error;
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
        this.file.checkDir(this.downloadDirectory, this.ticket).then(function (status) {
        }).catch(function (error) {
            if (error.code === 1) {
                _this.file.createDir(_this.downloadDirectory, _this.ticket, false).catch(function (error) { });
            }
        });
    };
    ChatBubbleComponent.prototype.getTime = function (time) {
        if (time) {
            var momentTime = null;
            momentTime = __WEBPACK_IMPORTED_MODULE_9_moment__(time).utc().local();
            //checking if its dd-mm-yyy format
            if (!momentTime.isValid() && __WEBPACK_IMPORTED_MODULE_9_moment__(time, 'DD-MM-YYYY hh:mm:ss').isValid()) {
                momentTime = __WEBPACK_IMPORTED_MODULE_9_moment__(time, 'DD-MM-YYYY hh:mm:ss').utc().local();
            }
            if (momentTime.isValid()) {
                var today = __WEBPACK_IMPORTED_MODULE_9_moment__().startOf('day');
                if (momentTime.isSame(today, 'd')) {
                    return momentTime.format('hh:mm a');
                }
                else if (momentTime.isBetween(__WEBPACK_IMPORTED_MODULE_9_moment__().subtract(7, 'days').startOf('day'), today)) {
                    return momentTime.format('ddd D, hh:mm a');
                }
                else if (momentTime.isBetween(__WEBPACK_IMPORTED_MODULE_9_moment__().startOf('month'), today)) {
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
        if (this.LoginTypeID === 3) {
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
    ChatBubbleComponent.prototype.playSelectedTrack = function (trackId) {
        // use AudioProvider to control selected track 
        this._audioProvider.play(this.selectedTrack);
    };
    ChatBubbleComponent.prototype.pauseSelectedTrack = function () {
        // use AudioProvider to control selected track 
        this._audioProvider.pause(this.selectedTrack);
    };
    ChatBubbleComponent.prototype.togglePlay = function (audioTrack) {
        if (audioTrack.isPlaying) {
            audioTrack.pause();
        }
        else {
            //pause other playing video
            if (this.selectedTrack !== audioTrack.id) {
                this._audioProvider.pause();
                // this.selectedTrack = audioTrack.id;
                audioTrack.play();
            }
            else {
                audioTrack.play();
            }
        }
    };
    ChatBubbleComponent.prototype.onTrackFinished = function (track) {
        var _this = this;
        console.log('Track finished', track);
        //re-adding this track
        this.message.audioTrack = {
            src: null,
        };
        setTimeout(function () {
            _this.makeTrackForAudio();
        }, 150);
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
    ChatBubbleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'chat-bubble',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/chat-bubble/chat-bubble.html"*/'<div class="message" [ngClass]="message.UserID === userID ? \'message-mine\' : \'message-other\'" on-hold="showRead(message)">\n  <div class="message-header" *ngIf="LoginTypeID !== 1 && message.UserID !== userID">\n    <div class="message-user">{{message.From}}</div>\n  </div>\n  <div class="message-body">\n    <div class="downloading" *ngIf="!message.downloaded" [hidden]="message.MessageType === \'Audio\'">\n      <ion-spinner name="crescent"></ion-spinner>\n    </div>\n    <ng-container [ngSwitch]="message.MessageType">\n      <div *ngSwitchCase="\'Text\'" class="text" [innerHTML]="message.Message"></div>\n      <div *ngSwitchCase="\'Image\'" class="picture" [ngClass]="{\'done\':message.downloaded}" (click)="openImage(message.URL)">\n        <img *ngIf="message.downloaded" [imageViewer]="message.nativeURL" [src]="message.nativeURL" width="160" height="160"\n        />\n      </div>\n      <div *ngSwitchCase="\'Audio\'" class="audio" [ngClass]="{\'done\':message.downloaded}" (click)="openAudio(message)">\n        <audio-track #audio [track]="message.audioTrack" (onFinish)="onTrackFinished($event)">\n          <ion-item no-padding>\n            <audio-track-play dark [audioTrack]="audio"></audio-track-play>\n            <div item-content>\n              <ion-grid>\n                <ion-row>\n                  <ion-col col-3>\n                    <button class="control-button" clear icon-only ion-button (click)="togglePlay(audio)" [disabled]="audio.error || audio.isLoading">\n                      <ion-icon name="pause" *ngIf="audio.isPlaying && !audio.isLoading"></ion-icon>\n                      <ion-spinner name="bubbles" *ngIf="audio.isLoading"></ion-spinner>\n                      <ion-icon name="play" *ngIf="!audio.isPlaying && !audio.isLoading"></ion-icon>\n                    </button>\n                  </ion-col>\n                  <ion-col>\n                    <audio-track-progress-bar duration progress [audioTrack]="audio"></audio-track-progress-bar>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n          </ion-item>\n        </audio-track>\n      </div>\n    </ng-container>\n  </div>\n  <div class="message-footer">\n    <div class="message-timestamp">{{ getTime(message.CreateAt)}}</div>\n    <div class="message-status" [ngClass]="\'status-\' + message.Status" [hidden]="message.UserID !== userID">\n      <ng-container [ngSwitch]="message.Status">\n        <ion-icon *ngSwitchCase="0" name="md-checkmark"></ion-icon>\n        <ion-icon *ngSwitchCase="1" [name]="message.LoginTypeID === 1 ? \'md-done-all\' : \'md-checkmark\'"></ion-icon>\n        <ion-icon *ngSwitchCase="2" name="md-done-all"></ion-icon>\n      </ng-container>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/components/chat-bubble/chat-bubble.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_audio__["a" /* AudioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */]])
    ], ChatBubbleComponent);
    return ChatBubbleComponent;
}());

//# sourceMappingURL=chat-bubble.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connection_connection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_office_list_office_list__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
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
    function OfficeServiceProvider(storage, events, connection, modalCtrl) {
        var _this = this;
        this.storage = storage;
        this.events = events;
        this.connection = connection;
        this.modalCtrl = modalCtrl;
        this.officeList = {};
        this.loadingOfficeList = true;
        this.isMultipleOffice = -1;
        this.pickupSelectedOffice = null;
        this.caseStatusSelectedOffice = null;
        this.communicationSelectedOffice = null;
        this.user = {};
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
        });
        //on Logout clearing office list
        this.events.subscribe('user:postLogout', function () {
            _this.officeList = null;
        });
    }
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
            _this.loadingOfficeList = true;
            //loading from firebase
            __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('OfficeList/' + _this.user.id).on('value', function (snapshot) {
                _this.officeList = snapshot.val();
                _this.loadingOfficeList = false;
                if (__WEBPACK_IMPORTED_MODULE_6_underscore__["size"](_this.officeList) > 0) {
                    _this.isMultipleOffice = __WEBPACK_IMPORTED_MODULE_6_underscore__["size"](_this.officeList) > 1;
                    resolve(true);
                }
                else {
                    _this.isMultipleOffice = -1;
                    reject(false);
                }
            });
        });
    };
    /**
     * returns true if more than one Office is assigned
     */
    OfficeServiceProvider.prototype.isMultiOffice = function () {
        return this.isMultipleOffice;
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
                    reject('No Office/Branch is asigned to you. Kindly contact Admin');
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
                _this.events.publish('loading:create', 'loading');
                //subscribing to event
                _this.events.subscribe('officeList:loaded', function (status) {
                    //closing office list
                    _this.events.publish('loading:close');
                    //sending message
                    if (status) {
                        resolve(true);
                    }
                    else {
                        reject('Failed to load Office list');
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* ModalController */]])
    ], OfficeServiceProvider);
    return OfficeServiceProvider;
}());

//# sourceMappingURL=office-service.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(31);
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
        this.global = __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Global */];
    }
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/account/account.html"*/'<ion-header no-border>\n    <header title="My Account"></header>\n</ion-header>\n<ion-content>\n    <div class="settings">\n        <ion-list inset>\n            <ion-item (click)="openEditProfile()">\n                <h2>Edit Profile</h2>\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n            <ion-item (click)="openChangePassword()">\n                <h2>Change Password</h2>\n                <ion-icon name="arrow-forward" item-right></ion-icon>\n            </ion-item>\n\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/account/account.html"*/
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

/***/ 835:
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

/***/ 836:
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

/***/ 837:
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

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__ = __webpack_require__(839);
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
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__keyboard_attach_keyboard_attach__["a" /* KeyboardAttachDirective */],
            ]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardAttachDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        this.content.scrollToBottom();
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

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_global__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communication_communication__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pickup_pickup__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__case_status_case_status__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_chat__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_underscore__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(67);
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
    function HomePage(navCtrl, connection, user, events, angularFireDatabase, _storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.connection = connection;
        this.user = user;
        this.events = events;
        this.angularFireDatabase = angularFireDatabase;
        this._storage = _storage;
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
        this.global = __WEBPACK_IMPORTED_MODULE_4__app_global__["a" /* Global */];
        //listening to Resume & Pause events
        this.events.subscribe('platform:onResumed', function () {
            _this.initData(null, false);
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //checking if logged in
        if (!__WEBPACK_IMPORTED_MODULE_11_underscore__["isEmpty"](this.connection.user)) {
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
            if (_this.loginType === 3) {
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
                _this._storage.set('OfflineHome', _this.data);
            }
        });
    };
    HomePage.prototype.openDashboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage.prototype.openPickup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pickup_pickup__["a" /* PickupPage */]);
    };
    HomePage.prototype.openCaseSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__case_status_case_status__["a" /* CaseStatusPage */]);
    };
    HomePage.prototype.openCommunications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__communication_communication__["a" /* CommunicationPage */]);
    };
    HomePage.prototype.openOfficeList = function () {
    };
    HomePage.prototype.openChat = function (ticket) {
        if (ticket === void 0) { ticket = 'TR-25995-GJ'; }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chat_chat__["a" /* ChatPage */], ticket);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/home/home.html"*/'<ion-header no-border>\n    <header title="Home"></header>\n    <!-- <div [hidden]="Customer === null" class="cutomer-name">{{Customer}}</div> -->\n</ion-header>\n<ion-content no-padding>\n    <ion-refresher (ionRefresh)="initData($event, true)">\n        <ion-refresher-content pullingIcon="arrow-round-down" pullingText="Pull to refresh" refreshingSpinner="crescent" refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <center-spinner [hidden]="loginType"></center-spinner>\n    <ng-container *ngIf="loginType">\n        <div style="background:#4ECDC4" class="homescreenDivision" *ngIf="loginType !== 3">\n            <ion-grid style="height: inherit;">\n                <ion-row style="height: 100%; align-items: center;" (click)="openDashboard()">\n                    <ion-col col-4 style="text-align:center;">\n                        <img src="assets/img/test7.png" height="70" width="80" style="padding-top: 10px;" />\n                    </ion-col>\n                    <ion-col style="color:white">\n                        <h5 style="margin-bottom:0px;"> DASHBOARD </h5>\n                        <p style="margin-bottom:0px;margin-top:0px; font-size: smaller;">Your dashboard summary</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <div style="background:#2574A9" class="homescreenDivision" *ngIf="loginType !== 3">\n            <ion-grid style="height: inherit;">\n                <ion-row style="height: 100%; align-items: center;" (click)="openPickup()">\n                    <ion-col col-4 style="text-align:center;">\n                        <img src="assets/img/test4.png" height="80" width="80" style="padding-top: 10px;" />\n                    </ion-col>\n                    <ion-col style="color:white">\n                        <h5 style="margin-bottom:0px;"> PICK UP\n                            <sup *ngIf="data.PickUpCount !== 0">\n                                <ion-badge style="background:gray">{{data.PickUpCount}}</ion-badge>\n                            </sup>\n                        </h5>\n                        <p style="margin-bottom:0px;margin-top:0px; font-size: smaller;">Easy pickup request</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <div style="background:#87D37C" [ngClass]="{\'homescreenDivision\': isNormalLogin, \'homescreenDivision1\': isDentalLogin}" class="homescreenDivision">\n            <ion-grid style="height: inherit;">\n                <ion-row style="height: 100%; align-items: center;" (click)="openCaseSearch()">\n                    <ion-col col-4 style="text-align:center;">\n                        <img src="assets/img/test6.png" height="65" width="60" style="padding-top: 10px;" />\n                    </ion-col>\n                    <ion-col style="color:white">\n                        <h5 style="margin-bottom:0px;"> CASE STATUS\n                            <sup *ngIf="data.CaseSearchCount !== 0 && loginType !== 3">\n                                <ion-badge style="background:gray">{{data.CaseSearchCount}}</ion-badge>\n                            </sup>\n                        </h5>\n                        <p style="margin-bottom:0px;margin-top:0px; font-size: smaller;"> View your case status</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n        <div style="background:#00B16A" [ngClass]="{\'homescreenDivision\': isNormalLogin, \'homescreenDivision1\': isDentalLogin}">\n            <ion-grid style="height: inherit;">\n                <ion-row style="height: 100%; align-items: center;" (click)="openCommunications()">\n                    <ion-col col-4 style="text-align:center;">\n                        <img src="assets/img/test5.png" height="70" width="65" style="padding-top: 10px;" />\n                    </ion-col>\n                    <ion-col style="color:white">\n                        <h5 style="margin-bottom:0px;"> COMMUNICATION\n                            <sup *ngIf="data.CommunicationCount !== 0">\n                                <ion-badge style="background:gray">{{data.CommunicationCount}}</ion-badge>\n                            </sup>\n                        </h5>\n                        <p style="margin-bottom:0px;margin-top:0px; font-size: smaller;"> View your communications</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </ng-container>\n    <button (click)="openChat()" full ion-button>Open Test Chat</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_connection_connection__["a" /* ConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */],
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_global__ = __webpack_require__(31);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/login/login.html"*/'<ion-content class="login">\n    <ion-grid class="slide_header">\n\n        <logo></logo>\n        <ion-row>\n            <div id="login-box">\n                <form [formGroup]="loginForm" (ngSubmit)="doLogin()">\n                    <ion-list>\n                        <ion-item>\n                            <ion-label ion-text color="primary" floating>Login Name</ion-label>\n                            <ion-input formControlName="login_name" autofocus required type="text" placeholder="Login Name" name="login_name"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label ion-text color="primary" floating>Password</ion-label>\n                            <ion-input required formControlName="password" type="password" placeholder="Password" name="password"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                    <button ion-button block type="submit" [disabled]="!loginForm.valid">Log in</button>\n                </form>\n            </div>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-col text-center class="inline-links">\n                <a class="display-inline" (click)="onForgotPassword()">Forgot Password?</a>\n            </ion-col>\n        </ion-row>\n\n        <or></or>\n\n        <reach-us></reach-us>\n    </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Mubasshir/Documents/ionic/SignatureSmiles/IllusionDental/src/pages/login/login.html"*/,
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

/***/ })

},[669]);
//# sourceMappingURL=main.js.map