import { Module } from '@nestjs/common';
import { CiudadanosModule } from './usuarios/ciudadanos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { CultivosModule } from './cultivos/cultivos.module';
import { ZonaCultivoModule } from './zona-cultivo/zona-cultivo.module';

@Module({
  imports: [ 
    ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: "sqlite",               // Cambiar de "postgres" a "sqlite"
      database: join(__dirname, 'db.sqlite'), // Especificar el archivo de la base de datos SQLite
      autoLoadEntities: true,
      synchronize: true,            // Sincroniza las entidades con la base de datos
    }), 
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    CiudadanosModule, CultivosModule, ZonaCultivoModule ],
})
export class AppModule {}
