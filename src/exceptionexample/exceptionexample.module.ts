import { Module } from '@nestjs/common';
import { ExceptionexampleController } from './exceptionexample.controller';
import { ExceptionexampleService } from './exceptionexample.service';

@Module({
  controllers: [ExceptionexampleController],
  providers: [ExceptionexampleService]
})
export class ExceptionexampleModule {}
