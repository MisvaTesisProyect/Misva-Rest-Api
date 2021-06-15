import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Req() request) {
      return this.authService.login(request.body);
    }
}
