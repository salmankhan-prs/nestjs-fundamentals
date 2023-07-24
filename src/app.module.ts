import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatContoller } from './cats/cat.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
import { LoggerInFunction } from './loggerfunction.middleware';
import { ExceptionexampleModule } from './exceptionexample/exceptionexample.module';
import { TestguardsModule } from './testguards/testguards.module';
import { TestmidpipeinterceptorguradsModule } from './testmidpipeinterceptorgurads/testmidpipeinterceptorgurads.module';
import { AuthenticationMiddleware } from './testmidpipeinterceptorgurads/middleware/authentication.middleware';
import { RequestService } from './testmidpipeinterceptorgurads/request.service';

@Module({
  imports: [CatsModule, ExceptionexampleModule, TestguardsModule, TestmidpipeinterceptorguradsModule,],
  controllers: [AppController, CatContoller],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, LoggerInFunction).forRoutes('routes')
    consumer.apply(AuthenticationMiddleware).forRoutes('testmidpipeinterceptorgurads')
  }
}
