import { HttpException, Inject, Injectable } from "@nestjs/common";
import { config } from "../../../config/external-servers";
import { ConfigType } from "@nestjs/config";
import { ProductFormatedReponseType, ProductResponseType } from "../responses/product.response";
import axios from "axios"
import { ProductUtils } from "../utils/product.utils";

@Injectable()
export class ProductService {
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
        private readonly productUtils: ProductUtils
      ) {}
    
    async getAllProducts(): Promise<ProductFormatedReponseType[]> {
        try { 
            const { data } = await axios.get<ProductResponseType[]>(
            `${this.appConfig.services.backend.url}/patterns`
            );
            return this.productUtils.formatProducts(data);
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