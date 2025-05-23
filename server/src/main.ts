import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const dist = join(__dirname, '..', '..', 'client', 'dist', 'client', 'browser')
  app.useStaticAssets(dist);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
 