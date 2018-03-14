import { PipesModule } from './../../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTopicPage } from './create-topic';
import { ComponentsModule } from '../../../components/components.module';
import { MomentModule } from 'angular2-moment';

import { DatetimePickerModule } from 'ion-datetime-picker';

@NgModule({
  declarations: [
    CreateTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTopicPage),
    ComponentsModule,
    MomentModule,
    PipesModule,
    DatetimePickerModule,
  ],
})
export class CreateTopicPageModule { }
