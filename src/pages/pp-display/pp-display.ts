import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import {PpPage} from "../pp/pp";

/**
 * Generated class for the PpDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pp-display',
  templateUrl: 'pp-display.html',
})
export class PpDisplayPage {

  id: string;
  category: string;
  display: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
      this.id = navParams.get("id");
      this.category = navParams.get("porp");
  }

    goPP() {
        this.navCtrl.push(PpPage, { porp: this.category }, { animate: true, direction: 'forward' });
    }

  ionViewWillLoad() {
      this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?' + this.category + '=' + this.id)
          .map(res => res.json())
          .subscribe(data => {

              this.display = data;

              //console.log(this.display);
              //console.log(this.id);
              //console.log(this.category);

          }, err => {
              console.log(err);
      });
  }
}
