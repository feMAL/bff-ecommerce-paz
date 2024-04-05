import { HttpException, Inject, Injectable } from "@nestjs/common";
import { config } from "../../../config/external-servers";
import { ConfigType } from "@nestjs/config";
import { AboutResponseType } from "../responses/about.response";
import axios from "axios"

@Injectable()
export class AboutService {
    constructor(
        @Inject(config.KEY) private readonly appConfig: ConfigType<typeof config>,
      ) {}
    
    async getAbout(aboutID:string): Promise<AboutResponseType> {
        try {
            const { data } = await axios.get(
            `${this.appConfig.services.backend.url}/about/${aboutID}`
            );
            return data;
        } catch (error) {
            throw new HttpException(error.response.data, error.response.status);
        }
    }
}