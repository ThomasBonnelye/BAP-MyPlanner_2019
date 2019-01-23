import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  prixMin: number = 0;
  prixMax: number = 0;

  categorieA: number = 0 ;
  categorieB: number = 0 ;
  categorieC: number = 0 ;
  categorieD: number = 0 ;
  minprice: number = 0 ;
  minpax: number = 0 ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
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
      console.log('Prix min :' + this.prixMin);
      console.log('Prix max :' + this.prixMax);
  }
}


