import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/services';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent implements OnInit {

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit() {

    //chamando o cliente
    const cliente = this.clienteService.cliente();

  }

}
