import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthControllerService } from '../../services/services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CodeInputModule } from 'angular-code-input';

@Component({
  selector: 'app-page-activate-account',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, CodeInputModule], 
  templateUrl: './page-activate-account.component.html',
  styleUrls: ['./page-activate-account.component.scss'] // Corrected typo
})
export class PageActivateAccountComponent {
  message = '';
  isOkay = true;
  submitted = false;

  constructor(
    private router: Router,
    private authService: AuthControllerService
  ) {}

  private confirmAccount(token: string) {
    this.authService.confirm({ token }).subscribe({
      next: () => {
        this.message = 'Your account has been successfully activated.\nNow you can proceed to login';
        this.submitted = true;
      },
      error: () => {
        this.message = 'Token has been expired or invalid';
        this.submitted = true;
        this.isOkay = false;
      }
    });
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);
  }
}
