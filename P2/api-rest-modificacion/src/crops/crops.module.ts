import { Module } from '@nestjs/common';
import { CropsService } from './crops.service';
import { CropsController } from './crops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crop } from './entities/crop.entity';

@Module({

  controllers: [CropsController],
  providers: [CropsService],
  imports: [
    TypeOrmModule.forFeature([Crop]) ,
  ],
  exports: [TypeOrmModule],
})
export class CropsModule {}
