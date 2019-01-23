import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PpPage } from "../pp/pp";
import { Http } from "@angular/http";
import {PpDisplayPage} from "../pp-display/pp-display";

/**
 * Generated class for the PpVedettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pp-vedette',
  templateUrl: 'pp-vedette.html',
})
export class PpVedettePage {

  public porp;
  searchQuery: string = '';
  items: any = [];
  famous: any = [];
  i: number;
  url: string;
  logAction: number;
  id: string;
  img: string;
  title: string;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
      this.porp = navParams.get("porp");
  }

  goPP() {
      this.navCtrl.push(PpPage, { porp: this.porp }, { animate: true, direction: 'forward' });
  }

    goPPdisplay(id) {
        this.navCtrl.push(PpDisplayPage, { id: id, porp: this.porp }, { animate: true, direction: 'forward' });
    }

  ionViewWillLoad() {
      this.getItems(this.porp, 1,1,1,1,0,20000);
  }

  loadData(type) {
      if(type == "produits") { //SI BOUTTON PRODUIT
          this.porp = "produits";
          this.getItems(type, 1,1,1,1,0,20000);
      } else {
          this.porp = "prestations";
          this.getItems(type, 1,1,1,1,0,20000);
      }
  }

  getItems(porp, categorieA, categorieB, categorieC, categorieD, minprice, maxprice) {

      this.logAction = 0;
      this.items = [];
      this.famous = [];

      if (porp == 'produits') { //SI ON RECHERCHE DES PRODUITS

          if (categorieA == 1) {

              this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?products=all')
                  .map(res => res.json())
                  .subscribe(data => {

                      this.famous = data.data;

                      for (this.i = 0; this.i < data.data.length; this.i++) {
                          if (this.famous[this.i].categorie_id == "1") {

                              if (parseInt(this.famous[this.i].price) > minprice) {
                                  if (parseInt(this.famous[this.i].price) < maxprice) {

                                      this.id = this.famous[this.i].id;
                                      this.img = this.famous[this.i].img;
                                      this.title = this.famous[this.i].title;

                                      this.items.push(
                                          [
                                              {
                                                  id: this.id,
                                                  img: this.img,
                                                  title: this.title,
                                              }
                                          ]
                                      )

                                  }
                              }

                          }
                      }

                  }, err => {
                      console.log(err);
              });

          }
          if (categorieB == 1) {

              this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?products=all')
                  .map(res => res.json())
                  .subscribe(data => {

                      this.famous = data.data;

                      for (this.i = 0; this.i < data.data.length; this.i++) {
                          if (this.famous[this.i].categorie_id == "2") {

                              if (parseInt(this.famous[this.i].price) > minprice) {
                                  if (parseInt(this.famous[this.i].price) < maxprice) {

                                      this.id = this.famous[this.i].id;
                                      this.img = this.famous[this.i].img;
                                      this.title = this.famous[this.i].title;

                                      this.items.push(
                                          [
                                              {
                                                  id: this.id,
                                                  img: this.img,
                                                  title: this.title,
                                              }
                                          ]
                                      )

                                  }
                              }

                          }
                      }

                  }, err => {
                      console.log(err);
                  });

          }
          if (categorieC == 1) {

              this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?products=all')
                  .map(res => res.json())
                  .subscribe(data => {

                      this.famous = data.data;

                      for (this.i = 0; this.i < data.data.length; this.i++) {
                          if (this.famous[this.i].categorie_id == "3") {

                              if (parseInt(this.famous[this.i].price) > minprice) {
                                  if (parseInt(this.famous[this.i].price) < maxprice) {

                                      this.id = this.famous[this.i].id;
                                      this.img = this.famous[this.i].img;
                                      this.title = this.famous[this.i].title;

                                      this.items.push(
                                          [
                                              {
                                                  id: this.id,
                                                  img: this.img,
                                                  title: this.title,
                                              }
                                          ]
                                      )

                                  }
                              }

                          }
                      }

                  }, err => {
                      console.log(err);
                  });

          }
          if (categorieD == 1) {

              this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?products=all')
                  .map(res => res.json())
                  .subscribe(data => {

                      this.famous = data.data;

                      for (this.i = 0; this.i < data.data.length; this.i++) {
                          if (this.famous[this.i].categorie_id == "4") {

                              if (parseInt(this.famous[this.i].price) > minprice) {
                                  if (parseInt(this.famous[this.i].price) < maxprice) {

                                      this.id = this.famous[this.i].id;
                                      this.img = this.famous[this.i].img;
                                      this.title = this.famous[this.i].title;

                                      this.items.push(
                                          [
                                              {
                                                  id: this.id,
                                                  img: this.img,
                                                  title: this.title,
                                              }
                                          ]
                                      )

                                  }
                              }

                          }
                      }

                  }, err => {
                      console.log(err);
                  });
          }

      } else {

          if (categorieA == 1) {

              this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?prestations=all')
                  .map(res => res.json())
                  .subscribe(data => {

                      this.famous = data.data;

                      for (this.i = 0; this.i < data.data.length; this.i++) {
                          if (this.famous[this.i].categorie_id == "1") {

                              if (parseInt(this.famous[this.i].price) > minprice) {
                                  if (parseInt(this.famous[this.i].price) < maxprice) {

                                      this.id = this.famous[this.i].id;
                                      this.img = this.famous[this.i].img;
                                      this.title = this.famous[this.i].title;

                                      this.items.push(
                                          [
                                              {
                                                  id: this.id,
                                                  img: this.img,
                                                  title: this.title,
                                              }
                                          ]
                                      )

                                  }
                              }
                          }
                      }

                  }, err => {
                      console.log(err);
                  });

          }
          if (categorieB == 1) {

              this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?prestations=all')
                  .map(res => res.json())
                  .subscribe(data => {

                      this.famous = data.data;

                      for (this.i = 0; this.i < data.data.length; this.i++) {
                          if (this.famous[this.i].categorie_id == "2") {

                              if (parseInt(this.famous[this.i].price) > minprice) {
                                  if (parseInt(this.famous[this.i].price) < maxprice) {

                                      this.id = this.famous[this.i].id;
                                      this.img = this.famous[this.i].img;
                                      this.title = this.famous[this.i].title;

                                      this.items.push(
                                          [
                                              {
                                                  id: this.id,
                                                  img: this.img,
                                                  title: this.title,
                                              }
                                          ]
                                      )

                                  }
                              }

                          }
                      }

                  }, err => {
                      console.log(err);
                  });

          }
          if (categorieC == 1) {

              this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?prestations=all')
                  .map(res => res.json())
                  .subscribe(data => {

                      this.famous = data.data;

                      for (this.i = 0; this.i < data.data.length; this.i++) {
                          if (this.famous[this.i].categorie_id == "3") {

                              if (parseInt(this.famous[this.i].price) > minprice) {
                                  if (parseInt(this.famous[this.i].price) < maxprice) {

                                      this.id = this.famous[this.i].id;
                                      this.img = this.famous[this.i].img;
                                      this.title = this.famous[this.i].title;

                                      this.items.push(
                                          [
                                              {
                                                  id: this.id,
                                                  img: this.img,
                                                  title: this.title,
                                              }
                                          ]
                                      )

                                  }
                              }
                          }
                      }

                  }, err => {
                      console.log(err);
                  });

          }
          if (categorieD == 1) {

              this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?prestations=all')
                  .map(res => res.json())
                  .subscribe(data => {

                      this.famous = data.data;

                      for (this.i = 0; this.i < data.data.length; this.i++) {
                          if (this.famous[this.i].categorie_id == "4") {

                              if (parseInt(this.famous[this.i].price) > minprice) {
                                  if (parseInt(this.famous[this.i].price) < maxprice) {

                                      this.id = this.famous[this.i].id;
                                      this.img = this.famous[this.i].img;
                                      this.title = this.famous[this.i].title;

                                      this.items.push(
                                          [
                                              {
                                                  id: this.id,
                                                  img: this.img,
                                                  title: this.title,
                                              }
                                          ]
                                      )

                                  }
                              }
                          }
                      }

                  }, err => {
                      console.log(err);
                  });
          }

      }
  }
}
