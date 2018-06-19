import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateUserModalPage } from './update-user-modal';

@NgModule({
  declarations: [
    UpdateUserModalPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateUserModalPage),
  ],
})
export class UpdateUserModalPageModule {}
