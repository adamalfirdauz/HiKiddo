import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavTabPage } from './nav-tab';

@NgModule({
  declarations: [
    NavTabPage,
  ],
  imports: [
    IonicPageModule.forChild(NavTabPage),
  ]
})
export class NavTabPageModule {}
