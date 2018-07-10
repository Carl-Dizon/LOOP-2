import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UserProvider } from "../../providers/user/user";
// import { IUser } from "../../models/IUser";
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
  users: any[] = [];

  username: string;
  password: string;

  wrongCredentials: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider
  ) {

  }

  ionViewDidLoad() {
    this.userProvider.getUsers().subscribe((users: any[]) => {
      this.users = users;
      this.navCtrl.push(TabsPage, { user: this.users[1] });
    });
    console.log("ionViewDidLoad PrototypeLandingPage");
  }

  goToApplication(user: any) {
    console.log("user pushed", user);
    this.navCtrl.push(TabsPage, { user: user });
  }

  onModelClear(){
    if(this.wrongCredentials === true){
      this.username = null;
      this.password = null;
      this.wrongCredentials = false;
    }
  }

  onLogin(){
    let index = this.users.findIndex(x => x.userName === this.username);
    if(index >= 0){
      if(this.password === this.users[index].password){
        this.navCtrl.push(TabsPage, { user: this.users[index]});
      } else {
        this.wrongCredentials = true;
      }
    } else {
      this.wrongCredentials = true;
    }
  }
}
