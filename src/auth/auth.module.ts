import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secretOrPrivateKey: 'secret12356789'
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
