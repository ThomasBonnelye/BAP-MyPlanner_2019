import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { EventPage } from '../event/event';
import { PpPage } from '../pp/pp';
import { AccountPage } from '../account/account';
import { PanierPage } from '../panier/panier';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventPage;
  tab3Root = PpPage;
  tab4Root = AccountPage;

  PanierButton: any;

  constructor(public navController: NavController) {
    this.PanierButton = PanierPage;
  }
}