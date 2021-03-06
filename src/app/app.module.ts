import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Badge } from '@ionic-native/badge';
import { CallNumber } from '@ionic-native/call-number';
import { Camera } from '@ionic-native/camera';
import { Clipboard } from '@ionic-native/clipboard';
import { Contacts } from '@ionic-native/contacts';
import { Device } from '@ionic-native/device';
import { Diagnostic } from '@ionic-native/diagnostic';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Globalization } from '@ionic-native/globalization';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Keyboard } from '@ionic-native/keyboard';
import { Media } from '@ionic-native/media';
import { MediaCapture } from '@ionic-native/media-capture';
import { Network } from '@ionic-native/network';
import { OneSignal } from '@ionic-native/onesignal';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { StatusBar } from '@ionic-native/status-bar';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Vibration } from '@ionic-native/vibration';
import { VideoCapturePlus } from '@ionic-native/video-capture-plus';
import { VideoEditor } from '@ionic-native/video-editor';
import { VideoPlayer } from '@ionic-native/video-player';
import { IonicStorageModule } from '@ionic/storage';
import { MomentModule } from 'angular2-moment';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ElasticModule } from 'ng-elastic';
import { OrderModule } from 'ngx-order-pipe';
import { ComponentsModule } from '../components/components.module';
import { AboutPageModule } from '../pages/about/about.module';
import { AccountPageModule } from '../pages/account/account.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { FormsPageModule } from '../pages/forms/forms.module';
import { AdvanceRequestPageModule } from '../pages/forms/advance-request/advance-request.module';
import { LeaveApplicationPageModule } from '../pages/forms/leave-application/leave-application.module';
import { ChangePasswordPageModule } from "../pages/account/change-password/change-password.module";
import { EditProfilePageModule } from "../pages/account/edit-profile/edit-profile.module";
import { NotificationPreferencesPageModule } from "../pages/account/notification-preferences/notification-preferences.module";
import { ChatOptionsPageModule } from "../pages/chat/chat-options/chat-options.module";
import { SavedMediaPageModule } from "../pages/chat/chat-options/saved-media/saved-media.module";
import { ChatReadModalPageModule } from "../pages/chat/chat-read-modal/chat-read-modal.module";
import { ChatPageModule } from "../pages/chat/chat.module";
import { ContactDetailPageModule } from '../pages/chat/contact-detail/contact-detail.module';
import { ForwardMessagePageModule } from '../pages/chat/forward-message/forward-message.module';
import { RatingPageModule } from '../pages/chat/rating/rating.module';
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { CreateTagPageModule } from '../pages/create-tag/create-tag.module';
import { TagPageModule } from '../pages/create-tag/tag/tag.module';
import { CreateUserPageModule } from '../pages/create-user/create-user.module';
import { UsersPageModule } from '../pages/create-user/users/users.module';
import { FlashPageModule } from '../pages/flash/flash.module';
import { ForgotPasswordPageModule } from '../pages/forgot-password/forgot-password.module';
import { AddFlashPageModule } from '../pages/group/add-flash/add-flash.module';
import { GroupOptionsPageModule } from '../pages/group/group-options/group-options.module';
import { GroupPageModule } from '../pages/group/group.module';
import { HelpPageModule } from '../pages/help/help.module';
import { DueTopicsPageModule } from '../pages/home/due-topics/due-topics.module';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { MyPendingApprovalPageModule } from '../pages/my-pending-approval/my-pending-approval.module';
import { CreateGroupPageModule } from '../pages/manage-group/create-group/create-group.module';
import { ManageGroupPageModule } from '../pages/manage-group/manage-group.module';
import { CloseTopicPageModule } from '../pages/topic/close-topic/close-topic.module';
import { CreateTopicPageModule } from '../pages/topic/create-topic/create-topic.module';
import { ManageParticipantsPageModule } from "../pages/topic/create-topic/manage-participants/manage-participants.module";
import { DailyShedulePageModule } from '../pages/topic/daily-shedule/daily-shedule.module';
import { ForwardTopicPageModule } from '../pages/topic/forward-topic/forward-topic.module';
import { TopicOptionsPageModule } from '../pages/topic/topic-options/topic-options.module';
import { TopicPageModule } from '../pages/topic/topic.module';
import { RequestDetailPageModule } from '../pages/request-detail/request-detail.module';
import { TutorialPageModule } from '../pages/tutorial/tutorial.module';
import { SalarySlipPageModule } from '../pages/salary-slip/salary-slip.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { PipesModule } from "../pipes/pipes.module";
import { CommonProvider } from "../providers/common/common";
import { ConnectionProvider } from '../providers/connection/connection';
import { DateProvider } from '../providers/date/date';
import { FileOpsProvider } from '../providers/file-ops/file-ops';
import { FirebaseTransactionProvider } from '../providers/firebase-transaction/firebase-transaction';
import { FlashNewsProvider } from '../providers/flash-news/flash-news';
import { NotificationsProvider } from "../providers/notifications/notifications";
import { ReadMessageProvider } from '../providers/read-message/read-message';
import { CalendarPageModule } from '../pages/calendar/calendar.module';
import { PendingRequestPageModule } from '../pages/pending-request/pending-request.module';
import { TranslateServiceProvider } from '../providers/translate-service/translate-service';
import { UserProvider } from '../providers/user/user';
import { UserAutoCompleteService } from './../pages/topic/create-topic/user-auto-complete';
import { MyApp } from './app.component';
import { GroupsPageModule } from '../pages/groups/groups.module';
import { OTPageModule } from '../pages/forms/o-t/o-t.module';
import { OfflineStorageProvider } from '../providers/offline-storage/offline-storage';

