import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the NavTabPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-nav-tab',
  templateUrl: 'nav-tab.html'
})
export class NavTabPage {

  cariRoot = 'CariPage'
  anakRoot = 'AnakPage'
  profilRoot = 'ProfilPage'


  constructor(public navCtrl: NavController) {}

}
