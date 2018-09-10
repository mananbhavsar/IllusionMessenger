import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalenderPage } from './calender';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CalenderPage,
  ],
  imports: [
    IonicPageModule.forChild(CalenderPage),
    ComponentsModule
  ],
})
export class CalenderPageModule {}
