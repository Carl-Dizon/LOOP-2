import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectsPage } from './projects';
import { ComponentsModule } from '../../components/components.module';
import { LoggedProvider } from '../../providers/logged/logged';

@NgModule({
  declarations: [
    ProjectsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProjectsPage)
  ],
  providers: [
    LoggedProvider
  ]
})
export class ProjectsPageModule {}
