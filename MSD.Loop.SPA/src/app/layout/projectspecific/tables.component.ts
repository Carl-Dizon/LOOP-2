import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import { ProjectService } from '../../services/CompanyProjects/project.service';
import { Route, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/ProjectTasks/task.service';
import { EventService } from '../../services/events/event.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor(public router: Router, private tasklist: TaskService, private eventlist: EventService,
        public route: ActivatedRoute, private list: ProjectService) { }
    private sub: any;
    companies: any[];
    projectName: any[];
    profPic: string;
    task: string;
    id: number;
    project: any[];
    Uppgifter: string[];
    tasks: any[];
    Handelser: string[];
    events: any[];
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.tasklist.currentList.subscribe(tasklist => this.tasks = tasklist);
        this.list.currentList.subscribe(list => this.projectName = list);
        this.eventlist.currentList.subscribe(eventlist => this.events = eventlist);
        this.project = this.projectName[this.id];
        this.Uppgifter = ['Projekt', 'Uppgift'];
        this.Handelser = ['Projekt', 'Händelser'];
    }
    onViewClick() {
        const view = (<HTMLInputElement>document.getElementById('mySelect')).value;
        console.log(view);
        if (view === 'grid') { this.router.navigate(['/dashboard']);     }
        if (view === 'list') { this.router.navigate(['/list']);  }
        if (view === 'listfull') {
            this.router.navigate(['/listfull']);
        }
    }
}
