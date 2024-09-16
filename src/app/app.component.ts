import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageDashboardComponent } from "./pages/page-dashboard/page-dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestionstock';
}
