import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../shared/services';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.sass']
})
export class ProdutoComponent implements OnInit {

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    //chamando o produto
    const produto = this.produtoService.produto();

  }

}
