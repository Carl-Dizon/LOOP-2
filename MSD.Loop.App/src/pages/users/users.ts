import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { User } from "../../models/user";
import { CreateUserModalPage } from "../create-user-modal/create-user-modal";
import { UserDetailPage } from "../user-detail/user-detail";

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-users",
  templateUrl: "users.html"
})
export class UsersPage {

  users: User[] = [];
  defaultUserImagePlaceholder = "assets/imgs/user.png";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {
    this.users.push({
      firstName: "Dummy",
      lastName: "Joe",
      company: "Loop",
      role: "Admin"
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UsersPage");
  }

  openCreateUserModal() {
    let createUserModal = this.modalCtrl.create(CreateUserModalPage);
    createUserModal.onDidDismiss(data => {
      if (data) {
        this.users.push(data);
      }
    });

    createUserModal.present();
  }

  openViewUserDetail(user: User) {
    console.log("viewing user = ", user);
    this.navCtrl.push(UserDetailPage, {
      user: user
    });
  }

  filterUsers(ev: any) {
    let val = ev.target.value;

    console.log('filter users value', val);

    // if (val && val.trim() !== '') {
    //   this.users = [...this.users];
    //   this.users= this.users.filter(function(user) {
    //     return user.firstName.toLowerCase().includes(val.toLowerCase());
    //   });
    // }

  }
}
