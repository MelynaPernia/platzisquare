import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LugaresService} from '../services/lugares.services';

@Component( {
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent {
  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, name: 'Floreria la Gardenia',
      description: 'descripcion de este negocio 1'},
    {id: 2, plan: 'gratuito', cercania: 3, distancia: 18, active: true, name: 'Donas la pasadita',
      description: 'descripcion de este negocio 2'},
    {id: 3, plan: 'pagado', cercania: 2, distancia: 5, active: true, name: 'Veterinaria Huellitas Felices',
      description: 'descripcion de este negocio 3'},
    {id: 4, plan: 'gratuito', cercania: 2, distancia: 8, active: false, name: 'Sushi Suhiroll',
      description: 'descripcion de este negocio 4'},
    {id: 5, plan: 'gratuito', cercania: 3, distancia: 10, active: true, name: 'Hotel la Gracia',
      description: 'descripcion de este negocio 5'},
    {id: 6, plan: 'pagado', cercania: 1, distancia: 1.2, active: true, name: 'Zapatería el Clavo',
      description: 'descripcion de este negocio 6'}
  ];
  id = null;
  lugar: any ={};
  // Capturar el parametro
  constructor(private route: ActivatedRoute,
              private lugaresServices: LugaresService) {
    // console.log(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.queryParams['action']);
    // console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    // console.log(this.route.snapshot.params['id']);
    console.log('id' + this.id);
    // console.log(this.buscarLugar());
    // console.log(this.lugares)
    this.lugar = this.lugaresServices.buscarLugar(this.id);
  }

  // buscarLugar() {
  //   return this.lugares.find((lugar) => { return lugar.id == this.id} ) || null;
  // }
  // people: any = [
  //   {name: 'Juan', age: 34},
  //   {name: 'Marta', age: 14},
  //   {name: 'Carlos', age: 17},
  //   {name: 'Karina', age: 24}
  // ];

}
