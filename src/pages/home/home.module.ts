import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from "../../components/components.module";
import { MomentModule } from 'angular2-moment';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        ComponentsModule,
        MomentModule,
        PipesModule,
    ],
})
export class HomePageModule { }
