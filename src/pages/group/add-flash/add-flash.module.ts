import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFlashPage } from './add-flash';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    AddFlashPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFlashPage),
    MomentModule,
  ],
})
export class AddFlashPageModule { }
