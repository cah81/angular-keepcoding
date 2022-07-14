import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AcumuladorModule } from './acumulador/acumulador.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    //esto se coloca aqui para llamar al modulo
    //nuevo creado
    HeroesModule,
    AcumuladorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
