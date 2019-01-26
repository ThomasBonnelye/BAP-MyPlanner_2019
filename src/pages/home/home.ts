import { Component } from '@angular/core';
import { AlertController, NavController} from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PpDisplayPage} from "../pp-display/pp-display";
import { NativeStorage } from "@ionic-native/native-storage";
import { EventPage } from '../../pages/event/event';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  famous: any = [];
  new: any = [];
  url: string;
  userconfirm: string;

constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage, private alertCtrl: AlertController, private inAppBrowser: InAppBrowser) {
}

ionViewWillLoad() {
    this.popUp();

    this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?products=all')
        .map(res => res.json())
        .subscribe(data => {

            this.famous.push(data.data[0]);
            this.famous.push(data.data[1]);
            this.famous.push(data.data[2]);
            this.famous.push(data.data[3]);
            this.famous.push(data.data[4]);
            this.famous.push(data.data[5]);

        },err => {console.log(err);
    });
    }

    goPPdisplay(id) {
        this.navCtrl.push(PpDisplayPage, { id: id, porp: 'produits' }, { animate: true, direction: 'forward' });
    }

    goEvent() {
      this.navCtrl.push(EventPage, {}, { animate: true, direction: 'forward' });
    }

    GoBlog () { 
        this.inAppBrowser.create("https://blog.myplanner.fr", '_system', 'location=yes');
      }

    popUp() {
        this.nativeStorage.getItem('userconfirm').then(
            data => console.log(''),
            error => this.popUpY()
        );
    }

    popUpY() {
        let alert = this.alertCtrl.create({
            title: 'Afin de garantir le fonctionnement de l\'application\n' +
                'vous devez accepter le fait que nous stockions\n' +
                'des données.',
            buttons: [
                {
                    text: 'Accepter',
                    role: 'cancel',
                    handler: () => {
                        this.nativeStorage.setItem('userconfirm', {confirm: 1})
                            .then();
                    }
                }
            ]
        });
        alert.present();
    }
}



