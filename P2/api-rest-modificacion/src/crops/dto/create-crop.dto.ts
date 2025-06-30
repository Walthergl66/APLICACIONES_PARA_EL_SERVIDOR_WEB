import { Type } from "class-transformer";
import {IsDate, IsNotEmpty, IsString} from "class-validator";

export class CreateCropDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  cropType: string;

  @IsString()
  cultivationArea: string;

  @IsDate()
  @Type(() => Date)
  plantingDate: Date;
}
