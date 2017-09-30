import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';

import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { JobsPage } from "../pages/jobs/jobs";
import { LoginPage } from '../pages/login/login';
import { OfflinePage } from '../pages/offline/offline';
import { RegisterPageModule } from '../pages/register/register.module';
import { SearchPage } from '../pages/search/search';
import { SetupPage } from '../pages/setup/setup';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';

import { ConnectionProvider } from '../providers/connection/connection';
import { UserProvider } from '../providers/user/user';

import { HeaderComponent } from '../components/header/header';
import { EmptyComponent } from '../components/empty/empty';
import { ReachUsComponent } from '../components/reach-us/reach-us';
import { CenterSpinnerComponent } from '../components/center-spinner/center-spinner';
import { IonSimpleWizardComponent } from '../components/ion-simple-wizard/ion-simple-wizard';
import { IonSimpleWizardStep } from '../components/ion-simple-wizard/ion-simple-wizard.step';

import { KeysPipe } from "../pipes/keys/keys";
@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        AccountPage,
        ContactUsPage,
        ForgotPasswordPage,
        HelpPage,
        HomePage,
        JobsPage,
        LoginPage,
        OfflinePage,
        SearchPage,
        SetupPage,
        WelcomePage,
        TutorialPage,
        LoginPage,
        HeaderComponent,
        EmptyComponent,
        ReachUsComponent,
        CenterSpinnerComponent,
        IonSimpleWizardComponent,
        IonSimpleWizardStep,
        KeysPipe,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
        IonicStorageModule.forRoot({
            name: '__prompt_jobs_db',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
        BrowserAnimationsModule,
        RegisterPageModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        AccountPage,
        ContactUsPage,
        ForgotPasswordPage,
        HelpPage,
        HomePage,
        JobsPage,
        LoginPage,
        OfflinePage,
        SearchPage,
        SetupPage,
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
        FileTransfer,
        FileChooser,
        FileTransferObject,
        File,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
