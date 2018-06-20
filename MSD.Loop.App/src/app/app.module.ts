import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ProjectPage } from '../pages/project/project';
import { ProjectAddPage } from '../pages/project-add/project-add';
import { MaterialPage } from '../pages/material/material';
import { UserAddPage } from '../pages/user-add/user-add';
import { ListPage } from '../pages/list/list';

import { StringService } from '../services/string.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ProjectPage,
    ProjectAddPage,
    MaterialPage,
    UserAddPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjectPage,
    ProjectAddPage,
    MaterialPage,
    UserAddPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StringService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
