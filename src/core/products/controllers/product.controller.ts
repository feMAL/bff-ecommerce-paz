import { Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProductService } from "../services/product.service";
import { ProductResponseType } from "../responses/product.response";

@ApiTags('Products')
@Controller('products')
export class ProductController {
    constructor (
        private productService: ProductService
    ) {}

    @Get()
    @ApiOperation({ description: 'Get all products' })
    @HttpCode(200)
    @ApiResponse({
        status: 200,
        description: 'Information requested',
        type: ProductResponseType,
        isArray: false,
    })
    async getProducts(): Promise<ProductResponseType> {
        return await this.productService.getAllProducts();
      }

    @Get(':productID')
    @ApiOperation({ description: 'Get a products by ID' })
    @HttpCode(200)
    @ApiResponse({
        status: 200,
        description: 'Information requested',
        type: ProductResponseType,
        isArray: false,
    })
    async getProduct( @Param('productID') productID: string): Promise<ProductResponseType> {
        return await this.productService.getProduct(productID);
    }
}