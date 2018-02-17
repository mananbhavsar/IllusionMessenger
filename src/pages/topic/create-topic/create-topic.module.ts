import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTopicPage } from './create-topic';
import { ComponentsModule } from '../../../components/components.module';

import { AutoCompleteModule } from 'ionic2-auto-complete-ng5';

@NgModule({
  declarations: [
    CreateTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTopicPage),
    ComponentsModule,
    AutoCompleteModule
  ],
})
export class CreateTopicPageModule {}
