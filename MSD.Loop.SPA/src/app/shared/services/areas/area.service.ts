import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { Areas } from '../../models/Areas';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private _areaUrl = './assets/area.json';
  constructor(private apiService: ApiService) {}
  getTotalAreaHours(): Promise<Areas[]> {
    return this.apiService.get(this._areaUrl);
    // return this._http.get<User[]>(this._usersUrl);

}
private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
}
}
