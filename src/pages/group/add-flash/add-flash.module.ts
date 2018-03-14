import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFlashPage } from './add-flash';
import { MomentModule } from 'angular2-moment';

import { DatetimePickerModule } from 'ion-datetime-picker';

@NgModule({
  declarations: [
    AddFlashPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFlashPage),
    MomentModule,
    DatetimePickerModule,
  ],
})
export class AddFlashPageModule { }
