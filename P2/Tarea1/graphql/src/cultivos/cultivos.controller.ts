import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CultivosService } from './cultivos.service';
import { CreateCultivoInput } from './dto/create-cultivo.input';
import { UpdateCultivoInput } from './dto/update-cultivo.input';
import { Cultivos } from './entities/cultivo.entity';

@Controller('cultivos')  // El endpoint base para todas las rutas
export class CultivosController {
  constructor(private readonly cultivosService: CultivosService) {}

  // Ruta para crear un nuevo cultivo
  @Post()
  async create(@Body() createCultivoInput: CreateCultivoInput): Promise<Cultivos> {
    return this.cultivosService.create(createCultivoInput);
  }

  // Ruta para obtener todos los cultivos
  @Get()
  async findAll(): Promise<Cultivos[]> {
    return this.cultivosService.findAll();
  }

  // Ruta para obtener un cultivo por su id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cultivos> {
    return this.cultivosService.findOne(id);
  }

  // Ruta para actualizar un cultivo existente
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCultivosInput: UpdateCultivoInput,
  ): Promise<Cultivos> {
    return this.cultivosService.update(id, updateCultivosInput);
  }

  // Ruta para eliminar un cultivo
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Cultivos> {
    return this.cultivosService.remove(id);
  }
}
