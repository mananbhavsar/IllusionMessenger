import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DueTopicsPage } from './due-topics';
import { ComponentsModule } from '../../components/components.module';

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
