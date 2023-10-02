import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsObject,
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

export class PostNestedObjectDto {
  @IsNotEmpty()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => NestedObject)
  nestedObject: NestedObject;
}
