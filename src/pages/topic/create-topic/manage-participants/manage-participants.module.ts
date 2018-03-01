import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageParticipantsPage } from './manage-participants';

@NgModule({
  declarations: [
    ManageParticipantsPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageParticipantsPage),
  ],
})
export class ManageParticipantsPageModule {}
