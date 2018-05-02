import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Lugares Cercanos';
  lat: number = -12.0937189;
  lng: number = -77.0258181;
  lugares: any = [
    {plan: 'pagado', cercania: 1, distancia: 1, active: true, name: 'Floreria la Gardenia'},
    {plan: 'gratuito', cercania: 3, distancia: 18, active: true, name: 'Donas la pasadita'},
    {plan: 'pagado', cercania: 2, distancia: 5, active: true, name: 'Veterinaria Huellitas Felices'},
    {plan: 'gratuito', cercania: 2, distancia: 8, active: false, name: 'Sushi Suhiroll'},
    {plan: 'gratuito', cercania: 3, distancia: 10, active: true, name: 'Hotel la Gracia'},
    {plan: 'pagado', cercania: 1, distancia: 1.2, active: true, name: 'Zapatería el Clavo'}
  ];
  people: any = [
    {name: 'Juan', age: 34},
    {name: 'Marta', age: 14},
    {name: 'Carlos', age: 17},
    {name: 'Karina', age: 24}
    ];

}
