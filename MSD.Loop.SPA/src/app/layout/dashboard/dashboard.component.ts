import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import { TaskService } from '../../services/ProjectTasks/task.service';
import { EventService } from '../../services/events/event.service';
import { UserService } from '../../services/CompanyUsers/user.service';
import { PhotosService } from '../../services/temporarydashboardphotos/photos.service';

declare var angular: any;
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    pushRightClass: 'push-right';
    tasks: any[];
    events: any[];
    users: any[];
    Uppgifter: string[];
    Handelser: string[];
    photo: any[];

    constructor(public router: Router, private tasklist: TaskService, private eventlist: EventService,
        private userlist: UserService, private photolist: PhotosService) {
        this.tasklist.currentList.subscribe(tasklist => this.tasks = tasklist);
        this.eventlist.currentList.subscribe(eventlist => this.events = eventlist);
        this.userlist.currentList.subscribe(userlist => this.users = userlist);
        this.photolist.currentList.subscribe(photolist => this.photo = photolist);

    }
    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    ngOnInit() {
        this.Uppgifter = ['Projekt', 'Uppgift'];

        this.Handelser = ['Projekt', 'Händelse'];
        }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);

    }

    requirementsClick(id: number) {
        this.router.navigate(['/tables', id]);
      }

}
