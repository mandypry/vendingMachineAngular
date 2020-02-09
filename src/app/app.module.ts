import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente';
import { CidadeModule } from './cidade';
import { EstadoModule } from './estado';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    CidadeModule,
    EstadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
