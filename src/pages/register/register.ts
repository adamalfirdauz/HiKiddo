import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading, AlertController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { LoginPage } from '../login/login';


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
  public registerForm:FormGroup;
  public loading:Loading;
  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public formBuilder: FormBuilder, 
    public authProvider: AuthProvider) {
    this.registerForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.pattern('[a-zA-Z, ]*')])],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      level: ['', Validators.compose([Validators.required])]
    });
  }

  registerUser(){
    if(!this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.authProvider.registerUser(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password, this.registerForm.value.level)
      .then(() => {
        this.loading.dismiss().then(()=>{
           let alert = this.alertCtrl.create({
              title: '',
              subTitle: 'Silahkan untuk menkonfirmasi Email Anda terlebih dahulu.',
              buttons: ['Tutup']
            });
           alert.present();

           this.navCtrl.setRoot(LoginPage);
        });
      }, (error) => {
          this.loading.dismiss().then(() => {
          var errorMessage: string = error.message;
          let alert = this.alertCtrl.create({
            message: errorMessage,
            buttons: [{ text: "Ok", role: 'cancel' }]
          });
          alert.present();
      });
    });
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    
    }    
  }

  SignIn(){
    this.navCtrl.setRoot(LoginPage);
  }
}
