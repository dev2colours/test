import { Component, OnInit } from '@angular/core';

import {  LoginComponent } from '../comps/auth/login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile', icon: 'ti-user', class: '' },
    { path: 'submenu', title: 'Calendar', icon: 'ti-calendar', class: '' },
    { path: 'table', title: 'Table List',  icon:'ti-view-list-alt', class: '' },
    { path: 'teams', title: 'Teams',  icon:'ti-text', class: '' },
    { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' }, 
    { path: 'base', title: 'Base',  icon:'ti-pencil-alt2', class: '' },
    { path: 'company', title: 'Company', icon: 'ti-pencil-alt2', class: '' },
    { path: 'personal', title: 'Personal', icon: 'ti-pencil-alt2', class: '' },
    { path: 'panels', title: 'Panels', icon: 'ti-panel', class: '' },
    { path: 'login', title: 'Login', icon: 'ti-user', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];


@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    // afAuth: any;
    public menuItems: any[];
    

    // constructor( public afAuth: AngularFireAuth )
    // logout() {
    //     this.afAuth.auth.signOut();
    // }


    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
