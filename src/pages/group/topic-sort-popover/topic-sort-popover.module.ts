import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicSortPopoverPage } from './topic-sort-popover';

@NgModule({
  declarations: [
    TopicSortPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicSortPopoverPage),
  ],
})
export class TopicSortPopoverPageModule {}
