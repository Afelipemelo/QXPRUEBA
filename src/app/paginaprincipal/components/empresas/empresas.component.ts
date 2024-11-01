import { Component } from '@angular/core';
import { Empresa } from '../../interface/paginaprincipal.interfaces';
import { QxService } from '../../services/qxprueba.service';

@Component({
  selector: 'pagina-principal-empresas',
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.css'
})
export class EmpresasComponent {

  constructor(private QxService : QxService){}

  get empresas():Empresa[]{
    return  this.QxService.empresa
  }
}
