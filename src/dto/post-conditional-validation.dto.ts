import { IsNotEmpty, IsNumber, IsString, ValidateIf } from 'class-validator';

export class PosConditionalValidationDto {
  @IsNotEmpty()
  @IsNumber()
  field1: number;

  @IsNotEmpty()
  @IsString()
  @ValidateIf((request) => Number(request.field1) === 1)
  field2: string;
}
