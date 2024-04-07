import { HttpException, Inject } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import axios from "axios";
import { config } from "../../../config/external-servers";

export class CheckoutService {
    
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
    ){}

    async checkoutOrder(id: string, body: any): Promise<any> {
        try { 
            const { data } = await axios.post(
                `${this.appConfig.services.backend.url}/checkout/${id}`,
                body
            );
            return data
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }

}