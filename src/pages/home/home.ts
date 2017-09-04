import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
   
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
       this.tabBarElement.style.display = 'none';
    }, 4000);
  }

  @ViewChild('username') username;
  @ViewChild('password') password;
  
  signIn(){
    console.log(this.username.value, this.password.value);
  }
}