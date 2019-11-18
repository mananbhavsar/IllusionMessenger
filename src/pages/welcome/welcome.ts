import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Global } from '../../app/global';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { TutorialPage } from '../tutorial/tutorial';



@IonicPage()
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {
    sendToHomeFlag: boolean = false;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public user: UserProvider,
        public events: Events,
    ) {
        this.sendToHomeFlag = this.navParams.data === true;
    }

    ionViewDidLoad() {
        //checking if logged already
        this.user.hasLoggedIn().then((user) => {
            if (user) {
                if (this.sendToHomeFlag) {
                    this.navCtrl.setRoot(HomePage);
                }
            } else {
                //checking if Tutorial required
                if (Global.tutorial) {
                    //if tutorial seen then sending to Login
                    this.user.hasTutorialSeen().then((seen) => {
                        if (seen) {
                            this.navCtrl.setRoot(LoginPage);
                        } else {
                            this.user.setTutorialSeen(true);
                            this.navCtrl.setRoot(TutorialPage);
                        }
                    });
                } else {
                    this.user.setTutorialSeen(true);
                    this.navCtrl.setRoot(LoginPage);
                }
            }

        }).catch((error) => { });
    }

}
