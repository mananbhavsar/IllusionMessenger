import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverTimePage } from './over-time';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    OverTimePage,
  ],
  imports: [
    IonicPageModule.forChild(OverTimePage),
    ComponentsModule
  ],
})
export class OverTimePageModule {}
