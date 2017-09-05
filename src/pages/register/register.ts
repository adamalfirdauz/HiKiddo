import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database'

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public fire: AngularFireAuth, public database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  @ViewChild('name') name;
  @ViewChild('username') username;
  @ViewChild('email') email;
  @ViewChild('password') password;

  SignUp(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(data => {
      this.database.object('/orangTua/'+data.uid).set({
        name: this.name.value, username: this.username.value, email: this.email.value
      });
    });
    this.navCtrl.push(LoginPage);
  }
  SignIn(){
    this.navCtrl.push(LoginPage);
  }
}
