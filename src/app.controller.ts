import { Body, Controller, Post } from '@nestjs/common';
import { ArrayOfObjectsDto } from './dto/post-array-of-objects.dto';
import { PostArrayOfProductsDto } from './dto/post-array-of-products.dto';
import { PostArraysDto } from './dto/post-array.dto';
import { PosConditionalValidationDto } from './dto/post-conditional-validation.dto';
import { PostNestedObjectDto } from './dto/post-nested-object.dto';

@Controller()
export class AppController {
  @Post('/arrays')
  postArray(@Body() body: PostArraysDto): PostArraysDto {
    return body;
  }

  @Post('/nested')
  postNestedObject(@Body() body: PostNestedObjectDto): PostNestedObjectDto {
    return body;
  }

  @Post('/object-arrays')
  postArrayOfObjects(@Body() body: ArrayOfObjectsDto): ArrayOfObjectsDto {
    return body;
  }

  @Post('/conditional')
  postConditionalValidation(
    @Body() body: PosConditionalValidationDto,
  ): PosConditionalValidationDto {
    return body;
  }

  @Post('/products')
  postProducts(@Body() body: PostArrayOfProductsDto): PostArrayOfProductsDto {
    return body;
  }
}
