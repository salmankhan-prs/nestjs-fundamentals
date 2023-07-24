import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { LoggingIntercept } from './intercepartor/logger.intecepartor';
//test the differnce bewteen intecepator ,middleware pipes and Guards 
@Controller('testmidpipeinterceptorgurads')

@UseInterceptors(LoggingIntercept)
export class TestmidpipeinterceptorguradsController {


    @Get()
    sayHello() {
        return 'hello '
    }

}
