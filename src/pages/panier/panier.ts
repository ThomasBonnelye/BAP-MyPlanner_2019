import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import { GlobalProvider } from '../../providers/global/global';
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
  
  famous: any = [];
  id: string;
  category: string;
  display: any = [];
  titleFormated: string;
  quantite: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http, public storageGlobal: GlobalProvider) {
    //this.id = navParams.get("id");
    this.category = navParams.get("porp");
    
  }

  ionViewWillLoad() {
    this.storageGlobal.getObject("category").then(result => {
      if (result != null) {
        console.log("Result.Category: " + result);
        this.category = result;
        console.log("This.Category: " + this.category);
      }
    }).catch(e => {
      console.log("error: ");
      console.log(e);
    });

    this.storageGlobal.get("quantite").then(result => {
      if (result != null) {
        console.log("Quantite: " + result);
        this.quantite =result;
      }
    }).catch(e => {
      console.log("error: " + e);
     // Handle errors here
    });

    this.storageGlobal.getObject("id").then(result => {
      if (result != null) {
        console.log("Result.Id: " + result);
        //JSON.parse(result);
        this.id = result;
        console.log("This.Id: " + this.id);
        if (this.id != null) {
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
              console.log('https://nicolas.okbutwin.fr/myplanner/api/?' + this.category + '=' + this.id);
      });
        }
      }
    }).catch(e => {
      console.log("error: ");
      console.log(e);
    });

    //this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?' + this.category + '=' + this.id)
    //this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?produits=' + this.id)
   
}

}
