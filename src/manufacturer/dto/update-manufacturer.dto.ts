import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';
import { CreateManufacturerDto } from './create-manufacturer.dto';

export class UpdateManufacturerDto extends PartialType(CreateManufacturerDto) {
    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    @MaxLength(200)
    description: string

    @IsString()
    @IsOptional()
    image: string

    @IsBoolean()
    @IsOptional()
    active: boolean

    @IsBoolean()
    @IsOptional()
    delete: boolean
}
