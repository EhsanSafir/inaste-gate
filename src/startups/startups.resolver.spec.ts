import { Test, TestingModule } from '@nestjs/testing';
import { StartupsResolver } from './startups.resolver';
import { StartupsService } from './startups.service';

describe('StartupsResolver', () => {
  let resolver: StartupsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StartupsResolver, StartupsService],
    }).compile();

    resolver = module.get<StartupsResolver>(StartupsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
