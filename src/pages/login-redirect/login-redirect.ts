import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

import { LoginPage } from '../login/login';
import { NativeStorage } from '@ionic-native/native-storage';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginRedirectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login-redirect',
  templateUrl: 'login-redirect.html',
})

export class LoginRedirectPage {

  public username: string;
  public userlogo: string;
  public userperm: string;

  constructor(public http: Http, public navCtrl: NavController, private nativeStorage: NativeStorage) {}

  goHome() {
    this.navCtrl.setRoot(TabsPage,  {}, { animate: true, direction: 'back' });
  }

  goPro() {
      this.navCtrl.push(LoginPage, {}, { animate: true, direction: 'forward' });
  }
  
  ionViewWillEnter() {
      this.nativeStorage.getItem('userdata').then((data)=>{
          this.username = data.username;
          this.userlogo = '../../assets/imgs/users/' + data.username + '.png';
          this.userperm = data.perm;
      }); 

  }

  

}
