import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-article',
  standalone: true,
  imports: [],
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.scss'
})

export class NouvelArticleComponent implements OnInit {


  errorMsg: Array<string> = [];
  file: File | null = null;
  imgUrl: string | ArrayBuffer = 'assets/product.png';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void{
    
  }


  cancel(): void {
    this.router.navigate(['articles']);
  }



}

