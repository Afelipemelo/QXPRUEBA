
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticuloComponent } from './components/articulo/articulo.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PaginaArticulosComponent } from './pages/pagina-articulos/pagina-articulos.component';
import { PaginaEmpresasComponent } from './pages/pagina-empresas/pagina-empresas.component';


@NgModule({
  declarations: [
    HomePageComponent,
    PaginaArticulosComponent,
    PaginaEmpresasComponent,
    ArticuloComponent,
    EmpresasComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ContactoComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    PaginaArticulosComponent,
    PaginaEmpresasComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class PaginaPrinipal { }
