import { Module } from '@nestjs/common';
import { CultivoModule } from './cultivo/cultivo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cultivos } from './cultivo/entities/cultivo.entity';
import { CultivoService } from './cultivo/cultivo.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { ZonacultivoModule } from './zonacultivo/zonacultivo.module';
import { User } from './user/entities/user.entity';
import { ZonaCultivo } from './zonacultivo/entities/zonacultivo.entity';

@Module({
  imports: [
    CultivoModule, UserModule, UserModule
    , TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'cultivos.db',
      entities: [Cultivos, User, ZonaCultivo],
      synchronize: true, // solo desarrollo
    }),
    TypeOrmModule.forFeature([Cultivos]),
    UserModule,
    ZonacultivoModule,
  ],
  controllers: [],
  providers: [CultivoService, UserService],
  exports: [CultivoService, UserService],
})
export class AppModule {}
