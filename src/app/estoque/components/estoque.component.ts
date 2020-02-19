import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../../shared/services';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.sass']
})
export class EstoqueComponent implements OnInit {

  constructor(
    private estoqueService: EstoqueService
  ) { }

  ngOnInit() {

    //chamando o produto
    const estoque = this.estoqueService.estoque();

  }

}
