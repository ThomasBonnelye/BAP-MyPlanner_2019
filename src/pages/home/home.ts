import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PpDisplayPage} from "../pp-display/pp-display";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  famous: any = [];
  new: any = [];
  url: string;

constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
}

ionViewWillLoad() {

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

    goFilter() {
      this.navCtrl.push(FilterPage, {}, { animate: true, direction: 'forward' });
    }

}

