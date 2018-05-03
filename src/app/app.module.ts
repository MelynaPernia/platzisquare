import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import {ResaltarDirective} from '../directives/resaltar.directive';
import {ContarClicksDirective} from '../directives/contar-clicks.directives';
import {RouterModule, Routes} from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import {LugaresComponent} from './lugares/lugares.component';
import {ContactoComponent} from './contacto/contacto.component';
import {LugaresService} from './services/lugares.services';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {CrearComponent} from './crear/crear.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import {HttpModule} from '@angular/http';


// import { AngularFireDatabaseModule } from 'angularfire2/database';
const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear/:id', component: CrearComponent}
];

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB33K29yat2ehr5bkGJErBa5xQaoGgwYb8',
    authDomain: 'platzisquare-1523057461635.firebaseapp.com',
    databaseURL: 'https://platzisquare-1523057461635.firebaseio.com',
    projectId: 'platzisquare-1523057461635',
    storageBucket: '',
    messagingSenderId: '865247114563',
    // automaticDataCollectionEnabled :  false,
  }
};
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAKXR1s0sLghIelVnymRKe6y7IBakKerFM'
    }),
    RouterModule.forRoot(appRoutes),
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // AngularFireStorageModule, // imports f
    // AngularFireDatabaseModule
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [LugaresService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
