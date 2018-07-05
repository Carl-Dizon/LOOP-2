import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  private listSource = new BehaviorSubject<any[]>([
  {
    areaID: '1',
    areaName: 'Woodwork',
  },
  {
    areaID: '2',
    areaName: 'Brickwork',
  },
  {
    areaID: '3',
    areaName: 'Construction',
  },
  {
    areaID: '4',
    areaName: 'Walling',
  },
  {
    areaID: '5',
    areaName: 'Plumbing',
  },
  {
    areaID: '6',
    areaName: 'Electricals',
  },
]);

currentList = this.listSource.asObservable();

constructor() { }
changeList(list: any[]) {
  this.listSource.next(list);
}
}
