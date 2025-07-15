import { Module } from '@nestjs/common';
import { ZonacultivoService } from './zonacultivo.service';
import { ZonacultivoGateway } from './zonacultivo.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZonaCultivo } from './entities/zonacultivo.entity';

@Module({
  providers: [ZonacultivoGateway, ZonacultivoService],
  imports: [TypeOrmModule.forFeature([ZonaCultivo])], 
  exports: [ZonacultivoService], 
  controllers: [],
})
export class ZonacultivoModule {}
