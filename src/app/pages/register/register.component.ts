import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

// import { AuthService } from '../../../providers/auth/auth';
import * as firebase from 'firebase/app';
// import { OverviewComponent } from '../../dashboard/overview/overview.component';

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
  moduleId: module.id,
  selector: 'register-cmp',
  templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

  test: Date = new Date();
  private toggleButton;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  public register: User;

  isNewUser = true;
  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  resetPassword = false;

  constructor(private element: ElementRef, private router: Router
  ) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  changeForm() {
    this.isNewUser = !this.isNewUser
  }

  // onSignUp(): void {
  //   this.clearErrorMessage()

  //   if (this.validateForm(this.email, this.password)) {
  //     this.authService.signUpWithEmail(this.email, this.password)
  //       .then(() => {
  //         this.router.navigate(['./dashboard/overview'])
  //       }).catch(_error => {
  //         this.error = _error
  //         this.router.navigate(['/'])
  //       })
  //   }
  // }

  // onLoginEmail(): void {
  //   this.clearErrorMessage()

  //   if (this.validateForm(this.email, this.password)) {
  //     this.authService.loginWithEmail(this.email, this.password)
  //       .then(() => this.router.navigate(['/user']))
  //       .catch(_error => {
  //         this.error = _error;
  //         this.router.navigate(['/'])
  //       })
  //   }
  // }

  validateForm(email: string, password: string): boolean {
    if (email.length === 0) {
      this.errorMessage = 'Please enter Email!'
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'Please enter Password!'
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'Password should be at least 6 characters!'
      return false;
    }

    this.errorMessage = ''

    return true;
  }

  isValidMailFormat(email: string) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if ((email.length === 0) && (!EMAIL_REGEXP.test(email))) {
      return false;
    }

    return true;
  }

  // sendResetEmail() {
  //   this.clearErrorMessage()

  //   this.authService.resetPassword(this.email)
  //     .then(() => this.resetPassword = true)
  //     .catch(_error => {
  //       this.error = _error
  //     })
  // }

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
    if (this.sidebarVisible == false) {
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
