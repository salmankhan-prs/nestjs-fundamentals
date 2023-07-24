import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionexampleController } from './exceptionexample.controller';

describe('ExceptionexampleController', () => {
  let controller: ExceptionexampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExceptionexampleController],
    }).compile();

    controller = module.get<ExceptionexampleController>(ExceptionexampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
