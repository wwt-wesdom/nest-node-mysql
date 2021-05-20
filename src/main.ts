import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api'); // 开启代理配置，不然前端请求不到
  await app.listen(3000);
}
bootstrap();
