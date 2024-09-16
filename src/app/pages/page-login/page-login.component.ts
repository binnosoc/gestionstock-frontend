import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationRequest } from '../../services/models';
import { UserService } from '../../services/user/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent implements OnInit {

  authenticationRequest: AuthenticationRequest = { email: '', password: '' };
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router
  ){

  }

  ngOnInit(): void {
      
  }

  login() {
    this.userService.login(this.authenticationRequest).subscribe((data) => {
      this.userService.setAccessToken(data);
      this.getUserByEmail();
      this.router.navigate(['']);
    }, error => {
      this.errorMessage = 'Login et / ou mot de passe incorrecte';
    });
  }

  getUserByEmail(): void {
    this.userService.getUserByEmail(this.authenticationRequest.email)
    .subscribe(user => {
      this.userService.setConnectedUser(user);
    });
  }
}
