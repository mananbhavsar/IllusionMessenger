import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
<<<<<<< HEAD
=======
import { ComponentsModule } from '../../../components/components.module';
>>>>>>> master
import { GroupOptionsPage } from './group-options';

@NgModule({
  declarations: [
    GroupOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupOptionsPage),
<<<<<<< HEAD
=======
    ComponentsModule,
>>>>>>> master
  ],
})
export class GroupOptionsPageModule {}
