import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router, Params } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'angsand-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {
    this.createForm();
    this.renderer.addClass(document.body, 'login-page');
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryLogin(value){
    this.authService.doEmailLogin(value)
    .then(res => {
      this.router.navigate(['/auth']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  bypassLogin(value){
    this.authService.doBypassLogin(value)
    .then(res => {
      this.router.navigate(['/auth']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
}
