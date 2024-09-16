import { Injectable } from '@angular/core';
import { AuthControllerService } from '../services';
import { Router } from '@angular/router';
import { AuthenticationRequest, AuthenticationResponse, UserDto } from '../models';
import { Observable, of } from 'rxjs';
import { Authenticate$Params } from '../fn/auth-controller/authenticate';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthControllerService,
    private router: Router
  ) { }

  login(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    const params: Authenticate$Params = {
      body: authenticationRequest
    };
    return this.authenticationService.authenticate(params);
  }

  getUserByEmail(email?: string): Observable<UserDto> {
    if (email) {
        return this.authenticationService.findByEmail({ email });
    }
    return of(); // Return a null observable if no email is provided
}

  setAccessToken(authenticationResponse: AuthenticationResponse): void {
    localStorage.setItem('accessToken', JSON.stringify(authenticationResponse));
  }

  setConnectedUser(user: UserDto): void {
    localStorage.setItem('connectedUser', JSON.stringify(user));
  }


  isUserLoggedAndAccessTokenValid(): boolean {
    if (localStorage.getItem('accessToken')) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
