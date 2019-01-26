import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from "@angular/forms";
import { NativeStorage } from '@ionic-native/native-storage';
import { TruncatePipe }   from './app.pipe';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventPage } from '../pages/event/event';
import { PpPage } from '../pages/pp/pp';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';
import { PanierPage } from '../pages/panier/panier';
import { FilterPage } from '../pages/filter/filter';

import { PpVedettePage } from '../pages/pp-vedette/pp-vedette';
import { PpNouveautesPage } from '../pages/pp-nouveautes/pp-nouveautes';
import { PpDisplayPage } from "../pages/pp-display/pp-display";

import { LoginPage } from '../pages/login/login';
import { LoginRedirectPage } from '../pages/login-redirect/login-redirect';
import { MentionPage } from '../pages/mention/mention';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http'; 
import { IonicStorageModule } from '@ionic/storage';

import { GlobalProvider } from '../providers/global/global';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppRate } from '@ionic-native/app-rate';

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
    MentionPage,
    PpNouveautesPage,
    PpVedettePage,
    TruncatePipe,
    PpDisplayPage,
    FilterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
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
    MentionPage,
    PpNouveautesPage,
    PpVedettePage,
    PpDisplayPage,
    FilterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    InAppBrowser,
    AppRate
  ]
})
export class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);
