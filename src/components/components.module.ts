import { NgModule } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { MomentModule } from 'angular2-moment';
import { IonicPageModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { PipesModule } from './../pipes/pipes.module';
import { CallFabComponent } from './call-fab/call-fab';
import { CenterSpinnerComponent } from './center-spinner/center-spinner';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble';
import { EmptyComponent } from './empty/empty';
import { FlashNewsComponent } from './flash-news/flash-news';
import { HeaderComponent } from './header/header';
import { LogoComponent } from "./logo/logo";
import { ModalToolbarComponent } from './modal-toolbar/modal-toolbar';
import { OrComponent } from "./or/or";
import { ProgressBarComponent } from "./progress-bar/progress-bar";
import { ReachUsComponent } from './reach-us/reach-us';
import { RefreshComponent } from './refresh/refresh';
import { TitleComponent } from './title/title';
import { TopicComponent } from './topic/topic';
import { DashboardComponent } from './dashboard/dashboard';
import { AttachmentComponent } from './attachment/attachment';


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
        DashboardComponent,
        AttachmentComponent
    ],
    imports: [
        MomentModule,
        IonicImageViewerModule,
        TranslateModule,
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
        TranslateModule,
        FlashNewsComponent,
        TopicComponent,
        TitleComponent,
        ModalToolbarComponent,
        DashboardComponent,
        AttachmentComponent
    ]
})
export class ComponentsModule { }
