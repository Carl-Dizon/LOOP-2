import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalProjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-project-list',
  templateUrl: 'modal-project-list.html',
})
export class ModalProjectListPage {

  projects: any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController) {
              this.onInitProjects();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalProjectListPage');
  }

  onInitProjects(){
    this.projects = this.navParams.data;
  }

  onCancel(){
    this.viewCtrl.dismiss();
  }

  getItems(ev: any){
    this.onInitProjects();

    const val = ev.target.value;

    if(val && val.trim() != ''){
      this.projects = this.projects.filter((item)=>{
        return (item.projectName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  onSelection(project){
    this.viewCtrl.dismiss(project);
  }

}
