import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionexampleService } from './exceptionexample.service';

describe('ExceptionexampleService', () => {
  let service: ExceptionexampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExceptionexampleService],
    }).compile();

    service = module.get<ExceptionexampleService>(ExceptionexampleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
