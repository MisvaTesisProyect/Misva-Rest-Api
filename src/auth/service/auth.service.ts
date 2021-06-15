import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/service/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findByemail(email);
    const hash = await bcrypt.hash(pass, 10);
    const isMatch = await bcrypt.compare(user.password, hash);
    return isMatch ? user : null;
  }

  async login(user: any) {
    const isValid = await this.validateUser(user.email,user.password)
    if(!isValid){
      return null
    }  
    const payload = { username: user.email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}