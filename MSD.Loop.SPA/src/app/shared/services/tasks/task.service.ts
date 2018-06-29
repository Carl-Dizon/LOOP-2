import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private listSource = new BehaviorSubject<any[]>([
    {
      areaName: 'Woodwork ',
      projectID: '1',
      asignee: 'FRANSISCO N ',
      task: 'Skicka bygglovsansökan ',
      taskID: '1',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Woodwork ',
      projectID: '1',
      asignee: 'ÅSA M ',
      task: 'Publicera pressmeddelande ',
      taskID: '2',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Woodwork ',
      projectID: '1',
      asignee: 'JONATHAN H ',
      task: 'Stämma av bygglov med förvaltaren ',
      taskID: '3',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Woodwork ',
      projectID: '1',
      asignee: 'JONATHAN H ',
      task: 'Stämma av bygglov med förvaltaren ',
      taskID: '4',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Woodwork ',
      projectID: '1',
      asignee: 'JONATHAN H ',
      task: 'Stämma av bygglov med förvaltaren ',
      taskID: '5',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Woodwork ',
      projectID: '1',
      asignee: 'JONATHAN H ',
      task: 'Stämma av bygglov med förvaltaren ',
      taskID: '6',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Woodwork ',
      projectID: '1',
      asignee: 'JONATHAN H ',
      task: 'Stämma av bygglov med förvaltaren ',
      taskID: '7',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Woodwork ',
      projectID: '1',
      asignee: 'JONATHAN H ',
      task: 'Stämma av bygglov med förvaltaren ',
      taskID: '8',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Woodwork ',
      projectID: '1',
      asignee: 'CHRISTIAN N ',
      task: 'Säga upp tidigare VVS-avtal ',
      taskID: '9',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Brickwork ',
      projectID: '2',
      asignee: 'ROBERT F ',
      task: 'Rapportera timmar för projektering ',
      taskID: '1',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Brickwork ',
      projectID: '2',
      asignee: 'ÅKLARA N ',
      task: 'Skicka bygglovsansökan ',
      taskID: '2',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Brickwork ',
      projectID: '2',
      asignee: 'ROBERT F. ',
      task: 'Rapportera timmar för projektering ',
      taskID: '3',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Brickwork ',
      projectID: '2',
      asignee: 'ÅSA M ',
      task: 'Rapportera timmar för projektering ',
      taskID: '4',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Construction ',
      projectID: '3',
      asignee: 'ÅSA M ',
      task: 'Rapportera timmar för projektering ',
      taskID: '1',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Construction ',
      projectID: '3',
      asignee: 'ÅSA M ',
      task: 'Rapportera timmar för projektering ',
      taskID: '2',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
    {
      areaName: 'Construction ',
      projectID: '3',
      asignee: 'ÅSA M ',
      task: 'Rapportera timmar för projektering ',
      taskID: '3',
      dueDate: '17.01.22',
      profPic: '/assets/images/employeeavatar.png ',
    },
  ]);

  currentList = this.listSource.asObservable();

  constructor() { }
  changeList(list: any[]) {
    this.listSource.next(list);
  }
}
