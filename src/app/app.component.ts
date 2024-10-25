import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public nombreSeccion: string= '';
  title = 'pruebaqx';

  getNombreSeccion(nombre : any):void{
    this.nombreSeccion = nombre
    console.log(this.nombreSeccion)
  }
}
