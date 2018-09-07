import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { IonicPageModule } from 'ionic-angular';
import { ChatOptionsPage } from './chat-options';
import { MomentModule } from 'angular2-moment';
import { PipesModule } from '../../../pipes/pipes.module';
import { ComponentsModule } from '../../../components/components.module';
=======
import { MomentModule } from 'angular2-moment';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { ChatOptionsPage } from './chat-options';
>>>>>>> master

@NgModule({
  declarations: [
    ChatOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatOptionsPage),
    MomentModule,
    PipesModule,
<<<<<<< HEAD
    ComponentsModule
=======
    ComponentsModule,
>>>>>>> master
  ],
})
export class ChatOptionsPageModule { }
