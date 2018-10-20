import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { DueTopicsPage } from './due-topics';

@NgModule({
  declarations: [
    DueTopicsPage,
  ],
  imports: [
    IonicPageModule.forChild(DueTopicsPage),
    ComponentsModule

  ],
})
export class DueTopicsPageModule { }
