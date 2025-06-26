import { CreateZonaCultivoInput } from './create-zona-cultivo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdateZonaCultivoInput extends PartialType(CreateZonaCultivoInput) {
  
  @Field(() => ID)
  @IsUUID()
  id: string;
  
}
