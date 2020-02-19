import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente';
import { CidadeModule } from './cidade';
import { EstadoModule } from './estado';
import { CategoriaModule } from './categoria';
import { SubCategoriaModule} from './subCategoria';
import { ProdutoModule } from './produto';
import { PedidoModule } from './pedido';
import { EstoqueModule } from './estoque';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    CidadeModule,
    EstadoModule,
    CategoriaModule,
    SubCategoriaModule,
    ProdutoModule,
    EstoqueModule,
    PedidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
