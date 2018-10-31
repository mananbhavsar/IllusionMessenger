import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForwardTopicPage } from './forward-topic';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ForwardTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(ForwardTopicPage),
    ComponentsModule
  ],
})
export class ForwardTopicPageModule {}
