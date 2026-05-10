import {
  isNotEmpty,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateOrderDTO {
    @IsNotEmpty()
    @IsString()
    client: string;

    @IsNotEmpty()
    @IsUUID()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    address: string;
}