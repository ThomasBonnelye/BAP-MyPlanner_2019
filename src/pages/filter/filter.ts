import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PpNouveautesPage } from '../pp-nouveautes/pp-nouveautes';
import { PpVedettePage } from "../pp-vedette/pp-vedette";

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  prixMin: number;
  prixMax: number;
  type: string;
  categorieA: number = 0;
  categorieB: number = 0;
  categorieC: number = 0;
  categorieD: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.type = navParams.get("type");
      console.log(this.type);
  }

  ionViewWillEnter() {
    console.log('FILTER PAGE ENTER');
    this.cata = false;
    this.catb = false;
    this.catc = false;
    this.catd = false;
    this.categorieA = 0;
    this.categorieB = 0;
    this.categorieC = 0;
    this.categorieD = 0;
    this.prixMin = 0;
    this.prixMax = 20000;
  }

  cata: boolean;

  updateCatA() {
    if (this.cata == true)
    {
      this.categorieA = 1;
    }
    else
    {
      this.categorieA = 0;
    }
    console.log('Catégorie A : ' + this.categorieA);
  }

  catb: boolean;

  updateCatB() {
    if (this.catb == true)
    {
      this.categorieB = 1;
    }
    else
    {
      this.categorieB = 0;
    }
    console.log('Catégorie B : ' + this.categorieB);
  }

  catc: boolean;

  updateCatC() {
    if (this.catc == true)
    {
      this.categorieC = 1;
    }
    else
    {
      this.categorieC = 0;
    }
    console.log('Catégorie C : ' + this.categorieC);
  }

  catd: boolean;

  updateCatD() {
    if (this.catd == true)
    {
      this.categorieD = 1;
    }
    else
    {
      this.categorieD = 0;
    }
    console.log('Catégorie D : ' + this.categorieD);
  }

  Envoyer() {
    if (this.type == "new") {
        this.navCtrl.push(PpNouveautesPage,{porp: "prestations", categorieA : this.categorieA, categorieB: this.categorieB, categorieC: this.categorieC, categorieD: this.categorieD, minprice: this.prixMin, maxprice: this.prixMax, sender: 'filter'});
        console.log('Catégorie A : ' + this.categorieA);
        console.log('Catégorie B : ' + this.categorieB);
        console.log('Catégorie C : ' + this.categorieC);
        console.log('Catégorie D : ' + this.categorieD);
        console.log('Prix min :' + this.prixMin);
        console.log('Prix max :' + this.prixMax);
    } else {
        this.navCtrl.push(PpVedettePage,{porp: "prestations", categorieA : this.categorieA, categorieB: this.categorieB, categorieC: this.categorieC, categorieD: this.categorieD, minprice: this.prixMin, maxprice: this.prixMax, sender: 'filter'});
        console.log('Catégorie A : ' + this.categorieA);
        console.log('Catégorie B : ' + this.categorieB);
        console.log('Catégorie C : ' + this.categorieC);
        console.log('Catégorie D : ' + this.categorieD);
        console.log('Prix min :' + this.prixMin);
        console.log('Prix max :' + this.prixMax);
    }
  }
}


