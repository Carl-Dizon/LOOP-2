import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../../../services/CompanyProjects/project.service';
import { TaskService } from '../../../services/ProjectTasks/task.service';
// import {AlertsComponent} from '../alerts/alerts.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    // @ViewChild (AlertsComponent) alert: AlertsComponent;
    pushRightClass: 'push-right';
    public isCollapsed = false;
    reason: string;
    modalDisplay = 'none';
    modalDisplayAddProject = 'none';
    tasks: any[];
    projects: any[];
    alertMessage: string;

    constructor(private translate: TranslateService, public router: Router,
        private projectlist: ProjectService, private tasklist: TaskService) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.projectlist.currentList.subscribe(projectlist => this.projects = projectlist);
        this.projectlist.changeList(this.projects);
        this.tasklist.currentList.subscribe(tasklist => this.tasks = tasklist);
        this.tasklist.changeList(this.tasks);
    }

    saveProject(form: IProjectApplication) {
        form.profPic = '/assets/images/Stadsrosen.PNG';
        console.log(this.projects);
        this.projects.push(form);
        this.projectlist.changeList(this.projects);
        console.log('Submitted');
      }
      saveTask(formtask: ITaskApplication) {
        formtask.profPic = '/assets/images/Stadsrosen.PNG';
        console.log(this.tasks);
        this.tasks.push(formtask);
        this.tasklist.changeList(this.tasks);
        console.log('Submitted');
      }

    showModal() {

        this.modalDisplay = 'block';
      }
      closeModal() {
        this.modalDisplay = 'none';
      }
      showModalProject() {

        this.modalDisplayAddProject = 'block';
      }
      closeModalProject() {
        this.modalDisplayAddProject = 'none';
      }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
    onViewClick() {

        const view = (<HTMLInputElement>document.getElementById('mySelect')).value;
        console.log(view);
        if (view === 'grid') {
            this.router.navigate(['/dashboard']);
        } else if (view === 'list') {
            this.router.navigate(['/list']);
        } else if (view === 'listfull') {
            this.router.navigate(['/listfull']);
        }


    }
    onBtnClick() {
        this.router.navigate(['/addtask']);
    }


}
export interface IProjectApplication {
    ProjectName: string;
    profPic: '/assets/images/Stadsrosen.PNG';

  }

  export interface ITaskApplication {
    projectName: string;
    task: string;
    asignee: string;
    profPic: '/assets/images/Stadsrosen.PNG';

  }

