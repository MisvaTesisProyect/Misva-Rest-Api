import { Controller, Get, Post, Body, Patch, Param, Delete, DefaultValuePipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ManufacturerService } from './services/manufacturer.service';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';
import { Manufacturer } from './entities/manufacturer.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('manufacturer')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) {}

  @Post()
  async create(@Body() createManufacturerDto: CreateManufacturerDto) {
    return await this.manufacturerService.create(createManufacturerDto);
  }

  @Get()
  async findAll() {
    return await this.manufacturerService.findAll();
  }
  
  @Get('paginate')
  async paginations(
    @Body('page', new DefaultValuePipe(1), ParseIntPipe) page:number = 1,
    @Body('limit', new DefaultValuePipe(100), ParseIntPipe) limit:number = 100
  ):Promise<Manufacturer[]|any>{
    limit = limit > 100 ? 100 : limit
    return this.manufacturerService.manufacturerPaginate({page,limit})
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.manufacturerService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateManufacturerDto: UpdateManufacturerDto) {
    return await this.manufacturerService.update(+id, updateManufacturerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.manufacturerService.remove(+id);
  }
}
