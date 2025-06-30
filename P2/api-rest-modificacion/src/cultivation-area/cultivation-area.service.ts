import { Injectable } from '@nestjs/common';
import { CreateCultivationAreaDto } from './dto/create-cultivation-area.dto';
import { UpdateCultivationAreaDto } from './dto/update-cultivation-area.dto';
import { CultivationArea } from './entities/cultivation-area.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CultivationAreaService {

  constructor(
@InjectRepository(CultivationArea)
    private cultivationAreaRepository: Repository<CultivationArea>,
) {}

  create(createCultivationAreaDto: CreateCultivationAreaDto) {
    const cultivationArea = this.cultivationAreaRepository.create(createCultivationAreaDto);
    return this.cultivationAreaRepository.save(cultivationArea);
  }

  findAll() {
    return this.cultivationAreaRepository.find();
  }
  

  findOne(id: number) {
    return this.cultivationAreaRepository.findOne({ where: { id } });
  }

  update(id: number, updateCultivationAreaDto: UpdateCultivationAreaDto) {
    const cultivationArea = this.cultivationAreaRepository.create(updateCultivationAreaDto);
    return this.cultivationAreaRepository.update(id, cultivationArea);
  }

  remove(id: number) {
    return this.cultivationAreaRepository.delete(id);
  }
}
