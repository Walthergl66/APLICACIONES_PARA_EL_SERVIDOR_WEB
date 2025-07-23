import { Module } from '@nestjs/common';
import { CiudadanosController } from './ciudadanos.controller';
import { CiudadanosService } from './ciudadanos.service';

@Module({
  controllers: [CiudadanosController],
  providers: [CiudadanosService],
})
export class CiudadanosModule {}
