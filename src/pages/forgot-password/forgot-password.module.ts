import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotPasswordPage } from './forgot-password';
import { ReachUsComponent } from '../../components/reach-us/reach-us';

@NgModule({
  declarations: [
    ForgotPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotPasswordPage),
    ReachUsComponent
  ],
})
export class ForgotPasswordPageModule {}
