import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetallesfotoComponent } from './components/detallesfoto/detallesfoto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FotosComponent,
    DetallesfotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
