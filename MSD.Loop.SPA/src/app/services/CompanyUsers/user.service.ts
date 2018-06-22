import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listSource = new BehaviorSubject<any[]>([
    {
      userName: 'FRANSISCO N ',
      profPic: '/assets/images/man.PNG ',
    },
    {
      userName: 'ÅSA M.  ',
      profPic: '/assets/images/man.PNG ',
    },
    {
      userName: 'JONATHAN H ',
      profPic: '/assets/images/man.PNG ',
    },
    {
      userName: 'CHRISTIAN N ',
      profPic: '/assets/images/man.PNG ',
    },
    {
      userName: 'ELEONORA P. ',
      profPic: '/assets/images/man.PNG ',
    },
    {
      userName: 'ROBERT F ',
      profPic: '/assets/images/man.PNG ',
    },
    {
      userName: 'KLARA N ',
      profPic: '/assets/images/man.PNG ',
    },
    {
      userName: 'ROBERT F. ',
      profPic: '/assets/images/man.PNG ',
    },

  ]);

  currentList = this.listSource.asObservable();

  constructor() { }

  changeList(list: any[]) {
    this.listSource.next(list);
  }
}
