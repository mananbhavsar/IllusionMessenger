import { Component } from '@angular/core';
import { IonicPage, Events, NavController, NavParams, ViewController } from 'ionic-angular';

import { UserProvider } from '../../../providers/user/user';
import { ConnectionProvider } from '../../../providers/connection/connection';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';

import { Global } from '../../../app/global';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  editProfileForm: FormGroup;
  submitted = false;
  global: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController,
    public user: UserProvider,
    public connection: ConnectionProvider,
    public events: Events,
    public formBuilder: FormBuilder,
    private network: Network,
    private storage: Storage,
  ) {
    this.global = Global;
    this.editProfileForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      official_email: [Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
      personal_email: ['', [Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]],
      emrgancy_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]],
      aadhar_number: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern(/^\d{12}$/)]]
    });
  }

  ionViewDidLoad() {
    //checking if offline
    if (this.network.type === 'none') {
      this.dismiss('Not available in Offline');
    } else {
      //getting profile data from server
      this.getData();
    }
  }

  getData() {
    this.connection.doPost('MobileApp/GetUserProfile').then(response => {
      this.editProfileForm.setValue({
        name: response[0].Displayname,
        personal_email: response[0].PersonalEmailID,
        official_email: response[0].OfficialEmailID,
        mobile_number: response[0].MobileNo,
        aadhar_number: response[0].AadharNo,
        emrgancy_number: response[0].EmergancyNo
      });
    }).catch(error => {
      this.dismiss(error);
    });
  }

  update() {
    //prevent dublicate submit
    if (this.submitted) {
      return false;
    }
    this.submitted = true;
    //updating
    this.connection.doPost('MobileApp/UserProfile_EditInfo', {
      Code: this.editProfileForm.get('code').value,
      DisplayName: this.editProfileForm.get('name').value,
      OfficialEmailID: this.editProfileForm.get('official_email').value,
      PersonalEmailID: this.editProfileForm.get('personal_email').value,
      MobileNo: this.editProfileForm.get('mobile_number').value,
      AadharNo: this.editProfileForm.get('aadhar_number').value,
      EmergancyNo: this.editProfileForm.get('emrgancy_number').value
    }, 'updating').then((response: any) => {
      if (response.Status) {
        this.events.publish('toast:create', response.Message);
        //set in User data
        this.storage.get('User').then(user => {
          if (user) {
            user.DisplayName = this.editProfileForm.get('name').value;
            user.Customer = this.editProfileForm.get('name').value;
            user.EmailID = this.editProfileForm.get('email').value;
            user.MobileNo = this.editProfileForm.get('mobile_number').value;

            this.storage.set('User', user).then(user => {
              this.dismiss(user);
              //publish user:updated event to all
              this.events.publish('user:changed', user);
            });
          } else {
            this.dismiss(null);
          }
        });
      } else {
        this.submitted = false;
        this.events.publish('toast:error', response.Message);
      }
    }).catch(error => {
      this.submitted = false;
    });
  }

  dismiss(data) {
    this.viewController.dismiss(data);
  }

}
