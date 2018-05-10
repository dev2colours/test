import { Component, OnInit } from '@angular/core';

import {  LoginComponent } from '../comps/auth/login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '../dashboard', title: 'Dashboard', icon: 'ti-panel', class: '' },
    { path: '/user', title: 'Notebook', icon: 'ti-layout-tab', class: '' },
    { path: '../calendar', title: 'Calendar', icon: 'ti-calendar', class: '' },
    { path: '/user', title: 'Meeting Assistant', icon: 'fa fa-group fa-fw', class: '' },
    { path: '/user', title: 'Document Manager', icon: 'ti-server', class: '' },
    { path: '/user', title: 'Reporting Assistant', icon: 'ti-user', class: '' },
    { path: '../personal', title: 'Personal', icon: 'ti-palette', class: '' },
    { path: '../company', title: 'Company', icon: 'ti-layout-tab-v', class: '' },
    { path: '../projects', title: 'Projects', icon: 'ti-layers-alt', class: '' },
    { path: '../user', title: 'User Profile', icon: 'ti-user', class: '' },
    { path: '../table', title: 'Table List',  icon: 'ti-view-list-alt', class: '' },
    { path: '../teams', title: 'Teams',  icon: 'ti-text', class: '' },
    { path: '../icons', title: 'Icons',  icon: 'ti-pencil-alt2', class: '' },
    { path: '../base', title: 'Base',  icon: 'ti-pencil-alt2', class: '' },
    { path: '../company-setup', title: 'Company-setup', icon: 'ti-pencil-alt2', class: '' },
    { path: '../personal-setup', title: 'Personal-setup', icon: 'ti-pencil-alt2', class: '' },
    { path: '../panels', title: 'Panels', icon: 'ti-panel', class: '' },
    { path: '../notifications', title: 'Notifications',  icon: 'ti-bell', class: '' },
    // { path: '../'}
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];


@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];


    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

}
