import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { ApiAuthService } from 'src/app/services/apiAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.loginFormBuilder.group({
    email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
    password: ['', [Validators.required, Validators.maxLength(100)]],
  });

  constructor(
    private apiAuthService: ApiAuthService,
    private router: Router,
    private loginFormBuilder: FormBuilder){
      // if user is logged, redirect to main
      /*
      if(this.apiAuthService.userData && Object.keys(this.apiAuthService.userData).length != 0){
        this.router.navigate(['/']);
      }
      */
  }

  ngOnInit(): void {
    
  }

  login(){
    let email: string = this.loginForm.value.email || '';
    let password: string = this.loginForm.value.password || '';

    this.apiAuthService.login({ email, password}).subscribe(response => {
      if (response.exito === 1){
        this.router.navigate(['/']);
      }
    });
  }
}
