import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PpPage } from "../pp/pp";
import { Http } from "@angular/http";
import {PpDisplayPage} from "../pp-display/pp-display";
import {FilterPage} from "../filter/filter";

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
    public categorieA;
    public categorieB;
    public categorieC;
    public categorieD;
    public prixMin;
    public prixMax;
    searchQuery: string = '';
    items: any = [];
    famous: any = [];
    i: number;
    url: string;
    logAction: number;
    id: string;
    img: string;
    title: string;
    sender: string;

    constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
        this.porp = navParams.get("porp");
        this.categorieA  = navParams.get("categorieA");
        this.categorieB  = navParams.get("categorieB");
        this.categorieC  = navParams.get("categorieC");
        this.categorieD  = navParams.get("categorieD");
        this.prixMin = navParams.get("minprice");
        this.prixMax = navParams.get("maxprice");
        this.sender = navParams.get("sender");
    }

    goFilter() {
        this.navCtrl.push(FilterPage, { type: 'famous' }, { animate: true, direction: 'forward' });
    }

      goPP() {
          this.navCtrl.push(PpPage, { porp: this.porp }, { animate: true, direction: 'forward' });
      }

    goPPdisplay(id) {
        this.navCtrl.push(PpDisplayPage, { id: id, porp: this.porp }, { animate: true, direction: 'forward' });
    }

    ionViewWillLoad() {
        console.log('Catégorie A : ' + this.categorieA);
        console.log('Catégorie B : ' + this.categorieB);
        console.log('Catégorie C : ' + this.categorieC);
        console.log('Catégorie D : ' + this.categorieD);
        console.log('Prix min :' + this.prixMin);
        console.log('Prix max :' + this.prixMax);
        if (this.sender == "filter") {
            this.getItems(this.porp, this.categorieA,this.categorieB,this.categorieC,this.categorieD,this.prixMin,this.prixMax);
        } else {
            this.getItems(this.porp, 1,1,1,1,0,20000);
        }
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
