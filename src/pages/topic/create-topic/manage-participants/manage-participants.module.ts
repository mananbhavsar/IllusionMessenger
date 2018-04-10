import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageParticipantsPage } from './manage-participants';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    ManageParticipantsPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageParticipantsPage),
    OrderModule,
  ],
})
export class ManageParticipantsPageModule {}
