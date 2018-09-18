import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from '../../pipes/pipes.module';
import { DashboardPage } from './dashboard';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    ComponentsModule,
    PipesModule,
  ],
})
export class DashboardPageModule { }
