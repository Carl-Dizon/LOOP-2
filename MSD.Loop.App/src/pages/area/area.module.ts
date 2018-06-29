import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaPage } from './area';
import { ProgressBarModule  } from 'angular-progress-bar';

import { AreaProvider } from '../../providers/area/area';

@NgModule({
  declarations: [
    AreaPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaPage),
    ProgressBarModule
  ],
  providers: [
    AreaProvider
  ]
})
export class AreaPageModule {}
