import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogHourPage } from './log-hour';
import { ProjectProvider } from '../../providers/project/project';
import { AreaProvider } from '../../providers/area/area';

@NgModule({
  declarations: [
    LogHourPage,
  ],
  imports: [
    IonicPageModule.forChild(LogHourPage)
  ],
  providers: [
    ProjectProvider,
    AreaProvider
  ]
})
export class LogHourPageModule {}
