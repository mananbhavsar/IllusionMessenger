import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import { HomePage } from '../home/home';
import { JobsPage } from '../jobs/jobs';

import { UserProvider } from "../../providers/user/user";

import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { Global } from "../../app/global";
@IonicPage()
@Component({
    selector: 'page-setup',
    templateUrl: 'setup.html',
})
export class SetupPage {
    step: any;
    stepCondition: any;
    stepDefaultCondition: any;
    currentStep: any;
    data: any = {};

    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController,
        public events: Events,
        public connection: ConnectionProvider,
        public user: UserProvider,
        private _fileChooser: FileChooser,
        private transfer: FileTransfer,
    ) {
        /**
         * Step Wizard Settings
         */
        this.step = 1;//The value of the first step, always 1
        this.stepCondition = true;//Set to true if you don't need condition in every step
        this.stepDefaultCondition = this.stepCondition;//Save the default condition for every step
        //You can subscribe to the Event 'step:changed' to handle the current step
        this.events.subscribe('step:changed', step => {
            //Handle the current step if you need
            this.currentStep = step[0];
            //Set the step condition to the default value
            this.stepCondition = this.stepDefaultCondition;
        });
        this.events.subscribe('step:next', () => {
            //Do something if next
            console.log('Next pressed: ', this.currentStep);
        });
        this.events.subscribe('step:back', () => {
            //Do something if back
            console.log('Back pressed: ', this.currentStep);
        });
    }

    ionViewDidLoad() {
        //checking if logged in
        this.user.hasLoggedIn().then((user) => {
            //yes
            if (user) {
                this.initData();
            } else {
                //waiting for login
                this.events.subscribe('user:postLogin', (status) => {
                    if (status) {
                        this.initData();
                    }
                });
            }
        });
    }

    initData() {
        //getting data for Setup
        this.events.publish('loading:create', 'initializing');
        this.connection.doGet('JobSeekers/profile/' + this.connection.user.id, {}).subscribe(response => {
            this.events.publish('loading:close');
            if (response == false) {
                this.data = -1;
                this.navCtrl.setRoot(HomePage);
            } else {
                this.data = response;
                console.log(this.data);
            }
        }, error => {
            this.data = -1;
            this.events.publish('loading:close');
            this.events.publish('toast:error', error);
            this.navCtrl.setRoot(HomePage);
        });
    }

    onFinish() {
        //getting data for Setup
        this.events.publish('loading:create', 'Creating');
        this.connection.doPost('JobSeekers/profile/' + this.connection.user.id, this.data).subscribe(response => {
            this.user.setUser(response.user).then(() => {
                this.events.publish('loading:close');
                this.events.publish('alert:basic', response.title, response.message);
                this.navCtrl.setRoot(HomePage);
            });
        }, error => {
            this.events.publish('loading:close');
            if (error._body) {
                let body = JSON.parse(error._body);
                this.events.publish('alert:basic', body.title, body.message);
            }
        });
    }

    toggle() {
        this.stepCondition = !this.stepCondition;
    }

    getIconStep(index: number) {
        switch (index) {
            case 0:
                return this.stepCondition ? 'ionic' : 'ionic';

            case 1:
                return this.stepCondition ? 'ios-person-outline' : 'ios-person';

            case 2:
                return this.stepCondition ? 'ios-briefcase-outline' : 'ios-briefcase';

            case 3:
                return this.stepCondition ? 'ios-document-outline' : 'ios-document';
        }
    }

    skip() {
           this.navCtrl.setRoot(JobsPage);
    }

    textChange(e) {
        if (e.target.value && e.target.value.trim() !== '') {
            this.stepCondition = true;
        } else {
            this.stepCondition = false;
        }
    }

    toggleSelectedSkill(id: number) {
        if (this.data.skillIds.indexOf(id) > -1) {
            this.data.skillIds.splice(this.data.skillIds.indexOf(id), 1);
        } else {
            this.data.skillIds.push(id);
        }
        console.log(this.data.skillIds);
    }

    selectResume() {
        this._fileChooser.open()
            .then(uri => {
                this.uploadFile(uri);
            })
            .catch(e => {
                console.log(e);
            });
    }

    uploadFile(uri: any) {
        this.events.publish('loading:create', 'Uploading');
        const fileTransfer: FileTransferObject = this.transfer.create();

        let options: FileUploadOptions = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        }

        fileTransfer.upload(uri, Global.SERVER_URL + 'JobSeekers/upload_resume', options)
            .then((data) => {
                console.log(data + " Uploaded Successfully");
                this.events.publish('loading:close');
                this.events.publish('toast:create', 'Uploaded Successfully');
            }, (err) => {
                console.log(err);
                this.events.publish('loading:close');
                this.events.publish('toast:error', 'Failed to upload');
            });
    }
}
