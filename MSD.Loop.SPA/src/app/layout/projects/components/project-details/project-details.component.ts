import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../shared/services';
import { routerTransition } from '../../../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import { Route, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../../shared/services/tasks/task.service';
import { LoghourService } from '../../../../shared/services/loghours/loghour.service';
import { AreaService } from '../../../../shared/services/areas/area.service';
import { MaterialService } from '../../../../shared/services/materials/material.service';


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
  areas: any[];
  materials: any[];
  specificTask: any[] = [];
  specificMaterial: any[] = [];
  status: number;
  totalhours: number;
  totalhourpercentage: number;
  loghour: any[];
  tempdata: number[] = [];

  woodwork: any[] = [];
  totalwoodworkhours: number;
  totalbrickworkhours: number;
  totalconstructionhours: number;
  totalwallinghours: number;
  totalplumbinghours: number;
  totalelectricalhours: number;
  totalareahourestimate: number;

  woodworkhourpercentage: number;
  brickworkhourpercentage: number;
  contructionhourpercentage: number;
  wallinghourpercentage: number;
  plumbinghourpercentage: number;
  electricalhourpercentage: number;
  arealist: any[];
  modalDisplay = 'none';
  modalMaterialDisplay = 'none';

  constructor(private projectService: ProjectService, public router: Router, public route: ActivatedRoute,
    private tasklist: TaskService, private loghourlist: LoghourService, private areaservicelist: AreaService,
    private materiallist: MaterialService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.index = params['id'];
    });
    this.projects = this.projectService.getProjects();
    this.tasklist.currentList.subscribe(tasklist => this.tasks = tasklist);
    this.loghourlist.currentList.subscribe(loghourlist => this.loghour = loghourlist);
    this.areaservicelist.currentList.subscribe(areaservicelist => this.areas = areaservicelist);
    this.materiallist.currentList.subscribe(materiallist => this.materials = materiallist);
    // this.specificproject = this.projects[this.index].name;
    this.specificproject = this.projects[this.index - 1];

    this.materials.forEach(materials => {
      // tslint:disable-next-line:triple-equals
      if (materials.projectID === this.index) {
        this.specificMaterial.push(materials);
      }
    });
 // tslint:disable-next-line:comment-format
    //forImprovement
    this.tasks.forEach(tasks => {
      // tslint:disable-next-line:triple-equals
      if (tasks.projectID === this.index) {
        this.specificTask.push(tasks);
      }
    });
    this.totalareahourestimate = 0;
    this.specificTask.forEach(stasks => {
      // tslint:disable-next-line:triple-equals

      this.totalareahourestimate += stasks.hourEstimate;
    });
    this.loghour.forEach(loghour => {
      // tslint:disable-next-line:triple-equals
      if (loghour.projectID == this.index) {
        this.tempdata.push(loghour.loghours);
        //  console.log(loghour.loghours);
      }
    });
    this.totalwoodworkhours = 0;
    this.totalbrickworkhours = 0;
    this.totalconstructionhours = 0;
    this.totalwallinghours = 0;
    this.totalplumbinghours = 0;
    this.totalelectricalhours = 0;
    this.loghour.forEach(loghour => {
      // tslint:disable-next-line:triple-equals
      if (loghour.projectID == this.index) {
        if (loghour.areaName === 'Woodwork') {
          this.totalwoodworkhours += loghour.loghours;
        }
        if (loghour.areaName === 'Brickwork') {
          this.totalbrickworkhours += loghour.loghours;
        }
        if (loghour.areaName === 'Construction') {
          this.totalconstructionhours += loghour.loghours;
        }
        if (loghour.areaName === 'Walling') {
          this.totalwallinghours += loghour.loghours;
        }
        if (loghour.areaName === 'Plumbing') {
          this.totalplumbinghours += loghour.loghours;
        }
        if (loghour.areaName === 'Electricals') {
          this.totalelectricalhours += loghour.loghours;
        }
        // this.tempdata.push(loghour.loghours);
      }
    });
    this.woodworkhourpercentage = this.getAreaPercentage(this.totalwoodworkhours, this.totalareahourestimate);
    this.brickworkhourpercentage = this.getAreaPercentage(this.totalbrickworkhours, this.totalareahourestimate);
    this.contructionhourpercentage = this.getAreaPercentage(this.totalconstructionhours, this.totalareahourestimate);
    this.wallinghourpercentage = this.getAreaPercentage(this.totalwallinghours, this.totalareahourestimate);
    this.plumbinghourpercentage = this.getAreaPercentage(this.totalplumbinghours, this.totalareahourestimate);
    this.electricalhourpercentage = this.getAreaPercentage(this.totalelectricalhours, this.totalareahourestimate);

    this.status = 0;
    this.tempdata.forEach(tempdata => {
      this.status += tempdata;
      this.totalhours = this.projects[this.index - 1].estimatedHours;
      this.totalhourpercentage = this.getAreaPercentage(this.status, this.totalhours);
    });
  }
  getAreaPercentage(value1, value2) {
    let total: number;
    total = value1 / value2;
    total = Math.floor(total * 100);
    return total;
  }
  showModal() {

    this.modalDisplay = 'block';
  }
  closeModal() {
    this.modalDisplay = 'none';
  }
  showMaterialModal() {

    this.modalMaterialDisplay = 'block';
  }
  closeMaterialModal() {
    this.modalMaterialDisplay = 'none';
  }
  saveTask(formtask: ITaskApplication) {
    formtask.projectID = this.projects[this.index].projectID;
    console.log(this.tasks);
    this.tasks.push(formtask);
    this.tasklist.changeList(this.tasks);
    console.log('Submitted');
    this.tasklist.currentList.subscribe(tasklist => this.tasks = tasklist);
  }
}

export interface ITaskApplication {
  areaName: string;
  projectID: number;
  asignee: string;
  task: string;
  taskID: number;
  dueDate: '17.01.22';
  hourEstimate: number;
  profPic: '/assets/images/employeeavatar.png';
}
