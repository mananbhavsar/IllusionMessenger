import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { ChatOptionsPage } from './chat-options';

@NgModule({
  declarations: [
    ChatOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatOptionsPage),
    MomentModule,
    PipesModule,
    ComponentsModule,
  ],
})
export class ChatOptionsPageModule { }
