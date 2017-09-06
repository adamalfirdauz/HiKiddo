import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CariPage } from '../cari/cari';
import { AnakPage } from '../anak/anak';
import { ProfilPage } from '../profil/profil';
import { BantuanPage } from '../bantuan/bantuan';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = CariPage;
  tab2Root = AnakPage;
  tab3Root = ProfilPage;
  tab4Root = BantuanPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
