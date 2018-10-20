import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTagPage } from './create-tag';
import { ComponentsModule } from "../../components/components.module";


@NgModule({
  declarations: [
    CreateTagPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTagPage),
    ComponentsModule
  ],
})
export class CreateTagPageModule {}
