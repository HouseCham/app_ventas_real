import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
