import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginRedirectPage } from './login-redirect';
import {  } from './login-redirect';


@NgModule({
  declarations: [
    LoginRedirectPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginRedirectPage),
  ],
})

export class LoginRedirectPageModule {}
