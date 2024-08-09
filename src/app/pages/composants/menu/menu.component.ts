import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [

    {
      id: 'dashboard',
      titre: 'Tableau de bord',
      icon: 'bi bi-grid',
      url: ''
    },
    {
      id: 'article',
      titre: 'Articles',
      icon: 'bi bi-boxes',
      url: 'articles',
      sousMenu: [
        {
          id: 'article-s1',
          titre: 'Articles',
          icon: 'bi bi-boxes',
          url: 'articles'
        },
        {
          id: 'article-s2',
          titre: 'Mouvements du stock',
          icon: 'fab fa-stack-overflow',
          url: '/mvtstk'
        }
      ]
    },
    {
      id: 'client',
      titre: 'Clients',
      icon: 'bi bi-people',
      url: 'clients',
      sousMenu: [
        {
          id: 'client-s1',
          titre: 'Clients',
          icon: 'bi bi-people',
          url: 'clients'
        },
        {
          id: 'client-s1',
          titre: 'Commandes clients',
          icon: 'bi bi-shopping-basket',
          url: 'commandesclient'
        }
      ]
    },
    {
      id: 'fournisseur',
      titre: 'Fournisseurs',
      icon: 'bi bi-people',
      url: '',
      sousMenu: [
        {
          id: 'fournisseur-s1',
          titre: 'Fournisseurs',
          icon: 'bi bi-people',
          url: 'fournisseurs'
        },
        {
          id: 'fournisseur-s2',
          titre: 'Commandes fournisseurs',
          icon: 'bi bi-truck',
          url: 'commandesfournisseur'
        }
      ]
    },
    {
      id: 'parametrage',
      titre: 'Parametrages',
      icon: 'bi bi-gear',
      url: '',
      sousMenu: [
        {
          id: 'parametrage-s1',
          titre: 'Categories',
          icon: 'bi bi-tools',
          url: 'admin/categories'
        },
        {
          id: 'parametrage-s2',
          titre: 'Utilisateurs',
          icon: 'bi bi-gear-wide-connected',
          url: 'admin/utilisateurs'
        }
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }
}