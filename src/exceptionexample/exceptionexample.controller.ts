import { Controller, Get, HttpException, HttpStatus, UseFilters, ParseIntPipe, Param } from '@nestjs/common';
import { ForbiddenExcepion } from './forbidden.exception';
import { HttpExceptionFilter } from './cutom-http-exception';

@Controller('exceptionexample')
export class ExceptionexampleController {

    @Get()
    getAllOne() {
        throw new HttpException('test the exceptions', HttpStatus.FORBIDDEN)
    }

    // {
    //     "statusCode": 403,
    //     "message": "test the exceptions"
    // }


    @Get('/two')
    getAllTwo() {
        throw new HttpException({ status: HttpStatus.FORBIDDEN, error: 'this is custom message ', test: 'exta arameter' }, HttpStatus.FORBIDDEN, { cause: "error" })
    }


    @Get('/three')
    getAllthree() {
        throw new ForbiddenExcepion()
    }

    @Get('/four')
    @UseFilters(HttpExceptionFilter)//we can directly apply to calss []recommende 
    getAllFour() {
        throw new ForbiddenExcepion()
    }

    //PIPES EXAMPLE::::



    @Get('/five/:id')
    getAllFive(@Param('id', ParseIntPipe) id: number) {
        return id
    }


}
