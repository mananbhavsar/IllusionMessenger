import { Component, ViewChild, enableProdMode } from '@angular/core';
import { Nav, MenuController, Platform, Events, LoadingController, ModalController, AlertController, ToastController } from 'ionic-angular';

import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { OneSignal } from '@ionic-native/onesignal';
import { Keyboard } from '@ionic-native/keyboard';
import { Badge } from '@ionic-native/badge';
import { FCM } from '@ionic-native/fcm';

import { Storage } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { CaseStatusPage } from '../pages/case-status/case-status';
import { ChatPage } from '../pages/chat/chat';
import { CommunicationPage } from "../pages/communication/communication";
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { DashboardPage } from "../pages/dashboard/dashboard";
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { OfflinePage } from '../pages/offline/offline';
import { PickupPage } from "../pages/pickup/pickup";
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';

import { UserProvider } from '../providers/user/user';
import { Global } from './global';

import { AngularFireDatabase } from 'angularfire2/database';
import { not } from '@angular/compiler/src/output/output_ast';

enableProdMode();

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
        // { title: 'Contact', name: 'ContactUsPage', component: ContactUsPage, icon: 'mail' },
        { title: 'Help', name: 'HelpPage', component: HelpPage, icon: 'help-circle' },
    ];
    loggedInPages: PageInterface[] = [
        { title: 'Home', name: 'HomePage', component: HomePage, icon: 'home' },
        { title: 'Dashboard', name: 'DashboardPage', component: DashboardPage, icon: '' },
        { title: 'Pickup', name: 'PickupPage', component: PickupPage, icon: '' },
        { title: 'Case Status', name: 'CaseStatusPage', component: CaseStatusPage, icon: '' },
        { title: 'Communication', name: 'CommunicationPage', component: CommunicationPage, icon: '' },
    ];
    accountPages: PageInterface[] = [
        // { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'user' },
        { title: 'Logout', name: 'LogoutPage', component: LogoutPage, icon: 'log-out', logsOut: true }
    ];
    loggedOutPages: PageInterface[] = [
        { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
        { title: 'Forgot Password', name: 'ForgotPasswordPage', component: ForgotPasswordPage, icon: 'key' },
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
        private _keyboard: Keyboard,
        private _badge: Badge,
        private angularFireDatabase: AngularFireDatabase,
        private _fcm: FCM,
    ) {

        platform.ready().then(() => {
            this._statusBar.overlaysWebView(false); // let status bar overlay webview
            this._statusBar.backgroundColorByHexString(Global.color.primary);
            splashScreen.hide();

            this.enableMenu(false);
            this.listenToGobalEvents();
            this.listenToLoginEvents();
            this._keyboard.hideKeyboardAccessoryBar(false);

            setTimeout(() => {
                this.initPreLoginPlugins();
                // this.connectSocket();
            }, 500);
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

        if (Global.getActiveComponentName(this.nav.getActive()) === page.name) {
            return 'primary';
        }
        return;
    }

    /**
     * checking post login if user is Authorized to access this page
     * @param page 
     */
    isAuthorized(page: PageInterface) {
        if (this.user && this.user._user) {
            //for LoginTypeID 3
            if (this.user._user.LoginTypeID === 3) {
                //for dashboard
                return ['DashboardPage', 'PickupPage'].indexOf(page.name) === -1;
            }
            return true;
        }
        return false;
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
            if (error === null) {
                return;
            }
            if (typeof error === 'string') {
                this.events.publish('toast:create', error, 'danger');
            } else if ([404].indexOf(error.status) > -1) {
                this.events.publish('toast:create', error.status + ': ' + error.statusText, 'danger');
            } else if (error._body) {
                let body = error._body ? error._body : JSON.parse(error._body);
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
            var currentPage = Global.getActiveComponentName(this.nav.getActive());
            if (currentPage !== 'OfflinePage') {
                this.events.publish('toast:create', 'you seems to be offline!');
                this.nav.setRoot(OfflinePage);
            }
        });
        this.events.subscribe('network:online', () => {
            //sending to home page only in offline page
            var currentPage = Global.getActiveComponentName(this.nav.getActive());
            if (currentPage === 'OfflinePage') {
                this.events.publish('toast:create', 'Hola, you are online now');
                this.nav.setRoot(WelcomePage, true);
            }
        });

    }


    initPreLoginPlugins() {
        //working on network
        this.doNetworking();

        //On app Resume & Pause
        this.platform.resume.subscribe(() => {
            this.events.publish('platform:onResumed');
        });
        this.platform.pause.subscribe(() => {
            this.events.publish('platform:onPause');
        });

        //working on OS Version
        this.doVersionCheck();
    }

    initPostLoginPlugins() {
        //Location
        //this.initLocation();

        //OneSignal
        if (Global.Push.OneSignal) {
            this.initOneSignal();
        }

        //init FCM
        if (Global.Push.FCM) {
            this.initFCM();
        }

        //Badge
        this.initBadge();
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

    doVersionCheck() {
        this.user.doVersionCheck();
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

    openNotificationPage(payload) {
        //do we need to open page
        if (payload.additionalData && payload.additionalData.page) {
            let page: any = null;
            switch (payload.additionalData.page) {
                case 'ChatPage':
                    page = ChatPage;
                    break;

                default:
                    page = HomePage;
                    break;
            }
            if (page) {
                this.nav.push(page, payload.additionalData.params);
            }
        }
    }

    processNotification(notification, directOpenPage) {
        let payload = 'payload' in notification ? notification.payload : notification.notification.payload;
        console.log(payload, directOpenPage);
        //showing notification  alert if not chatting else giving control to Caht module to handle it
        let currentPage = Global.getActiveComponentName(this.nav.getActive());
        if (currentPage === 'ChatPage') {
            this.events.publish('notification:chat', payload);
        } else if (directOpenPage && payload.additionalData && payload.additionalData.page) {//direct open & has data pages
            this.openNotificationPage(payload);
        } else {
            let closeText = 'x';
            if (payload.additionalData && payload.additionalData.page) {
                if (payload.additionalData.page === 'ChatPage') {
                    closeText = 'open';
                }
            }

            let notificationToast = this.toast.create({
                message: payload.body,
                duration: 5000,
                position: 'top',
                showCloseButton: true,
                closeButtonText: closeText,
                cssClass: ''
            });
            notificationToast.onDidDismiss((data, role) => {
                if (role === 'close') {
                    this.openNotificationPage(payload);
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
    }

    initOneSignal() {
        if (!this.platform.is('cordova')) {
            return;
        }
        this._oneSignal.startInit(Global.OneSignal.key, Global.OneSignal.android);
        this._oneSignal.inFocusDisplaying(this._oneSignal.OSInFocusDisplayOption.None);
        this._oneSignal.getIds().then((id) => {
            //registering user
            this._oneSignal.setSubscription(true);
            //updating user ID
            this.events.subscribe('user:ready', (response) => {
                this.user.registerPushID(id.userId);
            });
            //setting tags for this user
            this.user.getUser().then(user => {
                this._oneSignal.sendTags({
                    user_id: user.id,
                    name: user.Customer
                });
            });
        });
        this._oneSignal.handleNotificationReceived().subscribe((notification) => {
            // do something when notification is received
            this.processNotification(notification, false);
        });

        this._oneSignal.handleNotificationOpened().subscribe((notification) => {
            // do something when a notification is opened
            this.processNotification(notification, true);
        });

        this._oneSignal.endInit();

        this.events.subscribe('notification:process', (notification, directOpenPage) => {

        });
    }

    initFCM() {
        if (!this.platform.is('cordova')) {
            return;
        }
        this.platform.ready().then(() => {
            this._fcm.onNotification().subscribe(notification => {
                if(!('wasTapped' in notification)){
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
                    let payload = {
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
                    this.processNotification(payload, notification.wasTapped);
                }
            });
            this._fcm.getToken().then(token => {
                this.user.registerPushID(token);
            }).catch(error => {
                
            });
            this._fcm.onTokenRefresh().subscribe(token => {
                this.user.registerPushID(token);
            });
        });
    }

    initBadge() {
        this.user.getUser().then(user => {
            this.angularFireDatabase.object('Badge/' + user.id + '/Total').snapshotChanges().subscribe(snapshot => {
                let total = snapshot.payload.val();
                console.log('total:' + total);
                if (total) {
                    this._badge.set(total);
                } else {
                    this._badge.clear();
                }
            });
        });
    }

    listenToLoginEvents() {
        this.events.subscribe('user:login', (user) => {
            console.log(user);
            this.loggedIn = true;
            this.enableMenu(true);

            this.nav.setRoot(HomePage);

            setTimeout(() => {
                var full_name = user ? user.Customer : '';
                this.events.publish('toast:create', 'Welcome ' + full_name);
                this.initPostLoginPlugins();
                this.events.publish('user:changed');
                this.events.publish('user:postLogin', true);
            });
        });

        this.events.subscribe('user:logout', (logoutMessage) => {
            this.loggedIn = false;
            this.enableMenu(false);
            this.nav.setRoot(LoginPage);
            setTimeout(() => {
                this.events.publish('toast:create', logoutMessage);
                this.events.publish('user:changed');
                this.events.publish('user:postLogout', true);
            });
            if (this.locationSubscription) {
                this.locationSubscription.unsubscribe();
                this.locationSubscription = null;
            }
            this._badge.clear();
        });


        this.events.subscribe('user:unautharized', () => {
            this.events.publish('user:logout', 'You are unauthorized user');
            //degistering device
            this._oneSignal.setSubscription(false);
        });

        //checking if user already logged in
        this.user.hasLoggedIn().then((user) => {
            if (user) {
                this.events.publish('user:login', user);
            }
        });
    }

    //remove in next version
    connectSocket() {
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
    }


}