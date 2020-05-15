import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviewPage } from './preview';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    PreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviewPage),
    ComponentsModule,
    PipesModule
  ],
})
export class PreviewPageModule {}
