import { Module } from '@nestjs/common';
import { CultivosService } from './cultivos.service';
import { CultivosResolver } from './cultivos.resolver';
import { Cultivos } from './entities/cultivo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { CultivosController } from './cultivos.controller';

@Module({
  providers: [CultivosResolver, CultivosService],
  imports: [ TypeOrmModule.forFeature([Cultivos]) ],
  exports: [ TypeOrmModule ],
  // controllers: [CultivosController], 
})

export class CultivosModule {}
