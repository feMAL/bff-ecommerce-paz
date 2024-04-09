import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreatePaymentOrderDTO } from "../dtos/payment.dto";
import { PaymentService } from "../services/payment.service";

@Controller('payment')
@ApiTags('Payment')
export class PaymentController {

    constructor(
        private readonly paymentService: PaymentService
    ){}

    @Post('')
    @ApiOperation({ description: 'Get Contact Me' })
    @HttpCode(200)
    @ApiResponse({
        status: 200,
        description: 'Information requested',
        type: CreatePaymentOrderDTO,
        isArray: false,
    })
    async createPayment ( @Body() body: CreatePaymentOrderDTO ) {
        return this.paymentService.checkoutOrder( body)
    }
}