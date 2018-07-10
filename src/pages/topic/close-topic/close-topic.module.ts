import { PipesModule } from './../../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CloseTopicPage } from './close-topic';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    CloseTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(CloseTopicPage),
    MomentModule,
    PipesModule,
  ],
})
export class CloseTopicPageModule { }
