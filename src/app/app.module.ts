import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PaginaPrinipal } from './paginaprincipal/paginaprincipal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PaginaPrinipal,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
