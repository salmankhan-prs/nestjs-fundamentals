import { Controller, UseGuards, Get, SetMetadata } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('testguards')
export class TestguardsController {
    @Get()
    @SetMetadata('roles', ['admin'])
    @UseGuards(AuthGuard)
    testGuard() {
        console.log("jsjjjdj")
    }

}
