import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../composants/header/header.component";
import { SidebarComponent } from "../composants/sidebar/sidebar.component";
import { FooterComponent } from "../composants/footer/footer.component";
import { DetailArticleComponent } from "../composants/detail-article/detail-article.component";
import { PageArticleComponent } from "../articles/page-article/page-article.component";



@Component({
  selector: 'app-page-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent, DetailArticleComponent, PageArticleComponent],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {

}
