import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProject } from '../../models/IProject';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectProvider {

  projectURL: string = '../../assets/dummy/projects.json';

  constructor(public http: HttpClient) {
    console.log('Hello ProjectProvider Provider');
  }

  getProjects(){
    return this.http.get(this.projectURL).toPromise().then(
      onSuccess => {
        let objProject: any = onSuccess;
        let projects: IProject[] = [];
        for(let index=0;index<objProject.length;index++){
          let project: IProject = objProject[index];
          projects.push(project);
        }
        return projects;
      }
    );
  }

}
