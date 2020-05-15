import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from "../../components/components.module";
import { DirectivesModule } from "../../directives/directives.module";
import { PipesModule } from '../../pipes/pipes.module';
import { LoginPage } from './login';


@NgModule({
    declarations: [
        LoginPage,
    ],
    imports: [
        IonicPageModule.forChild(LoginPage),
        ComponentsModule,
        PipesModule,
        DirectivesModule
    ],
    entryComponents: [
        LoginPage,
    ]
})
export class LoginPageModule { }
