import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private listSource = new BehaviorSubject<any[]>([
    {
      projectName:"Kopparhusen",
      profPic:"/assets/images/Kopparhusen.PNG",
      task:"Skicka bygglovsansökan"
    },
    {
        projectName:"Stadsrosen",
        profPic:"/assets/images/Stadsrosen.PNG",
        task:"Publicera pressmeddelande"
    },
    {
        projectName:"Strutens förskola",
        profPic:"/assets/images/Strutens.PNG",
        task:"Publicera pressmeddelande"
    },
    {
        projectName:"Kyrkbacken",
        profPic:"/assets/images/Kyrkbacken.PNG",
        task:"Stämma av bygglov med förvaltaren"
    },
    {
        projectName:"Kvarnbäcken",
        profPic:"/assets/images/Kvarnbäcken.PNG",
        task:"Stämma av bygglov med förvaltaren"
        
    },
    {
        projectName:"Filbunken",
        profPic:"/assets/images/Stadsrosen.PNG",
        task:"Skicka bygglovsansökan"
    },
    {
        projectName:"Brobergsgymnasiet",
        profPic:"/assets/images/Strutens.PNG",
        task:"Skicka bygglovsansökan"
    },
    {
        projectName:"Krampkänningen",
        profPic:"/assets/images/Kyrkbacken.PNG",
        task:"Skicka bygglovsansökan"
    },
    {
        projectName:"Storskogen",
        profPic:"/assets/images/Strutens.PNG",
        task:"Skicka bygglovsansökan"
    },
   
  ]);

  currentList = this.listSource.asObservable();

  constructor() { }
  
  changeList(list: any[]) {
    this.listSource.next(list);
  }
}
