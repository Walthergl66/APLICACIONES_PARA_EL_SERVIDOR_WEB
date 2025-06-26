import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ZonaCultivoService } from './zona-cultivo.service';
import { CreateZonaCultivoInput } from './dto/create-zona-cultivo.input';
import { UpdateZonaCultivoInput } from './dto/update-zona-cultivo.input';
import { ZonaCultivo } from './entities/zona-cultivo.entity';

@Controller('zona-cultivos')  // Ruta base para todas las operaciones de zona cultivo
export class ZonaCultivoController {
  constructor(private readonly zonaCultivoService: ZonaCultivoService) {}

  // Ruta para crear una nueva zona de cultivo
  @Post()
  async create(@Body() createZonaCultivoInput: CreateZonaCultivoInput): Promise<ZonaCultivo> {
    return this.zonaCultivoService.create(createZonaCultivoInput);
  }

  // Ruta para obtener todas las zonas de cultivo
  @Get()
  async findAll(): Promise<ZonaCultivo[]> {
    return this.zonaCultivoService.findAll();
  }

  // Ruta para obtener una zona de cultivo por su id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ZonaCultivo> {
    return this.zonaCultivoService.findOne(id);
  }

  // Ruta para actualizar una zona de cultivo
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateZonaCultivoInput: UpdateZonaCultivoInput,
  ): Promise<ZonaCultivo> {
    return this.zonaCultivoService.update(id, updateZonaCultivoInput);
  }

  // Ruta para eliminar una zona de cultivo
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ZonaCultivo> {
    return this.zonaCultivoService.remove(id);
  }
}
