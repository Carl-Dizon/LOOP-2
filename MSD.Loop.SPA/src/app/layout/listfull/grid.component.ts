import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';
import { ProjectService } from '../../services/CompanyProjects/project.service';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {
    constructor(public router: Router, private list: ProjectService) {}
    headerData: string[];
    projectName: any[];
    Uppgifter: string[];
    ngOnInit() {

        this.headerData = [ 'Projekt', 'Prospektfas', 'Säljfas', 'Anbudsfas', 'Uppstartsfas',
        'Byggfas', 'Avslutsfas', 'Garantifas', 'Totalt'];
        this.list.currentList.subscribe(list => this.projectName = list);
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

    requirementsClick(id: number) {
        this.router.navigate(['/tables', id]);
      }
}
