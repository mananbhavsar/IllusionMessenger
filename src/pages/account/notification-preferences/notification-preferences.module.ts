import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
import { NotificationPreferencesPage } from './notification-preferences';


@NgModule({
  declarations: [
    NotificationPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationPreferencesPage),
    ComponentsModule,
    PipesModule,
  ],
})
export class NotificationPreferencesPageModule {}
