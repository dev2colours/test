import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

declare var $: any;
declare interface User {
  text?: string;
  email?: string; //  must be valid email format
  password?: string; // required, value must be equal to confirm password.
  confirmPassword?: string; // required, value must be equal to password.
  number?: number; // required, value must be equal to password.
  url?: string;
  idSource?: string;
  idDestination?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  test: Date = new Date();
  private toggleButton;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  public register: User;

  constructor(private element: ElementRef, private router: Router, public afAuth: AngularFireAuth
  ) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }
  loginwgoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // checkLogin(url: string): boolean {
    
      // if (this.loginwgoogle) {
      //   return true;
      // }
      this.router.navigateByUrl('dashboard');
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  checkFullPageBackgroundImage() {
    var $page = $('.full-page');
    var image_src = $page.data('image');

    if (image_src !== undefined) {
      var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
      $page.append(image_container);
    }
  };

  ngOnInit() {
    this.checkFullPageBackgroundImage();

    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      $('.card').removeClass('card-hidden');
    }, 700)

    this.register = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  sidebarToggle() {
    var toggleButton = this.toggleButton;
    var body = document.getElementsByTagName('body')[0];
    var sidebar = document.getElementsByClassName('navbar-collapse')[0];
    if (this.sidebarVisible === false) {
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}











// import { Component, OnInit, ElementRef } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

// declare var $: any;

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   test: Date = new Date();
//   private toggleButton;
//   private sidebarVisible: boolean;
//   private nativeElement: Node;

//   // constructor(private element: ElementRef, public authService: AuthService, private router: Router
//   constructor(private element: ElementRef, private router: Router, public afAuth: AngularFireAuth
//   ) {
//     this.nativeElement = element.nativeElement;
//     this.sidebarVisible = false;
//   }
//   login() {
//     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
//   }
//   logout() {
//     this.afAuth.auth.signOut();
//   }

//   checkFullPageBackgroundImage() {
//     var $page = $('.full-page');
//     var image_src = $page.data('image');

//     if (image_src !== undefined) {
//       var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
//       $page.append(image_container);
//     }
//   };

//   ngOnInit() {
//     this.checkFullPageBackgroundImage();

//     let navbar: HTMLElement = this.element.nativeElement;
//     this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

//     setTimeout(function () {
//       // after 1000 ms we add the class animated to the login/register card
//       $('.card').removeClass('card-hidden');
//     }, 700)
//   }

//   sidebarToggle() {
//     let toggleButton = this.toggleButton;
//     let body = document.getElementsByTagName('body')[0];
//     let sidebar = document.getElementsByClassName('navbar-collapse')[0];
//     if (this.sidebarVisible === false) {
//       setTimeout(function () {
//         toggleButton.classList.add('toggled');
//       }, 500);
//       body.classList.add('nav-open');
//       this.sidebarVisible = true;
//     } else {
//       this.toggleButton.classList.remove('toggled');
//       this.sidebarVisible = false;
//       body.classList.remove('nav-open');
//     }
//   }

// }
