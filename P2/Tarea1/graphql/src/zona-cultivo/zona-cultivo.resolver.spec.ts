import { Test, TestingModule } from '@nestjs/testing';
import { ZonaCultivoResolver } from './zona-cultivo.resolver';
import { ZonaCultivoService } from './zona-cultivo.service';

describe('ZonaCultivoResolver', () => {
  let resolver: ZonaCultivoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZonaCultivoResolver, ZonaCultivoService],
    }).compile();

    resolver = module.get<ZonaCultivoResolver>(ZonaCultivoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
