import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalProjectListPage } from './modal-project-list';

@NgModule({
  declarations: [
    ModalProjectListPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalProjectListPage),
  ],
})
export class ModalProjectListPageModule {}
