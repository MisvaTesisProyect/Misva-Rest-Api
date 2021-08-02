import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PaginationDto } from 'src/Interface/pagination';
import { ProductFilterDto } from 'src/Interface/search';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(
    @Body() productoFilterDto: ProductFilterDto,
    @Body('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Body('limit', new DefaultValuePipe(100), ParseIntPipe) limit: number = 100
  ) {
    limit = limit > 100 ? 100 : limit
    return await this.productsService.findAll({ page, limit }, productoFilterDto);
  }

  @Get('search')
  async search(
    @Body() search: string,
    @Body('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Body('limit', new DefaultValuePipe(100), ParseIntPipe) limit: number = 100
  ) {
    limit = limit > 100 ? 100 : limit
    return await this.productsService.search({ page, limit }, search);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return await this.productsService.update(+id, updateProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.productsService.remove(+id);
  }
}
