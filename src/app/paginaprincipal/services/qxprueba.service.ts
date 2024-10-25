
import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Articulos } from '../interface/paginaprincipal.interfaces';

@Injectable({
  providedIn: 'root'
})
export class QxService {



  private nombreSeccion = new Subject<string>();
  nombreSeccion$ = this.nombreSeccion.asObservable();



  getNombreSeccion(mensaje: string) {
    this.nombreSeccion.next(mensaje);
  }
  resetNombre(){
    this.nombreSeccion.next('');
  }


}

