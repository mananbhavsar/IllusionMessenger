import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewController } from 'ionic-angular';


import { ConnectionProvider } from '../../providers/connection/connection';
@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {
  contact: { full_name?: string, mobile_number?: string, email_address?: string, message?: string } = {};
  contactForm: FormGroup;
  global: any = {};

  constructor(
    public navCtrl: NavController,
    public events: Events,
    public formBuilder: FormBuilder,
    public connection: ConnectionProvider,
    public viewCtrl: ViewController,
  ) {
    this.contactForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      mobile_number: ['', Validators.required],
      email_address: ['', Validators.required],
      message: ['', Validators.required],
    });
  }


  saveContactUs() {
    this.connection.doPost('Contacts/save', this.contact, 'sending details!').then(response => {
      this.events.publish('loading:close');
      this.dismiss(response);
    });
  }

  dismiss(data: any) {
    this.viewCtrl.dismiss(data);
  }

}
