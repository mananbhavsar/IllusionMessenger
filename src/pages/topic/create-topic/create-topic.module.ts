import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTopicPage } from './create-topic';
import { ComponentsModule } from '../../../components/components.module';
import { MomentModule } from 'angular2-moment';
import { AutoCompleteModule } from 'ionic2-auto-complete-ng5';

@NgModule({
  declarations: [
    CreateTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTopicPage),
    ComponentsModule,
    AutoCompleteModule,
     MomentModule
  ],
})
export class CreateTopicPageModule {}
