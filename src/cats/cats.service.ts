import { Injectable } from '@nestjs/common';



//providers can have scopes 
@Injectable()
export class CatsService {
    create(input: any) {
        return input
    }

    getAll() {
        return ['salman', 'khan', 'test']
    }

}
