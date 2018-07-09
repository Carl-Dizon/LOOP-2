import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalMaterialListPage } from './modal-material-list';

@NgModule({
  declarations: [
    ModalMaterialListPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalMaterialListPage),
  ],
})
export class ModalMaterialListPageModule {}
