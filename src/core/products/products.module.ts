import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { ProductUtils } from './utils/product.utils';

@Module({
    controllers: [ProductController],
    providers: [
        ProductService,
        ProductUtils
    ]
})
export class ProductModule {}
