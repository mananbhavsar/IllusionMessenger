import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvanceRequestPage } from './advance-request';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    AdvanceRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvanceRequestPage),
    ComponentsModule
  ],
})
export class AdvanceRequestPageModule {}
