import { Controller, Request, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {

  constructor(private authService: AuthService,){}

  @Post('/login')
  async login(@Body() request) {    
    const user = await this.authService.login(request.email, request.password);

    if(!user) {
      return { message: 'Email ou senha incorreto!' }
    }

    return user;
  }
}
