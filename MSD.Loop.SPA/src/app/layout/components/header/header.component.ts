import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProjectService } from '../../../services/projects/project.service' 
// import {AlertsComponent} from '../alerts/alerts.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    // @ViewChild (AlertsComponent) alert: AlertsComponent;
    pushRightClass: string = 'push-right';
    public isCollapsed = false;
    reason: string;
    modalDisplay = "none";
    modalDisplayAddProject = "none";
    
    projects:any[];
    alertMessage:string; 

    constructor(private translate: TranslateService, public router: Router,private projectlist: ProjectService) {
       
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
       
    }

    save(form: IProjectApplication) {
        form.profPic = "/assets/images/Stadsrosen.PNG";
        console.log(this.projects);  
        //adds leave Data to temorary leave storage/array ---------------------------
        this.projects.push(form);
        this.projectlist.changeList(this.projects);
        console.log("Submitted");
        //---------------------------------------------------------------------------------
        // this.alertMessage = "Leave Form Submitted";
        // this.alert.showError(this.alertMessage);
       
      }

    showModal(){
        console.log("clicked text-area");
        this.modalDisplay = "block";
      }
      closeModal(){
        this.modalDisplay = "none";
      } 
      showModalProject(){
        console.log("clicked text-area");
        this.modalDisplayAddProject = "block";
      }
      closeModalProject(){
        console.log("closed text-area");
        this.modalDisplayAddProject = "none";
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
    onViewClick()
    {
        
        var view = (<HTMLInputElement>document.getElementById("mySelect")).value;
        console.log(view);
        if(view == "grid")
        {
            this.router.navigate(['/dashboard']);
        }
        else if(view == "list")
        {
            this.router.navigate(['/list']);
        
        }
        else if(view == "listfull")
        {
            this.router.navigate(['/listfull']);
        }
        //this.router.navigate(['/charts']);
        
    }
    onBtnClick()
    {
        this.router.navigate(['/addtask']);
    }
    

}
export interface IProjectApplication {
    ProjectName: string;
    profPic:"/assets/images/Stadsrosen.PNG";
    
  }
  
//   export interface ILeaveType {
//     Name: string;
//     Checked: boolean;
//   }
