import { Component,Input,OnInit } from '@angular/core';
import { Empresa } from '../../interface/paginaprincipal.interfaces';
import { QxService } from '../../services/qxprueba.service';

@Component({
  selector: 'pagina-principal-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  public nombreSeccion : string = '';

  constructor(private QxService : QxService){}

  ngOnInit() {
    this.QxService.nombreSeccion$.subscribe((nombreSeccion) => {
      this.nombreSeccion = nombreSeccion;
    });
  }
  resetNombre():void{
    this.QxService.resetNombre();
  }
}
