import { IsBoolean, IsDefined, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateManufacturerDto {
    @IsDefined()
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
