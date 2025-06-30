import { Injectable } from '@nestjs/common';
import { CreateZonaCultivoInput } from './dto/create-zona-cultivo.input';
import { UpdateZonaCultivoInput } from './dto/update-zona-cultivo.input';
import { InjectRepository } from '@nestjs/typeorm';
import {  ZonaCultivo } from './entities/zona-cultivo.entity'
import { Repository } from 'typeorm';

@Injectable()
export class ZonaCultivoService {
  
  constructor(
    @InjectRepository(ZonaCultivo)
    private readonly zonaCultivoRepository: Repository<ZonaCultivo>
  ){}

  async create(CreateZonaCultivoInput: CreateZonaCultivoInput): Promise<ZonaCultivo> {
  
    const create= this.zonaCultivoRepository.create(CreateZonaCultivoInput);
    return await this.zonaCultivoRepository.save(create);
  
  }

  async findAll(): Promise<ZonaCultivo[]> {
    return await this.zonaCultivoRepository.find();
  }

  async findOne(id: string): Promise<ZonaCultivo> {
    const zonaCultivo = await this.zonaCultivoRepository.findOneBy({id});
    if (!zonaCultivo) {
      throw new Error(`ZonaCultivo with id ${id} not found`);
    }
    return zonaCultivo;
  }

  async update(id: string, updateZonaCultivoInput: UpdateZonaCultivoInput): Promise<ZonaCultivo> {
    const update = await this.zonaCultivoRepository.preload(updateZonaCultivoInput);
    if (!update) {
      throw new Error("ZonaCultivo no encontrado")
    }
    return await this.zonaCultivoRepository.save(update);
  }

  async remove(id: string): Promise<ZonaCultivo>  {
    const removed = await this.zonaCultivoRepository.findOne({where:{id}});
    if (!removed) {
      throw new Error ("ZonaCultivo no encontrado")
    }
    await this.zonaCultivoRepository.remove(removed)
    return { ...removed, id };
  }

}
