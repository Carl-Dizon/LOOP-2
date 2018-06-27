import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArea } from '../../models/IArea';

/*
  Generated class for the AreaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AreaProvider {

  areaURL: string = '../../assets/dummy/area.json';

  constructor(public http: HttpClient) {
    console.log('Hello AreaProvider Provider');
  }

  getArea(){
    return this.http.get(this.areaURL).toPromise().then(
      onSuccess => {
        let objArea: any = onSuccess;
        let areas: IArea[] = [];
        for(let index=0;index<objArea.length;index++){
          let area: IArea = objArea[index];
          areas.push(area);
        }
        return areas;
      }
    );
  }

}
