import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent, ErrorPageComponent]
})
export class SignupModule { }
