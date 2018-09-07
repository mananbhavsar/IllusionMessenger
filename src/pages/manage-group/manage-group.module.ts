import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageGroupPage } from './manage-group';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ManageGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageGroupPage),
    ComponentsModule
  ],
})
export class ManageGroupPageModule {}
