import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, Events } from 'ionic-angular';

import { Global } from '../../app/global';

import { ConnectionProvider } from '../../providers/connection/connection';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  user: any = null;
  client: string = null;
  global: any = null;
  data: any = {};

  constructor(
    public navCtrl: NavController,
    private _user: UserProvider,
    public connection: ConnectionProvider,
    public viewCtrl: ViewController,
    public events: Events,
  ) {
    this.global = Global;
  }

  ionViewDidLoad() {
    this._user.getUser().then((user) => {
      this.user = user;

    });
  }

  onUpdate() {
    //getting data for Setup
    this.connection.doPost('JobSeekers/profile/' + this.user.user.id, this.data, 'Updating').then(response => {
      this.events.publish('loading:close');
      this.viewCtrl.dismiss(response);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss(null);
  }

}
