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

    famous: any = [];
    new: any = [];
    url: string;
    porp: string;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
      this.porp = "prestations";

      this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?prestations=all')
          .map(res => res.json())
          .subscribe(data => {

              this.famous.push(data.data[0]);
              this.famous.push(data.data[1]);
              this.famous.push(data.data[2]);
              this.new.push(data.data[3]);
              this.new.push(data.data[4]);
              this.new.push(data.data[5]);

          },err => {console.log(err);

          });
  }

  loadData(type) {
      if(type == "produits") { //SI BOUTTON PRODUIT

          this.porp = "produits";

          this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?products=all')
              .map(res => res.json())
              .subscribe(data => {


                  this.famous = [];
                  this.new = [];

                  this.famous.push(data.data[0]);
                  this.famous.push(data.data[1]);
                  this.famous.push(data.data[2]);
                  this.new.push(data.data[3]);
                  this.new.push(data.data[4]);
                  this.new.push(data.data[5]);

              },err => {console.log(err);

              });

      } else {                 //SI BOUTTON PRESTATIONS

          this.porp = "prestations";

          this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?prestations=all')
              .map(res => res.json())
              .subscribe(data => {

                  this.famous = [];
                  this.new = [];

                  this.famous.push(data.data[0]);
                  this.famous.push(data.data[1]);
                  this.famous.push(data.data[2]);
                  this.new.push(data.data[3]);
                  this.new.push(data.data[4]);
                  this.new.push(data.data[5]);

              },err => {console.log(err);

              });

      }
  }

}

