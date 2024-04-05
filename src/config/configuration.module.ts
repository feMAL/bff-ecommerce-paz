import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

import { environments } from "./environments";
import { validationSchema } from "./configuration.validation";

import { AppConfigService } from "./app/configuration.service"

import AppConfig from './app/configuration';
import ExtConfig from './external-servers/configuration';
import { ExtServicesConfigService } from "./external-servers/configuration.service";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: environments[`${process.env.NODE_ENV}`],
            ignoreEnvFile: process.env.NODE_ENV === 'production' || false,
            load: [
                AppConfig,
                ExtConfig
            ],
            isGlobal: true,
            validationSchema
        })
    ],
    providers: [
        ConfigService,
        AppConfigService,
        ExtServicesConfigService
    ],
    exports: [
        ConfigService,
        AppConfigService,
        ExtServicesConfigService
    ]
})
export class  ConfigurationModule {}