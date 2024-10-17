import { Routes } from '@angular/router';
import { CompteurComponent } from './page/compteur/compteur.component';

import { AppComponent } from './app.component';
import { SeriesComponent } from './page/series/series.component';
import { LibrairieComponent } from './page/librairie/librairie.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Compteur', component: CompteurComponent},
    {path:'Series', component:SeriesComponent},
    {path:'Librairie', component:LibrairieComponent}
];
