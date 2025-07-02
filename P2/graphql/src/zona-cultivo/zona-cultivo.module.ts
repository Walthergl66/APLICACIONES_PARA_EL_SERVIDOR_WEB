import { Module } from '@nestjs/common';
import { ZonaCultivoService } from './zona-cultivo.service';
import { ZonaCultivoResolver } from './zona-cultivo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZonaCultivo } from './entities/zona-cultivo.entity'
// import { ZonaCultivoController } from './zona-cultivo.controller';

@Module({
  providers: [ZonaCultivoResolver, ZonaCultivoService],
  imports: [ TypeOrmModule.forFeature([ ZonaCultivo ]) ],
  exports: [ TypeOrmModule ],
  // controllers: [ ZonaCultivoController ]
})
export class ZonaCultivoModule {}
