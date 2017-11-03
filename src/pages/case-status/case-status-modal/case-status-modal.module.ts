import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaseStatusModalPage } from './case-status-modal';

@NgModule({
  declarations: [
    CaseStatusModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CaseStatusModalPage),
  ],
})
export class CaseStatusModalPageModule {}
