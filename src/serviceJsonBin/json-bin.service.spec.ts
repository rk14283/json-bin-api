import { Test, TestingModule } from '@nestjs/testing';
import { JsonBinService } from './json-bin.service';

describe('JsonBinService', () => {
  let service: JsonBinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JsonBinService],
    }).compile();

    service = module.get<JsonBinService>(JsonBinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
