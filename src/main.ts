import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);// an application object 
  await app.listen(3000);
}
bootstrap();



//TO make development fast we can use npm run start -- -b swc.
//npm run lint 

//npm run format[prettier]