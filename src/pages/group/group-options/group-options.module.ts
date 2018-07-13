import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { GroupOptionsPage } from './group-options';

@NgModule({
  declarations: [
    GroupOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupOptionsPage),
    ComponentsModule,
  ],
})
export class GroupOptionsPageModule {}
