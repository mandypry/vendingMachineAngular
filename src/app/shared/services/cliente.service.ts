/**
 * Serviço de clientes com Angular
 * @author Amanda Silva <amanda.adgti@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/model/cliente';
import { Estado } from '../model/estado';
import { Cidade } from '../model/cidade';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  public estado: Estado;
  public cidade: Cidade;

  cliente() {
    return new Cliente('Amanda', 'Brasil', 31, this.estado, this.cidade);
  }
}

