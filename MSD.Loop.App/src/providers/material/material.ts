import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMaterial } from '../../models/IMaterial';

/*
  Generated class for the MaterialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MaterialProvider {

  materialURL = '../../assets/dummy/material.json'

  constructor(public http: HttpClient) {
    console.log('Hello MaterialProvider Provider');
  }

  getMaterial(){
    return this.http.get(this.materialURL).toPromise().then(
      onSuccess => {
        let objMaterial: any = onSuccess;
        let materials: IMaterial[] = [];
        for(let index=0;index<objMaterial.length;index++){
          let material: IMaterial = objMaterial[index];
          materials.push(material);
        }
        return materials;
      }
    );
  }  

}
