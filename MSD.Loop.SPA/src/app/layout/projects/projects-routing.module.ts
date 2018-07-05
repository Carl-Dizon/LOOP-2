import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectListsComponent } from './components/project-lists/project-lists.component';
import { ProjectGridComponent } from './components/project-grid/project-grid.component';

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
    { path: 'project-lists',
    component: ProjectListsComponent
    },
    { path: 'project-grid',
    component: ProjectGridComponent
    },
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
