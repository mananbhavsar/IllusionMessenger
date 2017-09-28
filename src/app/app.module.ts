import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Diagnostic } from '@ionic-native/diagnostic';
import { SQLite } from '@ionic-native/sqlite';
import { LocationAccuracy } from '@ionic-native/location-accuracy'
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { OneSignal } from '@ionic-native/onesignal';
import { SocialSharing } from '@ionic-native/social-sharing';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { OfflinePage } from '../pages/offline/offline';
import { RegisterPage } from '../pages/register/register';
import { SearchPage } from '../pages/search/search';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';

import { ConnectionProvider } from '../providers/connection/connection';
import { UserProvider } from '../providers/user/user';

import { HeaderComponent } from '../components/header/header';
import { EmptyComponent } from '../components/empty/empty';
import { ReachUsComponent } from '../components/reach-us/reach-us';
import { CenterSpinnerComponent } from '../components/center-spinner/center-spinner';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        AccountPage,
        ContactUsPage,
        HelpPage,
        HomePage,
        LoginPage,
        LogoutPage,
        OfflinePage,
        RegisterPage,
        SearchPage,
        WelcomePage,
        TutorialPage,
        LoginPage,
        HeaderComponent,
        EmptyComponent,
        ReachUsComponent,
        CenterSpinnerComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
        IonicStorageModule.forRoot({
            name: '__prompt_jobs_db',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        AccountPage,
        ContactUsPage,
        HelpPage,
        HomePage,
        LoginPage,
        LogoutPage,
        OfflinePage,
        RegisterPage,
        SearchPage,
        TutorialPage,
        WelcomePage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ConnectionProvider,
        UserProvider,
        Network,
        StatusBar,
        Geolocation,
        Keyboard,
        SplashScreen,
        Diagnostic,
        SQLite,
        LocationAccuracy,
        CallNumber,
        EmailComposer,
        OneSignal,
        SocialSharing,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
