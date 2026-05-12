import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDTO } from './create-product.dto';
import { IsInt, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class UpdateProductDTO extends PartialType(CreateProductDTO) {
  @IsNotEmpty()
  @Length(10, 20)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}