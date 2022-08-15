import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Produto } from './produtos.model';

@Injectable()
export class ProdutosService {
  constructor(@InjectModel(Produto) private produtoModel: typeof Produto) {}

  async obterTodos(): Promise<Produto[]> {
    return await this.produtoModel.findAll();
  }

  async obterUm(id: number): Promise<Produto> {
    return await this.produtoModel.findByPk(id);
  }

  async criar(produto: Produto): Promise<Produto> {
    return this.produtoModel.create(produto);
  }

  async alterar(
    produto: Produto,
    id: number,
  ): Promise<[affectedCount: number]> {
    return await this.produtoModel.update(produto, {
      where: { id },
    });
  }

  async apagar(id: number): Promise<void> {
    const produto = await this.obterUm(id);
    produto.destroy();
  }
}
