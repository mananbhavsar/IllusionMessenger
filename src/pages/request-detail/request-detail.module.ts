import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestDetailPage } from './request-detail';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    RequestDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestDetailPage),
    ComponentsModule,
    PipesModule
  ],
})
export class RequestDetailPageModule {}
