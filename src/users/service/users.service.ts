import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepo : Repository<User>
  ){

  }
  async create(createUserDto: CreateUserDto) {
    return await this.userRepo.save(createUserDto);
  }

   async findAll() {
    return `This action returns all users`;
  }

 async findOne(id: number) {
    return await this.userRepo.findOne(id);
  }

  async findByemail(email : string) {
    return await this.userRepo.findOne({
      where :
      { email }
    })
  }

 async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(id,updateUserDto);
    
  }

  async remove(id: number) {
    return await this.userRepo.delete(id)
  }
}