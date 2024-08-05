import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'inscrire', component: PageInscriptionComponent },
  // Ajoutez d'autres routes ici
];
