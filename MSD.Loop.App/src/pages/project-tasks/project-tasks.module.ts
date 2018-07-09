import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectTasksPage } from './project-tasks';

@NgModule({
  declarations: [
    ProjectTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectTasksPage),
  ],
})
export class ProjectTasksPageModule {}
