import { Module } from '@nestjs/common';
import { CultivosService } from './cultivos.service';
import { CultivosResolver } from './cultivos.resolver';
import { Cultivos } from './entities/cultivo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CultivosResolver, CultivosService],
  imports: [ TypeOrmModule.forFeature([Cultivos]) ],
  exports: [ TypeOrmModule ]
})

export class CultivosModule {}
