import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { useContainer } from "class-validator";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(3000);
  app.useGlobalPipes(
    new ValidationPipe({
    }),
  );
  useContainer(app.select(RootModule), { fallbackOnErrors: true });
}
bootstrap();
