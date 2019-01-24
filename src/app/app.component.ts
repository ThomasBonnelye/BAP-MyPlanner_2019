import {Component, ViewChild} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Nav, NavController, Platform} from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';

import { TabsPage } from '../pages/tabs/tabs';

//import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController/*, public storage: Storage*/) {
    platform.ready().then(() => {
      // this.storage.clear().then(() => {
      //   console.log('all keys cleared');
      // });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onClick() {
    this.menuCtrl.close();
    this.nav.push(LoginPage);
  }
<<<<<<< HEAD

}
=======
}

>>>>>>> 3fec79bb7a81b6ee45ee632e74052d3ca5188603
