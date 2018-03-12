import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatOptionsPage } from './chat-options';
import { MomentModule } from 'angular2-moment';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ChatOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatOptionsPage),
    MomentModule,
    PipesModule,
  ],
})
export class ChatOptionsPageModule {}
