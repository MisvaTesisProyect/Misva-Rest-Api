import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from '../entities/category.entity';

export class CreateCategoryDto {
    @IsString()
    name!: string

    @IsOptional()
    @IsString()
    description!: string
    
    @IsOptional()
    @IsString()
    imagen?: string
  
    @IsOptional()
    @IsNumber()
    id_parent?: number | Category

    @IsOptional()
    @IsBoolean()
    active?: boolean

}
