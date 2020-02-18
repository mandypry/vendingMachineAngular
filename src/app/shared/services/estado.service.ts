import { Injectable } from '@angular/core';
import { Estado } from 'src/app/shared/model/estado';

@Injectable({
  providedIn: 'root'
})

export class EstadoService {

  estado() {
    return new Estado('SP', 'Sao Paulo');
  }
}
