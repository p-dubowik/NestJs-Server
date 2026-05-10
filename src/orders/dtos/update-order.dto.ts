import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateOrderDTO {
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