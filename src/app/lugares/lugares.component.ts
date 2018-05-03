import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LugaresService} from '../services/lugares.services';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent {
  title: string = 'Lugares Cercanos';
  lat: number = -12.0937189;
  lng: number = -77.0258181;
  // lugares: any = [
  //   {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, name: 'Floreria la Gardenia'},
  //   {id: 2, plan: 'gratuito', cercania: 3, distancia: 18, active: true, name: 'Donas la pasadita'},
  //   {id: 3, plan: 'pagado', cercania: 2, distancia: 5, active: true, name: 'Veterinaria Huellitas Felices'},
  //   {id: 4, plan: 'gratuito', cercania: 2, distancia: 8, active: false, name: 'Sushi Suhiroll'},
  //   {id: 5, plan: 'gratuito', cercania: 3, distancia: 10, active: true, name: 'Hotel la Gracia'},
  //   {id: 6, plan: 'pagado', cercania: 1, distancia: 1.2, active: true, name: 'Zapatería el Clavo'}
  // ];
  id = null;
  lugares = [];

  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {
    // this.lugares = this.lugaresService.getLugares()
    lugaresService.getLugares()
      .valueChanges().subscribe(lugares => {
        // debugger
        this.lugares = lugares;
      });
  }
  //
  // constructor(private route: ActivatedRoute) {
  //   // console.log(this.route.snapshot.params['id']);
  //   // console.log(this.route.snapshot.queryParams['action']);
  //   // console.log(this.route.snapshot.queryParams['referer']);
  //   this.id = this.route.snapshot.params['id'];
  //   // console.log(this.route.snapshot.params['id']);
  //   console.log(this.id);
  // }
  //
  // buscarLugar() {
  //   return this.lugares.find((lugar) => { return lugar.id === this.id}) || null;
  // }
  // people: any = [
  //   {name: 'Juan', age: 34},
  //   {name: 'Marta', age: 14},
  //   {name: 'Carlos', age: 17},
  //   {name: 'Karina', age: 24}
  // ];
}
