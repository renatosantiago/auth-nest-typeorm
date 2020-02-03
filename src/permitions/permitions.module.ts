import { Module } from '@nestjs/common';
import { PermitionsService } from './permitions/permitions.service';
import { PermitionsController } from './permitions/permitions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permition } from './permition.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Permition]),
  ],
  providers: [PermitionsService],
  controllers: [PermitionsController]
})
export class PermitionsModule {}
