import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateGroupPage } from './create-group';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    CreateGroupPage
    ],
  imports: [
    IonicPageModule.forChild(CreateGroupPage),
    ComponentsModule
    
  ],
})
export class CreateGroupPageModule { }
