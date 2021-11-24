import { IsBoolean, IsDefined, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateManufacturerDto {
    @IsDefined()
    @IsString()
    @IsNotEmpty()
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
