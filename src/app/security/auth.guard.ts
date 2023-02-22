import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { ApiAuthService } from "../services/apiAuth.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{

    constructor(
        private route: Router,
        private apiAuthService: ApiAuthService){

    }
    canActivate(route: ActivatedRouteSnapshot): boolean{
        const user = this.apiAuthService.userData;
        if (user && Object.keys(user).length != 0){
            return true;
        }
        this.route.navigate(['/login']);
        return false;
    }
    
}