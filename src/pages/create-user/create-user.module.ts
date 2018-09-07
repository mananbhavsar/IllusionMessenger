import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateUserPage } from './create-user';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
  declarations: [
    CreateUserPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateUserPage),
    ComponentsModule
  ],
})
export class CreateUserPageModule {}
