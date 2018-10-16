import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
import { ChangePasswordPage } from './change-password';

@NgModule({
  declarations: [
    ChangePasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangePasswordPage),
    ComponentsModule,
    PipesModule,
  ],
})
export class ChangePasswordPageModule { }
