import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavParams, NavController } from 'ionic-angular';
import { IUser } from '../../models/IUser';
import { IRole } from '../../models/IRole';
import { LogHourPage } from '../log-hour/log-hour';
import { LogMaterialPage } from '../log-material/log-material';
import { ProjectsPage } from '../projects/projects';
import { IssuesPage } from '../issues/issues';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabs: any;
  user: IUser;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.user = navParams.get('user');
    this.generatePages(this.user.role);
  }

  generatePages(role: IRole) {
    if (role.name === 'Worker') {
      this.tabs = [
        {
          title: 'Log Hours',
          root: LogHourPage,
          icon: 'time'
        },
        {
          title: 'Log Materials',
          root: LogMaterialPage,
          icon: 'logo-buffer'
        }
      ];
    } else if (role.name === 'Site Manager') {
      this.tabs = [
        {
          title: 'Projects',
          root: ProjectsPage,
          icon: 'albums'
        },
        {
          title: 'Issues',
          root: IssuesPage,
          icon: 'notifications',
          numberOfIssues: 3
        },
        {
          title: 'Log',
          root: LogHourPage,
          icon: 'time'
        },
        {
          title: 'Log',
          root: LogMaterialPage,
          icon: 'logo-buffer'
        }
      ];
    }
  }
}
