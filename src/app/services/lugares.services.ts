import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Http} from '@angular/http';

@Injectable()
export class LugaresService {
  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, name: 'Floreria la Gardenia'},
    {id: 2, plan: 'gratuito', cercania: 3, distancia: 18, active: true, name: 'Donas la pasadita'},
    {id: 3, plan: 'pagado', cercania: 2, distancia: 5, active: true, name: 'Veterinaria Huellitas Felices'},
    {id: 4, plan: 'gratuito', cercania: 2, distancia: 8, active: false, name: 'Sushi Suhiroll'},
    {id: 5, plan: 'gratuito', cercania: 3, distancia: 10, active: true, name: 'Hotel la Gracia'},
    {id: 6, plan: 'pagado', cercania: 1, distancia: 1.2, active: true, name: 'Zapatería el Clavo'},
    {id: 7, plan: 'gratuito', cercania: 3, distancia: 10, active: true, name: 'Hotel la Gracia'},
    {id: 8, plan: 'pagado', cercania: 1, distancia: 1.2, active: true, name: 'Zapatería el Clavo'}
  ];
  constructor(private baseDatos: AngularFireDatabase, private http: Http) {

  }
  public getLugares() {
    return this.baseDatos.list('lugares/');
  }

  public buscarLugar(id) {
    return this.lugares.find((lugar)=>{return lugar.id == id})
  }

  public guardarLugar(lugar) {
    // console.log(lugar);
    console.log(lugar)
    this.baseDatos.app.database().ref('lugares/' + lugar.id).set(lugar);
  }

  public obtenerGeoData(direccion) {
    // hhttp://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
  }

  public getLugar(id) {
    return this.baseDatos.database.ref('lugares/' + id);
  }
}
