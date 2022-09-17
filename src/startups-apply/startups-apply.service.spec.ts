import { Test, TestingModule } from '@nestjs/testing';
import { StartupsApplyService } from './startups-apply.service';

describe('StartupsApplyService', () => {
  let service: StartupsApplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StartupsApplyService],
    }).compile();

    service = module.get<StartupsApplyService>(StartupsApplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
