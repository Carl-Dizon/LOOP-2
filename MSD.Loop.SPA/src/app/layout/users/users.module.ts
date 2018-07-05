import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UsersRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [UserListComponent, UsersComponent, UserProfileComponent, UserFormComponent],
  entryComponents: [UserFormComponent]
})
export class UsersModule { }
