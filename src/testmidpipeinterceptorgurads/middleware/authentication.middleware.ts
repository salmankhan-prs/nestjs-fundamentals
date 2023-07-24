import { Injectable, NestMiddleware, Logger, Scope } from "@nestjs/common";
import { RequestService } from "../request.service";


@Injectable()

export class AuthenticationMiddleware implements NestMiddleware {
    private logger = new Logger(AuthenticationMiddleware.name)
    constructor(private requestService: RequestService) { }
    use(req: any, res: any, next: any) {
        //Authentication

        const userId = '28283'
        this.requestService.setUserId(userId)
        this.logger.log(` LOGGER IN MIDDLEWARE :NEST JS${this.requestService.getuserId()}`)
        next()
    }

}