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
  obterTodos(): Produto[] {
    return this.produtoService.obterTodos();
  }

  @Get(':id')
  obetrUm(@Param() params): Produto {
    return this.produtoService.obterUm(params.id);
  }

  @Post()
  criar(@Body() produto: Produto): Produto {
    return this.produtoService.criar(produto);
  }

  @Put()
  alterar(@Body() produto: Produto): Produto {
    return produto;
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.produtoService.apagar(params.id);
  }
}
