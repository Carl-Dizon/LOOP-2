import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoggedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoggedProvider {

  logURL = '../../assets/dummy/log.json';

  constructor(public http: HttpClient) {
    console.log('Hello LoggedProvider Provider');
  }

  getProjectLog(){
    return this.http.get(this.logURL).toPromise().then(
      callBack => {
        let logs: any = callBack;
        let sortedByDateLogs: any = logs.sort(
          (n1,n2) => {
            if(n1.timeStamp > n2.timeStamp){
              return 1;
            }
            if(n1.timeStamp < n2.timeStamp){
              return -1;
            }
            return 0;
          }
        );

        let logsByDate: any[] = undefined;
        for(let index=0;index<sortedByDateLogs.length;index++){
          if(logsByDate === undefined){
            logsByDate = [];
            logsByDate.push(sortedByDateLogs[index]);
          } else {
            if(sortedByDateLogs[index].timeStamp === logsByDate[(logsByDate.length - 1)].timeStamp){
              logsByDate[(logsByDate.length - 1)].hoursLogged += sortedByDateLogs[index].hoursLogged;
            } else {
              logsByDate.push(sortedByDateLogs[index]);
            }
          }
        }

        return logsByDate;
      }
    )
  }

}
