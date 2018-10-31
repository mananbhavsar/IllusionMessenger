import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDetailPage } from './contact-detail';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ContactDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactDetailPage),
    ComponentsModule
  ],
})
export class ContactDetailPageModule {}
