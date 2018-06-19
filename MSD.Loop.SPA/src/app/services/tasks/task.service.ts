import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private listSource = new BehaviorSubject<any[]>([
    {
      companyName:"Kopparhusen",
      asignee:"FRANSISCO N",
      task:"Skicka bygglovsansökan",
      profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Struten",
        asignee:"ÅSA M",
        task:"Publicera pressmeddelande",
        profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Kyrkbacken",
        asignee:"JONATHAN H",
        task:"Stämma av bygglov med förvaltaren",
        profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Kyrkbacken",
        asignee:"CHRISTIAN N",
        task:"Säga upp tidigare VVS-avtal",
        profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Kyrkbacken",
        asignee:"ELEONORA P",
        task:"Rapportera timmar för projektering",
        profPic:"/assets/images/employeeavatar.png",
        
    },
    {
        companyName:"Stadsrosen",
        asignee:"ROBERT F",
        task:"Rapportera timmar för projektering",
        profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Brobergsgymnasiet",
        asignee:"ÅKLARA N",
        task:"Skicka bygglovsansökan",
        profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Stadsrosen",
        asignee:"ROBERT F.",
        task:"Rapportera timmar för projektering",
        profPic:"/assets/images/employeeavatar.png",
    },
    {
        companyName:"Stadsrosen",
        asignee:"ÅSA M",
        task:"Rapportera timmar för projektering",
        profPic:"/assets/images/employeeavatar.png",
    },
   
  ]);

  currentList = this.listSource.asObservable();

  constructor() { }
  
  changeList(list: any[]) {
    this.listSource.next(list);
  }
 
}