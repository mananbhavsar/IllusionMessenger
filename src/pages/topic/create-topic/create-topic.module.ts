import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateTopicPage } from './create-topic';

@NgModule({
  declarations: [
    CreateTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTopicPage),
  ],
})
export class CreateTopicPageModule {}
