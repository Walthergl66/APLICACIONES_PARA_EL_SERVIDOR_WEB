// import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
// import { CiudadanosService } from './ciudadanos.service';
// import { CreateCiudadanoInput } from './dto/create-ciudadano.input';
// import { UpdateCiudadanoInput } from './dto/update-ciudadano.input';
// import { Ciudadano } from './entities/ciudadano.entity';

// @Controller('ciudadanos')  // El endpoint base para todas las rutas
// export class CiudadanosController {
//   constructor(private readonly ciudadanosService: CiudadanosService) {}

//   // Ruta para crear un nuevo ciudadano
//   @Post()
//   async create(@Body() createCiudadanoInput: CreateCiudadanoInput): Promise<Ciudadano> {
//     return this.ciudadanosService.create(createCiudadanoInput);
//   }

//   // Ruta para obtener todos los ciudadanos
//   @Get()
//   async findAll(): Promise<Ciudadano[]> {
//     return this.ciudadanosService.findAll();
//   }

//   // Ruta para obtener un ciudadano por su id
//   @Get(':id')
//   async findOne(@Param('id') id: string): Promise<Ciudadano> {
//     return this.ciudadanosService.findOne(id);
//   }

//   // Ruta para actualizar un ciudadano
//   @Put(':id')
//   async update(
//     @Param('id') id: string,
//     @Body() updateCiudadanoInput: UpdateCiudadanoInput,
//   ): Promise<Ciudadano> {
//     return this.ciudadanosService.update(id, updateCiudadanoInput);
//   }

//   // Ruta para eliminar un ciudadano
//   @Delete(':id')
//   async remove(@Param('id') id: string): Promise<Ciudadano> {
//     return this.ciudadanosService.remove(id);
//   }
// }
