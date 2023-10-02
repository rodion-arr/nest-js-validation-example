import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

class Product {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}

class Fruit extends Product {
  @IsNotEmpty()
  @IsString()
  type = 'fruit';

  @IsNotEmpty()
  @IsString()
  someFruitField: string;
}

class Vegetable extends Product {
  @IsNotEmpty()
  @IsString()
  type = 'vegetable';

  @IsNotEmpty()
  @IsString()
  someVegetableField: string;
}

export class PostArrayOfProductsDto {
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => Product, {
    discriminator: {
      property: 'type',
      subTypes: [
        { value: Fruit, name: 'fruit' },
        { value: Vegetable, name: 'vegetable' },
      ],
    },
    keepDiscriminatorProperty: true,
  })
  products: (Fruit | Vegetable)[];
}
