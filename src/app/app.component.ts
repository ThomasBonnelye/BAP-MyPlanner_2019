import {Component, ViewChild} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Nav, NavController, Platform} from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onClick() {
    this.menuCtrl.close();
    this.nav.push(LoginPage);
  }
}

