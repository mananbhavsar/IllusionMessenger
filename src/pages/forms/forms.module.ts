import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsPage } from './forms';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FormsPage,
  ],
  imports: [
    IonicPageModule.forChild(FormsPage),
    ComponentsModule
  ],
})
export class FormsPageModule {}
