import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupOptionsPage } from './group-options';

@NgModule({
  declarations: [
    GroupOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupOptionsPage),
  ],
})
export class GroupOptionsPageModule {}
