import { IsUUID } from 'class-validator';
import { CreateCultivoInput } from './create-cultivo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCultivoInput extends PartialType(CreateCultivoInput) {
 
  @Field(() => ID)
  @IsUUID()
  id: string;
}
