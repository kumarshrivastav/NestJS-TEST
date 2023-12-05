import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { BookGuard } from './book/book.guard';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.useGlobalGuards(new BookGuard()) /* for the throughout the applications route*/
  await app.listen(3000);
}
bootstrap();
