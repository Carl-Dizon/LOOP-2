import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    },
    { path: 'project-details/:id',
    component: ProjectDetailsComponent
    },
    { path: 'project-details',
    component: ProjectDetailsComponent
    },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
