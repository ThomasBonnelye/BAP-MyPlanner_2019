import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

/**
 * Generated class for the PanierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {

  id: string;
  category: string;
  display: any = [];
  titleFormated: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.id = navParams.get("id");
    this.category = navParams.get("porp");
  }

  ionViewWillLoad() {
    this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?' + this.category + '=' + this.id)
        .map(res => res.json())
        .subscribe(data => {

            this.display = data;

            let firstLetter = this.display.title.charAt(0).toUpperCase();
            let stringWithoutFirstLetter = this.display.title.slice(1).toLowerCase();
            this.titleFormated = firstLetter + stringWithoutFirstLetter;

            console.log(this.display);
            console.log(this.id);
            console.log(this.category);

        }, err => {
            console.log(err);
    });
}

}
