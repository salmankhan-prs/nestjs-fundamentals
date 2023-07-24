import { HttpException, HttpStatus } from '@nestjs/common'

export class ForbiddenExcepion extends HttpException {


    constructor() {
        super('FOrbidden', HttpStatus.FORBIDDEN)
    }
}