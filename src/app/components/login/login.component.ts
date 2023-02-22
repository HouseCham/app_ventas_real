import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiAuthService } from 'src/app/services/apiAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(private apiAuthService: ApiAuthService){

  }

  ngOnInit(): void {
    
  }

  login(){
    this.apiAuthService.login({nombre: '', email: this.email, password: this.password}).subscribe(response => {
      console.log(response);
    });
  }
}
