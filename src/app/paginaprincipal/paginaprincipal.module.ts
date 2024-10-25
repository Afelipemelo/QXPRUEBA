
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticuloComponent } from './components/articulo/articulo.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ArticuloComponent,
    ColaboradoresComponent,
    EmpresasComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent

  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomePageComponent,
  ]
})
export class PaginaPrinipal { }
