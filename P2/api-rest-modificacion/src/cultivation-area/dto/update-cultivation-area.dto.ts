import { PartialType } from '@nestjs/mapped-types';
import { CreateCultivationAreaDto } from './create-cultivation-area.dto';

export class UpdateCultivationAreaDto extends PartialType(CreateCultivationAreaDto) {}
