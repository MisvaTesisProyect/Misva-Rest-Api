import { Controller, Get, Post, Body, Patch, Param, Delete, DefaultValuePipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Category } from './entities/category.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

/**
 * El controlador de categorias tendra casi todo libre, salvo update o deletes.
 */

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get('paginate')
  async paginate(
    @Body('page', new DefaultValuePipe(1), ParseIntPipe) page:number = 1,
    @Body('limit', new DefaultValuePipe(100), ParseIntPipe) limit:number = 100
  ):Promise<Pagination<Category>|any>{
    /** 
     * ? el limite maximo que va a tolerar va a ser 100, en caso que se necesite mas modificar.
     */
    limit =  limit > 100 ? 100 : limit
    return this.categoriesService.findCategoryByPaginations({page,limit})
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }
  
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return await this.categoriesService.update(+id, updateCategoryDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.categoriesService.remove(+id);
  }
}
