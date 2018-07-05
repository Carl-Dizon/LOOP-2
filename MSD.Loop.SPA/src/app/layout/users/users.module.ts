import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DeleteUserModalComponent } from './components/delete-user-modal/delete-user-modal.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NgbModule.forRoot(),
    UsersRoutingModule,
  ],
  declarations: [UserListComponent, UsersComponent, UserProfileComponent, UserFormComponent, DeleteUserModalComponent],
  entryComponents: [UserFormComponent, DeleteUserModalComponent]
})
export class UsersModule { }
