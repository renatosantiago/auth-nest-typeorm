import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermitionsModule } from './permitions/permitions.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    UsersModule, 
    PermitionsModule,
    AuthModule,      
    TypeOrmModule.forRoot(), 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
