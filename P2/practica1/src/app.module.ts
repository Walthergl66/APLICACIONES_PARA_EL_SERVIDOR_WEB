import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClientesController } from './clientes/clientes.controller'
import { ClientesService } from './clientes/clientes.service';
import { Cliente } from './clientes/entities/cliente.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost',
      port: 5432, 
      username: 'postgres',
      password: 'Hola', 
      database: 'parcial2',
      entities: [ Cliente ],
      synchronize: true, 
    }),
  ],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class AppModule {}
