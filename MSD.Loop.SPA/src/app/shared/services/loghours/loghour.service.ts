import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoghourService {
  private listSource = new BehaviorSubject<any[]>([
    {
      projectID: '1',
     taskID: '1',
     loghours: 100,
    },
    {
      projectID: '1',
     taskID: '2',
     loghours: 100,
    },
    {
      projectID: '1',
     taskID: '3',
     loghours: 100,
    },
    {
      projectID: '1',
     taskID: '4',
     loghours: 100,
    },
    {
      projectID: '1',
     taskID: '5',
     loghours: 100,
    },
    {
      projectID: '1',
     taskID: '6',
     loghours: 100,
    },
  ]);

  currentList = this.listSource.asObservable();

  constructor() { }
  changeList(list: any[]) {
    this.listSource.next(list);
  }
}