@NgModule({
    declarations: [
        MyApp,
        // OverlayPortal,
        // ClickBlock,
        // IonicApp
    ],
    imports: [
    
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            mode: 'md',
            tabsHideOnSubPages: true,
        }),
        HttpModule,
        IonicStorageModule.forRoot({
            name: '__messenger_illusion_db',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        }),
        IonicImageViewerModule,
        AboutPageModule,
        AddFlashPageModule,
        CreateTagPageModule,
        GroupsPageModule,
        CreateUserPageModule,
        FormsPageModule,
        OTPageModule,
        AdvanceRequestPageModule,
        LeaveApplicationPageModule,
        AccountPageModule,
        CloseTopicPageModule,
        TopicPageModule,
        UsersPageModule,
        ChangePasswordPageModule,
        ChatPageModule,
        ChatReadModalPageModule,
        ContactUsPageModule,
        CreateTopicPageModule,
        EditProfilePageModule,
        ForgotPasswordPageModule,
        ForwardMessagePageModule,
        TagPageModule,
        ForwardTopicPageModule,
        GroupPageModule,
        GroupOptionsPageModule,
        ContactDetailPageModule,
        DueTopicsPageModule,
        HelpPageModule,
        HomePageModule,
        LoginPageModule,
        ManageParticipantsPageModule,
        NotificationPreferencesPageModule,
        SavedMediaPageModule,
        ChatOptionsPageModule,
        TopicOptionsPageModule,
        TutorialPageModule,
        WelcomePageModule,
        MomentModule,
        ElasticModule,
        FlashPageModule,
        OrderModule,
        ComponentsModule,
        CreateGroupPageModule,
        PipesModule,
        CalendarPageModule,
        ManageGroupPageModule,
        DailyShedulePageModule,
        RatingPageModule,
        SalarySlipPageModule,
        PendingRequestPageModule,
        MyPendingApprovalPageModule,
        RequestDetailPageModule,
        TabsPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ConnectionProvider,
        UserProvider,
        FirebaseTransactionProvider,
        Network,
        Keyboard,
        SplashScreen,
        Diagnostic,
        Clipboard,
        SQLite,
        CallNumber,
        VideoPlayer,
        Badge,
        Contacts,
        Device,
        InAppBrowser,
        Camera,
        FileTransfer,
        FileChooser,
        FilePath,
        File,
        MediaCapture,
        Media,
        Vibration,
        VideoCapturePlus,
        StreamingMedia,
        VideoEditor,
        UniqueDeviceID,
        OfflineStorageProvider,
        PhotoLibrary,
        Globalization,
        CommonProvider,
        OneSignal,
        AndroidPermissions,
        NotificationsProvider,
        FileOpener,
        FileOpsProvider,
        PhotoViewer,
        UserAutoCompleteService,
        DateProvider,
        FlashNewsProvider,
        TranslateServiceProvider,
        ReadMessageProvider,
    OfflineStorageProvider,

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
