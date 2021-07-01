import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    description: string
    
    @IsOptional()
    @IsString()
    imagen: string
  
    @IsOptional()
    @IsNumber()
    id_parent: number | Category

    @IsOptional()
    @IsBoolean()
    active: boolean
    
    @IsOptional()
    @IsBoolean()
    delete: boolean


}
