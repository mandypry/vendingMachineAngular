import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/cliente';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.sass']
})
export class PedidoComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {

    //chamando o pedido
    const pedido = this.pedidoService.pedido();
  }

}
