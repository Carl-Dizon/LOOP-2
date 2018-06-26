import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserProvider } from "../../providers/user/user";
import { IUser } from "../../models/IUser";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the PrototypeLandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-prototype-landing",
  templateUrl: "prototype-landing.html"
})
export class PrototypeLandingPage {
  users: IUser[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider
  ) {}

  ionViewDidLoad() {
    this.userProvider.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
    });
    console.log("ionViewDidLoad PrototypeLandingPage");
  }

  goToApplication(user: IUser) {
    console.log("user pushed", user);
    this.navCtrl.push(TabsPage, { user: user });
  }
}
