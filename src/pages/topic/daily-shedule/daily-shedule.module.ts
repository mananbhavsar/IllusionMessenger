import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyShedulePage } from './daily-shedule';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    DailyShedulePage,
  ],
  imports: [
    IonicPageModule.forChild(DailyShedulePage),
    ComponentsModule
  ],
})
export class DailyShedulePageModule {}
