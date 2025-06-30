import { Injectable } from '@nestjs/common';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-crop.dto';
import { Crop } from './entities/crop.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CropsService {

  constructor(
    @InjectRepository(Crop) 
    private cropsRepository: Repository<Crop>,

  ) {}

  create(createCropDto: CreateCropDto) {
    const crop = this.cropsRepository.create(createCropDto);
    return this.cropsRepository.save(crop);
  }

  findAll() {
    return this.cropsRepository.find();
  }

  findOne(id: number) {
    return this.cropsRepository.findOne({ where: { id } });
  }

  update(id: number, updateCropDto: UpdateCropDto) {
    const crops = this.cropsRepository.create(updateCropDto);
    return this.cropsRepository.update(id, crops);
  }

  remove(id: number) {
    return this.cropsRepository.delete(id);
  }
}
