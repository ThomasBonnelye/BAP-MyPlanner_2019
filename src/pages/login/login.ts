import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

import { TabsPage } from '../tabs/tabs';
import { LoginRedirectPage } from '../login-redirect/login-redirect';

import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

    validations_form: FormGroup;

    protected url:string;
    protected data:string;
    protected password:string;
    protected username:string;
    protected valid: boolean = false;

    constructor(public http: Http, public navCtrl: NavController, public formBuilder: FormBuilder, private nativeStorage: NativeStorage) { }



    ionViewWillLoad() {

        this.validations_form = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.maxLength(25),
                Validators.minLength(3),
                Validators.pattern('^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$'),
                Validators.required
            ])),
            password: new FormControl('', Validators.compose([
                Validators.pattern('^([a-zA-Z0-9@*#]{6,25})$')
            ]))
        });
    }



    loadData(username, password){ //RECUPERATION DATA
        this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?user_name=' + username)
            .map(res => res.json())   //SI SUCESS DE USERNAME
            .subscribe(data => {
                if (data.password === password) {  //LOGIN SUCESS
                    if (data.perm == 0) {         //SI USER
                        this.nativeStorage.setItem('userdata', {username: username, perm: 0})
                            .then();
                        this.goLogged()
                    } else if (data.perm == 1) { //SI PRO
                        this.nativeStorage.setItem('userdata', {username: username, perm: 1})
                            .then();
                        this.goLogged()
                    } else {
                        this.validations_form.reset();
                    }
                } else {
                    this.validations_form.reset();
                    //alert(this.valid);
                }
            });


    }



    onSubmit(values) {              //ON SUBMIT
        this.loadData(values.username, values.password)
    }




    validation_messages = {
        'username': [
            { type: 'required', message: '- Vous devez entrer un identifiant.' },
            { type: 'minlength', message: '- L\'utilisateur doit faire plus de 3 caractères.' },
            { type: 'maxlength', message: '- L\'utilisateur doit faire moins de 25 caractères.' },
            { type: 'pattern', message: '- L\'utilisateur est incorrect.' },
            { type: 'validUsername', message: '- L\'utilisateur existe déjà.' }
        ],
        'password': [
            { type: 'pattern', message: '- Le mot de passe n\'est pas correct.' }
        ]
    };



    goHome() {
        this.navCtrl.setRoot(TabsPage,  {}, { animate: true, direction: 'back' });
    }

    goLogged() {
        this.navCtrl.push(LoginRedirectPage, {}, { animate: true, direction: 'forward' });
    }

}
