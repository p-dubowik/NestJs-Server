import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateOrderDTO {
    @IsNotEmpty()
    @IsUUID()
    @IsString()
    clientId: string;

    @IsNotEmpty()
    @IsUUID()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    address: string;
}