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

  buttonColor: string = '#000';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    addEvent(){
    this.buttonColor = '#3FF3366';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
  }

}
