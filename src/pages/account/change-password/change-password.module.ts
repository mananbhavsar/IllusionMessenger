import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../../components/components.module";
import { PipesModule } from '../../../pipes/pipes.module';
import { ChangePasswordPage } from './change-password';
<<<<<<< HEAD
import { ComponentsModule } from "../../../components/components.module";
=======

>>>>>>> master

@NgModule({
  declarations: [
    ChangePasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangePasswordPage),
<<<<<<< HEAD
    ComponentsModule
=======
    ComponentsModule,
    PipesModule,
>>>>>>> master
  ],
})
export class ChangePasswordPageModule { }
