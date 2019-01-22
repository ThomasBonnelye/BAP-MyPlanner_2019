import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilterPage } from '../filter/filter';
import { NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  famous: any = [];
  new: any = [];
  url: string;

constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
}

ionViewWillLoad() {

    this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?products=all')
        .map(res => res.json())
        .subscribe(data => {

            this.famous.push(data.data[0]);
            this.famous.push(data.data[1]);
            this.famous.push(data.data[2]);
            this.new.push(data.data[3]);
            this.new.push(data.data[4]);
            this.new.push(data.data[5]);

        },err => {console.log(err);
    });
}

goFilter() {
  this.navCtrl.push(FilterPage, {}, { animate: true, direction: 'forward' });
}

loadData(type) {

        this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?products=all')
            .map(res => res.json())
            .subscribe(data => {


                this.famous = [];
                this.new = [];

                this.famous.push(data.data[0]);
                this.famous.push(data.data[1]);
                this.famous.push(data.data[2]);
                this.new.push(data.data[3]);
                this.new.push(data.data[4]);
                this.new.push(data.data[5]);

            },err => {console.log(err);

            });  
    }
}

