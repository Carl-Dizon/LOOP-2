import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Materials } from '../../models/Materials';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private _materialsUrl = './assets/materials.json';
  constructor(private apiService: ApiService) {}

  getMaterials(): Promise<Materials[]> {
      return this.apiService.get(this._materialsUrl);
      // return this._http.get<User[]>(this._usersUrl);

  }

  getById(projectID: number): Promise<Materials> {
      return this.apiService.get<Materials[]>(this._materialsUrl, projectID)
      .then((data: Materials[]) => {
          // console.log(data.find(x => x.projectID === projectID.toString()));
          return data.find(x => x.projectID === projectID.toString());
      });

  }

  private handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return Observable.throw(err.message);
  }
}
