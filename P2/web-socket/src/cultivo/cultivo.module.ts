import { Module } from '@nestjs/common';
import { CultivoService } from './cultivo.service';
import { CultivoGateway } from './cultivo.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cultivos } from './entities/cultivo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cultivos])], 
  providers: [CultivoGateway, CultivoService],
  exports: [CultivoService], 
  controllers: [],
})
export class CultivoModule {

}
