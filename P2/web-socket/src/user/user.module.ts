import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserGateway } from './user.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UserGateway, UserService],
  exports: [UserGateway, UserService],
  imports: [TypeOrmModule.forFeature([])],
  controllers: [],
})
export class UserModule {}
