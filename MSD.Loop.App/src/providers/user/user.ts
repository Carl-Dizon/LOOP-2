import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  dummyUsersUrl = "assets/dummy/users.json";

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  getUsers(){
    return this.http.get(this.dummyUsersUrl);
  }

}
