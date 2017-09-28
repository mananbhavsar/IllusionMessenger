import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ReachUsComponent } from '../../components/reach-us/reach-us';
@NgModule({
    declarations: [
        LoginPage,
    ],
    imports: [
        IonicPageModule.forChild(LoginPage),
        ReachUsComponent
    ],
})
export class LoginPageModule { }
