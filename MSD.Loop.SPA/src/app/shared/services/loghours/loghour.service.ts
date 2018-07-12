import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../api.service';
import { LogHours } from '../../models/LogHours';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoghourService {
  private _logsUrl = './assets/loghours.json';
  constructor(private apiService: ApiService) {}
  getLogHours(): Promise<LogHours[]> {
    return this.apiService.get(this._logsUrl);
    // return this._http.get<User[]>(this._usersUrl);

}
private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
}
}
