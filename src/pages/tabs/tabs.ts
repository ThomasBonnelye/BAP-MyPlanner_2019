import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { EventPage } from '../event/event';
import { PpPage } from '../pp/pp';
import { AccountPage } from '../account/account';
import { PanierPage } from '../panier/panier';

import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventPage;
  tab3Root = PpPage;
  tab4Root = AccountPage;

  PanierButton: any;

  public username: string;
  public userlogo: string;
  public userperm: string;

  constructor(public navController: NavController, private nativeStorage: NativeStorage) {
      this.PanierButton = PanierPage;
  }

  logo() {
    this.nativeStorage.getItem('userdata').then((data)=>{
      this.username = data.username;
      this.userlogo = '../../assets/imgs/users/' + data.username + '.png';
      this.userperm = data.perm;
    });
  }
    /*
        setValue() {
            this.nativeStorage.setItem('userterms', {terms: 1})
        }

        ionViewWillEnter() {
            this.nativeStorage.getItem('userterms').then((data)=>{
                this.terms = data.terms;
                this.popUp();
            });
        }

        popUp() {
            if (this.terms != '1') {
                let alert = this.alertCtrl.create({
                    title: 'Collecte des données',
                    message: 'Vous devez autoriser MyPlanner à récolter des données pour garantir son fonctionnement normal.',
                    buttons: [
                        {
                            text: 'Accepter',
                            handler: () => {
                                this.setValue();
                            }
                        }
                    ]
                });
                alert.present();
            }
        }*/
}