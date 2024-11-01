
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Contacto } from '../../interface/paginaprincipal.interfaces';
import { QxService } from '../../services/qxprueba.service';

@Component({
  selector: 'pagina-principal-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent  {

  constructor(private QxService : QxService){}

  get contactos():Contacto[]{
    return this.QxService.contacto
  }
 }
