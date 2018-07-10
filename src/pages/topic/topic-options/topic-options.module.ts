import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicOptionsPage } from './topic-options';

@NgModule({
  declarations: [
    TopicOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicOptionsPage),
  ],
})
export class TopicOptionsPageModule {}
