import { Module } from '@nestjs/common';
import { ProductModule } from './products/products.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { PaymentModule } from './payments/payment.module';

@Module({
  imports: [
    ProductModule,
    AboutModule,
    ContactModule,
    PaymentModule
  ],
  exports: [
    ProductModule,
    AboutModule,
    ContactModule,
    PaymentModule
  ]
})
export class CoreModule {}
