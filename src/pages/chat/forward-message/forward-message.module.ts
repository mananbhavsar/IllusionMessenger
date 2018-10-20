import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForwardMessagePage } from './forward-message';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ForwardMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(ForwardMessagePage),
    ComponentsModule
  ],
})
export class ForwardMessagePageModule {}
