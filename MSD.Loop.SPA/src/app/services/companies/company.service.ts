import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private listSource = new BehaviorSubject<any[]>([
    {
      companyName:"Kopparhusen",
      profPic:"/assets/images/Kopparhusen.PNG",
      task:"Skicka bygglovsansökan"
    },
    {
        companyName:"Stadsrosen",
        profPic:"/assets/images/Stadsrosen.PNG",
        task:"Publicera pressmeddelande"
    },
    {
        companyName:"Strutens förskola",
        profPic:"/assets/images/Strutens.PNG",
        task:"Publicera pressmeddelande"
    },
    {
        companyName:"Kyrkbacken",
        profPic:"/assets/images/Kyrkbacken.PNG",
        task:"Stämma av bygglov med förvaltaren"
    },
    {
        companyName:"Kvarnbäcken",
        profPic:"/assets/images/Kvarnbäcken.PNG",
        task:"Stämma av bygglov med förvaltaren"
        
    },
    {
        companyName:"Filbunken",
        profPic:"/assets/images/Stadsrosen.PNG",
        task:"Skicka bygglovsansökan"
    },
    {
        companyName:"Brobergsgymnasiet",
        profPic:"/assets/images/Strutens.PNG",
        task:"Skicka bygglovsansökan"
    },
    {
        companyName:"Krampkänningen",
        profPic:"/assets/images/Kyrkbacken.PNG",
        task:"Skicka bygglovsansökan"
    },
    {
        companyName:"Storskogen",
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
