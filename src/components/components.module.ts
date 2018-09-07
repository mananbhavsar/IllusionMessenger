<<<<<<< HEAD
import { PipesModule } from './../pipes/pipes.module';
import { MomentModule } from 'angular2-moment';
=======
>>>>>>> master
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { IonicPageModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { PipesModule } from './../pipes/pipes.module';
import { AttachmentComponent } from './attachment/attachment';
import { CallFabComponent } from './call-fab/call-fab';
import { CenterSpinnerComponent } from './center-spinner/center-spinner';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble';
import { DashboardComponent } from './dashboard/dashboard';
import { EmptyComponent } from './empty/empty';
import { FlashNewsComponent } from './flash-news/flash-news';
import { HeaderComponent } from './header/header';
import { LogoComponent } from "./logo/logo";
import { ModalToolbarComponent } from './modal-toolbar/modal-toolbar';
import { OrComponent } from "./or/or";
import { ProgressBarComponent } from "./progress-bar/progress-bar";
<<<<<<< HEAD
import { CallFabComponent } from './call-fab/call-fab';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { TranslateModule } from "@ngx-translate/core";
import { FlashNewsComponent } from './flash-news/flash-news';
import { AttachmentComponent } from './attachment/attachment';
import { TitleComponent } from './title/title';
import { ModalToolbarComponent } from './modal-toolbar/modal-toolbar';

=======
import { ReachUsComponent } from './reach-us/reach-us';
import { RefreshComponent } from './refresh/refresh';
import { TitleComponent } from './title/title';
import { TopicComponent } from './topic/topic';
import { RatingComponent } from './rating/rating';
>>>>>>> master


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
<<<<<<< HEAD
        AttachmentComponent,
        TitleComponent,
        ModalToolbarComponent
=======
        TopicComponent,
        TitleComponent,
        ModalToolbarComponent,
        DashboardComponent,
        AttachmentComponent,
        RatingComponent
>>>>>>> master
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
<<<<<<< HEAD
        IonicPageModule.forChild(AttachmentComponent),
        IonicPageModule.forChild(TitleComponent),
        IonicPageModule.forChild(ModalToolbarComponent),
=======
        IonicPageModule.forChild(TopicComponent),
        IonicPageModule.forChild(TitleComponent),
        IonicPageModule.forChild(ModalToolbarComponent),
        IonicPageModule.forChild(AttachmentComponent),
        IonicPageModule.forChild(RatingComponent),
>>>>>>> master
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
<<<<<<< HEAD
        TranslateModule,
        FlashNewsComponent,
        AttachmentComponent,
        TitleComponent,
        ModalToolbarComponent
        
=======
        FlashNewsComponent,
        TopicComponent,
        TitleComponent,
        ModalToolbarComponent,
        DashboardComponent,
        RatingComponent,
        AttachmentComponent
>>>>>>> master
    ]
})
export class ComponentsModule { }
