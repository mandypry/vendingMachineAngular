import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/shared/model/cidade';

@Injectable({
  providedIn: 'root'
})

export class CidadeService {

  cidade() {
    return new Cidade('Guarulhos');
  }
}
