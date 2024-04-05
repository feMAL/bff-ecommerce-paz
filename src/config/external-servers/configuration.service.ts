import { ConfigService } from "@nestjs/config";

export class ExtServicesConfigService {
    constructor(private dbConfig: ConfigService){}

}