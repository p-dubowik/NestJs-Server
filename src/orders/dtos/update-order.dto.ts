import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDTO } from './create-order.dto';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateOrderDTO extends PartialType(CreateOrderDTO) {
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