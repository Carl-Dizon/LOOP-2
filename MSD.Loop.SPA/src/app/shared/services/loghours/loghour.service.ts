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
      areaName: 'Woodwork',
      loghours: 100,
    },
    {
      projectID: '1',
      taskID: '2',
      areaName: 'Brickwork',
      loghours: 10,
    },
    {
      projectID: '1',
      taskID: '3',
      areaName: 'Construction',
      loghours: 10,
    },
    {
      projectID: '1',
      taskID: '3',
      areaName: 'Construction',
      loghours: 20,
    },
    {
      projectID: '1',
      taskID: '4',
      areaName: 'Walling',
      loghours: 10,
    },
    {
      projectID: '1',
      taskID: '5',
      areaName: 'Woodwork',
      loghours: 100,
    },
    {
      projectID: '1',
      taskID: '6',
      areaName: 'Woodwork',
      loghours: 100,
    },
    {
      projectID: '1',
      taskID: '7',
      areaName: 'Woodwork',
      loghours: 50,
    },
    {
      projectID: '1',
      taskID: '8',
      areaName: 'Woodwork',
      loghours: 50,
    },
    {
      projectID: '1',
      taskID: '9',
      areaName: 'Woodwork',
      loghours: 50,
    },
    {
      projectID: '2',
      taskID: '1',
      areaName: 'Brickwork',
      loghours: 10,
    },
    {
      projectID: '2',
      taskID: '2',
      areaName: 'Brickwork',
      loghours: 30,
    },
    {
      projectID: '2',
      taskID: '3',
      areaName: 'Brickwork',
      loghours: 80,
    },
    {
      projectID: '2',
      taskID: '4',
      areaName: 'Brickwork',
      loghours: 50,
    },
    {
      projectID: '3',
      taskID: '1',
      areaName: 'Brickwork',
      loghours: 50,
    },
    {
      projectID: '4',
      taskID: '1',
      areaName: 'Woodwork',
      loghours: 50,
    },
  ]);

  currentList = this.listSource.asObservable();

  constructor() { }
  changeList(list: any[]) {
    this.listSource.next(list);
  }
}
