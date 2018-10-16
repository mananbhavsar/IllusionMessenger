import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalarySlipPage } from './salary-slip';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SalarySlipPage,
  ],
  imports: [
    IonicPageModule.forChild(SalarySlipPage),
    ComponentsModule
  ],
})
export class SalarySlipPageModule {}
