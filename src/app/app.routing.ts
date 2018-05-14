import { Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { LoginComponent } from './comps/auth/login/login.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubmenuComponent } from './comps/calendar/submenu/submenu.component';
import { CalendarComponent } from './comps/calendar/calendar.component';
import { PanelsComponent } from './comps/calendar/panels/panels/panels.component';
import { TableComponent } from './table/table.component';
import { PersonalComponent } from './comps/colorspages/personal/personal.component';
import { CompanyComponent } from './comps/colorspages/company/company.component';
import { CompanySetupComponent } from './comps/colorspages/company/setup/setup.component';
import { PersonalSetupComponent } from './comps/colorspages/personal/setup/setup.component';
import { Component } from '@angular/core';
import { ProjectComponent } from './comps/colorspages/project/project.component';
import { WorkComponent } from './comps/colorspages/work/work.component';
import { ColoursProjectsComponent } from './comps/colorspages/projects/colours-projects.component';

export const AppRoutes: Routes = [{
        path: '',
    redirectTo: 'pages/login',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'submenu',
        component: SubmenuComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    }, {
        path: 'panels',
        component: PanelsComponent
    },
    {
        path: 'company',
        component: CompanyComponent
    },
    {
        path: 'personal',
        component: PersonalComponent
    },
    {
        path: 'projects',
        component: ColoursProjectsComponent
    },
    {   path: 'project',
        component: ProjectComponent
    },
    {   path: 'work',
        component: WorkComponent
    },
    {
        path: 'company-setup',
        component: CompanySetupComponent
    },
    {
        path: 'personal-setup',
        component: PersonalSetupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
     {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    }

];
    






    // {
    //     path: 'panels',
    //     component: PanelsComponent
    // },
    // {
    //     path: 'company',
    //     component: CompanySetupComponent
    // },
    // {
    //     path: 'personal',
    //     component: PersonalSetupComponent
    // },
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'table',
    //     component: TableComponent
    // },
    // {
    //     path: 'teams',
    //     component: TeamsComponent
    // },
    // {
    //     path: 'icons',
    //     component: IconsComponent
    // },
    // {
    //     path: 'base',
    //     component: BaseComponent
    // },
    // {
    //     path: 'notifications',
    //     component: NotificationsComponent
    // },
    // {
    //     path: 'players',
    //     component: PlayersComponent
    // }

// ];
    // ,{
    //     path: 'dashboard',
    //     component: UserComponent
    // },
    // ,{
    //     path: 'user',
    //     component: UserComponent
    // },
    // {
    //     path: 'submenu',
    //     component: SubmenuComponent
    // },
    // {
    //     path: 'panels',
    //     component: PanelsComponent
    // },
    // {
    //     path: 'company',
    //     component: CompanySetupComponent
    // },
    // {
    //     path: 'personal',
    //     component: PersonalSetupComponent
    // },
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'table',
    //     component: TableComponent
    // },
    // {
    //     path: 'teams',
    //     component: TeamsComponent
    // },
    // {
    //     path: 'icons',
    //     component: IconsComponent
    // },
    // {
    //     path: 'base',
    //     component: BaseComponent
    // },
    // {
    //     path: 'notifications',
    //     component: NotificationsComponent
    // },
    // {
    //     path: 'players',
//     //     component: PlayersComponent
//     }

// ]

// {
    //     path: '',
    //     component: AdminLayoutComponent,
    //     children: [{
    //         path: 'dashboard',
    //         // loadChildren: './dashboard/dashboard.module#DashboardModule'
    //     }]
    // },
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },
    // {
    //     path: 'submenu',
    //     component: SubmenuComponent
    // },
    // {
    //     path: 'calendar',
    //     component: CalendarComponent
    // },


