import { Module } from '@nestjs/common';
import { CiudadanosService } from './ciudadanos.service';
import { CiudadanosResolver } from './ciudadanos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudadano } from './entities/ciudadano.entity';
import { CiudadanosController } from './ciudadanos.controller';

@Module({
  providers: [CiudadanosResolver, CiudadanosService],
  imports: [ TypeOrmModule.forFeature([Ciudadano]) ],
  exports: [ TypeOrmModule ],
  controllers: [ CiudadanosController ]
})
export class CiudadanosModule {}
