import { Module } from '@nestjs/common';
import { TestguardsController } from './testguards.controller';

@Module({
  controllers: [TestguardsController]
})
export class TestguardsModule {}
