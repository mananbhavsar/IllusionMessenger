import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingApprovalPage } from './pending-approval';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PendingApprovalPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingApprovalPage),
    ComponentsModule
  ],
})
export class PendingApprovalPageModule {}
