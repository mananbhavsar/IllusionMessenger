import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfficeListPage } from './office-list';

import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    OfficeListPage,
  ],
  imports: [
    IonicPageModule.forChild(OfficeListPage),
    ComponentsModule,
    PipesModule,
  ],
})
export class OfficeListPageModule { }
