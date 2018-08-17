import { Component } from '@angular/core';
import { Contact, ContactField, ContactName, Contacts } from '@ionic-native/contacts';
import { IonicPage, Events, NavController, NavParams, Platform, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {
  title: string = 'loading';
  contactData: any;
  isBrowser: boolean = false;
  constructor(public navCtrl: NavController,
    public contacts: Contacts,
    public navParams: NavParams,
    public platform: Platform,
    public viewCtrl: ViewController,
    public events: Events
  ) {
    this.contactData = this.navParams.data.Contact;
    this.isBrowser = this.platform.is('core');
    this.setTitle();
  }

  ionViewWillEnter() {

  }

  saveContact() {
    //create instance
    let contact: Contact = this.contacts.create();
    contact.displayName = this.contactData.displayName;
    contact.nickname = this.contactData.displayName;
    //name
    contact.name = new ContactName(
      this.contactData.formatted,
      this.contactData.familyName,
      this.contactData.givenName,
      this.contactData.displayName
    );
    //number
    if (this.contactData.phoneNumbers) {
      let contactNumbers = [];
      this.contactData.phoneNumbers.forEach((number) => {
        contactNumbers.push(new ContactField(number.type, number.value));
      });
      contact.phoneNumbers = contactNumbers;
    }

    //email
    if (this.contactData.emails) {
      let emails = [];
      this.contactData.emails.forEach((email) => {
        emails.push(new ContactField(email.type, email.value));
      });
      contact.emails = emails;
    }
    //save
    contact.save().then(contact => {
      this.viewCtrl.dismiss(contact);
      this.events.publish('toast:create', 'Contact Saved Successfully');
    }).catch(error => {
    });
  }

  dismiss(event) {
    this.viewCtrl.dismiss();
  }

  setTitle() {
    this.title = null;
    setTimeout(() => {
     this.title = 'View Contact';
    });
  }

  getTitle() {
    return this.title;
  }

}
