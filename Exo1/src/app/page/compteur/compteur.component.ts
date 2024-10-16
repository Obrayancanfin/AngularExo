import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-compteur',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './compteur.component.html',
  styleUrl: './compteur.component.css'
})
export class CompteurComponent {
compteur: number=0;
isPair: boolean = true
pair: string = 'green'
impair: string = 'red'

increase(){
  this.compteur++
  this.isPair=!this.isPair
}


decrease(){
  this.compteur--
  this.isPair=!this.isPair
}
}
