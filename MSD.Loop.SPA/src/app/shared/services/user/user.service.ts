import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _usersUrl = './assets/users.json';
    constructor(private apiService: ApiService) { }

    getUsers(): Promise<User[]> {
        return this.apiService.get(this._usersUrl);
        // return this._http.get<User[]>(this._usersUrl);

    }

    getById(id: number): Promise<User> {
        return this.apiService.get<User[]>(this._usersUrl, id)
        .then((data: User[]) => {
            return data.find(x => x.id === id.toString());
        });

    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
