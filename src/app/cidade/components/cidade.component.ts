import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../services';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.sass']
})
export class CidadeComponent implements OnInit {

  constructor(
    private cidadeService: CidadeService
  ) { }

  ngOnInit() {
  }

}
