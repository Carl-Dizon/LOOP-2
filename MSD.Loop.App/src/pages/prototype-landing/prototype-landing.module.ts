import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrototypeLandingPage } from './prototype-landing';

@NgModule({
  declarations: [
    PrototypeLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(PrototypeLandingPage),
  ],
})
export class PrototypeLandingPageModule {}
