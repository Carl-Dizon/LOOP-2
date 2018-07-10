import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/map';
/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {
  dummyTasksUrl = 'assets/dummy/tasks.json';

  constructor(public http: HttpClient) {
    console.log('Hello TaskProvider Provider');
  }

  getAllTasks() {
    return this.http.get(this.dummyTasksUrl).toPromise();
  }

  getTasksByProject(projectId) {
    return this.http
      .get(this.dummyTasksUrl)
      .map(response => <any[]>response)
      .toPromise()
      .then(
        response => {
          return response.filter(x => x.projectId === projectId);
        },
        err => {
          console.log('error', err);
        }
      );
  }
}
