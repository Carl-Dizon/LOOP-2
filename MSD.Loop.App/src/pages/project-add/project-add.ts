import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController} from 'ionic-angular';
import { MaterialPage } from '../material/material';
import { UserAddPage } from '../user-add/user-add';

@IonicPage()
@Component({
  selector: 'page-project-add',
  templateUrl: 'project-add.html',
})
export class ProjectAddPage {

  projectName: string;
  projectCompany: number;
  addButtonDisabled: boolean = true;

  materials = [];
  users = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController) {
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

  onRemoveMaterial(value: string){
    for(let index=0;index<this.materials.length;index++){
      if(value === this.materials[index].value){
        this.materials.splice(index,1);
        break;
      }
    }
  }

  addMaterials() {
    let materialModal = this.modalCtrl.create(MaterialPage);
    materialModal.present();
    materialModal.onDidDismiss(
      result => {
        if(result !== undefined){
          this.materials.push(result);
        }
      }
    );
  }

  addUser() {
    let userModal = this.modalCtrl.create(UserAddPage);
    userModal.present();
    userModal.onDidDismiss(
      result => {
        if(result !== undefined){
          this.users.push(result);
        }
      }
    );
  }

  onRemoveUser(user: string) {
    for(let index=0;index<this.users.length;index++){
      if(user === this.users[index].name){
        this.users.splice(index,1);
        break;
      }
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
