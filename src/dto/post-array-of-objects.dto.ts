import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class NestedObject {
  @IsNotEmpty()
  @IsNumber()
  field: number;

  @IsNotEmpty()
  @IsString()
  field2: string;
}

export class ArrayOfObjectsDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => NestedObject)
  objectsCollection: NestedObject[];
}
