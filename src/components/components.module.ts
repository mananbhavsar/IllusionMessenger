import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { IonicPageModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { PipesModule } from './../pipes/pipes.module';
import { AttachmentComponent } from './attachment/attachment';
import { CallFabComponent } from './call-fab/call-fab';
import { CenterSpinnerComponent } from './center-spinner/center-spinner';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail';
import { EmptyComponent } from './empty/empty';
import { FlashNewsComponent } from './flash-news/flash-news';
import { HeaderComponent } from './header/header';
import { InternetStatusComponent } from './internet-status/internet-status';
import { LogoComponent } from "./logo/logo";
import { ModalToolbarComponent } from './modal-toolbar/modal-toolbar';
import { OrComponent } from "./or/or";
import { ProgressBarComponent } from "./progress-bar/progress-bar";
import { RatingComponent } from './rating/rating';
import { ReachUsComponent } from './reach-us/reach-us';
import { RefreshComponent } from './refresh/refresh';
import { TitleComponent } from './title/title';
import { TopicComponent } from './topic/topic';


@NgModule({
    declarations: [EmptyComponent,
        ReachUsComponent,
        CenterSpinnerComponent,
        HeaderComponent,
        RefreshComponent,
        LogoComponent,
        OrComponent,
        ProgressBarComponent,
        CallFabComponent,
        ChatBubbleComponent,
        FlashNewsComponent,
        TopicComponent,
        TitleComponent,
        ModalToolbarComponent,
        AttachmentComponent,
        RatingComponent,
        InternetStatusComponent,
        DashboardDetailComponent
    ],
    imports: [
        MomentModule,
        IonicImageViewerModule,
        IonicPageModule.forChild(EmptyComponent),
        IonicPageModule.forChild(ReachUsComponent),
        IonicPageModule.forChild(CenterSpinnerComponent),
        IonicPageModule.forChild(HeaderComponent),
        IonicPageModule.forChild(RefreshComponent),
        IonicPageModule.forChild(LogoComponent),
        IonicPageModule.forChild(OrComponent),
        IonicPageModule.forChild(ProgressBarComponent),
        IonicPageModule.forChild(CallFabComponent),
        IonicPageModule.forChild(ChatBubbleComponent),
        IonicPageModule.forChild(FlashNewsComponent),
        IonicPageModule.forChild(TopicComponent),
        IonicPageModule.forChild(TitleComponent),
        IonicPageModule.forChild(ModalToolbarComponent),
        IonicPageModule.forChild(AttachmentComponent),
        IonicPageModule.forChild(RatingComponent),
        IonicPageModule.forChild(DashboardDetailComponent),
        PipesModule,
    ],
    exports: [
        EmptyComponent,
        ReachUsComponent,
        CenterSpinnerComponent,
        HeaderComponent,
        RefreshComponent,
        LogoComponent,
        OrComponent,
        ProgressBarComponent,
        CallFabComponent,
        ChatBubbleComponent,
        FlashNewsComponent,
        TopicComponent,
        TitleComponent,
        ModalToolbarComponent,
        RatingComponent,
        AttachmentComponent,
        InternetStatusComponent,
        DashboardDetailComponent
    ]
})
export class ComponentsModule { }
