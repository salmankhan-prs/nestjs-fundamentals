import { Test, TestingModule } from '@nestjs/testing';
import { TestmidpipeinterceptorguradsController } from './testmidpipeinterceptorgurads.controller';

describe('TestmidpipeinterceptorguradsController', () => {
  let controller: TestmidpipeinterceptorguradsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestmidpipeinterceptorguradsController],
    }).compile();

    controller = module.get<TestmidpipeinterceptorguradsController>(TestmidpipeinterceptorguradsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
