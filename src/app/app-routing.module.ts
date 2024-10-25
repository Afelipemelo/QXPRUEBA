import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./paginaprincipal/pages/home-page/home-page.component";
import { PaginaEmpresasComponent } from "./paginaprincipal/pages/pagina-empresas/pagina-empresas.component";
import { PaginaArticulosComponent } from "./paginaprincipal/pages/pagina-articulos/pagina-articulos.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'empresas',
    component: PaginaEmpresasComponent
  },
  {
    path: 'articulos',
    component: PaginaArticulosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
