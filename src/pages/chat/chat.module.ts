import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';

import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";
import { DirectivesModule } from "../../directives/directives.module";
import { MomentModule } from 'angular2-moment';
import { ElasticModule } from 'ng-elastic';
import { OrderModule } from 'ngx-order-pipe';
import { LongPressModule } from 'ionic-long-press';

@NgModule({
  declarations: [
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    ComponentsModule,
    MomentModule,
    DirectivesModule,
    ElasticModule,
    PipesModule,
    OrderModule,
    LongPressModule,
  ],
})
export class ChatPageModule { }
