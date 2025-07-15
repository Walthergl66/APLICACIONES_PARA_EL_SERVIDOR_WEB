import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserGateway } from './user.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  providers: [UserGateway, UserService],
  exports: [UserGateway, UserService],
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
})
export class UserModule {}
