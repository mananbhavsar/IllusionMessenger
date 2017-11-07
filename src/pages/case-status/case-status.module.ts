import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaseStatusPage } from './case-status';

import { ComponentsModule } from "../../components/components.module";
@NgModule({
  declarations: [
    CaseStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(CaseStatusPage),
    ComponentsModule,
  ]
})
export class CaseStatusPageModule {}
