import { Component } from '@angular/core';
import { IonicPage, Events, ModalController, NavController, NavParams } from 'ionic-angular';
import { ConnectionProvider } from '../../../providers/connection/connection';
import { CreateTagPage } from '../create-tag';

@IonicPage()
@Component({
  selector: 'page-tag',
  templateUrl: 'tag.html',
})
export class TagPage {
  title: string = 'Tags';
  tags: Array<any> = [];
  page: number = 1;
  query: string;
  searchInputBtn: boolean = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public connection: ConnectionProvider,
    public modalCntl: ModalController,
    public events: Events) {
    this.getTags();
  }


  getTags() {
    return new Promise((resolve, reject) => {
      if (this.page === -1) {
        reject();
      } else {
        this.connection.doPost('Chat/GetTagList', {
          Query: this.query,
          PageNumber: this.page,
          RowsPerPage: 20
        },false).then((response: any) => {
          if (response.TagList.length > 0) {
          // this.tags = [];            
            response.TagList.forEach(list => {
              this.tags.push(list);
            });
            console.log(this.tags);
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
    this.page = 1;
    this.tags = [];
    this.getTags().catch(error => {
      console.log(error);
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

  removeTag(tag, index) {
    return new Promise((resolve, reject) => {
      this.connection.doPost('Chat/RemoveTag', {
        TagID: tag.TagID,
        TagCode: null,
        Tag: null
      }).then((response: any) => {
        if (response) {
          this.events.publish('toast:create', response.Data.Message);
          this.tags.splice(index, 1);
          resolve(true);
        }
      }).catch((error) => {
        reject();
      });
    });
  }


  getItems(event) {
    // set val to the value of the ev target
    let val = event.target.value;
    console.log(val);

    if (val && val.trim() != '') {
      // if the value is an empty string don't filter the items
      this.query = val;
      this.page = 1;
      this.getTags().catch(error => {
        console.log(error);
      });
    } else {
      this.query = null;
      this.initializeItems();
    }
  }

  headerBtnClicked(event) {
    console.log(event.name);

    switch (event.name) {
      case 'search':
        this.SearchTag();
        break;
      case 'add':
        this.addTag();
        break;
    }
  }
  SearchTag() {
    this.query = null;
    this.initializeItems();
    if (this.searchInputBtn) {
      this.searchInputBtn = false;
    } else if (this.searchInputBtn === false) {
      this.searchInputBtn = true;
    }
  }
  paginate(paginator) {
    this.getTags().then(status => {
      if (status) {
        paginator.complete();
      } else {
        paginator.enable(false);
      }
    }).catch(error => {
      paginator.enable(false);
    });
  }

  updateTag(tag) {
    let modal = this.modalCntl.create(CreateTagPage, tag);
    modal.onDidDismiss((data) => {
      if (data) {
        this.getTags();
      }
    });
    modal.present();
  }

  addTag() {
    let modal = this.modalCntl.create(CreateTagPage);
    modal.onDidDismiss((data) => {
      if (data) {
        this.getTags();
      }
    });
    modal.present();
  }

  refresh(refresher) {
    this.getTags().then((response) => {
      if (response) {
        refresher.complete();
      }
    }).catch((error) => {
      refresher.complete();
    })
  }
}
