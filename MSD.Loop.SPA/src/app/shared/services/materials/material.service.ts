import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private listSource = new BehaviorSubject<any[]>([
    {
      projectID: '1',
      taskID: '1',
      areaName: 'Woodwork',
      materialName: 'Nail',
      materialsUsed: 100,
    },
    {
      projectID: '2',
      taskID: '1',
      areaName: 'Woodwork',
      materialName: 'Umbrella Nail',
      materialsUsed: 100,
    },
    {
      projectID: '3',
      taskID: '1',
      areaName: 'Woodwork',
      materialName: 'Concrete Nail',
      materialsUsed: 100,
    },
    {
      projectID: '5',
      taskID: '1',
      areaName: 'Woodwork',
      materialName: 'Wood',
      materialsUsed: 100,
    },
  ]);

  currentList = this.listSource.asObservable();

  constructor() { }
  changeList(list: any[]) {
    this.listSource.next(list);
  }
}
