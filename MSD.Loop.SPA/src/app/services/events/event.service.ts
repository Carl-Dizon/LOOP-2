import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private listSource = new BehaviorSubject<any[]>([
    {
      companyName:"Kopparhusen",    
      event:"Redigerade Rapportera timmar för projektering",
      asignee:"FRANSISCO N",
      profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Kopparhusen",
        event:"Slutförde Publicera pressmeddelande",
        asignee:"CHRISTIAN N",
        profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Kopparhusen",      
        event:"Slutförde Skicka bygglovsansökan",
        asignee:"ELEONORA P",
        profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Kopparhusen",
        event:"Raderade Säga upp tidigare VVS-avtal",
        asignee:"ROBERT F",
        profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Kopparhusen",
        event:"Slutförde Rapportera timmar för projektering",
        asignee:"KLARA N",
        profPic:"/assets/images/employeeavatar.png",
        
    },
   
   
  ]);
  currentList = this.listSource.asObservable();

  constructor() { }
  
  changeList(list: any[]) {
    this.listSource.next(list);
  }
 
}
