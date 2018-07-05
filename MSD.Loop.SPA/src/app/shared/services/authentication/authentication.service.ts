import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private apiService: ApiService) {}

    private _tokenUrl = './assets/dummytoken.json';

    getToken(token: string): Promise<any> {
        console.log(token);
        return this.apiService
            .get<any>(this._tokenUrl, token)
            .then((data: any) => {
                console.log(token);
                return data.find(x => x.token === token);
            });
    }
}
