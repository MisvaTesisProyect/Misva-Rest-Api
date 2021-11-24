import { IsBoolean, IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from '../entities/category.entity';

export class CreateCategoryDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    @IsNotEmpty()
    name: string

    @IsOptional()
    @IsString()
    description: string
    
    @IsOptional()
    @IsString()
    imagen?: string

    @IsOptional()
    @IsNumber()
    id_parent?: number | Category

    @IsOptional()
    @IsBoolean()
    active: boolean

}
