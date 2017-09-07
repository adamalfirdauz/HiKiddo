import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // splash = true;

  constructor(public fire: AngularFireAuth, public database:AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // setTimeout(()=> this.splash = false, 4000);
    console.log('ionViewDidLoad LoginPage');
  }

  @ViewChild('email') email;
  @ViewChild('password') password;

  SignIn(){
    //var user = this.fire.auth.currentUser;
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(user => {
      this.database.object('/user/'+user.uid).subscribe(data => {
        console.log(data);
        if( data.userLevel == "wali" )
          this.navCtrl.push(TabsPage);
        else
          this.navCtrl.push(RegisterPage);
      });
    });
  }
  SignUp(){
    this.navCtrl.push(RegisterPage);
  }
}
