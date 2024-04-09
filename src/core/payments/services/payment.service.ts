import { HttpException, Inject } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import axios from "axios";
import { config } from "../../../config/external-servers";
import { CreatePaymentOrderDTO } from "../dtos/payment.dto";

export class PaymentService {
    
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
    ){}

    async checkoutOrder( body: CreatePaymentOrderDTO): Promise<any> {
        try { 
            const { data } = await axios.post(
                `${this.appConfig.services.backend.url}/checkout`,body
            );
            return data
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }

}