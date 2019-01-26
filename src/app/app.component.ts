import {Component, ViewChild} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Nav, Platform} from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { MentionPage } from '../pages/mention/mention';

import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppRate } from '@ionic-native/app-rate';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  public username: string;
  public userlogo: string;
  public userperm: string;

  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController, public storage: Storage, private nativeStorage: NativeStorage, private inAppBrowser: InAppBrowser, public appRate: AppRate) {
    platform.ready().then(() => {
      this.storage.clear().then(() => {
       console.log('toutes les keys de données ont été suprrimées');
       });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onClick() {
    this.menuCtrl.close();
    this.nav.push(LoginPage);
  }

  goMention() {
    this.menuCtrl.close();
    this.nav.push(MentionPage);
  }

  goPromotion() { 
    this.inAppBrowser.create("https://www.myplanner.fr/promotions", '_system', 'location=yes');
  }

  goBon() { 
    this.inAppBrowser.create("https://www.myplanner.fr/les-avantages.php", '_system', 'location=yes');
  }

  goBlog() { 
    this.inAppBrowser.create("https://blog.myplanner.fr", '_system', 'location=yes');
  }

  eval() {
    this.appRate.preferences = {
      displayAppName: 'Myplanner',
      usesUntilPrompt: 0, //nombre de fois qu'il faut ouvrir l'application avant d'avoir l'évaluation ici 0 étant un bouton
      promptAgainForEachNewVersion: true,
      storeAppURL: {
        ios: '1216856883', //Apple ID (ici celui d'un test)
        android: 'market://details?id=com.devdactic.crossingnumbers'
      },
      customLocale: {
        title: 'Vous aimez utiliser notre application ?',
        message: 'Si vous aimez, pourriez-vous prendre une petite minute pour évaluer %@ ?',
        cancelButtonLabel: 'Non merci',
        laterButtonLabel: 'Pas cette fois',
        rateButtonLabel: 'Oui !'
      }
    }
    this.appRate.promptForRating(true);
  }

  goContact() { 
    this.inAppBrowser.create("https://www.myplanner.fr/contact.php", '_system', 'location=yes');
  }

  menuOpened() {
    this.nativeStorage.getItem('userdata').then((data)=>{
      this.username = data.username;
      this.userlogo = '../../assets/imgs/users/' + data.username + '.png';
      this.userperm = data.perm;
      console.log('Le nom est:', this.username);
      console.log('Le chemin de limage est:', this.userlogo);
      console.log('LUser perm est:', this.userperm);
  }); 
}
}
