import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import { TaskService } from '../../services/tasks/task.service'
import { EventService } from '../../services/events/event.service'
import { UserService } from '../../services/users/user.service'
import { ProjectService } from '../../services/projects/project.service' 
@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
    tasks: any[];
    events: any[];
    Uppgifter: string[];
    Projekt: string[];
    Handelser: string[];
    users: any[];
    project:any[];
    // bar chart
    colours : object[];
    

    constructor(public router: Router,private tasklist: TaskService, private eventlist: EventService,private userlist: UserService,private projectlist: ProjectService) {
        
      
    }

    ngOnInit() {
        this.tasklist.currentList.subscribe(tasklist => this.tasks = tasklist);
        this.eventlist.currentList.subscribe(eventlist => this.events = eventlist);
        this.userlist.currentList.subscribe(userlist => this.users = userlist);
        this.projectlist.currentList.subscribe(projectlist => this.project = projectlist);
        this.Uppgifter = ['Projekt','Uppgift'];

        this.Projekt = ['Projekt','Progress'];
        this.Handelser = ['Projekt','Händelse'];
console.log(this.project);
 


    }
    onViewClick()
    {
        
        var view = (<HTMLInputElement>document.getElementById("mySelect")).value;
        console.log(view);
        if(view == "grid")
        {
            this.router.navigate(['/dashboard']);
            (<HTMLInputElement>document.getElementById("mySelect")).value = "grid";
        }
        else if(view == "list")
        {
            this.router.navigate(['/list']);
        
        }
        else  if(view == "listfull")
        {
            this.router.navigate(['/listfull']);
        }
        //this.r
        //this.router.navigate(['/charts']);
        
    }
    requirementsClick(id: number){
        this.router.navigate(['/tables', id]);
      } 
}
