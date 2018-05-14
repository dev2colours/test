import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
// import { NguiMapModule} from '@ngui/map';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
// import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { BaseComponent } from './comps/base/base.component';
import { TeamsComponent } from './teams/teams.component';
import { DataService } from './data.service';
import { PlayersComponent } from './comps/players/players.component';
import { FlashComponent } from './comps/flash/flash.component';
import { BossComponent } from './comps/boss/boss.component';
import { BigComponent } from './comps/colorspages/big/big.component';
import { SubmenuComponent } from './comps/calendar/submenu/submenu.component';
import { PanelsComponent } from './comps/calendar/panels/panels/panels.component';
import { LoginComponent } from './comps/auth/login/login.component';
import { RegisterComponent } from './comps/auth/register/register.component';
import { CompanySetupComponent } from './comps/colorspages/company/setup/setup.component';
import { PersonalSetupComponent } from './comps/colorspages/personal/setup/setup.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { CalendarComponent } from './comps/calendar/calendar.component';
// import { ImplComponent } from './comps/colorspages/personal/implementation/implementation.component';
import { PlanningComponent } from './comps/calendar/planning/planning.component';
import { ReportComponent } from './comps/colorspages/personal/report/report.component';
import { PersonalComponent } from './comps/colorspages/personal/personal.component';
import { CompanyComponent } from './comps/colorspages/company/company.component';
import { PersonalDashboardComponent } from './comps/colorspages/personal/personal-dashboard/personal-dashboard.component';
import { ProjectComponent } from './comps/colorspages/project/project.component';
import { WorkComponent } from './comps/colorspages/work/work.component';
import { CompanySubmenuComponent } from './comps/colorspages/company/submenu/submenu.component';
import { PersonalImplComponent } from './comps/colorspages/personal/implementation/implementation.component';
import { CompanyImplComponent } from './comps/colorspages/company/implementation/implementation.component';
import { ProjectImplComponent } from './comps/colorspages/project/implementation/implementation.component';
import { SubsidiariesComponent } from './comps/colorspages/company/setup/subsidiaries/subsidiaries.component';
import { DepartmentsComponent } from './comps/colorspages/company/setup/departments/departments.component';
import { ProjectsComponent } from './comps/colorspages/company/setup/projects/projects.component';
import { ClientAccountsComponent } from './comps/colorspages/company/setup/client-accounts/client-accounts.component';
import { AssetRegisterComponent } from './comps/colorspages/company/setup/asset-register/asset-register.component';
import { StaffRegisterComponent } from './comps/colorspages/company/setup/staff-register/staff-register.component';
import { TaskSchedularComponent } from './comps/calendar/planning/task-schedular/task-schedular.component';
import { FullcalendarComponent } from './comps/calendar/planning/fullcalendar/fullcalendar.component';
import { ProjectsImplComponent } from './comps/colorspages/projects/implementation/implementation.component';
import { ProjectsSetupComponent } from './comps/colorspages/projects/setup/setup.component';
import { ProjectDescriptionComponent } from './comps/colorspages/projects/setup/project-description/project-description.component';
import { ProjectDirectoryComponent } from './comps/colorspages/projects/setup/project-directory/project-directory.component';
import { ProjectLabourComponent } from './comps/colorspages/projects/setup/project-labour/project-labour.component';
import { ProjectPlantComponent } from './comps/colorspages/projects/setup/project-plant/project-plant.component';
import { PojectsSubmenuComponent } from './comps/colorspages/projects/submenu/submenu.component';
import { ColoursProjectsComponent } from './comps/colorspages/projects/colours-projects.component';
// import { AuthorizationComponent } from './services/authorization/authorization.component';
// import { CompanyServicesComponent } from './services/company/company-services.component';
// import { PersonalServicesComponent } from './services/personal/personal-services.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    // MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    BaseComponent,
    TeamsComponent,
    PlayersComponent,
    FlashComponent,
    BossComponent,
    BigComponent,
    SubmenuComponent,
    PanelsComponent,
    LoginComponent,
    RegisterComponent,
    CompanySetupComponent,
    PersonalSetupComponent,
    ProjectsSetupComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CalendarComponent,
    PersonalImplComponent,
    CompanyImplComponent,
    ProjectsImplComponent,
    ProjectImplComponent,
    PlanningComponent,
    PersonalComponent,
    CompanyComponent,
    PersonalDashboardComponent,
    ProjectComponent,
    WorkComponent,
    CompanySubmenuComponent,
    SubsidiariesComponent,
    DepartmentsComponent,
    ProjectsComponent,
    ClientAccountsComponent,
    AssetRegisterComponent,
    StaffRegisterComponent,
    TaskSchedularComponent,
    FullcalendarComponent,
    ProjectDescriptionComponent,
    ProjectDirectoryComponent,
    ProjectLabourComponent,
    ProjectPlantComponent,
    PojectsSubmenuComponent,
    ColoursProjectsComponent,
    // services

    // AuthorizationComponent,
    // CompanyServicesComponent,
    // PersonalServicesComponent

    /* end */
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FormsModule,
    FooterModule,
    FixedPluginModule,
    AngularFireModule.initializeApp({
      apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx_LO_I21td7g',
      authDomain: 'xxxxxxxxxxxxxxxxxxxx.firebaseapp.com',
      databaseURL: 'xxxxxxxxxxxxxxxxxxxx.firebaseio.com',
      projectId: 'xxxxxxxxxxxxxxxxxx',
      storageBucket: 'xxxxxxxxxxxxxxxx.appspot.com',
      messagingSenderId: 'xxxxxxxxxxxxxxxxxxxxxx'
    }),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule
    // NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
