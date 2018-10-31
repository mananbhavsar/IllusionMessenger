import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupPage } from './group';
import { ComponentsModule } from '../../components/components.module';
import { MomentModule } from 'angular2-moment';

@NgModule({
  declarations: [
    GroupPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupPage),
    ComponentsModule,
    MomentModule,
    PipesModule,
  ],
})
export class GroupPageModule {}
