import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from '../../pipes/pipes.module';
import { ContactUsPage } from './contact-us';


@NgModule({
  declarations: [
    ContactUsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactUsPage),
    ComponentsModule,
    PipesModule,
  ],
  entryComponents: [
    ContactUsPage,
  ]
})
export class ContactUsPageModule { }
