import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashPage } from './flash';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  declarations: [
    FlashPage,
  ],
  imports: [
    IonicPageModule.forChild(FlashPage),
    ComponentsModule,
    PipesModule
  ],
})
export class FlashPageModule {}
