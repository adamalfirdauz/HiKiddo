import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CariPage } from '../pages/cari/cari';
import { AnakPage } from '../pages/anak/anak';
import { ProfilPage } from '../pages/profil/profil';
import { BantuanPage } from '../pages/bantuan/bantuan';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const firebaseAuth = {
    apiKey: "AIzaSyABvafG0BMGmcYL6dK3X61aCu6dGTt_HDQ",
    authDomain: "hikiddo-76f27.firebaseapp.com",
    databaseURL: "https://hikiddo-76f27.firebaseio.com",
    projectId: "hikiddo-76f27",
    storageBucket: "",
    messagingSenderId: "990152773375"
  };

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    CariPage,
    AnakPage,
    ProfilPage,
    BantuanPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    CariPage,
    AnakPage,
    ProfilPage,
    BantuanPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
