import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogMaterialPage } from './log-material';
import { ProjectProvider } from '../../providers/project/project';
import { AreaProvider } from '../../providers/area/area';
import { MaterialProvider } from '../../providers/material/material';

@NgModule({
  declarations: [
    LogMaterialPage,
  ],
  imports: [
    IonicPageModule.forChild(LogMaterialPage)
  ],
  providers: [
    ProjectProvider,
    AreaProvider,
    MaterialProvider
  ]
})
export class LogMaterialPageModule {}
