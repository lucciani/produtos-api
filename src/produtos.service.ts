import { Injectable } from '@nestjs/common';
import { Produto } from './produtos.model';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    // new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    // new Produto('LIV02', 'Livro Iniciando com Flutter', 39.9),
    // new Produto('LIV03', 'Inteligencia Artificial como serviço', 29.9),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[id];
  }

  criar(produto: Produto): Produto {
    produto.id = 100;
    this.produtos.push(produto);
    return produto;
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  apagar(id: number): void {
    console.log(id);
    this.produtos.pop();
  }
}
