import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from "@angular/forms";
import { NativeStorage } from '@ionic-native/native-storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventPage } from '../pages/event/event';
import { PpPage } from '../pages/pp/pp';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';
import { PanierPage } from '../pages/panier/panier';

import { LoginPage } from '../pages/login/login';
import { LoginRedirectPage } from '../pages/login-redirect/login-redirect';
import { MentionsLegalesPage } from '../pages/mention-legales/mention-legales';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventPage,
    PpPage,
    AccountPage,
    PanierPage,
    TabsPage,
    LoginPage,
    LoginRedirectPage,
    MentionsLegalesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventPage,
    PpPage,
    AccountPage,
    PanierPage,
    TabsPage,
    LoginPage,
    LoginRedirectPage,
    MentionsLegalesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);