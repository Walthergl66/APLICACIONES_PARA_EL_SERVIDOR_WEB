import { PartialType } from '@nestjs/mapped-types';
import { CreateZonaCultivoDto } from './create-zonacultivo.dto';

export class UpdateZonaCultivoDto extends PartialType(CreateZonaCultivoDto) {
  id: number;
}
