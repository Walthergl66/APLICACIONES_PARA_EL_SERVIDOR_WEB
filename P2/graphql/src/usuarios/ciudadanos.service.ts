import { Injectable } from '@nestjs/common';
import { CreateCiudadanoInput } from './dto/create-ciudadano.input';
import { UpdateCiudadanoInput } from './dto/update-ciudadano.input';
import { Repository } from 'typeorm';
import { Ciudadano } from './entities/ciudadano.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CiudadanosService {

  constructor(
    @InjectRepository(Ciudadano)
    private readonly ciudadanosRepository: Repository<Ciudadano>
  ){}

  async create(createCiudadanoInput: CreateCiudadanoInput): Promise<Ciudadano> {
  
    const create= this.ciudadanosRepository.create(createCiudadanoInput);
    return await this.ciudadanosRepository.save(create);
  
  }

  async findAll(): Promise<Ciudadano[]> {
    return await this.ciudadanosRepository.find();
  }

  async findOne(id: string): Promise<Ciudadano> {
    const ciudadano = await this.ciudadanosRepository.findOneBy({id});
    if (!ciudadano) {
      throw new Error(`Ciudadano with id ${id} not found`);
    }
    return ciudadano;
  }

  async update(id: string, updateCiudadanoInput: UpdateCiudadanoInput): Promise<Ciudadano> {
    const update = await this.ciudadanosRepository.preload(updateCiudadanoInput);
    if (!update) {
      throw new Error("Ciudadano no encontrado")
    }
    return await this.ciudadanosRepository.save(update);
  }

  async remove(id: string): Promise<Ciudadano>  {
    const removed = await this.ciudadanosRepository.findOne({where:{id}});
    if (!removed) {
      throw new Error ("Usuario no encontrado")
    }
    await this.ciudadanosRepository.remove(removed)
    return {...removed, id};
  }
}
