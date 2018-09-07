import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatingPage } from './rating';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  declarations: [
    RatingPage,
  ],
  imports: [
    IonicPageModule.forChild(RatingPage),
    ComponentsModule
  ],
})
export class RatingPageModule {}
