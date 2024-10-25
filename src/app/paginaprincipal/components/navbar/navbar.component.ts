import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../interface/paginaprincipal.interfaces';
import { QxService } from '../../services/qxprueba.service';


@Component({
  selector: 'pagina-principal-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',

})
export class NavbarComponent implements OnInit {

  constructor(private QxService : QxService){}
  public menuItems : MenuItem[] = [];

  getSeccion(nombre : string) :void{
    this.QxService.getNombreSeccion(nombre)
  }

  ngOnInit(){
    this.menuItems = [
      {
        nombre : 'EMPRESAS',
        icon : 'bi bi-backpack4',
        reouterLink : 'empresas'

      },
      {
        nombre : 'ARTICULOS',
        icon : 'bi bi-file-earmark-text',
        reouterLink : 'articulos'

      },
      {
        nombre : 'COLABORADORES',
        icon : 'bi bi-person-fill',
        reouterLink : ''

      },
    ];
  }
}

