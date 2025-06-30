import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCultivationAreaDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  location!: string;

  @IsString()
  @IsNotEmpty()
  soilType!: string;

  @IsString()
  @IsNotEmpty()
  currentCrop!: string;
}
