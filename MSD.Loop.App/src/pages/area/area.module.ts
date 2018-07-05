import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaPage } from './area';
import { ProgressBarModule  } from 'angular-progress-bar';

import { AreaProvider } from '../../providers/area/area';
import { ModalArealistPageModule } from '../../pages/modal-arealist/modal-arealist.module';

@NgModule({
  declarations: [
    AreaPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaPage),
    ProgressBarModule,
    ModalArealistPageModule
  ],
  providers: [
    AreaProvider
  ]
})
export class AreaPageModule {}
