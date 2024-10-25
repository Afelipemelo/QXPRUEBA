
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QxService {

  private mensajeSource = new Subject<string>();
  mensaje$ = this.mensajeSource.asObservable();

  enviarMensaje(mensaje: string) {
    this.mensajeSource.next(mensaje);
  }
  resetNombre(){
    this.mensajeSource.next('');
  }
}

