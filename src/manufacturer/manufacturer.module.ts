import { Module } from '@nestjs/common';
import { ManufacturerService } from './services/manufacturer.service';
import { ManufacturerController } from './manufacturer.controller';

@Module({
  controllers: [ManufacturerController],
  providers: [ManufacturerService]
})
export class ManufacturerModule {}
