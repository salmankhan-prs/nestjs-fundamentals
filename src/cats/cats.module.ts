import { Module } from '@nestjs/common';
import { CatContoller } from './cat.controller';
import { CatsService } from './cats.service';

@Module({
    controllers: [CatContoller],
    providers: [CatsService]
})
export class CatsModule { }
