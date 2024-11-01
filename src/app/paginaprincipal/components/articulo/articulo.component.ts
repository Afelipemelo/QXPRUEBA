import { Component } from '@angular/core';
import { SubArticulos } from '../../interface/paginaprincipal.interfaces';
import { QxService } from '../../services/qxprueba.service';

@Component({
  selector: 'pagina-principal-articulo',
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {

  constructor(private QxService : QxService){}

  get articulos(){
    return this.QxService._subArticulos
  }
}
