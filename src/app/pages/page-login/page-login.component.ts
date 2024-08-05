import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent implements OnInit {

  ngOnInit(): void {
  }
  login() {
    
  }

  getUserByEmail(): void {
   
  }

}
