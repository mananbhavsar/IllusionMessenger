import { Component, ViewChild } from '@angular/core';
import { Nav, MenuController, Platform, Events, LoadingController, ModalController, AlertController, ToastController } from 'ionic-angular';

import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { OneSignal } from '@ionic-native/onesignal';
import { Keyboard } from '@ionic-native/keyboard';

import { Storage } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { OfflinePage } from '../pages/offline/offline';
import { RegisterPage } from '../pages/register/register';
import { SetupPage } from '../pages/setup/setup';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';

import { UserProvider } from '../providers/user/user';
import { Global } from './global';

export interface PageInterface {
    title: string;
    name: string;
    component: any;
    icon: string;
    logsOut?: boolean;
    index?: number;
    tabName?: string;
    tabComponent?: any;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    loading: any;
    loggedIn: Boolean = false;
    rootPage: any = WelcomePage;
    disconnectSubscription: any;
    connectSubscription: any;
    latitude: number = 0.0;
    longitude: number = 0.0;
    locationSubscription: any;

    // List of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    appPages: PageInterface[] = [
        { title: 'About', name: 'AboutPage', component: AboutPage, icon: 'information-circle' },
        { title: 'Contact', name: 'ContactUsPage', component: ContactUsPage, icon: 'information-circle' }
    ];
    loggedInPages: PageInterface[] = [
        { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
        { title: 'Logout', name: 'LogoutPage', component: LogoutPage, icon: 'log-out', logsOut: true }
    ];
    loggedOutPages: PageInterface[] = [
        { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
        { title: 'Register', name: 'RegisterPage', component: RegisterPage, icon: 'person-add' },
        { title: 'Help', name: 'SupportPage', component: HelpPage, icon: 'help' },
    ];

    constructor(
        public events: Events,
        public menu: MenuController,
        public platform: Platform,
        private _statusBar: StatusBar,
        public storage: Storage,
        public splashScreen: SplashScreen,
        public user: UserProvider,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        private toast: ToastController,
        private _network: Network,
        private _oneSignal: OneSignal,
        private _diagnostic: Diagnostic,
        private _locationAccuracy: LocationAccuracy,
        private _geolocation: Geolocation,
        private _keyboard: Keyboard) {

        platform.ready().then(() => {
            this._statusBar.overlaysWebView(false); // let status bar overlay webview
            //            this._statusBar.backgroundColorByHexString(Global.color.primary);
            this._statusBar.styleDefault();
            splashScreen.hide();

            this.enableMenu(true);
            this.listenToGobalEvents();
            this.listenToLoginEvents();
            this._keyboard.hideKeyboardAccessoryBar(true);

            //this.initPreLoginPlugins();
        });
    }

    enableMenu(loggedIn: boolean) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    }

    openPage(page: PageInterface) {
        let params = {};

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
        } else {
            // Set the root of the nav with params if it's a tab index
            this.nav.push(page.name, params)
        }

        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out

        }
    }

    openTutorial() {
        this.nav.push(TutorialPage);
    }

    isActive(page: PageInterface) {
        let childNav = this.nav.getActiveChildNavs()[0];

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
    }

    listenToGobalEvents() {
        this.events.subscribe('loading:create', (content) => {
            content = content || 'Please wait';
            this.loading = this.loadingCtrl.create({
                content: content + '...'
            });

            this.loading.present();
        });

        this.events.subscribe('loading:close', () => {
            if (this.loading) {
                this.loading.dismiss();
            }
        });


        this.events.subscribe('alert:basic', (title, subTitle, buttons) => {
            buttons = buttons || ['OK'];
            let alert = this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                buttons: buttons
            });
            alert.present();
        });


        this.events.subscribe('toast:create', (message, cssClass) => {
            cssClass = cssClass || null;

            let toast = this.toast.create({
                message: message,
                duration: 3000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: 'x',
                cssClass: cssClass
            });
            toast.present();
        });

        this.events.subscribe('toast:error', (error) => {
            this.events.publish('loading:close');
            if (error._body) {
                let body = JSON.parse(error._body);
                this.events.publish('alert:basic', body.title, body.message);
            } else {
                this.events.publish('toast:create', 'Error occurred! Try again', 'danger');
            }
        });

        this.events.subscribe('push:send', (id, message) => {
            //             this._oneSignal.postNotification(notificationObj: OneSignalNotification);
        });

        //Network events
        this.events.subscribe('network:offline', () => {
            //sending to offline page only if not in offline 
            var currentPage = this.nav.getActive().component.name;
            if (currentPage !== 'OfflinePage') {
                this.events.publish('toast:create', 'you are seems to be offline!');
                this.nav.setRoot(OfflinePage);
            }
        });
        this.events.subscribe('network:online', () => {
            //sending to home page only in offline page
            var currentPage = this.nav.getActive().component.name;
            if (currentPage === 'OfflinePage') {
                this.events.publish('toast:create', 'Hola, you are online');
                this.nav.setRoot(WelcomePage);
            }
        });

    }


    initPreLoginPlugins() {
        //working on network
        this.doNetworking();
    }

    initPostLoginPlugins() {
        //Location
        this.initLocation();

        //OneSignal
        this.initOneSignal();
    }

    doNetworking() {
        //checking if currently offline
        setTimeout(() => {
            if (this._network.type === 'none') {
                this.events.publish('network:offline');
            }
        }, 1000);
        //listening to events
        this._network.onDisconnect().subscribe(() => {
            this.events.publish('network:offline');
        });
        this._network.onConnect().subscribe(() => {
            this.events.publish('network:online');
        });
    }

    initWatchLocation() {
        this.locationSubscription = this._geolocation.watchPosition()
            .subscribe(position => {
                if (position.coords != undefined) {
                    this.latitude = position.coords.latitude;
                    this.longitude = position.coords.longitude;
                } else { }

            });
    }

    initLocation() {
        if (!this.platform.is('cordova')) {
            return;
        }
        //checking for Location availability
        this._diagnostic.isLocationEnabled().then((enabled) => {
            if (enabled) {
                this.initWatchLocation();
            } else {
                let alert = this.alertCtrl.create({
                    title: 'Location not enabled',
                    message: 'Kindly switch on Location',
                    buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.events.publish('toast:create', 'Location permission cancelled!');
                        }
                    },
                    {
                        text: 'Enable',
                        handler: () => {
                            this._locationAccuracy.request(this._locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
                                this.initWatchLocation();
                            }).catch(() => {

                            });
                        }
                    }
                    ]
                });
                alert.present();
            }
        });
    }

    initOneSignal() {
        if (!this.platform.is('cordova')) {
            return;
        }
        this._oneSignal.startInit(Global.OneSignal.key, Global.OneSignal.android);
        this._oneSignal.inFocusDisplaying(this._oneSignal.OSInFocusDisplayOption.None);
        this._oneSignal.getIds().then((id) => {
            //updating user ID
            this.user.registerPushID(id.userId);
            //setting tags for this user
            this.user.getUser().then(user => {
                this._oneSignal.sendTags({
                    user_id: user.id,
                    full_name: user.full_name
                });
            });
        });
        this._oneSignal.handleNotificationReceived().subscribe((notification) => {
            // do something when notification is received
            this.events.publish('notification:process', notification);
        });

        this._oneSignal.handleNotificationOpened().subscribe((notification) => {
            // do something when a notification is opened
            this.events.publish('notification:process', notification);
        });

        this._oneSignal.endInit();

        this.events.subscribe('notification:process', (notification) => {
            let payload = 'payload' in notification ? notification.payload : notification.notification.payload;
            let notificationAlert = this.alertCtrl.create({
                title: payload.title,
                message: payload.body,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            //do we need to open page
                            if ('extra' in payload) {
                                let page: any = null;
                                switch (page) {
                                    default:
                                        page = HomePage;
                                        break;
                                }
                                if (page) {
                                    this.nav.push(page, payload.extra.params);
                                }
                            }
                        }
                    },
                ]
            });
            notificationAlert.present();
        });
    }

    listenToLoginEvents() {
        this.events.subscribe('user:login', (user) => {
            this.loggedIn = true;
            this.enableMenu(true);
            //checking if first timer
            if (user.first_time_login) {
                this.nav.setRoot(SetupPage);
            } else {
                this.nav.setRoot(HomePage);
            }
            setTimeout(() => {
                var full_name = user ? user.full_name : '';
                this.events.publish('loading:close');
                this.events.publish('toast:create', 'Welcome ' + full_name);
                this.initPostLoginPlugins();
                this.events.publish('user:postLogin', true);
            });
        });

        this.events.subscribe('user:logout', () => {
            this.loggedIn = false;
            this.enableMenu(false);
            this.nav.setRoot(LoginPage);
            setTimeout(() => {
                this.events.publish('loading:close');
                this.events.publish('toast:create', 'Bye bye! See you soon');
                this.events.publish('user:changed');
            });
            if (this.locationSubscription) {
                this.locationSubscription.unsubscribe();
                this.locationSubscription = null;
            }
        });
    }
}

