import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAuthService } from 'src/app/services/apiAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(
    private apiAuthService: ApiAuthService,
    private router: Router){
      // if user is logged, redirect to main
      if(this.apiAuthService.userData && Object.keys(this.apiAuthService.userData).length != 0){
        this.router.navigate(['/']);
      }
  }

  ngOnInit(): void {
    
  }

  login(){
    this.apiAuthService.login(this.email, this.password).subscribe(response => {
      if (response.exito === 1){
        this.router.navigate(['/']);
      }
    });
  }
}
