import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'Lista todos os produtos';
  }

  @Get(':id')
  obetrUm(@Param() params): string {
    return `Retorna os dados do produto ${params.id}`;
  }

  @Post()
  criar(@Body() produtos): string {
    console.log(produtos);
    return 'Produto criado';
  }

  @Put()
  alterar(@Body() produtos): string {
    console.log(produtos);
    return 'Produto alterado';
  }

  @Delete(':id')
  apagar(@Param() params): string {
    return `Apaga o produto ${params.id}`;
  }
}
