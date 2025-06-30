import { Injectable } from '@nestjs/common';
import { CreateCultivoInput } from './dto/create-cultivo.input';
import { UpdateCultivoInput } from './dto/update-cultivo.input';
import { Cultivos } from './entities/cultivo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CultivosService {

  constructor(
    @InjectRepository(Cultivos)
    private readonly cultivosRepository: Repository<Cultivos>
  ){}

  async create(createCultivoInput: CreateCultivoInput): Promise<Cultivos> {
    const create = this.cultivosRepository.create({
    ...createCultivoInput,
    fechaSiembra: new Date(createCultivoInput.fechaSiembra),  // Convertir a Date
    fechaCosecha: new Date(createCultivoInput.fechaCosecha),  // Convertir a Date
    });

    return await this.cultivosRepository.save(create);
  }

  async findAll(): Promise<Cultivos[]> {
    return await this.cultivosRepository.find();
  }

  async findOne(id: string): Promise<Cultivos> {
    const cultivo = await this.cultivosRepository.findOneBy({id});
    if (!cultivo) {
      throw new Error(`Cultivo with id ${id} not found`);
    }
    return cultivo;
  }
  
   async update(id: string, updateCultivosInput: UpdateCultivoInput): Promise<Cultivos> {
      const update = await this.cultivosRepository.preload(updateCultivosInput);
      if (!update) {
        throw new Error("Ciudadano no encontrado")
      }
      return await this.cultivosRepository.save(update);
  }

  async remove(id: string): Promise<Cultivos>  {
    const removed = await this.cultivosRepository.findOne({where:{id}});
    if (!removed) {
      throw new Error ("Cultivo no encontrado")
    }
    await this.cultivosRepository.remove(removed)
    return {...removed, id};
  }
}
