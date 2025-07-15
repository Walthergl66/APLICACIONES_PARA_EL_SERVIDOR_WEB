import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCultivoDto } from './dto/create-cultivo.dto';
import { UpdateCultivoDto } from './dto/update-cultivo.dto';
import { Cultivos } from './entities/cultivo.entity';

@Injectable()
export class CultivoService {
  constructor(
    @InjectRepository(Cultivos)
    private cultivoRepository: Repository<Cultivos>,
  ) {}

  async create(createCultivoDto: CreateCultivoDto): Promise<Cultivos> {
    const nuevoCultivo = this.cultivoRepository.create(createCultivoDto as any as Partial<Cultivos>);
    return await this.cultivoRepository.save(nuevoCultivo);
  }

  async findAll(): Promise<Cultivos[]> {
    return await this.cultivoRepository.find();
  }

  async findOne(id: string){
    return `This action return a #${id} cultivo`;
  }

  update(id: string, updateCultivoDto: UpdateCultivoDto) {
    return `This action updates a #${id} cultivo`;
  }

  remove(id: string) {
    return `This action removes a #${id} cultivo`;
  }
}
