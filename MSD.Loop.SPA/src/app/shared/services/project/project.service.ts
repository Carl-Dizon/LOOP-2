import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Projects } from '../../models/Projects';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private _projectsUrl = './assets/projects.json';
    constructor(private apiService: ApiService) {}

    getProjects(): Promise<Projects[]> {
        return this.apiService.get(this._projectsUrl);
        // return this._http.get<User[]>(this._usersUrl);

    }

    getById(projectID: number): Promise<Projects> {
        return this.apiService.get<Projects[]>(this._projectsUrl, projectID)
        .then((data: Projects[]) => {
            // console.log(data.find(x => x.projectID === projectID.toString()));
            return data.find(x => x.projectID === projectID.toString());
        });

    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
