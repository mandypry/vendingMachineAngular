/**
 * Serviço de clientes com Angular
 * @author Amanda Silva <amanda.adgti@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/model/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  cliente() {
    return new Cliente('Amanda', 'Brasil', 31);
  }
}

