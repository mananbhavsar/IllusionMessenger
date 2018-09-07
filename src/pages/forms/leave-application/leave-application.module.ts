import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaveApplicationPage } from './leave-application';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    LeaveApplicationPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaveApplicationPage),
    ComponentsModule
  ],
})
export class LeaveApplicationPageModule {}
