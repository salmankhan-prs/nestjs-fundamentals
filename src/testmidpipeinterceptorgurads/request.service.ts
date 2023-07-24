import { Injectable, Scope } from '@nestjs/common'



////FIXME: 
@Injectable()
export class RequestService {


    private userId: string
    setUserId(userId: string) {
        this.userId = userId

    }
    getuserId() {
        console.log("USER ID ::: INVOKED ", this.userId)
        return this.userId
    }
}