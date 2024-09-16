import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { PageClientComponent } from './pages/clients/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/founisseurs/page-fournisseur/page-fournisseur.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { ApplicationGuardService } from './services/guard/application-guard.service';
import { PageActivateAccountComponent } from './pages/page-activate-account/page-activate-account.component';

export const routes: Routes = [
    {
        path: '',
        component: PageDashboardComponent,
        children: [
            
            {
                path: '',
                component: PageStatistiqueComponent,
                canActivate: [ApplicationGuardService] 
            },
            {
                path: 'articles',
                component: PageArticleComponent,
                canActivate: [ApplicationGuardService] 
            }
            ,
            {
                path: 'clients',
                component: PageClientComponent,
                canActivate: [ApplicationGuardService] 
            }
            ,
            {
                path: 'fournisseurs',
                component: PageFournisseurComponent,
                canActivate: [ApplicationGuardService] 
            }
            ,
            {
                path: 'admin/categories',
                component: CategoriesComponent,
                canActivate: [ApplicationGuardService] 
            }
            ,
            {
                path: 'admin/utilisateurs',
                component: UtilisateursComponent,
                canActivate: [ApplicationGuardService] 
            }
        ]
    },
    {
        path: 'login',
        component: PageLoginComponent
    },
    {
        path: 'activate-account',
        component: PageActivateAccountComponent
      },
    {
        path: 'register',
        component: PageRegisterComponent
    }
];
