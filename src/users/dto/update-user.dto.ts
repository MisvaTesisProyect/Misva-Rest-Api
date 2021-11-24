import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    last_name: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsOptional()
    @IsString()
    password: string;

}
