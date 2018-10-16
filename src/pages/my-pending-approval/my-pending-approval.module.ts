import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPendingApprovalPage } from './my-pending-approval';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MyPendingApprovalPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPendingApprovalPage),
    ComponentsModule,
    PipesModule
  ],
})
export class MyPendingApprovalPageModule {}
