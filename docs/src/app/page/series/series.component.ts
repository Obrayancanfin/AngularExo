import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderbyPipe } from '../../utils/orderby.pipe';


@Component({
  selector: 'app-series',
  standalone: true,
  imports: [RouterLink,OrderbyPipe],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  
  listeSerie: Object[] =["serie2", "serie3","serie1","serie13"] ;
  order:string="asc";


  orderby(order:string){
    this.order = order;
  }
}



