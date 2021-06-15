import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySqlDbModule } from 'src/db/db.module';
import { User } from './entities/user.entity';
import { UsersService } from './service/users.service';
import { UsersController } from './users.controller';

@Module({
  imports : [TypeOrmModule.forFeature([User]),MySqlDbModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
