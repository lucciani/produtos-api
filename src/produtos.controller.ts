import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produtos.model';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtoService: ProdutosService) {}
  @Get()
  async obterTodos(): Promise<Produto[]> {
    return await this.produtoService.obterTodos();
  }

  @Get(':id')
  async obetrUm(@Param() params): Promise<Produto> {
    return await this.produtoService.obterUm(params.id);
  }

  @Post()
  async criar(@Body() produto: Produto): Promise<Produto> {
    return await this.produtoService.criar(produto);
  }

  @Put(':id')
  alterar(@Param() params, @Body() produto: Produto): Promise<[number]> {
    return this.produtoService.alterar(produto, params.id);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.produtoService.apagar(params.id);
  }
}
