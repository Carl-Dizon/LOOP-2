import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "../../models/user";

/**
 * Generated class for the CreateUserModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-create-user-modal",
  templateUrl: "create-user-modal.html"
})
export class CreateUserModalPage {

  addUserForm: FormGroup;

  submitAttempt: boolean = false;

  user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private formBuilder: FormBuilder
  ) {
    this.addUserForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CreateUserModalPage");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  addUser(user: User){
    this.submitAttempt = true;
    this.viewCtrl.dismiss(user);
  }
}
