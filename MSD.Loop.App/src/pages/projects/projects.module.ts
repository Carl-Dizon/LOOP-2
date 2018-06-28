import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectsPage } from './projects';
import { ComponentsModule } from '../../components/components.module';
import {ProgressBarModule} from "angular-progress-bar"

@NgModule({
  declarations: [
    ProjectsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProjectsPage),
    ProgressBarModule
  ],
})
export class ProjectsPageModule {}
