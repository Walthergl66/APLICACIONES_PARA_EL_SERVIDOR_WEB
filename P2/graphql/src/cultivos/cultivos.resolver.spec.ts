import { Test, TestingModule } from '@nestjs/testing';
import { CultivosResolver } from './cultivos.resolver';
import { CultivosService } from './cultivos.service';

describe('CultivosResolver', () => {
  let resolver: CultivosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CultivosResolver, CultivosService],
    }).compile();

    resolver = module.get<CultivosResolver>(CultivosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
