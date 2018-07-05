import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private domain = 'https://www.andrew.com';
  constructor(private http: HttpClient) {}

  get<T>(path, parameters?): Promise<any> {
    return this.http.get(`${path}`, {
      headers: {},
      params: parameters
    }).toPromise();
  }
}
