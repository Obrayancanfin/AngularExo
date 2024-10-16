import { Routes } from '@angular/router';
import { CompteurComponent } from './page/compteur/compteur.component';

import { AppComponent } from './app.component';
import { SeriesComponent } from './page/series/series.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'Compteur', component: CompteurComponent},
    {path:'Series', component:SeriesComponent}
];
