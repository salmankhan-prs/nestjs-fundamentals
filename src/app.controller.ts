import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/bye/:name')
  getBye(@Param() param) {
    console.log({ param })
    return this.appService.getBye()
  }
}




