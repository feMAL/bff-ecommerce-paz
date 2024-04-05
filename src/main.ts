import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig: AppConfigService = app.get<ConfigService>(ConfigService)['internalConfig']['app'];
  const port = parseInt(appConfig.port);

  app.setGlobalPrefix(`${appConfig.context}`);

  app.use(helmet({crossOriginResourcePolicy: false}))

  app.useGlobalPipes(
    new ValidationPipe({
      validatorPackage: require('@nestjs/class-validator'),
      transformerPackage: require('class-transformer'),
      whitelist: true,
      forbidUnknownValues: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  if (appConfig.corsEnabled) {
    app.enableCors({
      origin: appConfig.origins,
      allowedHeaders: `${appConfig.allowedHeaders}`,
      methods: `${appConfig.allowedMethods}`,
    });
  }

  if(appConfig.swaggerEnabled){
    const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('BFF Base Seed')
    .setDescription('Seed for any project with mongo')
    .setVersion('1.0')
    .addTag('bff-seed')
    .build();
  
    const document = SwaggerModule.createDocument(app, config,{
      ignoreGlobalPrefix: true,
    });
    SwaggerModule.setup(`${appConfig.context}/${appConfig.swaggerPath}`, app, document);  
  }

  await app.listen(port,() => {
    console.log(`App running on: http://localhost:${port}/${appConfig.context}`)
  });
}
bootstrap();