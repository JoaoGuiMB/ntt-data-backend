import { NestFactory } from '@nestjs/core';
import { MovieModule } from './movie.module';

async function bootstrap() {
  const app = await NestFactory.create(MovieModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
