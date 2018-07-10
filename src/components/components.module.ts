import { PipesModule } from './../pipes/pipes.module';
import { MomentModule } from 'angular2-moment';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmptyComponent } from './empty/empty';
import { ReachUsComponent } from './reach-us/reach-us';
import { CenterSpinnerComponent } from './center-spinner/center-spinner';
import { HeaderComponent } from './header/header';
import { RefreshComponent } from './refresh/refresh';
import { LogoComponent } from "./logo/logo";
import { OrComponent } from "./or/or";
import { ProgressBarComponent } from "./progress-bar/progress-bar";
import { CallFabComponent } from './call-fab/call-fab';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { TranslateModule } from "@ngx-translate/core";
import { FlashNewsComponent } from './flash-news/flash-news';
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
        AttachmentComponent
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
        AttachmentComponent
        
    ]
})
export class ComponentsModule { }
