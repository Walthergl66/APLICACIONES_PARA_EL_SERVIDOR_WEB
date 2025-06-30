import { Module } from '@nestjs/common';
import { CultivationAreaService } from './cultivation-area.service';
import { CultivationAreaController } from './cultivation-area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultivationArea } from './entities/cultivation-area.entity';

@Module({
  controllers: [CultivationAreaController],
  providers: [CultivationAreaService],
   imports: [
      TypeOrmModule.forFeature([CultivationArea]) ,
    ],
    exports: [TypeOrmModule],
})
export class CultivationAreaModule {}
