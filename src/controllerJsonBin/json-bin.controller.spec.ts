import { Test, TestingModule } from '@nestjs/testing';
import { JsonBinController } from './json-bin.controller';

describe('JsonBinController', () => {
  let controller: JsonBinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JsonBinController],
    }).compile();

    controller = module.get<JsonBinController>(JsonBinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
