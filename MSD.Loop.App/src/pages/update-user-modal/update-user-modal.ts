import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../models/user';

/**
 * Generated class for the UpdateUserModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-user-modal',
  templateUrl: 'update-user-modal.html',
})
export class UpdateUserModalPage {
  submitAttempt: boolean = false;

  updateUserForm: FormGroup

  user: User;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private formBuilder: FormBuilder

  ) {
    this.updateUserForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateUserModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  updateUser(user: User){
    this.submitAttempt = true;

    this.viewCtrl.dismiss(user);
  }

}
