import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CultivosService } from './cultivos.service';
import { Cultivos } from './entities/cultivo.entity';
import { CreateCultivoInput } from './dto/create-cultivo.input';
import { UpdateCultivoInput } from './dto/update-cultivo.input';

@Resolver(() => Cultivos)
export class CultivosResolver {
  constructor(private readonly cultivosService: CultivosService) {}

  @Mutation(() => Cultivos)
  createCultivo(@Args('createCultivoInput') createCultivoInput: CreateCultivoInput):
  Promise<Cultivos> {
    return this.cultivosService.create(createCultivoInput);
  }

  @Query(() => [Cultivos], { name: 'cultivos' })
  findAll():
  Promise<Cultivos[]> {
    return this.cultivosService.findAll();
  }

  @Query(() => Cultivos, { name: 'cultivo' })
  findOne(@Args('id', { type: () => Int }) id: string):
  Promise<Cultivos> {
    return this.cultivosService.findOne(id);
  }

  @Mutation(() => Cultivos)
  updateCultivo(@Args('updateCultivoInput') updateCultivoInput: UpdateCultivoInput):
  Promise<Cultivos> {
    return this.cultivosService.update(updateCultivoInput.id, updateCultivoInput);
  }

  @Mutation(() => Cultivos)
  removeCultivo(@Args('id', { type: () => Int }) id: string):
  Promise<Cultivos> {
    return this.cultivosService.remove(id);
  }
}
