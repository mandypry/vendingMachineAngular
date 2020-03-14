import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../../shared/services';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.sass']
})
export class EstadoComponent implements OnInit {

  constructor(private estadoService: EstadoService) { }

  ngOnInit() {

    //chamando o estado
    const estado = this.estadoService.estado();
  }

}
