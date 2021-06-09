import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from '../../ormconfig';

export const databaseConnections = [TypeOrmModule.forRoot(ormconfig)];