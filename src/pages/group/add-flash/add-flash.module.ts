import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { AddFlashPage } from './add-flash';

@NgModule({
  declarations: [
    AddFlashPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFlashPage),
    MomentModule,
    ComponentsModule,
  ],
})
export class AddFlashPageModule { }
