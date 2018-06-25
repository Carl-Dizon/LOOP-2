import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManageUsersComponent } from './manage-users-component/manage-users.component';

const routes: Routes = [
  {
      path: '', component: ManageUsersComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],exports : [RouterModule],
  declarations: []
})
export class UserRoutingModule { }
