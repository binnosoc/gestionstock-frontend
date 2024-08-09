import { Component, OnInit } from '@angular/core';
import { DetailArticleComponent } from "../../composants/detail-article/detail-article.component";
import { Router } from '@angular/router';
import { PaginationComponent } from "../../composants/pagination/pagination.component";
import { ActionBoutonComponent } from "../../composants/action-bouton/action-bouton.component";

@Component({
  selector: 'app-page-article',
  standalone: true,
  imports: [DetailArticleComponent, PaginationComponent, ActionBoutonComponent],
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.scss'
})
export class PageArticleComponent implements OnInit {

  errorMsg = '';

  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.findListArticle();
  }

  findListArticle(): void {
    
  }

  nouvelArticle(): void {
    this.router.navigate(['nouvelarticle']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findListArticle();
    } else {
      this.errorMsg = event;
    }
  }
}