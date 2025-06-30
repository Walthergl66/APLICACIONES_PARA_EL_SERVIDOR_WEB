import { Module } from '@nestjs/common';
import { CropsModule } from './crops/crops.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultivationAreaModule } from './cultivation-area/cultivation-area.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",              
      database: join(__dirname, 'db.sqlite'), 
      autoLoadEntities: true,
      synchronize: true,            
    }),
    CropsModule, CultivationAreaModule, UserModule, 

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
