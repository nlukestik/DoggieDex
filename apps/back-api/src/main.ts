import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
// import { AppModule } from './app.module';
import { DogsModule } from './dogs/dogs.module';

config();

async function bootstrap() {
  const app = await NestFactory.create(DogsModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
