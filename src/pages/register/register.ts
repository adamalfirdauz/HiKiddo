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
  @ViewChild('userLevel') user;

  SignUp(){
    // if(this.user.value == 1){
    //   var user = "wali";
    // }
    // else{
    //   var user = "mitra";
    // }
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(data => {
      this.database.object('/user/'+data.uid).set({
        name: this.name.value, username: this.username.value, email: this.email.value, userLevel: this.user.value
      });
    });
    this.navCtrl.push(LoginPage);
  }
  SignIn(){
    this.navCtrl.push(LoginPage);
  }
}
