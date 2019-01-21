import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

/**
 * Generated class for the PpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pp',
  templateUrl: 'pp.html',
})

export class PpPage {


  url:string;
  data:object;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
      this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?prestations=all')
          //.map(res => res.json())
          .subscribe(data => {

              this.data = res.json();
          },err => {console.log(err);

          });
  }

}

