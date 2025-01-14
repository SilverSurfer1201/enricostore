import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,

  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  percorso = "../../../../assets/images/birra";
  images = [
    {id:1, label: 'Tris de Chiappe'},
    {id:2, label: 'La Luppolosa'},
    {id:3, label: 'La Cioccolatosa'}
  ];
}
