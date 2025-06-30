import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ZonaCultivoService } from './zona-cultivo.service';
import { ZonaCultivo } from './entities/zona-cultivo.entity';
import { CreateZonaCultivoInput } from './dto/create-zona-cultivo.input';
import { UpdateZonaCultivoInput } from './dto/update-zona-cultivo.input';

@Resolver(() => ZonaCultivo)
export class ZonaCultivoResolver {
  constructor(private readonly zonaCultivoService: ZonaCultivoService) {}

  @Mutation(() => ZonaCultivo)
  createZonaCultivo(@Args('createZonaCultivoInput') createZonaCultivoInput: CreateZonaCultivoInput):
  Promise<ZonaCultivo> {
    return this.zonaCultivoService.create(createZonaCultivoInput);
  }

  @Query(() => [ZonaCultivo], { name: 'zonaCultivo' })
  findAll():
  Promise<ZonaCultivo[]> {
    return this.zonaCultivoService.findAll();
  }

  @Query(() => ZonaCultivo, { name: 'zonaCultivo' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.zonaCultivoService.findOne(id);
  }

  @Mutation(() => ZonaCultivo)
  updateZonaCultivo(@Args('updateZonaCultivoInput') updateZonaCultivoInput: UpdateZonaCultivoInput):
  Promise<ZonaCultivo> {
    return this.zonaCultivoService.update(updateZonaCultivoInput.id, updateZonaCultivoInput);
  }

  @Mutation(() => ZonaCultivo)
  removeZonaCultivo(@Args('id', { type: () => String}) id: string):
  Promise<ZonaCultivo> {
    return this.zonaCultivoService.remove(id);
  }
}
