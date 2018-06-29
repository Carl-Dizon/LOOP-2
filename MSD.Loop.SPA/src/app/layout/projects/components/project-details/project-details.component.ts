import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../shared/services';
import { routerTransition } from '../../../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import { Route, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../../shared/services/tasks/task.service';
import { LoghourService } from '../../../../shared/services/loghours/loghour.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [routerTransition()]

})
export class ProjectDetailsComponent implements OnInit {
  private sub: any;
  index: number;
  projects: any;
  specificproject: object;
  tasks: any[];
  specificTask: any[] = [];
  status: number;
  loghour: any[];
  tempdata: number[] = [];

  constructor(private projectService: ProjectService, public router: Router, public route: ActivatedRoute,
    private tasklist: TaskService, private loghourlist: LoghourService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.index = params['id'];
    });
        this.projects = this.projectService.getProjects();
        this.tasklist.currentList.subscribe(tasklist => this.tasks = tasklist);
        this.loghourlist.currentList.subscribe(loghourlist => this.loghour = loghourlist);
        // this.specificproject = this.projects[this.index].name;
      this.specificproject = this.projects[this.index - 1];

      this.tasks.forEach(tasks => {
        // tslint:disable-next-line:triple-equals
        if (tasks.projectID == this.index) {
          this.specificTask.push(tasks);
        }
      });
      this.loghour.forEach(loghour => {
        // tslint:disable-next-line:triple-equals
        if (loghour.projectID == this.index) {
         this.tempdata.push(loghour.loghours);
          //  console.log(loghour.loghours);
        }
      });
      this.status = 0;
      this.tempdata.forEach(tempdata => {
      this.status += tempdata;
      this.status = this.status / this.specificTask.length;
      this.status = Math.floor(this.status);
      });
      console.log(this.specificTask.length);
  }
}
