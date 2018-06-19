import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateUserModalPage } from './create-user-modal';

@NgModule({
  declarations: [
    CreateUserModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateUserModalPage),
  ],
})
export class CreateUserModalPageModule {}
