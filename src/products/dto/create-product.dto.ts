import { IsBoolean, IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MaxLength(50)
    @IsNotEmpty()
    name: string

    @IsOptional()
    @IsString()
    @MaxLength(2000)
    description: string

    @MaxLength(25)
    @IsString()
    @IsNotEmpty()
    reference!: string

    @IsOptional()
    @IsNumber()
    id_category: number
   
    @IsOptional()
    @IsNumber()
    id_manufacturer: number

    @IsOptional()
    @MaxLength(10.2)
    @IsDecimal()
    price: number

    @IsOptional()
    @IsNumber()
    minimal_quantity: number

    @IsOptional()
    @IsBoolean()
    active: boolean
}
