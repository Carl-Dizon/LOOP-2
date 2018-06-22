import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private listSource = new BehaviorSubject<any[]>([
    {
      projectName: 'Kopparhusen',
      profPic: '/assets/images/Kopparhusen.PNG'
    },
    {
        projectName: 'Stadsrosen ',
        profPic: '/assets/images/Stadsrosen.PNG '
    },
    {
        projectName: 'Strutens förskola ',
        profPic: '/assets/images/Strutens.PNG '
    },
    {
        projectName: 'Kyrkbacken ',
        profPic: '/assets/images/Kyrkbacken.PNG '
    },
    {
        projectName: 'Kvarnbäcken ',
        profPic: '/assets/images/Kvarnbäcken.PNG '
    },
    {
        projectName: 'Filbunken ',
        profPic: '/assets/images/Stadsrosen.PNG '
    },
    {
        projectName: 'Brobergsgymnasiet ',
        profPic: '/assets/images/Strutens.PNG '
    },
    {
        projectName: 'Krampkänningen ',
        profPic: '/assets/images/Kyrkbacken.PNG '
    },
    {
        projectName: 'Storskogen ',
        profPic: '/assets/images/Strutens.PNG ',
    },

  ]);

  currentList = this.listSource.asObservable();

  constructor() { }
  changeList(list: any[]) {
    this.listSource.next(list);
  }
}
