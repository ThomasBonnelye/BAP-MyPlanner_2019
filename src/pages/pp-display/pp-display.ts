import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import { PpPage } from "../pp/pp";
import { AlertController } from 'ionic-angular';

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
  titleFormated: string;

  constructor(private alertCtrl: AlertController, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
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

              let firstLetter = this.display.title.charAt(0).toUpperCase();
              let stringWithoutFirstLetter = this.display.title.slice(1).toLowerCase();
              this.titleFormated = firstLetter + stringWithoutFirstLetter;

              //console.log(this.display);
              //console.log(this.id);
              //console.log(this.category);

          }, err => {
              console.log(err);
      });
  }


    confirmBuy() {
        let alert = this.alertCtrl.create({
            title: 'Votre produit a bien été ajouté\n' +
                'au panier.',
            buttons: [
                {
                    text: 'Continuer les achats',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');//EVENEMENT CONTINUER ACHATS
                    }
                },
                {
                    text: 'Voir le panier',
                    role: 'cancel',
                    handler: () => {
                        console.log('Buy clicked');//EVENEMENT VOIR LE PANIER
                    }
                }
            ]
        });
        alert.present();
    }

}
