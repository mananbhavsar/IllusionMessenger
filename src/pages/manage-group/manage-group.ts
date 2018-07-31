import { Component } from '@angular/core';
import { IonicPage, Events, ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { CreateGroupPage } from './create-group/create-group';


@IonicPage()
@Component({
  selector: 'page-manage-group',
  templateUrl: 'manage-group.html',
})
export class ManageGroupPage {
  page: number = 1;
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
    public actionSheetCntl: ActionSheetController) {
    this.getData();
  }


  getData() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Chat/GetGroupDetail_Master', {
          Query: this.query,

        })
          .then((response: any) => {
            //groups
            console.log(response);

            this.groups = response.GroupList;
            this.page++;
            resolve(true);
          }).catch(error => {
            this.page = -1;
            reject();
          });
      }
    });
  }

  headerBtnClicked(event) {
    console.log(event.name);

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
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
  }

  loadSearchData() {
    return new Promise((resolve, reject) => {
      if (this.query && this.page > 0) {
        this.connection.doPost('Chat/GroupSearch', {
          query: this.query,
          page: this.page,
        }, false).then((response: any) => {
          console.log(response);
          if (response.length > 0) {
            response.forEach(listing => {
              // this.listings.push(listing);
            });
            this.page++;
            resolve(true);
          } else {
            this.page = -1;
            resolve(false);
          }
        }).catch(error => {
          this.events.publish('loading:close');
          this.events.publish('toast:error', error);
          resolve(false);
        });
      }
    });
  }


  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;
    if (val && val.trim() != '') {
      // if the value is an empty string don't filter the items
      this.query = val;
      this.getData().catch(error => {
        console.log(error);
      });
    } else {
      this.query = null;
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
      title: 'Remove Group',
      buttons: [
        {
          text: 'Remove Group',
          role: 'decstructive',
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
    let groupModal = this.modal.create(CreateGroupPage, group);

    groupModal.onDidDismiss((data) => {
      if (data) {
        this.getData();
      }
    });
    groupModal.present();

  }

  paginate(paginator) {
    this.getData().then(status => {
      console.log(status);

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
    this.getData().then((response) => {
      refresher.complete();
    }).catch((error) => {
      refresher.complete();
    })
  }

  addGroup() {
    let groupModal = this.modal.create(CreateGroupPage);

    groupModal.onDidDismiss((data) => {
      if (data) {
        this.getData();
      }
    });
    groupModal.present();

  }

}
