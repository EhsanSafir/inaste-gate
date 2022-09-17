import { Test, TestingModule } from '@nestjs/testing';
import { StartupsApplyResolver } from './startups-apply.resolver';
import { StartupsApplyService } from './startups-apply.service';

describe('StartupsApplyResolver', () => {
  let resolver: StartupsApplyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StartupsApplyResolver, StartupsApplyService],
    }).compile();

    resolver = module.get<StartupsApplyResolver>(StartupsApplyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
