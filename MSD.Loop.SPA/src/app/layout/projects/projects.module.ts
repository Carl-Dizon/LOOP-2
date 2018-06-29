import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [
      ProjectsComponent,
      ProjectDetailsComponent
  ]
})
export class ProjectsModule { }
