import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/shared/model/cidade';
import { Estado } from '../model/estado';
import { EstadoComponent } from 'src/app/estado';

@Injectable({
  providedIn: 'root'
})

export class CidadeService {

  public estado: Estado;

  cidade() {
    return new Cidade('Guarulhos', this.estado);
  }
}
