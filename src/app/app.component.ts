import {Component, ViewChild} from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Nav, Platform} from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  public username: string;
  public userlogo: string;
  public userperm: string;

  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController, public storage: Storage, private nativeStorage: NativeStorage) {
    platform.ready().then(() => {
      this.storage.clear().then(() => {
       console.log('all keys cleared');
       });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onClick() {
    this.menuCtrl.close();
    this.nav.push(LoginPage);
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
