import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty } from 'class-validator';

export class PostArraysDto {
  @IsNotEmpty()
  @ArrayNotEmpty()
  @IsArray()
  @IsInt({ each: true })
  array: number[];
}
