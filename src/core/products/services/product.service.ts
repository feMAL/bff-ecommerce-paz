import { HttpException, Inject, Injectable } from "@nestjs/common";
import { config } from "../../../config/external-servers";
import { ConfigType } from "@nestjs/config";
import { ProductResponseType } from "../responses/product.response";
import axios from "axios"

@Injectable()
export class ProductService {
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
      ) {}
    
    async getAllProducts(): Promise<ProductResponseType> {
        try {
            const { data } = await axios.get(
            `${this.appConfig.services.backend.url}/patterns`
            );
            return data;
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }

    async getProduct(id: string): Promise<ProductResponseType> {
        try {
            const { data } = await axios.get(
            `${this.appConfig.services.backend.url}/patterns/${id}`
            );
            return data;
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }
}