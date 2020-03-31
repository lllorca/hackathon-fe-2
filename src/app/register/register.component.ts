import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  loginForm: FormGroup;
  isSubmitted  =  false;
  error  =  false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      document: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid){
      this.error = true;
      return;
    }
    this.authenticationService.register(this.loginForm.get('name').value, this.loginForm.get('lastName').value,
      this.loginForm.get('document').value, this.loginForm.get('email').value, this.loginForm.get('password').value);
    if (this.authenticationService.loggedIn) {
      this.router.navigateByUrl('/');
    }
  }

}
