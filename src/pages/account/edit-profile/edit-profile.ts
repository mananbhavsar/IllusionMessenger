import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { Events, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Global } from '../../../app/global';
import { ConnectionProvider } from '../../../providers/connection/connection';
import { UserProvider } from '../../../providers/user/user';





@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  editProfileForm: FormGroup;
  submitted = false;
  global: any = {};
  userProfile: any;
  aadharNoExist : boolean = false;
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
    this.connection.doPost('Payroll/Get_Profile_Payroll').then((response : any) => {
      this.userProfile = response.Profile;
      if(response.Profile[0].AdharNumber === 'NA'){
        this.editProfileForm.patchValue({
          aadhar_number: 0
        });
      } else {
        this.editProfileForm.patchValue({
          aadhar_number: Number(response.Profile[0].AdharNumber)
        }); 
      }
      this.editProfileForm.patchValue({
        personal_email: response.Profile[0].PersonalEmail,
        official_email: response.Profile[0].OfficialEmail,
        mobile_number: response.Profile[0].MobileNo,
        emrgancy_number: response.Profile[0].EmergancyContactNumber
      });
      if(Number(response.Profile[0].AdharNumber)){
        this.aadharNoExist = true;
      }
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
    this.connection.doPost('Payroll/Set_Profile_Payroll', {
      EmployeeCode: this.userProfile[0].EmployeeCode,
      Name: this.userProfile[0].Name,
      OfficialEmail: this.userProfile[0].OfficialEmail,
      PersonalEmail: this.userProfile[0].PersonalEmail,
      MobileNo: this.userProfile[0].MobileNo,
      AdharNumber: this.userProfile[0].AdharNumber,
      EmergancyContactNumber: this.userProfile[0].EmergancyContactNumber
    }, 'updating').then((response: any) => {
      if (response.Status) {
        this.events.publish('toast:create', response.Message);
        //set in User data
        this.storage.get('User').then(user => {
          if (user) {
            user.Name = this.editProfileForm.get('name').value;
            user.Customer = this.editProfileForm.get('name').value;
            user.PersonalEmail = this.editProfileForm.get('personal_email').value;
            user.OfficialEmail = this.editProfileForm.get('official_email').value;
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
