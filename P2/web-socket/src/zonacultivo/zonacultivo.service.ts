import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateZonaCultivoDto } from './dto/create-zonacultivo.dto';
import { UpdateZonaCultivoDto } from './dto/update-zonacultivo.dto';
import { ZonaCultivo } from './entities/zonacultivo.entity';

@Injectable()
export class ZonacultivoService {
  constructor(
    @InjectRepository(ZonaCultivo)
    private readonly zonaCultivoRepository: Repository<ZonaCultivo>,
  ) {}

  async create(createZonaCultivoDto: CreateZonaCultivoDto): Promise<ZonaCultivo> {
    const nuevaZona = this.zonaCultivoRepository.create(createZonaCultivoDto);
    return await this.zonaCultivoRepository.save(nuevaZona);
  }

  async findAll(): Promise<ZonaCultivo[]> {
    return await this.zonaCultivoRepository.find();
  }

  async findOne(id: number): Promise<ZonaCultivo | null> {
    return await this.zonaCultivoRepository.findOneBy({ id });
  }

  async update(id: number, updateZonaCultivoDto: UpdateZonaCultivoDto): Promise<ZonaCultivo> {
    await this.zonaCultivoRepository.update(id, updateZonaCultivoDto);
    const updatedZona = await this.zonaCultivoRepository.findOneBy({ id });
    if (!updatedZona) {
      throw new Error(`ZonaCultivo with id ${id} not found`);
    }
    return updatedZona;
  }

  async remove(id: number): Promise<void> {
    await this.zonaCultivoRepository.delete(id);
  }
}
