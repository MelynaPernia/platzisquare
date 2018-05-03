import {Component} from '@angular/core';
import {LugaresService} from '../services/lugares.services';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})

export class CrearComponent {
  lugar: any = {};
  id: any = null;
  constructor(private lugarService: LugaresService, private route: ActivatedRoute) {
      this.id = this.route.snapshot.params['id'];
      console.log(this.id);
      if(this.id != 'new') {
        this.lugarService.getLugar(this.id)
          .valueChanges().subscribe(lugar => {
            this.lugar = lugar;
          });
      }
  }

  guardarLugar() {
    const direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.lugarService.obtenerGeoData(direccion)
      .subscribe(result => {
        // debugger
        this.lugar.lat =  result.json().results[0].geometry.location.lat;
        this.lugar.lng = result.json().results[0].geometry.location.lng;
        this.lugar.id = Date.now();
        // console.log(this.lugar.id);
        this.lugarService.guardarLugar(this.lugar);
        alert('Negocio guardado con éxito!');
        this.lugar = {};
      });
    // console.log('guardandoLugar')
    // console.log(this.lugar);

  }
}
