import { IsBoolean, IsDecimal, IsNumber, IsString } from "class-validator";

export class ProductFilterDto {
    @IsString()
    name: string

    @IsNumber()
    id_category: number

    @IsString()
    reference: string

    @IsString()
    description: string

    @IsDecimal()
    price_from: number

    @IsDecimal()
    price_to: number

    @IsBoolean()
    active: number

    @IsNumber()
    delete: number

}