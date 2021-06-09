import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConnections } from './dbConnection';

@Module({
  imports: [...databaseConnections],
  exports: [TypeOrmModule],
})
export class MySqlDbModule {}