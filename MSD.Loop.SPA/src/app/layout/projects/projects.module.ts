import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListsComponent } from './components/project-lists/project-lists.component';
import { ProjectGridComponent } from './components/project-grid/project-grid.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';
import { ChartComponent } from './chart/chart.component';
import { TasksComponent } from '../tasks/tasks.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
      ProjectsComponent,
      ProjectDetailsComponent,
      ProjectListsComponent,
      ProjectGridComponent,
      ProjectsFormComponent,
      ChartComponent,
      TasksComponent
  ],
  entryComponents: [ProjectsFormComponent, TasksComponent]
})
export class ProjectsModule { }
