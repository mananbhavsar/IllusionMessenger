import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingRequestPage } from './pending-request';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PendingRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingRequestPage),
    ComponentsModule
  ],
})
export class PendingRequestPageModule {}
