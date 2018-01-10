import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationPreferencesPage } from './notification-preferences';

@NgModule({
  declarations: [
    NotificationPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationPreferencesPage),
  ],
})
export class NotificationPreferencesPageModule {}
