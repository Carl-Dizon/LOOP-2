import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { PrototypeLandingPage } from '../pages/prototype-landing/prototype-landing';
import { IssuesPage } from '../pages/issues/issues';
import { AreaPage } from '../pages/area/area';
import { ProjectsPage } from '../pages/projects/projects';
import { LogHourPage } from '../pages/log-hour/log-hour';
import { LogMaterialPage } from '../pages/log-material/log-material';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PrototypeLandingPage;
  // rootPage: any = ProjectsPage;// PrototypeLandingPage; //IssuesPage; //

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
