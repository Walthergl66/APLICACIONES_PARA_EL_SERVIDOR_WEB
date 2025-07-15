import { Module } from '@nestjs/common';
import { ZonacultivoService } from './zonacultivo.service';
import { ZonacultivoGateway } from './zonacultivo.gateway';

@Module({
  providers: [ZonacultivoGateway, ZonacultivoService],
})
export class ZonacultivoModule {}
