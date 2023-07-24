import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Salman!';
  }

  getBye() {
    return "Bye salman"
  }
}
