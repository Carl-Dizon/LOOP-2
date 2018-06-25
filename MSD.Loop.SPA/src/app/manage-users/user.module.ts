import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { ManageUsersComponent } from './manage-users-component/manage-users.component';
import { UserService } from '../core/services/user/user.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    ManageUsersComponent,
    UserListComponent,
  ],
  exports: [CommonModule]
})
export class UserModule { }
