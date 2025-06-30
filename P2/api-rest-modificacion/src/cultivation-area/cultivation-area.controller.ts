import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CultivationAreaService } from './cultivation-area.service';
import { CreateCultivationAreaDto } from './dto/create-cultivation-area.dto';
import { UpdateCultivationAreaDto } from './dto/update-cultivation-area.dto';

@Controller('cultivation-area')
export class CultivationAreaController {
  constructor(private readonly cultivationAreaService: CultivationAreaService) {}

  @Post()
  create(@Body() createCultivationAreaDto: CreateCultivationAreaDto) {
    return this.cultivationAreaService.create(createCultivationAreaDto);
  }

  @Get()
  findAll() {
    return this.cultivationAreaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cultivationAreaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCultivationAreaDto: UpdateCultivationAreaDto) {
    return this.cultivationAreaService.update(+id, updateCultivationAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cultivationAreaService.remove(+id);
  }
}
