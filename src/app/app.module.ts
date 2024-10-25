import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PaginaPrinipal } from './paginaprincipal/paginaprincipal.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    PaginaPrinipal,
    BrowserModule,
    AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
