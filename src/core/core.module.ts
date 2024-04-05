import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ProductModule,
    AboutModule,
    ContactModule
  ],
  exports: [
    ProductModule,
    AboutModule,
    ContactModule
  ]
})
export class CoreModule {}
