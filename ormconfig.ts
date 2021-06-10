import { ConnectionOptions } from 'typeorm';
const config: ConnectionOptions|any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'misvah',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
};
export = config;