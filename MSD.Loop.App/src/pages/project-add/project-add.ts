import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-project-add',
  templateUrl: 'project-add.html',
})
export class ProjectAddPage {

  projectName: string;
  projectCompany: number;
  addButtonDisabled: boolean = true;

  materials = [
    {name: 'Pipe', count: 200},
    {name: 'Tiles', count: 36}
  ]

  users = [
    {name: 'Justine', count: 200},
    {name: 'Weggie', count: 36}
  ]

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectAddPage');
  }

  textOnChange() {
    if(this.projectName === undefined || this.projectName === ""){
      this.addButtonDisabled = true;
    } else {
      this.addButtonDisabled = false;
    }
  }

  addProject() {
    let objProject = {
      name: this.projectName,
      company: this.projectCompany
    }
    this.viewCtrl.dismiss(objProject);
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
