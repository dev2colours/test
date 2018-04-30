import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TeamsComponent }   from './teams/teams.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { BaseComponent }   from './comps/base/base.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { PlayersComponent }   from './comps/players/players.component';
import { SubmenuComponent } from './comps/calendar/submenu/submenu.component';
import { PanelsComponent } from './comps/calendar/panels/panels/panels.component';
import { CompanySetupComponent } from './comps/colorspages/company/setup/setup.component';
import { PersonalSetupComponent } from './comps/colorspages/personal/setup/setup.component';
import { LoginComponent } from './comps/auth/login/login.component';

export const AppRoutes: Routes = [
   
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'submenu',
        component: SubmenuComponent
    },
    {
        path: 'panels',
        component: PanelsComponent
    },
    {
        path: 'company',
        component: CompanySetupComponent
    },
    {
        path: 'personal',
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
        path: 'teams',
        component: TeamsComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'base',
        component: BaseComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'players',
        component: PlayersComponent
    }

]
