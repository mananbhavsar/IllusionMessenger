import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashPage } from './flash';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    FlashPage,
  ],
  imports: [
    IonicPageModule.forChild(FlashPage),
    ComponentsModule
  ],
})
export class FlashPageModule {}
