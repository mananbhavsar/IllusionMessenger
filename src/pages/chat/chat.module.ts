import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';

import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";
import { DirectivesModule } from "../../directives/directives.module";
import { MomentModule } from 'angular2-moment';
import { ElasticModule } from 'ng-elastic';

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
  ],
})
export class ChatPageModule { }
