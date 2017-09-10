import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase) {}

  /**
   * loginUser takes in an email and password and signs the user into the application.
   */
  loginUser(email: string, password: string): firebase.Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * signupUser takes in an email and password and does 3 things:
   * 1. It creates the new user.
   * 2. It signs the user into the application.
   * 3. It creates a database node for the user to store the userProfile, which starts with just
   *    the email address.
   */
  registerUser(name: string, email: string, password: string, level: number): firebase.Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.afDatabase.object('/user/'+user.uid).set({
          name: name,
          email: email,
          password: password,
          level: level
      });
    });
  }

  /**
   * resetPassword takes the email address as a string and sends the email with the reset password 
   * link.
   */
  resetPassword(email: string): firebase.Promise<any> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  /**
   * logoutUser doesn't take any parameters, it looks into the authentication object and signs out
   * the currently logged in user.
   */
  logoutUser(): firebase.Promise<any> {
    return this.afAuth.auth.signOut();
  }

}
