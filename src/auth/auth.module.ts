import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';;
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/service/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1800s' },
    }),
    TypeOrmModule.forFeature([User])
  ],
  providers: [AuthService,LocalStrategy,JwtStrategy,UsersService],
  exports: [JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}
