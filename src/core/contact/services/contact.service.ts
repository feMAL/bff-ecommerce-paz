import { HttpException, Inject, Injectable } from "@nestjs/common";
import { config } from "../../../config/external-servers";
import { ConfigType } from "@nestjs/config";
import axios from "axios";
import { ContactResponseType } from "../responses/contact.response";
import { CreateContactMessageDTO } from "../dtos/contact.dto";

@Injectable()
export class ContactService {
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
      ) {}
    
    async sendContact( contactForm: CreateContactMessageDTO): Promise<ContactResponseType> {
        try {
            const { data } = await axios.post(
                `${this.appConfig.services.backend.url}/contact`,
                contactForm
            );
            return data;
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }
}