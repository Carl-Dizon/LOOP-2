import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { PrototypeLandingPage } from '../pages/prototype-landing/prototype-landing';
import { HttpClientModule } from '@angular/common/http';
import { LogHourPage } from '../pages/log-hour/log-hour';
import { LogMaterialPage } from '../pages/log-material/log-material';
import { ProjectProvider } from '../providers/project/project';
import { AreaProvider } from '../providers/area/area';
import { MaterialProvider } from '../providers/material/material';
import { ProjectsPage } from '../pages/projects/projects';
import { ComponentsModule } from '../components/components.module';
import { ProgressBarModule } from 'angular-progress-bar';
import { AreaPageModule } from '../pages/area/area.module';
import { IssuesPage } from '../pages/issues/issues';
import { TaskViewPage } from '../pages/task-view/task-view';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PrototypeLandingPage,
    LogHourPage,
    LogMaterialPage,
    ProjectsPage,
    IssuesPage,
    TaskViewPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ProgressBarModule,
    AreaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PrototypeLandingPage,
    LogHourPage,
    LogMaterialPage,
    ProjectsPage,
    IssuesPage,
    TaskViewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ProjectProvider,
    AreaProvider,
    MaterialProvider
  ]
})
export class AppModule {}
