import { Module } from '@nestjs/common';
import { TestmidpipeinterceptorguradsController } from './testmidpipeinterceptorgurads.controller';
import { LoggingIntercept } from './intercepartor/logger.intecepartor';
import { RequestService } from './request.service';

@Module({
  controllers: [TestmidpipeinterceptorguradsController],
  providers: [LoggingIntercept, RequestService],
  exports: [RequestService]
})
export class TestmidpipeinterceptorguradsModule { }
