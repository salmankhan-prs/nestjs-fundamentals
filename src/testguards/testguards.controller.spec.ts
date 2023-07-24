import { Test, TestingModule } from '@nestjs/testing';
import { TestguardsController } from './testguards.controller';

describe('TestguardsController', () => {
  let controller: TestguardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestguardsController],
    }).compile();

    controller = module.get<TestguardsController>(TestguardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
