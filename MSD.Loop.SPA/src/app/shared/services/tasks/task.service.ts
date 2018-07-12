import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Tasks } from '../../models/Tasks';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks: any[] = [];
  private _tasksUrl = './assets/tasks.json';
  constructor(private apiService: ApiService) {}

  getTasks(): Promise<Tasks[]> {
    // console.log(this.apiService.get(this._tasksUrl));

    return this.apiService.get(this._tasksUrl);
      // return this._http.get<User[]>(this._usersUrl);

  }
  getById(projectID: number): Promise<Tasks> {
    return this.apiService.get<Tasks>(this._tasksUrl, projectID)
    .then((data: Tasks[]) => {
        //  console.log(data.find(x => x.projectID === projectID.toString()));
        return data.find(x => x.projectID === projectID.toString());
    });

}


  private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return Observable.throw(err.message);
  }
}
