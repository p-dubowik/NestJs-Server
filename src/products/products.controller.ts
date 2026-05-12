import { Controller, Delete, Get, Post, Put, Param, Body, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { ParseUUIDPipe } from '@nestjs/common';
import { UpdateProductDTO } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Get('/extended')
    getAllExtended(): any {
        return this.productsService.getAllExtended();
    }

    @Get('/extended/:id')
    async getByIdExtended(@Param('id', new ParseUUIDPipe()) id: string) {
        const product = await this.productsService.getByIdExtended(id);
        if (!product) throw new NotFoundException('Product not found');
        return product;
    }

    @Get('/')
    getAll(): any {
        return this.productsService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id', new ParseUUIDPipe()) id: string) {
        const product = await this.productsService.getById(id);
        if(!product) throw new NotFoundException('Product not found');
        return product;
    }

    @Delete('/:id')
    async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
        const product = await this.productsService.getById(id)
        if(!product) {
            throw new NotFoundException('Product not found');
        }
        await this.productsService.deleteById(id);
        return { success: true };
    }

    @Post('/')
    create(@Body() productData: CreateProductDTO) {
        return this.productsService.create(productData);
    }

    @Put('/:id')
    async updateById(@Param('id', new ParseUUIDPipe()) id: string, @Body() productData: UpdateProductDTO) {
        const product = await this.productsService.getById(id)
        if(!product) {
            throw new NotFoundException('Product not found');
        }

        await this.productsService.updateById(id, productData);
        return { success: true}
    }

}
