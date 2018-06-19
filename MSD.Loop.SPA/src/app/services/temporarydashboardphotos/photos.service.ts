import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor() { }
  private listSource = new BehaviorSubject<any[]>([
    {
      companyName:"Kopparhusen",    
      profPic:"/assets/images/Capture.PNG",
    },
    {
      companyName:"Brf. Stadsrosen",    
      profPic:"/assets/images/Capture2.PNG",
    },
    {
      companyName:"Strutens Forskola",    
      profPic:"/assets/images/Capture3.PNG",
    },
    {
      companyName:"Kyrkbacken",    
      profPic:"/assets/images/Capture4.PNG",
    },
    
   
   
  ]);
  currentList = this.listSource.asObservable();


  
  changeList(list: any[]) {
    this.listSource.next(list);
  }
 
}


