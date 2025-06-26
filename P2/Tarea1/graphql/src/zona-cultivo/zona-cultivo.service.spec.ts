import { Test, TestingModule } from '@nestjs/testing';
import { ZonaCultivoService } from './zona-cultivo.service';

describe('ZonaCultivoService', () => {
  let service: ZonaCultivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZonaCultivoService],
    }).compile();

    service = module.get<ZonaCultivoService>(ZonaCultivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
