import { Module } from "@nestjs/common";
import { CheckoutService } from "./services/checkout.service";

@Module({
    controllers: [],
    providers: [ CheckoutService ]
})
export class CheckOutModule {}