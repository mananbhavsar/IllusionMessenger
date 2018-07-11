import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatOptionsPage } from './chat-options';
import { MomentModule } from 'angular2-moment';
import { PipesModule } from '../../../pipes/pipes.module';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ChatOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatOptionsPage),
    MomentModule,
    PipesModule,
    ComponentsModule
  ],
})
export class ChatOptionsPageModule { }
