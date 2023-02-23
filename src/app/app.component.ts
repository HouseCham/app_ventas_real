import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { ApiAuthService } from './services/apiAuth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app_ventas_real';
  usuario!: User;
  logged!: boolean;

  constructor(public apiAuthService: ApiAuthService, private router: Router){
    this.apiAuthService.user.subscribe(res => {
      this.usuario = res;
      console.log('Cambio el objeto: ' + this.usuario);
      if(this.usuario && Object.keys(this.usuario).length != 0 && this.usuario != null) this.logged = true;
    })
  }

  logout(){
    this.apiAuthService.logout();
    this.router.navigate(['/login']);
    this.logged = false;
  }
}
