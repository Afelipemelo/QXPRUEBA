import { Component,Input } from '@angular/core';
import { Empresa } from '../../interface/paginaprincipal.interfaces';

@Component({
  selector: 'pagina-principal-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input()
  public nombreSeccion : string = '';

}
