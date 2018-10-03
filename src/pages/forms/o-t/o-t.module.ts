import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OTPage } from './o-t';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    OTPage,
  ],
  imports: [
    IonicPageModule.forChild(OTPage),
    ComponentsModule
  ],
})
export class OTPageModule {}
