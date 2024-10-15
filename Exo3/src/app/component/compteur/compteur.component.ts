import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  standalone: true,
  imports: [],
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
