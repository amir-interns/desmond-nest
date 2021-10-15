import { Test, TestingModule } from '@nestjs/testing';
import { EtheriumService } from './etherium.service';

describe('EtheriumService', () => {
  let service: EtheriumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtheriumService],
    }).compile();

    service = module.get<EtheriumService>(EtheriumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
