import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { IonicPageModule } from 'ionic-angular';
import { AddFlashPage } from './add-flash';
import { MomentModule } from 'angular2-moment';
import { ComponentsModule } from '../../../components/components.module';
=======
import { MomentModule } from 'angular2-moment';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { AddFlashPage } from './add-flash';
>>>>>>> master

@NgModule({
  declarations: [
    AddFlashPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFlashPage),
    MomentModule,
<<<<<<< HEAD
    ComponentsModule
=======
    ComponentsModule,
>>>>>>> master
  ],
})
export class AddFlashPageModule { }
