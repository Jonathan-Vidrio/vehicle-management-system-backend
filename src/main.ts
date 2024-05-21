import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });
  await app.listen(configService.get<number>('PORT'));
}

bootstrap();
