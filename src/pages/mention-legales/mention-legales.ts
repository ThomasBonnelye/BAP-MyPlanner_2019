import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the MentionLegalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mention-legales',
  templateUrl: 'mention-legales.html',
})

export class MentionsLegalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MentionLegalesPage');
  }

  goHome() {
      this.navCtrl.push(HomePage, {}, { animate: true, direction: 'forward' });
  }

}
