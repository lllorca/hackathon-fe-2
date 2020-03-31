import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  loginForm: FormGroup;
  isSubmitted  =  false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid){
      return;
    }
    this.authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value);
    if (this.authenticationService.loggedIn) {
      console.log('asdasdasd');
      this.router.navigateByUrl('/');
    }
  }

}
