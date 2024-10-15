import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompteurComponent } from './component/compteur/compteur.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CompteurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exo1';
}
