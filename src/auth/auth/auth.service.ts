import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users/users.service';
import { JwtService } from  '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService,
              private jwtService: JwtService){}

  async findUserByEmail(email: string) {
    const user = await this.usersService.findByEmail(email);
    return user;
  }

  async login(username: string, pass: string): Promise<any> {
    return await this.findUserByEmail(username).then((userData)=>{
      if(!userData){
        return;
      }
      const accessToken = this.jwtService.sign({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        permitions: userData.permitions
      });

      return {
        expires_in: 3600,
        access_token: accessToken,
      };

    });
  }
}
