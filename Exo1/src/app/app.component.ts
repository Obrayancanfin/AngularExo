import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompteurComponent } from './page/compteur/compteur.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SeriesComponent } from './page/series/series.component';
import { OrderbyPipe } from './orderby.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CompteurComponent,NavbarComponent,SeriesComponent,OrderbyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exo1';
}
