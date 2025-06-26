import { Module } from '@nestjs/common';
import { ZonaCultivoService } from './zona-cultivo.service';
import { ZonaCultivoResolver } from './zona-cultivo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZonaCultivo } from './entities/zona-cultivo.entity'

@Module({
  providers: [ZonaCultivoResolver, ZonaCultivoService],
  imports: [ TypeOrmModule.forFeature([ ZonaCultivo ]) ],
  exports: [ TypeOrmModule ]
})
export class ZonaCultivoModule {}
