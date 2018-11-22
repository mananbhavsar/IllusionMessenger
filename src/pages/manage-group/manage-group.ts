import { Component } from '@angular/core';
import { IonicPage, ModalController, Events, ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import { CreateGroupPage } from './create-group/create-group';
import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-manage-group',
  templateUrl: 'manage-group.html',
})
export class ManageGroupPage {
  page: number = 0;
  title: string = 'Manage Group';
  sort_by: string = '';
  sort_order: string = '';
  badges: any;
  groups: any = [];
  query: string;
  searchInputBtn: boolean = false;
  constructor(public navCtrl: NavController,
    public connection: ConnectionProvider,
    public navParams: NavParams,
    public modal: ModalController,
    public events: Events,
    public _network: Network,
    public storage: Storage,
    public actionSheetCntl: ActionSheetController) {
    this.getData();
  }


  getData() {
    return new Promise((resolve, reject) => {
      if (this._network.type === 'none') {
        this.storage.get('managegroups:offline').then((data: any) => {
          if (data) {
            this.groups = data;
            resolve(true);
          }
        });
      } else {
        if (this.page === -1) {
          reject();
        } else {
          this.connection.doPost('Chat/GetGroupDetail_Master', {
            Query: this.query,
            PageNumber: this.page,
            RowsPerPage: 20
          }, false).then((response: any) => {
            if (response.GroupList.length > 0) {
              response.GroupList.forEach(list => {
                this.groups.push(list);
              });
              this.storage.set('managegroups:offline', this.groups);
              this.page++;
              resolve(true);
            } else {
              this.page = -1;
              resolve(false);
            }
          }).catch(error => {
            this.page = -1;
            reject();
          });
        }
      }
    });
  }

  headerBtnClicked(event) {
    switch (event.name) {
      case 'search':
        this.SearchGroup();
        break;
      case 'add':
        this.addGroup();
        break;
    }
  }

  SearchGroup() {
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
      this.groups = [];
      this.query = null;
      this.initializeItems();
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
  }

  initializeItems() {
    this.page = 0;
    this.groups = [];
    this.getData().catch(error => {
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
      this.groups = [];
      this.getData().catch(error => {
      });
    } else {
      this.groups = [];
      this.query = null;
      this.initializeItems();
    }
  }

  removeGroup(group, index) {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/RemoveGroup', {
        GroupID: group.GroupID
      }).then((response: any) => {
        if (response) {
          this.events.publish('toast:create', response.Data.Message);
          this.groups.splice(index, 1);
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    });
  }

  actionSheetOpen(group, index) {
    let actionSheet = this.actionSheetCntl.create({
      title: 'Do You Want to Remove Group',
      buttons: [
        {
          text: 'Remove Group',
          role: 'destructive',
          handler: () => {
            this.removeGroup(group, index);
          }
        },
        {
          text: 'Cancel',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }

  updateGroup(group) {
    if (this._network.type === 'none') {
      this.events.publish('toast:create', 'You seems to be offline');
    } else {
      let groupModal = this.modal.create(CreateGroupPage, group);
      groupModal.onDidDismiss((data) => {
        if (data) {
          this.getData();
        }
      });
      groupModal.present();
    }

  }

  paginate(paginator) {
    this.getData().then(status => {
      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
    });
  }


  refresh(refresher) {
    this.groups = [];
    this.page = 0;
    this.getData().then((response) => {
      refresher.complete();
    }).catch((error) => {
      refresher.complete();
    })
  }

  addGroup() {
    if (this._network.type === 'none') {
      this.events.publish('toast:create', 'You seems to be offline');
    } else {
      let groupModal = this.modal.create(CreateGroupPage);
      groupModal.onDidDismiss((data) => {
        if (data) {
          this.getData();
        }
      });
      groupModal.present();
    }
  }

}
