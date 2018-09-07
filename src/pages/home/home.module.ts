import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../components/components.module";
<<<<<<< HEAD
import { MomentModule } from 'angular2-moment';
import { PipesModule } from '../../pipes/pipes.module';
=======
import { PipesModule } from '../../pipes/pipes.module';
import { HomePage } from './home';
>>>>>>> master

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
