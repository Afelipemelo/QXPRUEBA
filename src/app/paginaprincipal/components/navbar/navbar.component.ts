import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../interface/paginaprincipal.interfaces';


@Component({
  selector: 'pagina-principal-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',

})
export class NavbarComponent implements OnInit {


  @Input()
  public nombreSeccion: EventEmitter<string> = new EventEmitter();

  public menuItems : MenuItem[] = [];

  enviarMensaje(nombre : string) :void{
    this.nombreSeccion.emit(nombre);
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

