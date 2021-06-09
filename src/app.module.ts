import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MySqlDbModule } from './db/db.module';

@Module({
  imports: [
    MySqlDbModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
