import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, Events, NavParams, ViewController } from 'ionic-angular';
import * as _ from 'underscore';
import { ConnectionProvider } from '../../providers/connection/connection';

@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {
  createUserForm: FormGroup;
  title: string = 'Create User';
  userBtn: string = 'Create User';
  UserID: number;
  type: string = 'password';
  query: any;
  page: number = 0;
  showPassword: boolean = false;
  searchInputBtn: boolean = false;
  tags: any = [];
  userTagsMap: any = {};
  tagsSelected: any = [];
  tagList: any = [];
  status : any = 'Activated';
  IsDeactivate : boolean = false;
  readonly:boolean = false;
  usersTagList : any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public events: Events,
    public connection: ConnectionProvider,
    public viewCntl: ViewController
  ) {
    this.getTagList();
    this.createUserForm = this.formBuilder.group({
      User: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      UserCode: ['', [Validators.required, Validators.maxLength(10)]],
      EmailID: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      PhoneNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
    });

    if (!_.isEmpty(this.navParams.data.User)) {
      this.userBtn = 'Update';
      this.type = 'password';
      this.UserID = this.navParams.data.UserID;   
      this.usersTagList = this.navParams.data.TagList;
      if(this.navParams.data.IsDeactivate === 'true'){
       this.status = 'Deactivated';
       this.IsDeactivate = true;
      }
      this.createUserForm.setValue({
        User: this.navParams.data.User,
        UserCode: this.navParams.data.UserCode,
        EmailID: this.navParams.data.EmailID || '',
        PhoneNo: this.navParams.data.PhoneNo || '',
        Password: this.navParams.data.Password || '',
      });
      for(let i = 0; i < this.usersTagList.length; i++){
        this.tagsSelected.push(this.usersTagList[i]);
      }      
      this.readonly = true;
    }
  }

  passwordShow() {
    if (this.type === 'text') {
      this.type = 'password';
      this.showPassword = false;
    } else if (this.type === 'password') {
      this.type = 'text';
      this.showPassword = true;
    }
  }

  userStatus(){
    if(this.IsDeactivate){
      this.IsDeactivate = false;
      this.status = 'Activated';
    } else if(!this.IsDeactivate){
      this.IsDeactivate = true;
      this.status = 'Deactivated';
    }
  }

  in_array(array, tagID) {
    if (array && tagID) {
      return array.some((item) => {
        return item.TagID === tagID;
      });
    }
  }


  getTagList() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Chat/GetTagList', {
          Query: this.query,
          PageNumber: this.page,
          RowsPerPage: 20
        }, false).then((response: any) => {
          if (response.TagList.length > 0) {
            response.TagList.forEach(list => {
              this.tags.push(list);
            });
            this.page++;
            resolve(true);
          } else {
            this.page = -1;
            resolve(false);
          }
        }).catch((error) => {
          this.searchInputBtn = true;
          this.page = -1;
          this.events.publish('toast:create', error);
          reject();
        });
      }
    });
  }


  initializeItems() {
    this.page = 0;
    this.getTagList().catch(error => {
    });
  }

  onCancel(event) {
    this.query = null;
    this.initializeItems();
  }

  onClear(event) {
    this.query = null;
    this.initializeItems();
  }


  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;
    if (val && val.trim() != '') {
      // if the value is an empty string don't filter the items
      this.query = val;
      this.page = 0;
      this.tags = [];
      this.getTagList().catch(error => {
      });

    } else {
      this.tags = [];
      this.query = null;
      this.initializeItems();
    }
  }

  searchTag() {
    if (this.searchInputBtn) {
      this.tags = [];
      this.query = null;
      this.page = 0;
      this.initializeItems();
      this.searchInputBtn = false;
      return false;
    }
    this.searchInputBtn = true;
    return true;
  }


  getTagColor(id) {
    return 'tag-' + (id % 10);
  }

  tagClicked(tag) {
    if (!this.in_array(this.tagsSelected, tag.TagID)) {
      this.tagsSelected.push(tag);
    } else {
      if (this.in_array(this.tagsSelected, tag.TagID)) {
        this.tagsSelected.splice(this.tagsSelected.indexOf(tag), 1);
      }
    }
  }


  createUser() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateUpdateLogin', {
        User: this.createUserForm.get('User').value,
        UserCode: this.createUserForm.get('UserCode').value,
        Password: this.createUserForm.get('Password').value,
        EmailID: this.createUserForm.get('EmailID').value,
        PhoneNo: this.createUserForm.get('PhoneNo').value,
        TagID: this.tagsSelected.map(id => id.TagID)
      }).then((response: any) => {
        resolve(true);
        this.createUserForm.reset();
        this.dismiss(response);
      }).catch((erro) => {
        reject();
      })
    });
  }

  updateUser() {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/CreateUpdateLogin', {
        UserID: this.UserID,
        User: this.createUserForm.get('User').value,
        UserCode: this.createUserForm.get('UserCode').value,
        Password: this.createUserForm.get('Password').value,
        EmailID: this.createUserForm.get('EmailID').value,
        PhoneNo: this.createUserForm.get('PhoneNo').value,
        TagID: this.tagsSelected.map(id => id.TagID),
        IsDeactivate : this.IsDeactivate
      }).then((response: any) => {
        resolve(true);
        this.createUserForm.reset();
        this.dismiss(response);
      }).catch((erro) => {
        reject();
      })
    });
  }

  dismiss(event) {
    this.viewCntl.dismiss();
  }

  paginate(paginator) {
    this.getTagList().then(status => {
      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
    });
  }


}
